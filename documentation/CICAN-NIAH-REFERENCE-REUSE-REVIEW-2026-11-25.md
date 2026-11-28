# CICAN Dublin — NIAH Reference Reuse and Data Exception Review

**Date:** 2026-11-25  
**Scope:** Read-only interpretation of the formal Gate A report  
**Status:** Findings documented; no archive record changed

## 1. Formal validation

The formal JSON Schema 2020-12 validation passed for both datasets: **629/629 canonical records** and **509/509 NIAH-derived records**. There are 509 unique eight-digit NIAH references in each dataset. All 509 NIAH-derived records have a matching canonical record; 120 canonical records are outside the NIAH-derived subset.

## 2. Reused NIAH registration references

The canonical catalogue contains **37 NIAH registration references reused by multiple archive records**. These are not automatically duplicates. **35 groups** explicitly link a registered host building/site to separate child micro-details. Keep those as separate archive records; the parent/child links describe their relationship.

Two groups need separate interpretation:

- **NIAH 50020308 — probable duplicate physical object.** `DUB-STR-0017` (“Handyside cast-iron pillar post box, Townsend Street”) and `DUB-STR-0167` (“Townsend Street — Andrew Handyside cast-iron pillar post box”) both describe the same post box. They share the same NIAH registration, Irish Grid reference, effectively identical transformed coordinates and NIAH source. Their verification statuses differ (`VERIFIED` versus `PARTIALLY_VERIFIED`), as do wording and source lists. Treat this as a genuine identity/provenance conflict. Do not merge, delete, renumber or alter either record automatically. Manually compare evidence, history and downstream links first.
- **NIAH 50930104 — two distinct micro-details.** `DUB-STR-0168` is the entrance boot scraper and `DUB-STR-0169` is the pavement coal-hole cover at 29 Fitzwilliam Street Upper. They are distinct features described by the NIAH record. Both use the host-building locator and neither has a canonical host-building parent record. Keep them separate and do not describe the shared coordinate as the exact position of either detail.

## 3. Nine canonical/NIAH record differences

The following shared record IDs have four provenance/research fields present in the canonical record but absent/null in the NIAH-derived copy: `address_source`, `last_researched`, `photography_restrictions` and `research_notes`.

| Canonical ID | NIAH reference |
|---|---:|
| `DUB-BLD-0274` | 11201005 |
| `DUB-INF-0204` | 11201007 |
| `DUB-BLD-0275` | 11201010 |
| `DUB-BLD-0276` | 11201011 |
| `DUB-BLD-0277` | 11201012 |
| `DUB-BLD-0278` | 11201014 |
| `DUB-INF-0207` | 50060551 |
| `DUB-BLD-0284` | 50020320 |
| `DUB-BLD-0285` | 50130155 |

These are canonical enrichments. The NIAH-derived copy must not overwrite them. Future NIAH subsets should be generated from canonical records or protected by a deterministic parity test.

## 4. Nine records with absent coordinate properties

These nine records have neither a `latitude` nor a `longitude` property and are marked `NOT_SET`:

- `DUB-DET-0001` — North Wall Quay paired iron mooring hooks
- `DUB-DET-0002` — North Wall Quay recessed iron access ladders
- `DUB-DET-0006` — Sir John Rogerson's Quay granite landing steps
- `DUB-DET-0007` — Sir John Rogerson's Quay stone setts and inset rails
- `DUB-DET-0008` — Sir John Rogerson's Quay timber fenders
- `DUB-DET-0009` — Ringsend concrete boat slip iron posts and railings
- `DUB-DET-0010` — Ringsend concrete boat slip mooring blocks
- `DUB-DET-0011` — Ringsend concrete boat slip cast-iron lamppost
- `DUB-INF-0035` — Great South Wall Poolbeg Lighthouse rock-armour reinforcement

Another 63 records express both coordinate properties explicitly as `null`. There are no partial or invalid coordinate pairs. All 72 records remain unmapped.

**Schema hardening now added on this draft branch:** latitude and longitude must appear together; non-`NOT_SET` coordinate statuses require a complete numeric pair; `NOT_SET` cannot carry numeric coordinates. The nine records with both properties absent remain valid and unmapped. Explicit-null normalisation is still a separate optional data migration and is not required for the pair-integrity rule. Do not create, infer, transform or copy coordinates during normalisation.

## 5. Required follow-up

1. Manually resolve the probable Townsend Street postbox duplicate, including its conflicting verification status and all downstream visual/research references.
2. Preserve the 35 parent/child groups as separate archive objects.
3. Preserve the two 29 Fitzwilliam Street details as separate objects with host-building locator semantics.
4. Keep canonical provenance fields from the nine enriched records; generate or parity-check the NIAH subset.
5. Re-run the tightened coordinate-pair schema tests on the final candidate. Consider a separate null-normalisation change for the nine absent-property records only if it provides a clear downstream benefit.
6. Never upgrade a coordinate to `FIELD_VERIFIED` without a documented field observation.

## 6. Safety

This review changes documentation only. It does not edit, merge, delete, renumber, reparent or normalise any archive record; it does not modify coordinates, map pins, production app code or deployment settings.
