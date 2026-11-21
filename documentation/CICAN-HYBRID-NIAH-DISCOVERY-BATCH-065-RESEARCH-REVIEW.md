# CICAN Dublin Archive — Batch 065 research review

**Status:** research-only; exact registration/title/address screen passed; related-footprint review remains open  
**Accessed:** 21 November 2026  
**Candidates:** five individual NIAH registrations  
**Publication:** not authorised

## Candidate records

### 1. 103 Seville Place — NIAH 50010039
- Regional; Architectural and Artistic; house; 1820–1840; built c.1830.
- Flemish-bond red brick, granite plinth, parapet and M-profile slate roof, sash windows, Ionic doorcase, original timber door and fanlight.
- NIAH describes it as one of a terrace of five dating from the early nineteenth century.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010039/103-seville-place-dublin-1-co-dublin

### 2. 104 Seville Place — NIAH 50010040
- Regional; Architectural and Artistic; house, now recorded as apartments; 1820–1840; built c.1830.
- Terraced two-bay, three-storey house over raised basement, with Flemish-bond brickwork, granite plinth, parapet roof and gauged-brick openings.
- NIAH describes it as one of a terrace of five built before insertion of the former Dublin and Drogheda railway.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010040/104-seville-place-dublin-1-co-dublin

### 3. Parcels Post Office, 102–106 Amiens Street / Preston Street — NIAH 50010042
- Regional; Architectural, Artistic, Historical and Social; former post office, now office; 1890–1895; built 1892.
- Detached seven-bay, two-storey former railway parcels office with Dutch-gable return, Flemish Revival brickwork, shaped gables, limestone detailing and elaborate entrance.
- NIAH attributes the design to J. Howard Pentland and identifies the building as part of the Great Northern Railway Terminus complex.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010042/parcels-post-office-102-106-amiens-street-preston-street-dublin-1-dublin

### 4. Hugh Ward & Co. Solicitors, 9 Seville Place — NIAH 50010043
- Regional; Architectural and Artistic; former house, now office; 1840–1860; built c.1850.
- End-of-terrace two-bay, two-storey house over raised basement, with yellow Flemish-bond brick, granite plinth and steps, Doric doorcase and cast-iron railings.
- NIAH describes it as the southern end of a terrace of seven houses.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010043/hugh-ward-co-solicitors-9-seville-place-dublin-1-co-dublin

### 5. 8 Seville Place — NIAH 50010044
- Regional; Architectural and Artistic; house; 1840–1860; built c.1850.
- Terraced two-bay, two-storey house over raised basement, with yellow Flemish-bond brickwork, granite plinth, slate roof, Doric doorcase, original timber door and petal fanlight, shared granite steps, bootscraper and iron railings.
- NIAH describes it as part of a terrace of seven similar houses on the west side of Seville Place.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010044/seville-place-dublin-1-dublin-city-13

## Official national CSV coordinate reconciliation

The successful Batch 065 quality run uploaded the official NIAH Dublin missing-registration queue generated from the national CSV. All five candidates occur in that queue. The CSV fields were matched by `REG_NO`; `ITM_E` and `ITM_N` are EPSG:2157, while `LATITUDE` and `LONGITUDE` are separately supplied fields.

| NIAH registration | Official CSV address | ITM_E | ITM_N | Latitude | Longitude |
|---|---|---:|---:|---:|---:|
| 50010039 | 103 Seville Place | 716803 | 735197 | 53.354070 | -6.245464 |
| 50010040 | 104 Seville Place | 716800 | 735203 | 53.354125 | -6.245492 |
| 50010042 | 102–106 Amiens Street / Preston Street | 716659 | 735095 | 53.353186 | -6.247663 |
| 50010043 | Hugh Ward & Co. Solicitors, 9 Seville Place | 716760 | 735177 | 53.353900 | -6.246102 |
| 50010044 | 8 Seville Place | 716761 | 735186 | 53.353981 | -6.246098 |

Source: NIAH National CSV, Department of Housing, Local Government and Heritage, download URL: https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data. The data.gov.ie metadata reports the dataset last updated 10 November 2026 and states that ITM easting/northings should be quoted for official purposes. It also warns that existing point centroids were digitised relative to OSI 6-inch mapping and may need revision against larger-scale mapping:
- NIAH Data Download: https://www.buildingsofireland.ie/niah-data-download/
- NIAH National Dataset metadata: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset

The individual NIAH pages display coordinate pairs but do not label their CRS. Those raw page values remain separate evidence and must not be relabelled as ITM. CSV points are source-derived historic centroids, not founder GPS, surveyed building footprints or field-verified positions.

## Canonical duplicate and cross-PR review

The complete current-main `data/objects.json` (615 records) and `data/niah-registered-objects.json` (495 records) were parsed from their Git blobs. The candidate set has:
- Zero exact NIAH registration collisions in either canonical array.
- Zero normalized candidate name/address/alias collisions in either canonical array.
- All five registrations present in the official Dublin missing-registration queue.
- No candidate registration found in the diffs/comments of open PRs #28, #29, #30, #32, #33 or #35. PR #36 is this research packet.

The successful official-register audit reports 48,327 national CSV rows and 495/495 existing archive NIAH references matched uniquely. This is a useful baseline check; the missing-registration queue is a review queue, not an automatic import list.

## Spatial proximity and relationship flags

Straight-line distances below compare official CSV latitude/longitude points with current-main source-derived points. They are only proximity flags because NIAH centroid positional accuracy is unspecified.

| Candidate | Nearest current-main point | Approx. distance |
|---|---|---:|
| 50010039 — 103 Seville Place | DUB-BLD-0320 / 102 Seville Place / NIAH 50010038 | 6 m |
| 50010040 — 104 Seville Place | DUB-BLD-0320 / 102 Seville Place / NIAH 50010038 | 12 m |
| 50010042 — Parcels Post Office | DUB-BLD-0210 / 108 Amiens Street / NIAH 50010113 | 44 m |
| 50010043 — 9 Seville Place | DUB-BLD-0086 / 6 Seville Place / NIAH 50010046 | 22 m |
| 50010044 — 8 Seville Place | DUB-BLD-0086 / 6 Seville Place / NIAH 50010046 | 14 m |

- **50010039 and 50010040:** individually registered adjacent houses in the NIAH-described terrace of five. Their close centroids and shared terrace context do not make them duplicates.
- **50010042:** a separately described railway parcels office within the Great Northern Railway Terminus complex. It is approximately 50 m from DUB-INF-0195 / NIAH 50010041 (Connolly Station water tower and turntable). It must remain a separate registration, but its footprint still needs comparison with the water tower and NIAH 50010034 locomotive shed before import.
- **50010043 and 50010044:** separately registered houses in a terrace of seven. Their official CSV points are approximately 9 m apart. The nearby 6 Seville Place record is a different registered house.
- **50010044 bootscraper:** NIAH records a cast-iron bootscraper at 8 Seville Place. Existing DUB-STR-0073 is specifically documented at 6 Seville Place; the addresses differ, but verify the exact entrance object before creating any new micro-detail record.

## Exclusion and related-feature controls

- **50010041 — Connolly Station water tower and adjacent turntable:** excluded because it is already represented in current main as **DUB-INF-0195 / Connolly Station**. Do not create a second archive object for it.
- **50010042 — Parcels Post Office:** a separate NIAH building within the Great Northern Railway Terminus complex. Do not conflate it with the water tower (50010041) or the current-main locomotive shed (50010034).
- **50010039–50010040** and **50010043–50010044:** preserve their separate NIAH identities and terrace relationships.
- Do not infer parcel boundaries or feature extents from centroid distances.

## Remaining gates

1. Obtain and visually inspect suitable large-scale historic mapping / footprint evidence for the railway complex and Seville Place terrace relationships.
2. Retain the official CSV coordinate provenance; do not promote source points to field-verified positions.
3. Convert the evidence packet into candidate archive objects only after footprint and relationship review.
4. Then validate every candidate against `schemas/archive-object.schema.json`, source references, ID allocation, and visual-record parity.
5. Run technical checks and inspect generated place pages before any publication decision.

## Explicit non-actions

No archive IDs assigned. No master catalogue, public NIAH register, source registry or visual inventory records added. No coordinates imported. No map pins authorised. No founder photography or field verification claimed. No production deployment.
