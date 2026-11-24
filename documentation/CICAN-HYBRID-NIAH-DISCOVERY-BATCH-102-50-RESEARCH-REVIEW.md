# CICAN Dublin — NIAH Batch 102 (50-record normal batch)

**Status:** research-only; eleventh standard 50-record batch.

## Selection and official queue

The batch contains the first 50 Dublin City Council / County Dublin entries after Batch 101's final registration 50010810 in the refreshed four-authority NIAH missing-registration queue.

- Exactly 50 unique registrations, each required to occur exactly once in the refreshed queue.
- Selected queue range begins at 50010811 and ends at 50010862, retaining official gaps.
- Areas include Mountjoy Square North, Gardiner Street Upper, Mountjoy Square West and Gardiner Place.

## Individual NIAH page status

46 canonical individual pages have been located and checked against their registration numbers. Four remain on HOLD:

| Registration | Candidate | Hold reason |
|---|---|---|
| 50010821 | 2 Mountjoy Square North | Canonical individual page not independently located |
| 50010850 | 2 Gardiner Street Upper | Canonical individual page not independently located |
| 50010855 | 19 Gardiner Place | Official NIAH North City guide index lists the registration/address, but canonical individual page not independently located |
| 50010860 | 14 Gardiner Place | Canonical individual page not independently located |

For 50010855, the official NIAH guide index is supplementary evidence only and does not substitute for the individual record page. Legacy national CSV URLs are preserved for all four holds.

## Source anomalies and display rules

- 46 selected rows have blank raw CSV NAME values. Raw blanks are retained; verified official page titles are stored separately where available.
- 24 selected rows contain U+FFFD replacement characters somewhere in raw national CSV values. This overlaps the blank-name group.
- No selected NUMBER field was identified as malformed/date-like.
- The reconciliation report preserves raw CSV NAME, NUMBER and street fields separately from display headings.

## Identity and site relationships

- 50010816 and 50010817 are both listed under the historical name Mountjoy School but are separately registered houses at 7 and 6 Mountjoy Square North. They remain separate buildings.
- 50010823 (Convent of the Sisters of Charity) and 50010824 (Catholic Church of Saint Francis Xavier) are separate registered structures on the Gardiner Street Upper / Belvedere Court site. The convent is a combined pair of houses with an attached rear chapel; the church is a separate Neo-Classical Roman Catholic church built 1829–32.
- 50010835 (Gable House, 17 Gardiner Street Upper) and 50010836 (Carmel House, 16 Gardiner Street Upper) are separately registered neighbouring houses.
- The Gardiner Street Upper and Gardiner Place terraces are retained as individual numbered properties, not collapsed into a single terrace record.

## Automated reconciliation

`scripts/reconcile-niah-batch-102-50.mjs` verifies:
- exactly 50 unique candidates;
- exact membership in the refreshed official four-authority queue;
- Dublin City Council / County Dublin scope;
- WGS84 and ITM coordinate presence and plausible bounds;
- canonical individual-page status;
- exact registration, address, source-ID and same-batch address conflicts;
- exact-name matches and 30-metre proximity against the existing archive and within the batch;
- raw CSV anomalies and page holds.

The report is written to `audit/batch-102-50-candidate-reconciliation.json`. Unexplained exact identity conflicts block the batch. Proximity and exact-name matches remain visible for manual review.

## Publication boundary

Research-only. No permanent archive IDs, master objects, public NIAH register entries, source records, visual records, map pins or SEO pages are created. Coordinates remain source-derived, not founder GPS or field verified. No NIAH photographs are reused.
