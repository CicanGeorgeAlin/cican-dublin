# CICAN Dublin — NIAH Batch 098 (50-record normal batch)

**Status:** research-only; seventh standard 50-record batch.

## Selection and official queue

The batch contains the first 50 Dublin City Council / County Dublin entries after Batch 097's final registration 50010598 in the refreshed four-authority NIAH missing-registration queue.

- Exactly 50 unique registrations, each required to occur exactly once in the refreshed queue.
- Selected queue range begins at 50010599 and ends at 50010649, retaining official gaps.
- Areas include Capel Street, Bolton Street, Parnell Street, O'Connell Street Upper and Parnell Square West.

## Individual NIAH page status

38 canonical individual pages have been located and checked against their registration numbers. Twelve remain on HOLD:

| Registration | Candidate | Hold reason |
|---|---|---|
| 50010600 | The Eagle Studio, 82 Capel Street | Canonical individual page not independently located |
| 50010601 | 83 Capel Street | Canonical individual page not independently located |
| 50010602 | Youth Suicide Prevention Ireland, 84 Capel Street | Canonical individual page not independently located |
| 50010604 | Bachelors Way | Canonical individual page not independently located |
| 50010606 | Rúa, King Street North / Capel Street | Raw CSV NAME contains replacement-character corruption; canonical page not independently located |
| 50010608 | Express Smile, 58 Bolton Street | Canonical individual page not independently located |
| 50010626 | 56 Parnell Square West | Canonical individual page not independently located |
| 50010629 | 53 Parnell Square West | Canonical individual page not independently located |
| 50010636 | 43 Parnell Square West | Canonical individual page not independently located |
| 50010641 | 38 Parnell Square West | Canonical individual page not independently located |
| 50010647 | 32 Parnell Square West | Canonical individual page not independently located |
| 50010649 | 30 Parnell Square West | Canonical individual page not independently located |

Legacy national CSV URLs are preserved for these twelve but do not count as canonical individual-page verification.

## Source anomalies and display rules

- 35 selected rows have blank raw CSV NAME values. Raw blanks are retained; verified official page titles are stored separately where available.
- 29 selected rows contain U+FFFD replacement characters somewhere in raw national CSV values. This overlaps the blank-name group.
- No selected NUMBER field was identified as malformed/date-like in this pass.
- 50010606's raw NAME contains a replacement-character error; it remains on HOLD rather than being silently corrected.
- The reconciliation report preserves raw CSV NAME, NUMBER and street fields separately from display headings.

## Shared-address Rotunda Hospital relationship

Registrations 50010619 and 50010620 both carry the broad queue address Parnell Street. Their canonical NIAH pages describe distinct structures within the Rotunda Hospital complex:
- 50010619 is the attached eleven-bay three-storey main hospital, built 1751–57 to designs by Richard Castle and executed by John Ensor.
- 50010620 is a separate attached ten-bay four-storey hospital wing, built in 1906 to designs by Albert E. Murray, curving into the earlier main hospital building.

The manifest records this exact reciprocal distinct-structure exception. It applies only to registrations 50010619 and 50010620. The separate 1895 hospital building (50010621) and former nurses' home (50010622) retain their own registrations and addresses.

## Automated reconciliation

`scripts/reconcile-niah-batch-098-50.mjs` verifies:
- exactly 50 unique candidates;
- exact membership in the refreshed official four-authority queue;
- Dublin City Council / County Dublin scope;
- WGS84 and ITM coordinate presence and plausible bounds;
- canonical individual-page status;
- exact registration, address, source-ID and same-batch address conflicts;
- exact-name matches and 30-metre proximity against the existing archive and within the batch;
- raw CSV anomalies and page holds.

The report is written to `audit/batch-098-50-candidate-reconciliation.json`. Unexplained exact identity conflicts block the batch. Proximity and exact-name matches remain visible for manual review.

## Publication boundary

Research-only. No permanent archive IDs, master objects, public NIAH register entries, source records, visual records, map pins or SEO pages are created. Coordinates remain source-derived, not founder GPS or field verified. No NIAH photographs are reused.
