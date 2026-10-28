# VISUAL DISCOVERY BATCH 040 — Marlborough Street and College Street Object Checks

**Date:** 28 October 2026  
**Repository:** https://github.com/CicanGeorgeAlin/cican-dublin  
**Mission:** LEAVE NO LOCATION BEHIND.

## 1. Live baseline fetched before research

Fetched the live catalogue, visual-assets register, source register and visual audit matrix. The latest commit before this batch was Batch 039 (5752271748fa9bf21141db33cdceb5eb0d6d439a); no Batch 040 report existed.

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

JSON parsing and baseline integrity checks passed: no orphan visual records, broken source references or duplicate visual IDs.

## 2. Marlborough Street Edwardian post box — DUB-STR-0004 / NIAH 50010238

The official NIAH record identifies the target as a freestanding cast-iron post box installed c.1905, on the west side of Marlborough Street just north of the Pro-Cathedral. It records the Edward VII cipher and the maker's mark McDowall Steven & Co London & Glasgow. NIAH coordinates are Irish Grid 316004, 234830.

Official record:
https://www.buildingsofireland.ie/buildings-search/building/50010238/marlborough-street-dublin-1-dublin

Wikimedia Commons' Marlborough Street category was inspected:
https://commons.wikimedia.org/wiki/Category:Marlborough_Street,_Dublin

The category includes a 2013 photograph titled “20130807 dublin117.JPG”. Its file page identifies the author as Jean Housen, capture date 7 August 2013, and licence CC BY-SA 3.0:
https://commons.wikimedia.org/wiki/File:20130807_dublin117.JPG

The category/file metadata establish a Marlborough Street streetscape photograph, but do not identify the post box or establish that the c.1905 box north of the Pro-Cathedral is visible. The photo is not accepted as an exact-object photograph. No claim is made that it depicts the target post box.

**Decision: no image added.** Retain as a streetscape research lead only; require visual confirmation of the exact post box before considering it for the archive.

## 3. College Street Art Deco double-headed concrete lamp — DUB-STR-0027 / NIAH 50020523

The official NIAH record confirms the exact target: a reinforced-concrete electric lamp standard manufactured c.1935, located at the east end on the north side of College Street. It describes the octagonal stepped base and shaft, double-headed arched brackets, copper-roofed lanterns and frosted glass. NIAH Irish Grid coordinates: 316098, 234221.

Official record:
https://www.buildingsofireland.ie/buildings-search/building/50020523/college-street-dublin-2-co-dublin

A Commons category search surfaced “Lamps outside Doyles, 9 College Street 2009.tiff”. Its file page identifies it as an Art Deco street lamp outside Doyle's pub at 9 College Street, sourced to UCD Digital Library, attributed to UCD School of Architecture Landscape & Civil Engineering, and dedicated under CC0 1.0:
https://commons.wikimedia.org/wiki/File:Lamps_outside_Doyles,_9_College_Street_2009.tiff

This is a valuable rights-cleared photograph of a different College Street lamp. Its stated location is outside Doyle's at No. 9, not the target at the east end/north side of College Street. The archive target is a specific double-headed concrete standard with defined architectural features; the Doyle's lamp is not established as that object. A licence cannot cure an object/location mismatch.

**Decision: rejected as a substitute; no image added.** The CC0 image may be catalogued separately only if a matching archive object for that exact lamp is later established.

## 4. DCC public-lighting dataset — research lead, not a photograph

Dublin City Council's Public Lighting dataset is published through Smart Dublin/data.gov.ie and describes asset locations and coordinates for public lighting in the Council area. The published KML resource is CC BY 4.0 / CC BY according to the catalogue metadata:
https://data.gov.ie/dataset/street-lighting-dublin-city
https://data.smartdublin.ie/dataset/064a3764-84aa-48d0-ac43-f5b45f229584/resource/ac6f5a54-0a26-4c2c-b4bd-a22d57c8ba3f

The resource is a location/asset dataset, not photographic evidence. Its displayed data update is 3 December 2021, so it must not be treated as a current condition survey. It is a possible future cross-check for lamp asset identifiers and field planning, subject to validating the exact point and data currency.

**Decision: record as a research lead only; no visual record or image reference added.**

## 5. Rejection register

| Candidate | What is established | Decision |
|---|---|---|
| Marlborough Street Commons photograph, 2013 | Street category, author, date and CC BY-SA 3.0 licence | Not accepted: target post box not identified or visually verified |
| Doyle's, 9 College Street Art Deco lamp | UCD source, attribution and CC0 1.0 licence; different address | Rejected: not NIAH 50020523 target lamp |
| DCC public-lighting KML | Asset-location dataset, CC BY metadata, last updated 2021 | Research lead only; not a photograph and not current condition evidence |

## 6. Repository changes and validation

No candidate met the exact-object and verification threshold for an image reference in this batch. This is a report-only batch. No changes were made to:
- `data/objects.json`
- `data/visual-assets.json`
- `data/sources.json`
- `documentation/VISUAL-AUDIT-MATRIX-2026-10-27.csv`

No image references were added. No catalogue facts or photo statuses were changed.

## 7. Next research actions

1. Search for an exact photograph of NIAH 50010238 at the west side of Marlborough Street, north of the Pro-Cathedral; use field coordinates and the Edward VII cipher/maker's mark to distinguish it from other boxes.
2. Search for the exact NIAH 50020523 double-headed lamp at the east end/north side of College Street; do not substitute the CC0 Doyle's lamp.
3. Test the DCC public-lighting dataset as a field-planning aid, noting its 2021 update date and the need to verify asset identity on site.
4. Continue across the remaining 128 records without image references, prioritising exact-object imagery with traceable photographer, date, location and reuse rights.

## Conclusion

Batch 040 produced one licensed streetscape lead for Marlborough Street, one CC0 photograph of a different College Street Art Deco lamp, and one municipal lighting-data lead. None is a verified photograph of either target object. Correctly rejecting these candidates preserves the archive's evidence standard. No images were added.

**LEAVE NO LOCATION BEHIND.**
