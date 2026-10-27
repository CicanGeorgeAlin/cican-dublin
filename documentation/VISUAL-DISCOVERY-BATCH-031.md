# VISUAL DISCOVERY BATCH 031 — Upper O’Connell Post Box and Exchange Court Rights Review

**Date:** 27 October 2026  
**Repository:** https://github.com/CicanGeorgeAlin/cican-dublin  
**Mission:** LEAVE NO LOCATION BEHIND.

## 1. Live baseline

Fetched the four live data/audit files before research.

| File | Blob SHA |
|---|---|
| `data/objects.json` | `99a4512c0054ebc9170f99efdbe7a2556f99512b` |
| `data/visual-assets.json` | `5ff5f351061ab8c1570818334d2435768c76c8e1` |
| `data/sources.json` | `9fb11d5d0e87ddbeec2dfc9adbf3c4aca975bbd0` |
| `documentation/VISUAL-AUDIT-MATRIX-2026-10-27.csv` | `e4bf004cf8e50c33c974235088e2549c56f04ce2` |

All JSON parsed. The catalogue and visual files each contain 195 records; sources contain 247 records; the audit CSV has 195 data rows.

## 2. Upper O’Connell Street — exact photograph found, but licence is non-commercial

**Target:** `DUB-STR-0010`, NIAH 50010555, early Free State twin post box at the junction with Cathal Brugha Street.

A Flickr photograph by **Mark Cadden**, taken 8 November 2019 and uploaded 7 June 2020, is titled “Pillar Post Box, O'Connell Street, Dublin”. Its caption identifies a double-aperture P&T pillar box outside the Gresham Hotel on Upper O’Connell Street, and describes the IPB18/1 model and its earlier installation history.

The exact object/location match is independently corroborated by a MetroLink Environmental Impact Assessment Report table that identifies “Pillar letter box outside Gresham Hotel, O'Connell Street Upper” as NIAH 50010555. The official NIAH record places the same twin box at the north end of O’Connell Street at Cathal Brugha Street and describes its two apertures, P&T panel and cast-iron form.

The Flickr page's “Some rights reserved” link resolves to **Creative Commons Attribution-NonCommercial-ShareAlike 2.0** (CC BY-NC-SA 2.0). The direct image request returned HTTP 403, so the original image pixels could not be fetched for independent visual inspection in this environment. The caption and independent location evidence make this a strong exact-object candidate, but the licence's NonCommercial condition is incompatible with assuming unrestricted reuse in an archive that may be used in a commercial book/publication.

**Decision:** do not add this photograph to the production image references. Retain as a rights-clearance lead. Contact Mark Cadden for a separate written licence covering the website, archive and any commercial print/publication use, and request an original image file suitable for visual inspection.

Sources:
- Flickr original: https://www.flickr.com/photos/187555397@N05/49980428357/
- Licence: https://creativecommons.org/licenses/by-nc-sa/2.0/
- NIAH record 50010555: https://www.buildingsofireland.ie/buildings-search/building/50010555/oconnell-street-upper-dublin-1-co-dublin
- MetroLink EIAR, Chapter 26, table entry BH-271 (NIAH 50010555): https://www.pleanala.ie/publicaccess/Case%20Documentation/314724/Applicant%20Documents/Application%20Documents/5_EIAR/Volume%203%20Environmental%20Baseline%20and%20Assessment/Chapter%2026%20Architectural%20Heritage.pdf

## 3. Exchange Court — identity corroborated; image rights still unknown

**Target:** `DUB-BLD-0004`, NIAH 50910280, Old Detective Office, 1 Exchange Court.

The Royal Irish Constabulary Forum thread contains a specific section titled “Exchange Court Detective Office and Station - Location and Photographs”. It links a contemporary image labelled “Now2 mine.jpg”. The image appears to show the building frontage and commemorative plaque, but the photographer/rightsholder and reuse terms are not established. The thread's author explicitly calls it “mine”, but that alone is not sufficient evidence that the author owns the photograph or has authority to grant a licence.

The official NIAH record independently describes the c.1830 building and a rectangular commemorative granite plaque above the entrance. The forum page also contains historic map and façade material, useful for provenance and identification.

**Decision:** retain as an exact-object candidate pending written permission from the image rightsholder. Do not import or redistribute the image until rights are clear.

Sources:
- Forum thread: https://irishconstabulary.com/viewtopic.php?f=36&t=1419
- Contemporary image: https://attachment.tapatalk-cdn.com/16889/202008/3579887_cd4214f1526fd2dccde588f0a3c0245e_t.jpg
- NIAH record: https://www.buildingsofireland.ie/buildings-search/building/50910280/old-detective-office-1-exchange-court-dublin-2-dublin

## 4. 53 Gardiner Street Upper — exact inscription independently described

**Targets:** `DUB-BLD-0079` and child detail `DUB-INS-0006`, NIAH 50010751.

The official NIAH record explicitly describes a Portland limestone date plaque on the south side elevation reading “Sherrard Street 1825”. This provides an unusually precise visual checklist for the separate inscription record. Searches did not locate a visually inspected, independently licensed photograph of that exact plaque.

**Decision:** no image added. This is a high-value field-photography target: one square-on close-up of the plaque plus one wider photograph showing its position on the side elevation.

NIAH record: https://www.buildingsofireland.ie/buildings-search/building/50010751/53-gardiner-street-upper-sherrard-street-dublin-1-dublin

## 5. Gardiner Street Upper Victorian post box

**Target:** `DUB-STR-0003`, NIAH 50010760.

The official NIAH record confirms a c.1880 cylindrical Handyside pillar box with a Queen Victoria VR insignia and maker's inscription. Search results surfaced street photographs of Gardiner Street but did not establish a photograph of this exact box at its catalogue position. A photograph of the street or a similar VR post box elsewhere is not sufficient.

**Decision:** no image added. Continue seeking a geotagged Geograph or rights-cleared photographer image matching the exact location and maker's details.

NIAH record: https://www.buildingsofireland.ie/buildings-search/building/50010760/gardiner-street-upper-dublin-1-dublin

## 6. Burgh Quay Edward VII post box

**Target:** `DUB-STR-0014`, NIAH 50020294.

The NIAH record confirms the box at the Burgh Quay/Hawkins Street junction and specifies the ER VII cipher, POST OFFICE lettering and Handyside maker's mark. Patrick Comerford's post-box survey explicitly lists a photograph of an Edward VII box at Burgh Quay, Dublin, taken in 2017. However, the page does not, in the surfaced material, prove that its photo depicts the exact Hawkins Street junction box or provide a clearly stated reuse licence. It remains a lead, not a verified asset.

**Decision:** do not import without inspecting the original image, confirming exact location, and obtaining reuse permission.

Sources:
- NIAH: https://www.buildingsofireland.ie/buildings-search/building/50020294/dublin-city
- Patrick Comerford photo survey: https://www.patrickcomerford.com/2017/08/a-long-search-for-fast-disappearing-pre.html

## 7. Candidate rejection discipline

The following were not treated as substitutes:
- The Edward VII post box on Merrion Square South is a different object and location from Burgh Quay.
- The O’Connell Street Flickr photograph is not cleared for commercial publication by its CC BY-NC-SA licence.
- Generic Gardiner Street photographs do not prove the exact post-box object is present.
- The Exchange Court image is not reusable until rightsholder permission is established.

## 8. Batch 031 outcome and validation

No image references or source records were added in this batch. The repository data files remain unchanged.

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
| Audit matrix data rows | 195 |
| New image references in Batch 031 | 0 |

Validation:
- Catalogue JSON parses: PASS.
- Visual-assets JSON parses: PASS.
- Sources JSON parses: PASS.
- Catalogue and visual record counts align: PASS.
- Every visual record maps to a catalogue object: PASS.
- Every existing image reference resolves to a registered source: PASS.
- Audit matrix row count equals catalogue object count: PASS.

**Batch 031 conclusion:** an exact photograph for the Upper O’Connell Street twin post box has been identified, but its NonCommercial licence makes it unsuitable for assumed unrestricted archive and book reuse. The Exchange Court façade image is also a strong candidate but needs rightsholder clearance. No uncertain or rights-restricted image was silently added.

**LEAVE NO LOCATION BEHIND.**
