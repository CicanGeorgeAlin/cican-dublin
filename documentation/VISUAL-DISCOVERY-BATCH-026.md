# VISUAL DISCOVERY BATCH 026 — Talbot Street Viaduct Exact Match and Follow-up Archive Research

**Date:** 27 October 2026  
**Repository:** https://github.com/CicanGeorgeAlin/cican-dublin  
**Mission:** LEAVE NO LOCATION BEHIND.

## 1. Live files re-fetched

| File | Current blob SHA |
|---|---|
| `data/objects.json` | `99a4512c0054ebc9170f99efdbe7a2556f99512b` |
| `data/visual-assets.json` | `4492138a6d4759caa0af9298c6afa8bc42836adf` |
| `data/sources.json` | `f7765c297fef7480722b4c0165e4b8d85bd839c0` |
| `documentation/VISUAL-AUDIT-MATRIX-2026-10-27.csv` | `d6029e6ea09e8f47fc27f03fa3117d3a6d6b06bf` |

JSON parsing: PASS. Catalogue objects: 195. Visual records: 195. Source records: 245. Matrix data rows: 0.

Structural checks:
- Unique catalogue IDs: PASS.
- Unique visual record IDs: PASS.
- Every visual record maps to a catalogue ID: PASS.
- Matrix row count equals catalogue count: FAIL.

## 2. Exact-object photograph added — Loop Line viaduct over Talbot Street

**Catalogue object:** DUB-INF-0001  
**NIAH:** 50010134  
**Photograph:** https://commons.wikimedia.org/wiki/File:Steel_railway_bridge_at_the_corner_of_Talbot_Place_and_Talbot_Street_-_geograph.org.uk_-_1972208.jpg  
**Original Geograph page:** https://www.geograph.org.uk/photo/1972208  
**Direct original image:** https://upload.wikimedia.org/wikipedia/commons/7/76/Steel_railway_bridge_at_the_corner_of_Talbot_Place_and_Talbot_Street_-_geograph.org.uk_-_1972208.jpg

The original image was opened and visually inspected. It shows the railway bridge spanning the Talbot Place/Talbot Street junction, not the separate Loop Line span over the River Liffey. The Geograph page names the subject, identifies Eric Jones as photographer, dates the photograph 2 July 2010 and gives subject coordinates 53.35136, -6.25108. The depicted-place coordinates are approximately 28 metres from the catalogue's NIAH-derived point (53.351231, -6.2514493). NIAH 50010134 independently describes the triple-span railway viaduct carrying the Loop Line over Talbot Street.

The Commons file page records CC BY-SA 2.0 and the attribution requirement. The original upload.wikimedia.org file was opened successfully in this research pass. The image is therefore accepted as an exact-object photograph of the Talbot Street crossing. It does not clearly resolve every NIAH-listed detail such as the maker's mark on the pier plinths; additional detail photographs remain desirable.

Attribution: Eric Jones, “Steel railway bridge at the corner of Talbot Place and Talbot Street”, 2 July 2010, Geograph Britain and Ireland (CC BY-SA 2.0).

Repository changes:
- Added an OBJECT_PHOTOGRAPH reference to DUB-INF-0001.
- Preserved the pre-existing STREET_CONTEXT reference.
- Added source record `WMC-DUB-INF-0001-TALBOT-PLACE-BRIDGE-2010`.
- No catalogue object data or unrelated records were changed.

## 3. Official NIAH evidence and image-access results

### Talbot Street post box — DUB-STR-0002 / NIAH 50010137

The live NIAH page opened and confirms:
- freestanding round-plan cast-iron box, installed circa 1935;
- raised P&T insignia on the west/front;
- moulded neck, dentillated frieze and shallow domed cap;
- Carron Company, Stirlingshire maker's mark on the rear of the base.

The NIAH gallery's first linked image resolves to `50010137_7.jpg`, but the media request returned HTTP 403 to this research interface. That is an access restriction, not proof the image is broken or permission to reuse it. No exact postbox photograph has been added. The broad Talbot Street image remains STREET_CONTEXT only.

### Loop Line viaduct — DUB-INF-0001 / NIAH 50010134

The NIAH page confirms the triple-span iron railway viaduct over Talbot Street, with riveted steelwork, fluted cast-iron piers and bow-string parapet. Its gallery media request returned 403. The independently sourced Eric Jones photograph above provides an exact crossing-level object photograph, so the object-photo requirement is met, while closer detail shots are still outstanding.

### 10 Talbot Street — DUB-BLD-0005 / NIAH 50010206

Search-indexed NIAH data confirms the separate address and record number 50010206, a two-bay, three-storey c.1840 house with later shopfront, Flemish-bond brickwork and segmental-headed upper windows. The live NIAH page request returned 403 in this session. Commons category search did not surface an exact photograph of number 10. The neighbouring number 8 and number 1 photographs were explicitly rejected as wrong buildings. The existing Talbot Street wide view remains context only.

## 4. Jim Larkin inscription plaque discovery — DUB-INS-0002

The official NIAH record 50010519 confirms three inset bronze plaques on the south, east and west faces of the pedestal.

A targeted search located:
- HMDB page with photographs by William Fischer Jr. dated 6 February 2024; its text describes the plaque inscriptions and location. This is a promising discovery lead, but the image files and reuse permissions were not independently retrieved/verified in this pass.
- IPA/Alamy image record DAK9YB, described as a close-up of Patrick Kavanagh's quotation plaque, photographed 15 July 2013 by “wg photo”. The page explicitly describes it as editorial-only / rights-managed, with rental or purchase required. It is **not** added to the archive or treated as freely reusable.
- Commons category for the Jim Larkin monument contains general statue photographs, but the surfaced results do not establish that any particular image is a close-up of all three plaques.

No plaque photograph was added. The existing O'Connell Street wide image remains context only. A close-up of one plaque would not satisfy the three-face photographic brief by itself.

## 5. Historical Talbot Street photograph rejected as current-object proof

A Commons archival photograph titled “Earl Street & Talbot Street, looking eastward from Nelson's Pillar, May 18 1916” was inspected. It is a genuine historic photograph by Thomas Johnson Westropp, dedicated CC0 1.0, but it is a broad view of the 1916 aftermath. It does not clearly identify the present-day Talbot Street post box, number 10 façade or exact viaduct detail. It is not attached as an object photograph to any of those current catalogue objects.

## 6. Updated inventory

| Measure | Current |
|---|---:|
| Catalogue objects | 195 |
| Visual records | 195 |
| Registered sources | 245 |
| Total image references | 72 |
| OBJECT_PHOTOGRAPH references | 43 |
| Distinct records with object-photo references | 39 |
| Independently visually verified exact-object records | 7 |
| Context-only records | 26 |
| No-image records | 130 |

The seven verified exact-object records are: DUB-MON-0006, DUB-ART-0001, DUB-ART-0002, DUB-BLD-0003, DUB-MON-0007, DUB-BLD-0009 and DUB-INF-0001.

## 7. Next work queue

1. Obtain an exact, reusable close-up of each of the three Jim Larkin pedestal plaques, checking individual rights.
2. Obtain an exact Talbot Street P&T postbox image, ideally front and rear maker's mark.
3. Find a current photograph of 10 Talbot Street, NIAH 50010206; do not substitute 8 Talbot Street or 1 Talbot Street.
4. Add closer viaduct detail images if they can be licensed and accurately located.
5. Continue systematically through the remaining 195-object catalogue, with exact-object checks before acceptance.

**Batch 026 conclusion:** One exact-object photograph of the Loop Line viaduct at the Talbot Street crossing was successfully sourced, visually inspected, rights-checked and added. No photo was added for the post box, 10 Talbot Street or the Jim Larkin plaque set because the available leads did not meet the verification and reuse requirements.

**LEAVE NO LOCATION BEHIND.**
