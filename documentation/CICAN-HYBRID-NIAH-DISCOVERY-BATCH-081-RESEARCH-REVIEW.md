# CICAN Dublin Archive — Batch 081 NIAH Discovery Review

**Status:** Research-only; draft review required  
**Branch:** `research/batch-081-niah-candidates`  
**Evidence packet:** `audit/batch-081-five-candidate-evidence.json`  
**Source snapshot:** workflow #1963, run ID `45315555340`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five individually registered Dublin City NIAH records were selected from the workflow-generated missing-registration queue. Exact registration-number searches against open repository issues and pull requests returned no matches for the five selected numbers at the time of research.

The sequence follows Gardiner Street Lower from Nos.34-35 and Nos.38-40. Registration numbers 50010189 and 50010190 were not selected: their queue NAME fields are blank and no matching official individual record was established in this research pass. This is a deliberate evidence-first skip, not an assumption that no structures exist there.

## Candidate register

| NIAH registration | Building | Address | Official record |
|---|---|---|---|
| 50010187 | Amberley House | 34 Gardiner Street Lower | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010187/amberley-house-34-gardiner-street-lower-dublin-1-dublin) |
| 50010188 | Irish Print Union / SIPTU | 35 Gardiner Street Lower | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010188/irish-print-union-marine-port-and-general-workers-group-siptu-35-gardiner-street-lower-dublin-1-co-dublin) |
| 50010191 | Teach Mhuire | 38 Gardiner Street Lower | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010191/teach-mhuire-gardiner-street-lower-dublin-1-dublin) |
| 50010192 | Teach Mhuire | 39 Gardiner Street Lower | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010192/teach-mhuire-39-gardiner-street-lower-dublin-1-dublin) |
| 50010193 | Avondale Bed and Breakfast | 40 Gardiner Street Lower | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010193/avondale-bed-and-breakfast-gardiner-street-lower-dublin-1-dublin-city) |

## Individual evidence summary

### 50010187 — Amberley House, No.34

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1840, with a two-storey over-basement return. It was built as one of a pair with No.33 (50010186). The record notes yellow Flemish-bond brick, granite plinth, calp-stone basement, gauged openings, timber sliding sashes, wrought-iron balconettes and Ionic doorcase. The rear return abuts a modern four-storey brick mews development shared with the adjoining house. The appraisal records restored plasterwork, ceiling roses, decorative timber joinery and a dog-leg stair.

### 50010188 — Irish Print Union / SIPTU, No.35

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1840. It records painted Flemish-bond brick, painted granite plinth, gauged window openings, round-headed entrance with Ionic doorcase, granite platform and steps, partially intact cast-iron bootscraper, decorative railings and basement gate. A two-storey yellow-brick former coach house survives to the rear. The appraisal notes the loss of windows but retention of the doorcase, decorative ironmongery and overall Georgian composition.

### 50010191 — Teach Mhuire, No.38

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1840, with two-storey return and built as one of a pair with No.39 (50010192). The record notes yellow Flemish-bond brick, granite plinth, gauged flat-arched windows, Ionic doorcase, shared granite platform and steps, decorative cast-iron boot-scrape and railings, and a two-storey brick former coach house to the rear. The source states that both houses were in single use as a charitable hostel at survey time.

### 50010192 — Teach Mhuire, No.39

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1840, with two-storey return and built as a pair with No.38. The record notes yellow Flemish-bond brick, painted granite plinth, gauged window openings, Ionic doorcase, original flat-panelled timber door, shared granite platform and steps, wrought/cast-iron railings and a two-storey brick former coach house. It also records replacement aluminium windows to the rear and steel mesh covering the basement area.

### 50010193 — Avondale Bed and Breakfast, No.40

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820, with a three-storey extension rising from an original two-storey return. The record notes yellow Flemish-bond brick, granite plinth, Ionic doorcase, original petal fanlight, shared granite platform, cast-iron bootscraper, six granite steps and decorative railings. The appraisal describes the house as built as one of a pair and interconnected at survey time. This relationship should be preserved without merging separately registered buildings.

## Identity and spatial cautions

- No.34 (50010187) is the separately registered pair to No.33 (50010186). Keep both building identities distinct.
- Nos.38 and 39 (50010191 and 50010192) are separately registered houses built as a pair. Their shared charitable-hostel use and shared entrance/platform/basement features are relationships, not grounds to merge registrations or create unsupported additional objects.
- No.40 (50010193) is described as interconnected with its pair at survey time. Confirm the adjoining property's own official registration before asserting its identity in a future catalogue record.
- Nos.35, 38, 39 and 40 include former coach houses or rear returns in their NIAH descriptions. These are contextual components of the registered properties, not new candidates without independent object-level evidence or separate registration.

## Coordinate provenance

The accompanying JSON stores the national CSV ITM coordinates (EPSG:2157), national CSV latitude/longitude, and the coordinate pairs shown on individual NIAH pages as three distinct evidence fields. The NIAH page coordinate pairs have no stated CRS and must not be treated as EPSG:2157 or used to overwrite the CSV fields. The official [NIAH Data Download](https://www.buildingsofireland.ie/niah-data-download/) page explains the available national register location formats.

## Duplicate and queue checks

- All five selected registration numbers were present in the workflow-generated Dublin missing-registration queue.
- Exact-number searches against open repository issues/pull requests returned no matches for 50010187, 50010188, 50010191, 50010192 and 50010193 at the time of research.
- The two blank-name queue entries 50010189 and 50010190 were deliberately skipped pending stronger individual source evidence.

## Review decision

Review the separate identities and shared-property relationships, especially the pair at Nos.38-39 and the interconnection described for No.40. Keep this PR in draft until the source records, coordinate provenance and identity boundaries have received a separate review.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
