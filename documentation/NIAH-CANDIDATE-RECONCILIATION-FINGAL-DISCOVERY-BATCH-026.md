# CICAN DUBLIN — NIAH Candidate Reconciliation & Fingal Discovery Batch 026

**Date:** 20 November 2026  
**Scope:** NIAH-only candidate reconciliation across Fingal / north County Dublin  
**Status:** Research checkpoint. No production records, map pins, photographs, SEO pages or website data changed.  
**Standing rule:** Only official NIAH-registered records may enter this publishing stream. RPS-only and SMR-only records remain excluded.

## 1. Purpose

Continue Batch 025 by comparing held registration numbers against the current public NIAH collection and source registry, testing the official coordinate service route, and expanding the official Fingal NIAH thatch/vernacular search sweep.

## 2. Exact membership check

The current data/niah-registered-objects.json was retrieved and parsed in full: **342 records**. The current data/sources.json was retrieved and parsed in full: **580 source records**.

The following 22 registration numbers were checked by exact national_inventory_reference equality against all 342 public records and by exact-number search across all 580 source records:

**Batch 025 candidates:** 11321004, 11321008, 11323013, 11323014, 11323025, 11342006.

**Held Rush/Kenure registrations:** 11318003, 11324007, 11324020, 11324024, 11324010, 11324011, 11324031.

**Additional official search-listing leads:** 11311025, 11311030, 11311038, 11344016, 11351006, 11358037, 11349003.

Result: zero exact matches for all 22 numbers in the current public NIAH collection and zero exact-number matches in the source registry.

**Limitation:** data/objects.json returned an empty content payload through the available GitHub retrieval route. Full canonical master-catalogue deduplication is therefore NOT claimed. A zero match in the public NIAH subset and source registry does not authorize new CICAN IDs. Before promotion, retrieve and parse the complete 462-object master catalogue through the Git blob route and check exact references, aliases, addresses, townlands, parent/site relationships and spatial proximity.

## 3. Additional official NIAH search-listing leads

The following seven additional Fingal registrations were found in official Buildings of Ireland search listings. These are search-listing leads only; individual pages and coordinate rows remain to be retrieved.

### 11311025 — 5 Convent Lane, Skerries
Official NIAH thatch/vernacular listing: https://www.buildingsofireland.ie/search-vernacular-thatch-building-surveys/?county=&query=&search_page=11&thatch=truthy
The listing describes a terraced three-bay single-storey thatched house, c.1800, with a later corrugated-iron-roofed extension.

### 11311030 — Skerries Mills
Same official NIAH listing. The listing identifies a windmill, c.1525, on a circular plan, capped with a thatched conical roof and four canvas sails, restored c.1995. This is a distinct registered structure, not a thatched dwelling.

### 11311038 — Ivy Lodge, Milverton
Same official NIAH listing. The result describes a detached four-bay single-storey thatched house, c.1930, with a gable-fronted projecting entrance porch.

### 11344016 — Casino, Dublin Road, Malahide
Official county search listing: https://www.buildingsofireland.ie/buildings-search/?county=DU&date_from=&date_to=&group=&location_type=building&query=&search_page=7&town=&townland=&type=
The result describes a detached eight-bay single- and two-storey thatched house, c.1750, with a curved central entrance bow and flanking single-storey bays.

### 11351006 — The Thatch Cottage, Strand Road, Portmarnock
Official county search listing: https://www.buildingsofireland.ie/buildings-search/?county=DU&date_from=&date_to=&group=&location_type=building&query=&search_page=11&town=&townland=&type=
The result describes a detached nine-bay single-storey thatched house, c.1800, formerly two detached four-bay houses linked by an entrance bay.

### 11358037 — 1 Main Street, Baldoyle
Official county search listing: https://www.buildingsofireland.ie/buildings-search/?county=DU&date_from=&date_to=&group=&location_type=building&query=&search_page=14&town=&townland=&type=
The result describes a detached three-bay single-storey thatched house, c.1880, with a later rear extension.

### 11349003 — Collinstown (Co. By.)
Official NIAH search result: https://www.buildingsofireland.ie/buildings-search/?query=chimney&search_page=18
The result describes a detached three-bay single-storey thatched house, c.1800, with a central projecting entrance porch and later extension.

These are official NIAH search-listing discoveries, not completed individual-record audits. No current thatch condition or access status is asserted.

## 4. Official coordinate service

The official NIAH Buildings Feature Service layer metadata exposes REG_NO, LOCAL_AUTHORITY_, ITM_E, ITM_N, LATITUDE, LONGITUDE and IMAGE_LINK, with layer spatial reference EPSG:2157. Metadata: https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildingsOpenData/FeatureServer/0

The official data.gov.ie resource identifies the service and records the resource metadata as updated 16 September 2026: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/cac7450a-38b6-4016-9b7a-39b4efda00d5

A direct REST query for the 13 held registrations could not be retrieved in this session. The web retrieval route returned an inaccessible endpoint response, and the container environment had no DNS/network access to ArcGIS. No feature attributes, coordinate rows or geometry are claimed. Do not infer CRS from NIAH page coordinate pairs.

The official NIAH Data Download page confirms the Dublin CSV covers Dublin City, Fingal and South Dublin and includes ITM, latitude/longitude and National Grid fields: https://www.buildingsofireland.ie/niah-data-download/

## 5. National Thatch Census cross-reference

The official National Thatch Census documents ITM Easting/Northing and image links where available. It was based on field visits by NIAH staff and contractors, including location verification, photography and classification. Suffixes such as b/c/d can identify ancillary structures associated with a principal building. Official dataset: https://data.gov.ie/en_GB/dataset/national-inventory-of-architectural-heritage-niah-national-thatch-census

Matching census feature rows for the current candidates were not retrieved in this session. No census image or coordinate is attributed to any candidate. Census identifiers and Building Survey registration numbers must be reconciled carefully rather than assumed identical.

## 6. Outcome

- Existing published NIAH collection: **342**.
- Existing source registry: **580**.
- Candidate registrations exact-checked against those two files: **22**.
- Exact matches in the published NIAH collection: **0**.
- Exact matches in source registry: **0**.
- Additional official NIAH search-listing leads discovered: **7**.
- Official coordinate feature rows retrieved: **0**.
- Full master catalogue deduplication: **not completed**.
- New production objects: **0**.
- New map pins, photographs, SEO pages or sitemap changes: **0**.

The public collection and source-registry checks are useful negative results, but they do not replace the outstanding full master-catalogue comparison. No production additions are made in this checkpoint.

## 7. Next checkpoint — Batch 027

1. Obtain the full 462-object data/objects.json through the repository Git blob route and parse the complete catalogue.
2. Retrieve official individual NIAH pages for the seven new search-listing leads.
3. Query the official NIAH Buildings Feature Service and National Thatch Census for all 22 registration candidates; preserve ITM, WGS84, geometry, authority and image-link fields separately.
4. Reconcile exact registration identity, aliases, site relationships and candidate coordinates against the complete master catalogue.
5. Resolve the seven held Rush/Kenure references before promoting any candidate.
6. Only after all checks pass, update master catalogue, NIAH-only public collection, source registry, visual inventory, individual SEO pages and sitemap together; run quality checks and confirm deployment.

**Production impact:** Documentation-only checkpoint. No production catalogue, map, image, SEO or application code changed.
