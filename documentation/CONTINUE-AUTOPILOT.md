# CICAN DUBLIN ARCHIVE — CONTINUE AUTOPILOT

**Status:** Operating protocol  
**Scope:** Dublin City and County Dublin  
**Purpose:** Continue evidence-led discovery in bounded, auditable batches without redesigning or destabilising the existing website.

## User command

When the founder says **CONTINUE**, resume from the repository's latest committed state. Do not ask the founder to choose the next object or repeat the project brief. Select the next logical research batch from the coverage ledger, prior research notes and unresolved leads.

This is a turn-by-turn research and publishing workflow. It does not run in the background and does not claim to monitor sources between conversations.

## Mission and discovery priority

The archive's distinctive focus is the overlooked physical detail of Dublin. Search beyond conventional attractions and landmarks. Give high priority to individually photographable details such as:

- Historic paving, setts, cobbles, kerbs, steps, thresholds and street surfaces.
- Coal-hole covers, basement lights, gratings, drainage covers, boot scrapers and other ironwork.
- Inscriptions, carved dates, maker's marks, boundary stones, milestones and street names.
- Historic street furniture, lamp standards, post boxes, bollards, railings and utility features.
- Archaeological remains, exposed historic fabric, reused masonry, ruins, graveyards and small memorial details.
- Architectural fragments, shopfront details, industrial remains, canal, river, railway and port infrastructure.
- Major buildings and monuments where they contain individually significant details.

Chronology is a research lens, not a restriction: investigate the earliest documented occupation and continue through every later period. Geographic coverage must include all four Dublin local authorities, not only central postal districts.

## Source hierarchy

Prioritise original and authoritative evidence:

1. National Monuments Service: Record of Monuments and Places, Sites and Monuments Record, archaeological surveys, excavation reports and Historic Environment Viewer.
2. National Inventory of Architectural Heritage and its individual building/structure records.
3. National Archives of Ireland, Dublin City Archives and other relevant local authority archives.
4. Dublin City Council archaeology, conservation, development-plan, historic-street and public-realm records; corresponding Fingal, South Dublin and Dún Laoghaire-Rathdown records.
5. Tailte Éireann / Ordnance Survey historic and current mapping, townland and boundary datasets.
6. OPW, Heritage Council, Transport Infrastructure Ireland, Waterways Ireland, Irish Railway Record Society, university repositories, museum catalogues and other specialist institutions.
7. Scholarly publications and reputable local-history research as corroboration and discovery leads.

A search result or secondary summary is a lead, not sufficient evidence where the underlying record can be consulted. Record exact title, identifier, URL, publisher, access date and the precise claim it supports. Note conflicts and gaps.

## Discovery and record rules

- Search the existing object catalogue and source registry before creating anything. Check alternate names, addresses, coordinates, parent records and NIAH/NMS identifiers for duplicates.
- Create one record per independently meaningful, photographable object or detail. Do not hide several distinct objects inside a generic building record.
- A detail mentioned in a building appraisal may be recorded as an individually photographable sub-object, but clearly state when the parent property's coordinate does not locate the exact detail.
- Keep a parent-child relationship where a micro-object belongs to a larger site or structure.
- Never invent an object, historical date, inscription transcription, source, photograph, licence, access permission or coordinate.
- A missing online photograph is not a reason to omit a well-supported discovery.
- Do not assert that an object survives today merely because an old record describes it. Distinguish documented historic existence from present-day survival.
- Do not mark an object as photographed, field-verified or line-art complete until the founder confirms it and the corresponding evidence is registered.
- Do not infer public access from a map pin. Record private property, restricted grounds, traffic islands, railway environments, active works, cemetery rules and other access cautions.
- Respect archaeological protections. Never recommend touching, moving, collecting, cleaning, excavating or disturbing historic material.

## Verification and location statuses

Use the existing schema and established values wherever possible. Do not silently invent new status enums.

At minimum, distinguish:
- Historically and physically verified by an authoritative current record.
- Partially verified, with explicit outstanding questions.
- Research lead only, not yet eligible for the confirmed object catalogue.
- Historical object/site with present survival unconfirmed.
- Confirmed object awaiting founder photography.

Coordinate rules:
- Preserve the original coordinate reference and source reference exactly.
- Record the coordinate reference system and transformation method when converting coordinates.
- Separate transformation accuracy from the accuracy of the source point.
- A building centroid or NIAH property point must not be presented as the exact location of a coal-hole cover, plaque or other micro-detail.
- Use a source-derived point only when its relationship to the object is honestly described.
- If exact position is not supported, record the address/area as a research lead or use an explicitly approximate location only if the existing map/data model supports that distinction.
- Field GPS becomes field-verified only after an on-site fix and object-to-coordinate match are documented.

## Photograph and image policy

- Search for online reference imagery when useful, but do not make it a prerequisite for a record.
- For every reference image, retain exact image URL, source page, creator, date where available, licence, licence URL, attribution and image role.
- Clearly distinguish exact-object images from street-context images.
- Do not use generated or generic stock imagery as evidence that a real object exists.
- Founder originals are separately credited and preserved. Create faithful line art only from the corresponding founder original unless a separately documented rights basis permits adaptation.

## Batch workflow

For each CONTINUE run:

1. Read this protocol, README, geographic coverage, current catalogues, source registry, visual inventory, latest research notes and unresolved leads.
2. State the next bounded research question and geographic/historical scope internally before searching.
3. Search authoritative collections systematically; follow source links to the underlying records and inspect relevant pages/maps/reports.
4. Extract candidate objects and verify each candidate against the existing catalogue.
5. Classify findings as confirmed records, partial records or research leads. Do not force weak leads into the confirmed catalogue.
6. For confirmed additions, update all linked data consistently: master objects, sources, visual inventory and the corresponding research note. Update website/map data only through the repository's established architecture.
7. Preserve all existing records and working UI. No redesign, framework migration or unrelated refactor during research batches.
8. Run the repository quality workflow and any relevant schema/data checks. Resolve failures before declaring the batch complete.
9. Review the resulting diff for accidental deletions, duplicate IDs, missing source links, bad coordinates, incorrect parent references, unsupported claims and image attribution gaps.
10. Commit or merge only a validated batch. Report the exact commit/PR and deployment status; never claim deployment until Actions confirms it.
11. Update geographic/topic coverage notes and leave a clear next-research checkpoint so the following CONTINUE resumes without repetition.

## Batch size and stopping rule

Prefer a coherent, source-bounded batch over an arbitrary target count. A batch may contain one exceptionally complex archaeological site or several well-documented micro-objects. Do not pad a batch with weak leads to reach a number. Continue investigating a source collection or street corridor until its relevant records have been checked, then log what was and was not covered.

## Definition of done for each batch

A batch is complete only when:
- Each accepted object has a unique ID and a traceable evidence chain.
- All referenced sources exist in the source registry.
- Parent/child links and visual-inventory records are consistent.
- Coordinates and their limitations are explicitly described.
- Photograph and access instructions are useful and safe.
- Research notes record sources, findings, exclusions, conflicts and unresolved leads.
- Automated quality checks pass.
- Deployment status is accurately reported.

## Founder-facing response after each batch

Report concisely:
- Number of new confirmed records and number of research leads (separately).
- The most interesting overlooked details discovered.
- Geographic area and historical periods covered.
- Source institutions and links consulted.
- Any coordinates that are approximate or require field verification.
- Photography priorities and access cautions.
- Validation and deployment status.
- The next research area/topic that CONTINUE will pick up.

Do not ask the founder to say CONTINUE again after every small internal step. Finish the current batch, report it, and make clear that the next **CONTINUE** starts the next batch.

## Existing project protections

- Keep the current website and map experience intact.
- Do not remove or replace existing catalogue data.
- Do not mark all records as map-ready if their exact object location is not supported.
- Do not conflate the master archive with the set of currently published map pins.
- Keep website-first delivery; native/mobile app work is a later phase.
- Preserve the CICAN spelling and the established visual identity.
