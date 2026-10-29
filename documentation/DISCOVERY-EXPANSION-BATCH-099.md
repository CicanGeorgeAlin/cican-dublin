# Discovery Expansion Batch 099 — Kilmainham Mill and Ringsend industrial leads

**Project:** CICAN DUBLIN  
**Founder:** CICAN GEORGE ALIN  
**Protocol:** ALWAYS STAY IN THE LIGHT.  
**Date:** 29 October 2026

## Outcome

Added one evidence-supported industrial heritage record:

- **DUB-INF-0005 — Kilmainham Mill — former flour and textile mill complex**
- Location: Kilmainham Lane / Rowserstown Lane, beside the River Camac, Dublin 8.
- Period: c.1815–1825, with substantial mid-to-late nineteenth-century expansion.
- NIAH registration: **50080060**.
- Coordinates: **53.3416294889, -6.3065871882**, transformed from the published NIAH Irish Grid reference **312840, 233688** (TM65 / Irish Grid, EPSG:29902) using EPSG operation 1641.
- Coordinate status: **SOURCE_DERIVED**, not founder field GPS.
- Photography: awaiting founder original. No third-party image was registered in this batch.

The record describes the surviving mill complex, not a separately asserted medieval mill structure. The evidence supports a long history of water-powered milling at the site, but the medieval predecessor is not given a separate catalogue ID.

## Evidence reviewed

1. **National Inventory of Architectural Heritage, registration 50080060.** The indexed official record identifies an attached L-plan, four-storey former flour mill built c.1820, with later extensions and published Irish Grid coordinates. The NIAH page itself returned HTTP 403 during this pass; its indexed official record output was used and corroborated by the Dublin City Council briefing.
2. **Dublin City Council, Kilmainham Mill — Project Update, September 2023.** This official project briefing places the complex beside the River Camac at Kilmainham Lane, Dublin 8. It records the c.1820 flour-mill origin; mid-to-late nineteenth-century additions including a steam engine, rerouted headrace, new water wheel, cast-iron sectional aqueduct and internal cast-iron columns; conversion to cloth finishing around 1903/04; cessation of industrial activity in 2000; DCC acquisition in December 2018; and stabilisation works completed in 2023. The briefing states that accessibility and facilities for widespread use were limited at that time.
3. **Howley Hayes Cooney Architects, Kilmainham Mill conservation project.** Specialist conservation account corroborating the industrial sequence, emergency repairs, re-roofing, hazardous-material removal and stabilisation, including the chimney.

The DCC briefing is dated September 2023. It is not evidence of public access conditions in October 2026. The catalogue therefore instructs the founder to confirm current access and photography permission with DCC and not enter the site without explicit permission.

## Industrial Heritage GIS investigation

The current Dublin City Industrial Heritage Records ArcGIS feature-layer metadata was inspected. The layer is a point dataset with fields including MIAID, county, townland, IHR, location, grid reference and feature type. The metadata is useful for structuring future discovery.

**Limitation:** the actual feature payload was not successfully retrieved in this batch. No individual GIS feature IDs, attributes or geometries are claimed as extracted or validated. A query attempt through the available retrieval interface was inaccessible. The dataset remains a priority for a later extraction pass using a method that can retrieve and inspect the underlying records.

## Ringsend protected-structure leads — not yet catalogued

Dublin City Council's January 2018 Record of Protected Structures extract (p. 180) lists four Ringsend entries that warrant current survival checks:

- **RPS 7378:** former Reg Armstrong Works — classical cut-stone carriage entrance with Ionic columns.
- **RPS 7379:** former Irish Glass Bottle Company — three-storey brick office with glass-block entrance, feature window and clock.
- **RPS 7380:** CIE bus depot — four rusticated granite gate piers.
- **RPS 7381:** Ringsend Shelbourne Pierrot Club / former Bovril building — commercial warehouse/sound studio.

These are research leads only. The 2018 register extract does not establish that each feature survives in situ in 2026. No record was created for them until current survival, exact identity, location and duplicate status can be checked. The 2018 RPS entries were added to the source registry for traceability.

## Founder field-photography brief — Kilmainham Mill

Subject to lawful public access and permission:

- Full mill complex and its relationship to the River Camac.
- Four-storey mill block, rubble limestone masonry, quoins and surviving window openings.
- Later brick extension, chimney and roofline.
- Any externally visible millrace, weir or water-management features, without assuming the identity of ambiguous remains.
- Visible interpretation, plaques and conservation details.
- Founder GPS at the actual accessible viewpoint.

Do not enter the site, buildings or work areas without explicit permission. Do not photograph through restricted areas or treat the NIAH coordinate as a field GPS fix.

## Repository changes

- `data/objects.json`: added DUB-INF-0005.
- `data/visual-assets.json`: added matching founder-photography target; no image falsely represented as founder original.
- `data/sources.json`: registered NIAH, DCC, conservation-architect and Ringsend RPS sources.
- `README.md`: updated catalogue, source, district and coordinate summary.

## Validation and totals

| Measure | After Batch 099 |
|---|---:|
| Catalogue objects | **198** |
| Unique object IDs | **198** |
| Visual records | **198** |
| Source records | **280** |
| Locations with registered reference photographs | **80** |
| Registered reference-image entries | **99** |
| Records without a registered reference photograph | **118** |
| Verified records | **196** |
| Partially verified records | **2** |
| Reference-photo location coverage | **40.4%** |

The new Kilmainham Mill record has no registered reference image, so the image totals remain unchanged. All catalogue IDs remain unique and visual-record parity is maintained. Source-derived coordinates are not field GPS.

## Next research priorities

1. Retrieve and inspect actual DCIHR GIS feature records; do not report metadata inspection as a completed dataset extraction.
2. Field-check the Ringsend RPS 7378–7381 features for survival and exact identity before catalogue admission.
3. Continue discovering overlooked industrial structures, transport infrastructure, machinery, water-management features and small surviving components across Dublin City and County Dublin.
4. Keep founder photography, third-party reference images, contextual images and unresolved image leads clearly separated.

**ALWAYS STAY IN THE LIGHT.**
