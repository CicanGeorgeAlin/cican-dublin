# CICAN Dublin — Lucan NIAH Sequence Batch 037

**Date:** 20 November 2026  
**Status:** Research-only; no production imports.

## 1. Important data-source correction and improvement

The data.gov.ie resource record for the National Inventory of Architectural Heritage national CSV now reports:
- Resource: National CSV download
- Resource URL: https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data
- Resource format: CSV
- Data last updated: 10 November 2026
- Metadata last updated: 10 November 2026
- Licence: Creative Commons Attribution 4.0

This is a more recently maintained public catalogue resource than the old 11 October 2023 snapshot description still shown in parts of the metadata text. The current resource page explicitly reports the November 2026 update. Official NIAH documentation says ITM easting/northing should be quoted for official purposes. See:
https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/433f91ea-0b54-4753-99b2-d484baf2c7ec

A direct binary download attempt from this session failed. Therefore the national CSV is identified and its update date confirmed, but its bytes and rows have not been obtained or inspected. No CSV checksum or extracted row values are claimed.

The official live NIAH FeatureServer is also discoverable and supports JSON query formats, with layer 0 in EPSG:2157; the direct filtered query request was not accessible through the current retrieval path. Do not substitute layer schema metadata for an individual registration row.

## 2. NIAH 11201024 — Gardenville, Primrose Lane / Leixlip Road

Official Buildings of Ireland search index result confirms:
- Registration: 11201024
- Name/address: Gardenville, Primrose Lane, Lexilip Road, Lucan and Pettycanon, Lucan, County Dublin
- Description: detached two-bay, two-storey steward's house, dated 1738; originally a two-bay, two-storey rectangular-plan building, later extended to an L-shaped plan; pitched and hipped slate roof.
- Individual record access remained unavailable (HTTP 403 / inaccessible) during this pass.

Official search result URL: https://www.buildingsofireland.ie/buildings-search/?county=&date_from=&date_to=&group=&location_type=building&query=lucan&search_page=4&type=

Classification: SEARCH-RESULT VERIFIED ONLY. Do not publish as a fully verified object until the individual record page and exact official dataset row are retrieved.

## 3. NIAH 11201025 — next candidate

Official Buildings of Ireland search index result identifies:
- Registration: 11201025
- Address: Leixlip Road, Lucan and Pettycanon, Lucan, County Dublin
- Description: semi-detached three-bay, two-storey former house, c.1830, now in use as a travel agency.

Official search result URL: https://www.buildingsofireland.ie/buildings-search/?county=DU&date_from=&date_to=&group=&location_type=building&query=&search_page=24&town=&townland=&type=

Classification: DISCOVERY LEAD ONLY. Individual page, rating, special-interest categories, full description/appraisal, exact CSV/GIS row and coordinates still required.

## 4. Archive collision check

Exact-string GitHub default-branch searches for 11201024 and 11201025 returned no matching files. This is not a full-catalogue duplicate check. The master/public NIAH JSON, source registry and visual inventory must all be recovered and compared before import. No absence claim is made based only on search indexing.

## 5. Production decision

No catalogue records, source entries, visual records, public pages, map pins, sitemap entries or SEO pages were created. No deploy or smoke test was needed because production files were not changed.

Last confirmed production totals remain:
- Master objects: 574
- Public NIAH registrations: 454
- Sources: 692
- Visual records: 574
- Four-authority denominator: 7,535

## 6. Next actions

1. Obtain the November 2026 national CSV bytes from data.gov.ie / ArcGIS item resource using a supported download route; checksum and inspect it.
2. Extract exact REG_NO rows for 11201019, 11201021, 11201023, 11201024 and 11201025; preserve original ITM and WGS84 fields and local authority.
3. Query FeatureServer with a working JSON client route if the CSV remains inaccessible.
4. Obtain individual official pages for 11201024 and 11201025.
5. Recover complete repository datasets and run pre-import duplicate checks.
6. Import only after every evidence gate passes.
