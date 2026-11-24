# CICAN Dublin Archive — Batch 089 NIAH Discovery Review

**Status:** Research-only; separate review required  
**Branch:** `research/batch-089-niah-candidates`  
**Evidence packet:** `audit/batch-089-five-candidate-evidence.json`  
**Source snapshot:** workflow #1995, run ID `45317465809`, artifact `14886391031`

## Scope and selection

The five next queue entries after Batch 088 are 50010239–50010243. All five exact registrations appear in the refreshed Dublin City missing-registration queue. The workflow-generated official-register audit contains no archive matches, and exact-number searches across repository issues and all pull-request states returned no matches.

Each candidate's official national CSV record and detailed survey description were present in the workflow artifact. Individual page content was independently fetched for four records; the browser could not fetch 50010240's individual page during this review. Its official CSV description is preserved, while raw page coordinates are left unavailable rather than inferred.

## Candidate register

| Registration | National CSV name | Address | Rating |
|---|---|---|---|
| 50010239 | *(blank)* | 84 Marlborough Street / Cathedral Street | Regional |
| 50010240 | *(blank)* | 85 Marlborough Street | Regional |
| 50010241 | The Confession Box | 88 Marlborough Street | Regional |
| 50010242 | *(blank)* | 89 Marlborough Street | Regional |
| 50010243 | Dunnes Stores | 23–24 Earl Street North / Cathedral Street | Regional |

Official records:
- [50010239 — 84 Marlborough Street](https://www.buildingsofireland.ie/buildings-search/building/50010239/84-marlborough-street-cathedral-street-dublin-1-dublin)
- [50010240 — 85 Marlborough Street (official NIAH record lookup)](https://www.buildingsofireland.ie/niah/search.jsp?type=record&county=DU&regno=50010240)
- [50010241 — The Confession Box](https://www.buildingsofireland.ie/buildings-search/building/50010241/the-confession-box-88-marlborough-street-dublin-1-dublin)
- [50010242 — 89 Marlborough Street](https://www.buildingsofireland.ie/buildings-search/building/50010242/89-marlborough-street-dublin-1-co-dublin)
- [50010243 — Dunnes Stores, Earl Street North](https://www.buildingsofireland.ie/buildings-search/building/50010243/dunnes-stores-23-24-earl-street-north-cathedral-street-dublin-1-dublin)

## Evidence summary

### 50010239 — 84 Marlborough Street / Cathedral Street
The national CSV NAME field is blank. NIAH describes a corner-sited c.1795 townhouse over basement with Flemish-bond red brickwork, timber sash windows and replacement shopfronts to both elevations. It is recorded as in retail use. NIAH notes its restored presentation and setting opposite the Pro-Cathedral.

### 50010240 — 85 Marlborough Street
The national CSV NAME field is blank. The official CSV describes a c.1795 three-bay townhouse, formerly a pawnbroker's, with restaurant use recorded in the CSV. Notable surviving features include original sash windows, internal shutters and an original wrought-iron pawnbroker's sign with three gilded balls. The page itself could not be fetched during this review; the source description and CSV coordinates come from the official workflow artifact. Raw page coordinates are deliberately not supplied.

### 50010241 — The Confession Box, 88 Marlborough Street
NIAH records the previous name “The Maid of Erin” and public-house use. It describes an end-of-terrace house with a c.1890 Victorian pub-front, decorative leadwork and gilded sign-writing. Its appraisal recounts the historical association with Dionysius Lardner and the confessions heard there during the War of Independence. Preserve the historical narrative as NIAH-attributed appraisal, not independently verified present-day fact.

### 50010242 — 89 Marlborough Street
The national CSV NAME field is blank. NIAH describes a c.1820 stucco-fronted four-storey house with sash windows, decorative architraves and pedimented doorcases flanking a shopfront. Its appraisal discusses the contribution of its façade to Marlborough Street's historic character.

### 50010243 — Dunnes Stores, 23–24 Earl Street North
The national CSV name is “Dunnes Stores”. NIAH describes a commercial building built c.1920 and largely rebuilt c.2000, with a stucco-fronted Earl Street elevation and a substantial red-and-yellow brick rear block fronting Cathedral Street. The NIAH appraisal places it within the commercial streetscape around O'Connell Street.

## Coordinate provenance

The evidence JSON stores official national CSV ITM coordinates (EPSG:2157) and official CSV latitude/longitude separately from raw coordinate pairs displayed on individual NIAH pages. The page coordinate reference system is not labelled. For 50010240, the raw page pair is unavailable because the individual page could not be fetched; it has not been estimated. See the [official NIAH Data Download page](https://www.buildingsofireland.ie/niah-data-download/).

## Duplicate and identity checks

- All five exact registration numbers are present in workflow #1995's Dublin City missing-registration queue.
- The workflow-generated official-register audit contains no archive match for these five IDs.
- Exact-number searches across repository issues and all pull-request states returned no matches.
- The national CSV NAME field is blank for 50010239, 50010240 and 50010242.
- 50010240 is marked with a page-access limitation; its official CSV evidence is retained, and no raw page coordinate is invented.
- 50010243 is one NIAH registration covering the building's Earl Street frontage and rear Cathedral Street block.

## Review decision

Keep this PR in draft pending separate review of the three blank NAME fields, the 50010240 page-access limitation, the historic narrative for The Confession Box and the multi-frontage description for 50010243. Survey-time information must not be represented as present-day verification.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
