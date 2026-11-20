# CICAN Dublin — NIAH Coverage Counting Method and Baseline

**Checked:** 20 November 2026  
**Purpose:** Measure the user's explicit target: include every record published by NIAH that falls within Dublin City, Fingal, South Dublin and Dún Laoghaire–Rathdown. Do not substitute a general website-readiness score for NIAH record coverage.

## 1. What NIAH currently says is on its website

The Buildings of Ireland homepage currently advertises a searchable NIAH database of **over 65,000 records for buildings and gardens**.

The public resources show that this is not one simple homogeneous list:

1. **NIAH Building Survey:** the national building/structure inventory. NIAH describes it as covering a broad range of structures and sites from 1700 to the present, including post boxes and water pumps as well as major buildings. Thatch and vernacular records are searchable as filters within the Building Survey; do not add them again as if they were a separate set of unique buildings.
2. **Survey of Historic Gardens and Designed Landscapes:** a separate resource with **over 6,000 records**, mainly demesnes, but also garden cemeteries and urban parks.
3. **NIAH National Thatch Census:** a separately published specialist dataset with its own CSV, Feature Service and OGC feature layer. Treat it as a distinct dataset for audit and cross-reference it to Building Survey registrations; do not automatically add its row count to the unique Building Survey total.

The national NIAH Buildings open-data Feature Service exposes a separate point layer of Ministerial Recommendations / building records. Its ArcGIS Get Estimates page reported **48,327** records in the search result inspected for this audit. This is a different count and data scope from the homepage's broader “over 65,000 records for buildings and gardens”; do not claim the 48,327 is the total number of all NIAH website records.

## 2. What CICAN currently has

The canonical production file `data/objects.json` was fetched from the repository and parsed in full on 20 November 2026.

- Catalogue records: **460**.
- Records with a non-empty `national_inventory_reference` field: **450**.
- Eight-digit numeric NIAH reference occurrences found inside those fields: **432**.
- Distinct eight-digit numeric NIAH registration numbers found inside those fields: **342**.
- The 448 populated fields are not 448 unique NIAH records: many contain explanatory prose, other designation references, or repeat a parent NIAH registration across multiple separately catalogued micro-features.
- The 342 distinct numeric references are the current CICAN numerator candidate for Building Survey registration coverage. The current 342-record public NIAH file contains exactly these 342 unique references. The 20 November 2026 national CSV audit artifact confirms 340 registrations in the prior snapshot; two later additions, 11324032 and 11323022, require a fresh official CSV audit.
- Catalogue records without a populated NIAH reference: **12**. These may be legitimate non-NIAH objects (e.g. archaeological, industrial or micro-detail records); absence of an NIAH reference is not automatically a defect.

Do not report 340/65,000 as a completion percentage: 65,000 is the national buildings-and-gardens total, while CICAN's intended geographic scope is Dublin only.

## 3. Correct NIAH completion calculation

The primary KPI is **Dublin NIAH Building Survey coverage**:

`unique Dublin Building Survey registration numbers matched to CICAN / unique current Dublin Building Survey registration numbers`

The denominator must be built from the current official source, filtered to the four intended authorities:
- Dublin City Council
- Fingal County Council
- South Dublin County Council
- Dún Laoghaire–Rathdown County Council

The numerator must be the unique subset of those same current official registration numbers present in the canonical CICAN catalogue. Compare exact registration numbers, not names alone. Preserve probable matches and conflicts in separate queues.

Then publish separate coverage measures:
- Building Survey registration coverage.
- Historic Gardens and Designed Landscapes coverage.
- National Thatch Census cross-reference coverage (not automatically additive to building registrations).
- Optional extended coverage of other official NIAH resources once their exact scope and IDs are inventoried.

The primary overall NIAH completion percentage should combine only unique, in-scope official NIAH records after the datasets have been reconciled and overlaps resolved. Never double-count the same place across a building record, garden record and specialist census entry; preserve separate official record IDs where NIAH treats them as separate records.

## 4. Next exact actions

1. Extract the current full national NIAH Building Survey data or query the live Feature Service; obtain unique registrations and local-authority values.
2. Count the Dublin four-authority denominator, date-stamp it and save the registration list.
3. Exact-match all official Dublin registrations against the 340 distinct numeric references and the complete catalogue; classify exact, related-parent, probable, conflict and missing.
4. Obtain the complete Historic Gardens and Designed Landscapes export; count Dublin entries and reconcile them separately.
5. Obtain the National Thatch Census export; count Dublin records, identify overlaps with Building Survey registrations, and link them without double-counting.
6. Add every missing in-scope official NIAH record to the website, preserving source descriptions, record URLs, official IDs, classifications, coordinates and provenance.
7. Repeat the census periodically as NIAH publishes new records.

## 5. Sources

- NIAH homepage, current public statement “over 65,000 records for buildings and gardens”: https://www.buildingsofireland.ie/
- NIAH FAQ, range and examples of Building Survey structures: https://www.buildingsofireland.ie/faq/
- NIAH Building Survey search: https://www.buildingsofireland.ie/buildings-search/
- NIAH Vernacular & Thatch search (filters within Building Survey): https://www.buildingsofireland.ie/search-vernacular-thatch-building-surveys/
- NIAH Resources, including Garden Survey Data Download and statement that Historic Gardens and Designed Landscapes has over 6,000 records: https://www.buildingsofireland.ie/resources-5/
- NIAH national Buildings Feature Service (Ministerial Recommendations layer): https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildingsOpenData/FeatureServer
- Feature Service estimates page: https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildings/FeatureServer/0?f=pjson
- data.gov.ie, NIAH National Thatch Census: https://data.gov.ie/en_GB/dataset/national-inventory-of-architectural-heritage-niah-national-thatch-census
- data.gov.ie, NIAH national dataset metadata and current live-view guidance: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset

**Integrity note:** The national public website count is not a Dublin denominator. The current parsed CICAN numerator is 342 distinct numeric NIAH references, with 340 exact national-CSV matches confirmed in the previous audit snapshot and two later additions awaiting re-audit. The official four-authority Dublin denominator has not yet been extracted and reconciled; do not report a completion percentage or treat 3,396 as an independently confirmed official denominator.
