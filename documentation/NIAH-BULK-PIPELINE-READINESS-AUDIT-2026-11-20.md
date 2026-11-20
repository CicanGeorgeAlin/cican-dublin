# NIAH Bulk Pipeline Readiness and Baseline Reconciliation

**Project:** CICAN Dublin Archive  
**Audit date:** 20 November 2026  
**Status:** Pipeline implementation committed; first full four-authority run is pending GitHub Actions execution. No new production records were added.

## 1. Current repository counts — parsed from complete Git blobs

| Dataset | Records | Unique IDs / registrations |
|---|---:|---:|
| Master catalogue `data/objects.json` | 462 | 462 archive IDs |
| Public NIAH collection `data/niah-registered-objects.json` | 342 | 342 unique eight-digit NIAH references |
| Source registry `data/sources.json` | 580 | 580 source IDs |

Additional master-catalogue measurements:
- 450 records have a non-empty `national_inventory_reference` field.
- Those fields contain 432 eight-digit numeric reference occurrences.
- The occurrences resolve to 342 distinct NIAH registration numbers.
- The 342 distinct master references and the 342 public NIAH references have exact set equality: no missing reference in either direction.
- All three datasets have unique record/source IDs in the parsed snapshot.

The earlier coverage document and README contained stale 340/460-era counts. README and the coverage baseline have now been corrected to 342 public registrations and 462 master records. The 340 count is retained only as the size of the previous official-register audit snapshot.

## 2. Recovered official national CSV audit artifact

The existing GitHub Actions run `44732958253` produced artifact `niah-340-official-register-audit` (artifact ID `14626503942`, created 20 November 2026 at 12:06:22 UTC). The artifact was downloaded and inspected.

Verified contents:
- Official national CSV source URL: `https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data`
- Official CSV rows parsed: 48,327.
- Registration field: `REG_NO`.
- Local-authority field as returned by the CSV header: `LOCAL_AUTHORITY�` (the final character is a replacement character in the audit parser's decoded header; the new pipeline normalises field names to alphanumeric keys).
- County field: `COUNTY`.
- Audited archive snapshot: 340 records.
- Official matches: 340.
- Missing registrations: 0.
- Duplicate references in that archive snapshot: 0.
- All records matched: true.

The audited 340 records were assigned by the official CSV to:
- Dublin City Council: 309
- Fingal County Council: 26
- South Dublin County Council: 4
- Dun Laoghaire-Rathdown County Council: 1

These authority counts describe the 340-record archive snapshot, not the full official Dublin denominator.

Two registrations were added to the current 342-record public collection after the artifact's audited snapshot: `11324032` and `11323022`. They are present in the current master/public datasets but are not covered by that 340-record artifact. They must be included in the next official CSV audit before we claim all 342 are officially matched.

## 3. Bulk-ingestion solution implemented

The repository already had:
- `scripts/audit-niah-registrations.mjs`, which fetches the official national CSV and checks existing public registrations.
- `.github/workflows/quality.yml`, which runs the audit on repository pushes and uploads its JSON report as a workflow artifact.

A new script has now been added:

`scripts/audit-niah-dublin-coverage.mjs`

It is designed to:
1. Fetch the same official national CSV directly inside GitHub Actions (the environment where the previous 48,327-row download succeeded).
2. Parse and identify `REG_NO`, `COUNTY` and `LOCAL_AUTHORITY` fields without relying on the malformed header's exact byte spelling.
3. Filter county Dublin records and classify the four target local authorities.
4. Count unique official registration numbers by authority.
5. Report blank/unrecognised authority values and duplicate official registration numbers rather than silently counting them.
6. Compare the official four-authority registration set against both the public NIAH collection and the complete master catalogue.
7. Generate a full missing-registration review queue at `audit/niah-dublin-missing-registrations.json`.
8. Keep the queue as research input only; it does not modify production data.

The quality workflow has been updated to run this new script after the existing registration audit and upload all audit reports and the missing-registration queue as the artifact `niah-dublin-bulk-coverage-audit`.

## 4. What remains unverified

The new four-authority script has been committed but its first execution result has not yet been observed. Therefore:
- The full four-authority denominator is not yet known.
- The founder's working target of 3,396 is not yet confirmed as the official denominator.
- The missing-registration queue has not yet been generated or reviewed.
- The two later public additions have not yet been re-audited against the current CSV.
- No bulk candidate is automatically approved for production publication.

The new audit's output will be the basis for selecting coherent batches of up to 100 records. Every candidate will still require individual identity, record relationship, coordinate, source, access and image-rights checks before publication.

## 5. Quality and deployment boundary

The workflow change affects the archive quality gate only. It does not modify the live catalogue, map pins, images, individual SEO pages or sitemap. The current GitHub combined-status query returned no status entries for the workflow-change commit; this is not evidence of a passing run. Do not claim that the new audit has passed until the workflow artifact is retrieved and inspected.

## 6. Official source references

- NIAH data download page: https://www.buildingsofireland.ie/niah-data-download/
- Official national CSV data item: https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data
- Existing official audit workflow run: https://github.com/CicanGeorgeAlin/cican-dublin/actions/runs/44732958253
- Repository quality workflow: https://github.com/CicanGeorgeAlin/cican-dublin/blob/main/.github/workflows/quality.yml

---
**Outcome:** The bulk data route is no longer an unknown. A repeatable four-authority audit and missing-registration queue are now implemented in the repository. The next checkpoint is to inspect the first workflow output, reconcile the official denominator, and only then start the 100-record verification batches.
