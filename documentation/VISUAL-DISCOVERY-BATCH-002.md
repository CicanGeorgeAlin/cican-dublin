# Visual Discovery Batch 002 — Marino Crescent and Clontarf Promenade

**Project:** CICAN DUBLIN  
**Prepared:** 26 October 2026  
**Scope:** Expand the reference-photo inventory without changing catalogue IDs, historical claims, coordinates, or founder-photography status.

## Result

The visual inventory now contains **23 third-party reference photographs across 19 catalogue records** (previously 20 photographs across 16 records). All new photographs are explicitly labelled `STREET_CONTEXT`; they are orientation aids and are not presented as founder originals or as proof that the pictured feature is the exact object at the archive pin.

## New registered photographs

| Archive record | Photograph | Photographer | Date | Licence | Role |
|---|---|---|---|---|---|
| DUB-BLD-0038 — 7 Marino Crescent | [Marino Crescent, view east](https://commons.wikimedia.org/wiki/File:Marino_crescent,_Dublin.jpg) | William M. Murphy | 9 Jan 2020 | CC BY-SA 2.0 | STREET_CONTEXT |
| DUB-BLD-0051 — Clontarf Promenade shelter | [Clontarf Promenade shelter 1](https://commons.wikimedia.org/wiki/File:Dublin_-_Clontarf_Promenade_shelter_1_-_20220208130124.jpg) | Malone0 | 8 Feb 2022 | CC BY-SA 4.0 | STREET_CONTEXT |
| DUB-BLD-0057 — group of promenade shelters | [Clontarf Promenade shelter 4](https://commons.wikimedia.org/wiki/File:Dublin_-_Clontarf_Promenade_shelter_4_-_20220208125154.jpg) | Malone0 | 8 Feb 2022 | CC BY-SA 4.0 | STREET_CONTEXT |

## Website behaviour

The map and detail view already consume `data/visual-assets.json`. The photo resolver now also checks a record's documented `parent_id` when it has no direct image. An inherited parent image is downgraded to `STREET_CONTEXT` and receives an explicit note that it is a contextual image, not a photograph of the individual child detail. Direct record photographs continue to take precedence. Founder originals continue to take precedence over third-party references.

## Quality and integrity controls

- Every new image has a source-page URL, photographer credit, capture date where stated, licence name and licence URL.
- The original Commons file page is the attribution destination.
- No image is marked as a founder original.
- No record's photography status, line-art status, verification status, ID, or coordinates were changed.
- Context photographs are not evidence for exact object identity or coordinate accuracy.
- Images of unrelated Dublin landmarks were not added to records merely because they are well-known or nearby.

## Remaining work

This is an incremental batch, not complete visual coverage. The next batches should prioritise the records without any direct or inherited reference image, beginning with exact-match Wikimedia Commons photographs and then carefully labelled street-context photographs. If no rights-cleared, sufficiently relevant image is found, keep the record visibly awaiting photography rather than using an unrelated or generated image.
