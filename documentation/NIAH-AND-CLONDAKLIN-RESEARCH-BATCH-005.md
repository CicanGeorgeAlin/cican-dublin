# CICAN DUBLIN — NIAH and Clondalkin Research Batch 005

**Date:** 20 November 2026  
**Autopilot:** CICAN HERITAGE AUTOPILOT  
**Cycle:** Four NIAH records + one specialist conservation/archaeology source  
**Scope:** Cappagh, Neillstown, Raheen and Clondalkin, County Dublin  
**Production status:** Four new NIAH-backed objects added to the master catalogue; Clondalkin crosses/font remain research leads.

## Catalogue recovery

The normal file-content fetch for `data/objects.json` returned an empty body. Fetching the underlying Git blob recovered the complete 1,248,422-character JSON. Before this batch: 452 objects, 452 unique IDs, 440 objects with NIAH references, 362 distinct NIAH references, 566 sources, 452 visual records and 133 reference-image entries. Full catalogue, source and visual inventory reconciliation found no identity, NIAH-reference or visual-record matches for the four new candidates. The nearest existing mapped records were over 3.5 km away.

## Four NIAH objects added

### DUB-BLD-0186 — Cappaghmore Lodge, NIAH 11205029
Official record: https://www.buildingsofireland.ie/buildings-search/building/11205029/cappaghmore-lodge-cappagh-co-dublin

Regional rating; architectural, artistic and technical interest; date range 1820–1840, described c.1830; original use gate lodge. NIAH describes a three-bay single-storey lodge, timber casement windows, roughcast-rendered walls, hipped porch, panelled timber door, slate roof, gable chimneys and an entrance screen with coursed limestone quadrant walls, cast-iron gates and rendered gate piers. Appraisal: a demesne entrance ensemble retaining original gateway features. NIAH's “currently unoccupied” statement dates from its 2002 survey and is not a current occupancy finding.

Original page coordinate: 306671, 232382. Date recorded: 24 May 2002.

### DUB-BLD-0187 — Neillstown detached house, NIAH 11205033
Official record: https://www.buildingsofireland.ie/buildings-search/building/11205033/neillstown-co-dublin

Regional rating; architectural interest; date range 1840–1880, described c.1860; house. NIAH describes a detached single-storey house with smooth-rendered walls, boarded-up windows, steep slate roof, central chimney and west-projecting gabled porch. Its appraisal notes a simple building in a tranquil, tree-screened setting. Vacancy and boarded-window details are survey-era observations from 2002, not current-condition evidence.

Original page coordinate: 306652, 232572. Date recorded: 28 May 2002.

### DUB-INF-0188 — Lucan-Newlands Road railway bridge, Cappagh, NIAH 11205034
Official record: https://www.buildingsofireland.ie/buildings-search/building/11205034/lucan-newlands-road-cappagh-co-dublin

Regional rating; architectural and technical interest; date range 1850–1870, described c.1860; bridge. NIAH describes a single-arch road bridge over railway, with three-centred arch, dressed voussoirs, coursed squared limestone parapets raised in squared granite and limestone rubble retaining walls. Keep distinct from the separate Cloverhill Road railway bridge, NIAH 11205038. Photograph only from a safe lawful public viewpoint; no railway access.

Original page coordinate: 306615, 232599. Date recorded: 24 May 2002.

### DUB-BLD-0189 — Cloverhill Road house, Raheen, NIAH 11205039
Official record: https://www.buildingsofireland.ie/buildings-search/building/11205039/cloverhill-road-raheen-ne-by-co-dublin

Regional rating; architectural interest; date range 1840–1880, described c.1860; house. NIAH describes a detached two-storey house with roughcast-rendered walls, timber sash windows, slate roof, brick chimneys and gable-fronted porch. A two-storey east extension dates to c.1940. The house is set in a commercial yard with garden to the west. No yard access is assumed; photograph only from a lawful public viewpoint or with permission.

Original page coordinate: 307426, 233052. Date recorded: 27 May 2002.

All four records were added as PARTIALLY_VERIFIED, with SOURCE_DERIVED coordinates, null source-point accuracy, TO_PHOTOGRAPH status, TO_CREATE line-art status and NOT_PUBLISHED status. Four matching visual inventory records were added with empty reference_images. No third-party photographs were imported. Present survival, condition, occupancy and access remain unverified.

## Coordinate-system correction

The individual Buildings of Ireland pages display coordinate pairs such as 306671, 232382. These values are treated as legacy Irish Grid / National Grid (TM65, EPSG:29902), not ITM. The NIAH national dataset metadata distinguishes Irish Grid and ITM fields, says downloads include both, and advises quoting ITM eastings/northings for official purposes.

For web mapping, the four page-level pairs were transformed from EPSG:29902 to WGS 84 using EPSG operation 1641:
- 11205029: 53.3311780611, -6.3996055235
- 11205033: 53.3328883717, -6.3998267000
- 11205034: 53.3331383193, -6.4003727781
- 11205039: 53.3370430942, -6.3880509088

The transformation accuracy is not the source centroid accuracy. These are source-derived locators, not founder GPS. Earlier Batches 002–004 incorrectly called individual-page coordinate pairs “ITM”; the continue checkpoint and the earlier Batch 002–004 reports have now been corrected to distinguish Irish Grid from ITM.

## Specialist discovery — Clondalkin granite crosses

**Source:** South Dublin County Council, *Clondalkin Conservation Plan*, March 2026, Appendix A3, prepared by Molloy & Associates Conservation Architects:
https://www.sdcc.ie/en/devplan2022/variations/variation-1/clondalkin-local-planning-framework/supporting%20documents/conservation-plan.pdf

- **DU017-041003:** low granite cross north of the medieval church fragment, damaged head, raised ringed cross on west face and raised Latin cross on south face; recorded dimensions H 0.78 m, max W 0.57 m, thickness 0.18–0.25 m.
- **DU017-041004:** tall plain granite cross north-east of the medieval church fragment, asymmetrical arms; recorded dimensions H 1.75 m, W 0.80 m, thickness 0.30 m.
- **DU017-041007:** font listed in the RMP schedule; the extracted plan gives insufficient detail to establish material, dimensions, exact position or current survival.

The two crosses are separate records and must not be collapsed. These reproduced RMP descriptions are historical evidence, not proof of current survival or exact GPS. No cross/font objects or map pins were created. Current Historic Environment Viewer / SMR details and lawful field observation are still required.

## Data changes and integrity

- `data/objects.json`: four new records; total 456.
- `data/sources.json`: four NIAH records plus the official conservation plan; total 571.
- `data/visual-assets.json`: four matching entries; total 456; reference images remain 133.
- `data/research.json`: one research record; total 53.
- `data/coverage-audit.json`: total 456; Cappagh (2), Neillstown (1) and Raheen (1) added as settlement work-zone labels. South Dublin status moved to RESEARCH_IN_PROGRESS. No local-authority spatial assignment or counts were invented.

The four objects are PARTIALLY_VERIFIED, not field-verified. No photographs, founder GPS fixes or current-condition claims were invented.

## Sources

1. NIAH 11205029: https://www.buildingsofireland.ie/buildings-search/building/11205029/cappaghmore-lodge-cappagh-co-dublin
2. NIAH 11205033: https://www.buildingsofireland.ie/buildings-search/building/11205033/neillstown-co-dublin
3. NIAH 11205034: https://www.buildingsofireland.ie/buildings-search/building/11205034/lucan-newlands-road-cappagh-co-dublin
4. NIAH 11205039: https://www.buildingsofireland.ie/buildings-search/building/11205039/cloverhill-road-raheen-ne-by-co-dublin
5. SDCC Clondalkin Conservation Plan, March 2026: https://www.sdcc.ie/en/devplan2022/variations/variation-1/clondalkin-local-planning-framework/supporting%20documents/conservation-plan.pdf
6. NIAH National Dataset coordinate metadata: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset
7. EPSG:29902: https://epsg.io/29902
8. NMS Historic Environment Viewer: https://www.archaeology.ie/advice-and-support/locate-a-monument-or-wreck/historic-environment-viewer/

## Next checkpoint

Resolve the held NIAH 11205032 record page (previously HTTP 403). Retrieve current NMS SMR descriptions for DU017-041003, DU017-041004 and DU017-041007; verify present survival and exact locations before creating any separate cross or font objects. Continue NIAH/NMS discovery across all four Dublin local authorities.
