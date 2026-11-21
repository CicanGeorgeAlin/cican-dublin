# CICAN Dublin — Batch 060 Five-Record Duplicate and Schema Review Packet

**Status:** Prepared for independent review; not imported.
**Research basis:** `documentation/CICAN-HYBRID-NIAH-DISCOVERY-BATCH-060-RESEARCH-REVIEW.md`
**Production:** Untouched. No archive IDs, source IDs, visual IDs, map pins or catalogue mutations are authorised by this packet.

## Review boundary

This packet separates candidate identity review from record creation. The first research pass reported no exact registration-number, normalized-name or normalized-address collisions against the then-current `main` versions of the master objects, public NIAH register, source registry and visual inventory. That screen does not eliminate aliases, historical address changes, multi-property records or spatial overlap. The independent reviewer must repeat the checks against the latest target branch immediately before any import.

## Five candidates

| Candidate | NIAH REG_NO | Official record title | Dublin address | NIAH ITM (E,N) |
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
| `national_grid_reference` | Do not put raw ITM values here without confirming project convention; preserve source pair and CRS explicitly in review notes until the field convention is settled. |
| `latitude`, `longitude` | Keep null; no transformed coordinates or map pins in this packet. |
| `coordinate_source` | If later populated, cite the exact NIAH source and coordinate field. |
| `coordinate_accuracy_m` | Null unless the source provides defensible accuracy. |
| `coordinate_status` | `NOT_SET` until the coordinate/CRS workflow is approved; source ITM is not GPS. |
| `verification_status` | Select only after confirming project semantics; source transcription is not field verification. |
| `photography_status` | `TO_PHOTOGRAPH`. |
| `line_art_status` | `TO_CREATE`. |
| `publication_status` | `NOT_PUBLISHED`. |
| `parent_id` | Null unless a documented parent/child relationship is established. |
| `access_status` | Public-viewpoint photography only; no private access implied. |
| `photography_brief` | Lawful public-street façade/context shots; detail shots only where safely visible. |
| `sources` | Include a source-registry ID only after that source record is created and validated. |

## Schema observations / unresolved decisions

1. The object schema has `national_grid_reference` but no explicit coordinate reference system field. The raw NIAH values are explicitly ITM (EPSG:2157); do not mislabel them as Irish Grid / EPSG:29902 or latitude/longitude.
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
