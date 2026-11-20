import fs from "node:fs/promises";

const sourceUrl = "https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data";
const inputPath = "data/niah-registered-objects.json";
const outputPath = "audit/niah-340-official-register-audit.json";

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
  if (!rows.length) throw new Error("Official CSV is empty.");
  const headers = rows.shift().map(x => x.trim().replace(/^\uFEFF/, ""));
  return rows.filter(r => r.some(v => v.trim())).map(r => Object.fromEntries(headers.map((h, i) => [h, r[i] ?? ""])));
}

const local = JSON.parse(await fs.readFile(inputPath, "utf8"));
const response = await fetch(sourceUrl, { headers: { "user-agent": "CICAN-Dublin-NIAH-Audit/1.0" } });
if (!response.ok) throw new Error(`Official NIAH CSV download failed: HTTP ${response.status}`);
const csv = await response.text();
if (!csv || csv.trimStart().startsWith("<")) throw new Error("Official NIAH endpoint did not return CSV text.");
const officialRows = parseCsv(csv);
const headers = Object.keys(officialRows[0] ?? {});
const regField = headers.find(h => /^(reg.?no|registration.?number|registration.?no)$/i.test(h.replace(/[ _-]/g, "")))
  ?? headers.find(h => /reg.?no|registration.?number/i.test(h));
if (!regField) throw new Error(`Could not identify registration-number column. Headers: ${headers.join(", ")}`);
const localAuthorityField = headers.find(h => /local.?authority/i.test(h));
const countyField = headers.find(h => /^county$/i.test(h));
const officialByRef = new Map();
for (const item of officialRows) {
  const ref = String(item[regField] ?? "").trim().replace(/\.0$/, "");
  if (/^\d{8}$/.test(ref)) {
    if (!officialByRef.has(ref)) officialByRef.set(ref, []);
    officialByRef.get(ref).push(item);
  }
}
const results = local.map(item => {
  const ref = String(item.national_inventory_reference ?? "").trim();
  const hits = officialByRef.get(ref) ?? [];
  const official = hits[0] ?? null;
  const authority = official && localAuthorityField ? official[localAuthorityField] : "";
  const county = official && countyField ? official[countyField] : "";
  return {
    archive_id: item.id,
    archive_name: item.name,
    registration_number: ref,
    status: hits.length ? (hits.length > 1 ? "MATCHED_DUPLICATE_IN_SOURCE" : "MATCHED") : "NOT_FOUND",
    official_name: official?.NAME ?? official?.Name ?? official?.name ?? "",
    official_local_authority: authority,
    official_county: county,
    source_match_count: hits.length
  };
});
const counts = results.reduce((a, r) => (a[r.status] = (a[r.status] ?? 0) + 1, a), {});
const report = {
  audit_title: "CICAN Dublin — 340 NIAH registration-number audit",
  audited_at: new Date().toISOString(),
  source_url: sourceUrl,
  source_description: "National Inventory of Architectural Heritage national CSV bulk download, Department of Housing, Local Government and Heritage; data.gov.ie resource metadata last updated 10 November 2026.",
  source_row_count: officialRows.length,
  source_registration_number_field: regField,
  source_local_authority_field: localAuthorityField ?? null,
  source_county_field: countyField ?? null,
  archive_record_count: local.length,
  unique_archive_reference_count: new Set(local.map(x => String(x.national_inventory_reference ?? "").trim())).size,
  counts,
  all_records_matched: results.length === local.length && results.every(r => r.status === "MATCHED"),
  results
};
await fs.mkdir("audit", { recursive: true });
await fs.writeFile(outputPath, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({ outputPath, sourceRows: report.source_row_count, archiveRows: report.archive_record_count, counts, all_records_matched: report.all_records_matched }, null, 2));
