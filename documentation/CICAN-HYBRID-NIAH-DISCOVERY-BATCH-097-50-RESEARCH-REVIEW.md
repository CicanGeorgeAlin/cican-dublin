# CICAN Dublin — NIAH Batch 097 (50-record normal batch)

**Status:** research-only; sixth standard 50-record batch.

## Selection and official queue

The batch contains the first 50 Dublin City Council / County Dublin entries after Batch 096's final registration 50010543 in the refreshed four-authority NIAH missing-registration queue.

- Exactly 50 unique registrations, each required to occur exactly once in the refreshed queue.
- Selected queue range begins at 50010544 and ends at 50010598, retaining official gaps.
- Areas include O'Connell Street Upper, Parnell Street, Moore Lane and Capel Street.

## Individual NIAH page status

44 canonical individual pages have been located and checked against their registration numbers. Six remain on HOLD:

| Registration | Candidate | Hold reason |
|---|---|---|
| 50010571 | Codys of Capel Street / Gallery 53, 53 Capel Street | Canonical individual page not independently located |
| 50010577 | Maive Salon, 112 Capel Street | Canonical individual page not independently located |
| 50010580 | Henry Gilligan Grocer, 109 Capel Street | Canonical individual page not independently located |
| 50010586 | 102 Capel Street | Canonical individual page not independently located |
| 50010592 | 96 Capel Street | Canonical individual page not independently located |
| 50010596 | Delux, 61 Capel Street / Parnell Street | Canonical individual page not independently located |

The national CSV legacy URLs are preserved for these six but do not count as canonical individual-page verification.

## Source anomalies and display rules

- 13 selected rows have blank raw CSV NAME values. Raw blanks are retained; verified official page headings are stored separately where available.
- 38 selected rows contain U+FFFD replacement characters somewhere in their raw CSV values. This overlaps the blank-name group.
- 50010544 has malformed/date-like NUMBER `09-Oct`.
- 50010545 has malformed/date-like NUMBER `Nov-13`.
- Both raw NUMBER values are preserved; the display addresses use the verified official page addresses.
- 50010583's raw NAME contains a replacement-character error in “Belle Cheminée”; the verified individual page title supplies the display spelling.
- The reconciliation report preserves raw CSV NAME, NUMBER and street fields separately from display headings.

## Shared-address monument relationship

Registrations 50010557 and 50010558 share the broad queue address O'Connell Street Upper / Parnell Street. Their canonical NIAH pages describe distinct structures:
- 50010557 is the freestanding Charles Stewart Parnell Monument on a round traffic island at the north end of O'Connell Street.
- 50010558 is a separate corner-sited neo-Classical bank at 37–38 O'Connell Street Upper / Parnell Street.

The manifest records this exact reciprocal distinct-structure exception. It applies only to this pair; no general shared-address exception is allowed.

## Other same-name identity checks

- 50010549 and 50010550 are both titled The Gresham Hotel but refer to separately registered properties at 20–22 and 23 O'Connell Street Upper. The latter is a separate corner building now incorporated into the hotel.
- 50010581 and 50010582 are both John Brereton Jewellers but are distinct properties at 108 and 107 Capel Street.
- 50010554 and 50010560 both relate to the Catholic Commercial Club but are separate structures: the historic townhouse at 42 O'Connell Street Upper and the detached 1897 hall/club building on Moore Lane.

## Automated reconciliation

`scripts/reconcile-niah-batch-097-50.mjs` verifies:
- exactly 50 unique candidates;
- exact membership in the refreshed official four-authority queue;
- Dublin City Council / County Dublin scope;
- WGS84 and ITM coordinate presence and plausible bounds;
- canonical individual-page status;
- exact registration, address, source-ID and same-batch address conflicts;
- exact-name matches and 30-metre proximity against the existing archive and within the batch;
- source anomalies and page holds.

The report is written to `audit/batch-097-50-candidate-reconciliation.json`. Unexplained exact identity conflicts block the batch. Proximity and exact-name matches remain visible for manual review.

## Publication boundary

Research-only. No permanent archive IDs, master objects, public NIAH register entries, source records, visual records, map pins or SEO pages are created. Coordinates remain source-derived, not founder GPS or field verified. No NIAH photographs are reused.
