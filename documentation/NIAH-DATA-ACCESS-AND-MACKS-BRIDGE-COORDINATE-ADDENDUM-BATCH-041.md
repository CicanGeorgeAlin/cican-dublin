# CICAN Dublin — Batch 041: NIAH National Data Access and Mack's Bridge Coordinate Addendum

**Date:** 20 November 2026  
**Mode:** Research-only source-access investigation and coordinate provenance addendum  
**No production data changes.**

## 1. Official NIAH Dublin download route identified

The official Buildings of Ireland NIAH Data Download page states that the dataset is split into five CSV downloads and that the **Dublin** download includes Dublin City, Fingal and South Dublin County. It says the downloads are indexed by Registration Number and include Location, Classification, Rating, Description, Appraisal and links to NIAH records/images. It also says location is available in ITM, latitude/longitude and National Grid, and that the downloads are refreshed biannually.

Official page:
https://www.buildingsofireland.ie/niah-data-download/

The Dublin download link on that page resolves to:
https://www.buildingsofireland.ie/niah/NIAHDataDownload/Dublin.zip

The web retrieval layer rejects the ZIP because it is a binary application/zip file. No bytes, file size, checksum, CSV rows or exact REG_NO 11336004 row were retrieved in this batch. The URL is recorded as the next authoritative download route, not as an inspected dataset.

## 2. National data metadata discrepancy remains unresolved

The data.gov.ie resource record for the national CSV says its metadata and data were last updated 10 November 2026 and identifies CC BY 4.0. Its descriptive text still says the open-data bulk download version date is 11 October 2023:
https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/433f91ea-0b54-4753-99b2-d484baf2c7ec

The NIAH FeatureServer service landing page still describes its bulk download as version date 24 August 2023 and exposes layer 0 in EPSG:2157:
https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildingsOpenData/FeatureServer

The 10 November 2026 catalogue metadata timestamp must not be mistaken for proof that the downloadable CSV's contents are a 10 November 2026 snapshot. The official Dublin ZIP route and/or a successfully queried live service row must be inspected to resolve actual data version and values.

## 3. Mack's Bridge: expanded coordinate evidence from EIAR Appendix 1

The May 2019 Broadmeadow Way EIAR Volume 4A, Appendix 1, Appendix E table (printed appendix page E/1; extracted PDF lines 5303–5317 and 5465–5467) has separate columns headed:
- Easting
- Northing
- ITM East
- ITM North

For AHC 045, Bridge, Mack's Bridge, Newbridge Demesne, NIAH 11336004, it reports:
- Easting: **322032.531**
- Northing: **249418.079**
- ITM East: **721957**
- ITM North: **749441**

Source PDF:
https://consult.fingal.ie/ga/system/files/materials/12446/Broadmeadow%20Way-Vol%204A-EIAR%20Constraints%20Report%20Appendix%201%20%28May%202019%29.pdf

This corrects the earlier abbreviated coordinate note in Batch 040: the EIAR explicitly supplies **both** the first coordinate pair and the ITM pair in separate columns. Retain all four numeric values and their source column labels exactly. Do not replace the official NIAH page's displayed 322039,249413 or the 2008 historic-bridge survey's 322038,249413 with either EIAR pair. They are distinct source statements with differing precision.

The same EIAR table lists the separately registered neighbouring bridge 11336005 at Easting 321320.375, Northing 249852.168, ITM East 721245, ITM North 749875, and gate entrance 11336002 at Easting 322044.534, Northing 249370.069, ITM East 721969, ITM North 749393. This is useful relationship evidence: Mack's Bridge 11336004, the other bridge 11336005 and gate entrance 11336002 are separately identified rows and must remain separate archive assets.

**CRS caution:** The table headings explicitly label the second pair ITM East/North. The first pair is labelled only Easting/Northing in this table; do not assign a CRS unless the report's coordinate methodology or metadata explicitly confirms it. Do not use the first pair as a coordinate transformation input on assumption alone.

## 4. NIAH official page and independent bridge survey re-opened

The individual NIAH page currently displays:
- REG_NO 11336004
- Regional rating
- Architectural, Artistic, Technical
- Original/current use Bridge
- Date 1760–1800
- Coordinates 322039,249413 (CRS not labelled on page)
- Date recorded 10/08/2000
- Description of a single-arch humpback road bridge c.1780 with carved limestone archivolt and keystones, random-rubble parapets, wrought-iron railings and ashlar piers.

URL:
https://www.buildingsofireland.ie/buildings-search/building/11336004/newbridge-house-newbridge-demesne-donabate-dublin

The 2008 Fingal / Heritage Council Historic Road Bridges survey identifies FHBS09 Mack's Bridge and REG_NO 11336004; gives grid easting 322038 and northing 249413; describes its construction and records 4.0 m approximate span and a 2008 condition assessment. These remain source-specific historical observations, not present-day condition claims.

URL:
https://www.fingal.ie/sites/default/files/2019-04/Fingal%20Historic%20Bridges%20Volume%202.pdf

## 5. Gate status

- **Gate 1:** PARTIAL / HOLD. Individual page captured, but no official appraisal field is exposed in the page content retrieved. The official Dublin CSV is expected to include Appraisal, but it has not yet been inspected.
- **Gate 2:** HOLD. Neither the Dublin ZIP nor exact national CSV/FeatureServer row was retrieved; no checksum or exact row values claimed.
- **Gate 3:** PARTIAL. The EIAR separates 11336004, 11336005 and 11336002. Coordinate-distance/proximity checks still await authoritative common-CRS rows.
- **Gate 4:** PARTIAL. Source provenance is documented; present-day access, condition, field verification and image rights remain outstanding.
- **Gates 5–6:** NOT AUTHORISED / NOT RUN.

## 6. Next actions

1. Obtain the official Dublin ZIP through a binary-capable retrieval path; record file size, SHA-256, archive members, CSV filename, headers, record count and dataset version.
2. Extract exact row 11336004 and at least its neighbouring rows 11336002, 11336003 and 11336005. Capture Local Authority, REG_NO, title/location, classification, rating, description, appraisal, ITM, latitude/longitude and National Grid fields.
3. Compare the official row values with the NIAH page, 2008 Fingal survey and 2019 EIAR. Preserve discrepancies and source labels.
4. Once the exact row and official appraisal are captured, update the Mack's Bridge source registry/object through a separate controlled change; do not silently alter production in this research batch.
5. Continue the retrospective 454-record audit only with a repeatable row-retrieval method.

**Batch 041 outcome:** The official Dublin CSV ZIP download route is now confirmed and the 2019 EIAR's two coordinate pairs are fully extracted with their column labels. The binary archive and exact official national row remain inaccessible in this session, so Mack's Bridge remains HOLD and no production files were changed.
