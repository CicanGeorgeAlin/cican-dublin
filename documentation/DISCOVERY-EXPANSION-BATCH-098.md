# Discovery Expansion Batch 098 — Boland's Mill Stone Warehouse

**Project:** CICAN DUBLIN  
**Permanent protocol:** ALWAYS STAY IN THE LIGHT  
**Founder:** CICAN GEORGE ALIN  
**Date:** 29 October 2026  
**Batch type:** Discovery expansion + visual reference verification + industrial heritage source mapping

## Objective

Expand the archive into Dublin 4 and the Docklands, adding an individual surviving industrial building not already represented in the catalogue. Continue building the official-source programme for systematic industrial heritage discovery.

## New discovery: DUB-INF-0004

**Name:** Boland's warehouse/mill at lifting bridge — six-storey stone warehouse  
**Address:** 1 Ringsend Road, Dublin 4  
**Category:** ARCHITECTURE  
**District:** Dublin 4  
**Dublin City RPS reference:** 7377  
**Verification status:** VERIFIED  
**Photography status:** TO_PHOTOGRAPH  
**Visual reference:** One licensed third-party image registered  
**Founder original:** Not yet supplied

Dublin City Council's Record of Protected Structures identifies RPS 7377 at 1 Ringsend Road as “Boland's warehouse/mill at lifting bridge, Ringsend Road: six-storey stone warehouse.” BKD Architects describes the existing six-storey stone quayside building as a mill later converted to a silo, conserved and retrofitted as part of the Bolands Quay development, completed in 2022. IAC Archaeology independently describes the redevelopment and conservation of the historic industrial mill buildings.

This record is deliberately scoped to the surviving six-storey stone warehouse building, not every historic component of the former Boland's Mills complex. Some other buildings and structures on the wider site were removed or redeveloped. The record does not imply that the former industrial complex survives intact.

### Reference image

A current image was inspected on its original Wikimedia Commons file page:

- **Title:** Boland's Mill under nightfall
- **Photographer:** David Kernan
- **Date:** 16 December 2025
- **Licence:** Creative Commons Attribution 4.0 International (CC BY 4.0)
- **Image role:** Exact-object visual reference for the restored historic stone mill facade
- **Attribution:** David Kernan, “Boland's Mill under nightfall”, 16 December 2025, via Wikimedia Commons (CC BY 4.0)
- **File page:** https://commons.wikimedia.org/wiki/File:Boland%27s_Mill_under_nightfall.jpg
- **Licence:** https://creativecommons.org/licenses/by/4.0/

The image is registered as a third-party reference, not a founder original. Its source URL was checked against the original file link. The image depicts the restored historic stone facade in its modern docklands setting.

### Coordinate and fieldwork caution

The stored coordinate (53.34149, -6.23685) is a source-derived coordinate for the wider former Boland's Mill redevelopment site from a planning report. It is not a surveyed point on the RPS 7377 warehouse facade and is not a founder GPS fix. The founder should record the exact frontage position during a lawful field visit.

**Founder photography brief**
1. Photograph the full six-storey stone warehouse from a lawful public viewpoint.
2. Capture the stone facade, window openings, masonry joints and historic details.
3. Show its relationship to Grand Canal Dock and the modern Bolands Quay development.
4. Record any visible interpretation panels, protected-structure plaques or historic features.
5. Avoid private residential areas and internal spaces without permission.
6. Record actual field GPS and capture date separately from the site-centroid coordinate.

## Industrial Heritage Record research

Dublin City Council's Heritage Plan resource page states that the Dublin City Industrial Heritage Record investigated and mapped **1,219 sites** and produced a written record and 3,866 photographs. A separate Council highlights document reports **1,218 sites surveyed**, with **514** having some degree of surviving remains (42%). The one-site difference is retained as a source discrepancy pending investigation; no number has been silently selected as definitive.

The Industrial Heritage Records ArcGIS feature layer metadata was inspected. It is a point layer with fields including MIAID, CO, TD, IHR, LOCATION, GRIDREF and X_TYPE. This is a promising structured discovery source. The full feature payload was not extracted and individually validated in this batch, so no claims are made about exact industrial-record IDs or the total number of currently surviving candidates in that layer.

The next batch should extract candidates systematically, then compare each with the archive and current evidence. Historic sites must be separated into extant buildings, surviving fragments, altered sites, removed sites and subsurface/archaeological-only remains.

## Duplicate screening

The current 196-object catalogue was searched for “Boland”, “Boland's Mill”, “Bolands”, “Bolands Quay” and “Ringsend Road”. No matching object record was found. DUB-INF-0004 was therefore added as a new, individually scoped building record.

## Repository changes

- Added DUB-INF-0004 to `data/objects.json`.
- Added matching founder-photography target and one CC BY 4.0 exact-object reference to `data/visual-assets.json`.
- Added six source records to `data/sources.json`: Dublin City RPS, BKD Architects, IAC Archaeology, Wikimedia Commons image, planning-site coordinate reference and the Industrial Heritage Records GIS layer.
- Updated README catalogue, source and visual coverage figures.
- No website interface, map UI or locked map baseline changed.

## Post-batch validation

| Measure | Result |
|---|---:|
| Catalogue records | 197 |
| Visual records | 197 |
| Unique catalogue IDs | 197 |
| Verified records | 195 |
| Partially verified records | 2 |
| Locations with reference photographs | 80 |
| Locations without reference photographs | 117 |
| Registered reference-image entries | 99 |
| Source records | 276 |
| Records with source-derived coordinates | 197 |
| Founder field GPS fixes confirmed by this batch | 0 |

Reference-photo coverage is **80 / 197 = 40.6%**. The Boland's Mill record has one licensed reference image but remains awaiting the founder's own photograph.

## Sources

1. Dublin City Council, [Record of Protected Structures — RPS 7377](https://www.dublincity.ie/sites/default/files/2020-05/rps_for_web.pdf).
2. BKD Architects, [Bolands Mills Residential](https://www.bkd.ie/bolands-mills-residential).
3. IAC Archaeology, [Bolands Quay](https://iac.ie/project/bolands-quay/).
4. Wikimedia Commons, [Boland's Mill under nightfall](https://commons.wikimedia.org/wiki/File:Boland%27s_Mill_under_nightfall.jpg), David Kernan, CC BY 4.0.
5. PlanningRegister.ie, [Former Boland's Mill planning-site coordinate reference](https://planningregister.ie/report?lat=53.34149&lon=-6.23685&q=Site+of+1.089+ha+known+as+The+former+Boland%27s+Mill+incorporating+33+%26+34+Barrow+Street+together+with%2C+35A+Barrow+Street+%26+35+Barrow+Street%2C+at+Ringsend+Road+and+Barrow+Street%2C+Dublin+4&r=500).
6. Dublin City Council, [Heritage Plan Guides and Resources](https://www.dublincity.ie/archaeology-conservation-and-heritage/dublin-citys-heritage-and-history/heritage-plan-guides-and-resources).
7. Heritage Environment Division GIS, [Industrial Heritage Records feature layer](https://services2.arcgis.com/BdBkthNLO9mzGAMO/ArcGIS/rest/services/Historic_Environment_Division_GIS_Data/FeatureServer/2).
8. Dublin City Council, [Highlights of the Dublin City Heritage Plan](https://www.dublincity.ie/sites/default/files/2022-07/highlights-document-final.pdf).

## Next batch

Begin extracting and screening named Industrial Heritage Records layer entries. Prioritise extant structures and visible remains, verify exact building identities and current survival, and only then create catalogue records. Continue exact-object image checks in parallel. Do not confuse historic industrial site points with surviving buildings.

**ALWAYS STAY IN THE LIGHT.**
