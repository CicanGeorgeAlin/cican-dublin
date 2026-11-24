# CICAN Dublin Archive — Batch 086 NIAH Discovery Review

**Status:** Research-only; separate review required  
**Branch:** `research/batch-086-niah-candidates`  
**Evidence packet:** `audit/batch-086-five-candidate-evidence.json`  
**Source snapshot:** workflow #1983, run ID `45316712486`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five registrations were selected from the refreshed official Dublin City missing-registration queue: 50010220, 50010221, 50010223, 50010224 and 50010225. Each has an individual Buildings of Ireland NIAH record. The workflow-generated official-register reconciliation did not identify existing archive matches, and exact-number searches across repository issues and all pull-request states returned no matches.

Registration 50010222 was not selected because it is not present in the missing-registration queue. The selected buildings form part of the former National Model Schools complex, but their separate NIAH registrations must remain separate building entities.

## Candidate register

| Registration | NIAH page title | National CSV name | Address |
|---|---|---|---|
| 50010220 | National Model Schools | *(blank)* | Marlborough Street |
| 50010221 | National Model Schools originally Tyrone House | *(blank)* | Marlborough Street |
| 50010223 | National Model Schools | *(blank)* | Marlborough Street |
| 50010224 | National Model Schools | *(blank)* | Marlborough Street |
| 50010225 | Central Model School | Central Model School | Marlborough Street |

Official records:
- [50010220 — NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010220/tyrone-house-department-of-education-marlborough-street-dublin-1-dublin-city)
- [50010221 — NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010221/national-model-schools-originally-tyrone-house-marlborough-street-dublin-1-dublin)
- [50010223 — NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010223/national-model-schools-marlborough-street-dublin-1-dublin)
- [50010224 — NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010224/national-model-schools-marlborough-street-dublin-1-dublin)
- [50010225 — NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010225/central-model-school-marlborough-street-dublin-1-co-dublin)

## Evidence summary

### 50010220 — Gate lodge
The NIAH describes an attached square-plan, single-bay, single-storey gate lodge built c.1838, with granite walls, quoins, Doric columns and an adjoining granite gateway. Its appraisal says it forms one of a pair flanking the railings before the former National Model Schools campus and was probably designed by Jacob Owen.

### 50010221 — Tyrone House
The individual NIAH page title identifies this as National Model Schools originally Tyrone House; the national CSV NAME field is blank, so both fields are preserved separately. The NIAH describes an attached five-bay, three-storey mansion over basement, built 1740, with granite ashlar frontage and portico. It attributes the design to Richard Castle for Marcus Beresford and notes remodelling by Jacob Owen c.1835. The record highlights the interior stair hall, mahogany stair and decorative plasterwork.

### 50010223 — Former laboratory and lecture hall block
The NIAH describes a detached four-bay, three-storey school over raised basement, built 1902, with a seven-bay return, projecting end bays, hipped slate roof, rendered walls and granite doorcase. Its appraisal identifies it as the laboratory block and lecture hall of the National Model Schools complex.

### 50010224 — Model school
The NIAH describes a freestanding model school built 1838, with a central portico, Tuscan columns, clock stage and copper dome. Its appraisal attributes the design to Jacob Owen and says it was designed to cater for 300 students annually.

### 50010225 — Central Model School
The NIAH describes a detached model school dated 1859, with a central two-storey block, flanking single-storey ranges and canted rear pavilions. Its appraisal attributes the design to Frederick Darley and records its social importance in the teacher-training system. The record notes restoration between 1995 and 1999 after a fire in 1981.

## Coordinate provenance

The evidence JSON stores official national CSV ITM coordinates (EPSG:2157), official CSV latitude/longitude and raw coordinate pairs shown on the individual NIAH pages in separate fields. The individual-page coordinate reference system is not labelled in the page display. Do not interpret those raw pairs as EPSG:2157 or substitute them for official CSV coordinates. See the [official NIAH Data Download page](https://www.buildingsofireland.ie/niah-data-download/).

## Duplicate and identity checks

- All five exact registration numbers are present in workflow #1983's Dublin City missing-registration queue.
- The workflow's official-register reconciliation returned no archive matches for these five registrations.
- Exact-number searches against repository issues and pull requests returned no matches.
- Each registration has an individual official NIAH record.
- These are five distinct registered buildings within a shared historic campus. Do not combine them into a single archive record.
- The national CSV NAME field is blank for 50010220, 50010221, 50010223 and 50010224. The NIAH page title for 50010221 is preserved separately as “National Model Schools originally Tyrone House”; no CSV name is invented.

## Review decision

Keep this PR in draft pending separate review of the five building identities, campus relationships, blank NAME fields and coordinate provenance. Do not infer present-day occupancy, public access or condition from survey-time data.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
