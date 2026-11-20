import fs from "node:fs/promises";

const sourceUrl = "https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data";
const archivePath = "data/niah-registered-objects.json";
const masterPath = "data/objects.json";
const auditPath = "audit/niah-dublin-coverage-audit.json";
const queuePath = "audit/niah-dublin-missing-registrations.json";

function parseCsv(text) {
  const rows = [];
  let row = [], field = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field.replace(/\r$/, "")); rows.push(row); row = []; field = ""; }
    else field += c;
  }
  if (field.length || row.length) { row.push(field.replace(/\r$/, "")); rows.push(row); }
  if (!rows.length) throw new Error("Official NIAH CSV is empty.");
  const headers = rows.shift().map(x => x.trim().replace(/^\uFEFF/, ""));
  return rows.filter(r => r.some(v => v.trim())).map(r => Object.fromEntries(headers.map((h, i) => [h, r[i] ?? ""])));
}

const key = value => String(value ?? "").toLowerCase().replace(/[^a-z0-9]/g, "");
const value = value => String(value ?? "").trim();
const normalizeRef = value => value.replace(/\.0$/, "").trim();
const authorities = new Map([
  ["dublincitycouncil", "Dublin City Council"],
  ["fingalcountycouncil", "Fingal County Council"],
  ["southdublincountycouncil", "South Dublin County Council"],
  ["dunlaoghairerathdowncountycouncil", "Dún Laoghaire-Rathdown County Council"]
]);

const [archive, master, response] = await Promise.all([
  fs.readFile(archivePath, "utf8").then(JSON.parse),
  fs.readFile(masterPath, "utf8").then(JSON.parse),
  fetch(sourceUrl, { headers: { "user-agent": "CICAN-Dublin-NIAH-Coverage-Audit/1.0" } })
]);
if (!response.ok) throw new Error(`Official NIAH national CSV download failed: HTTP ${response.status}`);
const csv = await response.text();
if (!csv || csv.trimStart().startsWith("<")) throw new Error("Official NIAH endpoint did not return CSV text.");

const rows = parseCsv(csv);
const headers = Object.keys(rows[0] ?? {});
const findHeader = patterns => headers.find(h => patterns.some(pattern => pattern.test(key(h))));
const regField = findHeader([/^regno$/, /^registrationnumber$/, /^registrationno$/]);
const countyField = findHeader([/^county$/]);
const authorityField = findHeader([/^localauthority$/, /^localauthorityname$/]);
if (!regField || !countyField || !authorityField) {
  throw new Error(`Required fields not found. REG_NO=${regField}; COUNTY=${countyField}; LOCAL_AUTHORITY=${authorityField}; headers=${headers.join(", ")}`);
}

const dublinRows = rows.filter(row => key(row[countyField]) === "dublin");
if (!dublinRows.length) throw new Error("No rows with COUNTY=DUBLIN found; refusing to publish an empty denominator.");

const byRegistration = new Map();
const authorityCounts = Object.fromEntries([...authorities.values()].map(name => [name, { rows: 0, unique_registrations: 0 }]));
const unassignedAuthorityRows = [];
for (const row of dublinRows) {
  const reg = normalizeRef(value(row[regField]));
  if (!/^\d{8}$/.test(reg)) continue;
  const rawAuthority = value(row[authorityField]);
  const canonicalAuthority = authorities.get(key(rawAuthority));
  if (!canonicalAuthority) unassignedAuthorityRows.push({ registration_number: reg, local_authority_raw: rawAuthority, official_row: row });
  else authorityCounts[canonicalAuthority].rows++;
  if (!byRegistration.has(reg)) byRegistration.set(reg, []);
  byRegistration.get(reg).push({ authority: canonicalAuthority ?? null, raw_authority: rawAuthority, row });
}

for (const [reg, hits] of byRegistration) {
  const names = new Set(hits.map(x => x.authority).filter(Boolean));
  if (names.size === 1) authorityCounts[[...names][0]].unique_registrations++;
}
const duplicateOfficialRegistrations = [...byRegistration.entries()]
  .filter(([, hits]) => hits.length > 1)
  .map(([registration_number, hits]) => ({
    registration_number,
    row_count: hits.length,
    authorities: [...new Set(hits.map(x => x.raw_authority))]
  }));

const fourAuthorityRefs = new Set(
  [...byRegistration.entries()]
    .filter(([, hits]) => hits.some(hit => hit.authority))
    .map(([reg]) => reg)
);
const archiveRefs = new Set(archive.map(item => value(item.national_inventory_reference)).filter(ref => /^\d{8}$/.test(ref)));
const masterRefs = new Set(master.flatMap(item => (value(item.national_inventory_reference).match(/\b\d{8}\b/g) ?? [])));
const missing = [...fourAuthorityRefs]
  .filter(reg => !archiveRefs.has(reg))
  .sort((a, b) => a.localeCompare(b))
  .map(reg => {
    const hit = byRegistration.get(reg).find(item => item.authority) ?? byRegistration.get(reg)[0];
    return hit.row;
  });
const archiveNotInOfficial = [...archiveRefs].filter(reg => !fourAuthorityRefs.has(reg)).sort();
const masterNotInOfficial = [...masterRefs].filter(reg => !fourAuthorityRefs.has(reg)).sort();
const archiveNotInMaster = [...archiveRefs].filter(reg => !masterRefs.has(reg)).sort();
const unknownAuthorityNames = [...new Set(unassignedAuthorityRows.map(x => x.local_authority_raw))].sort();

const report = {
  audit_title: "CICAN Dublin — four-authority NIAH Building Survey coverage audit",
  audited_at: new Date().toISOString(),
  source_url: sourceUrl,
  source_description: "Official NIAH national CSV bulk download. The source is retrieved at audit time; the report records the exact source row count and field names used.",
  source_row_count: rows.length,
  source_county_field: countyField,
  source_registration_number_field: regField,
  source_local_authority_field: authorityField,
  dublin_county_row_count: dublinRows.length,
  four_authority_unique_registration_count: fourAuthorityRefs.size,
  authority_counts: authorityCounts,
  unknown_authority_values: unknownAuthorityNames,
  rows_with_unassigned_or_unrecognised_authority: unassignedAuthorityRows.length,
  duplicate_registration_numbers_in_official_dublin_rows: duplicateOfficialRegistrations,
  archive_record_count: archive.length,
  archive_unique_registration_count: archiveRefs.size,
  archive_unique_registrations_matched_to_four_authority_source: [...archiveRefs].filter(reg => fourAuthorityRefs.has(reg)).length,
  archive_registrations_not_found_in_four_authority_source: archiveNotInOfficial,
  master_record_count: master.length,
  master_unique_numeric_registration_count: masterRefs.size,
  master_registrations_not_found_in_four_authority_source: masterNotInOfficial,
  archive_registrations_missing_from_master_numeric_references: archiveNotInMaster,
  missing_official_registrations_available_for_review: missing.length,
  denominator_complete_for_four_authorities: unassignedAuthorityRows.length === 0 && duplicateOfficialRegistrations.length === 0,
  notes: [
    "The four-authority denominator is based on unique eight-digit REG_NO values with one of the four named Dublin local-authority values.",
    "Rows with an unrecognised or blank local-authority value are reported separately and prevent a complete-denominator status.",
    "Official duplicates are reported and are not silently counted twice.",
    "The missing-registration file is a research queue only. It is not a production import and must be individually checked for scope, identity, parent/detail relationships, source quality, coordinate provenance, access and image rights.",
    "The founder's working target of 3,396 is not used as the denominator unless it independently equals the audited four-authority source count."
  ]
};

await fs.mkdir("audit", { recursive: true });
await fs.writeFile(auditPath, JSON.stringify(report, null, 2) + "\n");
await fs.writeFile(queuePath, JSON.stringify(missing, null, 2) + "\n");
console.log(JSON.stringify({
  auditPath,
  queuePath,
  sourceRows: report.source_row_count,
  dublinCountyRows: report.dublin_county_row_count,
  fourAuthorityUniqueRegistrations: report.four_authority_unique_registration_count,
  authorityCounts: report.authority_counts,
  archiveMatches: report.archive_unique_registrations_matched_to_four_authority_source,
  missingForReview: report.missing_official_registrations_available_for_review,
  unassignedAuthorityRows: report.rows_with_unassigned_or_unrecognised_authority,
  officialDuplicates: report.duplicate_registration_numbers_in_official_dublin_rows.length,
  denominatorComplete: report.denominator_complete_for_four_authorities
}, null, 2));
