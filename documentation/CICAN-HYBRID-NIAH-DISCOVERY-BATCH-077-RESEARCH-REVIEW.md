# CICAN Dublin Archive — Batch 077 NIAH Discovery Review

**Status:** Research-only; draft review required  
**Branch:** `research/batch-077-niah-candidates`  
**Evidence packet:** `audit/batch-077-five-candidate-evidence.json`  
**Source snapshot:** workflow #1947, run ID `45313219375`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five exact NIAH registration numbers were selected from the workflow-generated Dublin missing-registration queue. Each selected candidate has an individual official Buildings of Ireland record. Exact-number searches against open repository issues and pull requests returned no matches for these five registration numbers at the time of research.

The batch covers five individually registered Georgian-era houses on Gardiner Street Lower, including the building identified by NIAH as the boyhood home of Lafcadio Hearn. The records also illustrate an important identity issue: adjacent houses may participate in one guesthouse or hotel operation without becoming a single architectural registration.

## Candidate review

| NIAH registration | Structure | Rating | Official NIAH record |
|---|---|---|---|
| 50010161 | Anchor House Bed and Breakfast, 49 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010161/anchor-house-bed-and-breakfast-49-gardiner-street-lower-dublin-1-dublin) |
| 50010162 | The Town House/Globetrotters Accommodation, 48 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010162/the-town-house-globetrotters-accommodation-48-gardiner-street-lower-dublin-1-dublin) |
| 50010164 | Globetrotters Budget Accommodation, 46 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010164/globetrotters-budget-accommodation-46-gardiner-street-lower-dublin-1-dublin) |
| 50010168 | O'Shea's Hotel, 73 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010168/osheas-hotel-73-gardiner-street-lower-dublin-1-dublin) |
| 50010171 | National Adult Literacy Agency, 76 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010171/national-adult-literacy-agency-76-gardiner-street-lower-dublin-1-dublin) |

## Individual evidence

### 50010161 — Anchor House Bed and Breakfast

The NIAH describes an end-of-terrace two-bay, four-storey house over raised basement, built c.1825, with a two-storey return. Its description records yellow brick in Flemish bond, granite plinth, timber sliding sash windows, cast-iron balconettes, an Ionic doorcase and an original petal fanlight. The appraisal says the house terminates a terrace of eight houses and frames the former Trinity Church in the street vista.

### 50010162 — The Town House/Globetrotters Accommodation

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1825, and notes guesthouse operation together with Nos.47 and 46. It records Flemish-bond brown brick, granite plinth, timber windows, cast-iron balconettes, original eleven-panel timber door, Ionic doorcase, petal fanlight and decorative railings.

The appraisal identifies the building as the boyhood home of Lafcadio Hearn, also known as Koizumi Yakumo, and cites this association as cultural significance.

### 50010164 — Globetrotters Budget Accommodation

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1825, with a three-storey brick return. It records Flemish-bond brown brick, granite plinth, sash windows, wrought-iron balconettes, original eleven-panel timber door, Ionic doorcase, bootscraper, granite steps and railings. Its appraisal places it in the Georgian terrace laid out by Luke Gardiner in 1790 and developed in the 1820s.

The record describes the guesthouse operation as shared with Nos.47 and 48. That operational relationship must not erase the separate NIAH registration identities.

### 50010168 — O'Shea's Hotel

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820. It states that the hotel operation occupies Nos.71-73 Gardiner Street Lower and notes that the façade appears to have been substantially rebuilt above ground-floor level. Remaining historic features include the granite plinth and stepped approach, enclosing railings and an associated brick mews building addressing Mabbot Lane.

This is one NIAH registration within a hotel operation spanning multiple street numbers. Do not infer that the entire hotel operation is one heritage object or merge adjacent registrations.

### 50010171 — National Adult Literacy Agency

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820, recorded in office use. It records yellow brick in Flemish bond, a granite plinth, coursed limestone basement walls, timber sliding sash windows, original wrought-iron balconettes, a Roman Doric doorcase, granite approach and railings.

A particularly notable detail is a surviving decorative sandstone water tank in the basement area. The record also identifies the surviving façade of an original stone mews building facing Mabbot Lane as significant.

## Coordinate provenance

The evidence JSON records for each candidate:

- Official national CSV ITM coordinates (EPSG:2157).
- Official national CSV latitude/longitude.
- The coordinate pair displayed on the individual NIAH page, preserved separately as a raw pair because the page does not label its CRS.

Do not reinterpret page coordinate pairs as EPSG:2157 or substitute them for official CSV values. The [NIAH Data Download](https://www.buildingsofireland.ie/niah-data-download/) page describes the national register download and its location fields.

## Duplicate and queue checks

- All five exact registration numbers appear in the workflow-generated Dublin missing-registration queue.
- Exact registration-number searches against open repository issues/pull requests returned no matches for 50010161, 50010162, 50010164, 50010168 and 50010171 at the time of research.
- Full official URLs, descriptions, appraisals and coordinate provenance are recorded in the accompanying JSON packet.

## Identity and quality cautions

1. Nos.48 and 46 are separate registrations even though the NIAH describes a shared guesthouse operation with No.47 (registration 50010163).
2. No.73 is one registration within the hotel operation described as occupying Nos.71-73. Do not collapse those numbers into a single archive object.
3. No.76 is distinct from the separately registered neighbouring houses. Paired doorcase patterns and group development are contextual relationships, not a reason to merge the properties.
4. NIAH use and condition descriptions are survey-time source statements, not present-day field observations.
5. No public access, ownership, interior access or safe photography position is assumed.

## Decision requested at review

Review the five source records, shared accommodation relationships, individual building boundaries and coordinate provenance before any later catalogue-import proposal. This PR is intentionally research-only and must remain a draft until separate review is complete.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
