# CICAN DUBLIN — NIAH Rush / Kenure Registration Verification Batch 022

**Date:** 20 November 2026  
**Autopilot:** CICAN HERITAGE AUTOPILOT  
**Scope:** Rush and Kenure, Fingal, County Dublin  
**Cycle:** Official NIAH record verification and full-catalogue reconciliation  
**Status:** Research-only. No production objects, source-registry entries, visual records, map pins or website changes.

## 1. Purpose and rule

Continue the seven-record verification queue carried forward from Batch 021. The founder's current publishing rule is strict: only genuine NIAH registrations in Dublin City and County Dublin may enter the NIAH publishing stream. RPS-only and SMR-only features are excluded from this stream. Research leads are not treated as published records.

## 2. Full canonical catalogue and source-registry check

The complete current master catalogue was retrieved from its Git blob and parsed: **460 objects, 460 unique CICAN IDs**. The seven target registration numbers below were checked against every object's `national_inventory_reference`; none is currently present.

The full source registry was also retrieved and parsed: **577 source records**. No source-registry entry contained any of the seven target registration numbers.

| NIAH reference | Official NIAH identity | Exact reference in master | Exact reference in source registry |
|---|---|---:|---:|
| 11318003 | Kenure Park north gate lodge | No match | No match |
| 11324007 | Whitestown Road wall-mounted post box | No match | No match |
| 11324020 | Lower Main Street cast-iron water pump | No match | No match |
| 11324024 | The Thatched Cottage, Skerries Road | No match | No match |
| 11324010 | Sion House / former Rush Constabulary Barrack | No match | No match |
| 11324011 | Desio, 60 Lower Main Street | No match | No match |
| 11324031 | W.F. Price, Upper Main Street | No match | No match |

Name/address comparison found no matching Rush/Kenure object in the master catalogue. The only loose keyword hit was an unrelated thatched cottage at Rathbeale Road, Swords (DUB-BLD-0176, NIAH 11335014), which is not one of these Rush properties.

## 3. Official individual NIAH records retrieved

### 11318003 — Kenure Park north gate lodge
Official record: https://www.buildingsofireland.ie/buildings-search/building/11318003/kenure-park-rush-demesne

- Regional rating; architectural interest.
- Original use: gate lodge.
- NIAH date range 1820–1840; described as c.1830.
- Detached three-bay, single-storey lodge with advanced pedimented central bay and rear extension c.1880.
- NIAH's survey description says “now derelict”; this is the historic survey observation, not a current 2026 condition check.
- Page displays coordinate pair 326427, 256074 without an explicit CRS label beside it. Do not transform or publish it as ITM/WGS84 until the official dataset row and CRS are obtained.

### 11324024 — The Thatched Cottage, Skerries Road
Official record: https://www.buildingsofireland.ie/buildings-search/building/11324024/skerries-road-rush-rush

- Regional rating; architectural and social interest.
- Date range 1740–1820; described as c.1780.
- Detached four-bay, single-storey thatched house with projecting entrance porch; single-storey extension c.1950.
- The page describes a double-pitched thatched roof, raised rendered gable ends, three small rendered chimney stacks, square-headed windows, granite sills, single-pane sash windows and tongue-and-groove door.
- Page displays 326643, 254655 without a CRS label beside the pair. No coordinate transformation approved.

### 11324010 — Sion House, Lower Main Street
Official record: https://www.buildingsofireland.ie/buildings-search/building/11324010/sion-house-lower-main-street-rush-rush-co-dublin

- Regional rating; architectural and social interest.
- Previous name: Rush Constabulary Barrack; historical use recorded as Garda station/constabulary barracks; NIAH in-use field says house.
- Date range 1840–1850; described as c.1845.
- End-of-terrace three-bay, two-storey house with projecting entrance porch and two-storey rear extension.
- The historical barracks use is an attribute of this building, not a separate object.
- Page displays 326893, 254122 without a CRS label. No coordinate transformation approved.

### 11324011 — Desio, 60 Lower Main Street
Official record: https://www.buildingsofireland.ie/buildings-search/building/11324011/desio-lower-main-street-rush-rush

- Regional rating; architectural and social interest.
- Date range 1850–1900; described as c.1875.
- Detached four-bay, single-storey thatched house with attic and three-bay rear extension c.1990.
- NIAH records a double-pitched thatched roof with decorative roped ridging and eaves, cement-rendered stack, rendered walls, granite sills and timber sash windows as recorded c.2000.
- Page displays 326990, 254106 without a CRS label. No coordinate transformation approved.
- The c.2000 fabric description is not a current condition inspection.

### 11324031 — W.F. Price, Upper Main Street
Official record: https://www.buildingsofireland.ie/buildings-search/building/11324031/w-f-price-upper-main-street-rush-rush-dublin

- Regional rating; architectural and artistic interest.
- Date range 1880–1900; described as c.1890.
- Semi-detached four-bay, two-storey house with plaster and timber shopfront to ground floor.
- NIAH records original use and in-use status as house; do not infer current retail use solely from the shopfront.
- Page displays 326334, 254150 without a CRS label. No coordinate transformation approved.

## 4. Official NIAH search-listing evidence only

### 11324007 — Whitestown Road post box
Official NIAH post-box search listing: https://www.buildingsofireland.ie/buildings-search/?county=&date_from=&date_to=&group=&location_type=building&query=Post+box&search_page=24&type=

The official NIAH search result lists a wall-mounted cast-iron post box on Whitestown Road, Rush, c.1905, with an ER VII monogram. The individual record page was not retrieved in this batch. Do not add detailed material, condition or exact position claims beyond the search-result wording.

### 11324020 — Lower Main Street water pump
Official NIAH water-pump search listing: https://www.buildingsofireland.ie/buildings-search/?county=&date_from=&date_to=&group=&location_type=building&query=water+pump&search_page=7&type=

The official NIAH search result lists a cast-iron water pump on Lower Main Street, Rush, c.1900, square profile, “now missing parts.” The individual record page was not retrieved in this batch. This is distinct from NIAH 11324012, the Harbour Road pump, and from other Dublin water-pump registrations.

## 5. Coordinate and field-verification controls

The individual NIAH pages show coordinate pairs, but the inspected page output does not label the coordinate reference system beside those values. NIAH's data-download documentation states that the official datasets contain location information in ITM, latitude/longitude and National Grid formats:

https://www.buildingsofireland.ie/niah-data-download/

The live NIAH Feature Service schema also exposes REG_NO, LOCAL_AUTHORITY_, ITM_E, ITM_N, LATITUDE and LONGITUDE fields, with the layer spatial reference EPSG:2157:

https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/ArcGIS/rest/services/NIAHBuildingsOpenData/FeatureServer/0

A direct feature query for these seven registrations could not be retrieved in this session. Therefore no live feature attributes, geometry or coordinate CRS are claimed here. Do not guess a CRS from the numeric appearance of the page coordinate pairs. Do not create map pins from them. The NIAH survey descriptions are historical survey evidence, not founder field verification or proof of present-day survival.

## 6. Outcome

- Seven official NIAH registration numbers checked.
- Five full individual NIAH pages retrieved.
- Two official NIAH search-result listings retrieved.
- Seven exact registration numbers absent from the 460-object master catalogue.
- Seven exact registration numbers absent from the 577-record source registry.
- New production objects: **0**.
- New source-registry entries: **0**.
- New visual records or photographs: **0**.
- New map pins: **0**.
- SEO pages/sitemap changes: **0**.

This is a deliberate hold, not a failed batch. The registration identities are confirmed by official NIAH sources, but the official coordinate rows/CRS and full record content for two small objects remain outstanding. Keep the existing published 340-record Stage 1 collection unchanged until the accepted records can be imported with complete provenance and the website's established quality checks.

## 7. Next checkpoint — Batch 023

1. Obtain an accessible official NIAH Dublin dataset or live feature response for 11318003, 11324007, 11324020, 11324024, 11324010, 11324011 and 11324031.
2. Preserve ITM, latitude/longitude and National Grid fields independently; record the layer CRS and coordinate provenance.
3. Retrieve individual NIAH pages for 11324007 and 11324020 if possible.
4. Continue systematic NIAH-only discovery in Rush/Kenure, then Lusk and nearby Fingal settlements, using official county search results and the full catalogue for deduplication.
5. Promote only complete, verified records. When accepted, update master objects, source registry, visual inventory, NIAH public collection, individual SEO page and sitemap together; run free GitHub quality checks before deployment.

**Production impact:** Documentation only. No production catalogue, map, SEO page, source registry, visual inventory or website content was changed.
