# CICAN Dublin — NIAH Discovery Batch 094

**Reviewed:** 24 November 2026  
**Status:** Research-only candidate packet; no catalogue import or production publication  
**Scope:** Five Dublin City NIAH registrations following Batch 093, around Sackville Place, Marlborough Street and Abbey Street Lower

## Selection and verification

The five registrations are the next five Dublin City Council entries after Batch 093 in the refreshed official four-authority missing-registration queue (7,026 rows). Each occurs exactly once in that queue. Each individual official Buildings of Ireland NIAH page was opened and checked. The queue authority field is Dublin City Council for all five; authority was not inferred from postal district or street address.

## Candidate register

| Registration | Official page heading | National CSV NAME | National CSV address |
|---|---|---|---|
| 50010266 | Saks Hair Salon/Phish International Services Ltd, 15 Sackville Place | Saks Hair Salon/Phish International Services Ltd | 15 Sackville Place |
| 50010267 | The Sackville, 16 Sackville Place | The Sackville | 16 Sackville Place |
| 50010268 | Unity Building, Sackville Place / O'Connell Street Lower | Unity Building | Sackville Place / O'Connell Street Lower |
| 50010269 | Cummins and Sons, Marlborough Street / Abbey Street Lower | *(blank; preserved)* | Marlborough Street / Abbey Street Lower |
| 50010270 | The Flowing Tide, 9 Abbey Street Lower / Marlborough Street | The Flowing Tide | 9 Abbey Street Lower / Marlborough Street |

## Official-page findings

- **50010266 — Saks Hair Salon/Phish International Services Ltd:** A two-bay, three-storey commercial brick building built c.1920 as one of a pair. The official page records original timber casement windows and granite ashlar shopfront pilasters.
- **50010267 — The Sackville:** An end-of-terrace two-bay, three-storey commercial brick building built c.1920, with a pub shopfront and substantial granite cornice. The page records timber sliding sash windows and an intact pub-front composition.
- **50010268 — Unity Building:** A corner-sited, multi-bay, five-storey commercial building dated 1918. The page records its chamfered corner, decorative iron balcony, granite detailing and plaque reading “A 1918 D/UNITY BUILDING”; it attributes the design to George L. O'Connor, 1917–18.
- **50010269 — Cummins and Sons:** A corner-sited, four-storey, single-bay commercial building built c.1790, with a four-bay return. The page records timber sash windows and painted signs. The national CSV NAME and NUMBER fields are blank and remain blank; the official page heading is kept separately.
- **50010270 — The Flowing Tide:** A corner-sited, two-bay, four-storey house built in 1824, with a public house at ground floor. The page records a limestone shopfront, timber sash windows and stained-glass work associated with a 1955 remodelling.

## Provenance and source controls

1. National CSV NAME, NUMBER, STREET1, STREET2, use, date, rating, WGS84 and ITM values are retained as distinct source fields in `audit/batch-094-five-candidate-evidence.json`.
2. Clean individual-page descriptions and appraisals are stored separately from the national CSV text.
3. The CSV description for 50010267 contains U+FFFD replacement-character corruption in “façade”; the CSV appraisal for 50010268 contains the same anomaly; and the CSV appraisal for 50010270 contains the same anomaly. Raw source text is not silently repaired.
4. CSV WGS84 and ITM (EPSG:2157) coordinates remain separate. Raw coordinate pairs displayed on the individual pages are retained separately as text; no CRS is inferred for those displayed pairs.
5. The blank CSV NAME and NUMBER for 50010269 are preserved without backfilling from the page heading.
6. NIAH survey-era information does not establish present-day occupancy, condition, access or permission to photograph.

## Publication boundary

This is a research-only batch. It creates no permanent archive IDs, master objects, public NIAH register entries, source records, visual inventory records, map pins or SEO pages. Any close-coordinate hits must be reconciled against the full catalogue and official individual records before publication. Proximity alone is not a duplicate. Production remains untouched.

## Official individual NIAH pages

- [50010266 — Saks Hair Salon/Phish International Services Ltd](https://www.buildingsofireland.ie/buildings-search/building/50010266/saks-hair-salon-phish-international-services-ltd-15-sackville-place-dublin-1-co-dublin)
- [50010267 — The Sackville](https://www.buildingsofireland.ie/buildings-search/building/50010267/the-sackville-sackville-place-dublin-dublin-city)
- [50010268 — Unity Building](https://www.buildingsofireland.ie/buildings-search/building/50010268/unity-building-sackville-place-oconnell-street-lower-dublin-1-co-dublin)
- [50010269 — Cummins and Sons](https://www.buildingsofireland.ie/buildings-search/building/50010269/marlborough-street-abbey-street-lower-dublin-1-co-dublin)
- [50010270 — The Flowing Tide](https://www.buildingsofireland.ie/buildings-search/building/50010270/the-flowing-tide-9-abbey-street-lower-marlborough-street-dublin-1-dublin)
