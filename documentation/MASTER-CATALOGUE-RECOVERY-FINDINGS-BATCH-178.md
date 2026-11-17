# CICAN Dublin Archive — Master Catalogue Recovery Findings (Batch 178)

**Date:** 17 November 2026  
**Scope:** Recovery investigation following the zero-byte canonical `data/objects.json` finding.  
**Decision:** A genuine historical catalogue snapshot has been recovered by its Git blob SHA. It is a 195-record baseline, not the current 452-record catalogue. Do not restore it over the current file without reconstructing and validating the intervening additions.

## 1. Breakthrough: historical master blob recovered

The GitHub repository search surfaced an older verified blob SHA recorded in the contemporaneous Visual Discovery Batch 025 and Batch 046 reports:

`99a4512c0054ebc9170f99efdbe7a2556f99512b`

The GitHub blob-fetch endpoint returned the actual content:
- 517,846 characters.
- Valid JSON array.
- 195 records.
- 195 unique object IDs.
- All 195 IDs have matching entries in the current `data/visual-assets.json` inventory.
- No old catalogue ID was missing from the current visual inventory.

This is a strong recovery asset because the blob SHA is independently recorded in earlier repository reports and the content can be fetched directly by SHA. It is not an arbitrary reconstruction.

## 2. Reconciliation with current derived inventory

The current `data/visual-assets.json` declares 452 records. A direct ID comparison gives:

| Measure | Count |
|---|---:|
| Recovered historical object records | 195 |
| Current visual inventory records | 452 |
| Historical object IDs present in current visual inventory | 195 |
| Visual inventory IDs not present in recovered historical master | 257 |
| Historical object IDs missing from current visual inventory | 0 |

The 257 IDs not present in the recovered 195-record baseline are not automatically proven to be the entire current canonical catalogue. The visual inventory is derived metadata, not a substitute for the complete object schema. It does, however, provide a useful identity-level reconciliation index.

The additional 257 records span these visual-inventory categories:
- Architecture: 94
- Infrastructure: 57
- Street detail: 78
- Public art: 2
- Inscription: 4
- Monument: 18
- Archaeology: 1
- Landscape: 2
- Transport heritage: 1

These are category counts from the 257 unmatched visual records. They do not establish that every record is complete, current, unique in the wider world or ready for publication.

## 3. Historical 195-record baseline composition

The recovered baseline contains 195 unique IDs distributed as follows:
- Architecture: 85
- Street detail: 84
- Monument: 9
- Inscription: 8
- Infrastructure: 5
- Memorial: 2
- Public art: 2

The original baseline's records include structured object identities, descriptions, historical periods, addresses, source references, coordinates, coordinate provenance, verification and photography statuses. Preserve the recovered blob as a read-only recovery source.

## 4. Why the old snapshot must not be restored as the current catalogue

The historical snapshot predates many later discovery-expansion batches. The current visual inventory contains 257 additional IDs absent from that snapshot, including examples such as:
- DUB-BLD-0094 — Bottlemaker's Hall (Dolphin House).
- DUB-BLD-0095 — Dublin United Tramway Company Powerhouse.
- DUB-BLD-0096 — Poolbeg Lighthouse.
- DUB-BLD-0097 — Former Pigeon House Hotel.
- DUB-BLD-0098 — Sluice House, South Wall.
- DUB-BLD-0099 — Magazine Fort.
- DUB-BLD-0100 — Ashtown Castle.
- DUB-BLD-0101 — Park Gate.
- DUB-BLD-0102 — Castleknock Gate.
- DUB-BLD-0103 — Ashtown Gate.

Those identity summaries come from the current visual inventory and are not complete object records. Replacing `data/objects.json` with the 195-record snapshot would silently remove later catalogue additions and break consistency with the 452-record visual inventory and coverage audit.

## 5. Recovery plan

1. Keep the recovered blob `99a4512c0054ebc9170f99efdbe7a2556f99512b` as an immutable historical baseline.
2. Search repository history and contemporaneous batch reports for later `data/objects.json` blob SHAs, especially after the catalogue passed 195, 316, 322, 447 and 452 records.
3. For each candidate blob, fetch by blob SHA and parse the complete JSON; record its SHA, size, array count, unique-ID count and schema validity.
4. Compare candidate object IDs with current `data/visual-assets.json`, source references, coverage audit and README.
5. Prefer the newest complete candidate whose content and counts reconcile with all derived inventories. If no such blob exists, reconstruct additions only from primary committed reports and original source data, in controlled increments with provenance.
6. Validate using `scripts/validate-archive.mjs` and the archive-object schema before restoring.
7. Restore only after a complete backup has been secured and reviewed; fetch the restored file back by path and blob SHA.
8. Run a production website smoke test and verify catalogue loading, map markers, search, filters, record detail, source links and service-worker cache behaviour.

## 6. Current status

- Historical baseline recovery: **SUCCESS — 195 records**.
- Current full catalogue recovery: **NOT YET COMPLETE — 257 current visual identities remain outside the recovered baseline**.
- Production master file: still returns zero characters through the inspected file-fetch path.
- Production restore: **BLOCKED** pending recovery of the complete later catalogue.
- New object IDs and map pins: **PAUSED**.
- Research documentation: may continue independently, without claiming production catalogue additions.

**Conclusion:** We have recovered a real, verifiable 195-record historical master snapshot. This is meaningful progress, but it is not the 452-record current catalogue. Protect the recovered baseline and continue searching for the later complete Git blob rather than overwriting the production file with an incomplete version.
