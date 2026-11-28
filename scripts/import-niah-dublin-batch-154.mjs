import fs from "node:fs/promises";

const BATCH = "154";
const DATE = "2026-11-28";
const AUTHORITIES = [
  "Dublin City Council",
  "Fingal County Council",
  "South Dublin County Council",
  "Dún Laoghaire-Rathdown County Council"
];
const readJson = async path => JSON.parse(await fs.readFile(path, "utf8"));
const writeJson = async (path, value) => fs.writeFile(path, JSON.stringify(value, null, 2) + "\n");
const clean = value => String(value ?? "").trim();
const normal = value => clean(value).toLocaleLowerCase("en-IE").replace(/[^a-z0-9]+/g, " ").trim();
const unique = values => new Set(values);
const titleType = value => clean(value).replace(/(^|[\s/])([a-z])/g, (_, a, b) => a + b.toUpperCase());

function categoryFor(type) {
  const t = normal(type);
  if (t === "monument") return "MONUMENT";
  if (/railway station|station master|goods shed|crane/.test(t)) return "TRANSPORT_HERITAGE";
  if (/bridge|dam|reservoir|basin|water tower|weir|water pump|harbour|dock|port|lighthouse/.test(t)) return "INFRASTRUCTURE";
  if (/gates|railings|walls|walled garden/.test(t)) return "LANDSCAPE";
  return "ARCHITECTURE";
}
function prefixFor(category) {
  return ({ ARCHITECTURE: "BLD", INFRASTRUCTURE: "INF", TRANSPORT_HERITAGE: "INF", LANDSCAPE: "LND", MONUMENT: "MON" })[category] || "BLD";
}
function districtFor(row) {
  const town = clean(row.TOWN);
  const townland = clean(row.TOWNLAND);
  if (town && /^dublin\s+\d+$/i.test(town)) return town;
  if (town && !/^dublin$/i.test(town)) return town + ", County Dublin";
  if (townland) return townland + ", County Dublin";
  if (town) return "Dublin City, County Dublin";
  return clean(row["LOCAL_AUTHORITY�"]) + " (area not specified)";
}
function addressFor(row) {
  const parts = [];
  const number = clean(row.NUMBER);
  const street1 = clean(row.STREET1);
  const street2 = clean(row.STREET2);
  const town = clean(row.TOWN);
  const townland = clean(row.TOWNLAND);
  const first = [number, street1].filter(Boolean).join(" ");
  if (first) parts.push(first);
  for (const value of [street2, town, townland, "County Dublin", "Ireland"]) {
    if (value && !parts.some(p => normal(p) === normal(value))) parts.push(value);
  }
  return parts.join(", ");
}
function dateRange(row) {
  const from = clean(row.DATEFROM), to = clean(row.DATETO);
  return from && to && from !== to ? from + "–" + to : from || to || "Date not stated in CSV";
}
function validCandidate(row) {
  const required = ["REG_NO","NAME","ORIGINAL_TYPE","DESCRIPTION","DATEFROM","DATETO","RATING","ITM_E","ITM_N","LATITUDE","LONGITUDE","WEBSITE_LINK","COUNTY","LOCAL_AUTHORITY�"];
  if (required.some(k => !clean(row[k]))) return false;
  if (required.some(k => clean(row[k]).includes("�"))) return false;
  if (!/^\d{8}$/.test(clean(row.REG_NO))) return false;
  if (clean(row.COUNTY).toUpperCase() !== "DUBLIN") return false;
  if (!AUTHORITIES.includes(clean(row["LOCAL_AUTHORITY�"]))) return false;
  const lat = Number(row.LATITUDE), lon = Number(row.LONGITUDE), e = Number(row.ITM_E), n = Number(row.ITM_N);
  if (![lat,lon,e,n].every(Number.isFinite)) return false;
  if (lat < 51 || lat > 56 || lon < -11 || lon > -5 || e <= 0 || e > 900000 || n <= 0 || n > 900000) return false;
  try {
    const url = new URL(clean(row.WEBSITE_LINK));
    if (url.protocol !== "https:" || url.hostname !== "www.buildingsofireland.ie" || url.searchParams.get("regno") !== clean(row.REG_NO)) return false;
  } catch { return false; }
  return true;
}

const marker = "audit/niah-batch-154-imported.json";
try {
  await fs.access(marker);
  throw new Error("Batch 154 import marker already exists. Refusing to import or select another batch on a rerun.");
} catch (error) {
  if (error.message.includes("already exists")) throw error;
}

const [queue, objects, publicObjects, sources, visualData, coverage] = await Promise.all([
  readJson("audit/niah-dublin-missing-registrations.json"),
  readJson("data/objects.json"),
  readJson("data/niah-registered-objects.json"),
  readJson("data/sources.json"),
  readJson("data/visual-assets.json"),
  readJson("data/coverage-audit.json")
]);

const alreadyPublished = new Set([
  ...objects.flatMap(item => clean(item.national_inventory_reference).match(/\b\d{8}\b/g) || []),
  ...publicObjects.map(item => clean(item.national_inventory_reference))
]);
// Select fairly across all four Dublin local authorities rather than consuming
// the queue's registration-number sort order (which had overrepresented Dublin City).
const eligibleByAuthority = new Map(AUTHORITIES.map(authority => [authority, []]));
for (const row of queue) {
  const reg = clean(row.REG_NO);
  const authority = clean(row["LOCAL_AUTHORITY�"]);
  if (!validCandidate(row) || alreadyPublished.has(reg) || !eligibleByAuthority.has(authority)) continue;
  eligibleByAuthority.get(authority).push(row);
}
const diagnostic = Object.fromEntries(AUTHORITIES.map(authority => [authority, { queue_rows: 0, already_published: 0, valid_candidates: 0, missing_required: {}, invalid_link: 0, invalid_coordinates: 0 }]));
for (const row of queue) {
  const authority = clean(row["LOCAL_AUTHORITY�"]);
  if (!diagnostic[authority]) continue;
  const d = diagnostic[authority];
  d.queue_rows++;
  const reg = clean(row.REG_NO);
  if (alreadyPublished.has(reg)) d.already_published++;
  const required = ["REG_NO","NAME","ORIGINAL_TYPE","DESCRIPTION","DATEFROM","DATETO","RATING","ITM_E","ITM_N","LATITUDE","LONGITUDE","WEBSITE_LINK","COUNTY","LOCAL_AUTHORITY�"];
  for (const field of required) if (!clean(row[field])) d.missing_required[field] = (d.missing_required[field] || 0) + 1;
  if (clean(row.WEBSITE_LINK)) {
    try { const u = new URL(clean(row.WEBSITE_LINK)); if (u.protocol !== "https:" || u.hostname !== "www.buildingsofireland.ie" || u.searchParams.get("regno") !== reg) d.invalid_link++; }
    catch { d.invalid_link++; }
  }
  const lat=Number(row.LATITUDE), lon=Number(row.LONGITUDE), e=Number(row.ITM_E), n=Number(row.ITM_N);
  if (![lat,lon,e,n].every(Number.isFinite) || lat < 51 || lat > 56 || lon < -11 || lon > -5 || e <= 0 || e > 900000 || n <= 0 || n > 900000) d.invalid_coordinates++;
  if (validCandidate(row) && !alreadyPublished.has(reg)) d.valid_candidates++;
}
console.log("BATCH 154 AUTHORITY ELIGIBILITY DIAGNOSTICS " + JSON.stringify(diagnostic, null, 2));

const selected = [];
const selectedRefs = new Set();
while (selected.length < 100) {
  let addedThisRound = false;
  for (const authority of AUTHORITIES) {
    const bucket = eligibleByAuthority.get(authority);
    while (bucket.length) {
      const row = bucket.shift();
      const reg = clean(row.REG_NO);
      if (selectedRefs.has(reg)) continue;
      selected.push(row);
      selectedRefs.add(reg);
      addedThisRound = true;
      break;
    }
    if (selected.length === 100) break;
  }
  if (!addedThisRound) break;
}
if (selected.length < 1) throw new Error("No eligible unique NIAH records remain available; refusing an empty batch.");
const REGISTRATIONS = selected.map(row => clean(row.REG_NO));
const rows = selected;

const authorityCounts = Object.fromEntries(AUTHORITIES.map(authority => [authority, rows.filter(row => clean(row["LOCAL_AUTHORITY�"]) === authority).length]));
if (Object.values(authorityCounts).reduce((a,b)=>a+b,0) !== selected.length) throw new Error("Batch 154 authority distribution does not match selected record count.");

const masterRefs = new Set(objects.flatMap(item => (clean(item.national_inventory_reference).match(/\b\d{8}\b/g) || [])));
const publicRefs = new Set(publicObjects.map(item => clean(item.national_inventory_reference)));
const sourceById = new Map(sources.map(source => [source.id, source]));
for (const reg of REGISTRATIONS) {
  if (masterRefs.has(reg) || publicRefs.has(reg)) throw new Error("Duplicate NIAH registration already present in archive: " + reg);
  const existingSource = sourceById.get("NIAH-" + reg);
  if (existingSource && !clean(existingSource.url).includes(reg) && !clean(existingSource.specific_reference).includes(reg)) {
    throw new Error("Conflicting existing NIAH source ID: NIAH-" + reg);
  }
}

const nameCounts = new Map();
const nameTypeCounts = new Map();
for (const row of rows) {
  const n = clean(row.NAME);
  const t = clean(row.ORIGINAL_TYPE);
  nameCounts.set(n, (nameCounts.get(n) || 0) + 1);
  const key = n + "\u0000" + t;
  nameTypeCounts.set(key, (nameTypeCounts.get(key) || 0) + 1);
}
const maxIds = {};
for (const item of objects) {
  const match = clean(item.id).match(/^DUB-([A-Z]{3})-(\d+)$/);
  if (match) maxIds[match[1]] = Math.max(maxIds[match[1]] || 0, Number(match[2]));
}

const newObjects = [];
const newSources = [];
const newVisuals = [];
const usedSourceIds = new Set(sources.map(source => source.id));
const usedObjectIds = new Set(objects.map(item => item.id));

for (const row of rows) {
  const reg = clean(row.REG_NO);
  const sourceId = "NIAH-" + reg;
  const category = categoryFor(row.ORIGINAL_TYPE);
  const prefix = prefixFor(category);
  maxIds[prefix] = (maxIds[prefix] || 0) + 1;
  const id = "DUB-" + prefix + "-" + String(maxIds[prefix]).padStart(4, "0");
  if (usedObjectIds.has(id)) throw new Error("Generated archive ID collision: " + id);
  usedObjectIds.add(id);

  const rawName = clean(row.NAME);
  const type = clean(row.ORIGINAL_TYPE);
  let displayName = rawName;
  if ((nameCounts.get(rawName) || 0) > 1) {
    displayName += " — " + type;
    if ((nameTypeCounts.get(rawName + "\u0000" + type) || 0) > 1) displayName += " (NIAH " + reg + ")";
  }

  const district = districtFor(row);
  const address = addressFor(row);
  if (!address) throw new Error("No defensible address string for " + reg);
  const lat = Number(row.LATITUDE), lon = Number(row.LONGITUDE);
  const itmE = clean(row.ITM_E), itmN = clean(row.ITM_N);
  const rating = clean(row.RATING);
  const specialInterest = clean(row.CSI);
  const appraisal = clean(row.APPRAISAL);
  const sourceUrl = clean(row.WEBSITE_LINK);
  const period = dateRange(row);
  const historicalSignificance = appraisal || ("NIAH rating: " + rating + ". Special interest categories: " + (specialInterest || "not stated in the CSV row") + ".");
  const coordinateSource = "Official NIAH national CSV: ITM_E=" + itmE + ", ITM_N=" + itmN + " (EPSG:2157); LATITUDE=" + clean(row.LATITUDE) + ", LONGITUDE=" + clean(row.LONGITUDE) + " copied directly from the same source. The national dataset metadata warns that existing point centroids were digitised relative to OSI 6-inch mapping and may require revision against larger-scale mapping. Positional accuracy is unspecified; this is not founder GPS.";
  const researchNotes = "Batch 154. Exact official NIAH registration: " + reg + ". Official NIAH name: " + rawName + ". NIAH original type: " + type + ". Current use in CSV: " + (clean(row.IN_USE_AS_TYPE) || "not stated") + ". Local authority in the official CSV: " + clean(row["LOCAL_AUTHORITY�"]) + ". Survey: " + (clean(row.SURVEY) || "not stated") + ". Rating: " + rating + ". Special interest: " + (specialInterest || "not stated") + ". The separate registrations within named complexes are retained as distinct NIAH records; no parent relationship is inferred. The official national CSV row is the source for the published details. The individual record page, present condition, access and field position have not been independently rechecked in this batch.";

  const object = {
    id,
    name: displayName,
    category,
    district,
    address,
    historical_period: period,
    historical_description: clean(row.DESCRIPTION),
    historical_significance: historicalSignificance,
    national_inventory_reference: reg,
    national_grid_reference: null,
    latitude: lat,
    longitude: lon,
    coordinate_source: coordinateSource,
    coordinate_accuracy_m: null,
    coordinate_status: "SOURCE_DERIVED",
    address_source: sourceId,
    verification_status: "PARTIALLY_VERIFIED",
    photography_status: "TO_PHOTOGRAPH",
    line_art_status: "TO_CREATE",
    publication_status: "NOT_PUBLISHED",
    parent_id: null,
    access_status: "Not assessed. Confirm current ownership, public access and site rules before visiting.",
    photography_restrictions: "NIAH registration does not grant entry or photography rights. Do not enter private or restricted property; confirm owner/operator permission and any site-specific photography rules.",
    map_url: "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(lat.toFixed(6) + "," + lon.toFixed(6)) + "&travelmode=walking",
    photography_brief: [
      "Overall view of the registered feature from a lawful public vantage point",
      "Document the architectural or structural features described in the official NIAH record",
      "Capture materials and setting only where visible and accessible",
      "Record current condition without entering private or restricted property"
    ],
    sources: [sourceId, "SRC-NIAH-NATIONAL-DATASET"],
    feature_type: "PRIMARY_OBJECT",
    research_notes: researchNotes,
    last_researched: DATE
  };
  newObjects.push(object);

  if (!sourceById.has(sourceId)) {
    if (usedSourceIds.has(sourceId)) throw new Error("Duplicate source ID: " + sourceId);
    usedSourceIds.add(sourceId);
    newSources.push({
      id: sourceId,
      name: rawName + " — NIAH registration " + reg,
      publisher: "Department of Housing, Local Government and Heritage — National Inventory of Architectural Heritage",
      url: sourceUrl,
      accessed: DATE,
      source_type: "OFFICIAL_HERITAGE_REGISTER",
      specific_reference: "NIAH registration " + reg + "; local authority " + clean(row["LOCAL_AUTHORITY�"]) + "; rating " + rating + "; original type " + type + "; date range " + period + "; special interest " + (specialInterest || "not stated") + "; survey " + (clean(row.SURVEY) || "not stated") + "; ITM EPSG:2157 E " + itmE + " N " + itmN + "; latitude " + clean(row.LATITUDE) + " longitude " + clean(row.LONGITUDE) + ".",
      notes: "Record data transcribed from the official NIAH national CSV, accessed " + DATE + ". The national dataset is licensed CC BY 4.0. The CSV also contains an image link, but that image is not reused in CICAN; image reuse rights must be checked separately. This source supports the official register identity and the stated dataset fields, not present-day condition or access.",
      licence: "CC BY 4.0 — NIAH dataset record data; linked photographs are not reused without separate rights verification.",
      licenceUrl: "https://creativecommons.org/licenses/by/4.0/"
    });
  }

  newVisuals.push({
    record_id: id,
    name: displayName,
    category,
    district,
    address,
    visual_priority: ["National", "International"].includes(rating) ? "HIGH" : "STANDARD",
    planned_shots: [
      "Overall view of the registered feature from a lawful public vantage point",
      "Structural and architectural details described in the NIAH record",
      "Materials, workmanship and setting where visible and accessible",
      "Current condition and any conservation interpretation visible from public access"
    ],
    photo_status: "AWAITING_FOUNDER_PHOTOGRAPH",
    original_photo: null,
    photo_credit: null,
    capture_date: null,
    capture_location_verification: "NOT_FIELD_VERIFIED",
    line_art_status: "WAITING_FOR_ORIGINAL_PHOTO",
    line_art_file: null,
    line_art_spec: {
      paper: "A4",
      orientation: "Choose to suit original composition",
      resolution_dpi: 300,
      pixel_size_portrait: "2480x3508",
      style: "Faithful black outlines on clean white background; no invented details, labels, shading or added objects",
      source_requirement: "Corresponding founder-captured original photograph"
    },
    gallery_status: "NOT_YET_PUBLISHED",
    reference_images: []
  });
}

const finalObjects = [...objects, ...newObjects];
const finalPublic = [...publicObjects, ...newObjects];
const finalSources = [...sources, ...newSources];
const finalVisuals = [...visualData.records, ...newVisuals];
if (finalObjects.length !== objects.length + newObjects.length || finalPublic.length !== publicObjects.length + newObjects.length || finalVisuals.length !== finalObjects.length) {
  throw new Error("Batch 154 record-count integrity check failed.");
}
const finalRefs = finalPublic.map(item => clean(item.national_inventory_reference));
if (unique(finalRefs).size !== finalRefs.length || finalRefs.some(ref => !/^\d{8}$/.test(ref))) {
  throw new Error("Public NIAH collection must contain one unique exact eight-digit registration per record.");
}
const districts = new Map();
for (const item of finalObjects) districts.set(item.district, (districts.get(item.district) || 0) + 1);
const existingDistricts = new Map(coverage.postal_districts.map(item => [item.name, item]));
coverage.postal_districts = [...districts.entries()].sort(([a],[b]) => a.localeCompare(b)).map(([name,count]) => {
  const existing = existingDistricts.get(name);
  return existing
    ? { ...existing, record_count: count }
    : { name, record_count: count, status: "RESEARCH_IN_PROGRESS", coverage_note: "NIAH settlement or townland work-zone label; not a postal district or verified local-authority assignment. Count reconciled from data/objects.json." };
});
coverage.catalogue_total = finalObjects.length;
coverage.audited_on = DATE;
coverage.totals.postal_districts_with_records = coverage.postal_districts.length;
coverage.methodology.push("Batch 154 adds " + newObjects.length + " source-derived NIAH Building Survey records. District labels are derived from official NIAH town or townland fields; they do not establish spatial local-authority assignment.");

visualData.records = finalVisuals;
visualData.record_count = finalObjects.length;
visualData.last_updated = DATE;

await writeJson("data/objects.json", finalObjects);
await writeJson("data/niah-registered-objects.json", finalPublic);
await writeJson("data/sources.json", finalSources);
await writeJson("data/visual-assets.json", visualData);
await writeJson("data/coverage-audit.json", coverage);

const report = [
  "# CICAN Dublin — NIAH Four-Authority FastTrack Batch 154",
  "",
  "**Date:** " + DATE,
  "**Status:** " + newObjects.length + " official NIAH registrations reconciled and added as PARTIALLY_VERIFIED archive records; no field verification claimed.",
  "",
  "## Authority distribution",
  "",
  "| Local authority | Added |",
  "|---|---:|",
  ...Object.entries(authorityCounts).filter(([,count])=>count>0).map(([authority,count]) => "| " + authority + " | " + count + " |"),
  "| **Total** | **" + newObjects.length + "** |",
  "",
  "## Record handling",
  "",
  "- All " + newObjects.length + " registration numbers are exact eight-digit values from the official national NIAH CSV.",
  "- Each candidate was absent from the pre-batch master catalogue, public NIAH collection and missing-registration queue was generated from the official four-authority census.",
  "- Every imported row has a non-empty official name, description, date range, rating, ITM coordinates, latitude/longitude and an official NIAH record link.",
  "- The 100 entries are marked PARTIALLY_VERIFIED because the individual pages, present condition, access and field positions have not all been independently checked.",
  "- The source dataset uses CC BY 4.0. NIAH-linked images are not reused; image rights are assessed separately.",
  "- The original ITM EPSG:2157 values and CSV latitude/longitude are preserved in coordinate provenance. Coordinates remain SOURCE_DERIVED, not founder GPS.",
  "- Repeated NIAH names within registered complexes are kept as separate registrations and disambiguated by official structure type or registration number.",
  "",
  "## Registration list",
  "",
  "| NIAH number | Archive ID | Name | Authority | Rating |",
  "|---|---|---|---|---|",
  ...newObjects.map(item => "| " + item.national_inventory_reference + " | " + item.id + " | " + item.name.replace(/\|/g, "\\|") + " | " + rows.find(row => clean(row.REG_NO) === item.national_inventory_reference)["LOCAL_AUTHORITY�"] + " | " + rows.find(row => clean(row.REG_NO) === item.national_inventory_reference).RATING + " |"),
  "",
  "## Post-batch counts",
  "",
  "- Master catalogue: " + finalObjects.length,
  "- Public NIAH collection: " + finalPublic.length,
  "- Source registry: " + finalSources.length,
  "- Visual inventory: " + finalVisuals.length,
  "- Public registrations matched to the official CSV: expected " + finalPublic.length + " (rechecked by the workflow after import).",
  "",
  "## Scope and limitations",
  "",
  "This batch uses the official Building Survey CSV for four-authority registration identity and source fields. It does not include RPS-only or SMR-only records. It does not claim that the official CSV's point centroids are exact building footprints. Access, present-day condition and image rights remain separate checks.",
  "",
  "Official dataset and licence: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset",
  "Official record links are stored individually in data/sources.json.",
  ""
].join("\n");
await fs.writeFile("documentation/NIAH-DUBLIN-FOUR-AUTHORITY-FASTTRACK-BATCH-154.md", report);
await writeJson(marker, {
  batch: BATCH,
  imported_at: new Date().toISOString(),
  registrations: REGISTRATIONS,
  authority_counts: authorityCounts,
  master_count: finalObjects.length,
  public_niah_count: finalPublic.length,
  source_count: finalSources.length,
  visual_count: finalVisuals.length
});

console.log(JSON.stringify({
  batch: BATCH,
  added: newObjects.length,
  authorityCounts,
  master: finalObjects.length,
  publicNiah: finalPublic.length,
  sources: finalSources.length,
  visualRecords: finalVisuals.length,
  registrations: REGISTRATIONS
}, null, 2));
