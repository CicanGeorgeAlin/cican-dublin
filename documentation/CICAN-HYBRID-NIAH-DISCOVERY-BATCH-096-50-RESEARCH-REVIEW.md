# CICAN Dublin — NIAH Batch 096 (50-record normal batch)

**Status:** research-only; fifth standard 50-record batch.

## Selection and official queue

The batch contains the first 50 Dublin City Council / County Dublin rows after Batch 095's final registration 50010489 in the refreshed four-authority NIAH missing-registration queue.

- Exactly 50 unique registrations, each required to occur exactly once in the refreshed queue.
- Selected queue range: 50010490–50010543, with official queue gaps retained.
- Areas: Moore Street, Henry Street, Prince's Street North, O'Connell Street Lower and O'Connell Street Upper.

## Individual NIAH page status

42 canonical individual pages have been located and checked against their registration numbers. Eight remain on HOLD:

| Registration | Candidate | Hold reason |
|---|---|---|
| 50010494 | 33 Henry Street / Henry Place | Canonical individual page not independently located |
| 50010497 | 38 Henry Street | Canonical individual page not independently located |
| 50010498 | 39 Henry Street | Canonical individual page not independently located |
| 50010499 | 40 Henry Street | Canonical individual page not independently located |
| 50010507 | 9 O'Connell Street Lower | Canonical individual page not independently located |
| 50010508 | 8 O'Connell Street Lower | Canonical individual page not independently located |
| 50010517 | O'Connell Street Lower / Abbey Street Lower | Canonical individual page not independently located; raw NUMBER is malformed/date-like `Dec-13` |
| 50010520 | Clerys Department Store, 18–27 O'Connell Street Lower | Official NIAH North City guide index identifies the registration and address, but canonical individual page not independently located |

For 50010520, the official NIAH guide index is retained as supplementary evidence. It does not substitute for the canonical individual record page. Legacy CSV URLs remain preserved for all eight holds.

## Source anomalies and display rules

- 36 selected rows have blank raw CSV NAME values. Raw blanks are retained; verified page titles are stored separately as display headings where available.
- 33 selected rows contain U+FFFD replacement characters somewhere in their raw CSV values. This overlaps the blank-name group.
- Four NUMBER fields are malformed/date-like:
  - 50010509 — `06-Jul` (Bank of Ireland)
  - 50010511 — `03-Apr` (Ulster Bank)
  - 50010517 — `Dec-13` (page held)
  - 50010538 — `05-Jun` (Prosperity Chambers)
- For 50010509, 50010511 and 50010538, the display address uses the independently verified official page address while the raw CSV NUMBER is preserved separately.
- The reconciliation report records raw CSV NAME, NUMBER and street fields separately from display headings.

## Shared-address monument relationship

Registrations 50010513 and 50010514 both have the broad queue address O'Connell Street Lower. Their official individual NIAH pages describe separate monuments:
- 50010513: a freestanding Portland limestone statue of William Smith O'Brien on the pedestrian median.
- 50010514: a separate sculpted figure of Sir John Gray on its own granite pedestal and stepped base.

The manifest records this exact reciprocal distinct-structure exception. It applies only to this pair; no general shared-address exception is allowed.

## Automated reconciliation

`scripts/reconcile-niah-batch-096-50.mjs` verifies:
- exactly 50 unique candidates;
- exact membership in the refreshed official four-authority queue;
- Dublin City Council / County Dublin scope;
- WGS84 and ITM coordinate presence and plausible bounds;
- canonical individual-page status;
- exact registration, address, source-ID and same-batch address conflicts;
- exact-name matches and 30-metre proximity against the existing archive and within the batch;
- raw CSV anomalies, malformed date-like NUMBER values, supplementary sources and page holds.

The report is written to `audit/batch-096-50-candidate-reconciliation.json`. Unexplained exact identity conflicts block the batch. Proximity and exact-name matches remain visible for manual review.

## Publication boundary

Research-only. No permanent archive IDs, master objects, public NIAH register entries, source records, visual records, map pins or SEO pages are created. Coordinates remain source-derived, not founder GPS or field verified. No NIAH photographs are reused.
