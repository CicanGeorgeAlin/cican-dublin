# CICAN Dublin — Batch 051: Three Dublin NIAH Records Published

**Date:** 2026-11-20. Three individual official NIAH records were opened and added to the master catalogue, registered-object catalogue, source registry, visual inventory, dedicated archive pages and sitemap.

## DUB-INF-0207 — Bachelor’s Walk
- NIAH REG_NO: 50060551
- Official individual record: https://www.buildingsofireland.ie/buildings-search/building/50060551/bachelors-walk-dublin-city
- Rating: Regional; special interest: Architectural, Social, Technical
- Use: Quay/wharf → Quay/wharf
- Date range: 1790–1810; built c.1800; date recorded: 02/09/2014
- Archive page: https://cicangeorgealin.github.io/cican-dublin/places/DUB-INF-0207.html

## DUB-BLD-0284 — Trinity City Hotel (former Central Fire Station)
- NIAH REG_NO: 50020320
- Official individual record: https://www.buildingsofireland.ie/buildings-search/building/50020320/trinity-city-hotel-tara-street-pearse-street-dublin-2-dublin
- Rating: Regional; special interest: Architectural, Artistic, Historical, Social, Technical
- Use: Fire station → Hotel
- Date range: 1905–1910; built 1906; date recorded: 24/03/2015
- Archive page: https://cicangeorgealin.github.io/cican-dublin/places/DUB-BLD-0284.html

## DUB-BLD-0285 — Drumcondra Road Upper — St Patrick’s Campus gate screen and boundary walls
- NIAH REG_NO: 50130155
- Official individual record: https://www.buildingsofireland.ie/buildings-search/building/50130155/drumcondra-road-upper-dublin-9-co-dublin
- Rating: Regional; special interest: Architectural, Historical, Social
- Use: Gates/railings/walls → Gates/railings/walls
- Date range: 1890–1915; gate screen built 1910–1912; associated gateway dated 1894; date recorded: 20/06/2018
- Archive page: https://cicangeorgealin.github.io/cican-dublin/places/DUB-BLD-0285.html

## Duplicate and relationship audit
Complete canonical files recovered and parsed: 577 master objects, 457 registered NIAH records, 695 sources and 577 visual records. Exact REG_NO, title, source and visual checks passed. Drumcondra gate screen 50130155 is kept separate from co-located former college 50130152, old chapel 50130151, new chapel 50130154 and separately catalogued P&T postbox 50120002. No assets were merged.

## Coordinate, image and access controls
All three public NIAH coordinate pairs are unlabelled CRS; none are transformed or published. All new records have null latitude/longitude, coordinate_status NOT_SET and no map_url. No NIAH images reused. No field verification or access permission claimed.

## Updated totals
- Master objects: 577 → 580
- Registered NIAH objects: 457 → 460
- Sources: 695 → 698
- Visual records: 577 → 580

## Evidence status and next actions
All three pages are SOURCE_VERIFIED_CORE. National CSV/FeatureServer row matching remains PENDING; none is NATIONAL_DATA_VERIFIED or FIELD_VERIFIED. Live Pages deployment needs a separate smoke test. Continue 3–5 Dublin candidates per batch and maintain the retrospective audit separately.


## Post-publication repository validation (20 November 2026)

All updated canonical files were fetched again from GitHub and parsed successfully. Final totals: 580 master objects, 460 registered NIAH records, 698 sources, 580 visual records; visual record_count is 580. Global duplicate checks found no repeated master IDs, registered IDs, NIAH REG_NO values, source IDs or visual record IDs. Every registered record's source references resolve; every registered and visual record has a matching master object. Each new record appears exactly once in all four data inventories, has null latitude/longitude and no map_url, and each of the three page URLs is present in sitemap.xml. All three page files, the Batch 051 report and the CONTINUE-AUTOPILOT checkpoint were read back successfully. Exact official NIAH page titles were recorded in the source registry. The three live GitHub Pages URLs and site root remained inaccessible through the web retrieval layer; this is inconclusive and is not treated as a deployment failure. The GitHub combined commit-status endpoint returned no status checks. Therefore repository publication and structural validation are confirmed; live production rendering remains unverified.
