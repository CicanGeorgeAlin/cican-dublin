# CICAN Dublin Archive — Batch 072 NIAH Discovery Review

**Status:** Research-only; draft review required  
**Branch:** `research/batch-072-niah-candidates`  
**Evidence packet:** `audit/batch-072-five-candidate-evidence.json`  
**Source snapshot:** workflow #1927, run ID `45262996544`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five exact NIAH registration numbers were selected from the official workflow-generated Dublin missing-registration queue. Each has an individual official Buildings of Ireland record. Exact-number searches against open repository issues and pull requests returned no matches for these five numbers at the time of research.

This is a local research cluster around Amiens Street and Preston Street, not a claim that all five structures form one architectural ensemble.

## Candidate review

| NIAH registration | Structure | Rating | Official NIAH record |
|---|---|---|---|
| 50010101 | INDN Express/Swift Couriers, 67 Amiens Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010101/indn-express-swift-couriers-67-amiens-street-dublin-1-dublin) |
| 50010106 | 58 Amiens Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010106/58-amiens-street-dublin-1-co-dublin) |
| 50010110 | 2 Preston Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010110/2-preston-street-dublin-1-co-dublin) |
| 50010111 | 1 Preston Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010111/1-preston-street-amiens-street-dublin-1-co-dublin) |
| 50010112 | 107 Amiens Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010112/107-amiens-street-dublin-1-dublin) |

### Amiens Street

**50010101 — 67 Amiens Street.** The NIAH describes an attached end-of-terrace two-bay, two-storey house over a raised basement, built c.1840, with a shared rear return. It identifies this property as terminating the south end of a terrace of ten paired former townhouses. The historic terrace relationship should be recorded without collapsing the ten registered properties into one object.

**50010106 — 58 Amiens Street.** The NIAH describes a terraced two-bay, three-storey house over a raised basement, built c.1830. The appraisal notes the survival of the restrained Doric doorcase and much of the building's original form and fabric. A shared granite platform with its neighbour is a shared architectural feature, not a separate building.

**50010112 — 107 Amiens Street.** The NIAH describes a terraced three-bay, three-storey house over a raised basement, built c.1810 and one of a group of three. Its appraisal highlights the Adamesque doorcase and early Georgian proportions. It remains a distinct registration.

### Preston Street

**50010110 — 2 Preston Street.** The NIAH describes a three-bay, three-storey terraced house over a raised basement, built c.1810 and one of a terrace of four. The appraisal notes the survival of early fenestration and a fine Adamesque doorcase.

**50010111 — 1 Preston Street.** The NIAH describes an end-of-terrace, corner-sited house built c.1810, also one of the four-house terrace. It occupies the corner at Amiens Street and has a single-bay address to that street. The corner treatment belongs to this registered building; it is not a separate record.

The two Preston Street properties are distinct registrations. The wider four-house terrace should not be assigned a single building identity in place of its component registrations.

## Coordinate handling

The accompanying JSON packet records, for each candidate:

- Official national CSV ITM coordinates (EPSG:2157).
- Official national CSV latitude/longitude.
- The coordinate pair displayed on the individual NIAH page, preserved separately as a raw pair because the page does not label its CRS.

Do not reinterpret the page coordinate pairs as EPSG:2157 or substitute them for the official CSV values. The [NIAH Data Download](https://www.buildingsofireland.ie/niah-data-download/) page describes the official register download and its location fields.

## Duplicate and queue checks

- All five exact registration numbers appear in the workflow-generated Dublin missing-registration queue.
- Exact registration-number searches against open repository issues/pull requests returned no matches for 50010101, 50010106, 50010110, 50010111 and 50010112 at the time of research.
- Full source URLs, descriptive evidence and coordinate provenance are recorded in the accompanying JSON packet.

## Quality cautions

1. NIAH descriptions of current use, fabric and condition reflect the survey record and are not present-day field observations.
2. No public access, ownership, interior access or safe photography position is assumed.
3. Shared platforms, rear returns and terrace relationships are treated as relationships/features, not automatically as independent archive objects.
4. The local cluster does not imply one architectural ensemble.
5. No archive IDs, catalogue rows, visual records, source registry rows, map pins or production coordinates are created by this research packet.

## Decision requested at review

Review source identity, terrace relationships, coordinate provenance and possible duplication before any later catalogue-import proposal. This PR is intentionally research-only and must remain a draft until separate review is complete.

## Production safety

**No production catalogue changes, website changes, map pins, merges or deployments were made by this batch.**
