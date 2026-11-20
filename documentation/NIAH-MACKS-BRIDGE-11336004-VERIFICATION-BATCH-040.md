# CICAN Dublin — NIAH Retrospective Audit Batch 040: Mack's Bridge (11336004)

**Date:** 20 November 2026  
**Mode:** Research and evidence reconciliation only  
**Record:** DUB-INF-0189 — Mack's Bridge, Newbridge Demesne  
**NIAH REG_NO:** 11336004  
**Decision:** Individual official record located; Gate 1 remains **HOLD / PARTIAL** pending full appraisal capture. Gate 2 remains **HOLD** because the exact current national dataset row and dataset file checksum were not retrieved. No production data changed.

## 1. Individual official NIAH record located

Official Buildings of Ireland record:
https://www.buildingsofireland.ie/buildings-search/building/11336004/newbridge-house-newbridge-demesne-donabate-dublin

The live individual page was opened and inspected on 20 November 2026. It displays:

- Published page title: **Newbridge House, NEWBRIDGE DEMESNE, Donabate, DUBLIN**. Preserve this source title as printed; do not replace it with the local common name.
- REG_NO: **11336004**
- Rating: **Regional**
- Special-interest categories: **Architectural, Artistic, Technical**
- Original use: **Bridge**
- In-use as: **Bridge**
- NIAH date range: **1760–1800**
- Page coordinate pair: **322039, 249413** (the individual page does not label the CRS)
- Date recorded: **10/08/2000**
- Date updated: **--/--/--**
- Description: “Single-arch humpback road bridge c.1780, with carved limestone archivolt and keystones. Random rubble stone parapet walls with wrought-iron railings and ashlar piers.”

The page does not expose an appraisal field or a fuller survey description in the content retrieved. Do not fabricate or infer an appraisal. The source title and page coordinate pair are preserved verbatim.

## 2. Independent Fingal historic-bridge survey

Fingal County Council / The Heritage Council, *Historic Road Bridges, Volume 2: Built Heritage & Ecological Inventory of Bridges*, Mack's Bridge entry, printed pages 104–106 (PDF text lines 1615–1709):
https://www.fingal.ie/sites/default/files/2019-04/Fingal%20Historic%20Bridges%20Volume%202.pdf

This survey was commissioned in September 2008; the Mack's Bridge built-heritage inspection is dated **29 October 2008** and names Eamonn Hunter as the built-heritage field surveyor.

It identifies the bridge as:
- Study reference FHBS09; Mack's Bridge; townland Newbridge Demesne.
- NIAH reference 11336004.
- Single-arched bridge carrying an internal road over a small watercourse near the park's south-eastern entrance.
- Coursed rubble limestone construction; ashlar sandstone parapet piers; wrought-iron railings between stone abutment parapets with cut-stone coping.
- Smooth-rendered elevations with moulded limestone impost moulding, archivolt and keystone on both sides.
- One permanent channel arch; approximate span 4.0 m.
- Principal material recorded as sandstone.
- Structural condition recorded as good; parapet condition good with light surface rust to railings; soffit and matrix/mortar good.
- Survey states the bridge is situated in a public park and mainly used as a pedestrian bridge; its 2008 survey recorded access on all sides, with thick vegetation obstructing the north bank of the west side.
- Survey says the bridge is visible on John Rocque's 1760 map, and was present but unnamed on the 1843 and 1908 OS maps.
- Construction date is described as probable: associated with the construction of Newbridge House in 1737 for Dr Charles Cobbe, later Archbishop of Dublin.
- Survey's key points say it probably dates from the early eighteenth century, is recognised by NIAH as regionally significant, and was in excellent condition at that time.

These are attributed to the Fingal / Heritage Council survey, not silently presented as text from the NIAH page. Its 2008 condition and access observations are historical observations, not statements of present condition or access.

## 3. Fingal Donabate–Portrane Heritage Audit cross-check

Fingal County Council, *Donabate–Portrane Heritage Audit Report* (2022), Appendix 2, NIAH schedule:
https://www.fingal.ie/sites/default/files/2023-03/Donabate%20Portrane%20Heritage%20Audit%20Report%20FINAL%2019.09.2022.pdf

The appendix lists Mack's Bridge at Newbridge Demesne, Hearse Road, Donabate, REG_NO 11336004, coordinate pair **322039, 249413**. This independently confirms the registration-to-name relationship and repeats the individual page's coordinate pair.

## 4. Coordinate discrepancy — preserve all source values

Three relevant coordinate statements have been recovered:

| Source | Coordinate pair | Source labelling / status |
|---|---|---|
| Individual NIAH page | 322039, 249413 | CRS not labelled on the page; do not transform or map from this pair yet |
| Fingal Historic Road Bridges survey (2008) | E 322038, N 249413 | Printed as grid easting/northing; CRS not explicitly named in this entry |
| Broadmeadow Way EIAR Appendix 1 (May 2019) | ITM E 721957, N 749441 | Explicitly labelled ITM; current object uses this source-derived locator and its documented EPSG:2157-to-WGS84 conversion |

The 2022 Fingal audit repeats 322039, 249413. The 2008 survey gives an easting one metre different. These pairs must not be conflated or silently corrected. The national dataset row is still required to determine the official ITM_E / ITM_N and LATITUDE / LONGITUDE fields for REG_NO 11336004. The EIAR ITM point remains the only coordinate pair in the current object explicitly labelled ITM.

## 5. Duplicate and relationship review

The recovered full public NIAH register and master object catalogue were checked for the related Newbridge Demesne registrations:

- 11336002 — Newbridge House gate piers / demesne entrance feature.
- 11336003 — Newbridge House entrance piers and boundary wall (as represented in the existing catalogue; retain exact individual-page identity on separate review).
- 11336004 — Mack's Bridge.
- 11336005 — separate Newbridge House demesne single-arch road bridge.

The Fingal Historic Road Bridges survey and NIAH page establish Mack's Bridge as a distinct bridge asset. It must not be merged with the gate piers or the separately registered 11336005 bridge. The local survey's position for Mack's Bridge and the nearby gate/bridge records are not grounds to merge them.

The current master and public-register entry for 11336004 is DUB-INF-0189. It is the same REG_NO, not a second object. The object currently links the Fingal 2022 audit and 2019 EIAR but does not yet have a dedicated NIAH individual-record source entry in `data/sources.json`. This is a documentation/source-registry gap; no source record was added in this research-only batch.

## 6. National dataset Gate 2

The 10 November 2026 data.gov.ie resource metadata still advertises the national CSV and CC BY 4.0 licence, but its dataset description says the bulk CSV is version dated 11 October 2023. The exact resource URL is:
https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data

Attempts in this batch to retrieve the binary CSV and a filtered NIAH FeatureServer query did not return file bytes or a feature row. No checksum, dataset header, REG_NO 11336004 row, LOCAL_AUTHORITY_, RATING, DATEFROM, DATETO, ITM_E, ITM_N, LATITUDE or LONGITUDE values are claimed as verified here.

**Gate 2 remains HOLD.** Do not treat the official page's unlabeled coordinate pair, the 2008 grid pair or the EIAR ITM pair as a substitute for the exact national dataset row.

## 7. Gate decision

| Gate | Decision | Reason |
|---|---|---|
| 1 — Individual official record | **PARTIAL / HOLD** | Official individual page located and key displayed fields captured. Appraisal field/full official record content is not exposed in the retrieved page; must be completed before PASS. |
| 2 — Exact national dataset row | **HOLD** | No actual current CSV or exact live feature row retrieved. |
| 3 — Full duplicate/relationship audit | **PARTIAL** | Full local catalogue relationship check and nearby registration distinction completed; national-row and source-coordinate proximity checks await Gate 2. |
| 4 — Evidence, rights, access, field status | **PARTIAL** | Strong source provenance documented; no present-day field inspection, photo-rights review or access verification. The 2008 access statement is historical only. |
| 5 — Controlled publication | **NOT AUTHORISED** | No publication promotion or production changes. |
| 6 — Production validation | **NOT RUN** | No deployment or public data changes. |

## 8. Next steps

1. Obtain the exact current national dataset row for REG_NO 11336004, including source version/date and checksum.
2. Capture the complete official NIAH record including appraisal if an official view or export exposes it; otherwise record the field as unavailable in the accessible official page, not as an invented appraisal.
3. Add the official individual NIAH page as a source-registry record only after its stable metadata and retrieval date are captured, in a separate controlled source-registry change.
4. Reconcile official ITM and WGS84 fields against the current EIAR-derived locator. Preserve original source coordinates separately.
5. Complete the Gate 3 coordinate proximity and relationship check after Gate 2.
6. Keep DUB-INF-0189 and all other existing NIAH registrations on provisional HOLD until their own gates pass.

**Batch 040 outcome:** Mack's Bridge's official individual NIAH page is now located, resolving the missing-individual-source discovery exception. The page and independent Fingal bridge survey materially strengthen the evidence, but the record is not Gold Standard-passed because the official appraisal capture and exact national dataset row remain outstanding. No public data or production deployment was changed.
