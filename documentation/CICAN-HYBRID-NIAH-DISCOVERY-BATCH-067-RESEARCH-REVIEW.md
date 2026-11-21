# CICAN Dublin Archive — Batch 067 research review

**Status:** research-only; canonical exact-registration/title/address screen passed; footprint review pending  
**Accessed:** 21 November 2026  
**Candidates:** five individual NIAH registrations  
**Publication:** not authorised

## Candidate records

### 1. 109 Seville Place — NIAH 50010051
- Regional; Architectural; original use house, now apartment/flat; 1820–1840; built c.1830.
- Terraced two-bay, three-storey house over raised basement, one of a group of five similar houses. Machine-made red Flemish-bond brick, granite plinth, gauged-brick openings, replacement uPVC windows, Doric doorcase and shared entrance platform.
- NIAH describes an extended concrete platform shared with the neighbour to the south, with three granite steps.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010051/109-seville-place-dublin-1-co-dublin

### 2. 110 Seville Place — NIAH 50010052
- Regional; Architectural and Artistic; original use house; 1820–1840; built c.1830.
- Terraced two-bay, three-storey house over raised basement, one of a group of five similar houses. Red Flemish-bond brick, granite plinth, sash windows, Doric doorcase and shared entrance platform with granite paving and steps.
- NIAH appraisal places it in a terrace of seven tall red-brick late-Georgian houses.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010052/110-seville-place-dublin-1-co-dublin

### 3. 111 Seville Place — NIAH 50010053
- Regional; Architectural and Artistic; house; 1820–1840; built c.1830.
- Terraced two-bay, three-storey house over raised basement with two-storey rear extension. Red Flemish-bond brick, rebuilt upper façade, granite plinth, gauged-brick openings, Doric doorcase and original decorative leaded fanlight.
- NIAH describes it as one of a group of five similar houses and as part of the larger terrace of seven.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010053/111-seville-place-dublin-1-dublin

### 4. 112 Seville Place — NIAH 50010054
- Regional; Architectural; original use house, now apartment/flat; 1820–1840; built c.1830.
- Terraced two-bay, three-storey house over raised basement with two-storey rear extension. Red Flemish-bond brick, granite plinth, gauged-brick openings, Doric doorcase, early panelled door and wrought-iron railings.
- NIAH describes it as one of a group of five similar houses and part of a larger terrace of seven.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010054/112-seville-place-dublin-1-co-dublin

### 5. 113 Seville Place — NIAH 50010055
- Regional; Architectural; original use house, now apartment/flat; 1820–1840; built c.1830.
- Terraced two-bay, three-storey house over raised basement, built as one of a pair. Red Flemish-bond brick, granite plinth, gauged-brick openings and elliptical-headed entrance.
- NIAH describes it as one of a pair of the tallest structures on the terrace, abutted by a single-storey villa to the north; it has a shared granite platform and four concrete steps.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010055/113-seville-place-dublin-1-co-dublin

## Official national CSV coordinate reconciliation

All five registrations were found in the official NIAH Dublin missing-registration queue generated from the national CSV. The following values were matched by `REG_NO`. `ITM_E` and `ITM_N` are EPSG:2157; latitude and longitude are separately supplied fields.

| NIAH registration | Official CSV address | ITM_E | ITM_N | Latitude | Longitude |
|---|---|---:|---:|---:|---:|
| 50010051 | 109 Seville Place | 716769 | 735236 | 53.354428 | -6.245960 |
| 50010052 | 110 Seville Place | 716765 | 735240 | 53.354465 | -6.246018 |
| 50010053 | 111 Seville Place | 716761 | 735245 | 53.354510 | -6.246062 |
| 50010054 | 112 Seville Place | 716758 | 735249 | 53.354547 | -6.246120 |
| 50010055 | 113 Seville Place | 716753 | 735253 | 53.354584 | -6.246194 |

Source: NIAH National CSV, Department of Housing, Local Government and Heritage: https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data. The data.gov.ie metadata reports the dataset last updated 10 November 2026 and states that ITM easting/northings should be quoted for official purposes. It also warns that historic centroid positions were digitised relative to OSI 6-inch mapping and may need revision against larger-scale mapping.
- NIAH Data Download: https://www.buildingsofireland.ie/niah-data-download/
- NIAH National Dataset metadata: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset

The coordinate pairs displayed on individual NIAH pages do not identify a CRS. They are retained separately as raw page evidence and are not relabelled ITM. CSV points are source-derived historical centroids, not founder GPS or field-verified footprints.

## Canonical duplicate and cross-PR review

The full current-main `data/objects.json` (615 records) and `data/niah-registered-objects.json` (495 records) were parsed from Git blobs:
- Zero exact NIAH registration collisions for 50010051, 50010052, 50010053, 50010054 or 50010055.
- Zero normalized candidate name/address/alias collisions in either canonical array.
- All five candidates appear in the official NIAH Dublin missing-registration queue.
- Open PRs #28, #29, #30, #32, #33, #35, #36 and #37 were checked. No candidate registration is present as a candidate/import record.

The current-main public NIAH audit baseline is 495 unique references, all matched to the official national source. The missing-registration queue is a review queue, not an automatic import list.

## Spatial proximity and relationship flags

Approximate straight-line distances compare official CSV points with current-main source-derived archive points. They are proximity flags only; NIAH centroid positional accuracy is unspecified.

| Candidate | Nearest current-main point | Approx. distance |
|---|---|---:|
| 50010051 — 109 Seville Place | DUB-BLD-0086 / 6 Seville Place / NIAH 50010046 | 42 m |
| 50010052 — 110 Seville Place | DUB-BLD-0086 / 6 Seville Place / NIAH 50010046 | 44 m |
| 50010053 — 111 Seville Place | DUB-BLD-0199 / 81 Amiens Street / NIAH 50010085 | 43 m |
| 50010054 — 112 Seville Place | DUB-BLD-0199 / 81 Amiens Street / NIAH 50010085 | 41 m |
| 50010055 — 113 Seville Place | DUB-BLD-0199 / 81 Amiens Street / NIAH 50010085 | 38 m |

- **50010051 and Batch 066's 50010050 (108 Seville Place):** the 108 record describes a granite platform shared with the neighbour to the north; the 109 record describes a platform shared with the neighbour to the south. These may refer to the same shared entrance/platform context. Do not create duplicate platform or micro-detail objects without a footprint-level identification.
- **50010051–50010054:** individual descriptions use the phrase “one of a group of five similar houses”, while appraisals describe a larger terrace of seven. Preserve both statements as written; do not invent a definitive group boundary.
- **50010055:** NIAH describes it as one of a pair and notes a single-storey villa to the north. Do not automatically absorb it into the five-house group.
- Shared platforms, steps and railings are relationships/context, not grounds to merge the registered buildings.

## Remaining gates

1. Inspect suitable large-scale historic mapping / footprint evidence for the Seville Place terrace and shared entrance/platform relationships.
2. Preserve official CSV coordinate provenance; do not promote source points to field-verified positions.
3. Convert the evidence packet into candidate archive objects only after footprint and relationship review.
4. Validate any future object against `schemas/archive-object.schema.json`, source references, ID allocation and visual-record parity.
5. Run technical checks and inspect generated place pages before any publication decision.

## Explicit non-actions

No archive IDs assigned. No master catalogue, public NIAH register, source registry or visual inventory records added. No coordinates imported. No map pins authorised. No founder photography or field verification claimed. No production deployment.
