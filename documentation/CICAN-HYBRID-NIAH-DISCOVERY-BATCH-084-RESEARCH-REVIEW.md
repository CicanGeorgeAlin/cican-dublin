# CICAN Dublin Archive — Batch 084 NIAH Discovery Review

**Status:** Research-only; separate review required  
**Branch:** `research/batch-084-niah-candidates`  
**Evidence packet:** `audit/batch-084-five-candidate-evidence.json`  
**Source snapshot:** workflow #1975, run ID `45316198118`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five exact registration numbers were selected from the official workflow-generated Dublin missing-registration queue: 50010205, 50010208, 50010209, 50010210 and 50010212. Each has an individual Buildings of Ireland NIAH record. Exact-number searches against repository issues and pull requests returned no matches for the five selected numbers at the time of research.

The candidates continue the north-side Talbot Street sequence researched in Batch 083. They remain separate registered buildings even where their descriptions refer to a continuous terrace or shared architectural elements.

Registration 50010211 (Shu Krazy) also appears in the queue, but its individual NIAH page could not be independently retrieved during this review. It is held for separate source verification rather than being treated as a verified candidate. Registrations 50010206 and 50010207 do not appear in the queue snapshot.

## Candidate register

| Registration | Building | Address | Official record |
|---|---|---|---|
| 50010205 | O'Neills Shoes | 11 Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010205/oneills-shoes-11-talbot-street-dublin-1-dublin) |
| 50010208 | Playland/Mayfair Furniture | 8 Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010208/playland-mayfair-furniture-8-talbot-street-dublin-1-co-dublin) |
| 50010209 | Shoe Zone/Pillar Bed & Breakfast | 9 Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010209/shoe-zone-pillar-bed-breakfast-9-talbot-street-dublin-1-dublin) |
| 50010210 | HPJ Jewellers | 6 Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010210/hpj-jewellers-talbot-street-dublin-1-dublin-city) |
| 50010212 | Nice Price/Canning Landy & Co | 4 Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010212/nice-price-canning-landy-co-4-talbot-street-dublin-1-dublin) |

## Individual evidence summary

### 50010205 — O'Neills Shoes, No.11

The NIAH describes an end-of-terrace two-bay, three-storey house, built c.1840, now used as retail premises, with a two-storey western extension. It records red-brick Flemish-bond walls, gauged square-headed openings, retained single-pane timber sliding sash windows and a timber-panelled shopfront with canted bay windows flanking the central entrance. The appraisal identifies the retained sash windows and shopfront as contributing to the streetscape.

### 50010208 — Playland/Mayfair Furniture, No.8

The NIAH describes a terraced two-bay, four-storey house, built c.1840, with a recent ground-floor shopfront. It records a flat roof, red-brick chimneystacks, rebuilt red-brick parapet, Flemish-bond brickwork, gauged square-headed openings, granite sills and single-pane timber sliding sash windows. The recent polished-granite shopfront has fluted pilasters and pedimented consoles. The appraisal notes retained upper-floor form and fabric.

### 50010209 — Shoe Zone/Pillar Bed & Breakfast, No.9

The NIAH describes a terraced three-bay, four-storey house, built c.1840, with a ground-floor shopfront. It records an M-profile slate roof, shared red-brick chimneystacks, Flemish-bond upper walls, gauged camber-headed window openings, painted masonry sills and single-pane timber sliding sash windows. The appraisal notes that, despite shopfront alteration, the building retains its overall external character and forms part of a uniform streetscape.

### 50010210 — HPJ Jewellers, No.6

The NIAH describes a terraced three-bay, four-storey house, built c.1840, now in commercial use with accommodation over. It records an M-profile slate roof, shared red-brick chimneystacks, Flemish-bond upper walls, diminishing gauged square-headed openings, masonry sills and replacement uPVC windows. The recent ground-floor shopfront has fluted engaged pilasters and consoles; a separate timber-panelled door provides access to the east. The appraisal highlights the maintained parapet height and fenestration rhythm.

### 50010212 — Nice Price/Canning Landy & Co, No.4

The NIAH describes a terraced three-bay, four-storey house, built c.1840, now in commercial use. It records a hipped slate roof set perpendicular to the street, shared red-brick chimneystacks, Flemish-bond brickwork, diminishing gauged square-headed openings, masonry sills and single-pane timber sliding sash windows throughout. The recent timber shopfront has engaged pilasters and plain consoles. The appraisal notes the retained historic features and contribution to the north-side Talbot Street terrace.

## Coordinate provenance

The evidence packet stores official national CSV ITM coordinates (EPSG:2157), official national CSV latitude/longitude, and individual NIAH page coordinate pairs separately. The page coordinate pairs are not labelled with a CRS and must not be interpreted as EPSG:2157 or substituted for the CSV coordinates. The [official NIAH Data Download page](https://www.buildingsofireland.ie/niah-data-download/) documents the national register data.

## Duplicate and queue checks

- All five selected exact registration numbers are present in the workflow-generated Dublin missing-registration queue.
- Exact-number searches against repository issues and pull requests returned no matches for 50010205, 50010208, 50010209, 50010210 and 50010212 at the time of research.
- Each selected candidate has an individual official NIAH page.
- Registration 50010211 remains held for separate source verification because its individual page could not be independently retrieved.

## Review decision

Keep this PR in draft pending separate review of the five distinct building identities, official source fields, coordinate provenance and any overlap with existing catalogue records. Do not infer current occupancy or tenant identity from historical NIAH names.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
