# CICAN Dublin Archive — Batch 076 NIAH Discovery Review

**Status:** Research-only; draft review required  
**Branch:** `research/batch-076-niah-candidates`  
**Evidence packet:** `audit/batch-076-five-candidate-evidence.json`  
**Source snapshot:** workflow #1943, run ID `45313022886`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five exact NIAH registration numbers were selected from the workflow-generated Dublin missing-registration queue. Each candidate has an individual official Buildings of Ireland record. Exact-number searches against open repository issues and pull requests returned no matches for these five registration numbers at the time of research.

The batch covers two buildings on Talbot Street and three on Gardiner Street Lower. The latter form part of a Georgian terrace, but remain distinct registrations at separate street numbers.

## Candidate review

| NIAH registration | Structure | Rating | Official NIAH record |
|---|---|---|---|
| 50010140 | XL Stop Shop/Airsoft Good Fellow, 55/56 Talbot Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010140/xl-stop-shop-airsoft-good-fellow-55-56-talbot-street-dublin-1-dublin) |
| 50010142 | Clean City Laundrette, 60 Talbot Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010142/clean-city-laundrette-60-talbot-street-dublin-1-dublin) |
| 50010149 | Durban House, 69 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010149/durban-house-69-gardiner-street-lower-dublin-1-dublin) |
| 50010151 | Adelphi House, 67 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010151/adelphi-house-67-gardiner-street-lower-dublin-1-dublin) |
| 50010152 | PW Medical Centre, 66 Gardiner Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010152/pw-medical-centre-66-gardiner-street-lower-dublin-1-dublin) |

## Individual evidence

### 50010140 — XL Stop Shop/Airsoft Good Fellow

The NIAH describes a terraced three-bay, three-storey house built c.1880, modified to accommodate two retail outlets with accommodation above. It records Flemish-bond red brick, a polychrome brick string course, three-centred-arch upper windows and timber sliding sashes. The appraisal describes its unusual proportions and decorative details as contributing to the south-side Talbot Street terrace.

### 50010142 — Clean City Laundrette

The NIAH describes a terraced two-bay, three-storey house built c.1820 with a ground-floor shopfront. The former name is recorded as O'Neills Discount Jewellers. Architectural details include Flemish-bond brickwork, a foliate-moulded masonry cornice, gauged brick window openings, timber sliding sash windows and cast-iron balconettes. The appraisal notes the railway viaduct disrupts the terrace to the west.

### 50010149 — Durban House

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1825, with a two-storey hipped-roof rear return. It records Flemish-bond brown brick, granite plinth and coping, timber sliding sash windows, decorative cast-iron window boxes, a stucco Ionic doorcase, granite approach and iron railings. Its appraisal places the building in a long terrace extending from the Loop Line Bridge to Talbot Street and discusses the historic Gardiner Street vista towards the Custom House.

### 50010151 — Adelphi House

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1825. It records Flemish-bond brickwork, a granite plinth, timber windows, a stuccoed Ionic doorcase with laurel motifs, a shared granite platform and cast-iron railings. The appraisal identifies it as part of a largely intact Georgian terrace and notes that it is the only house in this stretch to have been painted, while retaining its original door and doorcase.

### 50010152 — PW Medical Centre

The NIAH describes a terraced two-bay, four-storey house over raised basement, built c.1825. It records Flemish-bond brickwork, a granite plinth, historic timber windows, cast-iron window boxes, a substantial stucco doorcase and iron railings. The appraisal places it in the later c.1825 phase of the Georgian terrace from Nos. 63-70.

**Source discrepancy retained:** the structured NIAH field “In Use As” identifies a surgery/clinic, while the narrative description says the building is now in use as a guesthouse. Both statements are preserved in the evidence packet. Neither is treated as proof of present-day use.

## Coordinate provenance

The evidence JSON records for each candidate:

- Official national CSV ITM coordinates (EPSG:2157).
- Official national CSV latitude/longitude.
- The coordinate pair displayed on the individual NIAH page, preserved separately as a raw pair because the page does not label its CRS.

Do not reinterpret page coordinate pairs as EPSG:2157 or substitute them for official CSV values. The [NIAH Data Download](https://www.buildingsofireland.ie/niah-data-download/) page describes the national register download and its location fields.

## Duplicate and queue checks

- All five exact registration numbers appear in the workflow-generated Dublin missing-registration queue.
- Exact registration-number searches against open repository issues/pull requests returned no matches for 50010140, 50010142, 50010149, 50010151 and 50010152 at the time of research.
- Full official URLs, descriptions, appraisals, coordinate values and coordinate provenance are recorded in the accompanying JSON packet.

## Identity and quality cautions

1. The Talbot Street candidates are distinct NIAH registrations and must not be merged because of their terrace context.
2. Nos. 69, 67 and 66 Gardiner Street Lower are separately registered buildings. Shared party walls and Georgian terrace continuity do not erase their individual building identities.
3. The 50010152 current-use discrepancy must remain explicit until a reliable source clarifies it.
4. NIAH use and condition descriptions are survey-time source statements, not present-day field observations.
5. No public access, ownership, interior access or safe photography position is assumed.

## Decision requested at review

Review the five source records, terrace relationships, coordinate provenance and the structured/narrative use discrepancy for 50010152 before any later catalogue-import proposal. This PR is intentionally research-only and must remain a draft until separate review is complete.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
