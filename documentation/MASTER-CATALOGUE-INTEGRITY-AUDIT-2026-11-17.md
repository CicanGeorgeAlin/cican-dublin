# CICAN Dublin Archive — Master Catalogue Integrity Audit

**Audit date:** 17 November 2026  
**Repository:** CicanGeorgeAlin/cican-dublin  
**Branch:** default branch (main)  
**Purpose:** Verify the production catalogue data source and identify blockers before any catalogue expansion or object-ID allocation.  
**Outcome:** Critical integrity blocker confirmed. No production data files modified.

## Executive finding

The canonical file `data/objects.json` exists in the repository, but the GitHub file-fetch operation returns an empty content string (0 characters) while reporting blob SHA `1ea20d36034292324be975775775502d9cf5ddab`.

The map application expects the file to contain a JSON array. The inspected application code sets `DATA_URL="../data/objects.json"`, fetches it during startup, calls `response.json()`, and explicitly rejects the catalogue unless the parsed value is an array. A zero-byte file is not valid JSON and therefore cannot satisfy the application's startup contract.

**Do not allocate new permanent archive IDs, append production objects, or overwrite the empty master file with reconstructed guesses until the original catalogue is recovered or a verified backup is located.**

## Evidence inspected

| File | GitHub blob SHA | Retrieved size | Finding |
|---|---|---:|---|
| `data/objects.json` | `1ea20d36034292324be975775775502d9cf5ddab` | 0 characters | Canonical master catalogue retrieval is empty |
| `preview/app/app.js` | `58c6d9bebdf946bfdedf830ccdc454ff34395054` | 43,742 characters | Startup fetches catalogue and requires a JSON array |
| `README.md` | `db61d0edaf433f8bcad10c3763d395f605068129` | 13,281 characters | Claims current catalogue has 447 records and 552 registered source entries |
| `data/coverage-audit.json` | `e60f2b5936271214bf6dfc3947dc7111e940d4e2` | 8,259 characters | Audit dated 2026-11-17 states catalogue_total = 452 |
| `data/visual-assets.json` | Retrieved in audit | 791,375 characters | Declares generated_from = data/objects.json and record_count = 452 |
| `data/sources.json` | `8e3f01fe7f7f426b18aaa0ec730f74c893ecfe93` | 479,922 characters | Source registry exists; not a substitute for the missing object records |
| `data/research.json` | `8e48879e57f712b04b5a836a766b5673e3f2acf3` | 92,376 characters | Research notes exist; not a substitute for the canonical object catalogue |
| `data/investigation.json` | `54b5011f583ec2243801025dab6e6313ff7e9f08` | 15,812 characters | Separate investigation register exists |
| `data/coverage-zones.json` | `f7d7419ccce7699489e55aa15f7827b23a4325da` | 7,601 characters | Geographic planning framework exists |

## Application startup contract

The inspected `preview/app/app.js` contains these behaviours:
1. Declares `DATA_URL="../data/objects.json"`.
2. Fetches the catalogue during startup alongside the source and visual-asset registries.
3. Parses the response with `res.json()`.
4. Checks `Array.isArray(data)`; otherwise throws “Archive catalogue format is invalid”.
5. On fetch/parse/format failure, sets the catalogue status to “ARCHIVE CONNECTION FAILED” and renders a catalogue-load failure message.

Because the page is served from the preview directory, the relative data URL resolves to the root `data/objects.json` resource. The inspected code therefore directly depends on the empty canonical file.

## Count discrepancy

Three independent repository artefacts disagree or require reconciliation:
- README says 447 catalogue records and 552 source entries.
- Coverage audit says 452 catalogue records.
- Visual asset inventory says 452 records and explicitly states that it was generated from `data/objects.json`.

The 5-record difference between README and the two generated/audit artefacts may be a stale README count, a count from different catalogue versions, or another process issue. This audit does not choose among those explanations.

The visual asset inventory is a derived asset registry. It must not be treated as a substitute for the full object records: image metadata does not necessarily contain the complete title, evidence, coordinates, categories, source relationships, archive status and provenance required by the application.

## Historical ref check

The GitHub file-fetch operation was repeated against several earlier known commits in the current project history:
- `c96aad10772ae6616b89acfec255e7d5f55fea96`
- `0f296bcc2adbb20ff3c4813060cff8250f406f26`
- `ada6abca6885dcf6ca82a4d89a2c2ab45f351e22`
- `b3376ed63083dc497b5092a4708f097fb29559b5`
- `e9bb6fefd8eac15ffd3c62f2e2fe5fdaed880c44`

For each reference, the fetch returned the same blob SHA and zero characters. This does not establish when or how the catalogue became empty; it only establishes that the file was already empty at each tested reference.

A search of recent commit messages for the literal filename `objects.json` did not return a matching commit. The audit therefore does not identify a deletion/emptying commit or claim a cause.

## What is safe to do now

1. Preserve the empty file and all current evidence; do not overwrite it.
2. Locate a known-good copy from a local working tree, user backup, GitHub release/archive, deployment artifact, or another explicitly verified source.
3. Compare any candidate backup against the README, coverage audit, visual-asset registry, source registry and application schema.
4. Validate that candidate JSON parses as an array, that every record has a unique ID, and that required fields, coordinate rules, source references and visual asset references resolve.
5. Reconcile the 447 vs 452 count only after the complete candidate master catalogue is recovered.
6. Restore the canonical catalogue through a reviewed commit, then fetch it back and run a production smoke test.
7. Only after recovery and validation should new discoveries be considered for permanent IDs and production map pins.

## What must not be done

- Do not reconstruct 447 or 452 catalogue entries from README prose, visual asset records, research notes or the recent graveyard reports.
- Do not create a new empty array and call it a restored archive.
- Do not infer object records from image filenames or source registry entries.
- Do not allocate IDs for Batch 149–177 discoveries while the canonical catalogue is unavailable.
- Do not claim the production map is working based only on successful retrieval of the HTML or JavaScript files.

## Audit conclusion

The research reports can continue to be maintained as documentation, but production catalogue expansion is paused by a verified master-data integrity problem. The immediate priority is recovery of the authentic `data/objects.json`, followed by schema, duplicate, source-link and map-load validation.

**Audit status:** BLOCKED — original master catalogue not available through the inspected repository file fetch.
