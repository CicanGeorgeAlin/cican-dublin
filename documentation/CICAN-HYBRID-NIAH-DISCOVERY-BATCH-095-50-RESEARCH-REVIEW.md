# CICAN Dublin — NIAH Batch 095 (50-record normal batch)

**Status:** research-only; fourth standard 50-record batch.

## Selection and official queue

The batch contains the first 50 Dublin City Council / County Dublin entries after Batch 094's final registration 50010434 in the refreshed four-authority missing-registration queue.

- 50 unique registrations, each required to occur exactly once in the refreshed queue.
- The selected sequence runs from 50010435 through 50010489, retaining official queue gaps.
- Areas represented: Capel Street, Mary Street, Wolfe Tone Street, Jervis Street, Liffey Street Upper, Henry Street and Moore Street.

## Individual NIAH page status

41 canonical individual pages have been located and checked against their registration numbers. Nine remain on HOLD:

| Registration | Candidate | Hold reason |
|---|---|---|
| 50010435 | 39 Capel Street | Canonical individual page not independently located |
| 50010437 | J.P. Mullen, 42 Capel Street / Mary Street | Canonical individual page not independently located |
| 50010444 | J. McNeill, 140 Capel Street | Canonical individual page not independently located |
| 50010450 | Mary Street | Canonical individual page not independently located; CSV NUMBER is malformed/date-like `06-Sep` |
| 50010451 | AXA Insurance, Wolfe Tone Street | Official NIAH North City heritage guide identifies the registration and street, but canonical individual page not independently located |
| 50010484 | Hair World/Toys For All, 7 Moore Street | Canonical individual page not independently located |
| 50010485 | Buckleys, 62 Moore Street | Canonical individual page not independently located |
| 50010488 | Phone Wizz, 55 Moore Street | Canonical individual page not independently located |
| 50010489 | Charity Hair Studio, 14 Moore Street | Canonical individual page not independently located |

Legacy national CSV URLs remain preserved for these nine. Queue membership or a heritage-guide index entry does not substitute for canonical individual-page verification.

## Source anomalies and display rules

- 23 selected rows have blank national CSV NAME values. Raw blanks are retained; official page headings are separately recorded where verified.
- 43 selected rows contain U+FFFD replacement characters somewhere in their raw national CSV values. This count overlaps the blank-name group; the report preserves the raw values and identifies affected registrations.
- 50010450 has malformed/date-like NUMBER `06-Sep`.
- 50010470 (Arnotts) has malformed/date-like NUMBER `Jul-15`; the raw value is preserved while the display address uses the independently verified official page address, 7–15 Henry Street.
- 50010483's raw NAME contains a replacement character in “Café”; the canonical NIAH page heading supplies the display spelling.
- 50010451 is displayed at Wolfe Tone Street based on the official NIAH North City guide's registration index. Its individual page remains unverified and held.

## Shared-site identity review

Registrations 50010456 and 50010457 both have a broad Jervis Street queue address. Their canonical NIAH pages describe distinct structures:
- 50010456: an attached three-bay, four-storey c.1730 Georgian house, retained as a fire-exit façade within the Jervis Centre.
- 50010457: a separate nine-bay, four-storey former Jervis Street Charitable Infirmary, built 1884–87, now retained as apartments.

The manifest records this exact reciprocal distinct-structure exception. It applies only to these two registrations and does not create a general shared-address exemption.

## Automated reconciliation

`scripts/reconcile-niah-batch-095-50.mjs` verifies:
- exactly 50 unique candidates;
- exact membership in the refreshed official four-authority queue;
- Dublin City Council / County Dublin scope;
- WGS84 and ITM coordinate presence and plausible bounds;
- canonical individual-page status;
- exact registration, address, source-ID and same-batch address conflicts;
- exact-name matches and 30-metre proximity against the existing archive and within the batch;
- source anomalies, malformed date-like NUMBER values and page holds.

The report is written to `audit/batch-095-50-candidate-reconciliation.json`. Any unexplained exact identity conflict blocks the batch. Proximity and exact-name matches remain visible for manual review.

## Publication boundary

Research-only. No permanent archive IDs, master objects, public NIAH register entries, source records, visual records, map pins or SEO pages are created. Coordinates remain source-derived, not founder GPS or field verified. No NIAH photographs are reused.
