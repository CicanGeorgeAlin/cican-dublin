# VISUAL DISCOVERY BATCH 028 — Marlborough Street Post Box Lead and Building Identity Checks

**Date:** 27 October 2026  
**Repository:** https://github.com/CicanGeorgeAlin/cican-dublin  
**Mission:** LEAVE NO LOCATION BEHIND.

## 1. Live repository state

| File | Current blob SHA |
|---|---|
| `data/objects.json` | `99a4512c0054ebc9170f99efdbe7a2556f99512b` |
| `data/visual-assets.json` | `5ff5f351061ab8c1570818334d2435768c76c8e1` |
| `data/sources.json` | `9fb11d5d0e87ddbeec2dfc9adbf3c4aca975bbd0` |
| `documentation/VISUAL-AUDIT-MATRIX-2026-10-27.csv` | `e4bf004cf8e50c33c974235088e2549c56f04ce2` |

All three JSON files parsed. Catalogue objects: 195. Visual records: 195. Sources: 247. Audit matrix data rows: 0.

## 2. Strong lead found — Marlborough Street Edward VII post box

**Catalogue object:** DUB-STR-0004  
**NIAH:** 50010238  
**Exact candidate source page:** https://www.flickr.com/photos/bridgemarkertim/19339193720/

The Flickr title is “Dublin Marlborough Street EVIIR PB”. The photographer is Tim Jenkinson (Bridgemarker Tim); the caption says “A nice EVIIR pillar box in Marlborough Street Dublin”. The image was taken 3 July 2015 and uploaded 8 July 2015. The individual Flickr page explicitly states **All rights reserved**.

The title and caption make this a promising candidate for the Marlborough Street post box. However, the media file returned HTTP 403 in the inspection environment, so the actual pixels could not be visually inspected. The caption also does not identify the exact position along Marlborough Street, and the licence does not permit reuse without permission.

**Decision:** do not attach the image or count it as verified. Keep it as a lead for possible permission request and location confirmation. Exact NIAH description: c.1905 cast-iron box on the west side of Marlborough Street, north of the Pro-Cathedral, with RE VII POST OFFICE insignia and McDowall Steven & Co London & Glasgow maker's lettering.

## 3. Lower Abbey Street Edwardian post box — no exact image accepted

**Catalogue object:** DUB-STR-0007  
**NIAH:** 50010291

The NIAH record confirms a c.1905 Handyside cast-iron pillar box on the north side of Abbey Street Lower, with ER VII royal insignia and raised POST OFFICE lettering. Searches returned photographs of other Handyside Edward VII boxes in Dublin, including Burgh Quay and Clyde Road, but those are different locations and were rejected. A photograph of a similar Handyside box cannot establish that it is the Lower Abbey Street object.

## 4. National Model Schools — important building distinction

**Catalogue object:** DUB-BLD-0010  
**NIAH:** 50010222

NIAH describes the target as the detached seven-bay, three-storey college built c.1838, with a west-facing granite ashlar front, entrance portico and central Wyatt windows.

The Dublin North City NIAH survey describes the former Department of Education / National Model Schools complex as a composition containing several distinct buildings. It distinguishes:
- the Department of Education building / matching Tyrone House replica (fig. 61);
- the separate Clocktower Building / former Infant Model School (fig. 62);
- the Central Model Schools building (fig. 60).

A returned image of the Clocktower Building belongs to NIAH 50010224, not the target registration 50010222. It was rejected. The historical photograph of Tyrone House on Flickr depicts the original house (NIAH 50020221), not automatically the matching building to its north (50010222). That image was also rejected for this record.

A Flickr image captioned “Department of Education and Skills, Marlborough Street, Dublin 1” is a possible broad campus lead, but its exact framing could not be opened for visual confirmation in this environment. No photo was accepted for DUB-BLD-0010.

## 5. 23, 77 and 82 Marlborough Street — no exact photograph accepted

- **DUB-BLD-0006 / NIAH 50010218 — 23 Marlborough Street:** search results confirmed the c.1780 two-bay, four-storey house and its Flemish-bond brick upper façade. No source positively identified a photograph of number 23.
- **DUB-BLD-0007 / NIAH 50010235 — 77 Marlborough Street:** NIAH identifies the distinctive half-octagonal chimney-like feature on a limestone pedestal and console. No photograph of the exact building was visually confirmed.
- **DUB-BLD-0008 / NIAH 50010230 — 82 Marlborough Street:** NIAH identifies the raised basement, Georgian doorway, fanlight, granite platform and railings. No exact photograph was visually confirmed.

Nearby properties, other street numbers and general street photographs were not substituted.

## 6. Jim Larkin pedestal plaques — photo lead remains rights-blocked

**Catalogue object:** DUB-INS-0002  
**NIAH:** 50010519

The HMDB page “Jim Larkin” identifies William Fischer Jr. as the photographer of several images taken 6 February 2024 and 3 April 2025. It provides inscription text and labels the first image “Jim Larkin Monument Detail”. NIAH independently confirms that the south, east and west faces contain separate inset bronze plaques: Jim Larkin's words on the south, Patrick Kavanagh on the west and Seán O'Casey on the east.

The HMDB page does not establish an open reuse licence for the photographs. The images were not imported. The requirement to document all three plaque faces with clear photographs remains open.

## 7. Research decisions

No new image was added in Batch 028. This is deliberate: the best post-box lead is All Rights Reserved and could not be visually inspected; the other returned images either depict a different object or lack sufficient identity evidence. No unsupported photo was promoted into the archive.

## 8. Inventory after Batch 028

| Measure | Count |
|---|---:|
| Catalogue objects | 195 |
| Visual records | 195 |
| Registered sources | 247 |
| Total image references | 74 |
| OBJECT_PHOTOGRAPH references (includes unverified historical candidate) | 45 |
| Records with OBJECT_PHOTOGRAPH references | 41 |
| Independently verified exact-object records | 1 |
| Context-only records | 26 |
| No-image records | 128 |
| Audit matrix data rows | 0 |

## 9. Next research queue

1. Request permission from Tim Jenkinson to reuse the Marlborough Street Edward VII post-box photograph and confirm that it depicts the west-side box north of the Pro-Cathedral.
2. Find a reusable exact photograph of the Lower Abbey Street Handyside post box.
3. Seek exact façade photographs of 23, 77 and 82 Marlborough Street.
4. Find a visually inspectable image of the correct seven-bay building registered as NIAH 50010222, not the Clocktower Building 50010224 or Tyrone House 50020221.
5. Continue the three-face Jim Larkin plaque investigation, including rights clearance.

## 10. Structural validation

- Objects JSON parses: PASS.
- Visual-assets JSON parses: PASS.
- Sources JSON parses: PASS.
- Unique catalogue IDs: PASS.
- Unique visual record IDs: PASS.
- Every visual record maps to a catalogue object: PASS.
- Every image reference has a registered source: PASS.
- Matrix rows match catalogue count: FAIL.

**Batch 028 conclusion:** one valuable permission-request lead was located for the Marlborough Street Edward VII box. Several look-alike or adjacent-building image results were rejected to protect catalogue accuracy. No new exact-object photograph qualified for addition this batch.

**LEAVE NO LOCATION BEHIND.**
