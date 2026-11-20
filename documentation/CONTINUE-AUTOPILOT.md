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

### Stage 1 — NIAH Dublin registration coverage

**Latest completed production batch — Batch 033 (20 November 2026):** five Cooldrinagh / Leixlip NIAH registrations (11201008, 11201009, 11201013, 11201015 and 11201016) were individually checked against their Buildings of Ireland pages and matched to the official national CSV by exact REG_NO. All passed full-master, public-collection and source-registry duplicate checks and were added to the master catalogue, public NIAH collection, source registry and visual inventory. All remain PARTIALLY_VERIFIED; no NIAH-linked photographs were reused and no founder field photography is claimed. Post-batch totals: 574 master objects, 454 public NIAH registrations, 692 sources and 574 visual records. The official register reconciliation is 454/454 against the 7,535-record four-authority denominator; 7,081 registrations remain in the review queue. Next: Batch 034, continuing from the official missing-registration queue.\n\n**Latest official bulk census baseline — 20 November 2026:** the national NIAH CSV contains 7,535 unique Building Survey registrations for County Dublin across the four target local authorities: Dublin City 5,692; Fingal 667; South Dublin 790; Dún Laoghaire-Rathdown 386. After Batch 033, the public collection contains 454 registrations, all 454 exact-matched to the official CSV; 7,081 remain in the review queue. The earlier 3,396 planning target is superseded. See [Four-Authority Bulk Census 001](NIAH-FOUR-AUTHORITY-BULK-CENSUS-001.md), [Batch 030](NIAH-DUBLIN-FOUR-AUTHORITY-FASTTRACK-BATCH-030.md) and [Batch 031](NIAH-COOLDRINAGH-VERIFICATION-PUBLICATION-BATCH-031.md) and [Batch 032](NIAH-LUCAN-DEMESNE-WEIR-VERIFICATION-PUBLICATION-BATCH-032.md).

The founder has approved a **maximum target of 100 official-register-checked NIAH registrations per batch**. This is a ceiling, not a quota or deadline. Publish fewer when fewer records pass every requirement. Keep official-register verification distinct from full object verification and founder field verification; use PARTIALLY_VERIFIED whenever individual-page, condition, access or field checks remain outstanding.

Use the official national NIAH CSV bulk source first:
- https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data

Filter the official source by the four Dublin local authorities: Dublin City Council, Fingal County Council, South Dublin County Council and Dún Laoghaire-Rathdown County Council. Use the official registration number as the primary key. Compare against the complete master catalogue, public NIAH collection and source registry before creating any record.

The GitHub Actions quality workflow runs:
- `scripts/audit-niah-registrations.mjs` to recheck current public registrations against the official national CSV.
- `scripts/audit-niah-dublin-coverage.mjs` to build the four-authority denominator and a machine-generated queue of official registrations missing from the current public collection.

The missing-registration queue is a discovery input, not automatic approval. A batch importer may create PARTIALLY_VERIFIED records only after checking exact official registration, required CSV fields, authority, coordinates/CRS, official record link and duplicates against the master, public collection and source registry. Keep source-derived coordinates clearly labelled, preserve image rights as a separate check, and do not reuse linked images without a verified licence. Individual-page, current-condition, access and field checks remain outstanding where not separately completed. Only an official NIAH registration number qualifies for this Stage 1 stream; RPS-only and SMR-only records remain excluded.

After verification, publish up to 100 accepted records in a coherent batch, update all linked catalogue/source/visual/SEO/sitemap data, run the quality gate, inspect the diff and confirm deployment separately. If the workflow, denominator or source data is unresolved, stop and document the blocker rather than guessing.

### Other discovery streams

For non-NIAH discovery work, prefer a coherent, source-bounded batch over an arbitrary target count. A batch may contain one exceptionally complex archaeological site or several well-documented micro-objects. Do not pad a batch with weak leads to reach a number. Continue investigating a source collection or street corridor until its relevant records have been checked, then log what was and was not covered.

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

## Latest autopilot checkpoint — Batch 127

The latest committed discovery batch is [Visual Discovery Batch 127](VISUAL-DISCOVERY-BATCH-127.md). It adds three parent-linked photographic detail records for the c.1920–30 Ringsend concrete boat slip (DCIHR 18-12-118): surviving iron posts and railings, concrete mooring blocks, and the cast-iron lamppost recorded at the north-west corner. The source is Dublin Port's 3FM EIAR Appendix 16-1. Current survival and safe public viewing remain to be field-checked. Next research should continue along the Great South Wall / Ringsend heritage corridor, prioritising documented parapet and ladder details that are not already represented in the catalogue; check current scheme changes and access before creating new records.

## Latest autopilot checkpoint — Batch 128

The latest committed discovery batch is [Visual Discovery Batch 128](VISUAL-DISCOVERY-BATCH-128.md). It adds the linear Great South Wall parent record (DUB-INF-0034) and two Ballast Office Wall child targets: visible low parapet remnants (DUB-DET-0012) and the exposed full-height north-facing wall beside the ESB cooling-water outfall (DUB-DET-0013). Source: Dublin Port 3FM *Great South Wall: Overview of Impacts, Mitigation & Interpretation*. Both detail records intentionally have no independent coordinates. The cooling-water outfall is an industrial/utility edge; no public access is assumed. Next: inspect the conservation/restoration specifications and engineering drawings for specific historic coping, steps and fittings, distinguishing surviving fabric from proposed restoration.


## Latest autopilot checkpoint — Batch 129

The latest committed discovery batch is [Visual Discovery Batch 129](VISUAL-DISCOVERY-BATCH-129.md). This is a research-only batch: it registers Dublin Port 3FM EIAR Appendix 16-6 and adds a research note distinguishing original basalt-containing parapet capping, historical timber coping (most reportedly rotted and replaced with cement), later square stone coping and proposed reconstruction. No new physical object was added because neither source locates surviving examples individually. Next: inspect RPS drawings S26-HER-XX-DR-HE 100-1000 to 1006 and conservation survey/photo schedules for chainage-specific distinctions between original fabric, later repair, dismantled material and proposed rebuild. Never treat proposed reconstruction as surviving heritage; verify access before field photography.


## Latest autopilot checkpoint — Batch 137

The latest discovery batch adds five separately catalogued street-detail records in Dublin 2 and Dublin 8: three historic cast-iron post boxes (Saint Patrick’s House / South Circular Road; South Circular Road, Islandbridge; and Townsend Street), plus the cast-iron boot scraper and pavement coal-hole cover recorded at 29 Fitzwilliam Street Upper. Sources are official NIAH surveys 50080463, 50080012, 50020308 and 50930104, with Dublin City Council Policy BHA18 used for public-realm conservation context. All five remain PARTIALLY_VERIFIED and await founder field photography. NIAH host-building coordinates are approximate discovery locators, not exact micro-feature GPS; do not claim present survival until field checked. Next: continue systematic NIAH searches for small public-realm details, especially historic post boxes, boot scrapers, coal-hole covers, basement lights and cast-iron fittings in Dublin 1, 2 and 8; check existing registration IDs before adding anything.


## Latest autopilot checkpoint — Batch 138

Batch 138 adds three NIAH-surveyed Georgian townhouse parent records and six linked micro-detail records: remnants of cast-iron boot scrapers and a paired set of coal-hole covers at 4 Mountjoy Square North (NIAH 50010819); a boot scraper and pavement coal-hole cover at 43 Fitzwilliam Place (NIAH 50930208); and a boot scraper and pavement coal-hole cover at 21 Pembroke Street Upper (NIAH 50930290). Existing 9 Charleville Mall and Marlborough Street post-box records were checked and deliberately not duplicated. All micro-detail points use approximate host-building coordinates and await founder GPS/field photography. Next: continue official NIAH searches for historic basement lights, gratings, coal-hole covers, boot scrapers, street furniture and small inscriptions, checking both building and feature registrations before creating new IDs.


## Latest autopilot checkpoint — Batch 139

Batch 139 adds three NIAH-surveyed Georgian townhouse parent records and six linked micro-detail records in Dublin 2: the wrought-iron entrance boot-scrape and pavement coal-hole cover at 25 Hatch Street Lower (NIAH 50110519); the cast-iron boot scraper, pavement coal-hole cover and basement-window metal grille at 26 Fitzwilliam Square (NIAH 50930219); and the pavement coal-hole cover at 35 Harcourt Street (NIAH 50920229). All details have individual visual capture plans and remain awaiting founder photography. NIAH points locate host buildings, not exact micro-features; present survival, exact positions and condition require lawful field verification. The 26 Fitzwilliam Square grille is recorded only as metal, not assumed cast iron. Next: continue systematic NIAH review of Dublin 1 and Dublin 2 for historic basement lights, gratings, street furniture, boot scrapers, coal-hole covers and small inscriptions; check every candidate against the complete object and source catalogues before creating new records.


## Latest autopilot checkpoint — Batch 140

Batch 140 adds two previously unregistered NIAH cast-iron post boxes in Dublin 3: the Edward VII / McDowall Steven pillar box at Ballybough Road and O'Sullivan Avenue (NIAH 50120227), and the P&T pillar box at Philipsburgh Avenue and Morroch Terrace (NIAH 50120017). It also adds the James Joyce Centre at 35 North Great George's Street (NIAH 50010980) as a parent building with three linked visual detail records: cast-iron air vents below windows, a Victorian bell push and a cast-iron corner lamp standard. Ten other Clontarf/North Strand post-box leads were checked and deliberately not duplicated because they already exist in the catalogue. All new targets await founder photography; the James Joyce Centre point is a host-building locator, not exact micro-feature GPS. Next: continue Dublin 1 and Dublin 3 official NIAH review, then expand into underrepresented Dublin 9 and Fingal; prioritise individually photographable street details, industrial traces, ironwork and inscriptions.


## Latest repository checkpoint — Batch 145 research pass

The latest catalogue-expansion commit remains **Batch 144**. Batch 145 is a documentation-only Fingal research pass and does not alter catalogue data. It records six NIAH research leads in Lusk, Swords and Skerries: Clay Cottage's inscribed 1754 boundary-wall boulder (11323024); Mill Bridge and its benchmark-inscribed parapets / Peter Wilson plaque (11343016); the Rathbeale Road cast-iron post box (11335013); the nearby c.1830 thatched cottage (11335014); Saint MacCullin's Church in Lusk (11323010); and the Hamilton Monument in Skerries (11311010). No CICAN IDs, source-registry entries, visual records or map pins were created because the complete object catalogue could not be inspected for reliable deduplication during this pass. The exact Irish Grid references and source limitations are recorded in [Fingal Discovery Research Batch 145](FINGAL-DISCOVERY-RESEARCH-BATCH-145.md). Next: inspect the full canonical object and source catalogues, resolve duplicates for all six candidates, and promote only those that pass the complete checks. Start with the inscribed 1754 boulder at Clay Cottage.


## Latest autopilot checkpoint — Batch 146

Batch 146 is now the latest catalogue-expansion checkpoint. It adds twenty NIAH-backed primary objects and three parent-linked micro-details across Lusk, Swords, Skerries, Donabate and Killeek: the inscribed 1754 boulder at Clay Cottage; Rathbeale Road post box and thatched cottage; Saint MacCullin's Church; Hamilton Monument; Mill Bridge with its Peter Wilson plaque and benchmark parapets; Swords Carnegie Free Library; Scotchstone Bridge; two separately registered Lissenhall bridges; the Hearse Road house/former forge complex; Killeek Bridge; the five-arch Lissen Hall Bridge; three historic cast-iron water pumps; two Newbridge House gate-pier groups; the Newbridge House c.1800 bridge; and The Thatch Cottage at Ballisk. Full-catalogue deduplication found no matching primary NIAH references or object names. All 23 records are PARTIALLY_VERIFIED and await founder photography. Irish Grid points were transformed using EPSG operation 1641 and remain source-derived, not founder GPS. The Ballisk Thatch Cottage record has no usable NIAH coordinate (-1,-1) and is deliberately unmapped. See [Fingal Discovery Expansion Batch 146](FINGAL-DISCOVERY-EXPANSION-BATCH-146.md). Next: investigate Saint Columb's Well and associated pump (NIAH 11343013), the c.1780 Newbridge House bridge (11336004), and the medieval/early Christian fabric of Lusk and Swords, checking the National Monuments Service records and the full catalogue before any further promotion.


## Latest autopilot checkpoint — NIAH and Specialist Research Batch 003 (20 November 2026)

Batch 003 checked four NIAH candidates against their official individual records: Lucan House cemetery and medieval remains (11201140), Rathfarnham weir (11211029), Saint Matthias' Church (60260255), and Pastorville, Swords (11335003). One specialist source was also reviewed: the National Monuments Service's 1998 Dublin RMP Manual, which lists a possible tower house, church, graveyard and cross site in the Lucan historic-town group (DU017-01901 to DU017-01904). The RMP material is a research lead/corroborative context only; exact correspondence with features inside the NIAH cemetery site and present survival remain unverified. Coolevin House (11205035) remains an eligible held NIAH candidate and was not counted among the four checks. No catalogue objects, sources, coordinates or map pins were changed. Original individual-page coordinate pairs remain untransformed; these are treated as legacy Irish Grid / National Grid (TM65, EPSG:29902), not ITM. Crucially, the Batch 002 locality-based authority labels remain provisional: do not treat Rathfarnham as Dublin City without point-in-polygon verification. Next: resolve Coolevin House against the complete catalogue and official authority boundaries, then continue the 4 NIAH + 1 specialist cycle. See [NIAH and Specialist Research Batch 003](NIAH-FIRST-DISCOVERY-AND-SPECIALIST-RESEARCH-BATCH-003.md).


## Latest autopilot checkpoint — NIAH and Specialist Research Batch 004 (20 November 2026)

Batch 004 checked four official NIAH entries in the Neillstown / Clondalkin / Cloverhill Road corridor: Coolevin House (11205035), Neilstown Lodge (11205036), the former railway station building at Cloverhill Road (11205037), and the single-arch railway bridge (11205038). Original Irish Grid / National Grid coordinate pairs and NIAH descriptions are recorded in [NIAH and Specialist Research Batch 004](NIAH-AND-SPECIALIST-RESEARCH-BATCH-004.md). South Dublin County Council's 2025 SEA report identifies Coolevin House and Neilstown Lodge as notable protected structures in the Clondalkin planning area; the Council's 2016–2022 RPS schedule also lists both. The station and bridge's precise local-authority assignments remain pending point-in-polygon verification. One specialist NMS-hosted source was reviewed: Bradley and King's 1988 County Dublin Urban Archaeology Survey, which describes two granite crosses and a granite font in Clondalkin churchyard, among other early Christian precinct fabric. These are research leads requiring current SMR and full-catalogue reconciliation, not automatic new objects. No catalogue, source registry, visual inventory, map pins or website code were changed. The ordinary file-content fetch returned an empty body; Batch 005 recovered the complete master catalogue via its Git blob, so full-catalogue deduplication is no longer blocked. Next: obtain a verified complete catalogue retrieval, compare all four NIAH records by reference/name/address/component identity, spatially verify local-authority assignments, and inspect current Clondalkin SMR records for the crosses and font.


## Latest autopilot checkpoint — Batch 005 (20 November 2026)

Batch 005 recovered and parsed the complete canonical catalogue via the Git blob route after the ordinary content fetch returned an empty body. Baseline: 452 objects, 452 unique IDs, 440 objects with NIAH references, 362 distinct NIAH references, 566 source records, 452 visual records and 133 reference-image entries. Full catalogue/source/visual reconciliation found no matches for four candidates: Cappaghmore Lodge (11205029), Neillstown house (11205033), Lucan-Newlands Road railway bridge at Cappagh (11205034), and Cloverhill Road house at Raheen (11205039). Four new objects DUB-BLD-0186 to DUB-BLD-0189 were added as PARTIALLY_VERIFIED, with source-derived WGS84 locators, individual NIAH source records and matching visual records awaiting founder photography. Individual NIAH page coordinate pairs (306xxx,232xxx) are treated as legacy Irish Grid / National Grid (TM65 / EPSG:29902), not ITM; they were transformed with operation 1641. The NIAH bulk dataset distinguishes Irish Grid and ITM fields. The March 2026 SDCC Clondalkin Conservation Plan was registered as a research source and describes two separate granite crosses, DU017-041003 and DU017-041004, while listing a font, DU017-041007. These remain research leads, not catalogue objects, because current survival and exact positions are unverified. Totals after batch: 456 objects, 571 sources, 456 visual records, 133 reference images, 53 research records. Coverage audit remains NOT_SPATIALLY_VERIFIED for all four authorities; Cappagh, Neillstown and Raheen are settlement work-zone labels only. See [Batch 005](NIAH-AND-CLONDAKLIN-RESEARCH-BATCH-005.md). Next: resolve NIAH 11205032 (previously HTTP 403), inspect current NMS SMR descriptions for the crosses and font, and continue the NIAH-first cycle.


## Latest repository reconciliation — Batches 010–012 (20 November 2026)

The repository now also contains three research-only Fingal heritage reports after Batch 005. Batch 010 records Lanistown Castle (SMR DU012-004 / RPS 493), the associated but distinct double-ditched enclosure DU012-101, five Lanestown cropmark records DU012-073 to DU012-077, and the tentative earlier-house site DU012-060. Batch 011 distinguishes the former Newbridge lodge (RPS 495), lime kiln, walled garden and two restored glasshouses as component candidates; the lodge has a protected-structure reference, while the other components still lack separate statutory registrations and exact coordinates. Batch 012 reconciles Kilcrea Church DU012-016001 and graveyard DU012-016002, enclosure DU012-017, tidal mill DU012-018, ring-ditch DU012-072, Kilcrea House NIAH 11336025, the Kilcrea railway bridge NIAH 11336027 (possible RPS 502 match), Corballis House NIAH 11336028, Hearse Road house/forge NIAH 11336026 (possible RPS 505 match), and further Corballis records DU012-019, DU012-020, DU012-070, DU012-086, DU012-087 and DU012-097. These three batches are documentation-only; no new catalogue objects or map pins were published. Their exact-reference audit was performed against the 456-object catalogue. Do not promote cropmarks, excavated features, inaccessible mill remains or estate-level components as visible standing structures. Next: verify individual NIAH records 11336004, 11336025, 11336027 and 11336028 against the complete master, and retrieve current NMS SMR geometries/descriptions for Kilcrea and Corballis before deciding whether any archaeological records can be safely mapped. Preserve explicit ITM coordinates from the Fingal heritage audit separately from the legacy Irish Grid coordinates displayed on individual NIAH pages.


## Latest autopilot checkpoint — Batch 013 (20 November 2026)

Batch 013 added four new NIAH-backed objects after full-catalogue identity and coordinate-neighbour checks: Mack's Bridge (11336004; DUB-INF-0189), Kilcrea House (11336025; DUB-BLD-0190), Kilcrea railway bridge (11336027; DUB-INF-0190), and Corballis House (11336028; DUB-BLD-0191). Mack's Bridge is supported by the Fingal Heritage Audit and 2019 EIAR; its individual NIAH page and detailed appraisal were not retrieved, so the description is deliberately limited. Three explicit ITM coordinate pairs from the EIAR were transformed from EPSG:2157 to WGS84; Corballis House uses the individual NIAH page's legacy Irish Grid pair, not ITM. All four are PARTIALLY_VERIFIED, source-derived and awaiting founder photography. The 2022 Fingal Donabate–Portrane Heritage Audit was added as a specialist source and reviewed for Kilcrea Church DU012-016001, graveyard DU012-016002, enclosure DU012-017, tidal mill DU012-018 and ring-ditch DU012-072. These remain research leads; 2021 condition/access notes are not current, the mill was marked inaccessible and the cropmark sites were not visible at ground level. No archaeological SMR objects or map pins were added. A full-catalogue check corrected Batch 012's stale no-match statement: NIAH 11336026 is already DUB-BLD-0179, Hearse Road house/former forge, so no duplicate was created. Existing Newbridge NIAH 11336002, 11336003 and 11336005 remain distinct from Mack's Bridge 11336004. Totals after Batch 013: 460 objects, 577 sources, 460 visual records, 133 reference images and 54 research records. Fingal local-authority spatial assignment remains unverified. See [Batch 013](NIAH-NEWBRIDGE-KILCREA-CORBALLIS-RESEARCH-BATCH-013.md). Next: retrieve current NMS SMR descriptions/geometries for Kilcrea's five archaeological records, confirm RPS 502 against NIAH 11336027, and continue to Lissenhall Great and Ballymadrough.

## Latest NIAH-only checkpoint — Batch 022 (20 November 2026)

The latest NIAH-only verification pass is [Rush / Kenure Registration Verification Batch 022](NIAH-RUSH-KENURE-REGISTRATION-VERIFICATION-BATCH-022.md). Seven official NIAH registrations were checked: 11318003, 11324007, 11324020, 11324024, 11324010, 11324011 and 11324031. Five individual NIAH pages and two official NIAH search listings were retrieved. The complete 460-object master catalogue and 577-record source registry were parsed; none of the seven exact registration numbers or corresponding Rush/Kenure object identities was found. However, the official coordinate rows/CRS could not be retrieved, and individual NIAH pages for the post box and Lower Main Street pump remain outstanding. Accordingly this batch is research-only: zero production records, source records, visual records, map pins or SEO page changes. Do not infer CRS from the NIAH page coordinate pairs. The founder's current scope rule is NIAH registrations only for this publishing stream; RPS-only and SMR-only features are not eligible. Next: obtain the official Dublin dataset/live feature attributes for these seven registrations, then continue NIAH-only discovery through Rush/Kenure and nearby Lusk/Fingal. Only after source fields, coordinates, provenance and duplicate checks are complete should records be promoted to the master, NIAH public collection, individual SEO pages and sitemap.

## Latest NIAH-only checkpoint — Batch 023 (20 November 2026)

[Batch 023 — Rush / Kenure NIAH verification and Kilbush House](NIAH-RUSH-KENURE-KILBUSH-HOUSE-BATCH-023.md) retrieves the full individual NIAH pages for Rush post box 11324007 and Lower Main Street pump 11324020. The pump's NIAH date range (1870–1890) and written description (c.1900) differ; both are preserved. Their page coordinates remain unlabelled by CRS and are not used for mapping. The official NIAH live feature query / Dublin CSV row for the seven Batch 022 candidates remains outstanding.

One new NIAH object is now added consistently to master and public data: **DUB-BLD-0192 — Kilbush House (11324032)**. The NIAH individual page and Fingal County Council's 2022 Thatch Project Gazetteer Record FCC-TS-27 independently identify the house; the Fingal report supplies explicit ITM E 727000.8903, N 754343.8243. Converted with PROJ IRENET95 to WGS 84 (1), accuracy 1 m; source-point accuracy remains unspecified. The record is PARTIALLY_VERIFIED and awaits founder field photography. No report image was reused. Totals: 461 master objects, 341 NIAH-only public records, 579 sources, 461 visual records. The 341-record public tranche is not exhaustive; the founder's target remains 3,396 Dublin NIAH registrations. Next: resolve the seven held Rush/Kenure official data rows, then continue through NIAH-registered Rush/Kenure and Lusk candidates. RPS-only and SMR-only objects remain outside the NIAH publishing stream.


## Latest NIAH-only checkpoint — Batch 024 (20 November 2026)

[Batch 024 — Lusk / Greatcommon NIAH registration 11323022](NIAH-LUSK-GREATCOMMON-BATCH-024.md) adds **DUB-BLD-0193 — Rose Cottage (Roseville)** after full-catalogue and source-registry deduplication. The official NIAH individual page confirms registration 11323022, Regional rating, Architectural/Social interest and a c.1860 five-bay thatched house. Fingal County Council's Thatch Project 2022 Gazetteer Record FCC-TS-28 independently identifies the property and supplies explicitly labelled ITM E 721936.5424, N 756013.5006. The point was transformed from EPSG:2157 to WGS 84 using PROJ operation IRENET95 to WGS 84 (1), stated transformation accuracy 1 m; source-point accuracy remains unspecified. The NIAH page's unlabelled coordinate pair was not used. The record is PARTIALLY_VERIFIED, SOURCE_DERIVED and awaiting founder photography; private-property access restrictions apply and 2022 roof observations are not current condition verification. Totals: 462 master objects, 342 NIAH-only public records, 580 sources, 462 visual records. Next: retrieve and reconcile the official NIAH National Thatch Census rows and images where rights permit; continue Lusk/Fingal NIAH-only discovery and resolve the seven held Rush/Kenure references from Batch 022. The 342-record public tranche remains incomplete; the founder's target remains 3,396 Dublin NIAH registrations.


## Latest autopilot checkpoint — NIAH Batch 031 (20 November 2026)

Batch 031 adds six individually checked NIAH registrations in Cooldrinagh / Leixlip, South Dublin County: 11201005 (Leixlip Road detached house), 11201007 (granite milestone), 11201010 (1 Cooldrinagh Lane), 11201011 (2 Cooldrinagh Lane), 11201012 (3 Cooldrinagh Lane) and 11201014 (Cooldrinagh House). Each individual Buildings of Ireland record page was checked and its REG_NO reconciled to the official national CSV. The full 562-object pre-batch master, 442-record public NIAH collection and 680-source registry were checked for exact registration duplicates; no matches were found. Six objects, six official NIAH source entries, six public NIAH entries and six visual workflow entries were added. The CSV's ITM EPSG:2157 and WGS84 coordinates are preserved; the unlabelled coordinate pairs displayed on individual pages are not used for mapping. All six records are PARTIALLY_VERIFIED and SOURCE_DERIVED; access, present survival, condition and exact on-site position remain unverified. No linked NIAH images were reused and no founder photography is claimed. Totals: 568 master objects, 448 public NIAH registrations, 686 sources and 568 visual records. Remaining official NIAH registrations for review: 7,087. See [NIAH Cooldrinagh Verification & Publication Batch 031](NIAH-COOLDRINAGH-VERIFICATION-PUBLICATION-BATCH-031.md). Next: continue with the next unprocessed official registrations from the audited missing-registration queue, keeping batches bounded by the number that can be individually and accurately verified.


## Previous autopilot checkpoint — NIAH Batch 032 (20 November 2026)

Batch 032 adds one official NIAH registration in Lucan Demesne: 11201017, a single-stage weir dated 1770–1800 (c.1785), Regional rating, with Architectural and Technical special interest. The individual Buildings of Ireland page was checked and its REG_NO reconciled to the official national CSV. The full 568-object pre-batch master, 448-record public NIAH collection and 686-source registry were checked for exact duplicates; none was found. One object, one official source entry, one public NIAH entry and one visual workflow entry were added. The CSV's ITM EPSG:2157 (E 702113, N 735363) and WGS84 (53.358603, -6.465972) coordinates are preserved; the individual page's unlabelled coordinate pair is not used. The record is PARTIALLY_VERIFIED and SOURCE_DERIVED; current condition, access, precise on-site position and founder photography remain unverified. No linked NIAH photograph was reused. Totals: 569 master objects, 449 public NIAH registrations, 687 sources and 569 visual records. Remaining official NIAH registrations for review: 7,086. Nearby candidates 11201008, 11201009, 11201013, 11201015 and 11201016 appeared in the official NIAH search listing but remain held until their individual pages and CSV rows are checked. See [NIAH Lucan Demesne Weir Verification & Publication Batch 032](NIAH-LUCAN-DEMESNE-WEIR-VERIFICATION-PUBLICATION-BATCH-032.md). Next: continue with those unprocessed candidates, one at a time as necessary to preserve full source verification.


## Latest autopilot checkpoint — NIAH Batch 033 (20 November 2026)

Batch 033 adds five official NIAH registrations in Cooldrinagh / Leixlip: 11201008 (gate piers and boundary wall), 11201009 (former farm outbuilding), 11201013 (former walled garden), 11201015 (former stables and coach-house range) and 11201016 (T & T cast-iron water pump). Each individual Buildings of Ireland page was checked and its REG_NO reconciled to the official national CSV. The full 569-object pre-batch master, 449-record public NIAH collection and 687-source registry were checked for exact duplicates; none was found. Five objects, five official source entries, five public NIAH entries and five visual workflow entries were added. CSV ITM EPSG:2157 and WGS84 coordinates are preserved; unlabelled individual-page coordinate pairs are not used for mapping. All five records are PARTIALLY_VERIFIED and SOURCE_DERIVED; access, present survival, condition, exact on-site position and founder photography remain unverified. No linked NIAH images were reused. The gate-pier record 11201008 and farm-outbuilding record 11201009 may describe physically associated features; their exact overlap is unresolved, so the archive preserves the separate official registrations without asserting separate physical gate-pier objects. Totals: 574 master objects, 454 public NIAH registrations, 692 sources and 574 visual records. Remaining official NIAH registrations for review: 7,081. See [NIAH Cooldrinagh Verification & Publication Batch 033](NIAH-COOLDRINAGH-VERIFICATION-PUBLICATION-BATCH-033.md). Next: continue from the official missing-registration queue, prioritising complete individual-page and CSV reconciliation over batch size.


## Latest research checkpoint — NIAH Lucan Spa Corridor Batch 034 (20 November 2026)

Batch 034 is research documentation only: [NIAH Lucan Spa Corridor Research Batch 034](NIAH-LUCAN-SPA-CORRIDOR-RESEARCH-BATCH-034.md). The official individual NIAH page for 11201019 (Old Lucan Spa Hotel / Spa Restaurant, built 1795) was checked. South Dublin County Council's 2021 archaeological assessment was reviewed for the wider spa landscape: the spa well, eighteenth-century bath-house/oratory (RMP DU017-020; NIAH 11204015 context), 1795 Old Spa Hotel, and later 1891 Spa Hotel / Spa Restaurant / Spa House arrangement must remain distinct unless exact physical identity is proven. The report states the spa hotel first opened in 1758 after discovery of an iron spa near Chapel Hill and describes its later history and historic mapping. NIAH 11201021 (Leixlip Road public house, c.1847) was also checked at individual-page level as the next candidate. No production records were added: official CSV / feature-service rows and coordinate provenance were not retrieved, and the large master/public JSON files returned empty content through the current file endpoint, preventing certified full-catalogue deduplication. Do not infer CRS from unlabelled NIAH page coordinate pairs. Next: retrieve official NIAH CSV or FeatureServer rows for 11201019 and 11201021, recover complete master/public/source/visual datasets, then publish only candidates passing all checks. The last confirmed production totals remain 574 master objects, 454 public NIAH registrations, 692 sources and 574 visual records; the four-authority Building Survey denominator remains 7,535.


## Latest research checkpoint — NIAH Lucan Sequence Batch 035 (20 November 2026)

Batch 035 is research-only: [NIAH Lucan Sequence Research Batch 035](NIAH-LUCAN-SEQUENCE-RESEARCH-BATCH-035.md). The official Buildings of Ireland Lucan search results and record metadata confirm 11201021, a Regional-rated c.1847 public house on Leixlip Road, described as three originally terraced buildings. The same official Lucan search results surfaced 11201023, a c.1850 former orchard boundary wall on Leixlip Road; its individual page timed out and remains a search-result candidate only. The official NIAH FeatureServer service/layer metadata was inspected: layer 0 uses ITM EPSG:2157 and exposes REG_NO, local authority, description, appraisal, ITM_E/ITM_N, latitude/longitude and other fields. A filtered FeatureServer JSON query was not accessible in this session, so no row values or coordinates are claimed as retrieved. GitHub exact-string search did not return archive matches for 11201021 or 11201023, but this is not a full duplicate audit; the large master/public JSON endpoints still returned empty content. No production objects, sources, visuals, pages, map pins or SEO entries were added. Next: retrieve official rows for 11201019, 11201021 and 11201023; recover full master/public/source/visual datasets; complete duplicate checks before any import. Last confirmed production totals remain 574 master objects, 454 public NIAH registrations, 692 sources and 574 visual records; four-authority denominator 7,535.


## Latest research checkpoint — Lucan NIAH Registration Verification Batch 036 (20 November 2026)

Batch 036 is documented in [NIAH Lucan Registration Verification Batch 036](NIAH-LUCAN-REGISTRATION-VERIFICATION-BATCH-036.md). Official individual record 11201023 (former orchard boundary wall) is now verified: Regional, Architectural, original use walled garden, in-use-as gates/railings/walls, 1840–1860, recorded 23 April 2002; page description and appraisal transcribed in the batch file. Its displayed coordinate pair is unlabelled CRS and is not used. Official search results surfaced 11201024 Gardenville (steward's house, dated 1738), but the individual page returned 403, so it remains a search lead. The official NIAH download page exposes the Dublin ZIP at https://www.buildingsofireland.ie/niah/NIAHDataDownload/Dublin.zip; the browser could identify/follow the link but could not ingest the ZIP binary, and runtime download failed. No CSV rows or per-registration GIS values are claimed as retrieved. No production records or public pages were added; full duplicate checks remain blocked by incomplete catalogue retrieval. Next: obtain and checksum the official Dublin ZIP or retrieve exact FeatureServer JSON rows; verify 11201024 individual page; recover full master/public/source/visual datasets before any import. Production totals remain 574 master, 454 public NIAH, 692 sources, 574 visual; denominator 7,535.


## Latest research checkpoint — Lucan NIAH Sequence Batch 037 (20 November 2026)

Batch 037 is research-only and documented in [NIAH Lucan Sequence Batch 037](NIAH-LUCAN-SEQUENCE-BATCH-037.md). A better official bulk-data source was identified: data.gov.ie resource “National CSV download” for the NIAH National Dataset, resource URL https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data, format CSV, data and metadata last updated 10 November 2026, CC BY 4.0. Direct binary download failed in this session; bytes, checksum and row contents are not yet obtained. Official Buildings of Ireland search index confirms 11201024 Gardenville (1738 steward's house) but individual page remains inaccessible; 11201025 is identified as a c.1830 semi-detached former house now a travel agency, search-result lead only. Exact-string GitHub searches returned no indexed matches for 11201024/11201025 but do not establish full-catalogue absence. No production objects/pages/source/visual/map/SEO changes. Next: obtain and checksum November 2026 CSV, extract exact rows, retrieve individual pages, recover full datasets and run duplicate checks before import. Production totals remain 574 master, 454 public NIAH, 692 sources, 574 visual; denominator 7,535.


## Latest research checkpoint — Lucan Individual Record Verification Batch 038 (20 November 2026)

Batch 038 is documented in [NIAH Lucan Individual Verification Batch 038](NIAH-LUCAN-INDIVIDUAL-VERIFICATION-BATCH-038.md). Direct official individual pages are now verified for 11201024 Gardenville and 11201025 Leixlip Road former house/current office. 11201024: Regional, Artistic, steward's house/current house, date range 1735–1740 (described as 1738), recorded 22 April 2002; full description/appraisal transcribed. Its appraisal contains a literal walled-garden cross-reference “12201023”, which does not match nearby 11201023; preserve and investigate, do not silently correct. It also references stable yard 11201137. 11201025: Regional, Architectural, house/current office, 1820–1840 (c.1830), recorded 22 April 2002; full description/appraisal transcribed and says it is one of a pair, but 11201026 must be checked before asserting the paired building. Both individual-page coordinate pairs are unlabelled CRS and are not used. The national CSV binary remains unavailable; the data.gov.ie resource page's metadata and description have inconsistent update/version wording, so no CSV row/checksum is claimed. Large data/objects.json and data/niah-registered-objects.json cannot be retrieved through GitHub text endpoints due size; exact-string search is not a complete duplicate audit. No production objects/pages/sources/visual/map/SEO changes. Next: retrieve exact rows, resolve cross-reference, verify 11201026 and recover complete datasets before import. Totals unchanged: 574 master, 454 public NIAH, 692 sources, 574 visual; denominator 7,535.


## Permanent operating rule adopted — CICAN NIAH Gold Standard (20 November 2026)

The binding protocol is [CICAN NIAH Gold Standard Publication Protocol](CICAN-NIAH-GOLD-STANDARD-PUBLICATION-PROTOCOL.md). It supersedes earlier looser discovery/import sequencing. Three states are mandatory: DISCOVERY_QUEUE, VERIFIED_NIAH_REGISTER and PUBLISHED_ARCHIVE. Every public NIAH entry must pass: (1) individual official Buildings of Ireland record with exact REG_NO; (2) exact match against an official national CSV row or official FeatureServer feature, retaining dataset version/provenance and original ITM EPSG:2157 plus WGS84 fields; (3) full duplicate and relationship audit across complete master, public NIAH, source and visual datasets; (4) evidence, rights, access and field-verification controls; (5) controlled publication; (6) live production validation and saved batch report. Search snippets, schema metadata, unlabeled coordinates and negative code-search results never satisfy these gates. If any required dataset is unavailable or incomplete, HOLD; zero imports is an acceptable batch. Retrospectively audit all existing public NIAH records as PASS/HOLD/QUARANTINE; do not assume the existing 454 pass automatically. Current blockers remain retrieval of exact national dataset rows and complete large catalogue/source/visual datasets. Resume autopilot under this protocol, beginning with dataset recovery and existing-register audit before further imports.


## Latest research checkpoint — NIAH Retrospective Register Audit Batch 039 (20 November 2026)

Batch 039 is documented in [NIAH Retrospective Register Audit Batch 039](NIAH-RETROSPECTIVE-REGISTER-AUDIT-BATCH-039.md). A major technical blocker was resolved: the GitHub blob endpoint returned complete contents for the large canonical JSON files, allowing full parsing of all 574 master objects, 454 public NIAH records, 692 sources and 574 visual records. Structural preflight: 454/454 public REG_NO values are unique and eight digits; every public registration has a matching master object by exact REG_NO; all public source-ID links resolve; no duplicate normalized titles; repeated addresses occur for separately registered co-located assets and need relationship review rather than automatic merging. 453/454 records have an individual NIAH source entry; exception is Mack's Bridge, 11336004 (DUB-INF-0189). 304/454 link the generic dataset metadata source (not an exact national row match); 273/454 link the EPSG transformation source. Coordinate status is 437 SOURCE_DERIVED and 17 NOT_SET; 243 inherited VERIFIED and 211 PARTIALLY_VERIFIED labels are not Gold Standard passes. All 454 are provisionally HOLD pending fresh individual-page rechecks and exact national dataset row matches. The 17 unmapped records are listed in Batch 039. The 10 November 2026 data.gov.ie CSV metadata and CC BY 4.0 licence were confirmed, but the resource description still mentions a 2023 version; no file bytes, checksum or row values were obtained. The official NIAH FeatureServer metadata confirms EPSG:2157 and relevant registration/coordinate fields, but its data last-edit date is 4 March 2025 and a filtered row query failed in this session. No production data, map, SEO or deployment changes were made. Next: retrieve and checksum the 2026 CSV or exact live official rows; create a per-registration gate ledger; start bounded Gate 1–4 retrospective adjudication, beginning with 11336004; keep new Lucan candidates on hold until their own gates pass. Batch 039 is structural preflight only, not completion of the 454-record audit.