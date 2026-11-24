# CICAN Dublin Archive — Batch 075 NIAH Discovery Review

**Status:** Research-only; draft review required  
**Branch:** `research/batch-075-niah-candidates`  
**Evidence packet:** `audit/batch-075-five-candidate-evidence.json`  
**Source snapshot:** workflow #1935, run ID `45297133939`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five exact NIAH registration numbers were selected from the official workflow-generated Dublin missing-registration queue. Each candidate has an individual official Buildings of Ireland record. Exact-number searches against open repository issues and pull requests returned no matches for these five registration numbers at the time of research.

The batch covers one former railway warehouse associated with Connolly Station and four Talbot Street buildings, including an early cinema and three separately registered buildings in the south-side terrace. These are distinct registrations; the terrace is a shared streetscape context, not a single building identity.

## Candidate review

| NIAH registration | Structure | Rating | Official NIAH record |
|---|---|---|---|
| 50010132 | Former railway warehouse, Sheriff Street Lower | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010132/sheriff-street-lower-dublin-1-co-dublin) |
| 50010135 | Bank of Ireland, 49 Talbot Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010135/bank-of-ireland-talbot-street-dublin-1-dublin-city) |
| 50010136 | Dublin Electric Theatre, 44-45 Talbot Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010136/dublin-electric-theatre-44-45-talbot-street-dublin-1-dublin) |
| 50010138 | Roasted Bean Coffee Company, 53 Talbot Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010138/roasted-bean-coffee-company-53-talbot-street-dublin-1-dublin-city) |
| 50010139 | Scruples, 54 Talbot Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010139/scruples-54-talbot-street-dublin-1-co-dublin) |

## Individual evidence

### 50010132 — Former railway warehouse, Sheriff Street Lower

The NIAH describes an attached fourteen-bay, two-storey railway building built c.1850, with its upper floor largely removed, lining the north side of Sheriff Street Lower. Its calp limestone walls have tooled piers and voussoired round arches to each bay. The westernmost four bays retain part of an upper level. The NIAH records its later use as a customer car park for Connolly Station and identifies it as a remnant of a former railway shed. It is a distinct structure associated with, but not to be merged into, the station buildings.

### 50010135 — Bank of Ireland, 49 Talbot Street

The NIAH describes a terraced two-bay, three-storey red-brick former house built c.1860, with a timber shopfront and ATM, in use as a bank at survey time. It records Flemish-bond brickwork, gauged segmental-headed windows, timber sliding sashes, fluted engaged pilasters and scrolled shopfront consoles. The appraisal notes the development of Talbot Street following the sale of Tyrone House c.1840.

### 50010136 — Dublin Electric Theatre, 44-45 Talbot Street

The NIAH describes a terraced six-bay, two-storey red-brick former cinema built c.1911 and designed by George Moore. It records a Dutch gable, flush granite platband and red-brick parapet coping. The appraisal notes that the structure was originally two buildings but was given a sense of unity through uniform materials and detailing. It is an early example of cinema architecture, in the context of the Volta opening in 1909.

The NIAH's present-use/vacancy description is a survey-time statement, not proof of current occupation or vacancy. The official registration is one record; do not split the historic cinema into two archive objects solely because the appraisal says it originated as two buildings.

### 50010138 — Roasted Bean Coffee Company, 53 Talbot Street

The NIAH describes a terraced two-bay, three-storey house built c.1860, with a shopfront and recorded restaurant use. The description notes rendered walling, masonry quoins, moulded architraves, timber sliding sash windows and a timber shopfront with fluted consoles. It forms part of the terrace lining the south side of Talbot Street.

### 50010139 — Scruples, 54 Talbot Street

The NIAH describes a terraced two-bay, three-storey house built c.1860, with a recent rendered shopfront. The appraisal notes the survival of much of its original form and fabric, including timber sash windows, masonry and render embellishments, moulded architraves and pedimented window lintels. It contributes to the continuity of the south-side Talbot Street terrace.

## Coordinate provenance

The evidence JSON records for each candidate:

- Official national CSV ITM coordinates (EPSG:2157).
- Official national CSV latitude/longitude.
- The coordinate pair displayed on the individual NIAH page, preserved separately as a raw pair because the page does not label its CRS.

Do not reinterpret page coordinate pairs as EPSG:2157 or substitute them for official CSV values. The [NIAH Data Download](https://www.buildingsofireland.ie/niah-data-download/) page describes the national register download and its location fields.

## Duplicate and queue checks

- All five exact registration numbers appear in the workflow-generated Dublin missing-registration queue.
- Exact registration-number searches against open repository issues/pull requests returned no matches for 50010132, 50010135, 50010136, 50010138 and 50010139 at the time of research.
- Full official URLs, descriptions, appraisals where supplied and coordinate provenance are recorded in the accompanying JSON packet.

## Identity and quality cautions

1. The Sheriff Street warehouse is a separate railway building, not part of the Connolly Station building, former head office or train shed registration.
2. The Talbot Street buildings are distinct registrations. Their terrace relationship should be retained without merging their identities.
3. Dublin Electric Theatre is one NIAH registration despite the appraisal's statement that it originated as two buildings.
4. NIAH use, vacancy and condition descriptions are survey-time source statements, not present-day field observations.
5. No public access, ownership, interior access or safe photography position is assumed.

## Decision requested at review

Review the five source records, identity boundaries, terrace relationships, the former cinema's single-record boundary and coordinate provenance before any later catalogue-import proposal. This PR is intentionally research-only and must remain a draft until separate review is complete.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
