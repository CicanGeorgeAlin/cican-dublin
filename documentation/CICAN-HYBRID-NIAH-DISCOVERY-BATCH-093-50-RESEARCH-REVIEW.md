# CICAN Dublin — NIAH Batch 093 (50-record normal batch)

**Status:** research-only; second 50-record normal batch following the successful Batch 092 validation.

## Selection

The 50 candidates are the first 50 Dublin City Council / County Dublin rows after Batch 092's final registration 50010329 in the refreshed official four-authority missing-registration queue. All must occur exactly once in that queue. Skipped registration numbers are not assumed eligible.

The selected streets and areas include Bachelor's Walk, Ormond Quay Lower, Capel Street, Strand Street Great, Liffey Street Lower, and Middle Abbey Street.

## Individual-page verification

42 canonical individual NIAH pages have been independently located. Eight candidates remain held:

| Registration | Candidate | Address | Hold reason |
|---|---|---|---|
| 50010332 | Reservations Network Ltd | 13 Bachelor's Walk | Canonical individual page not independently located |
| 50010342 | Zulu Tattoo | 32 Ormond Quay Lower | Canonical individual page not independently located |
| 50010344 | 23 Ormond Quay Lower | 23 Ormond Quay Lower | Blank CSV NAME; canonical individual page not independently located |
| 50010354 | Angel Cruiser | 5 Ormond Quay Lower | Canonical individual page not independently located |
| 50010358 | Zeus | 1B Ormond Quay Lower | Canonical individual page not independently located |
| 50010363 | House of Colour Creative Hairdressing | 3 Capel Street | Canonical individual page not independently located |
| 50010365 | Boland Ryan Ltd Insurance Brokers | 5 Capel Street | Canonical individual page not independently located |
| 50010381 | New York | 68 Abbey Street Middle | Canonical individual page not independently located |

These eight remain research holds and are not eligible for publication. The manifest retains the legacy URL from the national CSV without treating it as a verified individual page.

## Source anomalies and identity notes

- 50010331: national CSV name contains replacement characters; verified official page title is stored separately.
- 50010334 and 50010344: national CSV NAME is blank; the raw blank value must remain unchanged.
- 50010367: national CSV NUMBER is the malformed date-like value `07-Aug`; preserve it verbatim and use the verified individual page address separately.
- 50010376: national CSV name contains a replacement-character error in Café; official page title supplies the display spelling.
- 50010345 and 50010346 are both titled Morrison Hotel but are distinct NIAH registrations at 15 and 14 Ormond Quay Lower respectively. Preserve the two records separately; the shared present-day hotel name is not a duplicate identity.

## Automated gate

`scripts/reconcile-niah-batch-093-50.mjs` verifies:
- exactly 50 unique candidates;
- exact queue membership and Dublin City Council / County Dublin scope;
- official WGS84 and ITM coordinate presence and plausible bounds;
- canonical individual-page status;
- exact registration, address, source-ID and same-batch address conflicts;
- exact-name matches and 30-metre proximity against the existing archive and within the batch;
- source anomalies, blank NAME fields, and malformed date-like NUMBER values.

The report is written to `audit/batch-093-50-candidate-reconciliation.json`. Exact identity conflicts block the batch; proximity and exact-name matches remain visible for manual review.

## Publication boundary

No permanent archive IDs, master objects, public NIAH register entries, source records, visual records, map pins or SEO pages are created by this research batch. Coordinates remain source-derived, not founder GPS or field verified. No NIAH photographs are reused.
