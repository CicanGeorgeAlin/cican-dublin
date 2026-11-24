# CICAN Dublin — NIAH Batch 101 (50-record normal batch)

**Status:** research-only; tenth standard 50-record batch.

## Selection and official queue

The batch contains the first 50 Dublin City Council / County Dublin entries after Batch 100's final registration 50010757 in the refreshed four-authority NIAH missing-registration queue.

- Exactly 50 unique registrations, each required to occur exactly once in the refreshed queue.
- Selected queue range begins at 50010758 and ends at 50010810, retaining official gaps.
- Areas include Gardiner Street Upper, Belvedere Place, Sherrard Street Lower, Mountjoy Square East and Mountjoy Square North.

## Individual NIAH page status

47 canonical individual pages have been located and checked against their registration numbers. Three remain on HOLD:

| Registration | Candidate | Hold reason |
|---|---|---|
| 50010764 | 35 Gardiner Street Upper | Canonical individual page not independently located |
| 50010769 | 40 Gardiner Street Upper | Canonical individual page not independently located |
| 50010776 | Eirden House, 22 Belvedere Place | Canonical individual page not independently located |

The national CSV legacy URLs are preserved for these three but do not count as canonical individual-page verification.

## Source anomalies and display rules

- 46 selected rows have blank raw CSV NAME values. Raw blanks are retained; verified official page titles are stored separately where available.
- 13 selected rows contain U+FFFD replacement characters somewhere in raw national CSV values. This overlaps the blank-name group.
- No selected NUMBER field was identified as malformed/date-like.
- 50010775 (Rawlton House), 50010800 (Saint Monica's Nursing Home), and 50010795 (Kincora House) have verified official page titles that are stored separately from raw queue fields.
- The reconciliation report preserves raw CSV NAME, NUMBER and street fields separately from display headings.

## Identity and neighbourhood safeguards

- The Gardiner Street Upper sequence is retained by individual NIAH registration and house number. The corner-sited 41 Gardiner Street Upper / Dorset Street Lower record (50010770) is distinct from the numbered Gardiner Street houses.
- The Belvedere Place terrace records are separate numbered properties. Shared Georgian architectural character and close coordinates do not merge adjacent houses.
- 50010775 (Rawlton House) is a former school building on Sherrard Street Lower, separate from the Belvedere Place houses.
- 50010800 (Saint Monica's Nursing Home) is a larger former widows' house/nursing-home complex occupying 35–38 Belvedere Place, distinct from the adjacent individually registered Belvedere Place houses.
- 50010798 and 50010799 are separately registered Mountjoy Square East houses at 17 and 18, the latter also addressing Fitzgibbon Street.

## Automated reconciliation

`scripts/reconcile-niah-batch-101-50.mjs` verifies:
- exactly 50 unique candidates;
- exact membership in the refreshed official four-authority queue;
- Dublin City Council / County Dublin scope;
- WGS84 and ITM coordinate presence and plausible bounds;
- canonical individual-page status;
- exact registration, address, source-ID and same-batch address conflicts;
- exact-name matches and 30-metre proximity against the existing archive and within the batch;
- raw CSV anomalies and page holds.

The report is written to `audit/batch-101-50-candidate-reconciliation.json`. Unexplained exact identity conflicts block the batch. Proximity and exact-name matches remain visible for manual review.

## Publication boundary

Research-only. No permanent archive IDs, master objects, public NIAH register entries, source records, visual records, map pins or SEO pages are created. Coordinates remain source-derived, not founder GPS or field verified. No NIAH photographs are reused.
