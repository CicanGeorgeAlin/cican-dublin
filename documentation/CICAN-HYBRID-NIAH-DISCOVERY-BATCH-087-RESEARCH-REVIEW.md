# CICAN Dublin Archive — Batch 087 NIAH Discovery Review

**Status:** Research-only; separate review required  
**Branch:** `research/batch-087-niah-candidates`  
**Evidence packet:** `audit/batch-087-five-candidate-evidence.json`  
**Source snapshot:** workflow #1987, run ID `45316937244`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five consecutive candidates were selected from the refreshed Dublin City missing-registration queue after Batch 086: 50010226, 50010227, 50010228, 50010229 and 50010231. Registration 50010230 is not present in the queue. Each selected registration has an individual official Buildings of Ireland NIAH record.

The workflow-generated official-register audit contains no archive matches for these five IDs. Exact-number searches across repository issues and all pull-request states returned no matches at the time of research.

## Candidate register

| Registration | National CSV name | Address | Rating |
|---|---|---|---|
| 50010226 | Central Model School | Marlborough Street | Regional |
| 50010227 | *(blank)* | Marlborough Street | Regional |
| 50010228 | Saint Mary's Catholic Pro-Cathedral | Marlborough Street / Cathedral Street | National |
| 50010229 | Pro-Cathedral House | 83 Marlborough Street | Regional |
| 50010231 | *(blank)* | 81 Marlborough Street | Regional |

Official individual records:
- [50010226 — Central Model School](https://www.buildingsofireland.ie/buildings-search/building/50010226/central-model-school-marlborough-street-dublin-1-dublin)
- [50010227 — National Model Schools gate lodge](https://www.buildingsofireland.ie/buildings-search/building/50010227/national-model-schools-marlborough-street-dublin-1-dublin)
- [50010228 — Saint Mary's Catholic Pro-Cathedral](https://www.buildingsofireland.ie/buildings-search/building/50010228/saint-marys-catholic-pro-cathedral-marlborough-street-cathedral-street-dublin-1-co-dublin)
- [50010229 — Pro-Cathedral House](https://www.buildingsofireland.ie/buildings-search/building/50010229/pro-cathedral-house-marlborough-street-dublin-1-dublin-city)
- [50010231 — 81 Marlborough Street](https://www.buildingsofireland.ie/buildings-search/building/50010231/marlborough-street-dublin-1-dublin-city-3)

## Evidence summary

### 50010226 — Central Model School
The national CSV NAME field is “Central Model School”. The NIAH description characterises the structure as a detached gable-fronted chapel built c.1800, with red-brick detailing, timber sliding sash windows and a round-headed entrance with glazed fanlight. The national CSV records original use as church/chapel and in-use-as office. Preserve the name and use fields exactly as sourced; do not resolve the naming/history relationship by inference.

### 50010227 — Gate lodge, Marlborough Street
The national CSV NAME field is blank. The NIAH describes an attached granite gate lodge built c.1838, with Doric columns, granite quoins and an adjoining gateway. Its appraisal identifies it as one of a pair flanking the railings before the former National Model Schools campus and suggests Jacob Owen as designer.

### 50010228 — Saint Mary's Catholic Pro-Cathedral
The NIAH describes a freestanding Greek Revival Catholic cathedral built 1814–1825, with a cruciform plan, Portland stone Doric portico, copper-clad dome, granite ashlar exterior and elaborate interior. The NIAH rates it National and records architectural, artistic, historical, scientific, social and technical interest.

### 50010229 — Pro-Cathedral House, 83 Marlborough Street
The NIAH describes an attached four-bay, three-storey presbytery over raised basement, built c.1825 in association with the adjacent Pro-Cathedral. It records Flemish-bond red brick, granite basement, timber sash windows and a decorative Pain-style doorcase. Keep the house as a separate building from the cathedral.

### 50010231 — 81 Marlborough Street
The national CSV NAME field is blank. The NIAH describes a terraced two-bay, four-storey Georgian house over raised basement, built c.1800, with Flemish-bond red brick, timber sliding sash windows, basement iron grille and a limestone doorcase with Doric pilasters. Do not invent a name.

## Coordinate provenance

The evidence JSON stores official national CSV ITM coordinates (EPSG:2157), official CSV latitude/longitude and raw coordinate pairs displayed on individual NIAH pages in separate fields. The individual-page coordinate reference system is not labelled in the page display. Do not interpret those raw pairs as EPSG:2157 or substitute them for the official CSV coordinates. See the [official NIAH Data Download page](https://www.buildingsofireland.ie/niah-data-download/).

## Duplicate and identity checks

- All five exact registration numbers are present in workflow #1987's Dublin City missing-registration queue.
- The workflow-generated official-register audit contains no archive match for these five IDs.
- Exact-number searches across repository issues and all pull-request states returned no matches.
- Each selected candidate has an individual official NIAH record.
- 50010227 is one of a pair of separately registered gate lodges; its counterpart 50010220 remains separate.
- 50010228 and 50010229 are associated but distinct buildings.
- The national CSV NAME field is blank for 50010227 and 50010231; no names are invented.

## Review decision

Keep this PR in draft pending separate review of the 50010226 name/use fields, the gate lodge pair, the cathedral/presbytery relationship, the two blank NAME fields and coordinate provenance. Survey-time data must not be treated as present-day occupancy, access or condition.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
