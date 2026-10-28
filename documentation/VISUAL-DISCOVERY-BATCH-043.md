# VISUAL DISCOVERY BATCH 043 — Marlborough Street, Gardiner Street and Exchange Court

**Date:** 28 October 2026  
**Repository:** https://github.com/CicanGeorgeAlin/cican-dublin  
**Mission:** LEAVE NO LOCATION BEHIND.

## 1. Live baseline fetched before research

Fetched the latest default-branch commit and current catalogue, visual-assets register, source register, audit matrix and Batch 042 report. The latest commit before this batch was `2208da854aa725ef34f0a04c5a457fa94860d5af`. No Batch 043 report existed.

| Measure | Live baseline |
|---|---:|
| Catalogue locations | 195 |
| Visual records | 195 |
| Registered sources | 251 |
| Image-reference entries | 78 |
| OBJECT_PHOTOGRAPH references | 49 |
| STREET_CONTEXT references | 29 |
| Records with at least one image reference | 67 |
| Records without image references | 128 |
| Audit matrix rows | 195 |

All three JSON files parsed. Catalogue and visual-record counts matched. There were no orphan visual records, duplicate visual IDs or broken source references.

## 2. Existing catalogue targets

This batch reviewed three unillustrated records already in the fixed 195-object catalogue:

- **DUB-BLD-0004** — Old Detective Office, 1 Exchange Court, Dublin 2 (NIAH 50910280).
- **DUB-STR-0003** — Victorian cast-iron pillar post box, Gardiner Street Upper (NIAH 50010760).
- **DUB-STR-0004** — Marlborough Street Edwardian post box, west side of the street north of the Pro-Cathedral (NIAH 50010238).

Official NIAH records:
- Old Detective Office: https://www.buildingsofireland.ie/buildings-search/building/50910280/old-detective-office-1-exchange-court-dublin-2-dublin
- Gardiner Street Upper post box: https://www.buildingsofireland.ie/buildings-search/building/50010760/gardiner-street-upper-dublin-1-dublin
- Marlborough Street post box: https://www.buildingsofireland.ie/buildings-search/building/50010238/marlborough-street-dublin-1-dublin

NIAH describes the Old Detective Office as an attached c.1830 four-storey building with a commemorative granite plaque above its entrance, Flemish-bond brickwork and a classical doorcase. It records the building's former connection with the Constabulary Office and detective operations at Exchange Court.

NIAH identifies the Gardiner Street box as a c.1880 cylindrical Handyside pillar box with Queen Victoria's VR insignia and the maker's inscription A. HANDYSIDE & CO. LTD. DERBY & LONDON.

NIAH identifies the Marlborough Street box as a c.1905 Edward VII cast-iron pillar box with an RE VII POST OFFICE insignia and McDowall Steven & Co London & Glasgow maker's mark. Its stated position is on the west side of Marlborough Street, north of the Pro-Cathedral, set within original granite kerbing.

## 3. Marlborough Street — exact-title Flickr photograph lead

A Flickr search result led to the individual image page:

**Dublin Marlborough Street EVIIR PB**
- Page: https://www.flickr.com/photos/bridgemarkertim/19339193720/
- Photographer/uploader: Tim Jenkinson (Bridgemarker Tim)
- Taken: 3 July 2015
- Uploaded: 8 July 2015
- Caption: “A nice EVIIR pillar box in Marlborough Street Dublin”
- Rights status displayed by Flickr: **All rights reserved**

This is a strong target-specific research lead because the title and caption identify an Edward VII pillar box on Marlborough Street, consistent with the existing DUB-STR-0004 / NIAH 50010238 record. However, the actual image URL returned HTTP 403 during this pass, so the photograph's pixels could not be inspected. The accessible page does not independently establish the exact pavement position or prove that it is the NIAH-recorded box north of the Pro-Cathedral.

**Decision:** not added. The author is identified, but Flickr displays All rights reserved and no reuse permission was established. Exact visual identity and precise position also remain unverified. The next step is to request permission and a confirmation of the depicted location from the photographer.

## 4. Marlborough Street — Wikimedia Commons contextual image inspected and rejected

The Commons category for Marlborough Street contains:

**20130807 dublin117.JPG**
- File page: https://commons.wikimedia.org/wiki/File:20130807_dublin117.JPG
- Author: Jean Housen
- Date: 7 August 2013
- Dimensions: 3,872 × 2,592
- Licence: CC BY-SA 3.0
- Category: Marlborough Street, Dublin

The image preview was visually inspected. It depicts the Seán O'Casey's pub corner and surrounding street works, not the Edward VII post box north of the Pro-Cathedral. The file is openly licensed under CC BY-SA 3.0, but its subject is not the catalogue target.

**Decision:** rejected for DUB-STR-0004 because the image depicts a different section of Marlborough Street and does not show the target post box. It is not added as a misleading context photograph.

## 5. Gardiner Street Upper — historical streetscape lead checked

The National Folklore Collection record A010.06.00060 documents a black-and-white 35mm photograph by Gerard Brady, dated July 1980, showing pedestrians at the junction of Gardiner Street and Talbot Street:
https://www.duchas.ie/en/cbeg/50864

The archive record identifies the location and photographer, but the available description does not establish that the Gardiner Street Upper Handyside VR pillar box is visible. The image and data are copyrighted by the National Folklore Collection, UCD. The junction description alone is not proof of the target post box's presence.

**Decision:** not added to DUB-STR-0003. It remains a possible historical streetscape lead only; exact-object visibility and reuse permission are unresolved.

The NIAH record confirms the target box's c.1880 date, VR insignia and Handyside maker's mark. Those descriptive details provide a field-identification checklist, not a substitute for a photograph.

## 6. Old Detective Office — building history and visual-source check

The NIAH record for 1 Exchange Court (50910280) was rechecked. It confirms the c.1830 building form, commemorative granite plaque and classical entrance details. The official page was discoverable, but direct page access returned HTTP 403 during this research pass; no NIAH gallery image could be visually inspected or rights-cleared.

Dublin Castle's official historical account confirms that the G Division detective branch was located at Exchange Court, beside City Hall:
https://dublincastle.ie/the-final-handover/

A historical discussion of the 24 December 1892 Exchange Court bombing includes contemporary newspaper illustrations and sketches of the explosion and its location:
https://irishconstabulary.com/detectives-of-the-g-division-dublin-metropolitan-p-t1933-s45.html

These illustrations concern the bombing and detective operations, not a verified photograph of the surviving c.1830 building at 1 Exchange Court. They cannot be used as a present-day object photograph. The historical account is contextual evidence only.

**Decision:** no image added to DUB-BLD-0004. Continue seeking an exact exterior photograph with a traceable photographer and reuse permission; a founder field photograph would be the strongest route for the plaque, doorcase and façade.

## 7. Evidence and rejection register

| Candidate | Inspection result | Decision |
|---|---|---|
| Flickr “Dublin Marlborough Street EVIIR PB” | Named Edward VII post box; Tim Jenkinson; taken 3 July 2015; Flickr says All rights reserved; image endpoint returned 403 | Strong exact-target lead; request permission and confirm precise position; not added |
| Commons “20130807 dublin117.JPG” | Jean Housen, 7 Aug 2013, CC BY-SA 3.0; visually inspected and shows Seán O'Casey's pub corner, not target box | Rejected for DUB-STR-0004 |
| National Folklore Collection A010.06.00060 | Gerard Brady, July 1980; Gardiner/Talbot junction streetscape; no proof target box is visible; copyrighted | Context lead only; not added |
| NIAH 50910280 gallery | Official building record confirms architecture; direct access/gallery image inspection unavailable in this pass | No accepted photograph |
| Dublin Castle G Division history | Official historical context confirms detective branch at Exchange Court | Historical evidence, not an image |
| Contemporary 1892 Exchange Court illustrations | Depict bombing/explosion scene, not a verified view of the surviving target building | Rejected as object photographs |

## 8. Repository changes and validation

No candidate met all requirements for exact-object confirmation and documented reuse rights. This is a report-only batch. No changes were made to:
- `data/objects.json`
- `data/visual-assets.json`
- `data/sources.json`
- `documentation/VISUAL-AUDIT-MATRIX-2026-10-27.csv`

No image references were added. The fixed catalogue remains at 195 objects. The Flickr photograph is retained as a permission/contact lead only; the Commons street image and historical archive lead were not misassigned to the target objects.

## 9. Next research actions

1. Contact Tim Jenkinson to request permission for archive use and confirmation that the 2015 photograph depicts the NIAH 50010238 box north of the Pro-Cathedral.
2. Seek accessible official NIAH image files or direct permission for survey photographs of the Old Detective Office and Gardiner Street Upper post box.
3. Search Dublin City Council, An Post, National Library and local archive holdings for exact-location photographs of the Gardiner Street Upper box and 1 Exchange Court.
4. Continue through the remaining unillustrated catalogue records, keeping exact-object images separate from contextual views and refusing unlicensed substitutions.

## Conclusion

Batch 043 identified a highly relevant 2015 Flickr photograph lead for the Marlborough Street Edward VII post box, but the image is marked All rights reserved and could not be visually inspected. Other discovered images were either the wrong street object, insufficiently specific or rights-restricted. No photograph was added, and the catalogue and audit data were left unchanged.

**LEAVE NO LOCATION BEHIND.**
