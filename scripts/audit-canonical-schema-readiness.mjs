import fs from "node:fs";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const readJson = file => JSON.parse(fs.readFileSync(file, "utf8"));
const objects = readJson("data/objects.json");
const niah = readJson("data/niah-registered-objects.json");
const schema = readJson("schemas/archive-object.schema.json");

const ajv = new Ajv2020({ allErrors: true, strict: false, validateFormats: true });
addFormats(ajv);
const validate = ajv.compile(schema);

function validateRecords(records, label) {
  const errors = [];
  let valid = 0;
  for (const record of records) {
    if (validate(record)) {
      valid++;
    } else {
      for (const error of validate.errors || []) {
        errors.push({
          record_id: record?.id ?? null,
          instance_path: error.instancePath,
          schema_path: error.schemaPath,
          keyword: error.keyword,
          message: error.message
        });
      }
    }
  }
  return { label, total: records.length, valid, invalid: records.length - valid, errors };
}

const canonicalValidation = validateRecords(objects, "canonical");
const niahValidation = validateRecords(niah, "niah-derived");

const coordinate = {
  complete_numeric_pairs: [],
  both_null: [],
  both_absent: [],
  latitude_absent_longitude_null: [],
  longitude_absent_latitude_null: [],
  latitude_only_numeric: [],
  longitude_only_numeric: [],
  other_invalid_or_partial: [],
  status_counts: {},
  complete_pair_status_counts: {},
  complete_pairs_missing_source: [],
  accuracy_populated: []
};
for (const record of objects) {
  const hasLat = Object.hasOwn(record, "latitude");
  const hasLon = Object.hasOwn(record, "longitude");
  const latNum = typeof record.latitude === "number" && Number.isFinite(record.latitude);
  const lonNum = typeof record.longitude === "number" && Number.isFinite(record.longitude);
  const id = record.id;
  if (latNum && lonNum) {
    coordinate.complete_numeric_pairs.push(id);
    coordinate.complete_pair_status_counts[record.coordinate_status] =
      (coordinate.complete_pair_status_counts[record.coordinate_status] || 0) + 1;
    if (!record.coordinate_source || !String(record.coordinate_source).trim()) {
      coordinate.complete_pairs_missing_source.push(id);
    }
  } else if (!hasLat && !hasLon) {
    coordinate.both_absent.push(id);
  } else if (record.latitude === null && record.longitude === null) {
    coordinate.both_null.push(id);
  } else if (!hasLat && record.longitude === null) {
    coordinate.latitude_absent_longitude_null.push(id);
  } else if (!hasLon && record.latitude === null) {
    coordinate.longitude_absent_latitude_null.push(id);
  } else if (latNum && (record.longitude === null || !hasLon)) {
    coordinate.latitude_only_numeric.push(id);
  } else if (lonNum && (record.latitude === null || !hasLat)) {
    coordinate.longitude_only_numeric.push(id);
  } else {
    coordinate.other_invalid_or_partial.push(id);
  }
  coordinate.status_counts[record.coordinate_status] =
    (coordinate.status_counts[record.coordinate_status] || 0) + 1;
  if (record.coordinate_accuracy_m !== null && record.coordinate_accuracy_m !== undefined) {
    coordinate.accuracy_populated.push(id);
  }
}

const canonicalByRef = new Map();
const duplicateCanonicalRefs = [];
for (const record of objects) {
  const ref = String(record.national_inventory_reference ?? "").trim();
  if (!/^[0-9]{8}$/.test(ref)) continue;
  if (canonicalByRef.has(ref)) duplicateCanonicalRefs.push(ref);
  else canonicalByRef.set(ref, record);
}
const niahByRef = new Map();
const duplicateNiahRefs = [];
for (const record of niah) {
  const ref = String(record.national_inventory_reference ?? "").trim();
  if (!/^[0-9]{8}$/.test(ref)) continue;
  if (niahByRef.has(ref)) duplicateNiahRefs.push(ref);
  else niahByRef.set(ref, record);
}
const fieldDifferences = [];
for (const [ref, canonical] of canonicalByRef) {
  const derived = niahByRef.get(ref);
  if (!derived) continue;
  const keys = [...new Set([...Object.keys(canonical), ...Object.keys(derived)])].sort();
  const differingFields = keys.filter(key => JSON.stringify(canonical[key]) !== JSON.stringify(derived[key]));
  if (differingFields.length) {
    fieldDifferences.push({ registration_reference: ref, record_id: canonical.id, differing_fields: differingFields });
  }
}
const niahRefsMissingFromCanonical = [...niahByRef.keys()].filter(ref => !canonicalByRef.has(ref));
const canonicalRefsMissingFromNiah = [...canonicalByRef.keys()].filter(ref => !niahByRef.has(ref));

const report = {
  report_version: "1.0.0",
  generated_at: new Date().toISOString(),
  schema: {
    path: "schemas/archive-object.schema.json",
    dialect: schema.$schema,
    validator: "Ajv 8 JSON Schema 2020-12 with ajv-formats",
    canonical: canonicalValidation,
    niah_derived: niahValidation
  },
  canonical_niah_reconciliation: {
    canonical_records: objects.length,
    niah_derived_records: niah.length,
    canonical_unique_eight_digit_niah_references: canonicalByRef.size,
    niah_unique_eight_digit_references: niahByRef.size,
    duplicate_canonical_registration_references: [...new Set(duplicateCanonicalRefs)],
    duplicate_niah_registration_references: [...new Set(duplicateNiahRefs)],
    canonical_references_missing_from_niah_dataset: canonicalRefsMissingFromNiah,
    niah_references_missing_from_canonical: niahRefsMissingFromCanonical,
    shared_records_with_field_differences: fieldDifferences
  },
  coordinate_audit: {
    canonical_records: objects.length,
    complete_numeric_pairs: coordinate.complete_numeric_pairs.length,
    both_null: coordinate.both_null.length,
    both_coordinate_properties_absent: coordinate.both_absent.length,
    latitude_absent_longitude_null: coordinate.latitude_absent_longitude_null,
    longitude_absent_latitude_null: coordinate.longitude_absent_latitude_null,
    latitude_only_numeric: coordinate.latitude_only_numeric,
    longitude_only_numeric: coordinate.longitude_only_numeric,
    other_invalid_or_partial: coordinate.other_invalid_or_partial,
    coordinate_status_counts: coordinate.status_counts,
    complete_pair_status_counts: coordinate.complete_pair_status_counts,
    complete_pairs_missing_coordinate_source: coordinate.complete_pairs_missing_source,
    coordinate_accuracy_populated: coordinate.accuracy_populated
  },
  migration_safety: {
    production_data_modified: false,
    coordinate_values_modified: false,
    recommendation: "READ_ONLY_AUDIT_ONLY",
    notes: [
      "This report does not normalise or rewrite any archive records.",
      "Records without a complete numeric coordinate pair must remain unmapped.",
      "SOURCE_DERIVED coordinates must not be represented as FIELD_VERIFIED.",
      "NIAH-derived data remains a derived dataset; canonical objects are the source of truth."
    ]
  }
};

fs.mkdirSync("audit", { recursive: true });
fs.writeFileSync("audit/canonical-data-contract-readiness.json", JSON.stringify(report, null, 2) + "\n");

console.log(JSON.stringify({
  canonical_schema: { total: canonicalValidation.total, valid: canonicalValidation.valid, invalid: canonicalValidation.invalid },
  niah_schema: { total: niahValidation.total, valid: niahValidation.valid, invalid: niahValidation.invalid },
  niah_reconciliation: {
    canonical_unique_refs: canonicalByRef.size,
    niah_unique_refs: niahByRef.size,
    field_difference_records: fieldDifferences.length,
    duplicate_canonical_refs: duplicateCanonicalRefs.length,
    duplicate_niah_refs: duplicateNiahRefs.length
  },
  coordinates: {
    complete_numeric_pairs: coordinate.complete_numeric_pairs.length,
    both_null: coordinate.both_null.length,
    both_properties_absent: coordinate.both_absent.length,
    other_partial_or_invalid: coordinate.other_invalid_or_partial.length,
    status_counts: coordinate.status_counts
  },
  report: "audit/canonical-data-contract-readiness.json"
}, null, 2));

if (canonicalValidation.invalid || niahValidation.invalid ||
    duplicateCanonicalRefs.length || duplicateNiahRefs.length ||
    niahReferencesMismatch()) {
  process.exitCode = 1;
}

function niahReferencesMismatch() {
  return niahRefsMissingFromCanonical.length > 0;
}
