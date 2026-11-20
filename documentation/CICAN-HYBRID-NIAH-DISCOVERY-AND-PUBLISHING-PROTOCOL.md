# CICAN Dublin — Hybrid NIAH Discovery, Verification and Publishing Protocol

**Adopted for the next operating cycle:** 20 November 2026  
**Purpose:** Combine the earlier productive 3–5-record discovery workflow with the evidence controls of the CICAN NIAH Gold Standard, without allowing a blocked data endpoint to halt all archive growth.  
**Scope:** Dublin City, Fingal, South Dublin County and Dún Laoghaire–Rathdown.  
**Brand:** CICAN.

## Governing principle

**Keep discovery moving. Publish only what is supportable. Never claim a verification step that has not happened.**

The earlier workflow was effective at finding and preparing several individually registered NIAH assets per batch. The recent Gold Standard improved provenance and risk control but became too narrowly focused on one unresolved record and one inaccessible national-data endpoint. The hybrid method separates the production-ready public record from deeper national-data enrichment and retrospective auditing.

This protocol changes workflow sequencing and publication tiers. It does not lower the standard for factual accuracy, identity, duplicate control, source attribution, or coordinate provenance.

## Two parallel tracks

### Track A — Productive discovery and core publication

Work in batches of **3–5 candidate registrations**. A batch is a research target, not a publication quota. Select the next records from Dublin coverage gaps and reliable official sources. Prefer individually registered NIAH assets, with Dublin City first, then Fingal, South Dublin County and Dún Laoghaire–Rathdown, unless the current coverage ledger gives a stronger reason.

For each candidate:
1. Open the individual Buildings of Ireland / NIAH record.
2. Capture the exact eight-digit REG_NO, official title, address/locality, local authority where shown, rating, special-interest categories, date range and official description.
3. Save the official record URL and access date.
4. Compare the exact REG_NO, title, normalized address and known aliases against the complete available master object catalogue, NIAH register, source registry and visual inventory. Check relationships and nearby separately registered components. Never merge distinct REG_NO assets.
5. Create a source record and unique archive ID only after identity and duplicate checks pass.
6. Create a public core record/page using only fields supported by the cited source(s). At minimum a core NIAH page needs an exact official REG_NO, official individual record URL, official description and a supportable location/address. If any of those are absent or conflicting, HOLD.
7. Coordinates are optional for a core record. Publish a map pin only when the coordinate source and CRS are explicit and the transformation is documented. Otherwise omit the pin and retain the record's source location in text.
8. Do not invent or paraphrase a non-public appraisal, condition, access permission, date, coordinate, photograph right or other absent field.
9. Label documentary status accurately: SOURCE_VERIFIED means the public NIAH page identity and fields used on the page were checked; it does not mean field inspected or national-row matched.
10. Prepare the record's unique SEO metadata and sitemap entry through the existing site workflow. Deploy only after tests pass.

### Track B — Gold Standard enrichment and retrospective audit

Continue deeper checks in parallel, without making every discovery batch wait for an inaccessible endpoint:
- Retrieve exact official national CSV / live FeatureServer row when possible.
- Reconcile REG_NO, local authority, description, appraisal if exposed, date fields, rating, ITM coordinates and latitude/longitude.
- Preserve source version, retrieval timestamp, raw row/JSON and checksum where obtainable.
- Verify coordinate reference systems and transformation methods.
- Preserve discrepancies verbatim and explain which source supports each published field.
- Review image reuse rights, present access and field verification independently.
- Audit the existing 454 public NIAH registrations in a separate queue; do not assume they pass because they are already public.

The national-row gate remains mandatory for any claim specifically attributed to the national dataset and for the NATIONAL_DATA_VERIFIED status. It is no longer a universal blocker for publishing a core record whose identity, location and description are directly established by its individual official NIAH page and which passes duplicate/provenance/technical checks.

## Evidence statuses

1. DISCOVERY_QUEUE — lead only; no public record.
2. SOURCE_VERIFIED_CORE — individual official NIAH record opened; exact REG_NO, official description and supportable location captured; duplicate check passed; source registry and page are complete. National row may remain PENDING. No unverified national-data fields are presented as facts.
3. NATIONAL_DATA_VERIFIED — exact national CSV/FeatureServer row matched and relevant fields reconciled. This is an enrichment status, not a replacement for field inspection.
4. FIELD_VERIFIED — founder or authorised field inspection independently records current existence, location, condition and access observations with date/evidence. This status is never inferred from desk research.

A record can be SOURCE_VERIFIED_CORE while national data is PENDING. It must not be labelled fully nationally verified or field verified.

## Mandatory HOLD / QUARANTINE conditions

HOLD if exact official REG_NO cannot be confirmed; individual official page cannot be opened or identity is ambiguous; official description or location needed for the core page cannot be captured; duplicate/relationship review is incomplete; sources materially conflict; or map coordinates are unsupported, unlabeled or based on an undocumented transformation.

QUARANTINE if the record is demonstrably misidentified, duplicated, unsupported, or contains material fabricated/incorrect data. Existing production content with a material identity/provenance failure is quarantined pending documented correction.

A missing Appraisal field on the public NIAH page is recorded as NOT_PUBLICLY_EXPOSED, not as a fabricated value or automatic rejection of an otherwise supportable core page.

## Batch workflow

1. SELECT: choose 3–5 candidates from coverage gaps.
2. DISCOVER: open individual official NIAH pages and capture exact references.
3. RECONCILE: compare each candidate against the complete available catalogue/register/source/visual inventory.
4. CORE-PREPARE: prepare only source-supported fields; keep uncertain candidates in HOLD.
5. ENRICH: attempt national row, coordinates, additional authoritative sources and rights/access checks in parallel.
6. PUBLISH: publish only candidates passing the core publication gates; zero, one, two or more may pass.
7. SEO: unique title, meta description, canonical URL, structured data where supported, internal links and sitemap entry for each new public page.
8. TEST: verify record page, REG_NO, source links, coordinate/map behavior (if any), mobile display, search/filter, canonical and sitemap. GitHub Pages only.
9. CHECKPOINT: record IDs, REG_NO values, status, sources, holds, files changed, deployment result and next candidates.

## Website policy

The website should visibly grow through complete, useful, individually registered heritage pages rather than repeated research-only reports. Each new core page should show the official registration number prominently; provide a concise accurate title and description; identify the location and local authority where supported; link directly to the individual official NIAH record; distinguish source-derived information from field-verified observations; show a map pin only with defensible coordinates; and have unique search-friendly metadata and a sitemap entry.

Do not redesign the reader/map interface or change unrelated UX. Preserve existing visual baseline. Do not add unsupported claims merely to fill a page.

## Current transition

- Keep the 454-record retrospective audit active as its own workstream.
- Stop making Mack's Bridge the sole focus of every CONTINUE.
- Mack's Bridge remains a documented HOLD for exact national-row reconciliation, while its public individual NIAH identity and separate-asset relationships remain useful evidence.
- Resume productive discovery with the next 3–5 individually registered candidates, beginning with the next known Dublin coverage gap. Apply the core publication gate to each and attempt national enrichment in parallel.
- The previous Gold Standard remains the evidence-quality reference. This hybrid protocol governs sequencing, status labels and core-page publishing.

**Success measure:** steady growth in individually registered, accurately sourced Dublin heritage pages, alongside an improving national-data audit and zero invented facts.