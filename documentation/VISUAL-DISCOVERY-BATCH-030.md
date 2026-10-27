# VISUAL DISCOVERY BATCH 030 — Dublin Street Furniture and Exchange Court Image Leads

**Date:** 27 October 2026  
**Repository:** https://github.com/CicanGeorgeAlin/cican-dublin  
**Mission:** LEAVE NO LOCATION BEHIND.

## 1. Live repository baseline

Fetched all four live data/audit files before research.

| File | Blob SHA |
|---|---|
| `data/objects.json` | `99a4512c0054ebc9170f99efdbe7a2556f99512b` |
| `data/visual-assets.json` | `5ff5f351061ab8c1570818334d2435768c76c8e1` |
| `data/sources.json` | `9fb11d5d0e87ddbeec2dfc9adbf3c4aca975bbd0` |
| `documentation/VISUAL-AUDIT-MATRIX-2026-10-27.csv` | `e4bf004cf8e50c33c974235088e2549c56f04ce2` |

All JSON files parse. Catalogue objects and visual records both total 195. The source registry contains 247 entries. The audit CSV contains 195 data rows.

## 2. Critical NIAH image-rights clarification

The official Buildings of Ireland Terms and Conditions state that website content is copyright of the Department of Housing, Local Government and Heritage. Educational or private use is permitted with NIAH credit; commercial use requires prior written agreement from NIAH.

This matters because the archive has a public-facing website and the project has a book/publication route. The archive will not assume that NIAH image galleries are openly licensed merely because they are publicly viewable. Unless the intended use is clearly within the permitted educational/private scope or written permission is obtained, NIAH photographs remain research/visual-identification leads and are not copied into the repository.

Official terms: https://www.buildingsofireland.ie/terms-and-conditions/

The NIAH image-upload form separately requires the uploader to confirm that the photograph is their own work and that NIAH has permission to publish it. This is further reason not to infer a reusable licence from a visible gallery image.

## 3. Exact NIAH image-gallery leads — post boxes

### 3.1 Burgh Quay Edward VII box

**Target:** `DUB-STR-0014`, NIAH 50020294.

The official NIAH page contains a gallery. The image-search preview was visually inspected and depicts a green cast-iron pillar box with the ER VII cipher and Handyside form, at the Burgh Quay / Hawkins Street junction. It appears to match the catalogue object and official NIAH description.

However, the direct gallery-image request returned HTTP 403 in the inspection environment, and the image is NIAH website content subject to the rights terms above. No licence for reuse on this archive has been established.

**Decision:** strong exact-object visual lead; do not attach or count as a reusable photograph pending permission or an independently licensed photograph.

NIAH page: https://www.buildingsofireland.ie/buildings-search/building/50020294/dublin-city

### 3.2 Gardiner Street Upper Victorian Handyside box

**Target:** `DUB-STR-0003`, NIAH 50010760.

The official NIAH gallery exposes several photographs, including image 50010760_5.jpg. The page description identifies a c.1880 cylindrical Handyside pillar box with a VR royal insignia and maker's mark. The gallery image request returned HTTP 403, so its pixels could not be inspected in this session. The gallery remains a lead, not an accepted photo. Reuse permission has not been established.

NIAH page: https://www.buildingsofireland.ie/buildings-search/building/50010760/gardiner-street-upper-dublin-1-dublin

### 3.3 O'Connell Street Upper twin post box

**Target:** `DUB-STR-0010`, NIAH 50010555.

The official NIAH page provides a gallery and precisely locates the early Free State twin box at the junction with Cathal Brugha Street. The gallery image request returned HTTP 403. No independently reusable image was established.

NIAH page: https://www.buildingsofireland.ie/buildings-search/building/50010555/oconnell-street-upper-dublin-dublin

### 3.4 Jervis Street twin post box

**Target:** `DUB-STR-0008`, NIAH 50010458.

The official NIAH record describes the c.1930 twin box on the east side of Jervis Street near Mary Street. Search results returned the record but no exact independently licensed photograph. The NIAH page was inaccessible to the inspection browser (403); no image was added.

NIAH page: https://www.buildingsofireland.ie/buildings-search/building/50010458/jervis-street-dublin-1-co-dublin

### 3.5 Other post-box searches

Searches were also run for the North Circular Road box outside No. 530 (50060629), the South Great George's Street / Fade Street twin box (50910076), and the Dame Street double box (50020195). No exact photograph with a verified reuse licence was found.

A Geograph photograph of an Edward VII box at Merrion Square South (photo 7639716) was visually inspected and rejected: it is a different location and not a substitute for the catalogue's North Circular Road box. A Geograph double-aperture box on Nassau Street (photo 7640607) was also rejected as a different object and location.

## 4. Old Detective Office, 1 Exchange Court — strong exact image lead

**Target:** `DUB-BLD-0004`, NIAH 50910280.

A Royal Irish Constabulary Forum research thread titled “G Division (Detective)” contains a section specifically titled “Exchange Court Detective Office and Station - Location and Photographs”. The post presents an image described as “and as it is today”; the linked photograph was opened and visually inspected. It shows the brick façade, entrance, and commemorative plaque above the door. This is a strong visual match for the catalogue building, whose NIAH record describes a granite commemorative plaque above the entrance.

The forum post also distinguishes the building's location and historic use at Exchange Court. The image is attributed in the post as “Now2 mine.jpg”, but the identity of the copyright holder and reuse terms are not established. The forum thread is locked, and no permission was obtained.

**Decision:** retain as a high-priority exact-object permission lead; do not import until the photographer/rightsholder grants permission or the image is independently licensed.

Forum source: https://irishconstabulary.com/viewtopic.php?f=36&t=1419  
Direct image: https://attachment.tapatalk-cdn.com/16889/202008/3579887_cd4214f1526fd2dccde588f0a3c0245e_t.jpg  
NIAH record: https://www.buildingsofireland.ie/buildings-search/building/50910280/old-detective-office-1-exchange-court-dublin-2-dublin

## 5. College Street Art Deco lamp standard

**Target:** `DUB-STR-0027`, NIAH 50020523.

The NIAH record describes the c.1935 reinforced-concrete double-headed lamp standard on the north side of College Street. An environmental impact report for a separate Dublin transport scheme describes the same type of Dublin Corporation lamp standard and includes a photograph of an example at McCartney Bridge / Baggot Street Lower. That is a different location, not the College Street catalogue object, so it cannot be substituted.

No exact, rights-cleared College Street photograph was found. The McCartney Bridge photograph is useful only as a type/appearance reference.

NIAH record: https://www.buildingsofireland.ie/buildings-search/building/50020523/college-street-dublin-2-co-dublin  
EIAR reference: https://www.pleanala.ie/publicaccess/EIAR-NIS/313509/EIAR/Volume%204%20-%20Appendices/Part%204%20of%204/Chapter%2016%20Architectural%20Heritage/Appendix%20A16.1-%20A16.3%20Architectural%20Heritage.pdf

## 6. Hatch Street and Harcourt Street architectural details

Searches for 23 Hatch Street Lower (NIAH 50110521) and Harrington Hall, 69 Harcourt Street (NIAH 50920250) surfaced property-market and official heritage pages, but no exact, reusable close-up of the coal-hole cover, boot scrapers, or entrance ironwork. A building-wide image would not automatically prove the presence or condition of the specific pavement feature.

No images were added for these objects.

## 7. Batch 030 outcome

No new image reference was added. Four important types of lead were documented:
- NIAH official gallery images that appear to show the exact Burgh Quay, Gardiner Street Upper, and O'Connell Street Upper post boxes, but whose reuse rights are not cleared and whose original media could not be fetched in this environment.
- A visually inspected, likely exact contemporary façade photograph for 1 Exchange Court, but with an unconfirmed photographer/rightsholder and no reuse permission.
- Wrong-location Geograph and EIAR images rejected to prevent false object matches.

## 8. Structural validation and inventory

| Measure | Count |
|---|---:|
| Catalogue objects | 195 |
| Visual records | 195 |
| Registered sources | 247 |
| Reference-image entries | 74 |
| OBJECT_PHOTOGRAPH references | 45 |
| Records with OBJECT_PHOTOGRAPH references | 41 |
| Independently verified exact-object records | 8 |
| Context-only records | 26 |
| Records with no image references | 128 |
| Audit matrix rows | 195 |
| New image references in Batch 030 | 0 |

Validation:
- Catalogue JSON parses: PASS.
- Visual-assets JSON parses: PASS.
- Sources JSON parses: PASS.
- Unique object and visual-record IDs: PASS.
- Every visual record maps to a catalogue object: PASS.
- Every image reference resolves to a registered source: PASS.
- Audit matrix rows match catalogue objects: PASS.

**Batch 030 conclusion:** the research produced a strong candidate for the Old Detective Office and exact official image-gallery leads for multiple post boxes. None could be lawfully and confidently added under the project's evidence and reuse rules during this batch. The next step is rights clearance for the Exchange Court image and NIAH gallery images, while continuing the hunt for independently licensed Geograph, Commons, or photographer-published photographs.

**LEAVE NO LOCATION BEHIND.**
