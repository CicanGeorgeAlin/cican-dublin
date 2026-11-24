# CICAN Dublin — NIAH Discovery Batch 093

**Reviewed:** 24 November 2026  
**Status:** Research-only candidate packet; no catalogue import or production publication  
**Scope:** Five Dublin City NIAH registrations at Marlborough Street, O’Connell Street Lower and Sackville Place

## Selection and verification

Five next Dublin City Council registrations were selected from the refreshed official four-authority missing-registration queue after Batch 092. Each occurs exactly once in the queue, is assigned to Dublin City Council / County Dublin, and has an individually verified official Buildings of Ireland NIAH page.

## Candidate register

| NIAH registration | Official individual-page heading | National CSV NAME | CSV address |
|---|---|---|---|
| 50010261 | North Earl Street / O’Connell Street Lower | *(blank; preserved)* | North Earl Street / O’Connell Street Lower |
| 50010262 | 92 Marlborough Street | *(blank; preserved)* | 92 Marlborough Street |
| 50010263 | 93 Marlborough Street | *(blank; preserved)* | 93 Marlborough Street |
| 50010264 | Dublin United Transport Company | *(blank; preserved)* | 98–100 Marlborough Street |
| 50010265 | Ladbrokes | Ladbrokes | 14 Sackville Place |

## Record summaries and source anomalies

- **50010261 — North Earl Street / O’Connell Street Lower:** A corner-sited three-bay four-storey Portland limestone commercial building built in 1920, with a chamfered corner entrance, giant-order Doric pilasters and neoclassical detailing. The national CSV NAME and NUMBER fields are blank and remain blank.
- **50010262 — 92 Marlborough Street:** A two-bay four-storey house built c.1750 as one of a pair, with a shopfront and a full-height rear projection. The CSV NAME is blank. The CSV appraisal contains a U+FFFD replacement-character error in “façade”; the clean individual-page transcription is stored separately.
- **50010263 — 93 Marlborough Street:** A two-bay four-storey house built c.1750 as one of a pair, with a shopfront, yellow brick lower walling and later red brickwork. The CSV NAME is blank. The CSV DESCRIPTION and APPRAISAL contain U+FFFD replacement-character errors in “façade”; clean page transcriptions are stored separately.
- **50010264 — Dublin United Transport Company:** An attached office building built in 1925, comprising a gable-fronted two-storey block and a three-storey end bay. The official page records the Dublin United Transport Company fascia and historical transition to CIÉ. The CSV NAME is blank. CSV DESCRIPTION and APPRAISAL contain several U+FFFD encoding errors, including the company successor name and “façade”; clean page transcriptions are stored separately.
- **50010265 — Ladbrokes:** An end-of-terrace two-bay three-storey commercial brick building built c.1920, with a moulded granite cornice and original granite shopfront pilasters.

The raw national CSV fields are preserved in `audit/batch-093-five-candidate-evidence.json`; clean page transcriptions and page headings remain separate. No blank CSV NAME is backfilled.

## Provenance and coordinate controls

1. National CSV NAME, NUMBER, STREET1 and STREET2 values are preserved verbatim.
2. National CSV WGS84 latitude/longitude and ITM coordinates (EPSG:2157) are separate source fields.
3. Raw coordinate pairs displayed on individual NIAH pages are retained independently; their CRS is not inferred.
4. Replacement-character corruption in the CSV for 50010262–50010264 is documented. Clean transcription is taken from the official individual page; raw CSV remains unchanged.
5. Survey-era descriptions and uses do not establish present-day occupancy, condition, access or permission to photograph.

## Duplicate and proximity review

- All five selected registrations occur exactly once in the refreshed official missing-registration queue.
- None of the five exact registrations appears in the 509-record official-register audit.
- GitHub issue and pull-request searches for the five exact registrations returned no matches.
- The full-catalogue reconciliation in `scripts/reconcile-niah-batch-093.mjs` checks exact registration, address, name and source-ID collisions, existing objects within 30 metres, and candidate-to-candidate proximity. Nearby objects require manual identity review; proximity alone is not a duplicate.

## Publication boundary

This batch is research-only. No permanent archive IDs, master objects, public NIAH register entries, source records, visual inventory records, map pins or SEO pages are created. Production remains untouched. Publication requires review of the final reconciliation report, source anomalies, schema and technical checks.

## Official individual NIAH pages

- [50010261 — North Earl Street / O’Connell Street Lower](https://www.buildingsofireland.ie/buildings-search/building/50010261/north-earl-street-oconnell-street-lower-dublin-1-dublin)
- [50010262 — 92 Marlborough Street](https://www.buildingsofireland.ie/buildings-search/building/50010262/92-marlborough-street-dublin-1-co-dublin)
- [50010263 — 93 Marlborough Street](https://www.buildingsofireland.ie/buildings-search/building/50010263/the-compassion-centre-marlborough-street-dublin-1-co-dublin)
- [50010264 — Dublin United Transport Company](https://www.buildingsofireland.ie/buildings-search/building/50010264/dublin-united-transport-company-marlborough-street-dublin-1-dublin)
- [50010265 — Ladbrokes](https://www.buildingsofireland.ie/buildings-search/building/50010265/ladbrokes-sackville-place-dublin-dublin-city)
