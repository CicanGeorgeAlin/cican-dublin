# CICAN Dublin — Lucan NIAH Registration Verification Batch 036

**Date:** 20 November 2026  
**Scope:** Lucan / Leixlip Road, South Dublin County  
**Status:** Official individual-page verification for 11201023; research hold for import pending national CSV row and full-catalogue deduplication.

## 1. NIAH 11201023 — Former orchard boundary wall

**Official individual record:** https://www.buildingsofireland.ie/buildings-search/building/11201023/leixlip-road-lucan-and-pettycanon-lucan-co-dublin

Verified directly from the official Buildings of Ireland individual page:

- Registration number: 11201023
- Rating: Regional
- Special interest: Architectural
- Original use: Walled garden
- In-use-as classification: Gates/railings/walls
- Date range: 1840–1860
- Date recorded: 23 April 2002
- Description: Former orchard boundary wall, c.1850, of random-rubble limestone with brick coping to a section. Wall repointed; large brick-dressed opening now blocked. Brick coping possibly formerly part of a building within the orchard.
- Appraisal: substantial nineteenth-century boundary wall which, with the Lucan House boundary wall opposite, forms a striking approach to Lucan village.

The page displays coordinates 303090, 235066 but does not label their CRS. They are not adopted for archive mapping or converted. Retrieve and preserve the official national CSV / GIS ITM and WGS84 fields instead.

## 2. 11201024 — Gardenville (next candidate)

The official NIAH search results list Gardenville, Primrose Lane / Leixlip Road, registration 11201024, as a detached two-bay, two-storey steward's house dated 1738, originally on a rectangular plan and later extended to an L-shaped plan. The individual-page request returned HTTP 403 in this pass. Treat the search listing as a discovery lead only until the individual page is accessible and checked.

## 3. Official national data download: exact endpoint recovered

The official NIAH Data Download page states that the Dublin CSV includes Dublin City, Fingal and South Dublin County, indexed by registration number, with location, classification, rating, description, appraisal, record/image links and location in ITM, latitude/longitude and National Grid.

- Landing page: https://www.buildingsofireland.ie/niah-data-download/
- Dublin ZIP download URL discovered from the official page: https://www.buildingsofireland.ie/niah/NIAHDataDownload/Dublin.zip

The browser followed the download link but could not ingest the ZIP because it is an application/zip binary. The runtime download attempt also failed. Therefore the Dublin CSV has not yet been extracted and no exact CSV rows are claimed in this batch.

The NIAH ArcGIS FeatureServer layer 0 metadata independently confirms spatial reference EPSG:2157 and fields including REG_NO, LOCAL_AUTHORITY_, DESCRIPTION, APPRAISAL, ITM_E, ITM_N, LATITUDE and LONGITUDE. A record-specific query was not retrievable in this session. Schema metadata must not be substituted for the actual row.

## 4. Duplicate and publication gate

GitHub exact-string searches for 11201023 and 11201024 returned no matching archive files in the indexed default-branch search. This is not a complete duplicate check. The large master and public NIAH JSON endpoints have previously returned empty content via the current repository file endpoint, so master catalogue, public NIAH, source registry and visual inventory comparisons remain uncertified.

No new object, source, visual record, public page, map point, SEO entry or sitemap entry was created. No production deploy was performed.

## 5. Next actions

1. Retrieve/extract the official Dublin ZIP by a supported binary-download route, then record its filename, version/date, checksum and exact rows for 11201019, 11201021 and 11201023 (and subsequent candidates).
2. If the ZIP remains inaccessible, query the official FeatureServer with a supported JSON/API route and retain the full response for each exact REG_NO.
3. Recover complete master/public/source/visual datasets and run exact duplicate checks.
4. Open and verify the individual record for 11201024.
5. Continue the next unprocessed Lucan registration only after the current candidate queue and existing published IDs are reconciled.

Last confirmed production totals remain 574 master objects, 454 public NIAH registrations, 692 source records and 574 visual records. Four-authority denominator remains 7,535. This research-only batch changes none of these figures.
