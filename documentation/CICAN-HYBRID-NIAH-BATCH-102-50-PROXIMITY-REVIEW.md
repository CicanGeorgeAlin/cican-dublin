# Batch 102 — 50-record proximity and identity review

**Batch:** 102  
**Quality run:** 45467215508  
**Review date:** 24 November 2026

## Automated identity results

- Exact registration conflicts: 0
- Exact address conflicts against existing archive objects: 0
- Exact name matches against existing archive objects: 0
- Existing NIAH source-ID conflicts: 0
- Same-batch exact address conflicts: 0
- Same-batch exact-name matches: 1 pair
- Existing-archive proximity hits within 30 m: 39
- Candidate-to-candidate proximity pairs within 30 m: 168
- Blocking identity conflicts: 0

## Same-name pair review

| Registrations | Shared display name | Separate NIAH addresses | Assessment |
|---|---|---|---|
| 50010816 / 50010817 | Mountjoy School | 7 / 6 Mountjoy Square North | Two separately registered Georgian townhouses at different house numbers, both with a former school association |

The shared historical school name does not establish duplicate building identity. Both records remain separate.

## Existing-archive proximity review

The 39 hits involve four candidate registrations and nine existing archive objects, all located around the separately catalogued houses at 3 and 4 Mountjoy Square North.

| Existing archive object | Candidate registrations within 30 m | Assessment |
|---|---|---|
| DUB-BLD-0139 — 4 Mountjoy Square North townhouse | 50010816, 50010817, 50010818, 50010821, 50010822 | Separate numbered houses at 7, 6, 5, 2 and 1 Mountjoy Square North |
| DUB-STR-0170 and DUB-STR-0171 — entrance bootscrapers and pavement coal-hole covers at No. 4 | 50010816, 50010817, 50010818, 50010821, 50010822 | Separate numbered houses; these existing objects are entrance/pavement features at No. 4 |
| DUB-BLD-0025 — 3 Mountjoy Square North townhouse | 50010817, 50010818, 50010821, 50010822 | Separate numbered houses at 6, 5, 2 and 1 Mountjoy Square North |
| DUB-BLD-0026 and DUB-STR-0070/0071/0072/0154 — coal-hole and bootscraper records associated with No. 3 | 50010817, 50010818, 50010821, 50010822 | Separate numbered houses; the existing objects are streetscape details at No. 3 |

The proximity hits do not indicate exact address matches. No candidate is the same property as the existing No. 3 or No. 4 records.

## Candidate-to-candidate proximity review

All 168 machine-reported pairs were checked against the official queue and candidate addresses. No pair has an exact normalized address match. The closest examples are adjacent numbered properties:

| Pair | Distance |
|---|---:|
| 50010861 / 50010862 — 13 / 12 Gardiner Place | 4.4 m |
| 50010860 / 50010861 — 14 / 13 Gardiner Place | 5.1 m |
| 50010849 / 50010850 — 3 / 2 Gardiner Street Upper | 5.4 m |
| 50010847 / 50010848 — 5 / 4 Gardiner Street Upper | 5.5 m |
| 50010848 / 50010849 — 4 / 3 Gardiner Street Upper | 5.6 m |
| 50010835 / 50010836 — 17 / 16 Gardiner Street Upper | 5.7 m |
| 50010840 / 50010841 — 12 / 11 Gardiner Street Upper | 5.7 m |
| 50010839 / 50010840 — 13 / 12 Gardiner Street Upper | 5.8 m |
| 50010850 / 50010851 — 2 / 1 Gardiner Street Upper | 5.8 m |
| 50010846 / 50010847 — 6 / 5 Gardiner Street Upper | 5.9 m |
| 50010828 / 50010829 — 24 / 23 Gardiner Street Upper | 6.2 m |
| 50010838 / 50010839 — 14 / 13 Gardiner Street Upper | 6.2 m |
| 50010841 / 50010842 — 11 / 10 Gardiner Street Upper | 6.2 m |
| 50010836 / 50010837 — 16 / 15 Gardiner Street Upper | 6.3 m |
| 50010837 / 50010838 — 15 / 14 Gardiner Street Upper | 6.3 m |
| 50010859 / 50010860 — 15 / 14 Gardiner Place | 6.3 m |
| 50010832 / 50010833 — 20 / 19 Gardiner Street Upper | 6.5 m |
| 50010833 / 50010834 — 19 / 18 Gardiner Street Upper | 6.5 m |
| 50010843 / 50010844 — 9 / 8 Gardiner Street Upper | 6.5 m |
| 50010845 / 50010846 — 7 / 6 Gardiner Street Upper | 6.5 m |
| 50010855 / 50010856 — 19 / 18 Gardiner Place | 6.5 m |
| 50010829 / 50010830 — 23 / 22 Gardiner Street Upper | 6.6 m |
| 50010854 / 50010855 — 20 / 19 Gardiner Place | 6.6 m |
| 50010827 / 50010828 — 25 / 24 Gardiner Street Upper | 6.7 m |
| 50010830 / 50010831 — 22 / 21 Gardiner Street Upper | 6.7 m |

The complete 168-pair list remains in `audit/batch-102-50-candidate-reconciliation.json`; no proximity finding has been suppressed. These are neighbouring properties with separate registration and address evidence.

## Page holds and source anomalies

Four candidates remain on HOLD because canonical individual pages were not independently verified:
50010821, 50010850, 50010855 and 50010860.

The selected national CSV rows contain 46 blank NAME values and 24 rows with U+FFFD replacement characters somewhere in raw values; these groups overlap. No malformed/date-like NUMBER value was identified.

## Outcome

**No exact duplicate or blocking identity conflict was found.** The one same-name pair is two separately registered Mountjoy School-associated houses at 7 and 6 Mountjoy Square North. The 39 existing-archive proximity hits and 168 candidate-to-candidate pairs were reviewed as neighbouring numbered properties and streetscape features.

This review does not establish field verification, coordinate accuracy, current access, or photography permission. No production records are created or merged.
