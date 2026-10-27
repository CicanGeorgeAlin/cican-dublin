# VISUAL DISCOVERY BATCH 035 — Merrion Square Edward VII Post Box Verification

**Date:** 27 October 2026  
**Repository:** https://github.com/CicanGeorgeAlin/cican-dublin  
**Mission:** LEAVE NO LOCATION BEHIND.

## 1. Live baseline

Fetched the current catalogue, visual-assets, sources and audit matrix after Batches 033 and 034.

- Catalogue objects: 195
- Visual records: 195
- Registered sources: 251
- Existing image references: 78
- OBJECT_PHOTOGRAPH references: 49
- STREET_CONTEXT references: 29
- Independently verified exact-object records before this batch: 12
- Audit matrix rows: 195

The 12 previously verified exact-object records included the Nassau Street post box and the three Geograph additions recorded in Batch 034.

## 2. Exact photograph verified — DUB-STR-0022

**Target:** Edward VII cast-iron pillar post box, Merrion Square  
**NIAH registration:** 50100400

An existing Wikimedia Commons reference by **Robert Linsdell**, photographed **12 June 2015**, was already attached to this record. However, the audit matrix still marked the image URL, source page and object identity unverified.

The Commons file page and its 960 px image preview were opened. The preview was visually inspected and clearly shows:
- The green cast-iron cylindrical pillar box.
- Edward VII's crown and royal cipher.
- Raised POST lettering and letter aperture.
- The moulded cap, body and plinth.

The Commons page records camera coordinates **53.339620, -6.251859**, approximately **2 metres** from the catalogue's NIAH-derived point **53.3396091, -6.2518799**. The official NIAH record independently confirms the box at Merrion Square near Merrion Street Upper, dating to c.1905, with Edward VII's royal cipher and crown and a Handyside maker's mark.

The Commons file page identifies Robert Linsdell and the date 12 June 2015, and confirms **Creative Commons Attribution 2.0 Generic (CC BY 2.0)**. Attribution is recorded in the visual-assets file.

**Decision:** verified exact-object third-party reference photograph. It is not a founder original; founder photography remains outstanding.

Sources:
- Commons file page: https://commons.wikimedia.org/wiki/File:Merrion_Square_South,_Dublin_(507052)_(30505692474).jpg
- Tested 960 px image: https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Merrion_Square_South%2C_Dublin_%28507052%29_%2830505692474%29.jpg/960px-Merrion_Square_South%2C_Dublin_%28507052%29_%2830505692474%29.jpg
- CC BY 2.0 deed: https://creativecommons.org/licenses/by/2.0/
- Official NIAH record: https://www.buildingsofireland.ie/buildings-search/building/50100400/merrion-square-dublin-2-dublin

## 3. Changes made

### `data/visual-assets.json`
- Replaced the stored Special:FilePath redirect with the exact 960 px Wikimedia thumbnail URL that was successfully opened and visually inspected.
- Expanded the reference location note to record the visible object match, approximate 2 m coordinate comparison, NIAH corroboration, licence and third-party status.
- Kept the existing `OBJECT_PHOTOGRAPH` reference and source ID; no duplicate reference or source record was added.

Commit: `419d52afc1f3998b92af65a1e6ae212ef9180ae8`

### `documentation/VISUAL-AUDIT-MATRIX-2026-10-27.csv`
Updated `DUB-STR-0022`:
- Object photograph: Yes.
- Image URL tested: Yes.
- Original source page tested: Yes.
- Correct object visually confirmed: Yes.
- Photographer confirmed: Yes.
- Licence confirmed: Yes.
- Attribution complete: Yes.
- Final status: Verified exact-object reference photo; founder original still pending.

Commit: `5383f23f626dc2e86f15e2a8d79f6d52c5ba10d1`

No catalogue object, source record, founder-photo status or line-art status was changed.

## 4. Mountjoy Square coal-hole reference — context only

The live archive already contains a public-domain Gavinmc photograph from 5 October 2008. The original image was opened and visually inspected; it shows an ornate coal-hole cover set in granite at Mountjoy Square.

The Commons description does not identify the north side, No. 3 or the exact cover. The archive correctly retains it as `STREET_CONTEXT` on `DUB-BLD-0025` and `DUB-STR-0072`, with a note that it is not confirmed as the cover outside No. 3 Mountjoy Square North. It was not promoted to an exact-object photograph.

Sources:
- https://commons.wikimedia.org/wiki/File:Mountjoy_Square,_Dublin,_Ireland_(ornate_coal_hole)_001.jpg
- https://www.buildingsofireland.ie/buildings-search/building/50010820/dublin-adult-learning-centre-dublin-city

## 5. Further image leads checked

- **23 Hatch Street Lower, NIAH 50110521:** official NIAH confirms a South City Foundry coal-hole cover in granite paving. Property-sale photographs are general building images and do not establish that the coal-hole detail is shown. No new image accepted.
- **Gardiner Street Upper, NIAH 50010760:** NIAH confirms the c.1880 Handyside VR box. Search did not establish a visually inspected, reusable exact photograph.
- **Marlborough Street, NIAH 50010238:** NIAH confirms the c.1905 McDowall Steven & Co. ER VII box. Historical street photographs surfaced, but did not establish the exact box in the frame.
- **Lower Abbey Street, NIAH 50010291:** NIAH confirms the c.1905 Handyside ER VII box. No exact reusable image accepted.

Official records:
- https://www.buildingsofireland.ie/buildings-search/building/50110521/23-hatch-street-lower-dublin-2-dublin
- https://www.buildingsofireland.ie/buildings-search/building/50010760/gardiner-street-upper-dublin-1-dublin
- https://www.buildingsofireland.ie/buildings-search/building/50010238/marlborough-street-dublin-1-co-dublin
- https://www.buildingsofireland.ie/buildings-search/building/50010291/lower-abbey-street-dublin-1-dublin

## 6. Updated inventory

| Measure | Count |
|---|---:|
| Catalogue objects | 195 |
| Visual records | 195 |
| Registered sources | 251 |
| Reference-image entries | 78 |
| OBJECT_PHOTOGRAPH references | 49 |
| STREET_CONTEXT references | 29 |
| Records with any reference image | 67 |
| Records with OBJECT_PHOTOGRAPH references | 41 |
| Independently verified exact-object records | 13 |
| Context-only records | 26 |
| Records with no image references | 128 |
| Audit matrix data rows | 195 |
| New image references in Batch 035 | 0 |

The 13 independently verified exact-object records are:
1. `DUB-MEM-0001`
2. `DUB-MON-0004`
3. `DUB-MON-0005`
4. `DUB-MON-0006`
5. `DUB-ART-0001`
6. `DUB-ART-0002`
7. `DUB-BLD-0003`
8. `DUB-MON-0007`
9. `DUB-INF-0001`
10. `DUB-BLD-0009`
11. `DUB-STR-0006`
12. `DUB-STR-0016`
13. `DUB-STR-0022`

## 7. Post-update validation

All live files were fetched after the two changes:
- All three JSON files parse: PASS.
- Catalogue and visual record counts match: 195 / 195.
- Sources: 251.
- Image references: 78.
- Audit matrix data rows: 195.
- Broken source references: 0.
- Orphan visual records: 0.
- Merrion Square image URL points to the tested 960 px image: PASS.
- Merrion Square audit row records all verification checks: PASS.

Founder-original photography remains a separate requirement. All 195 visual records still await founder-original photographs; 128 records have no reference image at all.

**Batch 035 conclusion:** one existing Merrion Square Edward VII post-box photograph has now passed visual, source, location, photographer, licence and attribution checks. Its stale audit entry and untested image URL were corrected without adding a duplicate reference.

**LEAVE NO LOCATION BEHIND.**
