# NIAH Verification Batch 122 — Portmarnock, Barnhill and south-Dublin Carnegie libraries

**Project:** CICAN DUBLIN ARCHIVE  
**Founder:** CICAN GEORGE ALIN  
**Research date:** 25 November 2026  
**Workstream:** NIAH master collection — five-record verification batch  
**Status:** Research completed; production publication held pending authoritative row reconciliation  
**Protocol:** FIND → VERIFY → RECONCILE → CHECK DUPLICATES → PRESERVE PROVENANCE → PUBLISH ONLY AFTER GATES PASS

## 1. Batch outcome

Five candidates from the existing Batch 004 queue were checked against the official Buildings of Ireland NIAH search/index, individual NIAH records where accessible, and relevant local-authority or specialist evidence.

| NIAH registration | Candidate | Authority area | Research outcome |
|---|---|---|---|
| 11351005 | Strand Road graveyard, Burrow / Portmarnock | Fingal | Identity confirmed; coordinate sources differ by about 20 m after conversion; hold map pin |
| 11352001 | Barnhill Bridge | Fingal | NIAH/RPS descriptions conflict on form, date and crossing; current exact feature position not established; hold |
| 11352002 | Packenham Bridge | Fingal | NIAH identity and coordinate available; Fingal RPS gives a broader late-18th-century date than NIAH c.1820 |
| 60260117 | Shankill Carnegie Free Library | Dún Laoghaire–Rathdown | Individual NIAH record reviewed; source-derived point can be transformed; field condition not checked |
| 60260244 | Cabinteely Carnegie Free Library | Dún Laoghaire–Rathdown | Individual NIAH record reviewed; source-derived point can be transformed; field condition not checked |

The five registration numbers and names have no exact registration-number or name/alias collision in the current production catalogue. This is a first-pass identity check, not a substitute for final canonical reconciliation at publication time.

## 2. Candidate findings

### 2.1 NIAH 11351005 — Strand Road graveyard, Burrow / Portmarnock

The official NIAH County Dublin search index identifies a graveyard with markers dating from c.1600 to the present and a church ruin on the site. The index notes that the site is overgrown with vegetation. The associated church is identified in the NIAH description by SMR reference DU015-007001-.

Fingal County Council's Historic Graveyards Project, Volume 2, identifies the site as St Marnock's, survey reference FHG 7, address 1 Strand Road, Portmarnock, and records NIAH 11351005, RPS 478 and RMP DU015-00704. Its survey coordinate is X 324503, Y 243496. A separate environmental assessment table identifies NIAH 11351005 and gives ITM 724409 E, 743512 N. These source points transform to approximately 53.42709, -6.12772 (EPSG:29902) and 53.42702, -6.12799 (EPSG:2157), respectively.

The two transformed points are close but not identical. The official NIAH feature-service row and coordinate fields must be retrieved before selecting the canonical map point. No map pin is approved in this batch.

**Identity caution:** the NIAH record describes a graveyard and church ruin; the graveyard survey and environmental assessment refer to the same St Marnock's historic complex. Keep the cemetery, church fabric, associated holy well and any individual carved stones as separate child objects only if source evidence supports distinct identities and exact locations. Do not create extra pins from the general site description.

### 2.2 NIAH 11352001 — Barnhill Bridge

The official NIAH index describes a single-arch stone bridge over a river, c.1900, with cut-limestone walls and voussoirs.

Fingal County Council's Record of Protected Structures identifies Barnhill Bridge as RPS 0712 on the Barnhill-to-Lucan Road. Its description instead calls it a mid-19th-century stone arched bridge over the disused Dublin-to-Navan railway line, noting that the stone parapet walls were removed and replaced while the original stone arch remained. Fingal's 2023–2029 Development Plan appendices retain this railway-crossing description.

This is a material discrepancy, not a harmless wording variation: the NIAH index says river; the local authority RPS says former railway. The date also differs. The bridge must not be silently harmonised as a river bridge or assigned a construction date without further primary evidence.

An archaeological monitoring report for 2024 records work at Broomhill Bridge in Barnhill, ITM 703216, 738887, and says the subject area was immediately south-west of Barnhill Bridge. This is a nearby project-site coordinate, not a survey coordinate for the protected bridge itself. A secondary street-map page gives an approximate location around 53.38981, -6.44914, but that is not accepted as a canonical NIAH point.

**Decision:** retain as a blocked candidate. Obtain the exact NIAH Feature Service geometry and compare it with Fingal RPS mapping, historic OS mapping and current imagery before creating a map pin or catalogue object.

### 2.3 NIAH 11352002 — Packenham Bridge

The official NIAH individual record identifies Packenham Bridge as a single-arch limestone humpback road bridge over the Royal Canal, c.1820, with ashlar parapet walls. It is rated Regional, with architectural, scientific and technical interest. The NIAH page publishes coordinate values 303832, 238201. These are treated as TM65 / Irish Grid (EPSG:29902), not ITM.

Transforming the published Irish Grid coordinate to WGS 84 gives approximately **53.384006, -6.440293**. This is a source-derived point only; the NIAH record does not state a positional accuracy. The Fingal RPS identifies Packenham Bridge as RPS 0711 and describes it as a late-18th-century single-arched stone road bridge over the Royal Canal. The Fingal 2023–2029 Development Plan places it at Royal Canal, Barberstown Lane, Barberstown, Clonsilla.

The c.1820 NIAH date and Fingal's broader late-18th-century RPS description are retained as source-specific chronology. The bridge remains an operational road crossing; photography must be from a safe lawful viewpoint and must not obstruct traffic, cyclists or canal users.

### 2.4 NIAH 60260117 — Shankill Carnegie Free Library

The individual NIAH record identifies a detached three-bay, single-storey library on a cruciform plan. It was designed in 1910, built 1910–12 and opened in 1912; it was renovated in 1978. NIAH rates it Regional and records architectural, artistic, historical and social interest. The appraisal attributes the design to Rudolph Maximilian Butler and describes its granite dressings, Arts and Crafts-style glazing and spire-topped cupola. NIAH lists its original and in-use functions as library/archive.

The published coordinate is 325115, 221959, treated as TM65 / Irish Grid (EPSG:29902). Transformation to WGS 84 gives approximately **53.233543, -6.127011**. This is source-derived, not founder GPS or field-verified. The official record does not specify coordinate accuracy.

### 2.5 NIAH 60260244 — Cabinteely Carnegie Free Library

The individual NIAH record identifies a detached three- or five-bay, single-storey library on a cruciform plan. It was designed in 1910, built 1910–12 and opened in 1912. NIAH records repair in 1925, fire damage in 1987 and an extension underway in 2016. It is rated Regional and records architectural, artistic, historical and social interest. The appraisal attributes the design to Rudolph Maximilian Butler and notes its granite entrance dressings, Arts and Crafts-style glazing and spire-topped cupola. NIAH lists its original and in-use functions as library/archive.

The published coordinate is 323535, 224845, treated as TM65 / Irish Grid (EPSG:29902). Transformation to WGS 84 gives approximately **53.259830, -6.149541**. This is source-derived, not founder GPS or field-verified. The official record does not specify coordinate accuracy.

## 3. Production catalogue integrity gate

The complete GitHub Contents API responses for the current production files were retrieved and parsed on 25 November 2026:

| File | Current records | Validation |
|---|---:|---|
| data/objects.json | 629 | 0 duplicate object IDs |
| data/sources.json | 749 | 0 duplicate source IDs |
| data/visual-assets.json records | 629 | 0 duplicate visual record IDs |
| Object-to-visual links | 629 / 629 | 0 missing visual records; 0 orphan visual records |
| Object-to-source references | — | 0 unresolved source references |

The previous batch's DUB-BLD-0124 record is present in the production catalogue. The five Batch 004 candidates are not present by NIAH registration number or tested name/alias.

The visual-assets file contains 629 records; its top-level metadata reports record_count 629. Counts are based on the nested records array, not the number of top-level JSON keys.

## 4. Why publication is held

This batch does not alter data/objects.json, data/sources.json, data/visual-assets.json, map pins, the website or the production counts.

Publication is held for two reasons:

1. The official live NIAH Feature Service must be queried or exported for the exact five registration rows, including LOCAL_AUTHORITY_, ITM_E, ITM_N, LATITUDE, LONGITUDE, rating, description and appraisal. The data.gov.ie catalogue currently lists the national CSV resource as updated 23 November 2026, while the Feature Service layer's own metadata page reports its Data Last Edit Date as 3 April 2025. These are different resource timestamps and must not be conflated.
2. The material Barnhill Bridge identity/description conflict and the St Marnock's graveyard coordinate difference must be resolved or explicitly represented before publishing map pins.

The five records remain research candidates, not newly published catalogue objects. No photographs, image permissions, field observations, founder GPS fixes or current occupancy/condition checks are claimed.

## 5. Sources consulted

1. National Inventory of Architectural Heritage, official County Dublin search index, including NIAH 11351005, 11352001 and 11352002: https://www.buildingsofireland.ie/buildings-search/?county=DU&date_from=&date_to=&group=&location_type=building&query=&search_page=11&town=&townland=&type=
2. NIAH, Packenham Bridge, registration 11352002: https://www.buildingsofireland.ie/buildings-search/building/11352002/packenham-bridge-barnhill-co-dublin
3. NIAH, Shankill Carnegie Free Library, registration 60260117: https://www.buildingsofireland.ie/buildings-search/building/60260117/shankill-carnegie-free-library-new-vale-library-road-shankill-shankill-co-dun-laoghaire-rathdown
4. NIAH, Cabinteely Carnegie Free Library, registration 60260244: https://www.buildingsofireland.ie/buildings-search/building/60260244/cabinteely-carnegie-free-library-old-bray-road-cabinteely-cabinteely-co-dun-laoghaire-rathdown
5. Fingal County Council, Historic Graveyards Project, Volume 2, St Marnock's / FHG 7: https://www.fingal.ie/sites/default/files/2019-03/Fingal%20Historic%20Graveyards%20Project%20Volume%202.pdf
6. Maritime Area Regulatory Authority, Underwater Archaeological Impact Assessment, table of NIAH/RPS sites including NIAH 11351005 ITM point: https://www.maritimeregulator.ie/wp-content/uploads/2024/04/230018-Underwater-Archaeological-Impact-Assessment_redacted.pdf
7. Fingal County Council, Development Plan 2023–2029 Appendices, RPS 0711 Packenham Bridge and RPS 0712 Barnhill Bridge: https://www.fingal.ie/sites/default/files/2023-04/Fingal%20Development%20Plan%202023-2029%20%20-%20APPENDICES%20-%20Interim%20Publication.pdf
8. Fingal County Council, 2017–2023 Record of Protected Structures, Packenham Bridge and Barnhill Bridge: https://consult.fingal.ie/en/consultation/draft-fingal-development-plan-2017-%E2%80%93-2023-stage-2/chapter/appendix-2-record-protected
9. Excavations.ie, 2024:053 — Broomhill Bridge, Barnhill archaeological monitoring report: https://excavations.ie/report/2024/Dublin/0033906/
10. data.gov.ie, NIAH National Dataset / Feature Service metadata: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/cac7450a-38b6-4016-9b7a-39b4efda00d5
11. NIAH live Feature Service layer metadata, fields and layer data-edit date: https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/ArcGIS/rest/services/NIAHBuildingsOpenData/FeatureServer/0
12. European Data Portal, NIAH National Dataset resource listing and 23 November 2026 resource update metadata: https://data.europa.eu/data/datasets/34b5fdbb-fb55-4b6a-a134-551463378611

## 6. Next action

Use the NIAH Historic Environment Viewer Query tool or the live Feature Service to export the exact five registration rows and record the query date, fields and coordinate reference system. Reconcile the two blocked cases against the official geometry. Then prepare only the candidates that pass duplicate, authority, provenance, coordinate and schema checks for the next controlled publication review.

**Production impact:** documentation-only research. No catalogue records, source records, visual records, photographs, map pins or website content changed.

**ALWAYS STAY IN THE LIGHT.**
