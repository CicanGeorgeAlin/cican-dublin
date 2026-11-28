# NIAH Verification Batch 124 — Lucan (South Dublin County)

**Date:** 28 November 2026  
**Outcome:** 13 records passed individual-page and national-row verification; 7 candidates remain HOLD.

## Official inventory and queue

The official NIAH data-download page describes the national building survey data as indexed by registration number and containing location, classification, rating, description, appraisal and coordinate fields. The four-authority Dublin audit denominator is 7,535 registrations. The 25 November queue artifact contained 7,026 registrations not yet represented by the archive NIAH register. This batch adds 13; the arithmetic remainder is 7,013, pending a fresh official CSV audit.

- [NIAH Data Download — Buildings of Ireland](https://www.buildingsofireland.ie/niah-data-download/)
- [NIAH National Dataset — data.gov.ie](https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset)

## Thirteen verified records

| Archive ID | NIAH reference | Display name | Period | WGS84 |
|---|---:|---|---|---|
| DUB-BLD-0335 | 11201029 | Lucan Garda Síochána Station | 1800–1820 | 53.356086, -6.450668 |
| DUB-BLD-0336 | 11201030 | Lucan Road — public house | 1820–1840 | 53.356290, -6.450214 |
| DUB-BLD-0337 | 11201031 | Lucan Road / Adamstown Road — house | 1850–1870 | 53.356305, -6.449740 |
| DUB-BLD-0338 | 11201033 | Adamstown Road — domestic outbuilding | 1750–1800 | 53.356067, -6.449980 |
| DUB-BLD-0339 | 11201037 | Main Street / Sarsfield Park — Georgian house | 1820–1840 | 53.356879, -6.449312 |
| DUB-BLD-0340 | 11201039 | 1 The Manor | 1810–1830 | 53.357270, -6.449576 |
| DUB-BLD-0341 | 11201041 | Main Street — shop | 1800–1830 | 53.356515, -6.450801 |
| DUB-BLD-0342 | 11201042 | Main Street — shop | 1800–1830 | 53.356593, -6.450735 |
| DUB-BLD-0343 | 11201044 | Main Street — former building society branch | 1800–1830 | 53.356811, -6.450560 |
| DUB-BLD-0344 | 11201045 | The Lucan Inn | 1890–1920 | 53.356914, -6.450495 |
| DUB-INF-0208 | 11201047 | Lucan Main Street — canalised river section | 1830–1850 | 53.356804, -6.450198 |
| DUB-INF-0209 | 11201048 | Lucan — single-arch road bridge | 1830–1850 | 53.356377, -6.450484 |
| DUB-BLD-0345 | 11201050 | Main Street — former bank | 1885–1895 | 53.357576, -6.449673 |

### Individual official NIAH record pages

1. [11201029 — Lucan Garda Síochána Station](https://www.buildingsofireland.ie/buildings-search/building/11201029/lucan-garda-siochana-station-leixlip-road-lucan-and-pettycanon-lucan-dublin)
2. [11201030 — Lucan Road](https://www.buildingsofireland.ie/buildings-search/building/11201030/lucan-road-lucan-and-pettycanon-lucan-dublin)
3. [11201031 — Lucan Road / Adamstown Road](https://www.buildingsofireland.ie/buildings-search/building/11201031/lucan-road-adamstown-road-lucan-and-pettycanon-lucan-dublin)
4. [11201033 — Adamstown Road](https://www.buildingsofireland.ie/buildings-search/building/11201033/adamstown-road-lucan-and-pettycanon-lucan-co-dublin)
5. [11201037 — Main Street / Sarsfield Park](https://www.buildingsofireland.ie/buildings-search/building/11201037/dispensary-lane-lucan-and-pettycanon-lucan-co-dublin)
6. [11201039 — 1 The Manor](https://www.buildingsofireland.ie/buildings-search/building/11201039/the-manor-main-street-lucan-and-pettycanon-lucan-co-dublin)
7. [11201041 — Main Street](https://www.buildingsofireland.ie/buildings-search/building/11201041/main-street-lucan-demense-lucan-co-dublin)
8. [11201042 — Main Street](https://www.buildingsofireland.ie/buildings-search/building/11201042/centra-main-street-lucan-demesne-lucan-co-dublin)
9. [11201044 — Main Street](https://www.buildingsofireland.ie/buildings-search/building/11201044/irish-permanent-main-street-lucan-demesne-lucan-co-dublin)
10. [11201045 — The Lucan Inn](https://www.buildingsofireland.ie/buildings-search/building/11201045/the-lucan-inn-main-street-lucan-demense-lucan-dublin)
11. [11201047 — Main Street canalised river section](https://www.buildingsofireland.ie/buildings-search/building/11201047/main-street-lucan-and-pettycanon-lucan-dublin)
12. [11201048 — single-arch bridge](https://www.buildingsofireland.ie/buildings-search/building/11201048/lucan-and-pettycanon-lucan-dublin)
13. [11201050 — former bank, Main Street](https://www.buildingsofireland.ie/buildings-search/building/11201050/main-street-lucan-and-pettycanon-lucan-dublin)

## Seven candidates held

These appeared in official NIAH search-index results and the missing-registration queue, but their individual pages were not opened and they were not imported: **11201040, 11201043, 11201049, 11201054, 11201056, 11201057 and 11201058.**

## Duplicate and spatial review

The complete production files were parsed before import: 629 master objects, 509 public NIAH records, 749 source records and 629 visual records. No candidate NIAH registration, archive ID, source ID, visual ID or normalized display-name collision was found. The master catalogue already contains 46 NIAH registration values shared by primary objects and separately catalogued micro-details; that established model was preserved. Every new source reference resolves.

Street-only address overlaps were reviewed and kept distinct only where the individual NIAH pages and registration numbers identify separate assets. NIAH 11201033 is explicitly related to Griffeen Lodge (11201032), but no parent relationship is inferred. NIAH 11201041/11201042 points are about 9.7 m apart; 11201044/11201045 about 12.2 m apart. NIAH 11201050 is about 9.5 m from existing 11201052; the separate former-bank description and registration are retained, with the point spacing flagged for field review.

## Coordinate, image and field status

The national CSV provides ITM EPSG:2157 and WGS84 fields. The archive uses the CSV latitude/longitude directly and records the ITM values in provenance. Numeric coordinate pairs displayed on individual NIAH pages without an explicit CRS label were not used or transformed. All thirteen records are SOURCE_DERIVED, not founder GPS or FIELD_VERIFIED. Current condition, occupancy, access and exact field position remain unverified. No NIAH-linked photographs were reused; all thirteen visual records await founder photography.

## Production totals expected after the commit

- Master catalogue: **642**
- Public NIAH register: **522**
- Source records: **762**
- Visual records: **642**
- Lucan settlement work-zone count: **32**

The Lucan label is a settlement work-zone, not a verified spatial local-authority assignment. GitHub Actions quality and Pages deployment must pass before the batch is called live.

**ALWAYS STAY IN THE LIGHT.**
