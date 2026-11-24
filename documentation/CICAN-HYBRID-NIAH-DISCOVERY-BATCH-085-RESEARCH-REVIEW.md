# CICAN Dublin Archive — Batch 085 NIAH Discovery Review

**Status:** Research-only; separate review required  
**Branch:** `research/batch-085-niah-candidates`  
**Evidence packet:** `audit/batch-085-five-candidate-evidence.json`  
**Source snapshot:** workflow #1979, run ID `45316520669`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five exact registrations were selected from the latest workflow-generated Dublin City missing-registration queue: 50010213, 50010214, 50010215, 50010216 and 50010219. Each has an individual Buildings of Ireland NIAH record. The latest official-register reconciliation contains no archive match for these registration numbers. Exact-number searches against open repository issues and pull requests returned no matches.

The first four records continue the Talbot Street sequence. Registration 50010219 is a separate Georgian house at 28 Marlborough Street, selected as the next source-verified queue candidate after the Talbot Street sequence.

## Candidate register

| Registration | Register name | Address | Official NIAH record |
|---|---|---|---|
| 50010213 | Bryans Master Cobbler | 3A Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010213/bryans-master-cobbler-3a-talbot-street-dublin-1-dublin) |
| 50010214 | Iskender Burger Hut | 3A Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010214/iskender-burger-hut-3a-talbot-street-dublin-1-co-dublin) |
| 50010215 | *(NAME blank in national CSV)* | 2A Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010215/the-great-mobile-accessories-shop-talbot-street-dublin-1-dublin) |
| 50010216 | *(NAME blank in national CSV)* | 1 Talbot Street / Marlborough Street corner | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010216/spar-talbot-street-marlborough-street-dublin-1-dublin) |
| 50010219 | *(NAME blank in national CSV)* | 28 Marlborough Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010219/28-marlborough-street-dublin-1-dublin) |

## Individual evidence summary

### 50010213 — Bryans Master Cobbler, 3A Talbot Street

The NIAH describes a terraced three-bay, four-storey house, built c.1840, now in commercial use with rented accommodation over. It has a shopfront and integral carriage arch. The record notes Flemish-bond red brick, diminishing gauged square-headed openings, replacement uPVC windows, a recent timber shopfront and a segmental-arched carriage entrance. The appraisal identifies the carriage arch as providing access to the rear and notes the building's place in a relatively uniform terrace.

### 50010214 — Iskender Burger Hut, 3A Talbot Street

The NIAH describes a terraced two-bay, four-storey house, built c.1840, in commercial use with accommodation over. It records a flat roof, shared red-brick chimneystack, Flemish-bond brickwork, soldier quoins, replacement uPVC windows and a timber shopfront with engaged panelled pilasters. Its appraisal notes the shared parapet height, fenestration pattern and regularity of the Talbot Street terrace.

**Identity caution:** This is a distinct registration from 50010213 despite the shared address number 3A. The different registration numbers and individual façades must remain separate.

### 50010215 — 2A Talbot Street

The national CSV NAME field is blank; the archive therefore retains the address and registration number rather than inventing a name. The NIAH describes a terraced two-bay, four-storey house, built c.1840, with a recent ground-floor shopfront. Its rendered façade includes moulded masonry window surrounds and pedimented first-floor hood-mouldings, contrasting with the predominantly red-brick terrace. The record identifies architectural and artistic interest.

### 50010216 — 1 Talbot Street / Marlborough Street corner

The national CSV NAME field is blank. The NIAH describes a corner-sited end-of-terrace two-bay, four-storey house, built c.1840. It records Flemish-bond red-brick walls, segmental-headed window openings, retained single-pane timber sliding sash windows and a two-tier shopfront to the south and west elevations. The building is prominently located at the junction of Talbot Street and Marlborough Street.

### 50010219 — 28 Marlborough Street

The national CSV NAME field is blank. The NIAH describes a terraced three-bay, four-storey house over raised basement, built c.1800. It records a double-pile slate roof, Flemish-bond brickwork on a chamfered granite plinth, replacement timber sash windows, tripartite windows to the return, wrought-iron basement grilles and a highly decorative Ionic doorcase with leaded fanlight. The appraisal describes the house as an elegant Georgian building restored to a high standard.

The individual NIAH record notes its relationship to the former National Model Schools campus. That context is retained as a relationship, not a reason to merge separate registered buildings.

## Coordinate provenance

The evidence packet stores official national CSV ITM coordinates (EPSG:2157), official national CSV latitude/longitude, and raw coordinate pairs displayed on individual NIAH pages separately. The individual-page coordinate reference system is not labelled in the page display; do not interpret those pairs as EPSG:2157 or substitute them for the official CSV coordinates. See the [official NIAH Data Download page](https://www.buildingsofireland.ie/niah-data-download/).

## Duplicate and queue checks

- All five exact registration numbers are present in the latest workflow-generated Dublin City missing-registration queue.
- The latest official-register reconciliation contains no archive match for the five registrations.
- Exact-number searches against open repository issues and pull requests returned no matches.
- Each candidate has an individual official NIAH page.
- 50010213 and 50010214 share the street number 3A but are distinct registrations and separate buildings.

## Review decision

Keep this PR in draft pending separate review of the distinct building identities, the shared 3A address, blank NAME fields for three records, source fields and coordinate provenance. No current tenant, condition or occupancy should be inferred from the historic register data.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
