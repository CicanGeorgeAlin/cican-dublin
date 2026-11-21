# CICAN Dublin Archive — Batch 066 research review

**Status:** research-only; canonical exact-registration/title/address screen passed; footprint review pending  
**Accessed:** 21 November 2026  
**Candidates:** five individual NIAH registrations  
**Publication:** not authorised

## Candidate records

### 1. John McElhinney & Co., 7 Seville Place — NIAH 50010045
- Regional; Architectural and Artistic; original use house, now office; 1840–1860; built c.1850.
- Terraced two-bay, two-storey house over raised basement, with yellow Flemish-bond brickwork, rusticated granite quoins, granite plinth, sash windows, Doric doorcase and original panelled door.
- NIAH describes it as one of seven similar houses on the west side of Seville Place.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010045/john-mcelhinney-co-7-seville-place-dublin-1-co-dublin

### 2. 5 Seville Place — NIAH 50010047
- Regional; Architectural; house; 1840–1860; built c.1850.
- Terraced two-bay, two-storey house over raised basement, with yellow Flemish-bond brick, original two-over-two timber sash windows, round-headed entrance, shared granite platform and steps, and cast-iron railings.
- NIAH records a cast-iron bootscraper and identifies it as part of the west-side terrace of seven.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010047/seville-place-dublin-1-dublin

### 3. 4 Seville Place — NIAH 50010048
- Regional; Architectural and Artistic; house, now apartment/flat; 1840–1860; built c.1850.
- Terraced two-bay, two-storey house over raised basement, with yellow Flemish-bond brick, granite plinth, gauged-brick openings, sash windows, original masonry doorcase and petal fanlight, shared granite platform and steps.
- NIAH identifies it as part of the same west-side terrace of seven.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010048/seville-place-dublin-1-dublin

### 4. 3 Seville Place — NIAH 50010049
- Regional; Architectural and Artistic; house; 1840–1860; built c.1850.
- End-of-terrace two-bay, two-storey house over raised basement, with yellow Flemish-bond brick, granite quoins and plinth, original Roman cement doorcase, original panelled door and petal fanlight, shared granite platform, cast-iron bootscraper and steps.
- NIAH identifies it as the terminating house of the west-side terrace of seven.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010049/seville-place-dublin-1-dublin

### 5. 108 Seville Place — NIAH 50010050
- Regional; Architectural and Artistic; house, now apartment/flat; 1820–1840; built c.1830.
- End-of-terrace two-bay, three-storey house over raised basement, with red Flemish-bond brickwork, granite plinth, sash windows and original Doric doorcase and timber door.
- NIAH records an extended granite platform shared with the neighbour to the north, with a cast-iron bootscraper and coal-hole cover.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010050/108-seville-place-dublin-1-dublin

## Official national CSV coordinate reconciliation

All five registrations were found in the official NIAH Dublin missing-registration queue generated from the national CSV. The following values were matched by `REG_NO`. `ITM_E` and `ITM_N` are EPSG:2157; latitude and longitude are separately supplied fields.

| NIAH registration | Official CSV address | ITM_E | ITM_N | Latitude | Longitude |
|---|---|---:|---:|---:|---:|
| 50010045 | 7 Seville Place | 716757 | 735191 | 53.354027 | -6.246156 |
| 50010047 | 5 Seville Place | 716749 | 735201 | 53.354118 | -6.246273 |
| 50010048 | 4 Seville Place | 716745 | 735207 | 53.354173 | -6.246331 |
| 50010049 | 3 Seville Place | 716740 | 735212 | 53.354219 | -6.246404 |
| 50010050 | 108 Seville Place | 716773 | 735232 | 53.354391 | -6.245901 |

Source: NIAH National CSV, Department of Housing, Local Government and Heritage: https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data. The data.gov.ie metadata reports the dataset last updated 10 November 2026 and states that ITM easting/northings should be quoted for official purposes. It also warns that historic centroid positions were digitised relative to OSI 6-inch mapping and may need revision against larger-scale mapping.
- NIAH Data Download: https://www.buildingsofireland.ie/niah-data-download/
- NIAH National Dataset metadata: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset

The coordinate pairs displayed on individual NIAH pages do not identify a CRS. They are retained separately as raw page evidence and are not relabelled ITM. CSV points are source-derived historical centroids, not founder GPS or field-verified footprints.

## Canonical duplicate and cross-PR review

The full current-main `data/objects.json` (615 records) and `data/niah-registered-objects.json` (495 records) were parsed from Git blobs:
- Zero exact NIAH registration collisions for 50010045, 50010047, 50010048, 50010049 or 50010050.
- Zero normalized candidate name/address/alias collisions in either canonical array.
- All five candidates appear in the official NIAH Dublin missing-registration queue.
- Open PRs #28, #29, #30, #32, #33, #35 and #36 were checked. No candidate registration is present as a candidate/import record. PR #36 mentions 50010045 only as nearby context in a Batch 065 relationship note, not as a candidate import.

The current-main public NIAH audit baseline is 495 unique references, all matched to the official national source. The missing-registration queue is a review queue, not an automatic import list.

## Spatial proximity and relationship flags

Approximate straight-line distances compare official CSV points with current-main source-derived archive points. These are proximity flags only; NIAH centroid positional accuracy is unspecified.

| Candidate | Nearest current-main point | Approx. distance |
|---|---|---:|
| 50010045 — 7 Seville Place | DUB-BLD-0086 / 6 Seville Place / NIAH 50010046 | 7 m |
| 50010047 — 5 Seville Place | DUB-BLD-0086 / 6 Seville Place / NIAH 50010046 | 6 m |
| 50010048 — 4 Seville Place | DUB-BLD-0086 / 6 Seville Place / NIAH 50010046 | 13 m |
| 50010049 — 3 Seville Place | DUB-BLD-0086 / 6 Seville Place / NIAH 50010046 | 20 m |
| 50010050 — 108 Seville Place | DUB-BLD-0086 / 6 Seville Place / NIAH 50010046 | 40 m |

- **50010045, 50010047, 50010048 and 50010049:** members of the same west-side terrace of seven as NIAH 50010046 (6 Seville Place), already archived as DUB-BLD-0086. The terrace members are separate individually registered buildings. Close centroids and shared architectural features do not establish duplicate records.
- **50010047 and 50010049 bootscrapers:** each is described by NIAH. Do not assume these are the same physical item as DUB-STR-0073 at 6 Seville Place or create new micro-detail IDs from text alone.
- **50010050:** a different address and NIAH registration from 100–102 Seville Place (NIAH 50010036–50010038) already represented in main. Its shared granite platform, bootscraper and coal-hole cover are potential future micro-detail leads, not separate objects in this batch.
- The historic map / footprint review remains necessary before any claim about parcel boundaries or shared entrance-feature extents.

## Exclusion

**50010046 — 6 Seville Place** is already represented as **DUB-BLD-0086** and is deliberately excluded from this five-record batch. It is retained as a neighbouring terrace reference only.

## Remaining gates

1. Inspect suitable large-scale historic mapping / footprint evidence for the west-side Seville Place terrace and the separate 108 Seville Place property.
2. Preserve official CSV coordinate provenance; do not promote source points to field-verified positions.
3. Convert the evidence packet into candidate archive objects only after footprint and relationship review.
4. Validate any future object against `schemas/archive-object.schema.json`, source references, ID allocation and visual-record parity.
5. Run technical checks and inspect generated place pages before any publication decision.

## Explicit non-actions

No archive IDs assigned. No master catalogue, public NIAH register, source registry or visual inventory records added. No coordinates imported. No map pins authorised. No founder photography or field verification claimed. No production deployment.
