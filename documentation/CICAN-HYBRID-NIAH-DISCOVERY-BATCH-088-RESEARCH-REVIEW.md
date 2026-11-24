# CICAN Dublin Archive — Batch 088 NIAH Discovery Review

**Status:** Research-only; separate review required  
**Branch:** `research/batch-088-niah-candidates`  
**Evidence packet:** `audit/batch-088-five-candidate-evidence.json`  
**Source snapshot:** workflow #1991, run ID `45317187083`, artifact `14886505650`

## Scope and selection

Five candidates were selected in queue order immediately after Batch 087 from the refreshed Dublin City missing-registration queue: 50010232, 50010233, 50010234, 50010236 and 50010237. Registration 50010235 is not present in the missing-registration queue and was not substituted. Each selected registration has an individual official Buildings of Ireland NIAH page.

The refreshed workflow-generated official-register audit contains no archive matches for these five IDs. Exact-number searches across repository issues and all pull-request states returned no matches at the time of research.

## Candidate register

| Registration | National CSV name | Address | Rating |
|---|---|---|---|
| 50010232 | *(blank)* | 80 Marlborough Street | Regional |
| 50010233 | *(blank)* | 79 Marlborough Street | Regional |
| 50010234 | *(blank)* | 78 Marlborough Street | Regional |
| 50010236 | School of Culinary Arts and Food Technology | 66–74 Cathal Brugha Street / Marlborough Street | National |
| 50010237 | Church of Saint George and Saint Thomas | Findlater Place / Cathal Brugha Street | Regional |

Official individual records:
- [50010232 — 80 Marlborough Street](https://www.buildingsofireland.ie/buildings-search/building/50010232/80-marlborough-street-dublin-1-dublin)
- [50010233 — 79 Marlborough Street](https://www.buildingsofireland.ie/buildings-search/building/50010233/guys-n-dolls-hairdressers-dublin-city)
- [50010234 — 78 Marlborough Street](https://www.buildingsofireland.ie/buildings-search/building/50010234/irish-rubies-ltd-78-marlborough-street-dublin-1-co-dublin)
- [50010236 — School of Culinary Arts and Food Technology](https://www.buildingsofireland.ie/buildings-search/building/50010236/school-of-culinary-arts-and-food-technology-66-74-cathal-brugha-street-marlborough-street-dublin-1-dublin)
- [50010237 — Church of Saint George and Saint Thomas](https://www.buildingsofireland.ie/buildings-search/building/50010237/church-of-saint-george-and-saint-thomas-findlater-place-cathal-brugha-street-dublin-1-dublin)

## Evidence summary

### 50010232 — 80 Marlborough Street
The national CSV NAME field is blank. NIAH describes a terraced two-bay, four-storey Georgian house over raised basement, built c.1745, with Flemish-bond red brickwork, gauged brick voussoirs and a round-headed entrance with painted stone doorcase, Doric pilasters and fanlight. The CSV records original use as house and in-use-as apartment/flat (converted).

### 50010233 — 79 Marlborough Street
The national CSV NAME field is blank. The CSV records original use as “house, shop/retail outlet” and leaves IN_USE_AS_TYPE blank. The individual NIAH page description says the building is now used as retail premises. Preserve this discrepancy rather than filling the blank field. NIAH describes a c.1750 terraced red-brick townhouse over raised basement, with a blocked former entrance and replacement railings.

### 50010234 — 78 Marlborough Street
The national CSV NAME field is blank, although the individual page title contains a business/trading label. Keep the CSV NAME blank. NIAH describes a c.1750 terraced red-brick house now used as retail premises, with a block-and-start stone door surround and a shopfront with fluted foliate consoles.

### 50010236 — School of Culinary Arts and Food Technology
The national CSV name is “School of Culinary Arts and Food Technology”. NIAH describes a corner-sited Art Deco college built in 1938–39 by Robinson and Keefe. Notable features include red brick and granite elevations, the Three Graces sculpture by Gabriel Hayes, and surviving original interior finishes. NIAH rates it National.

### 50010237 — Church of Saint George and Saint Thomas
The national CSV name is “Church of Saint George and Saint Thomas”. NIAH describes a Church of Ireland church built 1930–32, with a granite portico, twin towers, apsidal chancel, red-brick and granite detailing, coloured glass and wrought-iron railings. Its appraisal attributes the design to Frederick Hicks and notes stained glass by Catherine O'Brien and an apse mosaic by Oppenheimer.

## Coordinate provenance

The evidence JSON stores official national CSV ITM coordinates (EPSG:2157), official CSV latitude/longitude and raw coordinate pairs displayed on individual NIAH pages in separate fields. The individual-page coordinate reference system is not labelled in the page display. Do not interpret those raw pairs as EPSG:2157 or substitute them for official CSV coordinates. See the [official NIAH Data Download page](https://www.buildingsofireland.ie/niah-data-download/).

## Duplicate and identity checks

- All five exact registration numbers are present in workflow #1991's Dublin City missing-registration queue.
- The workflow-generated official-register audit contains no archive match for these five IDs.
- Exact-number searches across repository issues and all pull-request states returned no matches.
- Each selected candidate has an individual official NIAH record.
- The queue does not contain 50010235; no record was inferred for it.
- National CSV NAME is blank for 50010232, 50010233 and 50010234; page titles and business labels are kept separate.
- The CSV IN_USE_AS_TYPE field for 50010233 is blank although the individual page description says retail use.

## Review decision

Keep this PR in draft pending separate review of the three blank NAME fields, the 50010233 use-field discrepancy, the 50010234 page-title/business-label distinction and coordinate provenance. Survey-time data must not be treated as present-day occupancy, access or condition.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
