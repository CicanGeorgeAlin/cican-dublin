# VISUAL DISCOVERY BATCH 025 — Image Inspection, Rights Review and Exact-Object Discovery

**Date:** 27 October 2026  
**Repository:** https://github.com/CicanGeorgeAlin/cican-dublin  
**Scope:** Image references 11–20 in the live visual-assets record order, plus targeted exact-object discovery  
**Mission:** LEAVE NO LOCATION BEHIND.

## 1. Live snapshot and validation

Fetched immediately before this report:

| File | Blob SHA |
|---|---|
| `data/objects.json` | `99a4512c0054ebc9170f99efdbe7a2556f99512b` |
| `data/visual-assets.json` | `c46cc2c1aa201d5393ad0d345c21319a13e599b1` |
| `data/sources.json` | `b3e3c61fa2eb02d5f8c0d64f1139de0459e235e7` |
| `documentation/VISUAL-AUDIT-MATRIX-2026-10-27.csv` | `37e3d596db607138c4e9d345905f6d4a71e5aad6` |

All four files parsed/read successfully. The catalogue remains 195 objects, the visual asset file contains 195 visual records, and the source register now contains 244 records. The audit matrix contains 0 data rows.

Structural checks:
- Unique catalogue IDs: PASS.
- Unique visual record IDs: PASS.
- Every visual record maps to a catalogue object: PASS.
- Matrix has one data row per catalogue object: FAIL.
- JSON parsing for all three data files: PASS.

## 2. References 11–20: findings

| # | Object ID | Catalogue object | Image role in live record | Investigation result |
|---:|---|---|---|---|
| 11 | DUB-MON-0006 | Edmund Burke Statue | OBJECT_PHOTOGRAPH | Image opened and visually inspected: full standing bronze statue matches. Commons page identifies Yair Haklai, 7 August 2022, CC BY-SA 4.0. Accepted as verified object photo. |
| 12 | DUB-ART-0001 | Cactus Provisoire — Alexander Calder | OBJECT_PHOTOGRAPH | Image opened and visually inspected: distinctive black steel Calder sculpture matches the catalogue subject. Commons page identifies Sailko, 30 January 2020, CC BY 3.0. Accepted as verified object photo. |
| 13 | DUB-ART-0002 | Reclining Figures — Henry Moore | OBJECT_PHOTOGRAPH | Image opened and visually inspected: bronze Reclining Connected Forms sculpture and Trinity setting match. Commons page identifies Yair Haklai, 8 August 2022, CC BY-SA 4.0. Accepted as verified object photo. |
| 14 | DUB-BLD-0003 | City Hall (former Royal Exchange) | OBJECT_PHOTOGRAPH | Image opened and visually inspected: exterior, portico and civic building match Dublin City Hall. Commons page identifies Yair Haklai, 7 August 2022, CC BY-SA 4.0. Accepted as verified object photo. |
| 15 | DUB-MON-0007 | Jim Larkin Monument | OBJECT_PHOTOGRAPH | Image opened and visually inspected: full bronze figure and granite pedestal match the monument. Commons page identifies Darcydwyer, 24 August 2018, CC BY-SA 4.0. Accepted as verified object photo. |
| 16 | DUB-INS-0002 | Jim Larkin Monument pedestal inscription plaques | STREET_CONTEXT | Existing image is a broad O'Connell Street photograph, not a close-up of the three pedestal plaques. Kept context-only. Commons page opened; oversized 22.5 MB original could not be retrieved by this browser tool. |
| 17 | DUB-STR-0002 | Talbot Street cast-iron P&T post box | STREET_CONTEXT | Existing image is a broad street photograph, not the specific post box. Official NIAH record 50010137 opened and confirms exact post-box description; NIAH gallery image request returned 403. No exact image accepted. |
| 18 | DUB-BLD-0005 | 10 Talbot Street | STREET_CONTEXT | Existing image is broad street context and does not identify the number 10 façade. NIAH search result confirms register 50010206 and the building description; direct NIAH page returned 403. No exact image accepted. |
| 19 | DUB-INF-0001 | Loop Line railway viaduct over Talbot Street | STREET_CONTEXT | Existing Talbot Street image is context only. Official NIAH record 50010134 opened. A Geograph Loop Line photograph by Gareth James was opened and visually inspected, but depicts the Liffey span near Butt Bridge/Liberty Hall, not the specific Talbot Street crossing; rejected as an exact-object photograph. |
| 20 | DUB-BLD-0009 | Talbot House, 9 Talbot Street | STREET_CONTEXT + new OBJECT_PHOTOGRAPH | Existing broad Talbot Street image remains context only. Found a distinct Geograph Ireland photograph of the actual Talbot House façade; original page and image opened and visually inspected. Subject geotag 53.35044, -6.25672 is approximately 7 m from the catalogue point. Photographer John S Turner; taken 26 October 2012. Accepted and added as OBJECT_PHOTOGRAPH. |

## 3. Six exact-object photographs confirmed in this batch

Five existing Wikimedia Commons object-photo references were inspected at pixel level and matched to their catalogue subjects:
1. Edmund Burke Statue — https://commons.wikimedia.org/wiki/File:Edmund_Burke_statue,_Trinity_College.jpg
2. Cactus Provisoire — https://commons.wikimedia.org/wiki/File:Alexander_Calder,_Cactus_provvisorio,_1967,_01.jpg
3. Henry Moore's Reclining Connected Forms — https://commons.wikimedia.org/wiki/File:Reclining_Connected_Forms_-_Henry_Moore_(LH_612,_Trinity_College,_Dublin).jpg
4. City Hall — https://commons.wikimedia.org/wiki/File:City_Hall,_Dublin.jpg
5. Jim Larkin Monument — https://commons.wikimedia.org/wiki/File:County_Dublin_-_Jim_Larkin_monument_-_20180824172434.jpg

For all five, the original Commons file page and original media file opened. Individual file pages identify the photographer and the applicable licence. Attribution data is present in the repository. These five are now confirmed exact-object photo records.

## 4. New exact-object photograph added: Talbot House

**Catalogue ID:** DUB-BLD-0009  
**Image page:** https://www.geograph.ie/photo/7571876  
**Image URL:** https://s0.geograph.org.uk/geophotos/07/57/18/7571876_361d33df.jpg

The Geograph page names the subject as “Talbot House, #9 Talbot Street, Dublin”, explicitly references NIAH registration 50010207, identifies photographer John S Turner and gives the date taken as 26 October 2012. It provides subject coordinates 53.35044, -6.25672. The photograph was opened and visually inspected; it shows the building's façade, central breakfront and entrance.

The page's individual licence descriptor is CC BY-SA 2.0. The Geograph reuse-detail endpoint returned 403 during this session, so the repository note retains that limitation and requires a fresh terms-page check before further redistribution. Attribution recorded: © John S Turner, “Talbot House, #9 Talbot Street, Dublin”, 26 October 2012, Geograph Ireland (CC BY-SA 2.0).

Changes made:
- Added an OBJECT_PHOTOGRAPH reference to `DUB-BLD-0009`.
- Preserved the existing STREET_CONTEXT image.
- Added source record `GEO-DUB-BLD-0009-2012-01`.
- Did not alter `data/objects.json`, founder-original fields or unrelated records.

## 5. Rejected / not-yet-accepted discoveries

- The Geograph Loop Line image (https://www.geograph.ie/photo/1754854) shows the viaduct over the Liffey, but not the exact Talbot Street span. It is not counted for DUB-INF-0001.
- The NIAH gallery for the Talbot Street post box and viaduct exposes individual image files, but those image requests returned 403 to the inspection tool. This is an access limitation, not evidence that the files are broken or that the licence permits republication.
- The Geograph Talbot House photo's reuse-detail endpoint returned 403; the image and source page were accessible, but the terms endpoint should be rechecked before any separate redistribution.
- The existing shared Talbot Street context image cannot be used as proof for four different objects.

## 6. Updated archive coverage

| Measure | Current result |
|---|---:|
| Catalogue objects | 195 |
| Visual records | 195 |
| Registered sources | 244 |
| OBJECT_PHOTOGRAPH references | 42 |
| Records with at least one object-photo reference | 38 |
| Records with verified exact-object photographs | 6 |
| Context-only records | 27 |
| Records without any image reference | 130 |

The six independently verified exact-object photographs are the five existing Commons photos above plus the newly added Talbot House photograph. Other pre-existing OBJECT_PHOTOGRAPH references remain unverified until individually inspected.

## 7. URL and source-page testing

- Five existing Commons original image files were successfully opened and visually inspected.
- The new Geograph Talbot House original image file was successfully opened and visually inspected.
- The associated six source pages were opened.
- The O'Connell Street original file fetch returned an oversized-content error; not marked broken.
- The Talbot Street Commons source page could not be retrieved in this session.
- NIAH post-box and viaduct source pages opened; their linked gallery media returned 403.
- The Geograph Loop Line source page and image opened, but the image was rejected for the Talbot Street-specific object because it depicts another span.

## 8. Next work queue

1. Find exact close-up photographs of all three Jim Larkin pedestal plaques.
2. Find and visually verify the Talbot Street P&T post box, including its P&T insignia and Carron maker's mark.
3. Find an exact façade photograph of 10 Talbot Street, NIAH 50010206.
4. Find a photograph of the Loop Line viaduct at the actual Talbot Street crossing, not the Liffey span.
5. Continue the remaining image references in order, then investigate context-only and missing catalogue objects.
6. Recheck Geograph reuse terms for the Talbot House image.
7. Re-fetch and validate JSON and the complete 195-row audit matrix after each change.

**Batch 025 conclusion:** Five pre-existing object-photo records were visually confirmed. One additional exact-object photograph was discovered, rights provenance recorded and added to the correct catalogue visual record. The archive now contains **38 object-photo candidate records, of which 6 are independently verified**. This is not 195/195.

**LEAVE NO LOCATION BEHIND.**
