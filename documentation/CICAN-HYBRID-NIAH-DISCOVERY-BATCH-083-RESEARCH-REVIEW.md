# CICAN Dublin Archive — Batch 083 NIAH Discovery Review

**Status:** Research-only; draft review required  
**Branch:** `research/batch-083-niah-candidates`  
**Evidence packet:** `audit/batch-083-five-candidate-evidence.json`  
**Source snapshot:** workflow #1967, run ID `45315820079`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five exact registration numbers, 50010200–50010204, were selected from the official workflow-generated Dublin missing-registration queue. All five have individual Buildings of Ireland NIAH pages. Exact-number searches against open repository issues and pull requests returned no matches for the selected numbers at the time of research.

The records form a continuous north-side Talbot Street sequence from Nos.12–16. They are separate NIAH registrations even where their descriptions refer to shared chimney stacks, rainwater goods, parapets, shopfront elements or a continuous terrace.

## Candidate register

| Registration | Building | Address | Official record |
|---|---|---|---|
| 50010200 | Living Island | 16 Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010200/living-island-16-talbot-street-dublin-1-dublin) |
| 50010201 | Continental Foods Cash and Carry | 15 Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010201/continental-foods-cash-and-carry-15-talbot-street-dublin-1-dublin) |
| 50010202 | Gerry Keane Paints/Wallpaper | 14 Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010202/gerry-keane-paints-wallpaper-14-talbot-street-dublin-1-dublin) |
| 50010203 | Gerry Keane Paints/Wallpaper | 13 Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010203/gerry-keane-paints-wallpaper-13-talbot-street-dublin-1-dublin) |
| 50010204 | Aroma Foods | 12 Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010204/aroma-foods-12-talbot-street-dublin-1-dublin) |

## Individual evidence summary

### 50010200 — Living Island, No.16

The NIAH describes a terraced two-bay, three-storey house, built c.1840, now in commercial use. It records a pitched slate roof, shared brown-brick chimneystacks and terracotta pots, rendered walls with channelled render quoins, timber sliding sash windows and cast-iron balconettes to first-floor windows. The recent shopfront has panelled timber pilasters and shaped consoles/fascia. The appraisal identifies the surviving timber sashes and balconettes as notable features and notes the building's contribution to the 1840s Talbot Street terrace.

### 50010201 — Continental Foods Cash and Carry, No.15

The NIAH describes a terraced two-bay, three-storey house with dormer attic, built c.1840, now commercial. It records a pitched slate roof, shared brown-brick chimneystacks, terracotta pots, front dormer windows, brown-brick parapet, Flemish-bond upper walling, gauged square-headed openings, timber sliding sashes and a recent shopfront. The appraisal notes surviving timber sashes and the building's coherent form within the north-side Talbot Street terrace laid out following the sale of Tyrone House.

### 50010202 — Gerry Keane Paints/Wallpaper, No.14

The NIAH describes a terraced two-bay, three-storey house with dormer attic, built c.1840, now commercial. It records a pitched slate roof with shared red-brick stacks and gable-fronted dormer, Flemish-bond brickwork over a red-brick platband, gauged square-headed windows, replacement uPVC windows, steel balconettes and a recent shared timber shopfront with bolection mouldings and polished granite plinths. The appraisal notes the building maintains the terrace's fenestration rhythm and parapet height.

### 50010203 — Gerry Keane Paints/Wallpaper, No.13

The NIAH describes a terraced two-bay, three-storey house, built c.1840, now commercial. It records a pitched slate roof with shared red-brick stacks behind a brown-brick parapet, Flemish-bond brickwork over a recent shared timber shopfront, gauged square-headed windows, replacement uPVC windows, engaged pilasters, polished granite plinths, fascia and moulded cornice. The appraisal notes the façade's regularity and simplicity and its contribution to the north-side terrace laid out in the 1840s.

### 50010204 — Aroma Foods, No.12

The NIAH describes a terraced two-bay, three-storey house, built c.1840, with a recent timber shopfront. It records a flat roof with shared red-brick stacks behind a brown-brick parapet, Flemish-bond brickwork, gauged square-headed windows with masonry sills, single-pane timber sliding sashes, a timber shopfront and a separate panelled door with overlight to the upper floors. The appraisal notes the building's modest scale and its contribution to the street's fenestration rhythm and parapet line.

**Important source discrepancy:** the official national CSV has a blank `IN_USE_AS_TYPE` for 50010204. The individual NIAH page lists historical use as shop/retail outlet and says the building is currently vacant. These fields are preserved separately. No current tenant or active commercial use is inferred.

## Identity and spatial cautions

- Nos.12–16 are five separately registered terrace houses. Preserve each registration as its own building record.
- Nos.13 and 14 share the commercial name Gerry Keane Paints/Wallpaper in the NIAH register but have distinct registration numbers, addresses and descriptions. Do not collapse the buildings into one record.
- No.12's blank CSV use field and the individual page's historical-use/current-vacant statements must remain separate source assertions.
- Shared chimney stacks, rainwater goods, parapet lines, shopfront components and terrace rhythm are relationships or architectural components, not additional archive objects without independent object-level evidence.
- No current condition, occupancy, public access or ownership has been field-verified.

## Coordinate provenance

The JSON records official national CSV ITM coordinates (EPSG:2157), official national CSV latitude/longitude, and individual NIAH page coordinate pairs separately. The page pairs are not labelled with a CRS and must not be interpreted as EPSG:2157 or substituted for the CSV coordinates. The [official NIAH Data Download page](https://www.buildingsofireland.ie/niah-data-download/) documents the national register data.

## Duplicate and queue checks

- All five exact registration numbers are present in the workflow-generated Dublin missing-registration queue.
- Exact-number searches against open repository issues/pull requests returned no matches for 50010200, 50010201, 50010202, 50010203 and 50010204 at the time of research.
- Each candidate has an individual official NIAH page.

## Review decision

Review the distinct identities at Nos.12–16, especially the two records using the Gerry Keane Paints/Wallpaper name and the blank CSV use field for No.12. Keep this PR in draft until source, identity and coordinate provenance receive separate review.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
