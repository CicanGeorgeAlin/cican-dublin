import fs from "node:fs/promises";
import assert from "node:assert/strict";

const manifest = JSON.parse(await fs.readFile("audit/batch-102-50-candidate-manifest.json", "utf8"));
const queue = JSON.parse(await fs.readFile("audit/niah-dublin-missing-registrations.json", "utf8"));
const objects = JSON.parse(await fs.readFile("data/objects.json", "utf8"));
const publicNiah = JSON.parse(await fs.readFile("data/niah-registered-objects.json", "utf8"));
const sources = JSON.parse(await fs.readFile("data/sources.json", "utf8"));
const visual = JSON.parse(await fs.readFile("data/visual-assets.json", "utf8"));

const clean = v => String(v ?? "").trim();
const norm = v => clean(v).normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
const addressKey = v => norm(v).replace(/countydublin/g, "").replace(/ireland/g, "");
const radians = x => x * Math.PI / 180;
function distance(a, b, c, d) {
  const R = 6371000, dl = radians(c - a), dn = radians(d - b);
  const h = Math.sin(dl / 2) ** 2 + Math.cos(radians(a)) * Math.cos(radians(c)) * Math.sin(dn / 2) ** 2;
  return 2 * R * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

assert.equal(manifest.batch, "102");
assert.equal(manifest.target_count, 50);
assert.equal(manifest.candidates.length, 50, "Normal batch must contain exactly 50 candidates.");
assert.equal(new Set(manifest.candidates.map(x => x.registration)).size, 50, "Candidate registrations must be unique.");
assert.ok(Array.isArray(queue) && Array.isArray(objects) && Array.isArray(publicNiah) && Array.isArray(sources) && Array.isArray(visual.records));

const queueByReg = new Map();
for (const row of queue) {
  const reg = clean(row.REG_NO);
  if (!queueByReg.has(reg)) queueByReg.set(reg, []);
  queueByReg.get(reg).push(row);
}

const exactRegistrationMatches = [];
const exactAddressMatches = [];
const exactNameMatches = [];
const sourceIdMatches = [];
const sameBatchAddressMatches = [];
const sameBatchNameMatches = [];
const proximity = [];
const candidateProximity = [];
const pageHolds = [];
const sourceAnomalies = [];
const selectedRows = [];
const documentedAddressRelationships = [];
const documentedArchiveAddressRelationships = [];
const blocking = [];

for (const c of manifest.candidates) {
  const hits = queueByReg.get(c.registration) || [];
  assert.equal(hits.length, 1, c.registration + " must occur exactly once in the refreshed official missing-registration queue.");
  const row = hits[0];
  assert.equal(clean(row["LOCAL_AUTHORITY�"]), "Dublin City Council", c.registration + " is not a Dublin City Council queue record.");
  assert.equal(clean(row.COUNTY).toUpperCase(), "DUBLIN", c.registration + " is not in County Dublin.");
  assert.equal(c.registration, clean(row.REG_NO));
  const lat = Number(row.LATITUDE), lon = Number(row.LONGITUDE), itmE = Number(row.ITM_E), itmN = Number(row.ITM_N);
  assert.ok([lat, lon, itmE, itmN].every(Number.isFinite), c.registration + " has invalid official coordinates.");
  assert.ok(lat >= 51 && lat <= 56 && lon >= -11 && lon <= -5, c.registration + " WGS84 coordinates fall outside Ireland bounds.");
  assert.ok(itmE > 0 && itmN > 0, c.registration + " has invalid ITM coordinates.");

  const url = new URL(c.official_page);
  assert.equal(url.protocol, "https:");
  assert.equal(url.hostname, "www.buildingsofireland.ie");
  if (c.page_verified) {
    assert.ok(url.pathname.includes("/buildings-search/building/" + c.registration + "/"), c.registration + " verified URL must be the canonical individual NIAH page.");
  } else {
    pageHolds.push({ registration: c.registration, reason: "Canonical individual NIAH page not independently verified.", url: c.official_page, supplementary_source: c.supplementary_source ?? null });
  }

  const csvName = clean(row.NAME), csvNumber = clean(row.NUMBER);
  const numberIsDateLike = /^(?:\d{1,2}[-/](?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[-/]\d{1,2})$/i.test(csvNumber);
  const displayNumber = numberIsDateLike ? "" : csvNumber;
  const streetCore = [displayNumber, clean(row.STREET1)].filter(Boolean).join(" ");
  const locality = clean(row.TOWN) || "Dublin";
  const displayAddress = c.display_address || [streetCore, clean(row.STREET2), locality, "Ireland"].filter(Boolean).join(", ");
  const displayName = c.display_name || (csvName && !csvName.includes("\uFFFD") ? csvName : (streetCore || ("NIAH registration " + c.registration)));
  if (Object.values(row).some(value => String(value ?? "").includes("\uFFFD"))) {
    sourceAnomalies.push({ registration: c.registration, issue: "Official national CSV values contain U+FFFD replacement characters; preserve raw values and use only individually verified transcription for display.", csv_name: csvName, csv_number: csvNumber });
  }
  if (!csvName) {
    sourceAnomalies.push({ registration: c.registration, issue: "National CSV NAME is blank; preserve it as blank and use the official individual page title separately for the display heading.", csv_name: csvName, csv_number: csvNumber });
  }
  if (/^(?:\d{1,2}[-/](?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[-/]\d{1,2})$/i.test(csvNumber)) {
    sourceAnomalies.push({ registration: c.registration, issue: "National CSV NUMBER is date-like/malformed; preserve it verbatim and use the official page address separately.", csv_name: csvName, csv_number: csvNumber });
  }
  if (c.notes) sourceAnomalies.push({ registration: c.registration, issue: c.notes, csv_name: csvName, csv_number: csvNumber });

  const candidateAddressKey = addressKey(displayAddress);
  const candidateNameKey = norm(displayName);

  if (objects.some(x => clean(x.national_inventory_reference) === c.registration) ||
      publicNiah.some(x => clean(x.national_inventory_reference) === c.registration)) {
    const hit = { registration: c.registration };
    exactRegistrationMatches.push(hit); blocking.push({ type: "exact_registration", ...hit });
  }
  for (const x of objects) {
    if (x.address && addressKey(x.address) === candidateAddressKey) {
      const hit = { registration: c.registration, archive_id: x.id, name: x.name, address: x.address };
      if ((c.known_distinct_archive_ids ?? []).includes(x.id)) {
        documentedArchiveAddressRelationships.push({ ...hit, relationship: c.distinct_archive_reason || "Explicitly documented distinct archive object; see batch review." });
      } else {
        exactAddressMatches.push(hit); blocking.push({ type: "exact_address", ...hit });
      }
    }
    if (x.name && norm(x.name) === candidateNameKey) exactNameMatches.push({ registration: c.registration, archive_id: x.id, name: x.name, address: x.address ?? null });
    if (typeof x.latitude === "number" && typeof x.longitude === "number") {
      const metres = distance(lat, lon, x.latitude, x.longitude);
      if (metres <= 30) proximity.push({ registration: c.registration, archive_id: x.id, name: x.name, address: x.address ?? null, distance_m: Math.round(metres * 10) / 10 });
    }
  }
  if (sources.some(x => x.id === "NIAH-" + c.registration)) {
    const hit = { registration: c.registration, source_id: "NIAH-" + c.registration };
    sourceIdMatches.push(hit); blocking.push({ type: "source_id", ...hit });
  }
  selectedRows.push({ registration: c.registration, display_name: displayName, display_address: displayAddress, source_name_raw: row.NAME ?? "", source_number_raw: row.NUMBER ?? "", source_street1_raw: row.STREET1 ?? "", source_street2_raw: row.STREET2 ?? "", address_key: candidateAddressKey, name_key: candidateNameKey, latitude: lat, longitude: lon, itm_e: itmE, itm_n: itmN, page_verified: c.page_verified, known_distinct_neighbours: c.known_distinct_neighbours ?? [], distinct_neighbour_reason: c.distinct_neighbour_reason ?? null, known_distinct_archive_ids: c.known_distinct_archive_ids ?? [], distinct_archive_reason: c.distinct_archive_reason ?? null });
}

for (let i = 0; i < selectedRows.length; i++) {
  for (let j = i + 1; j < selectedRows.length; j++) {
    const a = selectedRows[i], b = selectedRows[j];
    const metres = distance(a.latitude, a.longitude, b.latitude, b.longitude);
    if (metres <= 30) candidateProximity.push({ registration: a.registration, related_registration: b.registration, distance_m: Math.round(metres * 10) / 10 });
    if (a.address_key === b.address_key) {
      const known = a.known_distinct_neighbours.includes(b.registration) && b.known_distinct_neighbours.includes(a.registration);
      if (known) documentedAddressRelationships.push({ registration: a.registration, related_registration: b.registration, address: a.display_address, relationship: a.distinct_neighbour_reason || b.distinct_neighbour_reason || "Separately registered structures; see the batch review document." });
      else {
        const hit = { registration: a.registration, related_registration: b.registration, address: a.display_address };
        sameBatchAddressMatches.push(hit); blocking.push({ type: "same_batch_address", ...hit });
      }
    }
    if (a.name_key && a.name_key === b.name_key && a.address_key !== b.address_key) sameBatchNameMatches.push({ registration: a.registration, related_registration: b.registration, name: a.display_name });
  }
}

const report = {
  batch: "102",
  title: manifest.title,
  generated_at: new Date().toISOString(),
  decision: blocking.length ? "HOLD" : (pageHolds.length || proximity.length || candidateProximity.length || sourceAnomalies.length) ? "READY_FOR_MANUAL_REVIEW_WITH_HELD_ITEMS" : "READY_FOR_MANUAL_REVIEW",
  queue: { entries: queue.length, selected_count: selectedRows.length, selected_registrations: selectedRows.map(x => x.registration), all_selected_once: true, authority: "Dublin City Council", county: "DUBLIN" },
  catalogues: { master_object_count: objects.length, public_niah_count: publicNiah.length, source_count: sources.length, visual_record_count: visual.records.length },
  duplicate_screen: { exact_registration_matches: exactRegistrationMatches, exact_address_matches: exactAddressMatches, exact_name_matches: exactNameMatches, source_id_matches: sourceIdMatches, same_batch_address_matches: sameBatchAddressMatches, same_batch_name_matches: sameBatchNameMatches },
  documented_address_relationships: documentedAddressRelationships,
  documented_archive_address_relationships: documentedArchiveAddressRelationships,
  coordinate_proximity_review: proximity.sort((a,b) => a.registration.localeCompare(b.registration) || a.distance_m - b.distance_m),
  candidate_to_candidate_proximity: candidateProximity,
  page_holds: pageHolds,
  source_anomalies: sourceAnomalies,
  blocking_conflicts: blocking,
  safeguards: [
    "Exactly 50 unique candidates are selected by exact membership in the refreshed official four-authority missing-registration queue.",
    "The four page-unverified records remain held and are not eligible for publication.",
    "No shared-address exception is applied in this batch; any unexplained same-batch exact address conflict blocks the batch.",
    "All exact registration, address, source-ID and unexplained same-batch address conflicts block the batch.",
    "Exact-name matches and 30-metre proximity findings remain visible for manual review; proximity alone is not a duplicate.",
    "Official CSV WGS84 and ITM coordinates remain source-derived, not founder GPS or field verification.",
    "Raw CSV NAME and NUMBER values are preserved verbatim; page-title display headings are separate.",
    "This batch creates no permanent archive IDs, production records, source records, visual records, map pins or SEO pages."
  ]
};
await fs.writeFile("audit/batch-102-50-candidate-reconciliation.json", JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({ decision: report.decision, queue: report.queue, catalogues: report.catalogues, duplicates: report.duplicate_screen, documented_address_relationships: documentedAddressRelationships, documented_archive_address_relationships: documentedArchiveAddressRelationships, existing_proximity: proximity.length, candidate_proximity: candidateProximity.length, page_holds: pageHolds.length, source_anomalies: sourceAnomalies.length, blocking_conflicts: blocking.length }, null, 2));
if (blocking.length) throw new Error("Batch 102 contains blocking exact duplicate/provenance conflicts; see reconciliation report.");
