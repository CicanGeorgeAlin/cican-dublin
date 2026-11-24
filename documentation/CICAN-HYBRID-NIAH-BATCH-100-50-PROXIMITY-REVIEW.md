# Batch 100 — 50-record proximity and identity review

**Batch:** 100  
**Quality run:** 45465530405  
**Review date:** 24 November 2026

## Automated identity results

- Exact registration conflicts: 0
- Exact address conflicts against existing archive objects: 0
- Exact name matches against existing archive objects: 0
- Existing NIAH source-ID conflicts: 0
- Same-batch exact address conflicts: 0
- Same-batch exact-name matches: 0
- Existing-archive proximity hits within 30 m: 61
- Candidate-to-candidate proximity pairs within 30 m: 94
- Blocking identity conflicts: 0

## Existing-archive proximity review

The 61 hits involve 18 candidate registrations and 13 existing archive objects. They are all neighbouring numbered properties or buildings near separately catalogued streetscape features. The archive-object groupings are:

| Existing archive object | Candidate registrations within 30 m | Assessment |
|---|---|---|
| DUB-STR-0054 — Dorset Street Lower post box | 50010710, 50010711 | Separate buildings at 493 and 492 North Circular Road near the junction post box |
| DUB-BLD-0034 — 4 Sherrard Street Lower paving/coal-hole record | 50010723, 50010724, 50010725, 50010726, 50010728, 50010729 | Separate properties at 8, 7, 6, 5, 3 and 2 Sherrard Street Lower |
| DUB-STR-0160 — 1 Sherrard Street Lower benchmark/date panel | 50010726, 50010728, 50010729 | Separate numbered buildings at 5, 3 and 2 Sherrard Street Lower |
| DUB-BLD-0089 and DUB-STR-0078 — 6 Sherrard Street Upper townhouse and bootscraper | 50010742, 50010743, 50010745, 50010746, 50010747, 50010748 | Separate numbered properties at 8, 7, 5, 4, 3 and 2 Sherrard Street Upper |
| DUB-BLD-0078 and DUB-STR-0046/0047/0048 — 1 Sherrard Street Upper townhouse and associated features | 50010745, 50010746, 50010747, 50010748, 50010752, 50010753 | Separate properties on Sherrard Street Upper and Gardiner Street Upper; the existing entries are the townhouse and individual entrance/pavement details at No. 1 |
| DUB-BLD-0022 — 1A Sherrard Street Upper | 50010747, 50010748, 50010752, 50010753, 50010754 | Separate properties at 3 and 2 Sherrard Street Upper and 52, 51 and 50 Gardiner Street Upper |
| DUB-BLD-0079 and DUB-INS-0006 — 53 Gardiner Street Upper corner townhouse and its 1825 plaque | 50010752, 50010753, 50010754, 50010755 | Separate numbered properties at 52, 51, 50 and 49 Gardiner Street Upper |
| DUB-STR-0003 — Gardiner Street Upper post box | 50010752 | Separate post box near 52 Gardiner Street Upper |

All 61 individual proximity rows are retained in the machine-generated report. None is an exact address match. Proximity alone is not treated as duplicate identity.

## Candidate-to-candidate proximity review

All 94 machine-reported pairs were checked against the official queue and candidate addresses. No pair has an exact normalized address match. The closest examples are adjacent numbered properties:

| Pair | Distance |
|---|---:|
| 50010735 / 50010736 — 460 / 458 North Circular Road | 5.0 m |
| 50010738 / 50010739 — 454 / 452 North Circular Road | 5.3 m |
| 50010746 / 50010747 — 4 / 3 Sherrard Street Upper | 5.6 m |
| 50010745 / 50010746 — 5 / 4 Sherrard Street Upper | 6.0 m |
| 50010716 / 50010717 — 15 / 14 Sherrard Street Lower | 6.3 m |
| 50010723 / 50010724 — 8 / 7 Sherrard Street Lower | 6.3 m |
| 50010728 / 50010729 — 3 / 2 Sherrard Street Lower | 6.3 m |
| 50010739 / 50010740 — 452 / 450 North Circular Road | 6.3 m |
| 50010752 / 50010753 — 52 / 51 Gardiner Street Upper | 6.3 m |
| 50010720 / 50010721 — 11 / 10 Sherrard Street Lower | 6.4 m |
| 50010754 / 50010755 — 50 / 49 Gardiner Street Upper | 6.4 m |
| 50010755 / 50010756 — 49 / 48 Gardiner Street Upper | 6.4 m |
| 50010756 / 50010757 — 48 / 47 Gardiner Street Upper | 6.4 m |
| 50010700 / 50010701 — 79 / 78 Dorset Street Upper | 6.5 m |
| 50010717 / 50010718 — 14 / 13 Sherrard Street Lower | 6.5 m |
| 50010718 / 50010719 — 13 / 12 Sherrard Street Lower | 6.5 m |
| 50010719 / 50010720 — 12 / 11 Sherrard Street Lower | 6.5 m |
| 50010725 / 50010726 — 6 / 5 Sherrard Street Lower | 6.5 m |
| 50010732 / 50010733 — 18 / 19 Sherrard Street Upper | 6.5 m |
| 50010721 / 50010722 — 10 / 9 Sherrard Street Lower | 6.6 m |

The complete 94-pair list remains in `audit/batch-100-50-candidate-reconciliation.json`; no proximity finding has been suppressed. These are neighbouring properties with separate registration and address evidence.

## Page holds and source anomalies

Twelve candidates remain on HOLD because canonical individual pages were not independently verified:
50010709, 50010712, 50010716, 50010720, 50010721, 50010722, 50010724, 50010735, 50010746, 50010752, 50010756 and 50010757.

The selected national CSV rows contain 42 blank NAME values and 16 rows with U+FFFD replacement characters somewhere in raw values; these groups overlap. No malformed/date-like NUMBER value was identified.

## Outcome

**No exact duplicate or blocking identity conflict was found.** The 61 existing-archive proximity hits and 94 candidate-to-candidate pairs were reviewed as neighbouring buildings or streetscape features with distinct address identities. No candidate is merged with an existing object.

This review does not establish field verification, coordinate accuracy, current access, or photography permission. No production records are created or merged.
