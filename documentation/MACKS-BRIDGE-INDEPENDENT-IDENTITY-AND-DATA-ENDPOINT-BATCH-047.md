# CICAN Dublin — Batch 047: Independent Mack's Bridge Identity Check and Official Download Endpoint Status

**Date:** 20 November 2026  
**Scope:** Cross-check Mack's Bridge against an additional Fingal heritage risk register and diagnose official NIAH download endpoint accessibility.  
**Publication state:** Research only; no production changes.

## 1. Additional independent Fingal evidence

Fingal County Council's *Cultural Heritage Risk Assessment Report* (2021), Appendix E / Heritage Risk Register, lists:
- Asset reference: A2010
- Name: Mack's Bridge
- Designation/type: NIAH
- Asset class: Upstanding structure – individual
- NIAH registration number: 11336004

Source PDF:
https://www.fingal.ie/sites/default/files/2021-07/fingal-cultural-heritage-risk-assessment-report_1.pdf

This is an additional independent local-authority source confirming Mack's Bridge as a separately identified individual NIAH asset with REG_NO 11336004. It does not provide the national FeatureServer row or the missing NIAH appraisal text.

## 2. Official national CSV endpoint: current health monitor and retrieval limitation

The data.gov.ie broken-links monitor for the NIAH dataset was checked on 15 November 2026. It reports:
- National CSV download URL: not broken
- Historic Environment Viewer URL: not broken
- NIAH Feature Service URL: not broken

Monitor page:
https://data.gov.ie/en_GB/broken_links?package=National+Inventory+of+Architectural+Heritage+%28NIAH%29+National+Dataset

The CSV endpoint remains:
https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data

The current retrieval tool refuses the response because its content type is application/octet-stream. This is a client/tool content-type limitation, not evidence that the official endpoint is broken. The national CSV's bytes, size, SHA-256, archive members, row count and exact 11336004 row have not been obtained.

## 3. Live FeatureServer exact-row query re-attempted

Re-attempted a direct layer-0 query for REG_NO=11336004 requesting:
REG_NO, NAME, LOCAL_AUTHORITY_, DESCRIPTION, APPRAISAL, DATEFROM, DATETO, RATING, ITM_E, ITM_N, LATITUDE, LONGITUDE, CSI, geometry, output SR 2157, JSON response.

The web retrieval layer returned an inaccessible/internal error for the query URL. The layer landing page and schema remain readable, but schema does not equal row evidence. No feature attributes are claimed.

Live service:
https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildingsOpenData/FeatureServer

## 4. Current metadata timestamp discipline

The data.gov.ie NIAH Feature Service resource record reports Data last updated and Metadata last updated as **16 September 2026**. The FeatureServer layer metadata itself reports a last edit on **4 March 2025**. The service description calls the bulk open-data download version date **24 August 2023**; the data.gov.ie national CSV resource description calls its snapshot version date **11 October 2023**. These are separate metadata statements and must not be collapsed into a single assumed data version.

Sources:
- https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/cac7450a-38b6-4016-9b7a-39b4efda00d5
- https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildingsOpenData/FeatureServer
- https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/433f91ea-0b54-4753-99b2-d484baf2c7ec

## 5. Gate status

- Gate 1: PARTIAL / HOLD. Individual NIAH page identity and description captured; appraisal still not available in retrieved individual-page content.
- Gate 2: HOLD. Official endpoint health monitor says the CSV URL is not broken, but no row bytes have been retrieved; FeatureServer query still inaccessible.
- Gate 3: PARTIAL. Additional Fingal report confirms individual NIAH asset identity; full 454-register cross-check remains outstanding.
- Gate 4: PARTIAL. Provenance improved; field inspection, current access and image rights outstanding.
- Gate 5: NOT AUTHORISED.
- Gate 6: NOT RUN.

**Batch 047 outcome:** New independent Fingal evidence confirms Mack's Bridge (A2010) as an individual NIAH asset, REG_NO 11336004. The official national CSV URL is reported healthy by data.gov.ie but the retrieval tool cannot consume its binary response. No exact national row has been retrieved. No production data or website files changed.
