# CICAN DUBLIN

**Created by CICAN GEORGE ALIN · Dublin, Ireland**

An evidence-first discovery, research, fieldwork and visual-preservation project documenting Dublin's historic environment at every scale — from major landmarks to inscriptions, individual bricks, cobblestones, street furniture and other overlooked details.

## Live website

https://cicangeorgealin.github.io/cican-dublin/

## Current catalogue

The catalogue currently contains **370 records** across Dublin City and County Dublin, linked to **488 registered source entries**. Postal-district labels and settlement names are work-zone groupings, not verified local-authority boundary assignments. See the [geographic coverage audit](data/coverage-audit.json) and the [Step 4 geographic coverage audit](documentation/COVERAGE-AUDIT-STEP-4.md).

- **319 VERIFIED** records.
- **50 PARTIALLY_VERIFIED** records, where source inspection or specific details still require field confirmation.
- **1 RESEARCH_LEAD** record(s), retained as leads rather than promoted to verified objects.
- **370 awaiting original founder photography**.
- No record is marked photographed, illustrated or published.

The catalogue is a growing, evidence-led sample, not a claim of exhaustive coverage. Reference photographs, founder originals, contextual images and rights-pending research leads remain distinct. Discovery Batch 141 adds six individually registered Dublin 9 postal objects, including Edward VII and P&T pillar boxes and a Saorstát Éireann wall-mounted box at the All Hallows College boundary. Every coordinate is explicitly source-derived from the NIAH Irish Grid reference, not founder GPS; current condition awaits field verification. See the [Discovery Batch 141 report](documentation/DISCOVERY-EXPANSION-BATCH-141.md).
## Locked map baseline

The current map-marker implementation is preserved as **MAP MARKER SYSTEM V1 BASELINE** on the [`baseline/v1-map-marker-system`](https://github.com/CicanGeorgeAlin/cican-dublin/tree/baseline/v1-map-marker-system) branch. Recovery commit: `afc74b4a0814a856efe5f6f97a4ad3bfebbcc0bb`. Future map improvements should preserve this reference point.

## CICAN DUBLIN mission

Discover every historically meaningful physical detail across Dublin City and County Dublin, including overlooked street objects, architectural fragments, industrial and transport remnants, archaeological traces, inscriptions and other heritage hidden in plain sight. Investigate and verify each historical claim, identify a defensible location, and prepare fieldwork so the founder can visit and photograph the real feature. A missing online photograph is a fieldwork opportunity, not a reason to abandon a discovery. Preserve each original photograph, create faithful A4 line art from it, and develop separate themed colouring-book publications.

## Production workflow

DISCOVER → INVESTIGATE → VERIFY → LOCATE → PLAN FIELDWORK → SEARCH FOR REFERENCE IMAGES → FOUNDER PHOTOGRAPHS → PRESERVE ORIGINAL → CREATE A4 LINE ART → QUALITY CONTROL → PUBLISH ON CICAN DUBLIN → COLOURING-BOOK PUBLICATION.

Research and catalogue expansion run alongside visual research. Objects are not excluded because a reference image cannot be found. Records without suitable online photographs remain explicitly queued for founder field photography.

## Integrity rules

- Every discovery receives one unique archive ID.
- Historical claims must be supported by sources.
- Verified records, partial verifications and research leads remain distinct.
- A missing photograph never blocks a well-supported discovery from being catalogued.
- Exact-object photographs, contextual photographs, founder originals and rights-pending leads must be labelled separately.
- Expand beyond famous buildings to individual heritage objects and details, while requiring evidence for each record.
- Treat Dublin City and County Dublin as a multi-authority research area; record the responsible local authority and survey coverage rather than implying complete coverage.
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

**271 of 287 current records** have decimal WGS 84 coordinates. For records derived from NIAH Irish Grid references (TM65 / Irish Grid, EPSG:29902), the original grid references are preserved and coordinates are transformed using EPSG operation 1641. Other records retain their documented source coordinate provenance. Every WALK THERE link uses the record's latitude and longitude as its Google Maps walking destination, not an address or street-name search.

These are **source-derived map points, not founder-recorded GPS fixes**. NIAH dataset metadata explains that legacy point centroids were digitised relative to OSI 6-inch mapping and may need revision against larger-scale mapping. The EPSG coordinate transformation has a published 1 m accuracy, but that does not establish the accuracy of the underlying NIAH point. Field verification remains outstanding; no coordinate is labelled FIELD_VERIFIED until checked on site. Future records must retain a published coordinate reference or another documented source—never estimate a pin from an address.

Postal districts are operational research zones, not proof that an area has been fully surveyed.

## Social sharing

The homepage and archive page use the same 1200 × 630 CICAN feature image for Open Graph and large-card social previews. GitHub Actions renders the PNG from the repository's SVG source during deployment.

## Founder

CICAN GEORGE ALIN  
Dublin, Ireland


Visual Discovery Batch 133 adds three separately registered c.1825 granite GPO–Howth milestones on Howth Road: Dublin 3 (NIAH 50030295), Clontarf/Ballyhoy (NIAH 50030081) and Raheny North (NIAH 50030007). Their published Irish Grid references are retained and transformed WGS84 points are explicitly source-derived, not founder GPS. Three visual records and founder-photography briefs were added; no third-party images were imported. See the [Visual Discovery Batch 133 report](documentation/VISUAL-DISCOVERY-BATCH-133.md).


Supplementary Visual Discovery Batch 134 adds six separately catalogued historic milestones along Malahide Road, Dublin Road and the Howth/Sutton route (NIAH registrations 50120064, 50130216, 50130243, 11344043, 11358047 and 50120131). See the [Malahide and northern milestone report](documentation/VISUAL-DISCOVERY-BATCH-134-MALAHIDE-HOWTH.md). Their WGS84 map points are transformed from published NIAH Irish Grid references and are not founder GPS fixes.


Visual Discovery Batch 135 adds six historic public-infrastructure objects: Lady Grattan Fountain, the Inchicore Railway Works hydrant, James’s Street fountain, Stanley Street tram rails, Rutland Fountain and the former MacFarlane fountain canopy at Gray/Reginald Streets. The Five Lamps was checked and not duplicated. See the [Batch 135 street-infrastructure report](documentation/VISUAL-DISCOVERY-BATCH-135-STREET-INFRASTRUCTURE.md). Coordinates are source-derived from published NIAH Irish Grid references, not founder GPS.


Visual Discovery Batch 136 adds four separately documented Georgian-era details: two coal-hole covers on Eccles Street, one coal-hole cover at 3 Mountjoy Square North, and the carved limestone St Andrew Street name plaque. Their NIAH coordinates locate the host buildings rather than the exact small features; the archive explicitly marks these as approximate source-derived locators pending field GPS. See the [Batch 136 report](documentation/VISUAL-DISCOVERY-BATCH-136-GEORGIAN-PAVEMENT-DETAILS.md).


Visual Discovery Batch 137 adds four historic basement daylighting and ventilation details: pavement lights at 18 and 21 Suffolk Street, a glazed cellar light at 110 Marlborough Street, and the pavement grille at The Long Hall. The four Victorian bollards at O’Connell Street were checked against the catalogue and not duplicated. The NIAH grid references locate host buildings rather than exact pavement-feature centres; new points are marked approximate source-derived locators pending field GPS. See the [Batch 137 report](documentation/VISUAL-DISCOVERY-BATCH-137-PAVEMENT-LIGHTS.md).


Visual Discovery Batch 138 adds five individually sourced details: the Ordnance Survey benchmark and 1827 street-name panel at 1 Sherrard Street Lower, the benchmark on Cherrywood Railway Viaduct, the full-height ventilation pipe at 25 Pleasants Street, the pavement iron grille at 45 Pearse Street, and the cubed-glass basement pavement light at The Lombard. Their coordinates identify host buildings/structures rather than exact detail positions and are marked approximate source-derived locators pending field GPS. See the [Batch 138 report](documentation/VISUAL-DISCOVERY-BATCH-138-BENCHMARKS-AND-DETAILS.md).
