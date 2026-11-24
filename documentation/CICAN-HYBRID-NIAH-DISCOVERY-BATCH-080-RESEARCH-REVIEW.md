# CICAN Dublin Archive — Batch 080 NIAH Discovery Review

**Status:** Research-only; draft review required  
**Branch:** `research/batch-080-niah-candidates`  
**Evidence packet:** `audit/batch-080-five-candidate-evidence.json`  
**Source snapshot:** workflow #1955, run ID `45313658288`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five exact NIAH registration numbers were selected from the workflow-generated Dublin missing-registration queue. Each candidate has an individual official Buildings of Ireland record. Exact-number searches against open repository issues and pull requests returned no matches for these five registration numbers at the time of research.

Four candidates continue the Gardiner Street Lower terrace at Nos.87-90. The fifth is the distinctive corner-sited No.33 at Deverell Place, selected for its Queen's Wall rear screen and surviving carved sandstone water tank.

## Candidate review

| NIAH registration | Structure | Rating | Official NIAH record |
|---|---|---|---|
| 50010182 | Abbott Lodge, 87 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010182/abbott-lodge-87-gardiner-street-lower-dublin-1-dublin) |
| 50010183 | Abbott Lodge, 88 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010183/abbott-lodge-88-gardiner-street-lower-dublin-1-dublin) |
| 50010184 | My Place Guesthouse, 89 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010184/my-place-guesthouse-89-gardiner-street-lower-dublin-1-dublin) |
| 50010185 | My Place Guesthouse, 90 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010185/my-place-guesthouse-90-gardiner-street-lower-dublin-1-dublin) |
| 50010186 | O'Carroll Construction, 33 Gardiner Street Lower / Deverell Place | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010186/ocarroll-construction-33-gardiner-street-lower-deverell-place-dublin-1-dublin) |

## Individual evidence

### 50010182 — Abbott Lodge, No.87

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820. It records yellow Flemish-bond brick, moulded granite plinth and string course over coursed limestone basement walls, diminishing gauged window openings, timber sliding sashes, an Ionic doorcase and spearheaded railings. The basement area is shared with and accessed from No.86. A recent single-storey mews building to the rear spans a double plot shared with No.88.

### 50010183 — Abbott Lodge, No.88

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820. It records yellow Flemish-bond brick, moulded granite plinth, rebuilt upper brickwork, diminishing windows, replacement uPVC windows, decorative cast-iron balconettes and a detailed doorcase with fluted Doric columns, cobweb fanlight and decorative lion figurines. A recent single-storey mews building to the rear occupies a double-width plot shared with No.87.

### 50010184 — My Place Guesthouse, No.89

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820, recorded as restaurant with guest accommodation above. It notes yellow Flemish-bond brick, rebuilt upper walling, diminishing windows, surviving six-over-six timber sash windows to the second floor, a composite Ionic doorcase, granite approach and wrought-iron railings. The rear plot is built up with connected buildings including a two-storey mews on Mabbot Lane.

### 50010185 — My Place Guesthouse, No.90

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820, recorded as restaurant and guesthouse. It records yellow Flemish-bond brick with upper rebuilding in English garden-wall bond, diminishing windows, replacement uPVC windows, composite doorcase, granite approach and wrought-iron railings. A two-storey stone mews building on Mabbot Lane survives with a modified façade and altered roofline.

### 50010186 — O'Carroll Construction, No.33 / Deverell Place

The NIAH describes a corner-sited end-of-terrace two-bay, four-storey house over raised basement, built c.1840, with a single-storey rendered wing fronting Deverell Place, built c.1900. It was built as one of a pair with No.34. The record notes yellow Flemish-bond brick, calp-stone basement, wrought-iron balconettes, Ionic doorcase, decorative railings, a carved sandstone water tank, restored interior plasterwork and timber joinery, and a dog-leg timber stair.

The retained rear screen wall known as Queen's Wall was built c.1900 for Queen Victoria's visit. The NIAH describes Doric pilasters, frieze and cornice. It is recorded as part of the No.33 property, not proposed as a separate archive object.

## Shared use and object identity

Nos.87 and 88 are separate NIAH registrations despite shared basement access and a double-width rear mews structure. Nos.89 and 90 are separately registered houses despite the shared commercial name and restaurant/guesthouse operation. No.33 is one member of a pair with No.34 (registration 50010187); the pair relationship does not merge the two buildings.

The Queen's Wall is a retained rear screen-wall feature described within the No.33 record. No additional object is proposed without independent object-level evidence or a separate registration.

## Coordinate provenance

The evidence JSON records for each candidate:

- Official national CSV ITM coordinates (EPSG:2157).
- Official national CSV latitude/longitude.
- The coordinate pair displayed on the individual NIAH page, preserved separately as a raw pair because the page does not label its CRS.

Do not reinterpret page coordinate pairs as EPSG:2157 or substitute them for official CSV values. The [NIAH Data Download](https://www.buildingsofireland.ie/niah-data-download/) page describes the national register download and its location fields.

## Duplicate and queue checks

- All five exact registration numbers appear in the workflow-generated Dublin missing-registration queue.
- Exact registration-number searches against open repository issues/pull requests returned no matches for 50010182, 50010183, 50010184, 50010185 and 50010186 at the time of research.
- Full official URLs, descriptions, appraisals and coordinate provenance are recorded in the accompanying JSON packet.

## Identity and quality cautions

1. Nos.87 and 88 are separate registrations despite shared basement access and rear mews relationships.
2. Nos.89 and 90 are separate registrations despite shared commercial naming and guesthouse operation.
3. No.33 is a separate registration from No.34; the Queen's Wall is part of the No.33 record in this evidence packet.
4. NIAH use and condition descriptions are survey-time source statements, not present-day field observations.
5. No public access, ownership, interior access or safe photography position is assumed.

## Decision requested at review

Review the five source records, the shared basement/rear mews relationships at Nos.87-88, the distinct building identities at Nos.89-90, and the treatment of Queen's Wall within the No.33 record before any later catalogue-import proposal. This PR is intentionally research-only and must remain a draft until separate review is complete.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
