# Batch 096 — 50-record proximity and identity review

**Batch:** 096  
**Corrected quality run:** 45462248561  
**Review date:** 24 November 2026

## Automated identity results

- Exact registration conflicts: 0
- Exact address conflicts remaining after the narrow documented monument exceptions: 0
- Exact name matches against existing archive objects: 0
- Existing NIAH source-ID conflicts: 0
- Same-batch exact address conflicts: 0
- Same-batch exact-name matches: 1 pair
- Existing-archive proximity hits within 30 m: 10
- Candidate-to-candidate proximity pairs within 30 m: 89
- Documented broad-address monument relationship: 50010513 / 50010514
- Documented candidate-to-archive broad-address relationships: six (two monuments × three specific archive objects)

## Same-name pair review

| Registrations | Shared display name | Separate NIAH addresses | Assessment |
|---|---|---|---|
| 50010509 / 50010521 | Bank of Ireland | 6–7 O'Connell Street Lower / 28 O'Connell Street Lower | Distinct separately registered bank buildings at different street numbers; same former/occupier name does not imply duplicate identity |

## Monument and broad-address exceptions

Registrations 50010513 and 50010514 share the broad O'Connell Street Lower queue address. Their official NIAH pages describe separate freestanding monuments:
- 50010513 — William Smith O'Brien Monument, a Portland limestone statue on the pedestrian median.
- 50010514 — Sir John Gray Monument, a separate sculpted figure on its own granite pedestal and stepped base.

The generic street-level address also matches three existing archive objects. Six candidate-to-archive relationships were explicitly reviewed:
- 50010513 and 50010514 are distinct from DUB-BLD-0001, the General Post Office building.
- 50010513 and 50010514 are distinct from DUB-MON-0001, the separately catalogued O'Connell Monument.
- 50010513 and 50010514 are distinct from DUB-STR-0009, the P&T cast-iron post box.

These are narrowly scoped exceptions for the two monument registrations and those three exact archive IDs only. The monuments are separately registered, freestanding objects; the GPO is a building and the post box is a street fixture. No general same-street address exemption is created.

## Existing-archive proximity review

| Candidate | Existing archive object | Distance | Assessment |
|---|---|---:|---|
| 50010501 — Chancellor and Son, 55 O'Connell Street Lower | DUB-MON-0001 — O'Connell Monument | 26.9 m | Separate commercial building and monument |
| 50010502 — 53–54 O'Connell Street Lower | DUB-MON-0001 — O'Connell Monument | 27.8 m | Separate numbered building and monument |
| 50010507 — 9 O'Connell Street Lower | DUB-STR-0009 — P&T post box | 14.2 m | Separate building and street fixture |
| 50010508 — 8 O'Connell Street Lower | DUB-STR-0009 — P&T post box | 12.3 m | Separate building and street fixture |
| 50010509 — Bank of Ireland, 6–7 O'Connell Street Lower | DUB-STR-0009 — P&T post box | 16.1 m | Separate bank building and street fixture |
| 50010510 — Hamilton Long, 5 O'Connell Street Lower | DUB-STR-0009 — P&T post box | 23.9 m | Separate commercial building and street fixture |
| 50010512 — Great Northern Railway Company, 2 O'Connell Street Lower | DUB-MON-0001 — O'Connell Monument | 28.5 m | Separate commercial building and monument |
| 50010513 — William Smith O'Brien Monument | DUB-STR-0009 — P&T post box | 22.6 m | Separate freestanding monument and street fixture |
| 50010520 — Clerys Department Store, 18–27 O'Connell Street Lower | DUB-INS-0002 / DUB-MON-0007 — Jim Larkin Monument and pedestal inscription plaques | 28.7 m | Separate department-store building and monument/inscription |

The tenth hit is the second 50010520 comparison to the same Jim Larkin Monument location (the monument and its inscription plaques are separate archive records). All ten proximity rows are retained in the machine report. None is an exact identity match.

## Candidate-to-candidate proximity review

All 89 machine-reported pairs were checked against the official queue and manifest addresses. No pair has an exact normalized address match. The closest examples are neighbouring numbered properties:

| Pair | Distance |
|---|---:|
| 50010491 / 50010492 — 16 / 17 Moore Street | 5.7 m |
| 50010524 / 50010525 — 31 / 32 O'Connell Street Lower | 5.7 m |
| 50010490 / 50010491 — 15 / 16 Moore Street | 6.1 m |
| 50010496 / 50010497 — 37 / 38 Henry Street | 6.1 m |
| 50010503 / 50010504 — 52 / 51 O'Connell Street Lower | 6.3 m |
| 50010507 / 50010508 — 9 / 8 O'Connell Street Lower | 6.3 m |
| 50010525 / 50010526 — 32 / 33 O'Connell Street Lower | 6.3 m |
| 50010495 / 50010496 — 36 / 37 Henry Street | 6.4 m |
| 50010522 / 50010523 — 29 / 30 O'Connell Street Lower | 6.4 m |
| 50010529 / 50010530 — 68 / 67 O'Connell Street Upper | 6.4 m |
| 50010493 / 50010529 — 69 / 68 O'Connell Street Upper | 6.5 m |
| 50010505 / 50010506 — 50 / 49 O'Connell Street Lower | 6.5 m |
| 50010523 / 50010524 — 30 / 31 O'Connell Street Lower | 6.5 m |
| 50010504 / 50010505 — 51 / 50 O'Connell Street Lower | 6.6 m |
| 50010536 / 50010537 — 3 / 4 O'Connell Street Upper | 6.7 m |
| 50010497 / 50010498 — 38 / 39 Henry Street | 7.4 m |
| 50010521 / 50010522 — 28 / 29 O'Connell Street Lower | 7.6 m |
| 50010533 / 50010534 — 62 / 61 O'Connell Street Upper | 7.7 m |
| 50010540 / 50010541 — 58 / 57 O'Connell Street Upper | 7.8 m |
| 50010534 / 50010535 — 61 / 60 O'Connell Street Upper | 7.9 m |

The complete 89-pair list remains in `audit/batch-096-50-candidate-reconciliation.json`; no proximity finding has been suppressed.

## Page holds and source anomalies

Eight candidates remain on HOLD because canonical individual pages were not independently verified:
50010494, 50010497, 50010498, 50010499, 50010507, 50010508, 50010517 and 50010520.

The selected national CSV rows contain 36 blank NAME values and 33 rows with U+FFFD replacement characters somewhere in raw values; these groups overlap. Four malformed/date-like NUMBER values are preserved: 50010509 (`06-Jul`), 50010511 (`03-Apr`), 50010517 (`Dec-13`) and 50010538 (`05-Jun`).

## Outcome

**No unexplained exact duplicate or blocking identity conflict remains.** The one same-name pair is two separately registered Bank of Ireland buildings at different street numbers. The two monuments and six monument-to-archive relationships have narrowly documented distinct-object evidence. The ten proximity hits and 89 candidate pairs are neighbouring structures, monuments or street fixtures, not duplicate identities.

The review does not establish field verification, coordinate accuracy, current access, or photography permission. No production records are created or merged.
