# CICAN Dublin — Batch 042: Live NIAH Feature Service Schema and Query Reproducibility

**Date:** 20 November 2026  
**Scope:** Establish the authoritative live NIAH service schema and document the exact-record query failure for Mack's Bridge (REG_NO 11336004).  
**Publication state:** Research only; no production changes.

## 1. Live FeatureServer layer independently re-established

The official data.gov.ie resource page identifies the NIAH Feature Service as a live/current view and links the ArcGIS REST endpoint. It explicitly distinguishes the live service from the bulk CSV snapshot (whose descriptive version date remains 11/10/2023). The resource page states that ITM eastings/northings should be quoted for official purposes and that latitude/longitude are supplied for web mapping.

Resource:
https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/cac7450a-38b6-4016-9b7a-39b4efda00d5

Live service:
https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildingsOpenData/FeatureServer

The ArcGIS REST layer directory is retrievable and identifies layer 0 as **NIAHBuildings**, a point feature layer in **EPSG:2157 (ITM)**, with maximum record count 2,000 and supported query formats JSON, geoJSON and PBF:
https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildingsOpenData/FeatureServer/layers

Layer metadata reports last edit 4 March 2025 at 3:41:03 PM; data last edit 4 March 2025 at 3:34:51 PM. This is layer metadata, not a retrieved record timestamp or proof of a current CSV snapshot.

## 2. Exact field schema available

The layer directory exposes these fields (aliases retained):
- OBJECTID_1 (OID)
- REG_NO (integer)
- ORIGINAL_TYPE
- IN_USE_AS_TYPE
- NAME
- NUMBER
- STREET1
- STREET2
- TOWN
- TOWNLAND
- COUNTY
- BAILE_FEARAINN
- CONTAE
- LOCAL_AUTHORITY_
- DESCRIPTION
- APPRAISAL
- DATEFROM
- DATETO
- RATING
- ITM_E
- ITM_N
- LATITUDE
- LONGITUDE
- IMAGE_LINK
- WEBSITE_LINK
- SURVEY
- CSI (Categories of Special Interest; source field spelling is CSI)

The schema is useful for building a deterministic audit extractor. It does not supply the values for REG_NO 11336004.

## 3. Exact record query attempted

A direct ArcGIS REST query was attempted with:
- where: REG_NO = 11336004
- outFields: *
- returnGeometry: true
- format: pjson

The web retrieval service returned an inaccessible/internal error for the query URL. A direct request from the available container runtime also failed at DNS resolution for services-eu1.arcgis.com. Neither failure is evidence that the NIAH service itself is down; it only means the record response could not be retrieved through these paths.

No JSON feature, exact national row, APPRAISAL text, ITM_E/ITM_N or LATITUDE/LONGITUDE values are claimed. Do not infer them from the layer schema or other survey sources.

## 4. Bulk CSV versus live service: version discipline

The NIAH download page says its five regional CSV downloads include Dublin City, Fingal and South Dublin County, and include appraisal and coordinate fields. It describes refreshes as biannual:
https://www.buildingsofireland.ie/niah-data-download/

The national data.gov.ie resource page continues to describe the bulk CSV snapshot as version date 11/10/2023. Its resource metadata can have a separate update timestamp. Do not interpret a catalogue metadata update as a new CSV content version. The live FeatureServer layer metadata separately reports a 4 March 2025 last edit. These are three different timestamps and must remain separately attributed.

## 5. Gate status and implications

- **Gate 1:** PARTIAL / HOLD for Mack's Bridge. Individual NIAH page identity and descriptive fields are captured from Batch 040; APPRAISAL still not captured from an individual official record view.
- **Gate 2:** HOLD. Layer schema confirmed; exact feature row and CSV row not retrieved.
- **Gate 3:** PARTIAL. Relationship distinctions from Batch 041 remain; common-CRS official row comparison is blocked.
- **Gate 4:** PARTIAL. Provenance remains documented; field verification, access and image rights are not established.
- **Gate 5:** NOT AUTHORISED.
- **Gate 6:** NOT RUN.

## 6. Recommended next retrieval route

Use the official Historic Environment Viewer Query tool / data extract workflow identified by the national dataset resource, or obtain the Dublin ZIP with a binary-capable client. If using the REST service, request only the needed fields and a JSON response for REG_NO 11336004, then preserve the unmodified response and retrieval timestamp. For scalable retrospective audit, use a batch query with a where clause restricted to the existing 454 REG_NO values and paginate by OBJECTID / resultOffset if the service permits; independently reconcile the returned REG_NO set against the requested set to detect omissions. A schema response alone must never be counted as a successful row match.

**Batch 042 outcome:** The authoritative live layer and full field schema are now confirmed, including the APPRAISAL and coordinate fields and EPSG:2157 layer CRS. Exact record access remains blocked in this session. No public data, source registry, object record, map or website changes were made.
