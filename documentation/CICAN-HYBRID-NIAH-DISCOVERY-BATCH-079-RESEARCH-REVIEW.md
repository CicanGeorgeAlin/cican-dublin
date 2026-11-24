# CICAN Dublin Archive — Batch 079 NIAH Discovery Review

**Status:** Research-only; draft review required  
**Branch:** `research/batch-079-niah-candidates`  
**Evidence packet:** `audit/batch-079-five-candidate-evidence.json`  
**Source snapshot:** workflow #1955, run ID `45313658288`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five exact NIAH registration numbers were selected from the workflow-generated Dublin missing-registration queue. Each candidate has an individual official Buildings of Ireland record. Exact-number searches against open repository issues and pull requests returned no matches for these five registration numbers at the time of research.

The batch continues along Gardiner Street Lower, from Nos.82-86. It records two separately registered Abraham House buildings, The Glen, and the paired Hazelbrook House registrations. The latter are particularly important for identity management: Nos.85 and 86 were internally connected and used as one guesthouse at survey time, but remain separate NIAH registrations.

## Candidate review

| NIAH registration | Structure | Rating | Official NIAH record |
|---|---|---|---|
| 50010177 | Abraham House, 82 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010177/abraham-house-gardiner-street-lower-dublin-1-dublin-city) |
| 50010178 | Abraham House, 83 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010178/abraham-house-83-gardiner-street-lower-dublin-1-dublin) |
| 50010179 | The Glen, 84 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010179/the-glen-84-gardiner-street-lower-dublin-1-co-dublin) |
| 50010180 | Hazelbrook House, 85 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010180/hazelbrook-house-85-gardiner-street-lower-dublin-1-co-dublin) |
| 50010181 | Hazelbrook House, 86 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010181/hazelbrook-house-gardiner-street-lower-dublin-1-dublin-city-2) |

## Individual evidence

### 50010177 — Abraham House, No.82

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820. It records yellow Flemish-bond brick, chamfered granite plinth, a partly rebuilt third floor, diminishing gauged flat-arched windows, replacement timber sashes, an original basement window and grille, and an engaged Ionic doorcase with fluted frieze. A modern marble plaque bears the inscription “ABRAHAM HOUSE”. The appraisal identifies the house as part of the significant Gardiner Street Lower Georgian streetscape.

### 50010178 — Abraham House, No.83

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820. It records yellow Flemish-bond brick, chamfered granite plinth, rebuilt third floor, replacement timber sash windows, round-headed brick door opening and an Ionic doorcase with spoked fanlight. The granite-capped basement party wall and access arrangement are shared with No.82. This is a separate registration and house identity.

### 50010179 — The Glen, No.84

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820. It records yellow Flemish-bond brick, painted chamfered granite plinth, diminishing window openings, replacement timber sashes, cast-iron balconettes, Ionic doorcase and stained-glass fanlight bearing the legend “The Glen”. A large five-storey apartment block fronting Mabbot Lane occupies much of the rear site. The appraisal notes the paired-doorcase rhythm of Gardiner Street Lower.

### 50010180 — Hazelbrook House, No.85

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820. It records yellow Flemish-bond brick, moulded granite plinth, Ionic doorcase, granite approach and cast-iron railings, plus a roof-lit two-storey warehouse mews building fronting Mabbot Lane. Nos.85 and 86 were adapted for use as one guesthouse, with openings inserted through their party wall at all levels. Original staircases remain in both houses, and No.85 retains an original ground-floor fireplace.

### 50010181 — Hazelbrook House, No.86

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820. It records red Flemish-bond brick, moulded granite plinth and string course over dressed limestone basement, cast-iron balconettes, Ionic doorcase, granite approach and railings. The rear plot is built up with connected buildings and a roof-lit two-storey warehouse mews building fronting Mabbot Lane. Nos.85 and 86 were modified for use as one guesthouse, with openings through their party wall at all levels. No.86 retains an original staircase and an original interior timber door with moulded surround and cobweb fanlight.

## Shared use and object identity

The NIAH records that Nos.85 and 86 were internally connected and used as a single guesthouse at survey time. This is an operational and physical relationship; it does not cancel their separate registration numbers. The same principle applies to the shared basement party-wall/access arrangement between Nos.82 and 83.

The large apartment block behind No.84 and the warehouse mews described behind Nos.85-86 are recorded as contextual rear-site structures. No additional archive objects are proposed without separate registration or independent footprint-level evidence.

## Coordinate provenance

The evidence JSON records for each candidate:

- Official national CSV ITM coordinates (EPSG:2157).
- Official national CSV latitude/longitude.
- The coordinate pair displayed on the individual NIAH page, preserved separately as a raw pair because the page does not label its CRS.

Do not reinterpret page coordinate pairs as EPSG:2157 or substitute them for official CSV values. The [NIAH Data Download](https://www.buildingsofireland.ie/niah-data-download/) page describes the national register download and its location fields.

## Duplicate and queue checks

- All five exact registration numbers appear in the workflow-generated Dublin missing-registration queue.
- Exact registration-number searches against open repository issues/pull requests returned no matches for 50010177, 50010178, 50010179, 50010180 and 50010181 at the time of research.
- Full official URLs, descriptions, appraisals and coordinate provenance are recorded in the accompanying JSON packet.

## Identity and quality cautions

1. Nos.82 and 83 are separately registered houses despite a shared basement party wall/access arrangement.
2. No.84 is a separate house registration; rear-site apartment development is not to be conflated with the street-front house.
3. Nos.85 and 86 remain separate registrations despite internal connections and shared guesthouse use.
4. Rear warehouse/mews structures are not new candidates unless separate registration or independent object-level evidence supports a distinct record.
5. NIAH use and condition descriptions are survey-time source statements, not present-day field observations.
6. No public access, ownership, interior access or safe photography position is assumed.

## Decision requested at review

Review the five source records, the shared party-wall and rear-site relationships, and the separate registration boundaries for Nos.85 and 86 before any later catalogue-import proposal. This PR is intentionally research-only and must remain a draft until separate review is complete.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
