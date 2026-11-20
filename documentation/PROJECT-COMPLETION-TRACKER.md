# CICAN DUBLIN — Project Completion Tracker

**Baseline date:** 20 November 2026  
**Repository:** CicanGeorgeAlin/cican-dublin  
**Purpose:** Track progress toward a reliable, evidence-led Dublin heritage archive and a fully tested public website. This tracker separates measurable completion from unknown inventory size and fieldwork that cannot yet be counted.

## 1. Executive status

**Provisional measured-readiness index: 42%**

This is a planning indicator, not a claim that 42% of Dublin's heritage has been discovered or that the website is 42% built. It averages only the four measurable workstreams below, weighted by their agreed planning importance. The NIAH Building Survey denominator is now measured; the wider non-NIAH heritage universe remains unbounded.

| Workstream | Weight in measured index | Current score | Evidence / calculation |
|---|---:|---:|---|
| Website/platform and automated delivery | 20% | 80% | Map-first application, catalogue, search/filter/detail and automated quality/deployment workflows exist; final live Android/device and end-to-end checks remain outstanding. |
| Catalogue evidence verification | 20% | 56.4% | 324 VERIFIED / 574 records = 56.4%; 249 PARTIALLY_VERIFIED; 1 RESEARCH_LEAD. |
| Geographic authority assignment | 15% | 0% | 0 of 574 records spatially assigned by point-in-polygon to the four local authorities; CSV authority labels are not a substitute for spatial assignment. |
| Visual reference coverage | 20% | 18.8% | 108 of 574 records have at least one registered reference image = 18.8%. |
| **Measured subtotal** | **75%** | **42% weighted average** | (20×0.80 + 20×0.577 + 15×0 + 20×0.192) / 75 = 0.418. Rounded to 42%. |

**Unscored / unknown inventory work: 25% of the planned index.** The current official NIAH Building Survey denominator is measured at 7,535 registrations across the four Dublin authorities. Wider non-NIAH heritage (archaeology, industrial heritage, micro-features, street furniture, inscriptions and field discoveries) has no finite complete denominator. Do not silently count this unknown work as complete or incomplete.

The 80% platform score is an explicit planning estimate based on implemented code and successful automated workflows, not a live runtime certification. It must be replaced by a checklist score after physical-device testing.

## 2. Verified production baseline

README snapshot and data files inspected after NIAH Batch 033 on 20 November 2026:

- 574 catalogue objects.
- 692 registered sources.
- 324 VERIFIED, 237 PARTIALLY_VERIFIED, 1 RESEARCH_LEAD.
- 574 visual inventory records.
- 133 registered reference-image entries.
- 108 of 574 records have one or more reference images (18.8%).
- 99 OBJECT_PHOTOGRAPH references, 32 STREET_CONTEXT references and 2 DETAIL_PHOTOGRAPH references.
- 574 records awaiting founder photography.
- 0 founder original photographs recorded in the visual inventory.
- 574 records waiting for original photographs before line art.
- 574 galleries marked NOT_YET_PUBLISHED.
- 538/574 have numeric latitude/longitude (93.7%); these are source-derived coordinates, not founder GPS fixes.
- 0 records spatially assigned to a verified local-authority polygon in the coverage audit.
- 454 unique NIAH registrations in the public collection, all exact-matched to the official CSV.
- Four Dublin local-authority areas are in scope: Dublin City, Fingal, South Dublin and Dún Laoghaire–Rathdown.

Counts are separate measures and must not be added together.

## 3. NIAH scope and denominator

The archive scope is all four Dublin local-authority areas, not Dublin City alone.

The official NIAH Data Download page provides a Dublin CSV described as Dublin City, Fingal and South Dublin County. Dún Laoghaire–Rathdown is not included in that regional CSV description; it must be covered from the national live feature service or Historic Environment Viewer extract.

The official NIAH dataset currently advertises:
- National live Feature Service.
- National CSV bulk snapshot, with data.gov.ie metadata updated 10 November 2026.
- NIAH Dublin regional CSV, refreshed biannually according to the NIAH download page.
- Separate coordinate fields for ITM, latitude/longitude and National Grid; official use should retain the explicitly labelled ITM fields and source provenance.

A Dáil written answer from 31 March 2021 listed 5,802 NIAH structures recommended to the four Dublin authorities (Fingal 664; South Dublin 788; Dublin City 3,967; Dún Laoghaire–Rathdown 383). This is a dated 2021 recommendation baseline, **not** a verified current 2026 count of every NIAH record. It must not be used as the final denominator.

**Current official census, 20 November 2026:** the national NIAH CSV contains 48,327 rows. Filtering County=DUBLIN and the four local authorities yields 7,535 unique Building Survey registrations: Dublin City 5,692; Fingal 667; South Dublin 790; Dún Laoghaire-Rathdown 386. The public CICAN collection contains 442 unique registrations, all exact-matched to the CSV; 7,093 remain in the review queue. Exact registration reconciliation is 442 / 7,535 = 5.9%; this is not a measure of full historical research, field location or photography completion. The earlier 3,396 working target is superseded.

**NIAH completion calculation at the current audited snapshot:**
- Denominator = **7,535** unique current Building Survey registrations across the four Dublin authorities.
- Numerator = **454** unique registrations reconciled to CICAN and exact-matched to the official national CSV.
- Missing from the public collection = **7,081**.
- Exact registration reconciliation = **5.9%**. This is not the same as fully researched, field-located or founder-photographed completion. Report those measures separately.

## 4. Full completion checklist

### A. Official NIAH census and integration
- [x] Obtain the current national NIAH extract / live feature query.
- [x] Extract all records for Dublin City, Fingal, South Dublin and Dún Laoghaire–Rathdown.
- [ ] Confirm local-authority values against official boundaries where necessary; point-in-polygon assignment remains outstanding.
- [x] Deduplicate official registration numbers and preserve source rows.
- [x] Build a machine-readable NIAH staging index and missing-registration queue.
- [x] Reconcile all 7,535 official registrations against the 574-object master: 454 exact matches and 7,081 missing.
- [x] Classify exact matches and missing registrations; probable/conflict review remains a separate task.
- [x] Import Batch 030: 100 new official registrations, 25 per authority, as PARTIALLY_VERIFIED objects with source and visual entries.
- [x] Import Batch 031: six individual-page-checked Cooldrinagh registrations with official CSV coordinate provenance, source and visual entries.
- [ ] Continue reviewing and importing the remaining 7,081 registrations in batches of up to 100.
- [ ] Confirm the explicit NIAH register filter/layer and its labels do not imply RPS status.
- [x] Re-run schema, duplicate, link, image and deployment validation for Batch 030.
- [ ] Re-run and record the post-Batch-031 quality gate and Pages deployment.

### B. Wider heritage discovery beyond NIAH
- [ ] National Monuments Service / Historic Environment Viewer records.
- [ ] Record of Monuments and Places and archaeological constraints.
- [ ] Four current Records of Protected Structures (kept distinct from NIAH).
- [ ] Industrial, transport, maritime, military and ecclesiastical heritage.
- [ ] Historic street furniture, pumps, post boxes, milestones, boundary markers and small urban objects.
- [ ] Inscriptions, plaques, memorials, architectural fragments, cobbles and micro-details.
- [ ] Specialist local studies, historic maps, graveyard surveys and conservation plans.
- [ ] Evidence-led settlement and townland coverage plans.
- [ ] Explicit research-lead register for uncertain identities and missing records.

There is no honest finite total for every historic object and micro-feature in Dublin. Completion here means systematic coverage with transparent gaps, not claiming that every possible object has been found.

### C. Catalogue and evidence
- [ ] Each object has a unique stable CICAN ID.
- [ ] Every historical claim has traceable source provenance.
- [ ] Exact NIAH/RPS/NMS references checked where applicable.
- [ ] Duplicate audit against the complete canonical catalogue.
- [ ] Conflicts, alternate names and coordinate differences preserved.
- [ ] Verification status assigned accurately.
- [ ] Access, ownership, safety and photography restrictions documented.
- [ ] Record details and source links checked.
- [ ] No source-derived coordinate is represented as founder GPS.

### D. Geography and mapping
- [ ] Import and validate the official 2026 local-authority boundary data after licence review.
- [ ] Import statutory townland boundaries and preserve source IDs and CRS.
- [ ] Spatially assign eligible records to the four authorities.
- [ ] Resolve points near boundaries and points with insufficient coordinate precision.
- [ ] Keep postal districts and settlements as work zones, not legal boundaries.
- [ ] Resolve all missing or suspect coordinates.
- [ ] Separate host-building coordinates from exact micro-feature positions.
- [ ] Add only defensible map pins.
- [ ] Preserve the locked MAP MARKER SYSTEM V1 baseline.

### E. Visual archive and founder fieldwork
- [ ] Find rights-cleared reference images where useful and record exact source, creator, licence and attribution.
- [ ] Distinguish exact-object photographs from context images and details.
- [ ] Plan founder photography routes for all eligible catalogue records.
- [ ] Capture and archive founder originals with date, location and credit.
- [ ] Verify that each photograph depicts the exact object.
- [ ] Create faithful A4 300-DPI line art from founder originals or separately authorised sources.
- [ ] Preserve originals separately from derivatives.
- [ ] Complete image and line-art quality checks.
- [ ] Publish galleries only when the image provenance and content are approved.

### F. Website completion and runtime testing
- [x] Map-first application and catalogue data structure exist.
- [x] Search, filters, record details and research feed are implemented in the current project baseline.
- [x] Automated JavaScript/data/schema/link/image checks run in GitHub Actions.
- [x] GitHub Pages deployment workflow exists and recent batches passed.
- [ ] Add/validate a dedicated NIAH register layer and filter.
- [ ] Verify all current records and source links render correctly.
- [ ] Test map tiles, clusters, zoom performance and responsive layout on physical Android and desktop devices.
- [ ] Test precise location permission and a real GPS fix on Android.
- [ ] Test search, category/district filters, details, image viewer, save/unsave and navigation.
- [ ] Test walking directions and external map handoff.
- [ ] Test offline/service-worker behaviour and cache refresh.
- [ ] Test social preview, favicon, sitemap and crawlable place pages.
- [ ] Run accessibility, contrast, keyboard and touch-target checks.
- [ ] Run full quality gate and production deployment after final changes.
- [ ] Record a dated final acceptance test with screenshots/device/browser details.

### G. Publication and maintenance
- [ ] Public methodology and source/provenance explanation.
- [ ] Clear distinction between NIAH, RPS and NMS designations.
- [ ] Coverage dashboard with dated denominators and gaps.
- [ ] Research correction and update procedure.
- [ ] Image rights and attribution audit.
- [ ] Backup and recovery test.
- [ ] Versioned releases and change log.
- [ ] Ongoing NIAH and local-authority update monitoring.

## 5. How the percentage will move

Each future batch updates:
1. NIAH census denominator and reconciliation numerator, once measured.
2. Catalogue total and verification status.
3. Spatially assigned records and unresolved coordinates.
4. Reference-image coverage and founder-photo count.
5. Line-art and published-gallery counts.
6. Website checklist pass count and latest workflow/runtime evidence.
7. New unresolved conflicts and duplicate corrections.

**Going forward:** the score increases only when a defined acceptance test is passed or a measurable item is completed. It can decrease if a new official dataset reveals previously unknown records, an audit finds errors, or the scope is expanded. That is not failure; it is honest measurement.

Never increase the percentage merely because a research batch was written or a commit was made. A research report is work completed, but it does not automatically mean the discovered object is fully archived.

## 6. Immediate next milestone

**Milestone 1 — NIAH Dublin Census V1**

Deliverables:
1. Date-stamped current national extract.
2. Four-authority NIAH total, broken down by authority.
3. Unique registration-number list and coordinate provenance.
4. Reconciliation against the complete 574-object catalogue.
5. Exact missing-registration queue.
6. Reproducible script/report and quality checks.

Only after this milestone can we publish a defensible NIAH coverage percentage and replace the provisional 34% index with a more complete project-wide measure.

## 7. Source references

- NIAH Data Download: https://www.buildingsofireland.ie/niah-data-download/
- National NIAH dataset and live Feature Service metadata: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/cac7450a-38b6-4016-9b7a-39b4efda00d5
- National CSV resource metadata: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/433f91ea-0b54-4753-99b2-d484baf2c7ec
- Live NIAH Feature Service: https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/ArcGIS/rest/services/NIAHBuildingsOpenData/FeatureServer
- NIAH Historic Environment Viewer: https://www.archaeology.ie/advice-and-support/locate-a-monument-or-wreck/historic-environment-viewer/
- Dáil written answer, 31 March 2021, Dublin NIAH recommendation counts: https://data.oireachtas.ie/ie/oireachtas/debateRecord/dail/2021-03-31/writtens/mul%40/main.pdf
- Tailte Éireann boundary data: https://tailte.ie/map-shop/professional-map-products/boundary-data/

**Baseline integrity note:** The production README and visual asset file were inspected on 20 November 2026. The visual inventory currently shows 574/574 awaiting founder photography, 574/574 awaiting original-photo-based line art and 574/574 galleries not yet published. These are material outstanding workstreams even though the website and automated deployment are already operational.


## Latest production update — NIAH Batch 031 (20 November 2026)

Six Cooldrinagh / Leixlip NIAH registrations were checked against their individual Buildings of Ireland pages and matched to the official national CSV by exact REG_NO: 11201005, 11201007, 11201010, 11201011, 11201012 and 11201014. All six passed full-master, public-collection and source-registry duplicate checks and were added to the master catalogue, public NIAH collection, source registry and visual inventory. Totals are now 568 master objects, 448 public NIAH registrations, 686 sources and 568 visual records. The public collection remains 448/7,535 = 5.9%, with 7,087 registrations in the review queue. The six additions are PARTIALLY_VERIFIED, SOURCE_DERIVED and awaiting founder photography; no NIAH photographs were reused. See [NIAH Cooldrinagh Verification & Publication Batch 031](NIAH-COOLDRINAGH-VERIFICATION-PUBLICATION-BATCH-031.md).


## Latest production update — NIAH Batch 032 (20 November 2026)

One Lucan Demesne weir registration (11201017) was checked against its individual Buildings of Ireland record page and matched to the official national CSV by exact REG_NO. Full-master, public-collection and source-registry duplicate checks returned zero matches. One master object, one public NIAH entry, one official source and one visual-workflow entry were added. The CSV's ITM EPSG:2157 and WGS84 coordinates are preserved; the unlabelled coordinate pair displayed on the individual page is not used for mapping. The record is PARTIALLY_VERIFIED and SOURCE_DERIVED, awaiting founder photography; access and present condition remain unverified. Totals are 569 master objects, 449 public NIAH registrations, 687 sources and 569 visual records. The public collection is 449/7,535 = 6.0%, with 7,086 registrations remaining in the review queue. See [NIAH Lucan Demesne Weir Verification & Publication Batch 032](NIAH-LUCAN-DEMESNE-WEIR-VERIFICATION-PUBLICATION-BATCH-032.md).


## Latest production update — NIAH Batch 033 (20 November 2026)

Five Cooldrinagh / Leixlip registrations were checked against their individual Buildings of Ireland pages and matched to the official national CSV by exact REG_NO: 11201008, 11201009, 11201013, 11201015 and 11201016. All five passed full-master, public-collection and source-registry duplicate checks and were added to the master catalogue, public NIAH collection, source registry and visual inventory. Official CSV ITM EPSG:2157 and WGS84 coordinates are preserved; unlabelled individual-page coordinate pairs are not used for mapping. All five records are PARTIALLY_VERIFIED and SOURCE_DERIVED, awaiting founder photography; access and present condition remain unverified. A possible physical relationship between gate piers in 11201008 and the outbuilding group in 11201009 is explicitly held unresolved to avoid double-counting. Totals are 574 master objects, 454 public NIAH registrations, 692 sources and 574 visual records. The public collection is 454/7,535 = 6.0%, with 7,081 registrations remaining in the review queue. See [NIAH Cooldrinagh Verification & Publication Batch 033](NIAH-COOLDRINAGH-VERIFICATION-PUBLICATION-BATCH-033.md).
