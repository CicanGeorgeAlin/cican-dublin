# CICAN Dublin — Archive Data Foundation Audit

**Audit date:** 2026-11-25  
**Baseline:** `main` at `000833ded162949c0d8ed08964a4281f56f9b52d`  
**Scope:** Read-only audit of the canonical object catalogue, NIAH-derived map dataset, source register, visual inventory and archive-object schema.  
**Status:** Audit complete; recommendations pending implementation.  
**Production data changed:** No.

## 1. Executive result

The repository has a substantial, internally consistent archive data foundation, but the map app currently reads a smaller dataset than the canonical catalogue.

| Measure | Audited result |
|---|---:|
| Canonical objects in `data/objects.json` | 629 |
| NIAH-derived records in `data/niah-registered-objects.json` | 509 |
| NIAH records also present in canonical catalogue | 509 |
| Canonical records absent from the NIAH-derived dataset | 120 |
| Canonical object IDs duplicated | 0 |
| NIAH dataset IDs duplicated | 0 |
| Source records | 749 |
| Duplicate source IDs | 0 |
| Visual inventory records | 629 |
| Duplicate visual IDs | 0 |
| Visual records missing a canonical object | 0 |
| Canonical objects missing a visual inventory record | 0 |
| Dangling object-to-source references | 0 |
| Orphan parent references | 0 |

The 509 NIAH records form a subset of the 629 canonical objects. The other 120 canonical records are not in the dataset currently loaded by the map app.

## 2. Critical map coverage finding

The production map JavaScript currently declares:

```js
const DATA_URL="../data/niah-registered-objects.json";
```

That file contains 509 records, whereas `data/objects.json` contains 629. Therefore the map app currently loads 120 fewer archive records than the canonical catalogue.

This is a data-coverage difference, not proof that the map is malfunctioning: the NIAH filename may reflect an intentional NIAH-only scope. However, the wider CICAN Dublin Archive mission includes non-NIAH objects and micro-details. If the map is intended to represent the complete archive, its source should be the canonical catalogue, not the NIAH-only subset.

**Recommendation:** Treat `data/objects.json` as the canonical map dataset after a compatibility and regression test. Keep `data/niah-registered-objects.json` as a derived NIAH subset for registration-specific workflows. Do not switch the production app until marker counts, filters, detail rendering, navigation eligibility, source links and visual lookups have been tested against the full 629-record catalogue.

## 3. Coordinate coverage and provenance

### Canonical catalogue

- 557 of 629 records have both numeric latitude and longitude (88.6%).
- 72 records have no complete coordinate pair.
- All 557 complete pairs are marked `SOURCE_DERIVED`.
- 72 records are marked `NOT_SET`.
- No record is marked `FIELD_VERIFIED`.
- No latitude-only or longitude-only pairs were found.
- No out-of-range coordinate values were found.
- Every record with a coordinate pair has a non-empty `coordinate_source` and a non-`NOT_SET` coordinate status.
- Only one record has `coordinate_accuracy_m` populated.

### NIAH-derived dataset

- 456 of 509 records have both numeric latitude and longitude (89.6%).
- 53 records have no coordinate pair.
- All 456 complete pairs are marked `SOURCE_DERIVED`.
- No record is marked `FIELD_VERIFIED`.
- No partial or out-of-range coordinate pairs were found.

### Interpretation

The coordinate data is source-derived, not founder field GPS. The current records and schema correctly distinguish `SOURCE_DERIVED` from `FIELD_VERIFIED`, but the archive does not yet contain any field-verified coordinate records.

There are 18 canonical records with a coordinate-source explanation but no coordinate pair. These are intentionally held without a fabricated location; several contain Irish Grid references in their source notes that have not yet been converted to WGS84. The coordinate source notes should not be mistaken for an actual latitude/longitude.

The audit found 9 canonical records in which the latitude and longitude properties are absent entirely rather than explicitly null. The remaining 63 coordinate-incomplete records use null values. A consistent null representation would make downstream clients simpler.

**Recommendation:** For future data-contract work, add explicit coordinate metadata such as source CRS, measurement method, positional meaning (site centroid, building reference, entrance, individual object), uncertainty/accuracy and verification event reference. Do not populate these retrospectively unless the source supports them. Standardise missing coordinate pairs as explicit null values.

## 4. Canonical catalogue and NIAH dataset reconciliation

All 509 NIAH dataset IDs also exist in the canonical 629-record catalogue. There are no NIAH-only IDs.

However, 9 of the 509 shared records differ between the two JSON files. The differences are in newer provenance and research fields retained in the canonical catalogue but absent from the NIAH-derived copy. These include `address_source`, `photography_restrictions`, `last_researched` and `research_notes`.

The 9 records are:
- `DUB-BLD-0274`
- `DUB-INF-0204`
- `DUB-BLD-0275`
- `DUB-BLD-0276`
- `DUB-BLD-0277`
- `DUB-BLD-0278`
- `DUB-INF-0207`
- `DUB-BLD-0284`
- `DUB-BLD-0285`

This is a predictable risk when a derived dataset is maintained as a separate copied JSON file: newer canonical metadata can be omitted from the copy.

**Recommendation:** Generate the NIAH subset deterministically from the canonical catalogue using `national_inventory_reference`, or add an automated parity test for every shared record. Avoid hand-maintaining two independent copies of the same object records.

## 5. Schema and integrity checks

The current `schemas/archive-object.schema.json` defines 32 properties, requires 17 core fields and rejects additional properties.

The audited 629 canonical records and 509 NIAH records were checked against the schema's required-field, category-enum, coordinate-pair/status and photographed-original-path rules:

- Missing required properties: 0 in both datasets.
- Unknown object properties: 0 in both datasets.
- Category values outside the schema enum: 0.
- Numeric coordinate pairs incorrectly marked `NOT_SET`: 0.
- Records marked `PHOTOGRAPHED` without an original photo path: 0.
- Invalid coordinate ranges: 0.
- Partial coordinate pairs: 0.

This was a programmatic structural audit of the listed schema constraints, not a claim that a full JSON Schema 2020-12 validator was run against every keyword.

The controlled taxonomy contains 13 category codes. All 10 category codes currently used by the canonical catalogue are present in the taxonomy. The remaining three codes (`BURIAL_ART`, `COMMERCIAL_HISTORY`, `OTHER`) are defined but not currently used in the 629-record catalogue.

## 6. Sources and visual inventory

- 749 source records were found.
- Source IDs are unique.
- Every source record has a URL.
- All object source references resolve to a registered source ID.
- The visual inventory declares and contains 629 records, one for each canonical object.
- Visual IDs are unique and all resolve to canonical object IDs.
- All visual reference-image source IDs checked resolve to the source register.
- All 629 visual records currently state `AWAITING_FOUNDER_PHOTOGRAPH` and `NOT_FIELD_VERIFIED` for capture location.
- The visual inventory and canonical catalogue have no mismatched founder photography status in this audit.

These results establish record linkage and declared status consistency. They do not prove that every online image is visually correct, rights-cleared beyond its recorded terms, or current.

## 7. Google Maps legacy references

The canonical catalogue contains 556 `map_url` values that point to Google Maps directions URLs. The NIAH subset contains 456 such URLs.

The production map app JavaScript does not reference the `map_url` property. Its walking navigation is implemented separately through Valhalla, as documented in the app/navigation architecture audit.

Therefore:
- The current route-calculation implementation is not using Google Maps.
- The data still contains Google Maps directions links as legacy metadata.
- Those legacy links should be treated as a separate cleanup/compatibility task, not evidence that the current route engine uses Google.

**Recommendation:** In a later, separately tested change, replace legacy Google-specific map links with provider-neutral internal destination links or a documented user-choice mechanism. Do not bulk-edit these URLs until every consumer of `map_url` has been searched and tested.

## 8. Gaps to address before Android client work

1. **Canonical map source:** Decide and test whether the full 629-record catalogue should feed the map rather than the 509-record NIAH subset.
2. **Single source of truth:** Derive the NIAH subset from canonical objects or enforce strict parity.
3. **Coordinate contract:** Add CRS, method, positional meaning and uncertainty fields for future records.
4. **Field verification:** Define a traceable field-observation relationship before any record can be promoted to `FIELD_VERIFIED`.
5. **Missing coordinate representation:** Standardise missing coordinate pairs as explicit null values.
6. **Map URL abstraction:** Remove hard-coded Google-specific data dependencies only after consumer audit.
7. **Versioning:** Add a documented data-contract version for clients and a compatibility test before Android development.
8. **Navigation eligibility:** Distinguish records that can safely route to an exact object from those that only have a parent-building or approximate site reference.

## 9. Ordered next step

Proceed with a **non-production map data-source compatibility prototype** on a dedicated branch:

- Load the canonical 629-record catalogue in a test harness.
- Check every record's coordinates, category, ID and rendering eligibility.
- Compare the expected marker and filter counts with the current 509-record NIAH map.
- Verify detail panels and visual lookups for all 120 currently excluded canonical records.
- Verify navigation is blocked or clearly qualified when the coordinate is missing, approximate or only a parent/site reference.
- Run the existing map/GPS/navigation tests.
- Do not change the production map source until the full test report passes and the change is reviewed.

**No catalogue data, coordinates, source records, map pins, production application code or live configuration were changed during this audit.**
