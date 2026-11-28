# CICAN Dublin Autopilot Protocol
## Locked operating specification — NIAH-first discovery and specialist heritage enrichment

**Project:** CICAN Dublin Archive  
**Repository:** CicanGeorgeAlin/cican-dublin  
**Production site:** https://cicangeorgealin.github.io/cican-dublin/  
**Protocol status:** Operating baseline proposed for the recurring “Continue” workflow  
**Scope:** Dublin City, Fingal, South Dublin and Dún Laoghaire–Rathdown  
**Core principle:** NIAH-first, evidence-first, duplicate-safe, traceable and testable.

## 1. Mission and priority

The archive has two connected workstreams.

### Workstream A — NIAH master collection (primary)

Identify, verify, reconcile and publish every relevant National Inventory of Architectural Heritage (NIAH) record within the four Dublin local authority areas:
1. Dublin City
2. Fingal
3. South Dublin
4. Dún Laoghaire–Rathdown

The working historical baseline discussed in project planning was **5,802 records in a 2021 dataset**. This is not the current total. Before setting a final target, obtain the latest authoritative dataset, establish its publication/version date, filter by the four Dublin authorities, and calculate the actual in-scope total.

NIAH is an architectural heritage inventory. Its scope does not represent every archaeological object, historic street feature or heritage point in Dublin.

### Workstream B — specialist heritage research (secondary)

Discover and document heritage not adequately represented by NIAH, including archaeological sites and finds, inscriptions, plaques, memorials, historic street surfaces, milestones, boundary markers, street furniture, bridges, industrial remains, transport infrastructure, historic landscape features and other documented objects of interest across Dublin and County Dublin.

Specialist research enriches the main archive; it must not displace or silently replace the NIAH collection programme.

## 2. Exact meaning of “Continue”

When the user says **Continue**, execute the next eligible unit of work under this protocol. Do not ask which direction to follow unless a genuine blocker makes progress impossible.

### Standard cadence

- **Four consecutive NIAH batches**, followed by
- **one specialist-research batch**,
- then repeat the cycle.

This is an 80/20 work allocation by batch count. If a source, data-integrity or publication blocker prevents an NIAH batch, do not pretend it was completed. Record the blocker and use the turn for a clearly labelled specialist batch only when that work can proceed without compromising the NIAH queue. Preserve the cadence counter and explain any deviation.

### NIAH batch size

Process **up to 100 new NIAH records per Continue**, researched in **20-record sub-batches**. Start with 20 and expand through further sub-batches up to 100 only when individual NIAH pages, exact national rows, duplicate checks and validation can all be completed. The operating target is 100–200 accepted records per day where evidence and tooling support it; the quota never overrides a publication gate, and 200+ may require multiple Continue cycles. Never pad a batch with weak, unverified or duplicate candidates.

### Specialist batch size

A specialist batch should cover one coherent subject or a small, clearly related group of objects. It is a research report, not an excuse to spend multiple consecutive batches on one site while the NIAH queue is active.

## 3. NIAH batch algorithm

For each NIAH batch:

1. **Acquire the authoritative source.** Locate the latest official NIAH dataset, downloadable records or official record pages. Record dataset title, publisher, version/publication date, access date, licence and source URL. Establish the four Dublin authority boundaries and inclusion rules. Do not assume the 2021 baseline is current.
2. **Build the Dublin work queue.** Filter the authoritative source to the four Dublin local authorities. Preserve the NIAH registration number as the external authority identifier. Sort deterministically by local authority, then registration number, unless official source ordering is required. Maintain processed, pending and blocked status for every source record.
3. **Reconcile before adding.** Compare each candidate against the production catalogue, staging queue, prior NIAH imports and existing archive IDs. Match on NIAH registration number first; use address, coordinates and name as supporting checks. Detect renamed records, multiple structures at one address, boundary changes and shared coordinates. Do not create a second archive object for the same heritage asset. Preserve existing archive IDs. Never recycle or invent an ID.
4. **Verify each record.** Capture official name, NIAH registration number, address/location, building or object type, description, appraisal/importance where available, construction date or period as stated, architect/attribution where stated, local authority, coordinates and official source links. Keep source wording distinct from editorial summaries. Mark missing, ambiguous or conflicting fields explicitly. Do not infer precise dates, architects, functions or coordinates. Record coordinate source and precision; do not silently turn an approximate map location into a field-verified GPS point.
5. **Prepare archive data.** Create or update a staging record using the established schema. Assign a unique CICAN archive ID only after duplicate checks pass. Store the NIAH registration number as a linked external identifier. Preserve provenance and access dates. Distinguish NIAH source facts, other-source facts, editorial interpretation and field observations. Keep image references separate from object facts; record photographer, source, rights/licence, image URL and access date when known. A missing photograph is a tracked gap, not a reason to omit a valid heritage record.
6. **Publish safely.** Validate schema, unique IDs, external-ID uniqueness, required fields, coordinate ranges, source references and image references. Check that the record does not already exist in production. Add map pins only from validated coordinates and only when the canonical catalogue is healthy. Update NIAH filters/layers and counts only if the actual website data model supports it. Commit one atomic, traceable change for the completed batch; split it only when file-size or validation constraints require. Do not claim publication until GitHub Pages deployment and the live website have been checked.
7. **Test.** Parse the complete catalogue and relevant JSON. Confirm no duplicate archive IDs or NIAH registration numbers. Confirm each new record opens and source links work. Check map pin and filter behaviour, coordinate placement and responsive display. Check the live website after deployment. Report failed tests as blockers; do not describe the batch as fully complete.
8. **Update the ledger.** Record batch number, records examined, newly staged, newly published, already present, unresolved, excluded and remaining. Maintain separate counts for catalogue records, NIAH records, photographed records and records with unresolved image gaps. Count a record as imported only when actually present in the validated production catalogue.

## 4. Specialist research algorithm

1. Select one high-value subject from a documented research queue, preferably outside NIAH coverage or an important detail not captured by its record.
2. Search primary sources first: official inventories, excavation reports, museum catalogues, conservation reports, local authority records, archives and published specialist studies.
3. Use reliable secondary sources to add context, not override primary evidence.
4. Capture exact object/site identity, location, chronology, context, source references, image provenance and known uncertainties.
5. Distinguish directly documented facts, specialist interpretations, historical/local tradition, unverified claims, field observations and unresolved questions.
6. Check whether the item is already represented in the catalogue or another specialist report.
7. Prepare a research report and, where safe, a proposed structured record in staging.
8. Do not create a public map pin for a find whose location is only a broad excavation area or whose object-level provenance is uncertain.
9. Record specific next evidence requests, such as a finds register, accession number, excavation context, conservation report or image permission.

A specialist report does not count as a new published catalogue object unless the actual catalogue has been updated and validated.

## 5. Critical production safety gate

The project previously received an empty response for data/objects.json from one file-fetch route. A direct GitHub Contents API read subsequently confirmed the canonical file is approximately 1.25 MB and contains 452 valid JSON objects. The empty response was a retrieval limitation, not proof that the repository file was empty.

Before any NIAH batch changes the production catalogue:
1. Retrieve data/objects.json through the GitHub Contents API or another route capable of returning the full file; do not rely on a truncated/empty connector response.
2. Confirm the repository metadata size and the returned content length are consistent.
3. Parse the complete JSON and record total objects, duplicate archive IDs, and malformed entries.
4. Compare with known snapshots and staging files only where history/reconciliation requires it.
5. Preserve the current canonical catalogue and confirm no existing records would be overwritten or lost.
6. Validate all changes against the complete current catalogue before committing.

If full content cannot be retrieved or parsed, stop production edits but continue source research, queue construction and documentation. Never infer that a file is empty from a connector response alone, and never silently replace a canonical catalogue with a partial snapshot.

### NIAH reference reconciliation
A repeated NIAH registration number is not automatically a duplicate archive object. The archive may document separately identifiable components or micro-details associated with one NIAH-registered parent structure. Check object identity, parent/child relationships and context before deduplicating. Report separately: total archive objects, objects carrying NIAH references, distinct NIAH registration numbers, and repeated NIAH references requiring review. Do not enforce blanket uniqueness of NIAH registration numbers across all archive objects.

## 6. Images and visual evidence

- Prefer photographs of the actual heritage asset from official or reputable sources.
- Record exact image source, rights/licence and attribution requirements.
- Do not use generic or AI-generated images as evidence of a real historic object.
- Do not imply an image depicts the exact object if its identity is uncertain.
- Track image coverage separately from catalogue coverage.
- Prioritise field photography for unresolved high-value image gaps when feasible.

## 7. Geographic and coverage rules

- Scope includes all four Dublin local authorities, not only Dublin City.
- Use official administrative coverage and source coordinates.
- Keep postal address, administrative area, historic place-name and coordinate provenance distinct.
- Do not move an object across authority boundaries based only on an approximate map pin.
- Keep site-level records distinct from object-level records where the source supports that distinction.
- One physical heritage asset should have one canonical archive identity, with related components or finds linked beneath it where appropriate.

## 8. Required end-of-Continue report

Every Continue response must provide:
1. Batch number and workstream — NIAH or specialist.
2. What was researched — named records or subject, not vague progress language.
3. Evidence and source links — primary sources prioritised.
4. Outcome counts — examined, new, duplicate, staged, published, blocked and remaining where known.
5. Repository change — exact file path, commit SHA and link, if a commit occurred.
6. Verification — fetch-back, data validation, website test and deployment status, each stated separately.
7. Production impact — clearly say whether catalogue records or map pins changed.
8. Next target — determined by the cadence and queue, not improvised.

Never claim that a report commit means a website update. Never claim a website test was completed unless it was actually performed.

## 9. Archive metrics dashboard

Maintain separate, dated measures:

| Metric | Counting rule |
|---|---|
| Current in-scope NIAH total | Count from latest official dataset, with version/date |
| NIAH records examined | Candidates checked against sources and catalogue |
| NIAH records published | Present in validated production catalogue |
| NIAH records staged | Prepared but not yet published |
| NIAH records blocked | Missing data, conflict, duplicate uncertainty or production blocker |
| Specialist objects documented | Distinct objects with traceable evidence |
| Locations with photographs | Published locations with at least one correctly attributed image |
| Locations missing photographs | Published locations with no usable reference photograph |
| Source records | Distinct source entries, not objects |
| Duplicate IDs / unresolved references | Must be zero before release |

Never combine objects, locations, image files, source records and pottery sherd counts into one total.

## 10. Rules that cannot be overridden by the autopilot

- No invented facts, archive IDs, coordinates, citations, image provenance or field verification.
- No duplicate records or duplicate map pins.
- No unverified bulk import.
- No production edits while the canonical catalogue integrity gate is failing.
- No claim of a completed website deployment without a live check.
- Preserve existing IDs and established website design.
- GitHub Pages remains the hosting target.
- CICAN spelling is fixed.
- Research and documentation must remain transparent about uncertainty.

## 11. The locked command

When the user writes **Continue**, interpret it as:

> Run the next batch in the CICAN Dublin Autopilot Protocol. Prioritise up to 100 eligible NIAH records in 20-record sub-batches unless the cadence calls for a specialist research batch. Verify sources, reconcile duplicates, prepare or publish only when the production safety gate passes, test every actual change, update the ledger, and report exactly what changed and what remains.

No further direction-setting question is required for ordinary continuation.

**Protocol summary:** Four NIAH batches, then one specialist batch; five NIAH records per batch; four Dublin local authorities; evidence-first; duplicate-safe; catalogue-integrity gate; staged publication; tested releases; transparent progress reporting.
