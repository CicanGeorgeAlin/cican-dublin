# CICAN Dublin — NIAH Discovery Batch 092

**Reviewed:** 24 November 2026  
**Status:** Research-only candidate packet; no catalogue import or production publication  
**Scope:** Five Dublin City NIAH registrations on North Earl Street and the North Earl Street / Marlborough Street corner

## Selection and verification

The five records below were selected from the refreshed official four-authority missing-registration queue produced by quality workflow run 45323257382. Each appears exactly once in that queue, belongs to Dublin City Council / County Dublin, and has an individually accessible official Buildings of Ireland NIAH page.

Registration **50010257 — Bonavox Hearing Aids** is intentionally held out. Although present in the queue, an independently verifiable individual official NIAH page could not be retrieved in this review. A current business listing for Bonavox at 9 North Earl Street is not a substitute for the heritage record. It will be reconsidered when the official record is independently verified.

## Candidate register

| NIAH registration | Official individual-page heading | National CSV NAME | CSV address |
|---|---|---|---|
| 50010254 | 14 North Earl Street, Marlborough Street | *(blank; preserved)* | 14 North Earl Street / Marlborough Street |
| 50010255 | Meteor | Meteor | 13 Earl Street North |
| 50010256 | Guineys | Guineys | 10 Earl Street North |
| 50010258 | Nice Price | Nice Price | 4 Earl Street North |
| 50010260 | Hot Wok Thai Noodle Bar | Hot Wok Thai Noodle Bar | 2 Earl Street North |

## Record summaries and anomalies

- **50010254 — 14 North Earl Street:** A corner-sited three-bay four-storey former house, built c.1780, with Victorian stucco detailing and surviving timber sash windows. The national CSV NAME is blank. The individual NIAH page heading supplies the display heading; the source NAME remains blank.
- **50010255 — Meteor:** A two-bay four-storey commercial premises built c.1920, with red brick walls, sliding timber sash windows and a replacement shopfront.
- **50010256 — Guineys:** A two-bay four-storey former house built c.1820 as one of a pair, retaining red brick walls, historic sash windows and a later shopfront.
- **50010258 — Nice Price:** A three-bay four-storey retail premises built 1917–19, with a central breakfront, granite dressings, modillion cornice and bowed tripartite windows. **Source-text anomaly:** the individual page appraisal refers to “Number 3”, although the official page heading and national CSV identify number 4. The wording is preserved as published and not silently corrected.
- **50010260 — Hot Wok Thai Noodle Bar:** A two-bay four-storey red brick and granite retail premises built c.1920 to designs by Fuller & Jermyn, with granite dressings and pilasters. The national CSV DESCRIPTION contains a U+FFFD replacement character in “façade”; the clean page transcription is stored separately.

Full official-page descriptions, appraisals, national CSV values, and both coordinate systems are preserved separately in `audit/batch-092-five-candidate-evidence.json`.

## Provenance and coordinate controls

1. National CSV values are retained verbatim. In particular, 50010254 has a blank CSV NAME and that field is not backfilled.
2. National CSV WGS84 latitude/longitude and ITM coordinates (EPSG:2157) are distinct source fields.
3. Raw coordinate pairs displayed by individual NIAH pages are retained separately. Their CRS is not inferred from display alone.
4. The appraisal-number inconsistency for 50010258 is recorded, not editorially repaired. The national CSV DESCRIPTION for 50010260 contains a replacement-character encoding error in “façade”; the raw value remains preserved separately.
5. Survey-era uses and descriptions do not establish present-day occupancy, condition, access or permission to photograph.

## Duplicate and proximity review

- Each selected registration occurs exactly once in the refreshed official queue.
- None of the five exact registrations appears in the 509-record official-register audit.
- GitHub issue and pull-request searches for the five exact registrations returned no matches.
- The full-catalogue reconciliation in `scripts/reconcile-niah-batch-092.mjs` checks exact registration, address, name and source-ID collisions and reports existing objects within 30 metres for manual identity review. Coordinate proximity alone is not treated as a duplicate.

## Publication boundary

This batch is research-only. No permanent archive IDs, master objects, public NIAH register entries, source records, visual inventory records, map pins or SEO pages are created. Production remains untouched. Publication requires independent review of the final reconciliation report, the source anomalies, schema and technical checks.

## Official individual NIAH pages

- [50010254 — 14 North Earl Street / Marlborough Street](https://www.buildingsofireland.ie/buildings-search/building/50010254/ice-babe-north-earl-street-marlborough-street-dublin-1-dublin-city)
- [50010255 — Meteor](https://www.buildingsofireland.ie/buildings-search/building/50010255/meteor-13-earl-street-north-dublin-1-co-dublin)
- [50010256 — Guineys](https://www.buildingsofireland.ie/buildings-search/building/50010256/guineys-earl-street-north-dublin-1-dublin-city)
- [50010258 — Nice Price](https://www.buildingsofireland.ie/buildings-search/building/50010258/nice-price-4-earl-street-north-dublin-1-dublin)
- [50010260 — Hot Wok Thai Noodle Bar](https://www.buildingsofireland.ie/buildings-search/building/50010260/hot-wok-thai-noodle-bar-2-earl-street-north-dublin-1-dublin)


## Held and excluded records

- **50010257 — Bonavox Hearing Aids:** present in the queue but held pending independent verification of the individual official NIAH page.
- **50010259 — Zumo Juice Bar:** present in the queue but assigned to **South Dublin County Council** by the official authority field. It is excluded from this Dublin City batch and retained for separate authority review. The postal address does not override the authority assignment.


## Manual proximity review

The full-catalogue reconciliation found two objects within 30 metres of candidate 50010254. Both have been manually compared against their existing archive pages and official NIAH records:

| Candidate | Existing archive object | Official registration | Distance | Manual outcome |
|---|---|---:|---:|---|
| 50010254 — 14 North Earl Street / Marlborough Street | DUB-BLD-0006 — 23 Marlborough Street | 50010218 | 28.4 m | Known distinct neighbour |
| 50010254 — 14 North Earl Street / Marlborough Street | DUB-BLD-0333 — 89 Marlborough Street | 50010242 | 28.8 m | Known distinct neighbour |

NIAH 50010218 describes 23 Marlborough Street as a terraced two-bay four-storey late eighteenth-century house. NIAH 50010242 describes 89 Marlborough Street as a terraced four-bay four-storey stucco-fronted house built c.1820. Candidate 50010254 is the separately registered corner-sited three-bay four-storey former townhouse at 14 North Earl Street / Marlborough Street. These are different addresses, official registration numbers and building descriptions. Both proximity hits are therefore documented as distinct neighbouring buildings; neither is a duplicate.

Official comparison sources:
- [NIAH 50010218 — 23 Marlborough Street](https://www.buildingsofireland.ie/buildings-search/building/50010218/ladbrokes-marlborough-street-dublin-1-co-dublin)
- [NIAH 50010242 — 89 Marlborough Street](https://www.buildingsofireland.ie/buildings-search/building/50010242/89-marlborough-street-dublin-1-co-dublin)

Manual review result: zero unresolved proximity hits.
