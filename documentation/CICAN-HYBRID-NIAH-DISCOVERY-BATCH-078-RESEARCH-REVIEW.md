# CICAN Dublin Archive — Batch 078 NIAH Discovery Review

**Status:** Research-only; draft review required  
**Branch:** `research/batch-078-niah-candidates`  
**Evidence packet:** `audit/batch-078-five-candidate-evidence.json`  
**Source snapshot:** workflow #1951, run ID `45313453203`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five exact NIAH registration numbers were selected from the workflow-generated Dublin missing-registration queue. Each candidate has an individual official Buildings of Ireland record. Exact-number searches against open repository issues and pull requests returned no matches for these five registration numbers at the time of research.

The batch follows the Gardiner Street Lower terrace through Nos.77-81. This is a useful identity-boundary case: three street-front houses at Nos.77-79 are individually registered even though the NIAH describes a later rear building spanning the triple plot width on Mabbot Lane. Nos.80 and 81 are further distinct registrations.

## Candidate review

| NIAH registration | Structure | Rating | Official NIAH record |
|---|---|---|---|
| 50010172 | Georgian Court, 77 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010172/georgian-court-77-gardiner-street-lower-dublin-1-dublin) |
| 50010173 | Georgian Court, 78 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010173/georgian-court-78-gardiner-street-lower-dublin-1-dublin) |
| 50010174 | Georgian Court, 79 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010174/georgian-court-gardiner-street-lower-dublin-1-dublin-city-3) |
| 50010175 | City Manor, 80 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010175/city-manor-80-gardiner-street-lower-dublin-1-dublin) |
| 50010176 | 81 Gardiner Street Lower (no name in queue) | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010176/81-gardiner-street-lower-dublin-1-co-dublin) |

## Individual evidence

### 50010172 — Georgian Court, No.77

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820. It records Flemish-bond yellow brick, a moulded granite plinth, rebuilt third floor, diminishing window openings, timber sliding sashes, later balconettes and steel guards, and a Roman Doric stone doorcase with triglyph-and-metope frieze. The appraisal identifies the house as part of the surviving early nineteenth-century Gardiner Street terrace.

### 50010173 — Georgian Court, No.78

The NIAH describes a two-bay, four-storey house over raised basement, built c.1820, and records its use as part of a guesthouse operation occupying Nos.77-79. Architectural details include Flemish-bond yellow brick, moulded granite plinth, diminishing windows, replacement timber sashes, later balconettes and a Roman Doric doorcase with floral and egg-and-dart capitals and Doric frieze. The appraisal places No.78 in the surviving terrace along the route from Beresford Place to Mountjoy Square.

### 50010174 — Georgian Court, No.79

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820. It records Flemish-bond yellow brick, granite plinth, rendered basement, diminishing windows, timber sliding sashes, balconettes, steel guards, a Roman Doric doorcase and an original wrought-iron bootscraper. The appraisal identifies No.79 as part of the surviving early nineteenth-century Gardiner Street terrace.

### 50010175 — City Manor, No.80

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820. It records Flemish-bond yellow brick, moulded granite plinth, Roman Doric doorcase, decorative wrought-iron balconettes, granite platform and approach, and spearheaded railings. The appraisal notes alterations and poor condition of façade brickwork at survey time, while identifying the survival of historic form and features. A small mews building is set back from Mabbot Lane. Survey-time condition is not evidence of present condition.

### 50010176 — No.81 (unnamed in queue)

The official queue's NAME field is blank, so this packet preserves the building as No.81 without assigning a name. The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820, with a three-storey rendered rear return. It records yellow Flemish-bond brick, chamfered granite plinth, replacement timber sliding sashes, a Roman Doric doorcase, granite platform and bull-nosed steps, and original wrought-iron railings. The original stone mews structure survives on Mabbot Lane, although its façade, roof and interior have been altered.

The appraisal notes paired doorcase patterns across the block and suggests a group development. That relationship does not merge the separate registration.

## Shared rear structure and building identity

The NIAH records for Nos.77-79 describe a later five-storey building on Mabbot Lane occupying significant plot depth across the triple plot width. Its street façades are expressed individually while sharing a roof. The evidence packet records this as a spatial and architectural relationship only. It does not create an extra archive object for the shared rear building or collapse the three street-front registrations into one.

No.80 and No.81 have separately described rear/mews structures and remain independent registration candidates.

## Coordinate provenance

The evidence JSON records for each candidate:

- Official national CSV ITM coordinates (EPSG:2157).
- Official national CSV latitude/longitude.
- The coordinate pair displayed on the individual NIAH page, preserved separately as a raw pair because the page does not label its CRS.

Do not reinterpret page coordinate pairs as EPSG:2157 or substitute them for official CSV values. The [NIAH Data Download](https://www.buildingsofireland.ie/niah-data-download/) page describes the national register download and its location fields.

## Duplicate and queue checks

- All five exact registration numbers appear in the workflow-generated Dublin missing-registration queue.
- Exact registration-number searches against open repository issues/pull requests returned no matches for 50010172, 50010173, 50010174, 50010175 and 50010176 at the time of research.
- Full official URLs, descriptions, appraisals and coordinate provenance are recorded in the accompanying JSON packet.

## Identity and quality cautions

1. Nos.77, 78 and 79 are three separately registered street-front houses. The shared rear building across their plots is not a reason to merge the three registrations or create an unsupported sixth object.
2. No.80 is a separate registration and its mews context must not be confused with the triple-plot rear building at Nos.77-79.
3. No.81 is separately registered. Shared doorcase design and group development are contextual relationships, not a single building identity.
4. The queue's NAME field for 50010176 is blank. No alternative name is inferred.
5. NIAH use and condition descriptions are survey-time source statements, not present-day field observations.
6. No public access, ownership, interior access or safe photography position is assumed.

## Decision requested at review

Review the five source records, the unusual triple-plot rear-building relationship at Nos.77-79, the distinction between street-front and mews structures, and the blank name field for No.81 before any later catalogue-import proposal. This PR is intentionally research-only and must remain a draft until separate review is complete.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
