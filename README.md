# CICAN DUBLIN

**Created by CICAN GEORGE ALIN · Dublin, Ireland**

An evidence-first discovery, research, fieldwork and visual-preservation archive documenting Dublin's historic environment at every scale — from major landmarks to inscriptions, individual bricks, cobblestones, street furniture and other overlooked details.

## Live website

https://cicangeorgealin.github.io/cican-dublin/

## Current catalogue

**Snapshot: 20 November 2026.** The production catalogue contains **460 records** linked to **577 registered source entries**.

- **324 VERIFIED** records.
- **135 PARTIALLY_VERIFIED** records, where evidence or specific details still require further checking.
- **1 RESEARCH_LEAD** record, retained as a lead rather than promoted to a verified object.
- **460 awaiting founder photography**; none is marked as founder-photographed.
- **460 visual-inventory entries**, one for every catalogue record.
- **133 registered reference-image entries** across the visual inventory.
- **424 of 460 records** have numeric latitude/longitude coordinates. These are source-derived map locations, not founder GPS fixes.

The figures above are separate measures: catalogue objects, source entries, visual-inventory records, reference-image entries and coordinate coverage must not be combined. The archive is a growing, evidence-led sample, not a claim of exhaustive coverage. See the [geographic coverage audit](data/coverage-audit.json), [visual inventory](data/visual-assets.json) and [source registry](data/sources.json).

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

The catalogue currently contains 460 records; 424 have numeric latitude and longitude values. Coordinates retain their documented source provenance and are not represented as founder-recorded GPS fixes. Some source coordinates locate a host building or wider site rather than the exact position of a small feature. Field verification remains outstanding unless explicitly recorded.

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
