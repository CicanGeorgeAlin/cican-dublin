# CICAN Dublin — NIAH Gold Standard Publication Protocol

**Adopted:** 20 November 2026  
**Applies to:** All new NIAH imports and the retrospective audit of the existing public NIAH register.  
**Project scope:** Dublin City, Fingal, South Dublin County and Dún Laoghaire–Rathdown.

## Governing rule

**No verified official NIAH registration, no public publication.** Discovery is not verification. Verification is not field inspection. A record may be published only after every mandatory documentary, data, duplicate and technical gate below passes.

## Three separate states

1. **DISCOVERY_QUEUE** — possible heritage feature; research lead only. Never appears as a verified/public archive object.
2. **VERIFIED_NIAH_REGISTER** — exact official individual record and exact national dataset row matched; documentary identity established. Still not automatically public.
3. **PUBLISHED_ARCHIVE** — all gates passed, archive ID assigned, provenance retained, page and map data validated, and deployment smoke test passed.

Any unresolved issue receives **HOLD** or **QUARANTINE**. Never silently promote a candidate.

## Mandatory publication gates

### Gate 1 — Individual official record
- Open the individual Buildings of Ireland / NIAH record.
- Record the exact REG_NO as printed, title, address/locality, local authority, rating, special-interest categories, date range, description, appraisal, source URL and access date.
- Search-result snippets alone do not pass this gate.
- Preserve apparent source errors and cross-reference discrepancies verbatim in a note; do not silently correct them.

### Gate 2 — National dataset match
- Retrieve the official national NIAH CSV or an official live NIAH FeatureServer record.
- Match the exact REG_NO and reconcile local authority and available identifying fields with the individual page.
- Preserve the original source row / JSON evidence and dataset version, retrieval date and checksum where possible.
- Retain source-provided ITM coordinates (EPSG:2157) and WGS84 latitude/longitude as separate fields with provenance. Do not infer a CRS from an unlabeled coordinate pair, and do not derive or transform coordinates unless the source CRS and transformation method are documented.
- A schema, metadata page, search result or service description is not an individual registration row.

### Gate 3 — Full duplicate and relationship audit
- Compare against the complete master objects, public NIAH register, source registry and visual inventory.
- Check exact REG_NO, normalized address/title, existing archive IDs, coordinate proximity and documented component/relationship references.
- A negative GitHub code-search result is not a complete duplicate audit.
- Distinguish separately registered features from components, associated buildings, walls, gates, gardens and estate structures. Do not merge or split physical assets without evidence.
- If any required dataset cannot be read completely, this gate is blocked.

### Gate 4 — Evidence and rights
- Every factual claim must be traceable to a source.
- Mark source-derived and field-verified information separately.
- Use PARTIALLY_VERIFIED / SOURCE_DERIVED where no adequate field inspection has occurred.
- Record access restrictions and uncertainty; never imply permission to enter private property.
- Do not reuse NIAH images unless image reuse rights are independently established. Prefer properly licensed or original field photographs.

### Gate 5 — Controlled publication
Only after Gates 1–4 pass:
- assign one unique archive ID;
- create/validate source and visual inventory entries;
- create public place page and map data;
- generate SEO metadata and sitemap entries using the existing project workflow;
- preserve exact REG_NO and all provenance links.

### Gate 6 — Production validation
- Run repository consistency checks and duplicate checks.
- Deploy through the established GitHub Pages workflow only.
- Smoke-test live page, registration number, source links, coordinates/map pin, images/rights, mobile display, search/filter and sitemap.
- Save a batch report and update the autopilot checkpoint.
- If a test fails, roll back or quarantine the affected entry; do not mark the batch complete.

## Retrospective audit of existing public NIAH records

The existing public NIAH register must be audited against Gates 1–4. Do not assume previously published records automatically satisfy this protocol. Track each existing record as PASS, HOLD or QUARANTINE. Correct or temporarily unpublish records that fail material identity or provenance checks, using a documented change record. Preserve the original audit trail.

## Batch sizing and stopping rule

Batch size is determined by the number of records that pass all gates, not a target quota. A batch may legitimately publish zero records. Research-only batches are valid progress when they resolve source, dataset, duplicate or provenance blockers.

## Current blockers at adoption

- The official national bulk dataset bytes/rows have not yet been retrieved in the current workflow.
- Large master/public JSON datasets have exceeded current GitHub text-fetch limits; complete source and visual inventory comparison is therefore not certified.
- Accordingly, no new imports may proceed until the exact national rows and complete duplicate datasets are available and checked.

## Required batch report fields

Record: batch ID/date; scope; candidate REG_NO list; official page verification; exact national row match; dataset version/checksum; local authority; original ITM/WGS84 fields; duplicate audit outcome; source/rights status; field-verification status; archive ID; files changed; tests; deployment result; remaining holds; next operation.

**This protocol supersedes any earlier looser discovery/import sequence.**
