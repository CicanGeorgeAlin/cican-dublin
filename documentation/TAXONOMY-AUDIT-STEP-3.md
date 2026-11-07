# CICAN DUBLIN Taxonomy Audit — Step 3

**Date:** 7 November 2026  
**Scope:** Controlled category codes, feature types and human-readable display groups.  
**Result:** All category codes currently used by the 274 catalogue records are present in the controlled taxonomy and accepted by the object schema. No catalogue records required reclassification.

## Distinction between two layers

- `data/taxonomy.json` is the controlled vocabulary. Its 13 category codes and four feature types govern record classification.
- `data/categories.json` contains nine human-readable display groups for public-facing explanation. These are broader editorial groupings, not one-to-one category codes. A single display group can describe multiple controlled codes.

The two files must not be conflated. The archive uses one primary category code per object; broader descriptions and secondary characteristics belong in the object narrative and research notes.

## Audit

The catalogue currently uses:

| Controlled code | Records |
|---|---:|
| `ARCHITECTURE` | 119 |
| `INFRASTRUCTURE` | 37 |
| `INSCRIPTION` | 9 |
| `MEMORIAL` | 2 |
| `MONUMENT` | 14 |
| `PUBLIC_ART` | 4 |
| `STREET_DETAIL` | 89 |

All used codes exist in `data/taxonomy.json`. The taxonomy's complete code list also matches the category enum in `schemas/archive-object.schema.json`. All four feature types match the object schema.

## New validation contracts

- `schemas/taxonomy.schema.json` validates the controlled taxonomy structure.
- `schemas/categories.schema.json` validates human-readable category groups.
- The archive preflight now checks unique taxonomy codes, unique feature types, schema alignment and that every catalogue category is registered.

No existing category code, record ID or object classification was changed.

**Outcome:** Taxonomy consistency is now enforced automatically on every quality-gate and deployment run.
