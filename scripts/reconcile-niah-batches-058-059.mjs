import fs from "node:fs/promises";

const candidates = [
  { batch: "058", registration: "50010559", name: "The Parnell Mooney", address: "72-74 Parnell Street, Dublin 1" },
  { batch: "058", registration: "50010561", name: "Patrick Conway", address: "70 Parnell Street, Dublin 1" },
  { batch: "058", registration: "50010562", name: "71 Parnell Street", address: "71 Parnell Street, Dublin 1" },
  { batch: "058", registration: "50010615", name: "76 Parnell Street", address: "76 Parnell Street, Dublin 1" },
  { batch: "058", registration: "50010617", name: "78 Parnell Street", address: "78 Parnell Street, Dublin 1" },
  { batch: "059", registration: "50010997", name: "12 North Great George's Street", address: "12 North Great George's Street, Dublin 1" },
  { batch: "059", registration: "50010998", name: "11 North Great George's Street", address: "11 North Great George's Street, Dublin 1" },
  { batch: "059", registration: "50011004", name: "5 North Great George's Street", address: "5 North Great George's Street, Dublin 1" },
  { batch: "059", registration: "50011008", name: "Dublin and Meath Railway Company", address: "1 North Great George's Street / Denmark Street Great, Dublin 1" },
  { batch: "059", registration: "50010988", name: "Bel Canto House", address: "21 North Great George's Street, Dublin 1" }
];

const files = [
  ["master_objects", "data/objects.json"],
  ["public_niah_register", "data/niah-registered-objects.json"],
  ["source_registry", "data/sources.json"],
  ["visual_inventory", "data/visual-assets.json"]
];
const norm = s => String(s ?? "").toLocaleLowerCase("en").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
const strings = value => {
  const out = [];
  const visit = v => {
    if (typeof v === "string" || typeof v === "number") out.push(String(v));
    else if (Array.isArray(v)) v.forEach(visit);
    else if (v && typeof v === "object") Object.values(v).forEach(visit);
  };
  visit(value);
  return out;
};
const records = {};
for (const [key, path] of files) records[key] = JSON.parse(await fs.readFile(path, "utf8"));

const sourceUrl = "https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data";
const response = await fetch(sourceUrl, { headers: { "user-agent": "CICAN-Dublin-Candidate-Reconciliation/1.0" } });
if (!response.ok) throw new Error(`Official NIAH CSV download failed: HTTP ${response.status}`);
const csv = await response.text();
if (!csv || csv.trimStart().startsWith("<")) throw new Error("Official NIAH endpoint did not return CSV text.");
function parseCsv(text) {
  const rows = []; let row = [], field = "", quoted = false;
  for (let i=0;i<text.length;i++) {
    const c=text[i];
    if (quoted) { if(c==='"' && text[i+1]==='"'){field+='"';i++;} else if(c==='"') quoted=false; else field+=c; }
    else if(c==='"') quoted=true;
    else if(c===","){row.push(field);field="";}
    else if(c==="\n"){row.push(field.replace(/\r$/,""));rows.push(row);row=[];field="";}
    else field+=c;
  }
  if(field.length||row.length){row.push(field.replace(/\r$/,""));rows.push(row);}
  const headers=(rows.shift()||[]).map(x=>x.trim().replace(/^\uFEFF/,""));
  return rows.filter(r=>r.some(v=>v.trim())).map(r=>Object.fromEntries(headers.map((h,i)=>[h,r[i]??""])));
}
const officialRows = parseCsv(csv);
const headers = Object.keys(officialRows[0] ?? {});
const regField = headers.find(h => /^(reg.?no|registration.?number|registration.?no)$/i.test(h.replace(/[ _-]/g,""))) ?? headers.find(h=>/reg.?no|registration.?number/i.test(h));
if (!regField) throw new Error("Official CSV registration-number column not found.");
const coordFields = headers.filter(h=>/(latitude|longitude|easting|northing|grid|coord|location)/i.test(h));
const results = candidates.map(candidate => {
  const officialHits = officialRows.filter(row => String(row[regField]??"").trim().replace(/\.0$/,"") === candidate.registration);
  const perFile = {};
  for (const [key, data] of Object.entries(records)) {
    const list = Array.isArray(data) ? data : Array.isArray(data?.records) ? data.records : [data];
    const matches = list.flatMap((record,index) => {
      const vals = strings(record);
      const hasReg = vals.some(v => v.trim().replace(/\.0$/,"") === candidate.registration);
      const hasName = vals.some(v => norm(v) === norm(candidate.name));
      const hasAddress = vals.some(v => norm(v) === norm(candidate.address));
      return hasReg || hasName || hasAddress ? [{ index, record_id: record?.id ?? record?.record_id ?? record?.archive_id ?? null, exact_registration: hasReg, normalized_name: hasName, normalized_address: hasAddress }] : [];
    });
    perFile[key] = { matching_records: matches };
  }
  return {
    ...candidate,
    official_csv_match_count: officialHits.length,
    official_csv_rows: officialHits.map(row => Object.fromEntries(Object.entries(row).filter(([k]) => coordFields.includes(k) || /^(reg.?no|registration.?number|name|county|local.?authority|street|location|address|rating|classification)$/i.test(k.replace(/[ _-]/g,""))))),
    repository_checks: perFile
  };
});
const report = {
  title: "CICAN Dublin — Batch 058/059 candidate reconciliation",
  generated_at: new Date().toISOString(),
  method: "Complete current JSON files parsed on the GitHub Actions runner. Exact registration values and exact normalized string-field equality for candidate names/addresses are searched within each top-level record; substring matches are intentionally excluded to avoid false positives such as street number 5 matching number 35. Official national NIAH CSV is downloaded at run time; matching source rows and available coordinate/location fields are retained.",
  source_url: sourceUrl,
  official_csv_row_count: officialRows.length,
  official_registration_field: regField,
  official_location_coordinate_fields: coordFields,
  candidate_count: results.length,
  candidates: results,
  decision: "RESEARCH_ONLY_UNTIL_MANUAL_REVIEW"
};
await fs.mkdir("audit",{recursive:true});
await fs.writeFile("audit/niah-batches-058-059-candidate-reconciliation.json",JSON.stringify(report,null,2)+"\n");
console.log(JSON.stringify({candidate_count:results.length,official_csv_row_count:officialRows.length,official_matches:results.filter(x=>x.official_csv_match_count===1).length,missing_official_matches:results.filter(x=>x.official_csv_match_count===0).map(x=>x.registration),duplicate_official_matches:results.filter(x=>x.official_csv_match_count>1).map(x=>x.registration),report:"audit/niah-batches-058-059-candidate-reconciliation.json"},null,2));
