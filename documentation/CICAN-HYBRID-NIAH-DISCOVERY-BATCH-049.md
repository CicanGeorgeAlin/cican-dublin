# CICAN Dublin — Batch 049: Three Dublin NIAH Core Records Published to Repository

**Date:** 20 November 2026  
**Method:** Hybrid NIAH discovery, core publication and parallel national-data enrichment.  
**Result:** Three individual official NIAH records added to the master catalogue, registered-object catalogue, source registry, visual inventory, dedicated pages and sitemap.

## 1. Records added

### DUB-BLD-0281 — Iveagh Trust Buildings, Patrick Street blocks
- NIAH REG_NO: 50080685
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50080685/iveagh-trust-buildings-patrick-street-dublin-8-co-dublin
- Rating: Regional
- Special interest: Architectural, Artistic, Historical, Social
- Original/current use: Apartment/flat (purpose-built)
- Date range: 1900–1905; description says built 1901
- Date recorded: 21/11/2013
- Description and appraisal transcribed from the individual official page.
- Archive page: https://cicangeorgealin.github.io/cican-dublin/places/DUB-BLD-0281.html

### DUB-BLD-0282 — Iveagh Trust Buildings, Bride Street blocks
- NIAH REG_NO: 50080686
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50080686/iveagh-trust-buildings-bride-street-dublin-8-co-dublin
- Rating: Regional
- Special interest: Architectural, Artistic, Historical, Social
- Original/current use: Apartment/flat (purpose-built)
- Date range: 1900–1905; description says built 1904
- Date recorded: 31/12/2013
- Description and appraisal transcribed from the individual official page.
- Archive page: https://cicangeorgealin.github.io/cican-dublin/places/DUB-BLD-0282.html

The NIAH appraisal identifies the Patrick Street (Blocks A–D) and Bride Street (Blocks E–H) flats as components of the Iveagh Trust Scheme, designed by Joseph & Smithem with supervising architects Kaye-Parry & Ross. The NIAH describes their shared scheme history and states that the associated blocks housed 250 families. They remain two separate archive objects because they have separate NIAH registration numbers and separate individual records. No inferred parent-child relationship has been created.

### DUB-BLD-0283 — The Whitworth Building (formerly Whitworth Hospital)
- NIAH REG_NO: 50070337
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50070337/the-whitworth-building-morningstar-avenue-dublin-7-co-dublin
- Rating: Regional
- Special interest: Architectural, Historical, Social
- Previous name: Whitworth Hospital
- Original use: Hospital/infirmary; current use: Office
- Date range: 1815–1820; dated 1816
- Date recorded: 29/10/2012
- Description and appraisal transcribed from the individual official page.
- Archive page: https://cicangeorgealin.github.io/cican-dublin/places/DUB-BLD-0283.html

The official appraisal identifies it as a hospital built for the House of Industry and named after the Earl of Whitworth. It records the 1900 extensions by Carroll & Batchelor and describes its surviving institutional character and material detailing.

## 2. Coordinate and image controls

Each individual NIAH page displays a coordinate pair, but the public page does not label the coordinate reference system. The displayed pairs are preserved in this research note only:
- REG_NO 50080685: 315142, 233721
- REG_NO 50080686: 315262, 233720
- REG_NO 50070337: 314823, 234839

No pair was transformed or published as WGS84. All three new catalogue records have latitude=null, longitude=null, coordinate_status=NOT_SET, no map_url and no map pin. The archive pages explicitly explain why. No NIAH photographs were copied or reused; image reuse rights have not been established. Founder photography remains outstanding. Access is not asserted; residential blocks and office premises are to be observed only from lawful public viewpoints unless permission is obtained.

## 3. Hybrid publication status

All three are SOURCE_VERIFIED_CORE: each exact REG_NO and core factual content is supported by its opened individual official NIAH record; duplicate checks against the complete available master object catalogue, NIAH register, source registry and visual inventory passed. Their national CSV/FeatureServer row status remains PENDING. They are not marked NATIONAL_DATA_VERIFIED or FIELD_VERIFIED.

The public NIAH individual pages do expose their appraisal fields, which are included with attribution to the official record. The archive pages also state that national-row matching and field verification remain outstanding.

## 4. Files updated

- data/objects.json: 574 → 577 master objects.
- data/niah-registered-objects.json: 454 → 457 registered NIAH archive records.
- data/sources.json: 692 → 695 sources.
- data/visual-assets.json: 574 → 577 visual records; no photos falsely marked as captured.
- places/DUB-BLD-0281.html created.
- places/DUB-BLD-0282.html created.
- places/DUB-BLD-0283.html created.
- sitemap.xml: three canonical page URLs added with lastmod 2026-11-20.

## 5. Structural validation

Read-back verified all changed files. JSON parsed successfully. Checks passed:
- unique master object IDs;
- unique NIAH registration numbers;
- every source reference resolves in source registry;
- each new registration appears exactly once in the registered-object catalogue;
- each new record has a matching visual-inventory entry;
- visual record_count matches visual records length;
- all three records have no map coordinates or map_url;
- each new page has canonical metadata and exact registration number;
- all three page URLs appear in sitemap.

Counts after update: 577 master objects; 457 registered NIAH archive records; 695 sources; 577 visual records.

## 6. Deployment test status

GitHub repository writes and read-back succeeded. GitHub commit-status endpoint for the sitemap commit returned pending with no status checks. Direct requests to the live GitHub Pages URLs were inaccessible through the available web retrieval layer. Therefore this batch confirms repository publication and structural validation, but does not claim a successful live-site smoke test or completed Pages deployment. Recheck the live pages once GitHub Pages has processed the commits.

## 7. Next actions

1. Check GitHub Pages deployment and live URLs for all three pages.
2. Run the repository validator / website smoke test if available.
3. Continue with the next 3–5 individually registered Dublin candidates, checking complete catalogue duplicates first.
4. Enrich national rows for these three in parallel when an accessible official export becomes available.
5. Keep the retrospective 454-record audit active separately; do not return to Mack's Bridge as the sole focus.

**Batch 049 outcome:** Three substantial Dublin NIAH records have been added to the repository website catalogue with individual pages, source entries, visual plans and sitemap entries. Core source verification is complete; national-row matching and field verification remain explicitly pending. No unsupported coordinates or images were published.