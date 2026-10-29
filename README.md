# CICAN DUBLIN

**Created by CICAN GEORGE ALIN · Dublin, Ireland**

An evidence-first discovery, research, fieldwork and visual-preservation project documenting Dublin's historic environment at every scale — from major landmarks to inscriptions, individual bricks, cobblestones, street furniture and other overlooked details.

## Live website

https://cicangeorgealin.github.io/cican-dublin/

## Current catalogue

The catalogue currently contains **195 records** across Dublin 1, Dublin 2 and Dublin 3, linked to **265 source entries** and **22 research notes**. The current district distribution is 70 records in Dublin 1, 59 in Dublin 2 and 66 in Dublin 3. Recent research has added individually documented discoveries including historic post boxes, lamp standards, coal-hole covers, boot scrapers, railings and Georgian entrance details.

- **193 VERIFIED** records.
- **2 PARTIALLY_VERIFIED** records, where source inspection or specific details still require confirmation.
- **195 awaiting original founder photography**.
- No record is marked photographed, illustrated or published.

The visual inventory currently contains **96 third-party reference photographs across 77 locations**, each linked to a registered source and reuse licence. **118 of 195 catalogue records still need a reference photograph. Visual Discovery Batch 075 reviewed five additional Clontarf records and registered one unresolved Commons image lead for Clontarf Baths; no new photograph was approved because the individual file page and reuse licence could not be verified. See the [Visual Discovery Batch 075 report](documentation/VISUAL-DISCOVERY-BATCH-075.md).** Visual Discovery Batch 074 adds an exact-object, CC BY-SA 4.0 reference photograph of the Clontarf Promenade reinforced-concrete bandstand (DUB-BLD-0055); the image is credited to Malone0 and is not a founder original. See the [Visual Discovery Batch 074 report](documentation/VISUAL-DISCOVERY-BATCH-074.md) for provenance and other leads. Visual Discovery Batch 003 adds eight new location matches across Clontarf, including the Presbyterian church, promenade shelter, St Anthony's Hall, Brian Ború's Well and three historic post boxes; one additional image documents the Clontarf Road cast-iron structure as a field-comparison reference. Contextual images are explicitly distinguished from exact-object photographs. No third-party image is treated as founder photography. Visual Discovery Batch 004 adds four exact Clontarf matches (the Castle Avenue church and cemetery, the Seafield Road West Celtic cross, and Clontarf Garda Station) plus a Marino Crescent streetscape reference. See the [Visual Discovery Batch 060 report](documentation/VISUAL-DISCOVERY-BATCH-060.md), [Visual Discovery Batch 059 report](documentation/VISUAL-DISCOVERY-BATCH-059.md), [Visual Discovery Batch 001 report](documentation/VISUAL-DISCOVERY-BATCH-001.md), [Batch 002 report](documentation/VISUAL-DISCOVERY-BATCH-002.md) and [Batch 003 report](documentation/VISUAL-DISCOVERY-BATCH-003.md) for image matches, provenance and limitations. This is an expanding research inventory, not a complete survey of Dublin. 150 records currently carry source-derived WGS 84 map coordinates; 45 records are intentionally unmapped pending defensible location data. Coordinates are not founder-recorded GPS fixes and still require field verification.

## Locked map baseline

The current map-marker implementation is preserved as **MAP MARKER SYSTEM V1 BASELINE** on the [`baseline/v1-map-marker-system`](https://github.com/CicanGeorgeAlin/cican-dublin/tree/baseline/v1-map-marker-system) branch. Recovery commit: `afc74b4a0814a856efe5f6f97a4ad3bfebbcc0bb`. Future map improvements should preserve this reference point.

## CICAN DUBLIN mission

Discover every historically meaningful physical detail across Dublin. Investigate and verify each historical claim, identify a defensible location, and prepare fieldwork so the founder can visit and photograph the real feature. Preserve each original photograph, create faithful A4 line art from it, and develop separate themed colouring-book publications.

## Production workflow

DISCOVER → INVESTIGATE → VERIFY → LOCATE → PLAN FIELDWORK → FOUNDER PHOTOGRAPHS → PRESERVE ORIGINAL → CREATE A4 LINE ART → QUALITY CONTROL → PUBLISH ON CICAN DUBLIN → COLOURING-BOOK PUBLICATION.

## Integrity rules

- Every discovery receives one unique archive ID.
- Historical claims must be supported by sources.
- Verified records, partial verifications and research leads remain distinct.
- Never invent coordinates, object details, images or publication URLs.
- Photography is marked complete only after founder confirmation.
- Preserve original photographs separately from derivative artwork.
- Check for duplicates before creating records.
- Respect access, safety, copyright and photography restrictions.

## Repository structure

- `data/objects.json` — master object catalogue.
- `data/districts.json` — postal-district fieldwork zones.
- `data/coverage-zones.json` — Dublin local authorities and geographic coverage plan.
- `data/categories.json` — discovery taxonomy.
- `data/sources.json` — source registry.
- `data/research.json` — public, evidence-graded research notes and unresolved archival leads.
- `data/investigation.json` — claim-level evidence grades and the ordered investigation backlog.
- `schemas/` — JSON Schema contracts for objects, sources, geographic zones and the investigation register.
- `documentation/` — project standards, research batches and data architecture, including [Dublin 3 Discovery Batch 009](documentation/DUBLIN-3-DISCOVERY-BATCH-009.md) and [Batch 010](documentation/DUBLIN-3-DISCOVERY-BATCH-010.md) and [Batch 011](documentation/DUBLIN-3-DISCOVERY-BATCH-011.md), [Batch 012](documentation/DUBLIN-3-DISCOVERY-BATCH-012.md) and [Dublin 2 Batch 001](documentation/DUBLIN-2-DISCOVERY-BATCH-001.md), [Dublin 1 Batch 011](documentation/DUBLIN-1-DISCOVERY-BATCH-011.md) and [Dublin 2 Batch 002](documentation/DUBLIN-2-DISCOVERY-BATCH-002.md), and [Dublin 2 Batch 005](documentation/DUBLIN-2-DISCOVERY-BATCH-005.md).
- `routes/` — proposed and completed fieldwork plans.
- `research/` — source-based investigations.
- `photos/originals/` — founder's original photographs.
- `line-art/` — approved illustrations.
- `books/` — publication source files and metadata.

## Website

CICAN DUBLIN is a black, map-first discovery and fieldwork application with a searchable catalogue and evidence-led research feed. Its core functions include:

- Search across record names, IDs, addresses, categories, historical descriptions, periods, significance, references, research notes and photography briefs.
- Category and district filters.
- Name or district sorting.
- A record detail view with location, historical context, access notes, source links and photography checklist.
- A live catalogue overview showing total records, verified records and records awaiting photography.
- A **New research & discoveries** feed that publishes evidence-graded historical findings as they emerge, with source links, what is supported, and what remains unconfirmed.
- Research leads are deliberately separate from physical catalogue records and map pins; they become mapped objects only after location and evidence checks pass.

The website distinguishes historical research from physical catalogue records and founder field photography. It never presents stock or generated images as founder-captured originals.

## Investigation control system

The Clontarf Sheds investigation follows the locked [Investigation Control System](documentation/INVESTIGATION-CONTROL-SYSTEM.md). Evidence grades A–E describe how directly each claim has been checked; they are not popularity or confidence scores. The claim register, research chronology, correction log and prioritised next actions are maintained in `data/investigation.json`. Catalogue entries, secondary transcriptions and unseen map images are never treated as direct inspection of the underlying evidence. No historic footprint or map feature is promoted without documented source inspection and geographic support.

## Geographic and coordinate accuracy

**150 of 195 current records** have decimal WGS 84 coordinates derived from their published NIAH Irish Grid references (TM65 / Irish Grid, EPSG:29902), transformed using EPSG operation 1641. The original Irish Grid references remain preserved in the catalogue. Every WALK THERE link uses the record's latitude and longitude as its Google Maps walking destination, not an address or street-name search.

These are **source-derived map points, not founder-recorded GPS fixes**. NIAH dataset metadata explains that legacy point centroids were digitised relative to OSI 6-inch mapping and may need revision against larger-scale mapping. The EPSG coordinate transformation has a published 1 m accuracy, but that does not establish the accuracy of the underlying NIAH point. Field verification remains outstanding; no coordinate is labelled FIELD_VERIFIED until checked on site. Future records must retain a published coordinate reference or another documented source—never estimate a pin from an address.

Postal districts are operational research zones, not proof that an area has been fully surveyed.

## Social sharing

The homepage and archive page use the same 1200 × 630 CICAN feature image for Open Graph and large-card social previews. GitHub Actions renders the PNG from the repository's SVG source during deployment.

## Founder

CICAN GEORGE ALIN  
Dublin, Ireland
