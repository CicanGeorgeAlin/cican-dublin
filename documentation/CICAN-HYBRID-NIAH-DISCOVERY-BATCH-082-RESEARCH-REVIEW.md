# CICAN Dublin Archive — Batch 082 NIAH Discovery Review

**Status:** Research-only; draft review required  
**Branch:** `research/batch-082-niah-candidates`  
**Evidence packet:** `audit/batch-082-five-candidate-evidence.json`  
**Source snapshot:** workflow #1967, run ID `45315820079`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five exact NIAH registration numbers were selected from the workflow-generated Dublin missing-registration queue. Individual official NIAH records were checked for all five. Exact registration-number searches against open repository issues and pull requests returned no matches for these five numbers at the time of research.

The group includes the Gardiner Street Lower / Talbot Street junction and two buildings on Talbot Street, plus No.7 Mayor Street, which is geographically separate and must not be accidentally clustered with the Gardiner/Talbot group.

## Candidate register

| Registration | Building | Address | Official record |
|---|---|---|---|
| 50010194 | Avondale Bed and Breakfast | 41 Gardiner Street Lower | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010194/avondale-bed-and-breakfast-gardiner-street-lower-dublin-1-dublin-city) |
| 50010195 | Holyhead Accommodation | 42 Gardiner Street Lower / Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010195/holyhead-accommodation-42-gardiner-street-lower-talbot-street-dublin-1-dublin) |
| 50010196 | 7 Mayor Street | 7 Mayor Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010196/7-mayor-street-dublin-1-dublin) |
| 50010197 | Desmonds / Not to Worry / Talbot Street Business Centre | 19 Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010197/desmonds-not-to-worry-talbot-street-business-centre-19-talbot-street-dublin-1-co-dublin) |
| 50010198 | Polski Sklep / Pawn Shop / Tattoo Energy / E Max Barbers | 18 Talbot Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010198/polski-sklep-pawn-shop-tattoo-energy-e-max-barbers-18-talbot-street-dublin-1-dublin) |

## Individual evidence summary

### 50010194 — Avondale Bed and Breakfast, No.41

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1820, with a three-storey extension rising from an original two-storey return. It records the building as built as one of a pair and states that the pair were in guesthouse use and interconnected at survey time. The record notes yellow Flemish-bond brick on a granite plinth, Ionic doorcase, replacement aluminium windows, shared granite platform, cast-iron boot-scrape, six granite steps and decorative railings. The appraisal says the former Georgian townhouse retains its overall composition despite loss of original fenestration.

### 50010195 — Holyhead Accommodation, No.42

The NIAH describes a corner-sited end-of-terrace three-bay, three-storey house over raised basement, built c.1830, with a single-bay south side elevation and two inserted shopfronts. It records hipped slate roofs behind parapets with granite coping, yellow Flemish-bond brick on a painted granite plinth, gauged brick openings, early replacement timber sliding sashes, Ionic doorcase, granite platform and six steps with wrought-iron railings. The south elevation contains two inserted shopfronts.

The appraisal suggests the roof configuration may indicate two originally separate houses amalgamated in the late nineteenth century. This is explicitly a source interpretation, not sufficient evidence to divide the current registered record into multiple archive objects.

### 50010196 — 7 Mayor Street

The official NIAH page title supplies the name although the missing-registration queue NAME field is blank. The NIAH describes a detached two-storey, three-bay house, built c.1890, with gabled end-bays to the front and rear. It records a pitched slate roof, red Flemish-bond brick, yellow brick platbands, polychrome brick plinth, chamfered masonry lintels and sills, gauged yellow-brick arches, paired windows to the gabled bay, front dormer, timber-framed windows, timber bargeboards and clay chimney pots. The appraisal identifies it as a modest Victorian domestic building in a predominantly industrial area and notes the survival of much of its original form and fabric.

This record is geographically separate from the Gardiner Street / Talbot Street group. Its location must be mapped independently.

### 50010197 — Desmonds / Not to Worry / Talbot Street Business Centre, No.19

The NIAH describes a terraced three-bay, three-storey house, built c.1840, recorded as combined commercial and domestic use at survey time. It notes a hipped slate roof, shared brown-brick chimneystacks behind parapet, Flemish-bond upper brickwork, gauged square-headed windows and two-over-two timber sliding sashes. The three-centred-arch entrance has a moulded surround and painted Ionic doorcase; recent shopfronts flank the entrance. The appraisal notes that despite ground-floor alterations, the building retains original form and fabric including the doorcase and sash windows, contributing to the north-side Talbot Street terrace.

### 50010198 — No.18 Talbot Street

The NIAH describes a terraced three-bay, three-storey house, built c.1840, now recorded in commercial use. It notes a hipped slate roof with valley, shared brown-brick chimneystacks behind parapet, Flemish-bond upper walls, gauged square-headed windows, masonry sills and replacement uPVC windows. Recent tiled shopfronts flank a central square-headed door opening. The appraisal notes that the upper-floor form and subtle symmetry survive despite shopfront alterations, contributing to the terrace laid out in the 1840s following the sale of Tyrone House.

## Identity and spatial cautions

- No.41 (50010194) and No.42 (50010195) are adjacent, separately registered properties. The NIAH describes No.41 as built as one of a pair and interconnected with its pair. Verify the paired identity through the adjoining official record before formal relationship linking; do not merge registrations.
- No.42 is corner-sited with a Talbot Street elevation. The NIAH's suggestion that it may have originated as two houses amalgamated in the late nineteenth century is an appraisal interpretation, not evidence to create multiple current archive objects.
- No.7 Mayor Street (50010196) is geographically separate from the Gardiner/Talbot Street group and must be treated as a separate map cluster.
- Nos.18 and 19 Talbot Street (50010198 and 50010197) are separately registered terrace buildings. Shared chimney-stack descriptions and continuous terrace context do not justify merging them or creating independent chimney objects without separate evidence.
- NIAH current-use and condition descriptions are survey-time source statements, not present-day field verification. No access, ownership, public access or current condition has been verified.

## Coordinate provenance

The evidence JSON preserves three distinct coordinate fields per candidate: official national CSV ITM coordinates (EPSG:2157), official national CSV latitude/longitude, and the coordinate pair displayed on the individual NIAH page. The page pairs have no stated CRS and must not be reinterpreted as EPSG:2157 or substituted for the national CSV fields. The [official NIAH Data Download page](https://www.buildingsofireland.ie/niah-data-download/) confirms that the national data includes location in ITM, latitude/longitude and National Grid formats.

## Duplicate and queue checks

- All five selected registration numbers are exact entries in the workflow-generated Dublin missing-registration queue.
- Exact-number searches against open repository issues/pull requests returned no matches for 50010194, 50010195, 50010196, 50010197 and 50010198 at the time of research.
- 50010196 has a blank queue NAME field; the official individual NIAH page title was used as the name, with the blank queue value preserved as a caution.

## Review decision

Review the paired/interconnected No.41 relationship, the corner identity and historical amalgamation note at No.42, and the separate geographic position of No.7 Mayor Street. Keep this PR in draft until identity boundaries and coordinate provenance have been separately reviewed.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
