# VISUAL DISCOVERY BATCH 029 — Marlborough Street Building Identity and Larkin Plaque Audit

**Date:** 27 October 2026  
**Repository:** https://github.com/CicanGeorgeAlin/cican-dublin  
**Mission:** LEAVE NO LOCATION BEHIND.

## 1. Live repository revalidation

Fetched the live catalogue, visual-assets file, sources file and audit matrix before research.

| File | Current blob SHA |
|---|---|
| `data/objects.json` | `99a4512c0054ebc9170f99efdbe7a2556f99512b` |
| `data/visual-assets.json` | `5ff5f351061ab8c1570818334d2435768c76c8e1` |
| `data/sources.json` | `9fb11d5d0e87ddbeec2dfc9adbf3c4aca975bbd0` |
| `documentation/VISUAL-AUDIT-MATRIX-2026-10-27.csv` | `e4bf004cf8e50c33c974235088e2549c56f04ce2` |

The four files were read successfully. All three JSON documents parse. Catalogue and visual records align at 195 each; the source registry contains 247 records. The audit CSV has 195 data rows (plus its header).

## 2. Important correction to Batch 028

The Batch 028 report incorrectly stated that the audit matrix had zero rows and that only one exact-object photograph was verified. Re-parsing the live CSV shows:

- **195** audit rows, matching the 195 catalogue objects.
- **8** rows marked verified for image URL, source page, correct visual identity, photographer, licence and attribution.
- The CSV's 195 rows are real data records; the earlier zero-row figure was a reporting error.

The verified objects remain:
1. `DUB-MON-0006` — Edmund Burke Statue.
2. `DUB-ART-0001` — Cactus Provisoire.
3. `DUB-ART-0002` — Reclining Figures / Reclining Connected Forms.
4. `DUB-BLD-0003` — City Hall (former Royal Exchange).
5. `DUB-MON-0007` — Jim Larkin Monument (statue).
6. `DUB-INF-0001` — Loop Line railway viaduct over Talbot Street.
7. `DUB-BLD-0009` — Talbot House, 9 Talbot Street.
8. `DUB-STR-0006` — Custom House Docks boundary wall on Commons Street.

The visual-assets file contains 74 reference-image entries: 45 marked OBJECT_PHOTOGRAPH and 29 marked STREET_CONTEXT. There are 41 catalogue records with at least one OBJECT_PHOTOGRAPH reference; only eight meet the independent verification criteria. Twenty-six records have context-only images and 128 have no image reference. The 195 records' `photo_status` field still reads `AWAITING_FOUNDER_PHOTOGRAPH`; third-party references do not replace founder-original photography.

## 3. National Model Schools — exact building still unresolved

**Target:** `DUB-BLD-0010`, NIAH 50010222.

The official NIAH record identifies a detached seven-bay, three-storey college built c.1838, with a granite west façade and entrance portico. It specifically says the building was designed by Jacob Owen to replicate Tyrone House, and that it is the matching building to the north of the original.

New Commons category research exposed a critical classification trap:
- The Commons category named “The Model School, Marlborough Street” is explicitly linked to **NIAH 50010224**, not 50010222.
- Its “Tyrone House and The hand” photograph was opened and visually inspected. The central pale building with the green-domed clocktower is the Infant Model School / Clocktower Building, so it is not the 50010222 target.
- The Geograph photograph “The gatehouse to the Department of Education and Science, Marlborough Street” (Eric Jones, 21 January 2011, CC BY-SA 2.0) depicts the gatehouse, not the seven-bay college. It is not a substitute.
- The 2011 Commons photograph of Tyrone House depicts the original building, not the matching northern replica.

**Decision:** no image accepted for 50010222. This preserves the distinction between the original Tyrone House (NIAH 50010221), its replica (50010222), and the Infant Model School / Clocktower Building (50010224).

Useful identity sources:
- NIAH 50010222: https://www.buildingsofireland.ie/buildings-search/building/50010222/department-of-education-marlborough-street-dublin-1-dublin
- Commons category identifying 50010224: https://commons.wikimedia.org/wiki/Category:The_Model_School,_Marlborough_Street
- Commons photograph inspected and rejected: https://commons.wikimedia.org/wiki/File:Tyrone_House_and_The_hand,_Dublin_(agost_2011)_-_panoramio.jpg
- Geograph gatehouse photograph: https://www.geograph.org.uk/photo/2262653

## 4. 23 Marlborough Street — official image gallery discovered, but not reusable/inspectable here

**Target:** `DUB-BLD-0006`, NIAH 50010218.

The official NIAH page for 23 Marlborough Street exposes six gallery links, including repeated views at 50010218_13.jpg, 50010218_7.jpg and 50010218_1.jpg. The record describes the exact late-eighteenth-century two-bay, four-storey house and its Flemish-bond brick upper façade.

The gallery media requests returned HTTP 403 in the research environment, so the pixels could not be visually inspected. No explicit reuse licence for these photographs was established. The images are therefore useful official leads but are not added to the archive.

NIAH record: https://www.buildingsofireland.ie/buildings-search/building/50010218/ladbrokes-marlborough-street-dublin-1-dublin

## 5. Lower Abbey Street post box

**Target:** `DUB-STR-0007`, NIAH 50010291.

The official NIAH record confirms a c.1905 Handyside cast-iron pillar box on the north side of Abbey Street Lower, with ER VII insignia and raised POST OFFICE lettering. Search results did not establish a photograph of this exact box. Similar Handyside boxes elsewhere in Dublin were excluded.

NIAH record: https://www.buildingsofireland.ie/buildings-search/building/50010291/lower-abbey-street-dublin-1-co-dublin

## 6. Jim Larkin pedestal plaques — no close-up qualifies yet

**Target:** `DUB-INS-0002`, NIAH 50010519.

The NIAH record confirms inset bronze plaques on the south, east and west faces of the pedestal. Commons research found additional licensed images of the Jim Larkin monument, including:
- Diego Lopez Sebastian / Dieglop, 16 March 2015, CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:County_Dublin_-_Jim_Larkin_monument_-_20150316152416.jpg
- Frabjousone, 7 April 2015, CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:County_Dublin_-_Jim_Larkin_monument_-_20150407183327.jpg
- Thoslee, 13 September 2025, CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:Jim_Larkin_Monument.jpeg

The 2015 and 2025 images were opened. They depict the statue and pedestal as a whole, but do not provide a readable close-up of the three inset plaques. They cannot satisfy the specific plaque-detail record. HMDB's detail image remains a possible lead, but its reuse rights are not established.

**Decision:** no image accepted for the plaque record. Continue seeking a rights-cleared close-up of each face.

NIAH record: https://www.buildingsofireland.ie/buildings-search/building/50010519/jim-larkin-monument-oconnell-street-lower-dublin-1-dublin  
HMDB lead: https://www.hmdb.org/m.asp?m=241088

## 7. Other Marlborough Street objects

No new exact-object image was accepted for:
- `DUB-BLD-0007` — 77 Marlborough Street, NIAH 50010235.
- `DUB-BLD-0008` — 82 Marlborough Street, NIAH 50010230.

Search results did not establish a visually inspected, rights-cleared photograph of either exact address. Neighbouring buildings and general street photographs were not substituted.

## 8. Batch 029 decisions

No new image reference was added. This is intentional: every newly inspected candidate either depicted a different building/object, could not be visually inspected, or lacked confirmed reuse permission. The strongest next actions remain permission/location confirmation for Tim Jenkinson's Marlborough Street post-box photograph, a direct image of the Lower Abbey Street Handyside box, the exact 50010222 replica, and close-ups of the Larkin pedestal plaques.

## 9. Structural validation and live inventory

- Catalogue JSON parses: PASS.
- Visual-assets JSON parses: PASS.
- Sources JSON parses: PASS.
- Catalogue objects: 195.
- Visual records: 195.
- Registered sources: 247.
- Audit matrix data rows: 195.
- Unique object IDs and visual record IDs: PASS.
- Every visual record maps to a catalogue object: PASS.
- Every image reference resolves to a registered source: PASS.
- Matrix row count equals catalogue count: PASS.
- New image references added in Batch 029: 0.

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

**Batch 029 conclusion:** the key gain is a more reliable audit baseline and a firm rejection of several visually similar but incorrectly identified buildings. No new photograph met the archive's exact-object, visual-inspection and rights requirements.

**LEAVE NO LOCATION BEHIND.**
