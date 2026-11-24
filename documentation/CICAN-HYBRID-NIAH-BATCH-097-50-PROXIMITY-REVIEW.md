# Batch 097 — 50-record proximity and identity review

**Batch:** 097  
**Quality run:** 45463024822  
**Review date:** 24 November 2026

## Automated identity results

- Exact registration conflicts: 0
- Exact address conflicts against existing archive objects: 0
- Exact name matches against existing archive objects: 0
- Existing NIAH source-ID conflicts: 0
- Same-batch exact address conflicts: 0
- Same-batch exact-name matches: 3 pairs
- Existing-archive proximity hits within 30 m: 3
- Candidate-to-candidate proximity pairs within 30 m: 108
- Blocking identity conflicts: 0

## Same-name pair review

| Registrations | Shared display name | Separate NIAH addresses | Assessment |
|---|---|---|---|
| 50010549 / 50010550 | The Gresham Hotel | 20–22 O'Connell Street Upper / 23 O'Connell Street Upper, Cathal Brugha Street | Separate registered properties; the 23 O'Connell Street building is a distinct corner property now incorporated into the hotel |
| 50010554 / 50010560 | Catholic Commercial Club | 42 O'Connell Street Upper / Moore Lane | Separate structures: historic townhouse clubhouse and detached late-nineteenth-century hall/club building |
| 50010581 / 50010582 | John Brereton Jewellers | 108 / 107 Capel Street | Distinct neighbouring registered buildings at separate street numbers |

Repeated business/institution names do not establish duplicate building identity. All six records remain separate.

## Existing-archive proximity review

| Candidate | Existing archive object | Distance | Assessment |
|---|---|---:|---|
| 50010550 — The Gresham Hotel, 23 O'Connell Street Upper | DUB-STR-0010 — Early Free State twin post box, O'Connell Street Upper | 15.4 m | Separate hotel building and street fixture |
| 50010557 — Charles Stewart Parnell Monument | DUB-STR-0005 — Four Victorian cast-iron bollards, north end of O'Connell Street | 13.2 m | Separate freestanding monument and street fixtures |
| 50010558 — Allied Irish Bank, 37–38 O'Connell Street Upper | DUB-STR-0005 — Four Victorian cast-iron bollards, north end of O'Connell Street | 27.0 m | Separate bank building and street fixtures |

None is an exact address match. The 30-metre screen is a conservative review trigger, not a duplicate rule.

## Candidate-to-candidate proximity review

All 108 machine-reported pairs were checked against the official queue and candidate addresses. No pair has an exact normalized address match. The closest examples are neighbouring numbered properties:

| Pair | Distance |
|---|---:|
| 50010590 / 50010591 — 98 / 97 Capel Street | 5.5 m |
| 50010587 / 50010588 — 101 / 99–100 Capel Street | 5.6 m |
| 50010593 / 50010594 — 66 / 65 Capel Street | 5.6 m |
| 50010581 / 50010582 — 108 / 107 Capel Street | 5.7 m |
| 50010597 / 50010598 — 78–79 / 80 Capel Street | 5.7 m |
| 50010571 / 50010572 — 53 / 54 Capel Street | 5.8 m |
| 50010578 / 50010579 — 111 / 110 Capel Street | 5.9 m |
| 50010568 / 50010569 — 47 / 49 Capel Street | 6.0 m |
| 50010574 / 50010575 — 56 / 57 Capel Street | 6.0 m |
| 50010591 / 50010592 — 97 / 96 Capel Street | 6.6 m |
| 50010580 / 50010581 — 109 / 108 Capel Street | 6.9 m |
| 50010582 / 50010583 — 107 / 106 Capel Street | 7.0 m |
| 50010594 / 50010595 — 65 / 64 Capel Street | 7.0 m |
| 50010577 / 50010578 — 112 / 111 Capel Street | 7.3 m |
| 50010570 / 50010571 — 51–52 / 53 Capel Street | 7.4 m |
| 50010586 / 50010587 — 102 / 101 Capel Street | 8.0 m |
| 50010551 / 50010552 — 45 / 44 O'Connell Street Upper | 8.5 m |
| 50010583 / 50010584 — 106 / Outhouse, Capel Street | 8.5 m |
| 50010561 / 50010562 — 70 / 71 Parnell Street | 8.8 m |
| 50010547 / 50010548 — 18 / 19 O'Connell Street Upper | 9.9 m |

The complete 108-pair list remains in `audit/batch-097-50-candidate-reconciliation.json`; no proximity finding has been suppressed. The pairs are neighbouring properties with distinct registration and address evidence.

## Page holds and source anomalies

Six candidates remain on HOLD because canonical individual pages were not independently verified:
50010571, 50010577, 50010580, 50010586, 50010592 and 50010596.

The selected national CSV rows contain 13 blank NAME values and 38 rows with U+FFFD replacement characters somewhere in raw values; these groups overlap. Two NUMBER fields are malformed/date-like: 50010544 (`09-Oct`) and 50010545 (`Nov-13`). Raw source values remain preserved.

## Outcome

**No exact duplicate or blocking identity conflict was found.** The three same-name pairs are distinct separately registered properties; the three archive proximity hits are buildings/monument near street fixtures; and the 108 candidate pairs are neighbouring records with separate addresses.

This review does not establish field verification, coordinate accuracy, current access, or photography permission. No production records are created or merged.
