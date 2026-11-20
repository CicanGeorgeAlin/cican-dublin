# CICAN Dublin Archive — Newbridge Demesne NIAH Reconciliation Batch 009

**Research date:** 20 November 2026  
**Scope:** Reconcile Newbridge Demesne NIAH IDs against the official Buildings of Ireland records and Fingal heritage audit; identify new records; audit exact-reference collisions.  
**Status:** Research-only. No production changes.

## 1. Main finding: the official NIAH records resolve three separate Newbridge assets

### A. Newbridge House — NIAH 11329001

Official NIAH record:
https://www.buildingsofireland.ie/buildings-search/building/11329001/newbridge-house-newbridge-demesne-donabate-dublin

- Rating: National.
- Special interest: Architectural, Artistic.
- Original use: Country house.
- Date range: 1730–1740; built 1737.
- NIAH coordinate pair: 321652, 250039.
- Recorded: 1 October 1997.
- Detached six-bay, two-storey-over-basement house with dormer attic; ashlar sandstone; pedimented tripartite doorcase approached by granite steps.
- Built for Dr Charles Cobbe, later Archbishop of Dublin; plasterwork by Robert West; extensive rear wing added c.1765.

Fingal County Council identifies James Gibbs as the architect of the present house and says the original house was built 1698–1705, with the current house completed in 1752. The NIAH survey's 1737 construction date and Fingal's narrative chronology describe different phases/interpretations and should both be attributed to their sources rather than collapsed into a single date. The Council notes that Newbridge is the only surviving intact 18th-century demesne landscape in County Dublin.

### B. Newbridge House farmyard complex — NIAH 11329002

Official NIAH record:
https://www.buildingsofireland.ie/buildings-search/building/11329002/newbridge-house-newbridge-demesne-donabate-co-dublin

- Rating: Regional.
- Special interest: Architectural.
- Original use: Farmyard complex.
- Date range: 1785–1795; described c.1790.
- NIAH coordinate pair: 321623, 250091.
- Recorded: 1 October 1997.
- Courtyard quadrangle comprising two-storey stable blocks, single-storey random-rubble ranges and adjoining aviary.
- Designed by Robert Mack.
- NIAH record states it is in use as a museum of late eighteenth-century rural life.

This is a distinct registered asset from the principal house (11329001). Preserve a parent/group relationship to Newbridge House and Demesne rather than merging the farmyard into the main house record.

### C. Mack's Bridge — NIAH 11336004

Official NIAH record:
https://www.buildingsofireland.ie/buildings-search/building/11336004/newbridge-house-newbridge-demesne-donabate-dublin

- Rating: Regional.
- Special interest: Architectural, Artistic, Technical.
- Original/current use: Bridge.
- Date range: 1760–1800; described c.1780.
- NIAH coordinate pair: 322039, 249413.
- Recorded: 10 August 2000.
- Single-arch humpback road bridge with carved limestone archivolt and keystones; random-rubble stone parapets, wrought-iron railings and ashlar piers.

Fingal County Council's Donabate–Portrane Heritage Audit Appendix 2 explicitly names Mack's Bridge at Newbridge Demesne, Hearse Road, and assigns NIAH registration 11336004 with the same raw coordinate pair 322039, 249413. This cross-source match confirms the identity despite the NIAH page title using the umbrella title “Newbridge House”.

## 2. Important Appendix 2 reconciliation: do not copy labels without checking NIAH records

The Fingal Heritage Audit's Appendix 2 table lists a sequence of Newbridge assets and registration numbers. The official NIAH record pages clarify the identity of the registrations:

| NIAH ref | Official NIAH identity | Raw NIAH coordinate pair |
|---|---|---|
| 11329001 | Newbridge House | 321652, 250039 |
| 11329002 | Newbridge House farmyard complex | 321623, 250091 |
| 11336002 | Vermiculated granite entrance gate piers, c.1770 | 322049, 249367 |
| 11336003 | Rusticated granite entrance gate piers and boundary wall, c.1790; entrance rebuilt 1986 | 321031, 249527 |
| 11336004 | Single-arch humpback road bridge, c.1780; named Mack's Bridge in Fingal audit | 322039, 249413 |
| 11336005 | Separate single-arch road bridge, c.1800 | 321323, 249849 |

The 2022 Fingal audit's Appendix 2 table associates the row “Newbridge demesne - bridge” with 11336003 and “Newbridge demesne - farmyard complex” with 11336005. However, the current official individual NIAH records for those two registration numbers describe entrance gate piers (11336003) and a road bridge (11336005), respectively. The exact coordinate pairs in the audit table align with the official records' coordinate pairs, but the asset labels do not. Preserve this source conflict in provenance. Do not overwrite either source silently or infer a correction to the Council's PDF without checking its original source spreadsheet.

The separate 11336002 entrance gate-pier record and 11336003 gate-pier/boundary-wall record must remain separate objects; they are not duplicate entrances merely because both have the umbrella NIAH page title “Newbridge House”.

## 3. Catalogue collision audit

Fetched and parsed current production `data/objects.json` from the GitHub Contents API: 452 objects.

Exact NIAH reference audit:

| NIAH ref | Finding |
|---|---|
| 11329001 | Absent — new candidate |
| 11329002 | Absent — new candidate |
| 11336004 | Absent — new candidate |
| 11336002 | Already present as DUB-STR-0206 |
| 11336003 | Already present as DUB-STR-0207 |
| 11336005 | Already present as DUB-INF-0151 |

The three existing catalogue objects are correct matches to the official NIAH registrations:
- DUB-STR-0206 — c.1770 vermiculated granite entrance gate piers, NIAH 11336002.
- DUB-STR-0207 — c.1790 rusticated granite entrance piers and boundary wall, NIAH 11336003.
- DUB-INF-0151 — c.1800 single-arch road bridge, NIAH 11336005.

The name-level check did not find exact candidate name collisions for the three new records. The Newbridge house and farmyard records need separate object IDs and an explicit estate/group relationship. Mack's Bridge must remain separate from the c.1800 bridge (11336005).

## 4. Coordinate controls

The NIAH individual records display coordinate pairs but the record pages do not label the CRS beside the pair. The official NIAH Data Download page says the download provides ITM, latitude/longitude and National Grid versions. Until the CSV's coordinate column headers and metadata are inspected, this report preserves the values as “NIAH coordinate pair” and does not claim a CRS or perform a transformation.

No new map pins are approved. No local-authority attribute or boundary overlay was retrieved in this batch.

## 5. Context and access

Fingal County Council describes Newbridge Demesne as a rare intact eighteenth-century designed landscape containing the house, farmyard, walled garden, parkland, woodland, water features and historic boundaries. Its Woodland Management Plan describes the demesne as approximately 400 acres and identifies Lanistown Castle, an old lime kiln, the River Pill, mature woodland and other landscape features. The archaeological heritage audit identifies Lanistown Castle (DU012-004) as a fifteenth-century tower house near the entrance to Newbridge Demesne.

These landscape and archaeological assets should be separately researched and linked to the demesne context only when their own identifiers, location and evidence are verified. Do not assume every visible landscape feature is an NIAH record.

## 6. Next actions

1. Create separate candidate records for NIAH 11329001, 11329002 and 11336004 only after checking source and coordinate metadata.
2. Investigate Lanistown Castle (DU012-004) as an archaeological monument record, not an NIAH building record; verify RMP record and access before publication.
3. Review the walled garden, glasshouses, lime kiln, ornamental water, estate boundaries and remaining bridge structures to establish which are separately recorded and which are landscape context only.
4. Obtain the official Dublin CSV and verify coordinate column labels and record attributes.
5. Continue with the wider Fingal NIAH catalogue after the Newbridge group has been reconciled.

## 7. Sources

- NIAH 11329001, Newbridge House:
  https://www.buildingsofireland.ie/buildings-search/building/11329001/newbridge-house-newbridge-demesne-donabate-dublin
- NIAH 11329002, Newbridge House farmyard:
  https://www.buildingsofireland.ie/buildings-search/building/11329002/newbridge-house-newbridge-demesne-donabate-co-dublin
- NIAH 11336004, Mack's Bridge:
  https://www.buildingsofireland.ie/buildings-search/building/11336004/newbridge-house-newbridge-demesne-donabate-dublin
- NIAH 11336002, entrance gate piers:
  https://www.buildingsofireland.ie/buildings-search/building/11336002/newbridge-house-newbridge-demesne-donabate-co-dublin
- NIAH 11336003, entrance piers and boundary wall:
  https://www.buildingsofireland.ie/buildings-search/building/11336003/newbridge-house-hearse-road-newbridge-demesne-donabate-dublin
- NIAH 11336005, c.1800 bridge:
  https://www.buildingsofireland.ie/buildings-search/building/11336005/newbridge-house-newbridge-demesne-donabate-co-dublin
- Fingal County Council, Donabate–Portrane Heritage Audit, Appendix 2 and Newbridge House section:
  https://www.fingal.ie/sites/default/files/2023-03/Donabate%20Portrane%20Heritage%20Audit%20Report%20FINAL%2019.09.2022.pdf
- Fingal County Council, Newbridge House:
  https://www.fingal.ie/heritage-and-conservation/heritage-and-tourism/donabate-portrane-heritage/newbridge-house
- Fingal County Council, Newbridge Demesne Woodland Management Plan 2022–2041:
  https://www.fingal.ie/sites/default/files/2022-11/Woodland%20Management%20Plan%20Newbridge%20Demesne.pdf
- Fingal County Council, Lanistown Castle:
  https://www.fingal.ie/ga/node/6004
- NIAH Data Download:
  https://www.buildingsofireland.ie/niah-data-download/

## 8. Production change statement

Documentation-only research batch. No production catalogue objects, photographs, map pins, website code or public-facing content were changed.
