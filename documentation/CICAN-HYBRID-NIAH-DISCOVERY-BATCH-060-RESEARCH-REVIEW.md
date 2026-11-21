# CICAN Dublin Archive — NIAH Discovery Batch 060 Research Review

**Status:** Research-only candidate review. No archive IDs assigned, no catalogue records imported, no map pins enabled, and no production deployment.

## Method and duplicate screen

Five Dublin City entries were selected from the official National Inventory of Architectural Heritage (NIAH) Buildings of Ireland records. Each registration number, official title, rating, date range, description/appraisal and the coordinate pair displayed on each individual NIAH page (CRS not explicitly labelled) was checked against its individual NIAH record.

An initial collision screen was run against `main` at the time of research. A second full-dataset and cross-PR screen was completed on 21 November 2026 against the refreshed production snapshot and open review branches:
- `data/objects.json` (615 master objects in the refreshed production snapshot)
- `data/niah-registered-objects.json` (495 public NIAH records in the refreshed production snapshot)
- `data/sources.json`
- `data/visual-assets.json`

The refreshed screen found no matching registration numbers, normalized official names/known aliases, or normalized addresses in the four canonical datasets. Candidate terms were also checked against open PRs #30, #32, #33 and #35; no textual candidate collision was found. This exact/textual screen does not rule out spatial overlap because the page-displayed coordinate CRS remains unresolved. The Batch 058–059 records remain in separate draft PR #35.

## Candidate records

### 1. 146 Parnell Street, Dublin 1
- **NIAH registration:** 50010983
- **NIAH rating / interests:** Regional; Architectural, Artistic
- **Date range:** 1760–1780; described as built c.1770
- **Original / current use in record:** House / hostel
- **NIAH page-displayed coordinates (CRS not explicitly labelled):** 315928, 235086
- **Architectural evidence:** Terraced two-bay, four-storey house; English garden-wall-bond red brick; gauged flat arches; granite sills; timber sliding sash windows; round-headed entrance with a substantial tooled sandstone doorcase and scrolled-bracket open-bed pediment.
- **Appraisal significance:** NIAH identifies it as probably one of the earliest surviving buildings in the vicinity and highlights its eighteenth-century doorcase and historic sash windows.
- **Primary source:** https://www.buildingsofireland.ie/buildings-search/building/50010983/146-parnell-street-dublin-1-co-dublin

### 2. 156 Parnell Street, Dublin 1
- **NIAH registration:** 50060606
- **NIAH rating / interests:** Regional; Architectural
- **Date range:** 1790–1810; described as built c.1800
- **Original use / recorded condition:** House; the NIAH record describes a replacement shopfront and records the building as vacant at the time of survey. That occupancy statement is historical survey data, not a current-status claim.
- **NIAH page-displayed coordinates (CRS not explicitly labelled):** 315878, 235048
- **Architectural evidence:** Terraced two-bay, four-storey former house; handmade red brick in Flemish bond; raised brick quoins; hipped slate roof; replacement timber shopfront and uPVC casements.
- **Appraisal significance:** NIAH describes it as an early nineteenth-century Georgian townhouse contributing to a varied terrace, with balanced proportions and plain detailing.
- **Primary source:** https://www.buildingsofireland.ie/buildings-search/building/50060606/156-parnell-street-dublin-1-dublin

### 3. 103–104 Parnell Street, Dublin 1
- **NIAH registration:** 50010984
- **NIAH rating / interests:** Regional; Architectural, Artistic
- **Date range:** 1810–1830; described as built c.1820
- **Original / historical / current uses in record:** Shop/retail outlet; public house; restaurant
- **NIAH page-displayed coordinates (CRS not explicitly labelled):** 315996, 235102
- **Architectural evidence:** One combined NIAH record for a terraced four-bay, two-storey former pair of houses over a concealed basement. No. 103 retains a c.1900 timber shopfront with fluted Ionic pilasters and a figurative lion in the pediment; No. 104 has a more recent shopfront.
- **Appraisal significance:** The unusual massing and later unification contribute evidence of architectural development. The appraisal records a long association with grocery and spirit dealing and later use as the Blue Lion bar.
- **Record-boundary note:** This is one NIAH registration for the combined 103–104 property, not two separate candidate records.
- **Primary source:** https://www.buildingsofireland.ie/buildings-search/building/50010984/103-104-parnell-street-dublin-1-co-dublin

### 4. 98 Parnell Street, Dublin 1
- **NIAH registration:** 50010986
- **NIAH rating / interests:** Regional; Architectural, Artistic
- **Date range:** 1800–1820; described as built c.1810
- **Original / historical / current uses in record:** House; shop/retail outlet; public house
- **NIAH page-displayed coordinates (CRS not explicitly labelled):** 315962, 235078
- **Architectural evidence:** Terraced two-bay, four-storey former townhouse; four-storey rear return; Flemish-bond red brick; segmental-headed openings with gauged brick voussoirs and stop-chamfered reveals; timber sash windows; c.1900 timber shopfront with fluted pilasters, pedimented brackets and cornice.
- **Appraisal significance:** NIAH notes the unusual stop-chamfered window reveals and the building's role as a local social hub. The record also documents the Healy family grocery association from at least the mid-nineteenth century to c.1950.
- **Primary source:** https://www.buildingsofireland.ie/buildings-search/building/50010986/98-parnell-street-dublin-1-dublin

### 5. Desmonds / Not to Worry / Talbot Street Business Centre, 19 Talbot Street, Dublin 1
- **NIAH registration:** 50010197
- **NIAH rating / interests:** Regional; Architectural
- **Date range:** 1830–1850; described as built c.1840
- **Original / current uses in record:** House / shop-retail outlet
- **NIAH page-displayed coordinates (CRS not explicitly labelled):** 316257, 234790
- **Architectural evidence:** Terraced three-bay, three-storey house; Flemish-bond brown brick; hipped slate roof; two-over-two timber sliding sash windows; three-centred-arch entrance with a moulded surround and painted Ionic doorcase; granite entrance step.
- **Appraisal significance:** Although later shopfronts altered the ground floor, the building retains its original form and fabric, including the Ionic doorcase and sash windows, and maintains the north-side Talbot Street terrace rhythm.
- **Primary source:** https://www.buildingsofireland.ie/buildings-search/building/50010197/desmonds-not-to-worry-talbot-street-business-centre-19-talbot-street-dublin-1-co-dublin

## Coordinate handling

The coordinate pairs above are transcribed from the individual NIAH pages. Those pages display the numbers but do not explicitly label their coordinate reference system. The values are consistent with the older Irish Grid/National Grid representation, not ITM EPSG:2157; this interpretation remains provisional until reconciled against the official national dataset. The official NIAH download documentation distinguishes ITM, latitude/longitude and National Grid fields. NIAH's national dataset provides distinct ITM, latitude/longitude and National Grid fields, and its ITM_E/ITM_N fields are the appropriate official ITM source. These page-displayed pairs are not GPS field fixes and must not be copied into latitude/longitude or ITM fields. Coordinate reconciliation, parcel/footprint review and founder GPS verification remain separate tasks. No map URLs or map pins are authorised by this research review.

## Photography and access

All five candidates are street-fronted buildings. The next visual step is a lawful public-space façade/context photograph, with close details only where safely and lawfully visible. Do not enter private property or photograph interiors without permission. Existing NIAH photographs are reference material; they are not founder-captured originals and do not complete the archive's founder photography status.

## Decision

All five are **eligible for a subsequent record-preparation review**, subject to a second review of address identity, archive schema and source registry conventions. No sequential archive IDs, source IDs or visual IDs have been allocated. The next step is an independent duplicate/schema review against the refreshed production datasets, preserve the NIAH page as primary provenance, and keep coordinate reconciliation separate from object identity verification.

---
Prepared for CICAN Dublin Archive. Evidence basis: individual NIAH Buildings of Ireland records linked above; accessed 21 November 2026.
