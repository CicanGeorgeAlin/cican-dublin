# CICAN Dublin Archive — Batch 073 NIAH Discovery Review

**Status:** Research-only; draft review required  
**Branch:** `research/batch-073-niah-candidates`  
**Evidence packet:** `audit/batch-073-five-candidate-evidence.json`  
**Source snapshot:** workflow #1931, run ID `45263370961`, artifact `niah-dublin-bulk-coverage-audit`

## Scope and selection

Five exact NIAH registration numbers were selected from the official workflow-generated Dublin missing-registration queue. Each candidate has an individual official Buildings of Ireland record. Exact-number searches against open repository issues and pull requests returned no matches for these five registration numbers at the time of research.

The records form a local transport-heritage cluster around Amiens Street and Connolly Station. They are not one building: the bridge, main station, train shed, former railway head office and former signal-related public house retain separate registration identities.

## Candidate review

| NIAH registration | Structure | Rating | Official NIAH record |
|---|---|---|---|
| 50010117 | Amiens Street railway bridge | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010117/amiens-street-amiens-street-dublin-1-dublin-city) |
| 50010118 | Irish Rail Head Office, Connolly Station | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010118/irish-rail-head-office-connolly-station-amiens-street-sheriff-street-lower-dublin-1-dublin) |
| 50010119 | Connolly Station main building | National | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010119/connolly-station-amiens-street-dublin-1-co-dublin) |
| 50010122 | J. & M. Cleary, 36 Amiens Street | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010122/j-m-cleary-amiens-street-dublin-1-dublin) |
| 50010123 | Connolly Station train shed | Regional | [Official record](https://www.buildingsofireland.ie/buildings-search/building/50010123/connolly-station-amiens-street-dublin-1-co-dublin) |

## Individual evidence

### 50010117 — Amiens Street railway bridge

The NIAH describes a railway bridge erected in 1891 as part of the City of Dublin Junction Railway/Loop Line Bridge, carrying railway tracks over Amiens Street. The description records a central steel span, masonry spans and cast-iron fluted columns. The appraisal explains its role in the railway link between Connolly Station and the south side of the Liffey. It is a separately registered bridge, not a station component to be merged into the station record.

### 50010118 — Irish Rail Head Office, Connolly Station

The NIAH identifies this as the former Great Northern Railway head office, built c.1880 to designs by John Lanyon. It has a three-stage campanile at the southwest corner and a later rear extension adjoining the northwest elevation of the Connolly Station train shed. Its physical relationship to the railway complex should be retained as a relationship; the office remains a distinct registered building.

### 50010119 — Connolly Station

The NIAH describes the main station building as built in 1846 to designs by Sir John Macneill and William Deane Butler, originally known as Amiens Street Station. Its granite façade includes a central campanile, flanking towers and colonnaded wings. The appraisal notes that the train shed was completed and the railway operational before the elaborate façade was completed.

### 50010122 — J. & M. Cleary, 36 Amiens Street

The NIAH describes an end-of-terrace three-bay, three-storey brick public house with an original shopfront, built c.1900. The appraisal highlights the unusual coved fascia with gilded signwriting and cast-iron balustrading. It notes that the premises featured in James Joyce's *Ulysses* and was used as a film location.

**Source wording discrepancy:** The national CSV's original-use field says “signal box”; the individual NIAH appraisal says it was originally built as a “signal house” to service the railway. Both wordings are preserved in the evidence packet. Do not silently replace one with the other.

### 50010123 — Connolly Station train shed

The NIAH describes an attached train shed built c.1850, adjoining the rear (northeast) elevation of the main station. Its description records the corrugated-iron and glazed roof, steel trusses, central cast-iron arcade, brick and stone elevations and surviving platform infrastructure. The train shed is separately registered from the main station (50010119), despite being physically attached.

## Coordinate provenance

For each candidate, the JSON packet records:

- Official national CSV ITM coordinates (EPSG:2157).
- Official national CSV latitude/longitude.
- The coordinate pair shown on the individual NIAH page, preserved separately as a raw pair because the page does not label its CRS.

Do not reinterpret page coordinate pairs as EPSG:2157 or substitute them for the official CSV values. The [NIAH Data Download](https://www.buildingsofireland.ie/niah-data-download/) page describes the national register download and location fields.

## Duplicate and queue checks

- All five exact registration numbers appear in the workflow-generated Dublin missing-registration queue.
- Exact registration-number searches against open repository issues/pull requests returned no matches for 50010117, 50010118, 50010119, 50010122 and 50010123 at the time of research.
- Full official URLs, descriptive evidence and coordinate provenance are recorded in the accompanying JSON packet.

## Identity and quality cautions

1. The main station (50010119) and train shed (50010123) are physically attached but separately registered. Preserve separate records and their relationship.
2. The former head office (50010118) is another distinct railway-complex building.
3. The bridge (50010117) is a separate transport structure crossing Amiens Street.
4. The public house at 36 Amiens Street (50010122) is separately registered; its historical signal-related use wording differs between the CSV field and appraisal.
5. NIAH descriptions of use, fabric and condition are survey-time source statements, not present-day field observations.
6. No public access, ownership, interior access or safe photography position is assumed.

## Decision requested at review

Review the five source records, separate structure identities, relationships within the railway complex, the source wording discrepancy for 50010122, and coordinate provenance before any later catalogue-import proposal. This PR is intentionally research-only and must remain a draft until the separate review is complete.

## Production safety

**No archive IDs, catalogue imports, source/visual inventory imports, map pins, production changes, merges or deployments were made by this batch.**
