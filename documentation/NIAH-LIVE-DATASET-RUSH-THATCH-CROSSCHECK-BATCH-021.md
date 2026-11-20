# CICAN Dublin Archive — NIAH Live Dataset & Rush Thatch Cross-Check (Batch 021)

**Status:** Research documentation only. The live national NIAH Feature Service schema and authoritative dataset metadata were inspected. The service's query endpoint could not be retrieved in this session, so no individual live feature attributes are claimed. No production catalogue, source registry, visual inventory, coordinates or map pins changed.
**Scope:** NIAH data provenance and Rush / Kenure NIAH records.
**Duplicate control:** Rush records below have prior batch coverage. This batch is a source-method update and cross-check, not new production object creation.

## 1. Key source discovery — live NIAH Feature Service

The data.gov.ie national NIAH dataset identifies the live service:

https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/ArcGIS/rest/services/NIAHBuildingsOpenData/FeatureServer

Layer 0 is named **NIAHBuildings** and is a point feature layer. Its published spatial reference is **2157 (Irish Transverse Mercator, EPSG:2157)**. The layer exposes the following relevant fields:

- REG_NO — NIAH registration number
- ORIGINAL_TYPE and IN_USE_AS_TYPE
- NAME, NUMBER, STREET1, STREET2, TOWN, TOWNLAND, COUNTY
- LOCAL_AUTHORITY_
- DESCRIPTION and APPRAISAL
- DATEFROM, DATETO and RATING
- ITM_E and ITM_N
- LATITUDE and LONGITUDE
- IMAGE_LINK and WEBSITE_LINK
- SURVEY and CSI

The layer metadata states a maximum record count of 2,000 and supports JSON, GeoJSON and PBF query formats. Its last edit timestamp shown on the layer page is 3 April 2025.

**Coordinate policy confirmed:** ITM_E / ITM_N are explicit ITM fields, with layer spatial reference EPSG:2157. Latitude/longitude are separate fields. Do not treat the raw NIAH page coordinate pair as ITM unless its source field or record metadata establishes that. The national dataset metadata specifically says ITM easting/northing should be quoted for official purposes and that older Irish Grid and ITM values may both be supplied.

## 2. National CSV — version and coverage caution

The data.gov.ie resource page describes a national CSV bulk download with version date **11 October 2023**. It is a snapshot, not necessarily the latest record state. The same dataset lists a live Feature Service for current GIS queries. The Buildings of Ireland NIAH Data Download page describes separate regional CSVs, including Dublin (Dublin City, Fingal and South Dublin County), and says the regional downloads are refreshed biannually.

The NIAH website's download page returned HTTP 403 when opened through the available retrieval route in this session. The data.gov.ie metadata and live ArcGIS layer page were accessible. A direct feature query for the seven selected Rush/Kenure registrations could not be fetched by the web retrieval service; therefore **no attribute rows or geometries are reproduced here**.

## 3. Target records for exact live feature query

The next query should retrieve these registrations, requesting all fields and geometry in EPSG:2157:

- 11318003 — Kenure Park north gate lodge (Batch 019)
- 11324007 — Whitestown Road post box (Batch 017/018)
- 11324010 — Sion House (Batch 020)
- 11324011 — Desio (Batch 020)
- 11324020 — Lower Main Street water pump (Batch 017/018)
- 11324024 — The Thatched Cottage, Skerries Road (Batch 020)
- 11324031 — W.F. Price (Batch 020)

The service layer schema confirms that fields exist; it does not, by itself, prove the values for these specific registrations. Do not infer their ITM or geographic coordinates from NIAH web page coordinate pairs.

## 4. Rush thatched-house inventory — additional cross-check

The official NIAH Vernacular & Thatch search pages return these Rush registrations:

- **11324001 — Millbank**, c.1850, terraced two-bay single-storey thatched house.
- **11324005 — Sandy Road**, c.1880, terraced three-bay single-storey thatched house.
- **11324011 — Desio**, c.1875, detached four-bay single-storey thatched house with attic.
- **11324017 — Sandy Road**, c.1800, end-of-terrace rendered mud-walled thatched house.
- **11324018 — Tigín**, c.1780, terraced two-bay single-storey thatched house.
- **11324019 — Shamrock Cottage**, c.1850, end-of-terrace four-bay thatched house.
- **11324021 — 14 Upper Main Street**, c.1780, terraced four-bay thatched house.
- **11324022 — 16 Lower Main Street**, c.1760, terraced five-bay two-storey thatched house.
- **11324024 — The Thatched Cottage, Skerries Road**, c.1780.
- **11324032 — Kilbush Lane**, c.1850, detached seven-bay thatched house with attic.

Several of these were already examined in earlier research batches. This is a cross-check against current NIAH search listings, not a statement that all are absent from the production catalogue.

**Specific distinction:** 11324005 and 11324017 are two separate Sandy Road NIAH registrations. Do not merge them merely because their street label is the same. The Fingal Thatch Project survey locations also need their own source references and must not be equated to NIAH IDs without explicit cross-identification.

## 5. Newly reinforced NIAH search results — small street objects

The official NIAH search pages continue to list:

- 11324007 — Whitestown Road wall-mounted cast-iron post box, c.1905, ER VII monogram.
- 11324020 — Lower Main Street cast-iron water pump, c.1900, square profile, now missing parts.
- 11324012 — Harbour Road cast-iron water pump, c.1900, square profile with curved handle.

The two Rush pumps remain distinct registrations and different street locations. The NIAH search results are evidence of the inventory descriptions, not proof of current survival or condition.

## 6. Sources

1. data.gov.ie, National Inventory of Architectural Heritage national dataset, including national CSV snapshot details and live Feature Service endpoint: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/cac7450a-38b6-4016-9b7a-39b4efda00d5
2. NIAH Feature Service, Layer 0 metadata and schema: https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/ArcGIS/rest/services/NIAHBuildingsOpenData/FeatureServer/0
3. NIAH Data Download page: https://www.buildingsofireland.ie/niah-data-download/
4. NIAH post-box search page, including 11324007: https://www.buildingsofireland.ie/buildings-search/?county=&date_from=&date_to=&group=&location_type=building&query=Post+box&search_page=24&type=
5. NIAH water-pump search page, including 11324020: https://www.buildingsofireland.ie/buildings-search/?county=&date_from=&date_to=&group=&location_type=building&query=water+pump&search_page=7&type=
6. NIAH Vernacular & Thatch search page, including Rush records 11324005, 11324011 and 11324017: https://www.buildingsofireland.ie/search-vernacular-thatch-building-surveys/?county=&query=&search_page=11&thatch=truthy
7. NIAH Vernacular & Thatch search page, including Rush records 11324018, 11324019 and 11324021: https://www.buildingsofireland.ie/search-vernacular-thatch-building-surveys/?county=&query=&search_page=12&thatch=truthy
8. NIAH County Dublin search results, including 11324023–11324032: https://www.buildingsofireland.ie/buildings-search/?county=DU&date_from=&date_to=&group=&location_type=building&query=&search_page=1&town=&townland=&type=

## 7. Batch 022 priorities

1. Obtain the live feature query response or national CSV bytes through a route that permits download; extract exact rows for the seven target registrations.
2. Compare NIAH ITM_E / ITM_N, latitude/longitude and source-page coordinates independently; document differences rather than silently replacing values.
3. Parse `data/objects.json` and `data/sources.json` for a complete duplicate and provenance audit before any production proposal.
4. Continue NIAH discovery in Rush / Kenure from official county search pages, then expand to nearby Lusk only when the Rush sequence is exhausted.

**Production impact:** None. No production records, permanent IDs, source-registry entries, visual inventory, coordinates, map pins or website changes made.
