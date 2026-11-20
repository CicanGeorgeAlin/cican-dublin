# CICAN Dublin Archive — NIAH Candidate Reconciliation, Batch 003

**Research date:** 20 November 2026  
**Scope:** Identity and catalogue-collision audit for the five Batch 002 candidates; review of the official NIAH Feature Service schema and individual Buildings of Ireland records.  
**Status:** Research-only. No production objects, map pins, photographs, or spatial administrative assignments were created or changed.

## 1. Summary

The canonical `data/objects.json` file was retrieved from the repository's GitHub Contents API on the `main` branch and parsed successfully.

| Catalogue check | Result |
|---|---:|
| Total objects | 452 |
| Objects carrying an NIAH reference | 440 |
| Distinct NIAH references | 362 |
| Duplicate CICAN archive IDs | 0 |
| Batch 002 candidate refs already present | 0 of 5 |
| Batch 002 candidate name/alias matches in tested fields | 0 of 5 |

The five tested NIAH registration numbers were:
- 11201140 — Lucan House cemetery and medieval remains
- 11205035 — Coolevin House
- 11211029 — Rathfarnham weir
- 60260255 — Saint Matthias' Church (Killiney-Ballybrack)
- 11335003 — Pastorville

The alias collision check searched the existing object's name, title, address, location, description, parent_id and related_objects fields. No matches were found for the candidate aliases tested. This is a strong first-pass identity check, not a guarantee that no related object exists under an unexpected label or a separately modelled component.

## 2. Official source review

The official NIAH Feature Service layer metadata confirms that the point layer exposes fields including:
- `REG_NO`
- `NAME`
- `LOCAL_AUTHORITY_`
- `ITM_E` and `ITM_N`
- `LATITUDE` and `LONGITUDE`
- `DATEFROM` and `DATETO`
- `RATING`, `CSI`, `ORIGINAL_TYPE`, `IN_USE_AS_TYPE`

The layer's spatial reference is EPSG:2157 (Irish Transverse Mercator). The service metadata page reports the layer's last edit/data edit timestamps as 3 April 2025. The data.gov.ie resource metadata separately lists the NIAH Feature Service resource as updated 16 September 2026. These timestamps refer to different metadata/data records and should not be conflated.

**Important limitation:** An attempted direct REST query for the five registration numbers did not return a readable response in this research environment. Therefore this batch does not claim to have retrieved or independently confirmed the live feature attributes, exact `LOCAL_AUTHORITY_` values, or service-returned geometry. The field schema is verified; the five live feature rows are not.

## 3. Record-by-record reconciliation

| NIAH ref | Candidate | Official Buildings of Ireland page | Official ITM coordinate |
|---|---|---|---|
| 11201140 | Lucan House cemetery and medieval remains | https://www.buildingsofireland.ie/buildings-search/building/11201140/lucan-house-lucan-demesne-lucan-dublin | E 303172, N 235187 |
| 11205035 | Coolevin House | https://www.buildingsofireland.ie/buildings-search/building/11205035/coolevin-house-lucan-newlands-road-neillstown-dublin | E 306690, N 232684 |
| 11211029 | Rathfarnham weir | https://www.buildingsofireland.ie/buildings-search/building/11211029/rathfarnham-rathfarnham-dublin | E 314761, N 229659 |
| 60260255 | Saint Matthias' Church (Killiney-Ballybrack) | https://www.buildingsofireland.ie/buildings-search/building/60260255/saint-matthias-church-killiney-ballybrack-church-road-dublin | E 324923, N 224732 |
| 11335003 | Pastorville | https://www.buildingsofireland.ie/buildings-search/building/11335003/swords-parochial-house-swords-demesne-fingal | E 318548, N 246989 |

The coordinates above are transcribed from the individual official NIAH records. They remain in ITM and have not been converted or used to create map pins.

### Candidate-specific notes

**11201140 — Lucan House cemetery and medieval remains**  
The official record describes an enclosed cemetery with the unroofed remains of a church rebuilt around 1730, remains of a medieval tower house, and carved headstones from the early eighteenth century. Its original and current use are recorded as graveyard/cemetery; date range 1700–1740; rating Regional. The record's survey description and appraisal make clear this is a group of features within the Lucan House demesne, so the archive should distinguish the cemetery/ruins from other separately registered Lucan House demesne features.

**11205035 — Coolevin House**  
The official record describes a detached, single-storey, U-plan house of about 1885, with diagonally set corner projections and a central gabled glazed porch. Original/current use: house; date range 1880–1890; rating Regional.

**11211029 — Rathfarnham weir**  
The official record describes a two-stage weir on the River Dodder, around 1800, originally supplying a mill stream. Original/current use: weir; date range 1780–1820; rating Regional. Its archive classification should remain infrastructure/industrial heritage rather than being represented as a building.

**60260255 — Saint Matthias' Church (Killiney-Ballybrack)**  
The official record dates the design to 1834 and construction to 1835, with later improvements in 1879–80. It describes a Church of Ireland church with a cruciform plan and identifies architectural, artistic, historical, scientific, social and technical interest. The record also identifies a related rectory and parochial hall as separate NIAH records; these must not be merged into the church object.

**11335003 — Pastorville**  
The official record describes a detached, three-bay, two-storey red-brick parochial house of about 1895 and attributes its design to J. Kelly Freeman, who exhibited the design at the Royal Hibernian Academy in 1894. Original/current use: presbytery/parochial/curate's house; date range 1890–1900; rating Regional.

## 4. Administrative geography — unresolved

No exact local-authority assignment is approved in this batch. The locality-based suggestions in Batch 002 remain provisional only. The Feature Service schema has a `LOCAL_AUTHORITY_` field, but the actual five feature rows were not retrieved. Do not infer local authority from postal district, townland, street name or a broad locality.

## 5. Coordinate handling

- Preserve the official ITM eastings/northings exactly as published.
- Do not silently transform or round coordinates.
- No EPSG:2157 to EPSG:4326 transformation is recorded in this batch.
- No map pins or WGS84 coordinates are approved.
- Before transformation, retrieve the live feature row and establish the exact source coordinate values and transformation method; retain both source and transformed values with provenance.

## 6. Next verification actions

1. Retrieve the five live NIAH Feature Service rows by `REG_NO`, including `LOCAL_AUTHORITY_`, coordinate fields, dates, rating, interest categories, use and geometry.
2. If the service query remains inaccessible, use the official Historic Environment Viewer query/export workflow or obtain the official source extract; record the exact source and retrieval date.
3. Verify administrative boundaries with authoritative 2026 local-authority boundary data and a documented point-in-polygon operation, not locality assumptions.
4. Apply a documented EPSG:2157 to EPSG:4326 transformation, retain source ITM, and review positional precision before any public pin.
5. Perform a second relationship-level review for Lucan House demesne and the Saint Matthias' ecclesiastical group, preserving separate NIAH records and parent/child relationships where justified.
6. Only after these checks, prepare object drafts for review. Do not publish automatically.

## 7. Source register

- Buildings of Ireland / NIAH, Lucan House cemetery, registration 11201140: https://www.buildingsofireland.ie/buildings-search/building/11201140/lucan-house-lucan-demesne-lucan-dublin
- Buildings of Ireland / NIAH, Coolevin House, registration 11205035: https://www.buildingsofireland.ie/buildings-search/building/11205035/coolevin-house-lucan-newlands-road-neillstown-dublin
- Buildings of Ireland / NIAH, Rathfarnham weir, registration 11211029: https://www.buildingsofireland.ie/buildings-search/building/11211029/rathfarnham-rathfarnham-dublin
- Buildings of Ireland / NIAH, Saint Matthias' Church, registration 60260255: https://www.buildingsofireland.ie/buildings-search/building/60260255/saint-matthias-church-killiney-ballybrack-church-road-dublin
- Buildings of Ireland / NIAH, Pastorville, registration 11335003: https://www.buildingsofireland.ie/buildings-search/building/11335003/swords-parochial-house-swords-demesne-fingal
- NIAH Buildings Open Data Feature Service layer metadata: https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildingsOpenData/FeatureServer/layers
- data.gov.ie NIAH National Dataset and Feature Service resource metadata: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset

## 8. Production change statement

This is a documentation-only research batch. The production object catalogue, website application, map data, photographs and public-facing content were not changed.
