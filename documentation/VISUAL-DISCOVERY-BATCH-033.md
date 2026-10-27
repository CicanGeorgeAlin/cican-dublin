# VISUAL DISCOVERY BATCH 033 — Nassau Street P&T Post Box Photograph Verified

Date: 27 October 2026  
Repository: https://github.com/CicanGeorgeAlin/cican-dublin  
Mission: LEAVE NO LOCATION BEHIND.

## 1. Baseline before changes

Fetched the live catalogue, visual-assets, sources and audit matrix before research.

- Catalogue objects: 195
- Visual records: 195
- Registered sources: 247
- Audit matrix rows: 195
- Existing image references: 74

## 2. Exact photograph found and verified — DUB-STR-0016

Target: **P&T double-opening post box with Áth Cliath lettering, Nassau Street**  
NIAH registration: **50100001**

Geograph Ireland photo 7640607, titled **“Postbox, Dublin”**, by **Rossographer**, taken **30 October 2023**, was opened at its original media URL and visually inspected.

The photograph clearly shows:
- The green oval-plan cast-iron pillar box.
- Two separate letter apertures.
- The P&T / post-Independence form.
- The enamel Áth Cliath (Dublin) lettering above the apertures.

The Geograph caption explicitly identifies the subject as the double-aperture Aire Puist agus Telegrafa pillar box on Nassau Street. Its subject geotag is **53.34312, -6.25923** (Geograph states 10 m precision). The catalogue navigation point is **53.3431206, -6.2591089**, approximately 8 metres away. The official NIAH record 50100001 independently describes the Nassau Street c.1930 oval-plan cast-iron box with double letter opening, P&T motif and Áth Cliath lettering.

The page identifies photographer Rossographer and links **Creative Commons Attribution-ShareAlike 2.0 Generic (CC BY-SA 2.0)**. The official Creative Commons deed permits sharing and adaptation, including commercial use, provided attribution, licence link, change indication where applicable, and ShareAlike obligations are followed.

**Decision: accepted as an independently verified exact-object photograph.** Added as an additional image reference; existing Wikimedia Commons reference retained. The visual record's `photo_status` remains `AWAITING_FOUNDER_PHOTOGRAPH` because a third-party reference image is not a founder-captured original.

Image:
https://s0.geograph.org.uk/geophotos/07/64/06/7640607_4bd75654.jpg

Original source page:
https://www.geograph.ie/photo/7640607

Licence:
https://creativecommons.org/licenses/by-sa/2.0/

Official heritage record:
https://www.buildingsofireland.ie/buildings-search/building/50100001/nassau-street-dublin-2-co-dublin

Attribution recorded:
Rossographer, “Postbox, Dublin”, Geograph Ireland photo 7640607, taken 2023-10-30 (CC BY-SA 2.0).

## 3. Additional search results and exclusions

### Marlborough Street Edwardian post box — DUB-STR-0004 / NIAH 50010238

The official NIAH result confirms the c.1905 McDowall Steven & Co. Edward VII post box on the west side of Marlborough Street, north of the Pro-Cathedral. Geograph photo 2255107, “The junction of Marlborough Street and Talbot Street”, was opened and its original image visually inspected. It shows the crossroads, shopfronts and pedestrians, but does not show the target post box. It is not an object photograph and was not added.

Sources:
- https://www.buildingsofireland.ie/buildings-search/building/50010238/marlborough-street-dublin-1-co-dublin
- https://www.geograph.ie/photo/2255107

### National Model Schools — DUB-BLD-0010 / NIAH 50010222

The official NIAH record confirms the main c.1838 seven-bay, three-storey school building and its architectural detailing. The earlier Commons identity trap remains important: the similarly named Clocktower Building is NIAH 50010224, a different building. No exact, rights-cleared image of the target main school building was verified in this batch.

Source:
https://www.buildingsofireland.ie/buildings-search/building/50010222/department-of-education-marlborough-street-dublin-1-dublin

### Old Detective Office, 1 Exchange Court — DUB-BLD-0004 / NIAH 50910280

The official NIAH record confirms the c.1830 building and commemorative granite plaque above the entrance. The previously identified forum image remains a permission lead only; no new rights-cleared image was found.

Source:
https://www.buildingsofireland.ie/buildings-search/building/50910280/old-detective-office-1-exchange-court-dublin-2-dublin

### 2 Buckingham Street Lower — NIAH 50011162

The official NIAH record specifically describes a pair of Henshaw coal-hole covers set in granite slabs and a cast-iron bootscraper. Searches did not produce a verified photograph of these exact features. No image added.

Source:
https://www.buildingsofireland.ie/buildings-search/building/50011162/2-buckingham-street-lower-dublin-dublin

### 17–18 Nassau Street — NIAH 50100085

The official NIAH record confirms a cast-iron basement light and coal-hole cover in granite paving. No exact close-up photograph of those features was verified. No image added.

Source:
https://www.buildingsofireland.ie/buildings-search/building/50100085/17-18-nassau-street-dublin-2-co-dublin

### Dame Street post-box lead — rejected as wrong target

Geograph photos 5253628 and 8163184 describe Edward VII pillar boxes on Dame Street / at the end of Palace Street. Their locations do not match the catalogue's separate Dame Street target point at 53.3443398, -6.262603; they were not added to that record.

Sources:
- https://www.geograph.ie/photo/5253628
- https://www.geograph.ie/photo/8163184

## 4. Repository changes

Updated:
- `data/sources.json`: registered source `GEO-DUB-POSTBOX-7640607`.
- `data/visual-assets.json`: added the Geograph photograph as a second `OBJECT_PHOTOGRAPH` reference for `DUB-STR-0016`.
- `documentation/VISUAL-AUDIT-MATRIX-2026-10-27.csv`: updated the target row to record tested original media, tested source page, visual identity match, photographer, licence and attribution.

Not changed:
- `data/objects.json`.
- Founder-photo status and line-art status. Third-party imagery does not fulfil the founder-original requirement.

## 5. Updated archive metrics

| Measure | Count |
|---|---:|
| Catalogue objects | 195 |
| Visual records | 195 |
| Registered sources | 248 |
| Reference-image entries | 75 |
| OBJECT_PHOTOGRAPH references | 46 |
| STREET_CONTEXT references | 29 |
| Records with at least one object-photo reference | 41 |
| Independently verified exact-object records | 9 |
| Context-only records | 26 |
| Records with no image references | 128 |
| Audit matrix data rows | 195 |
| New image references in Batch 033 | 1 |

## 6. Validation

After the three updates:
- All JSON files parsed successfully.
- Catalogue and visual record counts match: 195 / 195.
- Sources: 248.
- Audit matrix: 195 rows.
- Total image references: 75.
- All 75 image source IDs resolve to registered sources.
- Orphan visual records: 0.
- Target `DUB-STR-0016` now has two object-photo references.
- Audit matrix target row records the second image and its verification checks.

A separate post-report fetch is required to confirm the committed report and final repository state.

**Batch 033 conclusion:** one exact Nassau Street post-box photograph has passed source-page, original-image, location, identity, photographer and licence checks and has been added. Similar-looking or geographically different objects were not substituted.

**LEAVE NO LOCATION BEHIND.**
