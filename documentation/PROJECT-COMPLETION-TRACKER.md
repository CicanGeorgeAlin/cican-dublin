# CICAN DUBLIN — Project Completion Tracker

**Baseline date:** 20 November 2026  
**Repository:** CicanGeorgeAlin/cican-dublin  
**Purpose:** Track progress toward a reliable, evidence-led Dublin heritage archive and a fully tested public website. This tracker separates measurable completion from unknown inventory size and fieldwork that cannot yet be counted.

## 1. Executive status

**Provisional measured-readiness index: 34%**

This is a planning indicator, not a claim that 34% of Dublin's heritage has been discovered or that the website is 34% built. It averages only the four measurable workstreams below, weighted by their agreed planning importance, and excludes the still-unknown NIAH census denominator and wider non-NIAH heritage universe.

| Workstream | Weight in measured index | Current score | Evidence / calculation |
|---|---:|---:|---|
| Website/platform and automated delivery | 20% | 80% | Map-first application, catalogue, search/filter/detail and automated quality/deployment workflows exist; final live Android/device and end-to-end checks remain outstanding. |
| Catalogue evidence verification | 20% | 70.4% | 324 VERIFIED / 460 records = 70.4%; 135 PARTIALLY_VERIFIED; 1 RESEARCH_LEAD. |
| Geographic authority assignment | 15% | 0% | 0 of 460 records spatially assigned to the four local authorities in the 20 Nov coverage audit. |
| Visual reference coverage | 20% | 23.5% | 108 of 460 records have at least one registered reference image = 23.5%. |
| **Measured subtotal** | **75%** | **34% weighted average** | (20×0.80 + 20×0.704 + 15×0 + 20×0.235) / 75 = 0.344. Rounded to 34%. |

**Unscored / unknown inventory work: 25% of the planned index.** The current exact number of NIAH records across all four Dublin authorities has not yet been extracted and reconciled. Wider non-NIAH heritage (archaeology, industrial heritage, micro-features, street furniture, inscriptions and field discoveries) has no finite complete denominator. Do not silently count this unknown work as complete or incomplete.

The 80% platform score is an explicit planning estimate based on implemented code and successful automated workflows, not a live runtime certification. It must be replaced by a checklist score after physical-device testing.

## 2. Verified production baseline

README snapshot and data files inspected on 20 November 2026:

- 460 catalogue objects.
- 577 registered sources.
- 324 VERIFIED, 135 PARTIALLY_VERIFIED, 1 RESEARCH_LEAD.
- 460 visual inventory records.
- 133 registered reference-image entries.
- 108 of 460 records have one or more reference images.
- 99 OBJECT_PHOTOGRAPH references, 32 STREET_CONTEXT references and 2 DETAIL_PHOTOGRAPH references.
- 460 records awaiting founder photography.
- 0 founder original photographs recorded in the visual inventory.
- 460 records waiting for original photographs before line art.
- 460 galleries marked NOT_YET_PUBLISHED.
- 424/460 have numeric latitude/longitude (92.2%); these are source-derived coordinates, not founder GPS fixes.
- 0 records spatially assigned to a verified local-authority polygon in the coverage audit.
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

A 17 November 2026 repository audit reported 439 catalogue records with an NIAH registration reference at a then-current 451-record baseline. This older count is not yet reconciled to the 460-record 20 November snapshot. Therefore no NIAH coverage percentage is certified at this baseline.

**NIAH completion formula once the census is complete:**
- Denominator = unique current NIAH registrations whose official local-authority assignment is one of the four Dublin authorities, extracted from the current national source and date-stamped.
- Numerator = those unique NIAH registrations reconciled to a CICAN catalogue object, with exact match, partial match, conflict or missing status.
- Report separate rates for reconciled, fully researched, field-located and founder-photographed records. Do not call simple catalogue matches fully complete.

## 4. Full completion checklist

### A. Official NIAH census and integration
- [ ] Obtain the current national NIAH extract / live feature query.
- [ ] Extract all records for Dublin City, Fingal, South Dublin and Dún Laoghaire–Rathdown.
- [ ] Confirm local-authority values against official boundaries where necessary.
- [ ] Deduplicate registration numbers and preserve source rows.
- [ ] Build a machine-readable NIAH staging index.
- [ ] Reconcile every NIAH registration against all 460 catalogue objects.
- [ ] Classify each as exact match, probable match, conflict, new candidate or out of scope.
- [ ] Import only verified missing objects; add source references to existing matches.
- [ ] Add an explicit NIAH register filter/layer without implying RPS status.
- [ ] Re-run schema, duplicate, link, image and deployment validation.

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
4. Reconciliation against the complete 460-object catalogue.
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

**Baseline integrity note:** The production README and visual asset file were inspected on 20 November 2026. The visual inventory currently shows 460/460 awaiting founder photography, 460/460 awaiting original-photo-based line art and 460/460 galleries not yet published. These are material outstanding workstreams even though the website and automated deployment are already operational.
