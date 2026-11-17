# CICAN Dublin Archive — Master Catalogue Recovery Batch 179

**Date:** 17 November 2026  
**Scope:** Recover and reconcile the newest complete historical `data/objects.json` blob located during the catalogue-recovery investigation.  
**Outcome:** 447 authentic object records recovered, all unique, and all represented in the current 452-entry visual inventory. Five additional visual identities remain without complete object records.

## 1. Recovered 447-record catalogue snapshot

A historical commit touching `data/objects.json` was identified:

- Commit: `839f157124f6b006dac0c2a3e3443eb7e3e592f9`
- Recovered object blob SHA: `4333093ea1252f9daa946e7153a7ad6027f8b2ef`
- Retrieved through GitHub's blob-by-SHA endpoint.
- Content size: 1,234,465 characters.
- Valid JSON array: 447 records.
- Unique IDs: 447.
- Duplicate IDs: 0.

This is the newest complete historical object catalogue found in this recovery pass. It is an authentic Git blob associated with a commit that changed `data/objects.json`, not a reconstruction from summaries.

## 2. Historical derived-data mismatch at that commit

At commit `839f157124f6b006dac0c2a3e3443eb7e3e592f9`, the other files do not yet match the 447-object file:

| File | Blob SHA | Declared / measured count |
|---|---|---:|
| `data/objects.json` | `4333093ea1252f9daa946e7153a7ad6027f8b2ef` | 447 |
| `data/visual-assets.json` | `06a20838eab53a7c81df418f3965a42112ed3bf4` | 424 |
| `data/coverage-audit.json` | `19443f5630bf2ee0a9bff856c1d9ffa80723d10b` | 424 |
| `README.md` | fetched at same commit | 424 |

ID reconciliation:
- 447 object IDs are unique.
- All 447 object IDs are present in the 424-entry visual inventory? **No.** At that historical commit, 23 object IDs have no visual inventory entry.
- All 424 visual IDs are present in the 447 object catalogue.
- Therefore the object file is newer than its visual inventory, coverage audit and README at that commit.

The 23 object records missing a visual entry must be reconciled before using this historical snapshot as a fully validated production restore.

## 3. Current visual inventory reconciliation

The current main-branch `data/visual-assets.json` contains 452 unique visual records; current `data/coverage-audit.json` declares 452.

Comparing the recovered 447 object IDs with the current 452 visual IDs:
- Recovered object IDs: 447.
- Current visual IDs: 452.
- Recovered object IDs missing from current visual inventory: 0.
- Current visual IDs missing from recovered object catalogue: 5.

The five extra visual records are:
1. `DUB-BLD-0181` — Clontarf GAA Club (Belgrove House / Bellgrove House), Seafield Road West, Clontarf.
2. `DUB-BLD-0182` — 6 Castle Avenue, Clontarf.
3. `DUB-BLD-0183` — 40–82 Kincora Road, International Style semi-detached housing group.
4. `DUB-BLD-0184` — 25 The Stiles Road, International Modern house.
5. `DUB-BLD-0185` — Clontarf Hospital / historic Blackheath house.

These identities, addresses and photography plans are available in the visual inventory. The visual inventory is not the canonical full object schema, so these five entries must not be mechanically promoted to catalogue objects without recovering or verifying their complete object records.

## 4. Recovery timeline discovered so far

The repository history contains multiple authentic object snapshots:
- Historical baseline: 195 records, blob `99a4512c0054ebc9170f99efdbe7a2556f99512b`.
- Later snapshot: 364 records, blob `7effb91b5c9897cb3260e39a62a67a0ba2be509b`.
- Later snapshot: 393 records, blob `71bd694310116b702e6a131f07aca264febefbf3`.
- Later snapshot: 400 records, blob `f8bccc450944fcbaf8f5f94a90040ebf8f319c08`.
- Later snapshot: 424 records, blob `60646d22cc87c4c439f4e77bbe887185449028ac`.
- Newest complete snapshot found in this pass: 447 records, blob `4333093ea1252f9daa946e7153a7ad6027f8b2ef`.

All these blobs were retrieved and parsed as JSON arrays. The 447-record snapshot is the strongest recovery candidate located so far, but the five additional current visual identities and the 23-record historical derived-inventory mismatch must be resolved.

## 5. Why restoration remains paused

The current main-branch canonical `data/objects.json` still has a zero-byte blob. The recovered 447-record file is not yet a safe replacement because:
- It predates five current visual inventory IDs.
- Its contemporaneous visual inventory and coverage audit were still at 424.
- Twenty-three object IDs lacked visual inventory entries at that historical commit.
- The complete provenance and field schema for the five later visual-only identities is not yet recovered.

Do not restore the 447 snapshot alone, because doing so would discard five newer candidate identities and leave derived registries inconsistent. Do not infer complete object records from visual inventory metadata.

## 6. Next recovery actions

1. Continue inspecting later commits and Git blob history for an object catalogue newer than the 447-record snapshot.
2. Search for a commit/blob containing all 452 object records, or a later full catalogue file with the five Clontarf records.
3. Compare every candidate with the current 452 visual IDs and source registry.
4. Resolve the 23-record mismatch in the historical 447 snapshot.
5. If no 452-record object blob exists, reconstruct only the missing five complete records from original committed source records and reports, preserving every field and provenance requirement.
6. Rebuild visual and coverage derived files only from a verified canonical catalogue, then run the repository validator and website smoke test.
7. Restore only through a reviewed commit with a separate backup of the current state.

## 7. Current status

- 195-record authentic historical baseline: recovered.
- 364-record authentic snapshot: recovered.
- 393-record authentic snapshot: recovered.
- 400-record authentic snapshot: recovered.
- 424-record authentic snapshot: recovered.
- 447-record authentic snapshot: recovered.
- Current visual inventory: 452 records, all IDs unique.
- Missing from 447 object snapshot relative to current visual inventory: five IDs, DUB-BLD-0181 through DUB-BLD-0185.
- Canonical current main file: still empty through the inspected file-fetch path.
- Production restore: blocked pending complete 452-record object recovery and derived-file reconciliation.
- New permanent IDs/map pins: paused.

**Conclusion:** The recovery investigation has moved from 195 to 447 authentic object records. The 447-record snapshot is not yet the complete current catalogue, but it gives us a strong and verifiable base for the next recovery pass.
