# CICAN DUBLIN — Fingal NIAH Thatch Candidate Verification Batch 025

**Date:** 20 November 2026  
**Scope:** Ballyboghil / Grange, Corduff and Killeek, Fingal, County Dublin  
**Status:** Research-only verification. No production catalogue objects, map pins, source-registry entries, visual records, SEO pages or website data changed.  
**Eligibility rule:** Only official NIAH registrations qualify for the current publishing stream. RPS-only and SMR-only records remain excluded.

## 1. Purpose

Continue the NIAH-only sequence after Batch 024. Verify six candidate registration numbers against official Buildings of Ireland individual records, check the repository's indexed references, and identify what is still required before production promotion.

## 2. Official NIAH records verified

All six numbers below resolve to official NIAH individual records. Each is rated Regional and has Architectural and Social special interest categories.

### 11321004 — GRANGE (BA. W BY.), Ballyboghil

Official record: https://www.buildingsofireland.ie/buildings-search/building/11321004/grange-ba-w-by-ballyboghil-co-dublin

- Original use: outbuilding; NIAH in-use field: house.
- NIAH date range: 1800–1840.
- Recorded: 14/08/2000.
- Description: detached single-bay, two-storey rubble-stone outbuilding, c.1850, with a three-bay single-storey thatched extension, c.1980.
- Page coordinate pair: 314939, 253795; CRS is not labelled beside the pair.
- Classification nuance: this is not described as a fully thatched farmhouse. The thatch belongs to the later extension.

### 11321008 — GRANGE (BA. W BY.)

Official record: https://www.buildingsofireland.ie/buildings-search/building/11321008/grange-ba-w-by-co-dublin

- Original/in-use type: farmhouse.
- NIAH date range: 1750–1850; described c.1800.
- Recorded: 18/08/2000.
- Description: detached four-bay, single-storey thatched farmhouse with projecting entrance porch, a later side extension and outbuildings to the rear.
- Page coordinate pair: 314384, 253295; CRS is not labelled beside the pair.
- NIAH notes that the original four bays have a hipped thatch roof while the later extension and farm buildings have corrugated-iron roofs.

### 11323013 — CORDUFF (HACKETT)

Official record: https://www.buildingsofireland.ie/buildings-search/building/11323013/corduff-hackett-dublin

- Original/in-use type: house.
- NIAH date range: 1800–1900; described c.1850.
- Recorded: 08/09/2000.
- Description: detached three-bay, single-storey nap-rendered and rubble-stone thatched house, with a two-bay rear extension, c.1930.
- Page coordinate pair: 320052, 253388; CRS is not labelled beside the pair.

### 11323014 — CORDUFFHAL

Official record: https://www.buildingsofireland.ie/buildings-search/building/11323014/corduffhal-co-dublin

- Original/in-use type: farmhouse.
- NIAH date range: 1800–1900; described c.1850.
- Recorded: 08/09/2000.
- Description: detached four-bay, single-storey thatched farmhouse with a gable-fronted projecting entrance porch and distinctive curving hip ends to the roof.
- Page coordinate pair: 320017, 253264; CRS is not labelled beside the pair.
- This is a distinct NIAH registration from 11323013 and 11323025. Do not merge by locality or similar building type.

### 11323025 — CORDUFF (HACKETT)

Official record: https://www.buildingsofireland.ie/buildings-search/building/11323025/corduff-hackett-co-dublin

- Original/in-use type: house.
- NIAH date range: 1760–1820; described c.1790.
- Recorded: 30/08/2000.
- Description: detached four-bay, single-storey thatched house with gable-fronted porch, plus a detached two-bay rubble-stone farm building, c.1820, with extensions.
- Page coordinate pair: 320227, 253302; CRS is not labelled beside the pair.
- This is a different registration and separate building record from 11323013, despite sharing the display name CORDUFF (HACKETT).

### 11342006 — KILLEEK

Official record: https://www.buildingsofireland.ie/buildings-search/building/11342006/killeek-co-dublin

- Original/in-use type: farmhouse.
- NIAH date range: 1720–1780; described c.1750.
- Recorded: 31/08/2000.
- Description: detached six-bay, single-storey thatched house with a projecting entrance porch, c.1960, and a complex of farm buildings to the south, dated c.1750–1850.
- Page coordinate pair: 313447, 245404; CRS is not labelled beside the pair.

## 3. Identity and deduplication findings

The exact-registration repository searches returned:
- No indexed repository hit for 11321004.
- No indexed repository hit for 11321008.
- No indexed repository hit for 11342006.
- 11323013, 11323014 and 11323025 appear in an existing research-only Corduff/Gracedieu note, not as evidence that they are production objects.

The existing research note documentation/NIAH-CORDUFF-GRACEDIEU-RESEARCH-BATCH-010.md already discusses 11323013, 11323014 and 11323025 as distinct registrations. Its text explicitly cautions against merging Corduff thatched dwellings by name or locality.

**Deduplication limitation:** GitHub indexed search is not a substitute for a complete parsed comparison against the canonical data/objects.json, data/niah-registered-objects.json and data/sources.json. No definitive full-catalogue duplicate clearance is claimed in this batch. Before promotion, run exact NIAH-reference comparison plus alias, address, townland and spatial checks against the complete current data files.

## 4. Coordinate provenance and National Thatch Census

The individual NIAH pages display numeric coordinate pairs, but the coordinate reference system is not labelled beside those values in the retrieved page records. Do not assume a CRS from numeric appearance, do not transform the pairs, and do not create production map pins from them.

The official NIAH National Thatch Census Feature Service is available at:
https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/ArcGIS/rest/services/NIAH_National_Thatch_Census/FeatureServer/0

Its published layer metadata identifies:
- Spatial reference EPSG:2157 (Irish Transverse Mercator).
- Fields: Reg_no, Type, County, ITM_E, ITM_N and Image_Link.
- Survey period: November 2022 to May 2023.
- Collection method: field survey by NIAH staff and contractors, including site visits, location verification, photography and classification.
- Image_Link is a photographic record where available.
- Some census registration references have letter suffixes (b, c, d) for secondary structures associated with a principal thatched building.

The layer metadata was verified, but an actual census feature-row response for these six candidates was not retrieved in this session. No census match, census coordinate or census photograph is claimed. Census references must be reconciled by exact ID and location; a similarly named building is not sufficient.

The official NIAH Data Download page states that the Dublin CSV covers Dublin City, Fingal and South Dublin, and that location fields are available in ITM, latitude/longitude and National Grid:
https://www.buildingsofireland.ie/niah-data-download/

The official data.gov.ie NIAH dataset resource states that ITM easting/northing should be quoted for official purposes and identifies the live feature service:
https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/cac7450a-38b6-4016-9b7a-39b4efda00d5

## 5. Outcome

- Six official individual NIAH registrations verified.
- Three similarly named Corduff-area registrations explicitly kept distinct: 11323013, 11323014 and 11323025.
- One Grange outbuilding with a later thatched extension correctly distinguished from a thatched farmhouse: 11321004.
- Six page coordinate pairs transcribed for research only; none approved for map use.
- Actual National Thatch Census row/image matching: not yet retrieved.
- Full canonical catalogue deduplication: outstanding.
- New production objects: **0**.
- New map pins: **0**.
- New photographs or image reuse: **0**.
- New SEO pages/sitemap changes: **0**.

This is a deliberate evidence hold. The official registrations and survey descriptions are verified, but the authoritative ITM row/coordinate provenance, full-catalogue deduplication and current object-condition checks remain outstanding. Historic NIAH survey descriptions are not proof of present-day thatch condition or access rights.

## 6. Next checkpoint — Batch 026

1. Retrieve actual feature rows for these six registration numbers from the official NIAH Building Feature Service and/or National Thatch Census layer, preserving the original ITM fields and layer CRS.
2. Retrieve the seven held Rush/Kenure records from Batch 022 using the same method.
3. Reconcile any census records and image links by exact registration, location and object identity; do not assume the census and NIAH building surveys use identical identifiers.
4. Parse the full canonical production catalogue and source registry for definitive deduplication.
5. Promote only candidates that pass registration, identity, source, coordinate, provenance and schema checks.
6. When any candidate is accepted, update master catalogue, NIAH-only public collection, sources, visual inventory, individual SEO page and sitemap together; run quality checks before deployment.

**Production impact:** Research documentation only. No production catalogue, website, SEO or map data changed.
