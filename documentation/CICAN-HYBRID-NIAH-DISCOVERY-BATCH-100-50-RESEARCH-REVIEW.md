# CICAN Dublin — NIAH Batch 100 (50-record normal batch)

**Status:** research-only; ninth standard 50-record batch.

## Selection and official queue

The batch contains the first 50 Dublin City Council / County Dublin entries after Batch 099's final registration 50010699 in the refreshed four-authority NIAH missing-registration queue.

- Exactly 50 unique registrations, each required to occur exactly once in the refreshed queue.
- Selected queue range begins at 50010700 and ends at 50010757, retaining official gaps.
- Areas include Dorset Street Upper and Lower, North Circular Road, Sherrard Street Lower and Upper, Belvidere Road and Gardiner Street Upper.

## Individual NIAH page status

38 canonical individual pages have been located and checked against their registration numbers. Twelve remain on HOLD:

| Registration | Candidate | Hold reason |
|---|---|---|
| 50010709 | 38 Dorset Street Lower / North Circular Road | Canonical individual page not independently located |
| 50010712 | Ulster Bank / Violets / Home Appliance Centre, 79–82 Dorset Street Lower | Canonical individual page not independently located |
| 50010716 | 15 Sherrard Street Lower | Canonical individual page not independently located |
| 50010720 | 11 Sherrard Street Lower | Canonical individual page not independently located |
| 50010721 | 10 Sherrard Street Lower | Canonical individual page not independently located |
| 50010722 | 9 Sherrard Street Lower | Canonical individual page not independently located |
| 50010724 | 7 Sherrard Street Lower | Canonical individual page not independently located |
| 50010735 | 460 North Circular Road | Canonical individual page not independently located |
| 50010746 | 4 Sherrard Street Upper | Canonical individual page not independently located |
| 50010752 | 52 Gardiner Street Upper | Canonical individual page not independently located |
| 50010756 | 48 Gardiner Street Upper | Canonical individual page not independently located |
| 50010757 | 47 Gardiner Street Upper | Canonical individual page not independently located |

The official NIAH North City guide groups registrations 50010716–50010730 as the 1–15 Sherrard Street Lower terrace. That grouped guide entry is supplementary evidence only; it does not substitute for an individual page for the held records. Legacy national CSV URLs are preserved.

## Source anomalies and display rules

- 42 selected rows have blank raw CSV NAME values. Raw blanks are retained; verified official page titles are stored separately where available.
- 16 selected rows contain U+FFFD replacement characters somewhere in raw national CSV values. This overlaps the blank-name group.
- No selected NUMBER field was identified as malformed/date-like.
- The reconciliation report preserves raw CSV NAME, NUMBER and street fields separately from display headings.

## Identity and neighbourhood safeguards

- Dorset Street and North Circular Road corner records retain their distinct street-frontage addresses; a shared junction does not make a building a duplicate.
- The Sherrard Street Lower and Upper terrace properties are retained by individual NIAH registration and house number. The North Circular Road terrace records are also kept separate by their individual numbers.
- Gardiner Street Upper records are separate numbered houses; no shared-terrace shortcut is used for identity matching.

## Automated reconciliation

`scripts/reconcile-niah-batch-100-50.mjs` verifies:
- exactly 50 unique candidates;
- exact membership in the refreshed official four-authority queue;
- Dublin City Council / County Dublin scope;
- WGS84 and ITM coordinate presence and plausible bounds;
- canonical individual-page status;
- exact registration, address, source-ID and same-batch address conflicts;
- exact-name matches and 30-metre proximity against the existing archive and within the batch;
- raw CSV anomalies and page holds.

The report is written to `audit/batch-100-50-candidate-reconciliation.json`. Unexplained exact identity conflicts block the batch. Proximity and exact-name matches remain visible for manual review.

## Publication boundary

Research-only. No permanent archive IDs, master objects, public NIAH register entries, source records, visual records, map pins or SEO pages are created. Coordinates remain source-derived, not founder GPS or field verified. No NIAH photographs are reused.
