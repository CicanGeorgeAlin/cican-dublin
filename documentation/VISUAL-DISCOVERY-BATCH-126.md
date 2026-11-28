# NIAH Verification Batch 126 — Lucan

**Date:** 28 November 2026  
**Project:** CICAN Dublin Archive  
**Workstream:** NIAH core discovery and publication  
**Status:** Eight SOURCE_VERIFIED_CORE records added; national CSV matching is pending the next quality run.

## Summary

Batch 126 resolves all seven individual-page HOLD candidates from Batch 125 and adds eight new Lucan registrations. Each individual Buildings of Ireland page was opened and checked for exact REG_NO, title, rating, special-interest category, original/current use, date range, description and appraisal. The production master, public NIAH register, source registry and visual plan were checked for collisions before assigning IDs.

## Records added

| NIAH registration | Archive ID | Official subject |
|---|---|---|
| 11201056 | DUB-BLD-0353 | 3 Hanbury Lane |
| 11201057 | DUB-BLD-0354 | 4 Hanbury Lane |
| 11201058 | DUB-BLD-0355 | 1 Sarsfield Terrace |
| 11201063 | DUB-BLD-0356 | 6 Sarsfield Terrace |
| 11201065 | DUB-BLD-0357 | 8 Sarsfield Terrace |
| 11201066 | DUB-BLD-0358 | 9 Sarsfield Terrace |
| 11201067 | DUB-BLD-0359 | 10 Sarsfield Terrace |
| 11201069 | DUB-BLD-0360 | 15 Main Street |

## Verification boundaries

- **Individual NIAH pages:** PASS for all eight.
- **Archive registration and ID collision checks:** PASS; zero collisions.
- **National CSV exact-row match:** PENDING for Batch 126 until the next quality workflow. Batch 125's separate run confirmed 530/530 matches and 7,005 registrations remaining.
- **Coordinates:** intentionally unset; no CRS inferred from page coordinate pairs and no map pins added.
- **Field verification:** NOT DONE.
- **Photography:** eight founder photography plans added; no NIAH-linked photographs reused.
- **Rights:** NIAH dataset record data attributed under CC BY 4.0; linked photographs excluded.

## Production totals

| Dataset | Before | Added | After |
|---|---:|---:|---:|
| Master objects | 650 | 8 | 658 |
| Public NIAH records | 530 | 8 | 538 |
| Source records | 770 | 8 | 778 |
| Visual records | 650 | 8 | 658 |

All seven held records from Batch 125 (11201056, 11201057, 11201058, 11201063, 11201065, 11201066 and 11201067) were individually opened in this cycle and added. Registration 11201069 was also verified and added. Existing 11201070–11201072 records were left untouched after duplicate checks.

## Repository changes

- `data/objects.json`
- `data/niah-registered-objects.json`
- `data/sources.json`
- `data/visual-assets.json`
- `data/coverage-audit.json`
- `audit/niah-batch-125-national-csv-confirmation.json`
- `audit/niah-batch-126-record-level-audit.json`
- `documentation/CONTINUE-AUTOPILOT.md`

The next quality workflow must verify all 538 public registration numbers against the official CSV, regenerate the 7,535-record four-authority queue and run the complete archive and deployment gates.
