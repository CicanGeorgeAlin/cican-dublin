# Batch 101 — 50-record proximity and identity review

**Batch:** 101  
**Quality run:** 45466497554  
**Review date:** 24 November 2026

## Automated identity results

- Exact registration conflicts: 0
- Exact address conflicts against existing archive objects: 0
- Exact name matches against existing archive objects: 0
- Existing NIAH source-ID conflicts: 0
- Same-batch exact address conflicts: 0
- Same-batch exact-name matches: 0
- Existing-archive proximity hits within 30 m: 0
- Candidate-to-candidate proximity pairs within 30 m: 157
- Blocking identity conflicts: 0

## Existing-archive proximity review

No candidate fell within 30 metres of an existing archive object in this batch. This reflects the source-coordinate screen and does not establish absolute positional accuracy.

## Candidate-to-candidate proximity review

All 157 machine-reported pairs were checked against the official queue and manifest addresses. No pair has an exact normalized address match. The closest examples are neighbouring numbered properties:

| Pair | Distance |
|---|---:|
| 50010767 / 50010768 — 38 / 39 Gardiner Street Upper | 5.9 m |
| 50010782 / 50010783 — 16 / 15 Belvedere Place | 5.9 m |
| 50010806 / 50010807 — 44 Belvedere Place / 16 Mountjoy Square North | 6.1 m |
| 50010779 / 50010780 — 19 / 18 Belvedere Place | 6.2 m |
| 50010780 / 50010781 — 18 / 17 Belvedere Place | 6.2 m |
| 50010785 / 50010786 — 13 / 12 Belvedere Place | 6.2 m |
| 50010778 / 50010779 — 20 / 19 Belvedere Place | 6.3 m |
| 50010783 / 50010784 — 15 / 14 Belvedere Place | 6.3 m |
| 50010786 / 50010787 — 12 / 11 Belvedere Place | 6.3 m |
| 50010787 / 50010788 — 11 / 10 Belvedere Place | 6.3 m |
| 50010802 / 50010803 — 40 / 41 Belvedere Place | 6.3 m |
| 50010803 / 50010804 — 41 / 42 Belvedere Place | 6.3 m |
| 50010807 / 50010808 — 16 / 15 Mountjoy Square North | 6.3 m |
| 50010758 / 50010759 — 46 / 45 Gardiner Street Upper | 6.4 m |
| 50010772 / 50010773 — 25 / 26 Belvedere Place | 6.5 m |
| 50010776 / 50010777 — 22 / 21 Belvedere Place | 6.6 m |
| 50010781 / 50010782 — 17 / 16 Belvedere Place | 6.6 m |
| 50010784 / 50010785 — 14 / 13 Belvedere Place | 6.6 m |
| 50010765 / 50010766 — 36 / 37 Gardiner Street Upper | 6.7 m |
| 50010771 / 50010772 — 24 / 25 Belvedere Place | 6.8 m |
| 50010773 / 50010774 — 26 / 27 Belvedere Place | 6.8 m |
| 50010777 / 50010778 — 21 / 20 Belvedere Place | 6.8 m |
| 50010801 / 50010802 — 39 / 40 Belvedere Place | 6.8 m |
| 50010791 / 50010792 — 7 / 6 Belvedere Place | 6.9 m |
| 50010792 / 50010793 — 6 / 5 Belvedere Place | 6.9 m |

The complete 157-pair list remains in `audit/batch-101-50-candidate-reconciliation.json`; no proximity finding has been suppressed. These are neighbouring properties with separate registration and address evidence.

## Page holds and source anomalies

Three candidates remain on HOLD because canonical individual pages were not independently verified:
50010764, 50010769 and 50010776.

The selected national CSV rows contain 46 blank NAME values and 13 rows with U+FFFD replacement characters somewhere in raw values; these groups overlap. No malformed/date-like NUMBER value was identified.

## Outcome

**No exact duplicate or blocking identity conflict was found.** There are no existing-archive proximity hits; the 157 within-batch pairs are neighbouring properties with distinct addresses.

This review does not establish field verification, coordinate accuracy, current access, or photography permission. No production records are created or merged.
