# CICAN Dublin — NIAH Hybrid Discovery Batches 058–059

**Research and import preparation date:** 21 November 2026  
**Scope:** Ten individually reviewed Dublin City NIAH registrations  
**Status:** Draft review branch; quality gate passed; not merged or deployed  
**Evidence status:** SOURCE_VERIFIED_CORE; not field-verified

## Review outcome

Ten records from the Batch 058 and 059 research reviews have been staged in the four canonical archive datasets:

- `data/objects.json` — master catalogue
- `data/niah-registered-objects.json` — public NIAH register
- `data/sources.json` — source registry
- `data/visual-assets.json` — photography and visual inventory

The current draft branch uses archive IDs DUB-BLD-0316 through DUB-BLD-0325. Each record has one matching source entry and one visual inventory entry. The NIAH registration is unique within the current master catalogue and public NIAH register.

The exact-collision audit screened registration numbers and exact normalized name/address values against the complete pre-import master catalogue, public NIAH register, source registry and visual inventory. No exact collision was found. This method does not rule out every possible alternate spelling, alias or address variant; human review remains appropriate.

## Imported records

| Archive ID | NIAH registration | Official subject | NIAH page |
|---|---:|---|---|
| DUB-BLD-0316 | 50010559 | The Parnell Mooney, 72–74 Parnell Street | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010559/the-parnell-mooney-72-74-parnell-street-dublin-dublin) |
| DUB-BLD-0317 | 50010561 | Patrick Conway, 70 Parnell Street | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010561/patrick-conway-70-parnell-street-dublin-dublin) |
| DUB-BLD-0318 | 50010562 | 71 Parnell Street | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010562/71-parnell-street-dublin-dublin) |
| DUB-BLD-0319 | 50010615 | 76 Parnell Street | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010615/76-parnell-street-dublin-1-dublin) |
| DUB-BLD-0320 | 50010617 | 78 Parnell Street | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010617/78-parnell-street-dublin-dublin) |
| DUB-BLD-0321 | 50010997 | 12 North Great George’s Street | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010997/north-great-georges-street-dublin-dublin) |
| DUB-BLD-0322 | 50010998 | 11 North Great George’s Street | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010998/north-great-georges-street-dublin-dublin-city) |
| DUB-BLD-0323 | 50011004 | 5 North Great George’s Street | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50011004/north-great-georges-street-dublin-dublin) |
| DUB-BLD-0324 | 50011008 | Dublin and Meath Railway Company, 1 North Great George’s Street / Denmark Street Great | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50011008/1-north-great-georges-street-denmark-street-great-dublin-1-co-dublin) |
| DUB-BLD-0325 | 50010988 | Bel Canto House, 21 North Great George’s Street | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010988/bel-canto-house-21-north-great-georges-street-dublin-dublin) |

The individual NIAH records were consulted for the official registration, subject, locality, rating, special-interest classification, recorded date range and date-recorded fields, and for the concise architectural descriptions and appraisal summaries. The public source entries identify the Department of Housing, Local Government and Heritage as publisher.

## Coordinate provenance and map policy

The following latitude/longitude pairs were transcribed from the official national NIAH downloadable CSV row matching each registration number. The values are stored as source-derived coordinates, not founder GPS observations.

| NIAH registration | Latitude | Longitude |
|---:|---:|---:|
| 50010559 | 53.352182 | -6.262030 |
| 50010561 | 53.351977 | -6.262448 |
| 50010562 | 53.352028 | -6.262346 |
| 50010615 | 53.352638 | -6.260900 |
| 50010617 | 53.352705 | -6.260750 |
| 50010997 | 53.354537 | -6.261076 |
| 50010998 | 53.354591 | -6.261155 |
| 50011004 | 53.354946 | -6.261629 |
| 50011008 | 53.355197 | -6.261967 |
| 50010988 | 53.354017 | -6.260379 |

**Important limitations:** The CSV latitude/longitude values are not independently surveyed here. Their positional accuracy and exact point semantics have not been independently established. Accordingly:

- `coordinate_status` is `SOURCE_DERIVED`.
- `coordinate_accuracy_m` remains null.
- `coordinate_source` names the official national NIAH CSV and access date.
- `map_url` remains null.
- No map pin is authorised solely by these imported values.
- Founder GPS capture or a separate positional-quality assessment is still required before map publication.

## Photography and access

All ten visual records have a photography plan. Founder photography, capture date, capture coordinates, line art and gallery publication remain pending. Residential and commercial properties must be photographed only from lawful public space unless explicit permission is obtained. No interior access is implied. Historic survey descriptions and occupancy notes are not assertions about present-day condition or use.

## Automated quality gate

The GitHub Actions quality gate completed successfully on the review branch. Both triggered validation runs passed the following steps:

1. Map application and service-worker JavaScript syntax checks.
2. SEO page generator syntax check and generation of crawlable NIAH pages and sitemap.
3. Catalogue, image, link and page-script validation.
4. Existing NIAH registration audit against the official national CSV.
5. Four-authority Dublin NIAH coverage and missing-registration queue build.
6. Batch 058–059 candidate reconciliation against the complete catalogues and official CSV.
7. Audit report artifact upload.

The validator also confirmed that catalogue, public NIAH register and visual inventory identifiers/counts reconcile, required source references resolve, coordinates have provenance, and the coverage audit totals match the master catalogue.

## Staged totals

| Dataset | Records after staging |
|---|---:|
| Master objects | 620 |
| Public NIAH register | 500 |
| Source registry | 738 |
| Visual inventory | 620 |

The coverage audit was reconciled to 620 master objects. Dublin 1 now has 154 catalogue records. Settlement/postal-district labels remain work-zone labels and are not treated as verified local-authority assignments.

## Publication status and next actions

This is a draft review branch and draft pull request only. The production branch and GitHub Pages site have not been changed by this staging operation.

Before merge:
- Review the ten official subject names and NIAH descriptions against their individual source pages.
- Review the official CSV coordinate provenance and decide whether source-derived coordinates should remain stored while pins are withheld.
- Confirm the ten new source and visual entries in the PR diff.
- Keep founder field verification and photography status pending until actually completed.

**Draft pull request:** https://github.com/CicanGeorgeAlin/cican-dublin/pull/28
