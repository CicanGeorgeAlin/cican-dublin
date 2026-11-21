# CICAN Dublin — Batch 060 Five-Record Duplicate and Schema Review Packet

**Status:** Prepared for independent review; not imported.
**Research basis:** `documentation/CICAN-HYBRID-NIAH-DISCOVERY-BATCH-060-RESEARCH-REVIEW.md`
**Production:** Untouched. No archive IDs, source IDs, visual IDs, map pins or catalogue mutations are authorised by this packet.

## Review boundary

This packet separates candidate identity review from record creation. The first research pass reported no exact registration-number, normalized-name or normalized-address collisions against the then-current `main` versions of the master objects, public NIAH register, source registry and visual inventory. That screen does not eliminate aliases, historical address changes, multi-property records or spatial overlap. The independent reviewer must repeat the checks against the latest target branch immediately before any import.

## Five candidates

| Candidate | NIAH REG_NO | Official record title | Dublin address | NIAH page-displayed pair (CRS unspecified) |
|---|---:|---|---|---|
| 1 | 50010983 | 146 Parnell Street | 146 Parnell Street, Dublin 1 | 315928, 235086 |
| 2 | 50060606 | 156 Parnell Street | 156 Parnell Street, Dublin 1 | 315878, 235048 |
| 3 | 50010984 | 103–104 Parnell Street | 103–104 Parnell Street, Dublin 1 | 315996, 235102 |
| 4 | 50010986 | 98 Parnell Street | 98 Parnell Street, Dublin 1 | 315962, 235078 |
| 5 | 50010197 | Desmonds / Not to Worry / Talbot Street Business Centre | 19 Talbot Street, Dublin 1 | 316257, 234790 |

## Primary provenance

- 50010983 — https://www.buildingsofireland.ie/buildings-search/building/50010983/146-parnell-street-dublin-1-co-dublin
- 50060606 — https://www.buildingsofireland.ie/buildings-search/building/50060606/156-parnell-street-dublin-1-dublin
- 50010984 — https://www.buildingsofireland.ie/buildings-search/building/50010984/103-104-parnell-street-dublin-1-co-dublin
- 50010986 — https://www.buildingsofireland.ie/buildings-search/building/50010986/98-parnell-street-dublin-1-dublin
- 50010197 — https://www.buildingsofireland.ie/buildings-search/building/50010197/desmonds-not-to-worry-talbot-street-business-centre-19-talbot-street-dublin-1-co-dublin

## Duplicate review — required independent pass

For each candidate, check the current complete catalogue and all derived registries for:
1. Exact eight-digit NIAH registration collision.
2. Existing archive ID / source ID / visual record association.
3. Normalized official title, known trading names and aliases.
4. Exact and normalized address, including historic street numbering and adjoining/combined premises.
5. Parent/child and shared-registration relationships.
6. Nearby records and possible spatial overlap once coordinate reconciliation is independently completed.

Special handling:
- 103–104 Parnell Street is one combined NIAH registration and must remain one candidate, not two objects.
- The Talbot Street entry has several official/trading-name variants; search all of them, not only the first title phrase.
- Parnell Street candidates are close together. Do not use proximity alone to merge or split records.

## Schema review — proposed field mapping only

The current `schemas/archive-object.schema.json` requires: `id`, `name`, `category`, `district`, `address`, `historical_period`, `historical_description`, `historical_significance`, `verification_status`, `photography_status`, `line_art_status`, `publication_status`, `parent_id`, `access_status`, `photography_brief`, `sources` and `coordinate_status`.

| Field | Proposed treatment |
|---|---|
| `id` | Leave unassigned until duplicate review passes and the current maximum ID is rechecked. |
| `name` | Use official NIAH title; retain alternate/trading names in research notes where supported. |
| `category` | Candidate value `ARCHITECTURE`; confirm against taxonomy and schema enums. |
| `district` | `Dublin 1`. |
| `address` | Use the address shown in the candidate table; preserve combined 103–104 range. |
| `historical_period` | Transcribe NIAH date range with circa date clearly distinguished. |
| `historical_description` | Evidence-led paraphrase of the individual NIAH Description; no unsupported present-day claims. |
| `historical_significance` | Evidence-led paraphrase of the NIAH Appraisal. |
| `national_inventory_reference` | Exact eight-digit NIAH REG_NO as a string. |
| `national_grid_reference` | Do not put raw page-displayed values here without confirming their CRS and project convention; preserve the source pair as unclassified evidence until reconciled to an official coordinate field. |
| `latitude`, `longitude` | Keep null; no transformed coordinates or map pins in this packet. |
| `coordinate_source` | If later populated, cite the exact NIAH source and coordinate field. |
| `coordinate_accuracy_m` | Null unless the source provides defensible accuracy. |
| `coordinate_status` | `NOT_SET` until the coordinate/CRS workflow is approved; page-displayed coordinates are not GPS or confirmed ITM. |
| `verification_status` | Select only after confirming project semantics; source transcription is not field verification. |
| `photography_status` | `TO_PHOTOGRAPH`. |
| `line_art_status` | `TO_CREATE`. |
| `publication_status` | `NOT_PUBLISHED`. |
| `parent_id` | Null unless a documented parent/child relationship is established. |
| `access_status` | Public-viewpoint photography only; no private access implied. |
| `photography_brief` | Lawful public-street façade/context shots; detail shots only where safely visible. |
| `sources` | Include a source-registry ID only after that source record is created and validated. |

## Schema observations / unresolved decisions

1. The object schema has `national_grid_reference` but no explicit coordinate reference system field. The raw NIAH values are explicitly page-displayed coordinates (CRS not explicitly labelled; likely National Grid/Irish Grid, not ITM); do not mislabel them as Irish Grid / EPSG:29902 or latitude/longitude.
2. The object schema has no dedicated `national_inventory_rating`, `architectural_interests`, `date_range` or alternate-name array. Decide whether these belong in `research_notes` or whether a schema extension is justified; do not add undeclared properties because `additionalProperties` is false.
3. NIAH's historical occupancy/condition wording must remain attributed to survey date. In particular, the 156 Parnell Street vacancy statement is not a current occupancy claim.
4. Source registry entries must use only fields declared in `schemas/source.schema.json`; source IDs must be unique and referenced consistently.
5. Each eventual object needs exactly one matching visual inventory record under the validator's catalogue/visual parity rule, even while photography remains outstanding.

## Gate before any import

- [ ] Independent duplicate review signed off against latest full datasets.
- [ ] Official title, REG_NO, address, description and appraisal rechecked.
- [ ] Coordinate CRS handling agreed; no coordinate import until then.
- [ ] Proposed object records validate against `schemas/archive-object.schema.json` and taxonomy.
- [ ] Source entries validate against `schemas/source.schema.json`; all references resolve.
- [ ] Five visual inventory plans prepared with unique matching record IDs.
- [ ] Full `scripts/validate-archive.mjs` and NIAH registration audit pass on the proposed import branch.
- [ ] Production deployment remains disabled until a separate explicit approval.

**Decision:** Candidate research is ready for independent duplicate/schema review. No import is approved.


## Independent full-dataset duplicate screen — 21 November 2026

An updated independent screen was completed against the refreshed production `main` snapshot on 21 November 2026. Complete JSON blobs were retrieved by Git blob SHA and parsed. Counts:
- `data/objects.json`: 615 objects
- `data/niah-registered-objects.json`: 495 records
- `data/sources.json`: 735 sources
- `data/visual-assets.json`: 615 visual records

For each candidate, exact NIAH registration, normalized official title/known alias and normalized address terms were searched across all four complete datasets. Result: **zero textual matches for all five candidates**. Candidate terms were also checked against the candidate patches in open PRs #30, #32, #33 and #35; no textual overlap was found. This does not establish spatial non-overlap because the individual-page coordinate CRS remains unresolved.

The current maximum building ID on production `main` is `DUB-BLD-0320` (Batch 064). PR #35 separately stages IDs DUB-BLD-0321–0330 but remains open and unmerged. Batch 060 has no archive IDs allocated; recalculate only after the competing import PRs are resolved.

## Confirmed schema conventions and hold points

- `ARCHITECTURE` is a valid taxonomy category.
- The schema's `additionalProperties` is `false`; do not add undeclared properties such as NIAH rating or coordinate CRS.
- The object schema allows `national_inventory_reference`, `national_grid_reference`, latitude/longitude, coordinate source and accuracy, and `coordinate_status`.
- Existing records commonly use `national_grid_reference` for Irish Grid (EPSG:29902) values and explicitly document transformation to WGS 84. The five candidate pairs are NIAH page-displayed coordinates (CRS not explicitly labelled; likely National Grid/Irish Grid, not ITM), so they must not be inserted into that field without an explicit CRS-aware schema convention. Keep latitude/longitude, national grid reference, map URL and pins null/unset for this import stage.
- `NOT_SET` is an allowed coordinate status and is the safe choice while the ITM conversion/CRS storage convention remains unresolved.
- `SOURCE_VERIFIED_CORE` is not an allowed value for the legacy `verification_status` enum. Use only a schema-accepted value after confirming the validator's status semantics; source transcription must never be described as field verification.
- The source schema requires `id`, `name`, `publisher`, `url` and `accessed`; it accepts optional `source_type`, `specific_reference` and `notes`. Source IDs must be unique and referenced from each object's `sources` array.
- The current object validator requires exact one-to-one parity between catalogue IDs and visual inventory IDs. Any eventual five-object import therefore needs five corresponding visual plans with matching IDs, all still marked `TO_PHOTOGRAPH` / `TO_CREATE` and no founder original claimed.

**Independent review outcome:** Exact duplicate screen passed against current full datasets. Schema review identified a coordinate reference-system hold point and a legacy verification-status mapping hold point. The five objects are not yet import-ready; resolve those two points and complete candidate-specific source records before preparing a data-changing import.


## Cross-PR ID reconciliation — refreshed 21 November 2026

The earlier candidate draft assigned DUB-BLD-0326–0330 conditionally on PR #28. That allocation is obsolete. Current production main now contains DUB-BLD-0316–0320 from Batch 064, while corrected draft PR #35 stages DUB-BLD-0321–0330 for Batches 058–059. PR #35 is not merged. This Batch 060 packet therefore removes all permanent archive IDs, source IDs and visual record IDs. No IDs are reserved. Recalculate against main and every open import PR immediately before any approved import.

## Repository quality gate result — 21 November 2026

Archive quality gate workflow #1840 completed successfully on the PR #29 merge ref:
- Archive preflight passed: 610 objects, 728 sources, 610 visual records and 133 reference images.
- SEO generator produced 490 crawlable NIAH place pages and a sitemap with 493 URLs.
- Official national NIAH CSV audit: 48,327 source rows; all 490 currently archived registrations matched; zero unmatched.
- Four-authority Dublin denominator: 7,535 unique registrations; 490 archive matches; 7,045 remain for review; zero unassigned authority rows; zero official duplicate registrations.
- Separate Batches 058–059 official CSV reconciliation: 10 candidates, 10 matches, zero missing or duplicate matches.
- Audit outputs were uploaded in workflow artifact `niah-dublin-bulk-coverage-audit`, artifact ID `14708710642`.

The workflow validates the existing repository catalogues and the separate 058–059 reconciliation. It does not itself import or independently validate the five Batch 060 candidate records. An earlier draft payload was separately checked against the schema, but it contained provisional IDs and outdated coordinate wording. This refreshed packet is a research/review artifact, not a canonical import payload; any future data-changing import must be rebuilt and validated against the then-current schemas and target branch.

**Current decision:** Batch 060 remains a separate draft review. The cross-PR ID collision has been resolved in the candidate package. No catalogue mutation, PR merge or production deployment has occurred.


## Critical coordinate-reference correction — 21 November 2026

Earlier draft wording incorrectly labelled the individual NIAH page-displayed pairs (for example, 315928, 235086) as ITM EPSG:2157. This refreshed packet now treats them as unclassified page-displayed values and does not assign them a CRS.

The individual page's coordinate display does not explicitly state a CRS. The coordinate magnitudes are consistent with the older Irish Grid/National Grid representation, not ITM, but this remains provisional. NIAH's official national dataset documentation explicitly distinguishes ITM, latitude/longitude and National Grid coordinate fields. Therefore, page-displayed values must remain raw source evidence and must not be described as ITM. Any future ITM record should be sourced from the official ITM_E/ITM_N fields and reconciled by registration number. No conversion or map placement is authorised by this review.

Sources: NIAH data download page; data.gov.ie NIAH dataset provenance and CRS metadata; NIAH Buildings FeatureServer layer metadata. This correction changes coordinate interpretation only; object IDs, candidate identity, descriptions and no-import safeguards remain unchanged.


## Refreshed candidate-package corrections — 21 November 2026

The candidate JSON now uses NIAH registration-based candidate keys only. It does not assign archive IDs, canonical source IDs or visual record IDs. Candidate source and visual plans remain draft-only and are not inserted into the canonical registries. Production counts and the latest main archive ID are refreshed to 615 objects, 495 public NIAH records, 735 sources, 615 visual records and DUB-BLD-0320. PR #35's proposed IDs remain a separate unmerged dependency.

The official individual NIAH records were rechecked for all five candidates. Their registration numbers, official titles, date ranges and described architectural features match the research summaries. Historical survey vacancy or use descriptions are not treated as present-day facts. The 103–104 Parnell Street entry remains one combined NIAH registration and one candidate.
