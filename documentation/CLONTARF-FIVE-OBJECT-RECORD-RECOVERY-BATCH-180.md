# CICAN Dublin Archive — Clontarf Five-Record Recovery Batch 180

**Date:** 17 November 2026  
**Scope:** Reconstruct the five complete object records corresponding to the five current Clontarf visual-inventory IDs missing from the recovered 447-record catalogue snapshot.  
**Status:** Staged and fetch-back verified; not merged into the canonical production catalogue.

## 1. Records prepared

| CICAN ID | Object | NIAH registration |
|---|---|---:|
| DUB-BLD-0181 | Clontarf GAA Club (Belgrove House / Bellgrove House) | 50030101 |
| DUB-BLD-0182 | 6 Castle Avenue, Clontarf | 50030352 |
| DUB-BLD-0183 | 40–82 Kincora Road housing group | 50030328 |
| DUB-BLD-0184 | 25 The Stiles Road | 50030336 |
| DUB-BLD-0185 | Clontarf Hospital / historic Blackheath house | 50030329 |

The five records were prepared in the existing catalogue field shape using the official NIAH survey records, existing visual-inventory photography briefs, and the source registry. The NIAH records support the construction dates, architectural descriptions, appraisal/significance, use and published Irish Grid coordinates.

## 2. Coordinate provenance

The NIAH pages publish the following Irish Grid coordinate pairs. These were converted to WGS 84 using TM65 / Irish Grid (EPSG:29902) and the archive's established transformation operation 1641.

| NIAH | Published grid | WGS 84 latitude | WGS 84 longitude |
|---|---:|---:|---:|
| 50030101 | 319986, 236327 | 53.36375852 | -6.19835584 |
| 50030352 | 319263, 236048 | 53.36141636 | -6.20931572 |
| 50030328 | 319859, 236180 | 53.36246716 | -6.20031820 |
| 50030336 | 319243, 236809 | 53.36825508 | -6.20932930 |
| 50030329 | 319742, 236747 | 53.36758560 | -6.20186024 |

Every staged record labels the point `SOURCE_DERIVED`. No coordinate is represented as founder GPS or field verified. Positional accuracy is not supplied by the source and is left null.

## 3. Evidence notes

### DUB-BLD-0181 — Clontarf GAA Club

NIAH identifies the building as Belgrove House / Bellgrove House, a detached U-plan house built c. 1830, possibly incorporating earlier fabric. The former house is now used as a GAA clubhouse and crèche. The former gate lodge is described as separately owned and is not silently included as part of this object.

Official source: https://www.buildingsofireland.ie/buildings-search/building/50030101/clontarf-gaa-club-seafield-road-west-clontarf-dublin-3-co-dublin

### DUB-BLD-0182 — 6 Castle Avenue

NIAH dates the terraced three-storey house to c. 1850 and describes its carved timber doorcase, petal fanlight, sash windows, granite steps and cast-iron railings. The object is a private residence; field photography is restricted to lawful public viewpoints.

Official source: https://www.buildingsofireland.ie/buildings-search/building/50030352/6-castle-avenue-clontarf-dublin-3-dublin

### DUB-BLD-0183 — 40–82 Kincora Road

NIAH identifies eleven pairs of semi-detached houses built in 1930, designed by Joseph Downes of McDonnell & Dixon for the Dublin Commercial Public Utility Society. The record describes the group as an example of the International Style in Irish housing. The staged record treats the group as one registered NIAH object, not 22 invented individual archive IDs.

Official source: https://www.buildingsofireland.ie/buildings-search/building/50030328/40-82-kincora-road-clontarf-dublin-3-dublin

### DUB-BLD-0184 — 25 The Stiles Road

NIAH dates the detached house to 1935–37 and identifies Vincent O'Hanlon as its designer. The source describes rounded corners, stepped parapets, flat roofs and an open-sided porch. The property remains a private residence.

Official source: https://www.buildingsofireland.ie/buildings-search/building/50030336/25-the-stiles-road-clontarf-dublin-3-dublin

### DUB-BLD-0185 — Clontarf Hospital / Blackheath

NIAH describes the former Blackheath house as built in 1872 and extended in 1879, designed by Thomas Drew for Gibson Black. It records the building's later hospital use and present hospital-administration use. The separate hospital-history source already in the source registry is retained. No third-party photograph is added; the photography brief explicitly protects patients, staff and clinical privacy.

Official sources:
- https://www.buildingsofireland.ie/buildings-search/building/50030329/clontarf-hospital-blackheath-park-clontarf-dublin-3-dublin
- https://www.ioh.ie/about-us/hospital-history/

## 4. Staging file and integrity checks

Staging file:
`data/recovery-staging/clontarf-objects-0181-0185.json`

Fetch-back verification:
- Valid JSON array: 5 records.
- Unique staged IDs: 5.
- IDs already present in recovered 447-record snapshot: 0.
- Every staged ID exists in current visual inventory: yes.
- Every source ID exists in current `data/sources.json`: yes.
- Required object fields present: yes.
- Each record has source-derived coordinates, a map URL, access guidance and a photography brief.
- No founder photograph, field verification, image licence or current-condition claim has been invented.

Staging blob SHA: `2e467261d598f0f4f4ca8bd6397c3a6480b7c6c7`.

## 5. Production status — deliberately not merged

The canonical `data/objects.json` on main remains unavailable as a complete current master in the inspected repository state. The recovered 447-record snapshot and these five staged records make a 452-record candidate set, but the candidate is not yet safe to deploy.

Before production restoration:
1. Confirm whether the 447-record snapshot is the correct full parent catalogue for these five records.
2. Reconcile all 452 IDs against the visual inventory and coverage audit.
3. Reconcile all source references and schema enums.
4. Run `scripts/validate-archive.mjs` against the candidate catalogue and derived registries.
5. Run the website smoke test and inspect the map data load.
6. Deploy only after all checks pass.

No production catalogue file, map data, or website code was changed in this batch.

## 6. Source policy reminder

NIAH's data download page states that its records include location, classification, rating, description, appraisal and record/image links. The NIAH website terms distinguish educational/private use from commercial reuse; commercial image use requires prior written agreement. The staged records retain NIAH attribution/licensing information in the existing visual inventory, and this batch does not copy or republish the image files.

NIAH data download: https://www.buildingsofireland.ie/niah-data-download/  
NIAH terms: https://www.buildingsofireland.ie/terms-and-conditions/

**Conclusion:** The five missing Clontarf object records now exist as a source-linked, schema-shaped staging dataset. They are ready for reconciliation with the recovered 447-record snapshot, but intentionally remain outside production until the master catalogue integrity issue is resolved.
