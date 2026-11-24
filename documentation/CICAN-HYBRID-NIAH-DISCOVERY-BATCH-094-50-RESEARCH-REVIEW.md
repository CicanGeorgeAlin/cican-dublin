# CICAN Dublin — NIAH Batch 094 (50-record normal batch)

**Status:** research-only; third standard 50-record batch following the 25-record pilot.

## Selection and official queue

The batch consists of the first 50 Dublin City Council / County Dublin rows after Batch 093's final registration 50010383 in the refreshed four-authority NIAH missing-registration queue.

- 50 unique registration numbers.
- Selected queue range begins at 50010384 and ends at 50010434.
- Numeric gaps are retained; only exact membership in the queue establishes eligibility.
- Streets represented include Middle Abbey Street, Marlborough Street, Upper Abbey Street, Jervis Street and Capel Street.

Selected registrations:
50010384, 50010385, 50010386, 50010387, 50010388, 50010389, 50010390, 50010391, 50010392, 50010394, 50010395, 50010396, 50010397, 50010398, 50010399, 50010400, 50010401, 50010402, 50010403, 50010404, 50010405, 50010406, 50010407, 50010408, 50010409, 50010410, 50010411, 50010412, 50010413, 50010414, 50010415, 50010416, 50010417, 50010418, 50010419, 50010420, 50010421, 50010422, 50010423, 50010424, 50010425, 50010426, 50010427, 50010428, 50010429, 50010430, 50010431, 50010432, 50010433, 50010434.

## Individual NIAH page status

46 canonical individual NIAH pages were located and independently checked against their registration numbers. Four remain held:

| Registration | Candidate | Hold reason |
|---|---|---|
| 50010385 | House of Colour, 64 Middle Abbey Street | Canonical individual page not independently located |
| 50010389 | J.J. Lalor Ltd Printers, 60 Middle Abbey Street | Canonical individual page not independently located |
| 50010411 | T. P. Smith's, Jervis Street | Canonical individual page not independently located; CSV NUMBER is malformed/date-like `09-Oct` |
| 50010427 | CASA, 26 Capel Street | Canonical individual page not independently located |

The national CSV's legacy URLs are retained for these four, but they are not counted as individual-page verification and remain ineligible for publication.

## Source anomalies and display rules

- 50010402 has a U+FFFD replacement character in the raw CSV NAME (`Caf� Aroma`). The display heading uses the official page's spelling, Café Aroma; the raw CSV remains unchanged.
- Blank CSV NAME fields are preserved verbatim. Where an official page title was verified, the manifest carries that page title as the display heading; otherwise the validator falls back to an address-based heading.
- 50010411 has the malformed/date-like CSV NUMBER `09-Oct`. Preserve the raw value and do not treat it as a street number.
- The reconciliation report records raw CSV NAME, NUMBER and street fields separately from display headings.

## Automated reconciliation

`scripts/reconcile-niah-batch-094-50.mjs` verifies:
- exactly 50 unique candidates;
- exact membership in the refreshed official four-authority queue;
- Dublin City Council / County Dublin scope;
- WGS84 and ITM coordinate presence and plausible bounds;
- canonical individual page status;
- exact registration, address, source-ID and same-batch address conflicts;
- exact-name matches and 30-metre proximity against the existing archive and within the batch;
- raw CSV anomalies and page-verification holds.

The generated report is `audit/batch-094-50-candidate-reconciliation.json`. Exact identity conflicts block the batch. Proximity and name matches remain visible for manual review.

## Publication boundary

Research-only. No permanent archive IDs, master objects, public NIAH register entries, source records, visual records, map pins or SEO pages are created. Coordinates remain source-derived from the NIAH CSV, not founder GPS or field verified. No NIAH photographs are reused.
