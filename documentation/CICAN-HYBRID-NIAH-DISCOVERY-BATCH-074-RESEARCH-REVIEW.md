# CICAN Dublin Archive — Batch 074 NIAH Discovery Review

**Status:** Research-only; draft review required  
**Branch:** `research/batch-074-niah-candidates`  
**Evidence packet:** `audit/batch-074-five-candidate-evidence.json`  
**Source snapshot:** workflow #1935, run ID `45297133939`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five exact NIAH registration numbers were selected from the official workflow-generated Dublin missing-registration queue. Each has an individual official Buildings of Ireland record. Exact-number searches against open repository issues and pull requests returned no matches for these five numbers at the time of research.

This batch covers the North Star Hotel, Dublin City Coroner's Court and three separately registered historic structures at George's Dock. The George's Dock records form a related maritime/industrial group, but are not one object and must not be merged.

## Candidate review

| NIAH registration | Structure | Rating | Official NIAH record |
|---|---|---|---|
| 50010124 | North Star Hotel, 26-39 Amiens Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010124/north-star-hotel-26-39-amiens-street-dublin-1-dublin) |
| 50010127 | Dublin City Coroner's Court, 3 Store Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010127/dublin-city-coroners-court-3-store-street-dublin-1-dublin) |
| 50010128 | The Harbourmaster / former Dock Offices | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010128/the-harbourmaster-georges-dock-harbourmaster-place-dublin-1-dublin) |
| 50010129 | Pair of George's Dock winches | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010129/georges-dock-custom-house-harbour-dublin-1-co-dublin) |
| 50010130 | George's Dock limestone lock | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010130/georges-dock-custom-house-harbour-dublin-1-co-dublin) |

## Individual evidence

### 50010124 — North Star Hotel

The NIAH describes a terraced ten-bay, three-storey, double-pile Victorian stucco-faced hotel built c.1880. Its appraisal says it was built to service the developing railway system in the last quarter of the nineteenth century and notes its difficult triangular site between the overhead Loop-line railway and Amiens Street. The architectural description records decorative stucco panels and architraves, a principal round-arched entrance and a calp-stone gable wall adjoining the railway structure.

The hotel is a separate registered building. Its relationship to the Loop-line railway is contextual; it should not be merged with the railway bridge or station structures.

### 50010127 — Dublin City Coroner's Court

The NIAH identifies a terraced building built in 1901 at 3 Store Street, comprising a two-storey, two-bay block with a projecting double-height gable-fronted end bay. The description records red-brick Flemish-bond walls, sandstone detailing, a moulded coat-of-arms and carved “CORONER'S COURT” lettering. The register records its original and in-use functions as a courthouse.

The workflow queue contains no separate appraisal text for this registration. This review therefore relies on the official record's descriptive text and does not infer additional appraisal claims.

### 50010128 — The Harbourmaster / former Dock Offices

The NIAH describes a detached three-bay, two-storey brick former harbourmaster's house or Dock Offices, built c.1830, with a three-stage tower and clock faces. The record identifies its later conversion to a pub and restaurant and its lock-side setting between George's Dock and Inner Dock.

This building is separately registered from the lock and winches in the same dock group.

### 50010129 — Pair of George's Dock winches

The NIAH describes a pair of cast- and wrought-iron winches erected c.1830 on the east side of the lock linking Inner Dock with George's Dock. The description records cog-wheels, axles and crank handles supported on iron brackets fixed to a granite base. The appraisal explains that the winches were used to pull ships closer to the dock walls.

The pair is one registered object. Do not create two separate archive records for the individual winches unless future footprint-level evidence and a separate review establish a distinct archival reason.

### 50010130 — George's Dock limestone lock

The NIAH describes a limestone lock built c.1825, connecting George's Dock to Inner Dock. Its description records paired squared and coursed limestone ashlar walls, granite coping, curved ends where former lock gates were located and later alterations including a modern steel bridge. The appraisal states that the lock is no longer in use and was retained during docklands redevelopment.

The lock is separately registered from the pair of winches (50010129) and the former Dock Offices (50010128).

## Coordinate provenance

The evidence JSON records for each candidate:

- Official national CSV ITM coordinates (EPSG:2157).
- Official national CSV latitude/longitude.
- The coordinate pair displayed on the individual NIAH page, preserved separately as a raw pair because the page does not label its CRS.

Do not reinterpret page coordinate pairs as EPSG:2157 or substitute them for official CSV values. The [NIAH Data Download](https://www.buildingsofireland.ie/niah-data-download/) page describes the national register download and its location fields.

## Duplicate and queue checks

- All five exact registration numbers appear in the workflow-generated Dublin missing-registration queue.
- Exact registration-number searches against open repository issues/pull requests returned no matches for 50010124, 50010127, 50010128, 50010129 and 50010130 at the time of research.
- Full official URLs, descriptions, appraisals where supplied and coordinate provenance are recorded in the accompanying JSON packet.

## Identity and quality cautions

1. The North Star Hotel is adjacent to the Loop-line railway, but remains a separate building registration.
2. The Coroner's Court is a separate Store Street building.
3. The former Dock Offices/Harbourmaster's house, the pair of winches and the limestone lock are three distinct registrations within a related dock group.
4. The pair of winches is retained as one registered object; do not split it into two records.
5. NIAH descriptions of use, condition and alterations are survey-time source statements, not present-day field observations.
6. No public access, ownership, interior access or safe photography position is assumed.

## Decision requested at review

Review the five source records, identity boundaries within the George's Dock group, the pair-of-winches object boundary and coordinate provenance before any later catalogue-import proposal. This PR is intentionally research-only and must remain a draft until separate review is complete.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
