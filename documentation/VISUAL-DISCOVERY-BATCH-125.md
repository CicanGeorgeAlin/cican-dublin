# NIAH Verification Batch 125 — Lucan

**Date:** 28 November 2026  
**Project:** CICAN Dublin Archive  
**Workstream:** NIAH core discovery and publication  
**Status:** Eight SOURCE_VERIFIED_CORE records added; national CSV enrichment and field verification remain pending.

## Summary

Eight distinct official NIAH registrations were opened individually and checked against the public Buildings of Ireland record pages. Exact registration numbers, official titles, rating, special-interest categories, original/current use, date range, description and appraisal were captured. The complete production master and public NIAH register were checked before assigning new archive IDs. No candidate registration, archive ID, source ID or visual ID collision was found.

## Records added

| NIAH registration | Archive ID | Official subject |
|---|---|---|
| 11201040 | DUB-BLD-0346 | 2 The Manor |
| 11201043 | DUB-BLD-0347 | Main Street terraced shop |
| 11201049 | DUB-STR-0208 | Main Street cast-iron pillar post box |
| 11201054 | DUB-BLD-0348 | 1 Hanbury Lane |
| 11201059 | DUB-BLD-0349 | 2 Sarsfield Terrace |
| 11201060 | DUB-BLD-0350 | 3 Sarsfield Terrace |
| 11201061 | DUB-BLD-0351 | 4 Sarsfield Terrace |
| 11201064 | DUB-BLD-0352 | 7 Sarsfield Terrace |

All eight individual NIAH pages were opened and reviewed. Each public record links to its individual official source. The descriptions and appraisals remain attributed to NIAH.

## Verification boundaries

- **Individual NIAH page:** PASS for all eight.
- **Archive registration and ID collision checks:** PASS; zero collisions.
- **National CSV exact-row match:** PENDING for all eight; not claimed in this batch.
- **Coordinates:** intentionally unset. The individual pages display coordinate pairs, but this batch did not establish a coordinate reference system for those pairs. No coordinate conversion or map pin is inferred.
- **Field verification:** NOT DONE.
- **Photography:** no NIAH-linked images reused; eight founder photography plans added.
- **Rights:** NIAH dataset record data attributed under CC BY 4.0; linked photographs excluded.

## Production totals

| Dataset | Before | Added | After |
|---|---:|---:|---:|
| Master objects | 642 | 8 | 650 |
| Public NIAH records | 522 | 8 | 530 |
| Source records | 762 | 8 | 770 |
| Visual records | 642 | 8 | 650 |

The official four-authority denominator remains 7,535. The last confirmed national-row missing queue was 7,013 before this batch. Do not reduce that number until the quality workflow re-runs exact national CSV matching for the eight additions.

## Held candidates

11201056, 11201057, 11201058, 11201063, 11201065, 11201066 and 11201067 remain on HOLD because their individual pages were not opened and checked in this cycle. Search snippets alone are not sufficient for publication.

## Repository changes

- `data/objects.json`
- `data/niah-registered-objects.json`
- `data/sources.json`
- `data/visual-assets.json`
- `data/coverage-audit.json`
- `audit/niah-batch-125-record-level-audit.json`
- `documentation/VISUAL-DISCOVERY-BATCH-125.md`
- `documentation/CONTINUE-AUTOPILOT.md`

The commit is an atomic data-and-documentation update. GitHub Actions and GitHub Pages must complete before deployment is reported as confirmed.

## Next step

Resolve the seven held individual records, then continue through the official four-authority queue in larger 20-record research sub-batches, up to 100 candidates per Continue where the individual-page, duplicate, source, coordinate, quality and publication gates permit.
