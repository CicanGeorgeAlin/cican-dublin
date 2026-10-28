# VISUAL DISCOVERY BATCH 051 — NIAH Image Gallery Retrieval Audit

**Date:** 28 October 2026  
**Scope:** Photographic retrieval for existing catalogue entries only. No catalogue expansion.

## 1. Baseline rechecked from live main

- Catalogue objects: 195.
- Visual records: 195.
- Reference-image entries: 79.
- Locations with at least one registered reference image: 68.
- Locations without any registered reference image: 127.
- Source entries before this batch: 261.

## 2. Existing records with official NIAH photo galleries confirmed

The following are not new points of interest. They are existing CICAN records with exact or high-confidence NIAH registration matches.

| CICAN record | Existing object | NIAH record | Photo-gallery evidence |
|---|---|---|---|
| DUB-STR-0003 | Gardiner Street Upper Victorian post box | 50010760 | Ten image links visible in the page slider; filenames include 50010760_5.jpg and 50010760_2.jpg |
| DUB-BLD-0006 | 23 Marlborough Street | 50010218 | Six image links visible; one identified file is 50010218_13.jpg |
| DUB-BLD-0007 | 77 Marlborough Street | 50010235 | Official record and image slider exposed in NIAH search/page evidence; direct image file not retrieved |
| DUB-BLD-0008 | 82 Marlborough Street | 50010230 | Official record and image gallery lead |
| DUB-BLD-0010 | National Model Schools main building | 50010222 | Existing object already cites this exact registration; official page exposes image slider |
| DUB-STR-0008 | Jervis Street twin post box | 50010458 | Official record confirms exact street-side object; gallery lead |
| DUB-STR-0013 | South Great George's Street twin post box | 50910076 | Multi-image slider; file 50910076_7.jpg identified |
| DUB-STR-0017 | Townsend Street Handyside post box | 50020308 | Multi-image slider; file 50020308_6.jpg identified |

NIAH's descriptions verify the identity and location of the post boxes and buildings. For example, the South Great George's Street record describes the twin post box at the Fade Street junction; Townsend Street's record places the Handyside box south of the Screen Cinema; Gardiner Street's record identifies the Victorian Handyside pillar box with VR insignia. Sources: https://www.buildingsofireland.ie/buildings-search/building/50910076/south-great-georges-street-dublin-2-co-dublin ; https://www.buildingsofireland.ie/buildings-search/building/50020308/townsend-street-hawkins-street-dublin-2-dublin ; https://www.buildingsofireland.ie/buildings-search/building/50010760/gardiner-street-upper-dublin-1-dublin

## 3. Retrieval test and limitations

The NIAH page slider exposes individual image links. The browser image-opening attempts for the following files returned HTTP 403 Forbidden:

- 50010760_5.jpg
- 50010760_2.jpg
- 50010218_13.jpg
- 50910076_7.jpg
- 50020308_6.jpg

A direct download attempt also failed. Therefore:
- no image file was downloaded;
- no image pixels were inspected;
- no photo was added to `data/visual-assets.json`;
- no location's photo coverage was increased;
- no image is represented as rights-cleared or publication-ready.

This is an access restriction, not evidence that the photographs do not exist. The official NIAH records remain usable as research leads. The next route is to request the original/digital files and usage permission directly from NIAH, or capture founder photographs in the field.

## 4. Rights

NIAH's terms distinguish educational/private use with source credit from commercial use, which requires prior written agreement. The archive must obtain the applicable permission before commercial publication or redistribution. A gallery visible on a public website is not an open licence.

## 5. Repository changes

- Updated five existing source records in `data/sources.json` with the verified gallery status, sample image filenames where retrieved, access failures and rights boundary.
- Added no duplicate source IDs.
- Added no image references to the visual inventory because the image bytes were not obtained and inspected.
- No changes to `data/objects.json` or `data/visual-assets.json`.
- No new points of interest.

## 6. Validation

- Catalogue remains 195.
- Visual records remain 195.
- Reference-image entries remain 79.
- Locations with images remain 68.
- Locations without images remain 127.
- Source IDs remain unique after updates: PASS.
- Five existing NIAH source records updated; no duplicate source records.

**Batch 051 result:** Eight existing photo-missing catalogue entries now have confirmed NIAH gallery leads. The image retrieval bottleneck is documented honestly; photographic coverage has not been inflated.

**FIRST THE PHOTOGRAPHS. THEN VERIFICATION. THEN EXPANSION.**
