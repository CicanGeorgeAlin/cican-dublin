# CICAN Dublin — Four-Authority NIAH Bulk Census 001

**Audit date:** 20 November 2026  
**Official source snapshot:** National NIAH CSV retrieved by GitHub Actions  
**Workflow run:** https://github.com/CicanGeorgeAlin/cican-dublin/actions/runs/44743552318  
**Status:** Successful official CSV audit and complete four-authority filter; candidate queue generated. No new production records were added.

## 1. Official source and method

The audit retrieved the official national NIAH CSV from:

`https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data`

The existing audit parser read 48,327 national rows. The coverage audit identified these fields:
- `REG_NO` — official eight-digit registration number
- `COUNTY` — county
- `LOCAL_AUTHORITY�` — local authority (the source header contains a replacement character; the pipeline normalises header names before matching)

The filter selected rows where `COUNTY=DUBLIN` and local authority matched one of the four Dublin authorities. The filtered set contained 7,535 unique registration numbers. There were no duplicate registration numbers, blank/unrecognised local-authority values or unassigned rows in this filtered set.

## 2. Audited Building Survey denominator

| Dublin local authority | Unique official NIAH registrations |
|---|---:|
| Dublin City Council | 5,692 |
| Fingal County Council | 667 |
| South Dublin County Council | 790 |
| Dún Laoghaire-Rathdown County Council | 386 |
| **Four-authority total** | **7,535** |

This is the current denominator for the **NIAH Building Survey national CSV snapshot**, filtered to County Dublin and the four target local authorities. It is not a total for every NIAH product or every heritage designation.

The earlier working target of 3,396 was not supported by this current official CSV snapshot. It must not be used as the denominator for Building Survey coverage.

## 3. Current CICAN comparison

| Measure | Result |
|---|---:|
| Master catalogue records | 462 |
| Distinct numeric NIAH references in master | 342 |
| Public NIAH collection entries | 342 |
| Unique public NIAH references | 342 |
| Public references exactly matched to official CSV | 342 |
| Public references missing from official CSV | 0 |
| Official Dublin registrations not yet in public collection | 7,193 |
| Duplicate registrations in official four-authority set | 0 |
| Unassigned / unrecognised authority rows | 0 |

The 342 unique numeric references in the master catalogue exactly equal the 342 references in the public NIAH collection. All 342 matched the official national CSV in this run.

## 4. Machine-generated candidate queue

The workflow generated `audit/niah-dublin-missing-registrations.json` containing 7,193 official registrations absent from the current public NIAH collection. It also generated `audit/niah-dublin-coverage-audit.json` with the denominator, authority counts, deduplication results and source metadata.

The queue is an official-source discovery list only. It is not a set of automatically approved archive objects. Every candidate still requires:
1. Exact individual NIAH registration identity and official record URL.
2. Full record review, including description, rating, date range and address.
3. Duplicate and parent/child relationship checks against the master catalogue and existing public collection.
4. Coordinate/CRS retention and a documented map-position decision.
5. Source attribution and licence checks.
6. Image-rights checks independent of dataset licence.
7. Access and photography safety checks.
8. Schema validation and consistent updates to master, public collection, source registry, visual inventory, SEO pages and sitemap.

The archive will publish no more than 100 individually verified records in a batch. The number may be smaller if the evidence does not support more.

## 5. Scope limits

This denominator covers the NIAH Building Survey records in the national CSV, filtered by County Dublin and the four local authorities. It does not include the separate Survey of Historic Gardens and Designed Landscapes or the National Thatch Census. Those datasets must be audited separately and cross-referenced to avoid double-counting.

The NIAH Data Download page describes its regional Dublin CSV as covering Dublin City, Fingal and South Dublin County. The national CSV used for this four-authority audit also contains 386 Dún Laoghaire-Rathdown registrations. The national source is therefore used for the four-authority denominator; the regional CSV scope is not silently assumed to include Dún Laoghaire-Rathdown.

## 6. Quality and deployment

Successful GitHub Actions quality run:
https://github.com/CicanGeorgeAlin/cican-dublin/actions/runs/44743552318

The run completed:
- SEO page generation: 342 place pages and sitemap with 345 URLs.
- Archive validation: success.
- Existing NIAH registration audit: success, all 342 matched.
- Four-authority bulk coverage audit: success.
- Audit and missing-registration artifact upload: success.

The Pages build/deployment workflow also completed successfully:
https://github.com/CicanGeorgeAlin/cican-dublin/actions/runs/44743552283

No new production records were added by this census run. The website deployment contains the repository's existing 342 public NIAH entries and updated documentation/source metadata; the 7,193-entry candidate queue remains a workflow artifact rather than production catalogue data.

## 7. Official references

- NIAH Data Download page: https://www.buildingsofireland.ie/niah-data-download/
- Official national NIAH dataset: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset
- NIAH national CSV source used by the workflow: https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data
- NIAH national Feature Service: https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildingsOpenData/FeatureServer

---
**Census 001 conclusion:** The archive now has a reproducible, CI-validated bulk source, a measured four-authority Building Survey denominator of 7,535, an exact-match baseline of 342/342, and a queue of 7,193 missing official registrations for careful 100-record verification batches.
