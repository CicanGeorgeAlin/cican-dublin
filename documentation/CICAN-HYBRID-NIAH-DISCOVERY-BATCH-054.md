# CICAN Dublin — Hybrid NIAH Discovery Batch 054

**Date:** 20 November 2026  
**Scope:** Five individually opened Dublin City NIAH registrations across Dublin 1, Dublin 2 and Dublin 3.  
**Outcome:** Five new SOURCE_VERIFIED_CORE records added after full-catalogue duplicate checks. National CSV exact registration matching and field verification remain separate stages.

## Candidates verified

| Archive ID | NIAH REG_NO | Official NIAH title | Rating |
|---|---:|---|---|
| DUB-BLD-0296 | 50010553 | Young Men's Christian Association, 43 O'Connell Street Upper, Dublin 1, DUBLIN | Regional |
| DUB-BLD-0297 | 50060501 | Ladbrokes, 43 Capel Street, Dublin 1, DUBLIN | Regional |
| DUB-BLD-0298 | 50910149 | 2 St. Andrew Street, Dublin 2, DUBLIN | Regional |
| DUB-BLD-0299 | 50120242 | 52 Bayview Avenue, Dublin 3, DUBLIN | Regional |
| DUB-BLD-0300 | 50120246 | 56 Bayview Avenue, Dublin 3, DUBLIN | Regional |

## Research notes

All five official Buildings of Ireland individual record pages were opened on 20 November 2026. The full NIAH descriptions, appraisals, ratings, dates, uses and official titles were transcribed into the archive records and source registry.

- 50010553 — 43 O'Connell Street Upper: 1925 Portland-stone commercial building, originally a shoe shop by Batchelor and Hicks; NIAH appraisal notes its replacement of an earlier house after 1916 Rising damage and its carved stonework.
- 50060501 — 43 Capel Street: c.1810 former house with later shopfront; representative of Capel Street's mixed commercial/residential historic built form.
- 50910149 — 2 St. Andrew Street: c.1760 Georgian townhouse with a carved limestone street-name plaque and Gibbsian-style door surround.
- 50120242 — 52 Bayview Avenue: c.1830 late-Georgian terraced house with petal fanlight, granite steps and cast-iron boundary railings.
- 50120246 — 56 Bayview Avenue: c.1830 small townhouse with attic accommodation, petal fanlight, granite steps, bootscrape and cast-iron railings.

## Duplicate and relationship audit

The complete canonical datasets were retrieved from Git blobs and parsed before import: 590 master objects, 470 public NIAH records, 708 sources and 590 visual records. Each candidate was checked against all four datasets for exact NIAH REG_NO, archive ID, source ID, normalized name and exact address collisions. No duplicate matches were found. No existing record was overwritten or removed.

## Publication and coordinate controls

- Five master objects, five public NIAH core records, five official source records and five visual photography plans were added.
- All five are SOURCE_VERIFIED_CORE. The legacy `verification_status: VERIFIED` records individual-page transcription only; it does not mean FIELD_VERIFIED.
- Coordinates remain null, `coordinate_status: NOT_SET`, with no map URLs or pins. The individual-page coordinate pairs are not labelled with a CRS and were not imported.
- No NIAH photographs were reused. Founder photography and A4 line art remain outstanding.
- Private residential properties are public-viewpoint-only targets; no access permission is implied.

## Post-batch totals

- Master objects: **595**
- Public NIAH records: **475**
- Source records: **713**
- Visual records: **595**
- New map pins: **0**
- New records awaiting founder photography: **5**

## Next actions

1. Run the archive quality gate and official national CSV exact REG_NO audit.
2. Confirm GitHub Pages deployment and generated place pages/sitemap.
3. Continue the next five individually opened Dublin City NIAH registrations.
4. Reconcile national CSV description/appraisal/date/coordinate fields separately and keep founder field photography distinct.


## Official national CSV, quality and deployment confirmation — 20 November 2026

The first quality run correctly blocked deployment because the coverage audit still reported 590 catalogue records after the batch had increased the master catalogue to 595. The coverage audit was corrected and the quality workflow rerun. The final quality gate passed: official national CSV source rows **48,327**; exact public REG_NO matches **475/475**; four-authority Dublin Building Survey denominator **7,535**; remaining official registrations **7,060**; official duplicate references **0**; unassigned authority rows **0**. The archive validator passed. The SEO generator produced **475 crawlable NIAH place pages** and a sitemap with **478 URLs**. The explicit Pages deployment and the GitHub Pages build/deployment workflow both completed successfully. Workflow runs: [quality 44815750067](https://github.com/CicanGeorgeAlin/cican-dublin/actions/runs/44815750067), [CICAN Pages deploy 44815749994](https://github.com/CicanGeorgeAlin/cican-dublin/actions/runs/44815749994), [Pages build/deployment 44815749645](https://github.com/CicanGeorgeAlin/cican-dublin/actions/runs/44815749645). No manual visual, physical-device, GPS or field-access test is claimed.
