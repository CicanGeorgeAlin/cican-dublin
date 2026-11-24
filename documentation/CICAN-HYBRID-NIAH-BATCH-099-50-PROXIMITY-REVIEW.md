# Batch 099 — 50-record proximity and identity review

**Batch:** 099  
**Quality run:** 45464677477  
**Review date:** 24 November 2026

## Automated identity results

- Exact registration conflicts: 0
- Exact address conflicts against existing archive objects: 0
- Exact name matches against existing archive objects: 0
- Existing NIAH source-ID conflicts: 0
- Same-batch exact address conflicts: 0
- Same-batch exact-name matches: 1 pair
- Existing-archive proximity hits within 30 m: 0
- Candidate-to-candidate proximity pairs within 30 m: 56
- Blocking identity conflicts: 0

## Same-name pair review

| Registrations | Shared display name | Separate NIAH addresses | Assessment |
|---|---|---|---|
| 50010665 / 50010666 | Eden College | 40 / 41 Dominick Street Lower | Separate numbered properties and separate NIAH registrations. The 41 Dominick Street record remains on HOLD because its canonical individual page was not independently located |

The shared school name reflects the same institution, not a duplicate building identity. The verified and held records remain separate.

## Existing-archive proximity review

No candidate fell within 30 metres of an existing archive object in this batch. This is a result of the automated source-coordinate screen, not proof of absolute positional accuracy.

## Candidate-to-candidate proximity review

All 56 machine-reported pairs were checked against the official queue and candidate addresses. No pair has an exact normalized address match. The nearest examples are neighbouring street-frontage properties:

| Pair | Distance |
|---|---:|
| 50010695 / 50010696 — 90 / 89 Dorset Street Upper | 5.9 m |
| 50010662 / 50010663 — 31A / 32A Dominick Street Lower | 6.1 m |
| 50010696 / 50010697 — 89 / 88 Dorset Street Upper | 6.2 m |
| 50010651 / 50010652 — 15 / 16 Granby Row | 6.6 m |
| 50010654 / 50010655 — 2 / 3 Granby Row | 7.9 m |
| 50010656 / 50010657 — 4 / 5 Granby Row | 7.9 m |
| 50010670 / 50010671 — 23 / 22 Dominick Street Lower | 7.9 m |
| 50010669 / 50010670 — 24 / 23 Dominick Street Lower | 8.0 m |
| 50010671 / 50010672 — 22 / 21 Dominick Street Lower | 8.0 m |
| 50010655 / 50010656 — 3 / 4 Granby Row | 8.3 m |
| 50010650 / 50010652 — Vaughan's Hotel / 16 Granby Row | 8.4 m |
| 50010667 / 50010668 — 42 / 43 Dominick Street Lower | 8.8 m |
| 50010664 / 50010665 — 39 / 40 Dominick Street Lower | 9.0 m |
| 50010683 / 50010684 — 5 / 6 Henrietta Street | 9.1 m |
| 50010682 / 50010683 — 4 / 5 Henrietta Street | 10.5 m |
| 50010677 / 50010678 — 12 / 11 Henrietta Street | 10.7 m |
| 50010684 / 50010685 — 6 / 7 Henrietta Street | 11.1 m |
| 50010674 / 50010675 — 15 / 14 Henrietta Street | 11.3 m |
| 50010666 / 50010667 — 41 / 42 Dominick Street Lower | 11.5 m |
| 50010685 / 50010686 — 7 / 8 Henrietta Street | 11.6 m |
| 50010695 / 50010697 — 90 / 88 Dorset Street Upper | 12.1 m |
| 50010672 / 50010673 — 21 / 20 Dominick Street Lower | 12.2 m |
| 50010676 / 50010677 — 13 / 12 Henrietta Street | 13.2 m |
| 50010686 / 50010687 — 8 / 9 Henrietta Street | 14.2 m |
| 50010681 / 50010682 — 3 / 4 Henrietta Street | 14.8 m |

The complete 56-pair list remains in `audit/batch-099-50-candidate-reconciliation.json`; no proximity finding has been suppressed. These are neighbouring properties with distinct registration and address evidence.

## Page holds and source anomalies

Three candidates remain on HOLD because canonical individual pages were not independently verified:
50010666, 50010671 and 50010689.

The selected national CSV rows contain 28 blank NAME values and 24 rows with U+FFFD replacement characters somewhere in raw values; the groups overlap. No malformed/date-like NUMBER value was identified.

## Outcome

**No exact duplicate or blocking identity conflict was found.** The one same-name pair is two separate Eden College properties at 40 and 41 Dominick Street Lower. There are no existing-archive proximity hits, and the 56 within-batch proximity pairs are neighbouring records with distinct addresses.

This review does not establish field verification, coordinate accuracy, current access, or photography permission. No production records are created or merged.
