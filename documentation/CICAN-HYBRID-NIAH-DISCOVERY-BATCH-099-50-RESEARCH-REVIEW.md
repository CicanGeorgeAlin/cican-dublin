# CICAN Dublin — NIAH Batch 099 (50-record normal batch)

**Status:** research-only; eighth standard 50-record batch.

## Selection and official queue

The batch contains the first 50 Dublin City Council / County Dublin entries after Batch 098's final registration 50010649 in the refreshed four-authority NIAH missing-registration queue.

- Exactly 50 unique registrations, each required to occur exactly once in the refreshed queue.
- Selected queue range begins at 50010650 and ends at 50010699, retaining official gaps.
- Areas include Parnell Square West, Granby Row, Dominick Street Lower, Henrietta Street, Bolton Street, King's Inns Street and Dorset Street Upper.

## Individual NIAH page status

47 canonical individual pages have been located and checked against their registration numbers. Three remain on HOLD:

| Registration | Candidate | Hold reason |
|---|---|---|
| 50010666 | Eden College, 41 Dominick Street Lower | Canonical individual page not independently located |
| 50010671 | 22 Dominick Street Lower | Canonical individual page not independently located |
| 50010689 | Dublin City Comics / 46 Bolton Street | Canonical individual page not independently located |

The national CSV legacy URLs are preserved for these three but do not count as canonical individual-page verification.

## Source anomalies and display rules

- 28 selected rows have blank raw CSV NAME values. Raw blanks are retained; verified official page titles are stored separately where available.
- 24 selected rows contain U+FFFD replacement characters somewhere in their raw national CSV values. This overlaps the blank-name group.
- No selected NUMBER field was identified as malformed/date-like.
- The reconciliation report preserves raw CSV NAME, NUMBER and street fields separately from display headings.

## Related but distinct structures

- 50010660 (Saint Saviour's Priory) and 50010661 (Saint Saviour's Church) are separately registered ecclesiastical structures. The priory is a detached multi-wing Gothic Revival complex built 1884–87, while the church is a separate freestanding basilica-style church built c.1856. Their queue addresses include different secondary street/site details.
- 50010665 and 50010666 are both recorded as Eden College at 40 and 41 Dominick Street Lower. They are separate numbered buildings and separate NIAH registrations; 50010666 remains on HOLD because its canonical page was not independently located.
- 50010698 (Mater Hospital Patient Services, 85–86 Dorset Street Upper) and 50010699 (Saint Raphael's Clinic/The Mater Clinic, 81–84 Dorset Street Upper) are separate buildings on different numbered plots, despite their current association with the Mater Hospital.

## Automated reconciliation

`scripts/reconcile-niah-batch-099-50.mjs` verifies:
- exactly 50 unique candidates;
- exact membership in the refreshed official four-authority queue;
- Dublin City Council / County Dublin scope;
- WGS84 and ITM coordinate presence and plausible bounds;
- canonical individual-page status;
- exact registration, address, source-ID and same-batch address conflicts;
- exact-name matches and 30-metre proximity against the existing archive and within the batch;
- raw CSV anomalies and page holds.

The report is written to `audit/batch-099-50-candidate-reconciliation.json`. Unexplained exact identity conflicts block the batch. Proximity and exact-name matches remain visible for manual review.

## Publication boundary

Research-only. No permanent archive IDs, master objects, public NIAH register entries, source records, visual records, map pins or SEO pages are created. Coordinates remain source-derived, not founder GPS or field verified. No NIAH photographs are reused.
