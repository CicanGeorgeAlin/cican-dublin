# VISUAL DISCOVERY BATCH 032 — Burgh Quay and Dublin Street Details

Date: 27 October 2026  
Repository: https://github.com/CicanGeorgeAlin/cican-dublin

## Baseline

Fetched live files before research:
- objects: 195
- visual records: 195
- sources: 247
- audit matrix rows: 195
- image references: 74

## Burgh Quay Edward VII post box — DUB-STR-0014 / NIAH 50020294

Patrick Comerford's article dated 18 August 2017 includes an image captioned “Burgh Quay, Dublin (Photograph: Patrick Comerford, 2017)” in its Edward VII post-box section. NIAH independently identifies the target at the Burgh Quay/Hawkins Street junction and describes the c.1905 Handyside box with ER VII cipher.

The photograph was not fetched for visual inspection in this pass. The blog footer supplies an educational/fair-use notice and links to CC BY-NC-ND 3.0, which does not establish unrestricted permission for this project's archive and potential print use.

Decision: permission lead only. Do not add. Request written permission, original-resolution image and confirmation of exact junction.

Sources:
- https://www.patrickcomerford.com/2017/08/a-long-search-for-fast-disappearing-pre.html
- https://www.buildingsofireland.ie/buildings-search/building/50020294/dublin-city

## Geograph photographs opened and rejected

1. Geograph 6053717, “Burgh Quay”, N Chadwick, 3 August 2018. The page is geotagged close to the target, but the opened image shows the R138 traffic corridor and does not show the post box. Rejected as object photo. https://www.geograph.ie/photo/6053717
2. Geograph 4914883, “Postboxes, Dublin”, Rossographer, 13 April 2016. The caption and image show three boxes on Arran Quay, including a red-painted Edward VII box. Different location; rejected. https://www.geograph.ie/photo/4914883
3. Geograph 5253628, “Postbox, Dublin”, Rossographer, 27 December 2016. Caption and image show the Edward VII box on Dame Street. Different object/location; rejected for Burgh Quay. https://www.geograph.ie/photo/5253628

The Geograph pages identify their images as licensed for reuse under a Creative Commons licence. That does not cure a location mismatch.

## Harrington Hall, 69 Harcourt Street — DUB-BLD-0012

NIAH 50920250 describes the exact No. 69 building and its boot scrapers, granite steps, railings, pavement coal-hole cover and lamp standards. Image search returned an image of No. 70 Harcourt Street (NIAH 50920249), a neighbouring building. It is not a substitute for No. 69. No qualifying exact photo found.

NIAH: https://www.buildingsofireland.ie/buildings-search/building/50920250/harrington-hall-69-harcourt-street-dublin-2-dublin

## 23 Hatch Street Lower — DUB-BLD-0011

NIAH 50110521 and the Dublin Stage 4 recommendations describe a cast-iron coal-hole cover set in granite paving and identify the South City Foundry. Property-sale photographs are general building images and do not establish the coal-hole detail. No qualifying image found.

Sources:
- https://www.buildingsofireland.ie/buildings-search/building/50110521/23-hatch-street-lower-dublin-2-dublin
- https://www.buildingsofireland.ie/app/uploads/2021/11/Dublin-City-Ministerial-Recommendations-November-2021.pdf
- https://www.irishtimes.com/business/commercial-property/hatch-street-building-at-heart-of-business-district-for-2-6m-1.3907153

## College Street lamp standard — DUB-STR-0027

NIAH 50020523 describes the c.1935 double-headed concrete standard at the east end, north side of College Street. Similar standards photographed at McCartney Bridge/Baggot Street Lower and Waverly Terrace are different objects and were rejected as substitutes.

NIAH: https://www.buildingsofireland.ie/buildings-search/building/50020523/college-street-dublin-2-co-dublin

## Outcome

No new image references or source records were added.

| Measure | Count |
|---|---:|
| Catalogue objects | 195 |
| Visual records | 195 |
| Registered sources | 247 |
| Image references | 74 |
| OBJECT_PHOTOGRAPH references | 45 |
| Records with object-photo refs | 41 |
| Independently verified exact-object records | 8 |
| Context-only records | 26 |
| Records with no image references | 128 |
| Audit matrix rows | 195 |
| New references this batch | 0 |

Validation required after commit: JSON parse, matching catalogue/visual counts, audit row count, no orphan visual records and no broken source references.

**Conclusion:** a useful Burgh Quay rights lead was identified, while three visually inspected Geograph images were rejected for location mismatch. No uncertain asset was added.

**LEAVE NO LOCATION BEHIND.**


---

## Post-commit recheck and correction — 27 October 2026

The follow-up re-fetch found that the live data files had changed after the original Batch 032 commit. The source registry now contains 248 records and the visual-assets file contains 75 reference-image entries. The additional source/reference is:

- Source ID: `GEO-DUB-POSTBOX-7640607`
- Target: `DUB-STR-0016`, Nassau Street P&T double-opening post box, NIAH 50100001
- Photographer: Rossographer
- Date taken: 30 October 2023
- Geograph photo: https://www.geograph.ie/photo/7640607
- Direct image: https://s0.geograph.org.uk/geophotos/07/64/06/7640607_4bd75654.jpg
- Licence: CC BY-SA 2.0, permitting commercial reuse subject to attribution and ShareAlike.

The original Geograph page was opened and its caption confirms a double-aperture Aire Puist agus Telegrafa pillar box on Nassau Street. The source page gives subject coordinates 53.34312, -6.25923, approximately 8 metres from the NIAH-derived project pin. The original JPEG was opened and visually inspected: it shows the green oval-plan P&T pillar box, twin letter apertures and Áth Cliath/Dublin lettering. This matches NIAH 50100001 and the catalogue's DUB-STR-0016 description. The source and image are therefore accepted as an independently verified exact-object reference, subject to preserving the photographer credit, licence link and ShareAlike terms.

The target already had a separate Commons reference; this Geograph item is a second object-photo reference for the same catalogue object. It increases image-reference totals but does not increase the number of records with at least one object-photo reference.

### Corrected live totals after re-fetch

| Measure | Corrected live count |
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
| Broken source references | 0 |
| Orphan visual records | 0 |

The audit matrix row for DUB-STR-0016 now records two object-photo references and status “Independently verified exact-object photograph”.

### Revalidation

The live catalogue, visual-assets and source JSON files parse successfully. The visual record count matches the catalogue count. Every visual record maps to a catalogue object. All image source IDs resolve to the source registry. The audit matrix has 195 data rows. No broken source references or orphan visual records were found.

**Correction note:** the original Batch 032 research pass added no references. The Nassau Street Geograph reference was present in the live repository by the time of this repeat check, after the original Batch 032 report had been committed. This addendum reconciles the report with the current live repository and avoids attributing that later data change to the original batch operation.
