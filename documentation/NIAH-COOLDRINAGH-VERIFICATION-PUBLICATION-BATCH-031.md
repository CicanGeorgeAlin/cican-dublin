# CICAN Dublin — NIAH Cooldrinagh Verification & Publication Batch 031

**Date:** 20 November 2026  
**Scope:** NIAH-only Stage 1; Cooldrinagh / Leixlip, South Dublin County  
**Outcome:** 6 new official NIAH registrations independently checked against individual Buildings of Ireland pages and the official national CSV, deduplicated against the full master catalogue, and published to the public NIAH collection.

## 1. Batch summary

| Measure | Result |
|---|---:|
| Official NIAH registrations checked | 6 |
| New master objects | 6 |
| New public NIAH records | 6 |
| New official source records | 6 |
| New visual-workflow records | 6 |
| Exact duplicate registration matches before import | 0 |
| Founder photographs / field verifications | 0 |
| Reference photographs reused | 0 |

This is a deliberately bounded batch. Six complete individual NIAH records were checked and their matching national CSV rows were reconciled. The batch was not inflated to 100 because only these six records were fully completed through the individual-page and source-provenance gate in this pass.

## 2. Verified registrations

| NIAH registration | CICAN ID | Official NIAH record | Rating | Date range | CSV ITM (EPSG:2157) |
|---|---|---|---|---|---|
| 11201005 | DUB-BLD-0274 | Leixlip Road — detached house | Regional | 1840–1880 | E 700796, N 735747 |
| 11201007 | DUB-INF-0204 | Leixlip Road — granite milestone | Regional | 1750–1800 | E 700949, N 735684 |
| 11201010 | DUB-BLD-0275 | 1 Cooldrinagh Lane | Regional | 1820–1840 | E 701032, N 735558 |
| 11201011 | DUB-BLD-0276 | 2 Cooldrinagh Lane | Regional | 1820–1840 | E 701034, N 735549 |
| 11201012 | DUB-BLD-0277 | 3 Cooldrinagh Lane | Regional | 1820–1840 | E 701036, N 735539 |
| 11201014 | DUB-BLD-0278 | Cooldrinagh House | Regional | 1750–1780 | E 701014, N 735420 |

All six records are assigned by the official CSV to **South Dublin County Council** and identify the survey as the NIAH Survey of South Dublin County 2002. The individual NIAH pages were checked for exact registration number, identity, rating, date range, description and appraisal.

## 3. Source and coordinate handling

The official national CSV was retrieved in the successful GitHub Actions audit and matched by exact `REG_NO`. It supplies the explicit ITM coordinates (EPSG:2157) and WGS84 latitude/longitude used for the map locators.

| NIAH | CSV latitude | CSV longitude | Individual-page coordinate pair (CRS not labelled) |
|---|---:|---:|---|
| 11201005 | 53.362303 | -6.485625 | 300867, 235721 |
| 11201007 | 53.361711 | -6.483346 | 301020, 235660 |
| 11201010 | 53.360562 | -6.482139 | 301105, 235533 |
| 11201011 | 53.360480 | -6.482111 | 301106, 235524 |
| 11201012 | 53.360391 | -6.482086 | 301108, 235514 |
| 11201014 | 53.359325 | -6.482455 | 301102, 235421 |

The individual-page coordinate pairs are retained here as source observations only. Their coordinate reference system is not labelled on the pages and they were **not** used for map placement or transformed. The CSV ITM values and its WGS84 values are preserved separately in each record's coordinate-provenance note.

The NIAH dataset metadata warns that the source point centroids were digitised relative to OSI 6-inch mapping and may require revision against larger-scale mapping. Positional accuracy is unspecified. Every map point is marked SOURCE_DERIVED, not founder GPS.

## 4. Record and image-rights controls

- The six exact registration numbers were checked against the complete pre-batch `data/objects.json`, public `data/niah-registered-objects.json` and source registry. All returned zero matches.
- New records are marked PARTIALLY_VERIFIED. This means the official NIAH record and CSV identity have been checked; it does not claim current physical survival, present condition, exact on-site position or founder field verification.
- Access remains NOT ASSESSED. The houses are treated as private/residential unless lawful public vantage points or permission are confirmed. The milestone is to be photographed only from lawful public space if currently accessible; do not touch or clean it.
- No image from the NIAH pages or CSV IMAGE_LINK field was reused. NIAH dataset record data is CC BY 4.0; linked photographs have separate rights and were not assumed to share that licence.
- Six matching visual inventory entries were added. All await founder photography; line art and galleries remain unpublished.

## 5. Post-import totals

| Dataset | Before Batch 031 | After Batch 031 |
|---|---:|---:|
| Master catalogue | 562 | **568** |
| Public NIAH collection | 442 | **448** |
| Registered sources | 680 | **686** |
| Visual inventory records | 562 | **568** |
| Records with at least one reference image | 108 | **108** |
| Founder original photographs | 0 | **0** |

The official four-authority denominator remains 7,535. The public collection now contains 448 exact-matched registrations, leaving **7,087** official registrations for review. This is 448 / 7,535 = **5.9%** exact registration reconciliation, not full research, fieldwork or photography completion.

## 6. Individual official records

- 11201005 — https://www.buildingsofireland.ie/buildings-search/building/11201005/leixlip-road-cooldrinagh-leixlip-dublin
- 11201007 — https://www.buildingsofireland.ie/buildings-search/building/11201007/leixlip-road-cooldrinagh-dublin
- 11201010 — https://www.buildingsofireland.ie/buildings-search/building/11201010/1-cooldrinagh-lane-cooldrinagh-co-dublin
- 11201011 — https://www.buildingsofireland.ie/buildings-search/building/11201011/2-cooldrinagh-lane-cooldrinagh-co-dublin
- 11201012 — https://www.buildingsofireland.ie/buildings-search/building/11201012/cooldrinagh-lane-cooldrinagh-dublin
- 11201014 — https://www.buildingsofireland.ie/buildings-search/building/11201014/cooldrinagh-house-cooldrinagh-lane-cooldrinagh-leixlip-dublin

## 7. Next operation

Continue from the same official missing-registration queue. Prioritise coherent groups of individual NIAH registrations in South Dublin and Fingal, but do not promote any record until the individual NIAH page, official CSV row, exact full-catalogue deduplication, coordinate provenance and access/image-rights boundaries have been checked. Keep each batch as small as necessary to preserve that standard.

**Production scope:** six new NIAH-only catalogue records, public map/archive records, official source entries and visual-workflow entries. SEO place pages and sitemap are regenerated by the existing GitHub Pages workflow. No application redesign was made.
