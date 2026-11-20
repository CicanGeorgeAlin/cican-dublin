# CICAN Dublin — Batch 051: Three Dublin NIAH Records Published

**Date:** 2026-11-20  
**Method:** Hybrid NIAH discovery; individual official NIAH pages; complete catalogue and registry duplicate checks.  
**Outcome:** Three additional Dublin NIAH records added to the master catalogue, registered-object catalogue, source registry, visual inventory, dedicated archive pages and sitemap.

## 1. Records added

### DUB-INF-0207 — Bachelor’s Walk
- NIAH REG_NO: 50060551
- Official individual record: https://www.buildingsofireland.ie/buildings-search/building/50060551/bachelors-walk-dublin-city
- Rating: Regional
- Special interest: Architectural, Social, Technical
- Original/current use: Quay/wharf / Quay/wharf
- Date range: 1790–1810; built c.1800
- Date recorded: 02/09/2014
- Archive page: https://cicangeorgealin.github.io/cican-dublin/places/DUB-INF-0207.html
- Description and appraisal: transcribed/condensed from the opened individual official NIAH page.

### DUB-BLD-0284 — Trinity City Hotel (former Central Fire Station)
- NIAH REG_NO: 50020320
- Official individual record: https://www.buildingsofireland.ie/buildings-search/building/50020320/trinity-city-hotel-tara-street-pearse-street-dublin-2-dublin
- Rating: Regional
- Special interest: Architectural, Artistic, Historical, Social, Technical
- Original/current use: Fire station / Hotel
- Date range: 1905–1910; built 1906
- Date recorded: 24/03/2015
- Archive page: https://cicangeorgealin.github.io/cican-dublin/places/DUB-BLD-0284.html
- Description and appraisal: transcribed/condensed from the opened individual official NIAH page.

### DUB-BLD-0285 — Drumcondra Road Upper — St Patrick’s Campus gate screen and boundary walls
- NIAH REG_NO: 50130155
- Official individual record: https://www.buildingsofireland.ie/buildings-search/building/50130155/drumcondra-road-upper-dublin-9-co-dublin
- Rating: Regional
- Special interest: Architectural, Historical, Social
- Original/current use: Gates/railings/walls / Gates/railings/walls
- Date range: 1890–1915; gate screen built 1910–1912; associated gateway dated 1894
- Date recorded: 20/06/2018
- Archive page: https://cicangeorgealin.github.io/cican-dublin/places/DUB-BLD-0285.html
- Description and appraisal: transcribed/condensed from the opened individual official NIAH page.

## 2. Duplicate and relationship audit

Complete canonical files were recovered through Git blob access and parsed: 577 master objects, 457 registered NIAH records, 695 sources and 577 visual records. Exact REG_NO searches, title checks and source/visual registry checks found no prior record for the three new registrations. The Drumcondra gate-screen address is co-located with other separately registered St Patrick’s Campus assets, including the former college building (50130152), old chapel (50130151), new chapel (50130154), and a separately catalogued postbox (50120002). The NIAH registration 50130155 describes the gate screen and boundary walls as a separate asset; no records were merged and the postbox remains distinct.

## 3. Coordinate, image and access controls

All three official NIAH pages display coordinate pairs without a CRS label in the retrieved public page. The pairs were not transformed or published. All records have latitude=null, longitude=null, coordinate_status=NOT_SET and no map_url/map pin. No NIAH photographs were copied or reused; founder photography remains outstanding. Access is not asserted; photography briefs specify lawful public viewpoints and respect for property/campus rules.

## 4. Files updated

- data/objects.json: 577 → 580 master objects.
- data/niah-registered-objects.json: 457 → 460 registered NIAH records.
- data/sources.json: 695 → 698 sources.
- data/visual-assets.json: 577 → 580 visual records.
- places/DUB-INF-0207.html created.
- places/DUB-BLD-0284.html created.
- places/DUB-BLD-0285.html created.
- sitemap.xml: three canonical page URLs added.

## 5. Validation

Before publication, all four complete JSON files were parsed. Existing IDs/REG_NO values were unique and no exact REG_NO, normalized title, source-ID or visual-record duplicate was found for the three additions. After the additions: unique object IDs and NIAH registrations were rechecked; every new source ID resolves; every new registered entry has one matching master object; each visual record has a matching object; visual record_count matches records length; coordinates and map_url remain unset; all new page URLs are present in sitemap.

## 6. Evidence status and deployment

All three pages are SOURCE_VERIFIED_CORE based on their individual official NIAH pages. National CSV/FeatureServer row matching remains PENDING; none is marked NATIONAL_DATA_VERIFIED or FIELD_VERIFIED. GitHub repository writes and read-back are validated below. Live Pages deployment still requires an independent smoke test; no live deployment success is claimed in this report.

## 7. Next actions

1. Recheck GitHub Pages deployment and live URLs for all three new pages.
2. Continue exact national-row enrichment and the retrospective 454-record audit separately.
3. Continue Dublin City coverage with 3–5 new candidates, prioritising underrepresented small heritage infrastructure and overlooked details.
4. Keep the website design unchanged and preserve GitHub Pages hosting.

**Batch 051 result:** three individually registered Dublin NIAH records added with unique archive IDs, source records, visual plans, dedicated pages and sitemap entries. National-row matching and field verification remain pending.
