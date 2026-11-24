import fs from "node:fs/promises";
import assert from "node:assert/strict";

const manifest = JSON.parse(await fs.readFile("audit/batch-091-25-candidate-manifest.json", "utf8"));
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
function csvAddress(r) {
  const first = [clean(r.NUMBER), clean(r.STREET1)].filter(Boolean).join(" ");
  return [first, clean(r.STREET2), clean(r.TOWN), "County Dublin", "Ireland"].filter(Boolean).join(", ");
}

assert.equal(manifest.batch, "091");
assert.equal(manifest.target_count, 25);
assert.equal(manifest.candidates.length, 25, "Pilot must contain exactly 25 candidates.");
assert.equal(new Set(manifest.candidates.map(x => x.registration)).size, 25, "Candidate registrations must be unique.");
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
const proximity = [];
const candidateProximity = [];
const pageHolds = [];
const sourceAnomalies = [];
const selectedRows = [];

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
    pageHolds.push({ registration: c.registration, reason: "Canonical individual NIAH page not independently verified; legacy URL only.", url: c.official_page });
  }

  const csvName = clean(row.NAME), csvNumber = clean(row.NUMBER);
  if (Object.values(row).some(value => String(value ?? "").includes("\uFFFD"))) {
    sourceAnomalies.push({ registration: c.registration, issue: "Official national CSV row contains U+FFFD replacement character; preserve raw source values and use only individually verified transcription for display.", csv_name: csvName, csv_number: csvNumber });
  }
  if (c.notes) sourceAnomalies.push({ registration: c.registration, issue: c.notes, csv_name: csvName, csv_number: csvNumber });

  const candidateAddressKey = addressKey(c.display_address);
  const candidateNameKey = norm(c.display_name);

  if (objects.some(x => clean(x.national_inventory_reference) === c.registration) ||
      publicNiah.some(x => clean(x.national_inventory_reference) === c.registration)) {
    exactRegistrationMatches.push({ registration: c.registration });
  }
  for (const x of objects) {
    if (x.address && addressKey(x.address) === candidateAddressKey) {
      exactAddressMatches.push({ registration: c.registration, archive_id: x.id, name: x.name, address: x.address });
    }
    if (x.name && norm(x.name) === candidateNameKey) {
      exactNameMatches.push({ registration: c.registration, archive_id: x.id, name: x.name, address: x.address ?? null });
    }
    if (typeof x.latitude === "number" && typeof x.longitude === "number") {
      const metres = distance(lat, lon, x.latitude, x.longitude);
      if (metres <= 30) proximity.push({ registration: c.registration, archive_id: x.id, name: x.name, address: x.address ?? null, distance_m: Math.round(metres * 10) / 10 });
    }
  }
  if (sources.some(x => x.id === "NIAH-" + c.registration)) sourceIdMatches.push({ registration: c.registration, source_id: "NIAH-" + c.registration });
  selectedRows.push({ registration: c.registration, display_name: c.display_name, display_address: c.display_address, csv_address: csvAddress(row), latitude: lat, longitude: lon, itm_e: itmE, itm_n: itmN, page_verified: c.page_verified });
}

for (let i = 0; i < selectedRows.length; i++) {
  for (let j = i + 1; j < selectedRows.length; j++) {
    const a = selectedRows[i], b = selectedRows[j];
    const metres = distance(a.latitude, a.longitude, b.latitude, b.longitude);
    if (metres <= 30) candidateProximity.push({ registration: a.registration, related_registration: b.registration, distance_m: Math.round(metres * 10) / 10 });
  }
}

const blocking = [
  ...exactRegistrationMatches.map(x => ({ type: "exact_registration", ...x })),
  ...exactAddressMatches.map(x => ({ type: "exact_address", ...x })),
  ...sourceIdMatches.map(x => ({ type: "source_id", ...x }))
];
const needsReview = exactNameMatches.length > 0 || proximity.length > 0 || candidateProximity.length > 0 || pageHolds.length > 0 || sourceAnomalies.length > 0;
const report = {
  batch: "091",
  title: manifest.title,
  generated_at: new Date().toISOString(),
  decision: blocking.length ? "HOLD" : needsReview ? "READY_FOR_MANUAL_REVIEW_WITH_HELD_ITEMS" : "READY_FOR_MANUAL_REVIEW",
  queue: { entries: queue.length, selected_count: selectedRows.length, selected_registrations: selectedRows.map(x => x.registration), all_selected_once: true, authority: "Dublin City Council", county: "DUBLIN" },
  catalogues: { master_object_count: objects.length, public_niah_count: publicNiah.length, source_count: sources.length, visual_record_count: visual.records.length },
  duplicate_screen: { exact_registration_matches: exactRegistrationMatches, exact_address_matches: exactAddressMatches, exact_name_matches: exactNameMatches, source_id_matches: sourceIdMatches },
  coordinate_proximity_review: proximity.sort((a,b) => a.registration.localeCompare(b.registration) || a.distance_m - b.distance_m),
  candidate_to_candidate_proximity: candidateProximity,
  page_holds: pageHolds,
  source_anomalies: sourceAnomalies,
  safeguards: [
    "The 25 candidates were selected by exact membership in the refreshed official four-authority missing-registration queue.",
    "Registration 50010259 was excluded because its official queue row assigns it to South Dublin County Council.",
    "An unverified individual page remains held; queue membership alone is not individual-page verification.",
    "Official CSV WGS84 and ITM coordinates are preserved as source-derived values and are not founder GPS or field verification.",
    "Raw CSV NAME and NUMBER values are never overwritten by page-title display headings.",
    "This pilot creates no permanent archive IDs, production records, source records, visual records, map pins or SEO pages."
  ]
};
await fs.writeFile("audit/batch-091-25-candidate-reconciliation.json", JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({ decision: report.decision, queue: report.queue, catalogues: report.catalogues, duplicates: report.duplicate_screen, nearby_existing: proximity.length, nearby_candidates: candidateProximity.length, page_holds: pageHolds.length, source_anomalies: sourceAnomalies.length }, null, 2));
if (blocking.length) throw new Error("Batch 091 contains blocking exact registration/address/source-ID conflicts; see reconciliation report.");
