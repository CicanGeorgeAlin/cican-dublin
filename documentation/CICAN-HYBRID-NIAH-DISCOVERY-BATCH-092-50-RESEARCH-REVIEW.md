# CICAN Dublin — NIAH Batch 092 (50-record normal batch)

**Status:** research-only; first standard 50-record batch following the successful 25-record pilot.

## Selection

The 50 candidates are the first 50 Dublin City Council / County Dublin entries after the Batch 091 selection boundary (50010274) in the refreshed official four-authority missing-registration queue. All 50 are selected by exact queue membership, not by assuming numeric continuity.

Registrations: 50010275–50010283, 50010285–50010290, 50010292–50010300, 50010302–50010318, and 50010321–50010329 (50 total).

## Individual-page verification

46 candidates have canonical individual NIAH pages independently located. Four candidates remain held:

| Registration | Candidate | Hold reason |
|---|---|---|
| 50010282 | Budget Travelshop, 29 Lower Abbey Street | Only legacy NIAH URL available; canonical individual page not verified |
| 50010285 | 111 Marlborough Street | Official planning EIAR identifies the NIAH registration/address, but canonical individual NIAH page not verified |
| 50010298 | Isaac's Hotel, 2 Beresford Place | Only legacy NIAH URL available; canonical individual page not verified |
| 50010309 | The Car Boot Shop, 21 Eden Quay | Official planning EIAR identifies the NIAH registration/address, but canonical individual NIAH page not verified |

These four are queue-valid research candidates, not publication-ready records. Do not infer that the older URL is a verified individual page.

## Known source anomalies

- Several national CSV NAME fields are blank. The manifest keeps the raw field separate from the official page-title display heading.
- 50010277 and 50010304 contain replacement-character encoding errors in the national CSV name values; official page titles are stored separately.
- 50010312 has the date-like national CSV NUMBER value `Dec-14`; preserve it verbatim and use the individual page address separately.
- Other description/appraisal fields may also contain U+FFFD; the reconciliation report detects these from values only, not from the field-name header.

## Explicit same-address relationship

Registrations 50010286 (Scots Presbyterian Hall) and 50010287 (Scots Presbyterian Church) share the Lower Abbey Street / Old Abbey Street site address and are connected. The official individual pages describe two separately registered structures. The manifest records this reciprocal distinct-neighbour relationship so the validator does not mistake their shared site address for a duplicate. This exception applies only to this named pair.

## Automated gate

`scripts/reconcile-niah-batch-092-50.mjs` verifies:
- exactly 50 unique candidates;
- exact membership in the refreshed official queue and Dublin City Council / County Dublin scope;
- official WGS84 and ITM coordinate presence and plausible bounds;
- canonical individual-page status;
- exact registration, address, source-ID and same-batch address conflicts;
- same-batch and existing-catalogue exact-name matches;
- 30-metre proximity against the existing archive and within the batch;
- documented distinct-neighbour exceptions and source anomalies.

The report is written to `audit/batch-092-50-candidate-reconciliation.json`. A successful CI run does not authorize publication. All page holds, exact-name matches and proximity findings remain visible for manual review.

## Publication boundary

No permanent archive IDs, master objects, public NIAH register entries, source records, visual records, map pins or SEO pages are created by this research batch. Coordinates remain source-derived, not founder GPS or field verified. NIAH images are not reused.
