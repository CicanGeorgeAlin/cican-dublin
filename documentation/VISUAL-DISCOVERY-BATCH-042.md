# VISUAL DISCOVERY BATCH 042 — Dublin Post Boxes: Exact-Location and Archive Image Checks

**Date:** 28 October 2026  
**Repository:** https://github.com/CicanGeorgeAlin/cican-dublin  
**Mission:** LEAVE NO LOCATION BEHIND.

## 1. Live baseline fetched before research

Fetched the current default-branch catalogue, visual-assets register, source register, audit matrix and latest Batch 041 report. The latest commit before this batch was `fe0b4d15f48a8ea8caac8aff1c325aafb353c8d1`. The path `documentation/VISUAL-DISCOVERY-BATCH-042.md` did not exist.

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

The three JSON files parsed. Catalogue and visual-record counts matched. There were no orphan visual records, duplicate visual IDs or broken source references.

## 2. Current catalogue targets checked

This batch focused on five existing unillustrated post-box records:

- **DUB-STR-0011** — Edward VII cast-iron pillar post box, North Circular Road outside No. 530 (NIAH 50060629).
- **DUB-STR-0013** — Early Free State twin post box, South Great George's Street / Fade Street (NIAH 50910076).
- **DUB-STR-0017** — Handyside cast-iron pillar post box, Townsend Street south of the Screen Cinema (NIAH 50020308).
- **DUB-STR-0018** — Victorian Handyside pillar post box, Mount Street Crescent / Warrington Place (NIAH 50100593).
- **DUB-STR-0024** — Victorian anonymous cast-iron pillar post box, Ely Place / Baggot Street Lower (NIAH 50930014).

Official NIAH records:
- 50060629: https://www.buildingsofireland.ie/buildings-search/building/50060629/north-circular-road-dublin-1-co-dublin
- 50910076: https://www.buildingsofireland.ie/buildings-search/building/50910076/south-great-georges-street-dublin-2-co-dublin
- 50020308: https://www.buildingsofireland.ie/buildings-search/building/50020308/townsend-street-hawkins-street-dublin-2-dublin
- 50100593: https://www.buildingsofireland.ie/buildings-search/building/50100593/mount-street-crescent-warrington-place-dublin-2-dublin
- 50930014: https://www.buildingsofireland.ie/buildings-search/building/50930014/ely-place-dublin-2-dublin

The NIAH descriptions confirm the distinctive physical features and precise siting of each box. In particular, 50060629 is the Edward VII box outside No. 530; 50020308 is the c.1930 Handyside box south of the Screen Cinema; 50100593 is a Victorian VR Handyside box at the east end of Mount Street Crescent; and 50930014 is an anonymous Victorian box without a royal cipher at the Ely Place/Baggot Street Lower junction. These descriptions help prevent visually similar boxes from being misassigned.

## 3. North Circular Road — a rights-cleared photograph of a different post box

Wikimedia Commons category research located:

**“Post box on Richmond Street North, Dublin.jpg”**
- File page: https://commons.wikimedia.org/wiki/File:Post_box_on_Richmond_Street_North,_Dublin.jpg
- Photographer/uploader: Smirkybec
- Image date: 28 December 2021
- Camera coordinates: 53.357378, -6.250631
- Licence: Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
- File dimensions: 3024 × 4032

The file page identifies the depicted object as the Richmond Street North postbox and supplies camera GPS metadata. This is a useful, traceable, openly licensed photograph lead. However, it is not the catalogue's DUB-STR-0011 box outside No. 530. The NIAH has a separate record for the Richmond Street North / North Circular Road junction box (Reg. 50011080):
https://www.buildingsofireland.ie/buildings-search/building/50011080/north-circular-road-richmond-street-north-dublin-dublin

A comparison of the Commons camera coordinates with the catalogue target's official NIAH location and address confirms that the Commons file is not evidence for the No. 530 Edward VII box. Reg. 50011080 is not one of the current 195 catalogue objects. The current catalogue was not expanded in this batch.

**Decision:** preserve this as a possible future catalogue-expansion lead for NIAH 50011080. Do not attach it to DUB-STR-0011 or any other current record. The CC BY-SA 4.0 licence is recorded as shown on the file page; any future use must retain attribution and ShareAlike compliance.

Commons category inspected:
https://commons.wikimedia.org/wiki/Category:North_Circular_Road,_Dublin

## 4. NIAH image galleries — exact records, access failure

The live NIAH page for Reg. 50060629 exposes a gallery of survey-image links. The Townsend Street page for Reg. 50020308 also exposes a gallery. Individual image URLs were followed, but the image host returned HTTP 403 Forbidden in this research pass. Consequently, the pixels could not be inspected, and the photographer, date and reuse licence could not be established from the accessible material.

Examples of blocked survey-image URLs:
- https://www.buildingsofireland.ie/building-images/niah/images/survey_specific/800/50060629_8.jpg
- https://www.buildingsofireland.ie/building-images/niah/images/survey_specific/800/50020308_6.jpg

The presence of a gallery thumbnail/link is not treated as confirmation that the image shows the relevant detail, nor as permission to reuse it.

**Decision:** no NIAH gallery image added. Revisit through a working official image endpoint or request image/reuse information from the NIAH.

## 5. Historical archive leads — Mount Street Crescent and Ely Place

### 5.1 Mount Street Crescent / Warrington Place

The National Library of Ireland catalogue exposes Dublin Corporation Photographic Collection records titled:
- “Back of Warrington Place from Mount Street Crescent” (NPA DCC 66)
- “Corner of Warrington Place and Mount Street Crescent, with St Stephen's Church in the background” (NPA DCC 62)

Collection/search records:
- https://catalogue.nli.ie/Collection/vtls000510647?recordID=vtls000747647
- https://catalogue.nli.ie/Collection/vtls000510647?recordID=vtls000747639

The catalogue dates the collection material approximately 1960–1980 and states that reproduction rights are owned by the National Library of Ireland. The available catalogue descriptions establish historic street-context leads, not that the specific post box is visible in either photograph. The images are not openly reusable on the evidence available.

**Decision:** archive research lead only; no image added to DUB-STR-0018.

### 5.2 Ely Place

The National Library of Ireland catalogue includes a Dublin Corporation Photographic Collection item titled “Ely Place, at the corner of Hume Street”. It is a black-and-white print from approximately 1960–1980; reproduction rights are owned by the National Library of Ireland:
https://catalogue.nli.ie/Collection/vtls000510647?recordID=vtls000747549

The record does not establish that the photograph shows the catalogue's target post box at Ely Place and Baggot Street Lower. The image is also not openly licensed.

**Decision:** contextual archive lead only; no image added to DUB-STR-0024.

## 6. South Great George's Street and Townsend Street

The official NIAH search records confirm:
- The South Great George's Street box (50910076) is a c.1930 twin-slot P&T box at the Fade Street junction.
- The Townsend Street box (50020308) is a c.1930 Handyside pillar box south of the Screen Cinema, and NIAH notes it is not at its original location.

The exact official records are useful for field identification and photographic framing. The Townsend Street gallery image endpoint was inaccessible (HTTP 403), and no independently verified, rights-cleared exact-object photograph was found in this pass. Generic Dublin post-box images and images of other boxes were not accepted as substitutes.

## 7. Evidence and rejection register

| Candidate | Inspection result | Decision |
|---|---|---|
| Commons Richmond Street North postbox | Named object, photographer, 2021 date, camera GPS and CC BY-SA 4.0 recorded | Valid lead for separate NIAH 50011080 only; not a current catalogue object |
| NIAH gallery for 50060629 | Official gallery links visible; image host returned 403 | Not inspected sufficiently; not added |
| NIAH gallery for 50020308 | Official gallery links visible; image host returned 403 | Not inspected sufficiently; not added |
| NLI NPA DCC 66, Mount Street Crescent context | Historic archive record; NLI owns reproduction rights; exact postbox visibility not established | Context lead only; not added |
| NLI NPA DCC 62, Warrington Place corner | Historic archive record; NLI owns reproduction rights; exact postbox visibility not established | Context lead only; not added |
| NLI “Ely Place, at the corner of Hume Street” | Historic archive record; NLI owns reproduction rights; not proven to show target box | Context lead only; not added |
| NIAH descriptive records for 50910076, 50100593, 50930014 | Exact object siting and design descriptions confirmed | Identification evidence; no new photograph |

## 8. Repository changes and validation

No candidate met all current catalogue-scope, exact-object verification and reuse requirements. This is a report-only batch. No changes were made to:
- `data/objects.json`
- `data/visual-assets.json`
- `data/sources.json`
- `documentation/VISUAL-AUDIT-MATRIX-2026-10-27.csv`

No image references were added. The 195-object catalogue remains fixed. The Richmond Street North Commons photograph is retained only as a clearly separated future catalogue-expansion lead, not as a current archive asset.

## 9. Next research actions

1. Seek direct access or permission information for the blocked NIAH survey galleries for 50060629 and 50020308.
2. Continue exact-object searches for the five catalogue post boxes, including An Post/An Post heritage sources and local field photographs.
3. Keep the Richmond Street North image separate until a distinct catalogue expansion is authorised and its object identity is confirmed.
4. Continue working through the remaining records without image references. Founder field photography remains the most reliable route for detailed object photographs where online exactness or reuse rights cannot be established.

## Conclusion

Batch 042 produced one strong, openly licensed post-box photograph lead, but it depicts the Richmond Street North box (NIAH 50011080), which is outside the current 195-object catalogue and must not be misfiled as the No. 530 North Circular Road target. The official NIAH gallery links and National Library archive records provide further leads, but access, exact-object visibility or reuse rights remain unresolved. No images were added, and the catalogue, visual register and audit matrix were preserved.

**LEAVE NO LOCATION BEHIND.**
