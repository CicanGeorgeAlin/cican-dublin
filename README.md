# CICAN DUBLIN

**Created by CICAN GEORGE ALIN · Dublin, Ireland**

An evidence-first discovery, research, fieldwork and visual-preservation archive documenting Dublin's historic environment at every scale — from major landmarks to inscriptions, individual bricks, cobblestones, street furniture and other overlooked details.

## Live website

https://cicangeorgealin.github.io/cican-dublin/

## Stage 1: NIAH-registered Dublin catalogue

The live map and archive use `data/niah-registered-objects.json`, a curated Stage 1 collection containing **480 unique eight-digit NIAH registration numbers**. The 595-record master catalogue remains preserved in `data/objects.json` for provenance and later research; it is not the live Stage 1 display source. All 475 public registrations were exact-matched to the official national CSV in the 20 November 2026 Batch 054 quality run. This is a growing, partly researched tranche, not the complete Dublin NIAH inventory. The audited Building Survey denominator is 7,535 unique registrations across the four Dublin local authorities; the earlier 3,396 planning target is superseded.

Selection rules: only records whose `national_inventory_reference` field is exactly one eight-digit numeric NIAH reference are eligible. Repeated catalogue records carrying the same NIAH number are consolidated to one canonical record for the live Stage 1 collection. A canonical building/primary-object record is preferred over a separately catalogued detail when both share the same parent registration. The excluded records remain in the master catalogue; they have not been deleted.

Official-register audit checkpoint, 20 November 2026 after Batch 054: the official national CSV contains 48,327 rows. County=DUBLIN and the four Dublin local-authority values yield 7,535 unique Building Survey registrations: Dublin City 5,692; Fingal 667; South Dublin 790; Dún Laoghaire-Rathdown 386. The public Stage 1 register contains **475 unique registrations**, all **475/475 matched** by exact eight-digit REG_NO; official duplicate references: **0**; unassigned authority rows in the source dataset: **0**. **7,060 official registrations remain in the review queue.** This confirms registration-number presence, not full reconciliation of every description, appraisal, date or coordinate; do not infer NATIONAL_DATA_VERIFIED or FIELD_VERIFIED from the REG_NO audit alone. Batch 054 added five individually opened Dublin City records across Dublin 1, Dublin 2 and Dublin 3. All five remain SOURCE_VERIFIED_CORE and awaiting founder field photography. See the [Batch 054 report](documentation/CICAN-HYBRID-NIAH-DISCOVERY-BATCH-054.md), [geographic coverage audit](data/coverage-audit.json) and [source registry](data/sources.json). An exact register match does not independently validate present-day condition, access, field position or linked-image rights.

## Current public Stage 1 collection

**Snapshot: 20 November 2026, after Batch 054.** The live map and searchable archive use **475 NIAH-registered records**, while the master catalogue contains **595** physical-object records. The public register has 475 unique eight-digit registration numbers, all exact-matched to the official national CSV. The four-authority Building Survey denominator is 7,535 unique registrations; 7,060 remain in the official review queue. Full field-level reconciliation remains separate: SOURCE_VERIFIED_CORE is not the same as NATIONAL_DATA_VERIFIED or FIELD_VERIFIED.

Batch 054 added five individually opened Dublin City registrations: 50010553 (43 O'Connell Street Upper), 50060501 (43 Capel Street), 50910149 (2 St. Andrew Street), 50120242 (52 Bayview Avenue) and 50120246 (56 Bayview Avenue). The archive now contains 713 source records and 595 visual photography plans. The five new records have no published coordinates or map pins because the individual-page coordinate pairs are not labelled with a coordinate reference system. All five await lawful founder field photography. The official audit found zero duplicate NIAH references. The archive remains a growing evidence-led sample, not a claim of exhaustive coverage. See the [Batch 054 report](documentation/CICAN-HYBRID-NIAH-DISCOVERY-BATCH-054.md), [geographic coverage audit](data/coverage-audit.json), [visual inventory](data/visual-assets.json) and [source registry](data/sources.json).
## Locked map baseline

The current map-marker implementation is preserved as **MAP MARKER SYSTEM V1 BASELINE** on the [baseline/v1-map-marker-system branch](https://github.com/CicanGeorgeAlin/cican-dublin/tree/baseline/v1-map-marker-system). Recovery commit: `afc74b4a0814a856efe5f6f97a4ad3bfebbcc0bb`. Future map improvements must preserve this reference point.

## Mission

Discover historically meaningful physical details across Dublin City and County Dublin, including overlooked street objects, architectural fragments, industrial and transport remnants, archaeological traces, inscriptions and other heritage hidden in plain sight. Investigate and verify each historical claim, identify a defensible location, and prepare fieldwork so the founder can visit and photograph the real feature.

A missing online photograph is a fieldwork opportunity, not a reason to abandon a well-supported discovery. Preserve each original photograph, create faithful A4 line art from it, and develop separate themed colouring-book publications.

## Production workflow

DISCOVER → INVESTIGATE → VERIFY → LOCATE → PLAN FIELDWORK → SEARCH FOR REFERENCE IMAGES → FOUNDER PHOTOGRAPHS → PRESERVE ORIGINAL → CREATE A4 LINE ART → QUALITY CONTROL → PUBLISH ON CICAN DUBLIN → COLOURING-BOOK PUBLICATION.

Research and catalogue expansion run alongside visual research. Third-party reference images, founder originals, contextual images and rights-pending leads remain distinct. The visual inventory records photography and illustration work still to be completed.

## Integrity rules

- Every discovery receives one unique archive ID.
- Historical claims must be supported by traceable sources.
- Verified records, partial verifications and research leads remain distinct.
- A missing photograph never blocks a well-supported discovery from being catalogued.
- Exact-object photographs, contextual photographs, founder originals and rights-pending leads must be labelled separately.
- Never invent coordinates, object details, images, citations or publication URLs.
- Photography is marked complete only after founder confirmation.
- Preserve original photographs separately from derivative artwork.
- Check for duplicates before creating records.
- Respect access, safety, copyright and photography restrictions.
- Postal districts and settlement names are operational research zones, not proof of local-authority assignment or exhaustive survey coverage.

## Repository structure

- `data/objects.json` — master physical-object catalogue.
- `data/districts.json` — postal-district fieldwork zones.
- `data/coverage-zones.json` — Dublin local authorities and geographic coverage plan.
- `data/coverage-audit.json` — dated coverage counts and explicit administrative-assignment limitations.
- `data/categories.json` and `data/taxonomy.json` — discovery categories and feature types.
- `data/sources.json` — registered source catalogue.
- `data/visual-assets.json` — per-record photography plans, image provenance and line-art status.
- `data/research.json` — public, evidence-graded research notes and unresolved archival leads.
- `data/investigation.json` — claim-level evidence grades and ordered investigation backlog.
- `schemas/` — JSON Schema contracts for archive data.
- `documentation/` — project standards, research batches and data architecture.
- `routes/` — proposed and completed fieldwork plans.
- `research/` — source-based investigations.
- `photos/originals/` — founder's original photographs.
- `line-art/` — approved illustrations.
- `books/` — publication source files and metadata.

## Website

CICAN DUBLIN is a black, map-first discovery and fieldwork application with a searchable catalogue and evidence-led research feed. Its core functions include:

- Search across record names, IDs, addresses, categories, historical descriptions, periods, significance, references, research notes and photography briefs.
- Category and district filters, plus name or district sorting.
- Record details with location, historical context, access notes, source links and photography checklist.
- A live catalogue overview showing record and verification totals and the photography queue.
- A **New research & discoveries** feed with source links, supported findings and unresolved questions.
- Research leads kept separate from physical catalogue records and map pins until identity, evidence and location checks pass.

The website distinguishes historical research from physical catalogue records and founder field photography. It never presents stock or generated images as founder-captured originals.

## Geographic and coordinate accuracy

The catalogue currently contains 595 records; 538 have numeric latitude and longitude values. Coordinates retain their documented source provenance and are not represented as founder-recorded GPS fixes. Some source coordinates locate a host building or wider site rather than the exact position of a small feature. Field verification remains outstanding unless explicitly recorded.

The four Dublin local authorities are included in the coverage framework, but records have **not yet been spatially assigned to authority boundaries**. Postal districts and settlement labels are work-zone groupings only. Do not infer local-authority coverage from them. See the [coverage audit](data/coverage-audit.json) for the current limitations and next actions.

## Investigation control system

The Clontarf Sheds investigation follows the [Investigation Control System](documentation/INVESTIGATION-CONTROL-SYSTEM.md). Evidence grades A–E describe how directly each claim has been checked; they are not popularity or confidence scores. The claim register, research chronology, correction log and prioritised next actions are maintained in `data/investigation.json`.

## Social sharing

The homepage and archive page use a 1200 × 630 CICAN feature image for Open Graph and large-card social previews. GitHub Actions renders the PNG from the repository's SVG source during deployment.

## Quality and deployment

GitHub Actions runs JavaScript syntax checks, generates crawlable place pages and the sitemap, validates catalogue integrity, visual inventory, source references, links and supporting data, then deploys the static website to GitHub Pages. A successful workflow is evidence of build and automated validation success; live browser, physical-device GPS and field-access checks are reported separately and must not be assumed from a green workflow alone.

- [Production website](https://cicangeorgealin.github.io/cican-dublin/)
- [GitHub repository](https://github.com/CicanGeorgeAlin/cican-dublin)
- [Deployment workflow](https://github.com/CicanGeorgeAlin/cican-dublin/actions/workflows/pages.yml)
- [Archive quality workflow](https://github.com/CicanGeorgeAlin/cican-dublin/actions/workflows/quality.yml)

## Founder

**CICAN GEORGE ALIN**  
Dublin, Ireland


## Latest research checkpoint — Batch 057 (21 November 2026)

Batch 057 adds five individually consulted official Dublin City NIAH records: 50010616 (77 Parnell Street; DUB-BLD-0311), 50100219 (National Library of Ireland, Kildare Street; DUB-BLD-0312), 50110133 (2 Lennox Place; DUB-BLD-0313), 50110205 (1 Harrington Street; DUB-BLD-0314), and 50010446 (The Goodwill Thrift Shop, 142 Capel Street; DUB-BLD-0315). Five master objects, five public NIAH core records, five official sources and five visual photography plans were added. New totals: 610 master objects, 490 public NIAH records, 728 sources and 610 visual records. All five are SOURCE_VERIFIED_CORE; the workflow's official national CSV audit must confirm exact REG_NO matches. Coordinates remain unset pending separate national-row/ITM reconciliation and positional-accuracy assessment. No map pins or NIAH photographs were added. The full existing master and public NIAH catalogues were checked for registration collisions; the master was checked for archive-ID, normalized name and normalized address collisions; source IDs were checked. No collisions were found. See [Batch 057](documentation/CICAN-HYBRID-NIAH-DISCOVERY-BATCH-057.md). The completed national CSV audit matched all 490/490 archive registrations against 48,327 official source rows. The four-authority Dublin denominator is 7,535 unique registrations (Dublin City 5,692; Fingal 667; South Dublin 790; Dún Laoghaire-Rathdown 386), with zero unassigned authority rows and zero official duplicate registrations. The 7,045 remaining registrations are a combined four-authority review queue, not Dublin City-only. The archive quality gate, coverage audit and GitHub Pages deployment all succeeded; 490 crawlable pages and a 493-URL sitemap were generated. See workflow runs 44862701796 (quality), 44862701807 (deployment) and 44862701626 (Pages build). This confirms registration matching, not field verification or precise coordinate accuracy.
