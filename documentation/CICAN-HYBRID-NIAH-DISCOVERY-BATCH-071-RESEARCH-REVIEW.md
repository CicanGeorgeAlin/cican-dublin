# CICAN Dublin Archive — Batch 071 NIAH Discovery Review

**Status:** Research-only; draft review required  
**Branch:** `research/batch-071-niah-candidates`  
**Evidence packet:** `audit/batch-071-five-candidate-evidence.json`  
**Source snapshot:** workflow #1923, run ID `45261671304`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five exact NIAH registration numbers were selected from the Dublin missing-registration queue produced by the successful Batch 070 quality-gate run. Each registration was independently checked against its official Buildings of Ireland record. Exact-number searches against open repository issues and pull requests returned no matches for these five numbers.

This batch contains two separate research groups:

1. Three separately registered structures within the Aldborough House complex.
2. Two separately registered houses in the Preston Street terrace.

These groups are not being represented as one architectural ensemble.

## Candidate review

| NIAH registration | Structure | Rating | Official NIAH record |
|---|---|---|---|
| 50010082 | Aldborough House mansion | National | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010082/aldborough-house-portland-row-killarney-street-dublin-1-dublin) |
| 50010083 | Former theatre pavilion, Aldborough House | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010083/aldborough-house-portland-row-killarney-street-dublin-1-dublin) |
| 50010084 | Former barracks building, Aldborough House | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010084/aldborough-house-portland-row-killarney-street-dublin-1-dublin) |
| 50010108 | 4 Preston Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010108/4-preston-street-dublin-1-dublin) |
| 50010109 | Preston House, 3 Preston Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010109/preston-house-preston-street-dublin-1-dublin) |

### Group A — Aldborough House complex

**50010082 — Aldborough House.** The NIAH describes a corner-sited, seven-bay, three-storey mansion over a raised basement, dated 1796 and attributed to Richard Johnson. Its record explicitly identifies the former theatre pavilion and former barracks building as separate structures with their own NIAH registrations.

**50010083 — Former theatre pavilion.** The NIAH describes an attached, single-storey, decorative Neo-Classical pavilion built around 1800, terminating the south quadrant wing. The former matching north pavilion is recorded as demolished. This is a distinct structure and must not be absorbed into the mansion record.

**50010084 — Former barracks building.** The NIAH describes a detached, single-storey, four-bay stone building built around 1850 within the forecourt. The record says it forms part of the boundary walls of Aldborough House, but remains separately registered.

The three registrations therefore represent distinct buildings/components in a documented historic complex. Their relationship should be retained without merging their identities. The NIAH's historical condition wording is not a statement of present-day condition.

### Group B — Preston Street terrace

**50010108 — 4 Preston Street.** The NIAH describes an end-of-terrace, three-bay, three-storey house over a raised basement, built around 1810 and forming one of a terrace of four. The survey notes that the lower levels were not visible behind hoardings at the time of survey.

**50010109 — Preston House, 3 Preston Street.** The NIAH describes a separate terraced house of similar date and form. Its appraisal highlights the Adamesque doorcase and survival of early fabric.

The two registrations are separate houses in the same terrace. Do not merge them into one terrace object or infer that every building in the terrace has been reviewed in this batch.

## Coordinate handling

The evidence JSON records, for each candidate:

- Official NIAH national CSV ITM coordinates (EPSG:2157).
- Official NIAH national CSV latitude/longitude.
- The coordinate pair displayed on the individual NIAH page, preserved separately as a raw pair because the page does not label its CRS.

The raw page coordinate pairs must not be interpreted as EPSG:2157 or substituted for the official CSV fields. The official NIAH Data Download page describes the available location fields: [NIAH Data Download](https://www.buildingsofireland.ie/niah-data-download/).

## Duplicate and queue checks

- All five exact registration numbers appear in the workflow-generated Dublin missing-registration queue.
- Exact registration-number searches against open repository issues/pull requests returned no matches for 50010082, 50010083, 50010084, 50010108 and 50010109 at the time of review.
- Full evidence and coordinate fields are recorded in the accompanying JSON packet.

## Quality cautions

1. NIAH survey-time descriptions of vacancy, dereliction, use or hoardings are historical source statements. No current condition has been field-verified.
2. No public access, ownership, interior access or safe photography position is assumed.
3. The Aldborough House structures are kept as three distinct NIAH registrations with explicit parent/complex relationships.
4. The Preston Street houses remain distinct registrations within a shared terrace.
5. No archive IDs, catalogue rows, visual records, source registry rows, map pins or production coordinates are created by this research packet.

## Decision requested at review

Review the five source records, identity boundaries, coordinate provenance and potential duplication before any later catalogue-import proposal. This PR is intentionally research-only and must remain a draft until the separate review is complete.

## Production safety

**No production catalogue changes, website changes, map pins, merges or deployments were made by this batch.**
