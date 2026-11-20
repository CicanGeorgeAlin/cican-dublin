# NIAH-First Autopilot — Catalogue Baseline and Source Integrity Audit (Batch 1)

**Project:** CICAN Dublin Archive  
**Autopilot:** CICAN HERITAGE AUTOPILOT  
**Workstream:** NIAH master collection — Batch 1 of the four-batch NIAH cycle  
**Audit date:** 20 November 2026  
**Scope:** Dublin City, Fingal, South Dublin and Dún Laoghaire–Rathdown  
**Production change:** None; audit and protocol correction only.

## Executive summary

The first NIAH-first batch established a verified starting point for the existing CICAN catalogue and identified the correct official NIAH source routes. It also corrected two important risks in the operating algorithm:

1. The canonical catalogue was not empty. A previous GitHub file-fetch route returned an empty content string, but a direct GitHub Contents API retrieval returned the complete 1.25 MB JSON file. The earlier empty response was a retrieval limitation, not an empty repository file.
2. Repeated NIAH registration numbers are not automatically duplicate objects. The existing archive contains separately described micro-details and components associated with NIAH-registered parent structures. Deduplication must compare object identity and parent/child relationships, not simply reject every repeated NIAH reference.

No new NIAH record was published in this batch. The official bulk-download ZIP was identified, but its bytes could not be retrieved and inspected through the current research runtime. Therefore the latest Dublin-wide NIAH total and the first five eligible new NIAH records remain unverified. This is reported as a source-access blocker, not as completed work.

## 1. Official NIAH sources identified

### Current national dataset

The data.gov.ie listing for the National Inventory of Architectural Heritage National Dataset identifies:
- Publisher: Department of Housing, Local Government and Heritage.
- Format: national CSV download.
- Licence: Creative Commons Attribution 4.0.
- Dataset-level metadata currently reports **11 January 2024** as its last update.
- The linked national CSV bulk snapshot is labelled with version date **11 October 2023**.
- The separately catalogued NIAH ArcGIS Feature Service resource reports data and metadata last updated **16 September 2026**.
- The dataset describes the NIAH's statutory purpose as identifying, recording and evaluating Ireland's post-1700 architectural heritage.
- The CSV is a snapshot; the listing also directs users to live GIS web services and the Historic Environment Viewer for current views.

Dataset landing page:
https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset

CSV resource:
https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data

The three dates belong to different resources/metadata fields and must not be conflated: the CSV snapshot's stated version date is 11 October 2023; the dataset-level data.gov.ie metadata says 11 January 2024; and the separately listed ArcGIS Feature Service resource reports 16 September 2026. The live service is therefore the freshest currently documented source in the reviewed metadata, while the CSV is a historical snapshot until its file is inspected.

### Official NIAH data download page

The Buildings of Ireland NIAH data-download page states that the downloads are CSV files indexed by NIAH registration number and include location, classification, rating, description, appraisal and links to records/images. It lists five regional files. Its Dublin file is described as including Dublin City, Fingal and South Dublin County.

https://www.buildingsofireland.ie/niah-data-download/

The Dublin ZIP link exposed by the page:
https://www.buildingsofireland.ie/niah/NIAHDataDownload/Dublin.zip

**Coverage issue:** the page's description of its Dublin ZIP names Dublin City, Fingal and South Dublin County, but does not name Dún Laoghaire–Rathdown. The archive must not assume that the Dublin ZIP alone covers all four local authorities. The national CSV should be the preferred complete source, with the four Dublin authorities selected by verified local-authority fields or official boundary/spatial assignment. If the regional ZIPs are used, Dún Laoghaire–Rathdown coverage must be reconciled from the appropriate additional source.

### Live GIS service — use with date caution

The official ArcGIS REST service describes a NIAH buildings point layer and exposes fields including REG_NO, NAME, address fields, COUNTY, LOCAL_AUTHORITY_, DESCRIPTION, APPRAISAL, DATEFROM, DATETO, RATING, ITM_E, ITM_N, LATITUDE, LONGITUDE, IMAGE_LINK and WEBSITE_LINK.

Service:
https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/ArcGIS/rest/services/NIAHBuildingsOpenData/FeatureServer/0

The service page reports its layer data last edited on 3 April 2025. It is therefore useful for schema inspection and comparison, but should not be represented as a verified November 2026 live snapshot. Prefer the latest official national CSV or the Historic Environment Viewer for current discovery.

## 2. Existing CICAN catalogue baseline

The repository's data/objects.json was inspected through the GitHub Contents API, which returned the complete file content. The repository Contents API metadata reports a file size of 1,250,260 bytes; the retrieved JSON content was 1,248,422 characters.

Parsed catalogue results:
- **452** total archive objects.
- **440** objects carry a national_inventory_reference.
- **362** distinct NIAH registration numbers occur among those 440 objects.
- **0** duplicate CICAN archive IDs were found.
- **78** additional occurrences are repeated NIAH references beyond the first occurrence of each distinct registration number.

The repeated NIAH references are not automatically errors. Some archive records describe distinct architectural components or micro-details associated with one NIAH-registered parent structure. Each repeated reference requires identity and parent/child review. Do not collapse or delete records merely because the NIAH registration number is shared.

Canonical file:
https://github.com/CicanGeorgeAlin/cican-dublin/blob/main/data/objects.json

### Existing coverage audit

The repository's data/coverage-audit.json is dated 17 November 2026 and reports:
- catalogue total: 452;
- four Dublin local authorities listed;
- zero records spatially assigned to a verified local authority;
- no local-authority record counts yet published;
- postal district counts are explicitly not substitutes for point-in-polygon administrative assignment.

This is a useful internal baseline, but its local-authority coverage remains unverified. The audit itself warns against treating postal-district labels as local-authority assignments.

Coverage audit:
https://github.com/CicanGeorgeAlin/cican-dublin/blob/main/data/coverage-audit.json

## 3. Critical corrections to the autopilot algorithm

### Correction A — catalogue retrieval

A previous fetch route returned an empty response for data/objects.json. The GitHub Contents API returned the full JSON and confirmed that the canonical file is not empty. The protocol has been amended to require a full-content route and JSON parsing, and to forbid treating an empty connector response as proof that the repository file is empty.

### Correction B — NIAH reference uniqueness

Do not enforce blanket uniqueness of NIAH registration numbers across archive objects. Instead:
1. check the identity of each physical asset/component;
2. identify parent/child or component relationships;
3. preserve distinct object records when independently identifiable and documented;
4. record the shared NIAH registration number as a common external reference;
5. flag only true duplicate archive objects for merge/review.

Metrics must be reported separately: total archive objects, objects carrying NIAH references, distinct NIAH registration numbers and repeated references requiring review.

## 4. First five NIAH candidates — current status

**Not yet selected or processed.**

The official Dublin regional ZIP was identified, but the download failed in the current research runtime. The national CSV listing is available and its metadata indicates a recent update, but the CSV bytes and rows were not inspected during this batch. It would be unsafe to invent five candidates or infer them from the current catalogue alone.

The next NIAH batch must:
1. obtain and inspect the current national CSV or extract the same authoritative records through the Historic Environment Viewer;
2. confirm the CSV's own version/date and field definitions;
3. filter to the four Dublin local authorities;
4. reconcile each candidate against the 452 existing archive objects and their 362 distinct NIAH references;
5. select up to five genuinely new, eligible NIAH structures;
6. verify each record's official NIAH page and coordinates before staging.

## 5. Batch 1 outcome ledger

| Measure | Result |
|---|---:|
| Existing catalogue objects | 452 |
| Objects with NIAH references | 440 |
| Distinct NIAH registration numbers | 362 |
| Duplicate CICAN archive IDs | 0 |
| Repeated NIAH-reference occurrences beyond first | 78 |
| NIAH records newly verified in this batch | 0 |
| New NIAH objects staged | 0 |
| New NIAH objects published | 0 |
| Production catalogue edits | 0 |
| Map-pin edits | 0 |
| Current four-authority NIAH total | Not yet verified |
| First five new candidates | Awaiting source extraction |

## 6. Sources

1. Department of Housing, Local Government and Heritage / data.gov.ie, National Inventory of Architectural Heritage (NIAH) National Dataset. Dataset page and CSV resource. https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset
2. Buildings of Ireland, NIAH Data Download. Regional CSV download descriptions and Dublin coverage note. https://www.buildingsofireland.ie/niah-data-download/
3. NIAH Buildings Open Data, ArcGIS REST Feature Layer. Field schema and last-edit metadata. https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/ArcGIS/rest/services/NIAHBuildingsOpenData/FeatureServer/0
4. Department of Housing, Local Government and Heritage, Historic Environment Viewer. https://www.archaeology.ie/advice-and-support/locate-a-monument-or-wreck/historic-environment-viewer/
5. CICAN Dublin Archive, canonical catalogue data/objects.json. https://github.com/CicanGeorgeAlin/cican-dublin/blob/main/data/objects.json
6. CICAN Dublin Archive, data/coverage-audit.json. https://github.com/CicanGeorgeAlin/cican-dublin/blob/main/data/coverage-audit.json

## Batch 1 conclusion

The canonical catalogue has been retrieved and parsed successfully: it contains 452 objects and no duplicate CICAN IDs. The NIAH references require relationship-aware reconciliation because 440 objects carry 362 distinct NIAH registration numbers. The latest official national CSV source and regional download route have been identified, but the current four-authority total and first five new records cannot yet be certified because the CSV/ZIP data rows were not accessible for inspection in this batch.

**No production catalogue records or map pins were changed.** The next batch remains NIAH-first: extract the latest authoritative rows, resolve the four-authority coverage, and verify up to five genuinely new records.
