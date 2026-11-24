# Batch 098 — 50-record proximity and identity review

**Batch:** 098  
**Quality run:** 45463798697  
**Review date:** 24 November 2026

## Automated identity results

- Exact registration conflicts: 0
- Exact address conflicts against existing archive objects: 0
- Exact name matches against existing archive objects: 0
- Existing NIAH source-ID conflicts: 0
- Same-batch exact address conflicts remaining after the narrow Rotunda exception: 0
- Same-batch exact-name matches: 5 pairs
- Existing-archive proximity hits within 30 m: 1
- Candidate-to-candidate proximity pairs within 30 m: 103
- Documented same-address distinct-structure relationship: 50010619 / 50010620

## Rotunda Hospital identity review

Five same-name pairs are reported because four separately registered buildings share the “Rotunda Hospital” display name. They are distinct structures within one hospital campus:

| Registration | Structure | NIAH description |
|---|---|---|
| 50010619 | Main Rotunda Hospital | Attached eleven-bay three-storey hospital, built 1751–57 to designs by Richard Castle and executed by John Ensor |
| 50010620 | Hospital wing | Separate attached ten-bay four-storey wing, built 1906 to designs by Albert E. Murray |
| 50010621 | Corner hospital building | Separate corner-sited four-storey hospital building, built 1895 to designs by Albert E. Murray |
| 50010622 | Former nurses' home | Separate four-storey H-plan nurses' home, built 1895, with a later 1951 top-floor addition |

The five same-name pairs among these four registrations are not duplicate identities. Each registration has a separate architectural description and physical building component. The exact reciprocal shared-address exception for 50010619 / 50010620 is limited to that pair because both have the same broad “Parnell Street” queue address; the remaining structures have distinct queue addresses.

## Existing-archive proximity review

| Candidate | Existing archive object | Distance | Assessment |
|---|---|---:|---|
| 50010614 — Parnell Street / O'Connell Street Upper commercial corner building | DUB-STR-0005 — Four Victorian cast-iron bollards, north end of O'Connell Street | 28.7 m | Separate commercial building and street fixtures |

The single proximity hit is not an exact address match. The 30-metre screen is a conservative review trigger, not a duplicate rule.

## Candidate-to-candidate proximity review

All 103 machine-reported pairs were checked against the official queue and manifest addresses. No pair has an exact normalized address match. The closest examples are neighbouring properties:

| Pair | Distance |
|---|---:|
| 50010601 / 50010602 — 83 / 84 Capel Street | 4.1 m |
| 50010599 / 50010600 — 81 / 82 Capel Street | 4.6 m |
| 50010600 / 50010601 — 82 / 83 Capel Street | 4.6 m |
| 50010608 / 50010609 — 58 / 59 Bolton Street | 6.0 m |
| 50010631 / 50010632 — 48 / 47 Parnell Square West | 6.1 m |
| 50010605 / 50010606 — 85 Capel Street / King Street North corner | 6.3 m |
| 50010623 / 50010624 — 59 / 58 Parnell Square West | 6.5 m |
| 50010632 / 50010633 — 47 / 46 Parnell Square West | 6.9 m |
| 50010624 / 50010625 — 58 / 57 Parnell Square West | 7.1 m |
| 50010627 / 50010628 — 55 / 54 Parnell Square West | 7.1 m |
| 50010607 / 50010608 — 57 / 58 Bolton Street | 7.2 m |
| 50010628 / 50010629 — 54 / 53 Parnell Square West | 7.3 m |
| 50010629 / 50010630 — 53 / 52 Parnell Square West | 7.3 m |
| 50010626 / 50010627 — 56 / 55 Parnell Square West | 7.5 m |
| 50010633 / 50010634 — 46 / 45 Parnell Square West | 7.5 m |
| 50010625 / 50010626 — 57 / 56 Parnell Square West | 8.0 m |
| 50010647 / 50010648 — 32 / 31 Parnell Square West | 8.6 m |
| 50010648 / 50010649 — 31 / 30 Parnell Square West | 8.6 m |
| 50010600 / 50010602 — 82 / 84 Capel Street | 8.7 m |
| 50010634 / 50010635 — 45 / 44 Parnell Square West | 8.7 m |
| 50010635 / 50010636 — 44 / 43 Parnell Square West | 8.7 m |
| 50010638 / 50010639 — 41 / 40 Parnell Square West | 9.0 m |
| 50010642 / 50010643 — 37 / 36 Parnell Square West | 9.0 m |
| 50010599 / 50010601 — 81 / 83 Capel Street | 9.1 m |
| 50010643 / 50010644 — 36 / 35 Parnell Square West | 9.2 m |

The complete 103-pair list remains in `audit/batch-098-50-candidate-reconciliation.json`; no proximity finding has been suppressed. These are neighbouring street-frontage buildings with distinct registrations and addresses.

## Page holds and source anomalies

Twelve candidates remain on HOLD because canonical individual pages were not independently verified:
50010600, 50010601, 50010602, 50010604, 50010606, 50010608, 50010626, 50010629, 50010636, 50010641, 50010647 and 50010649.

The selected national CSV rows contain 35 blank NAME values and 29 rows with U+FFFD replacement characters somewhere in raw values; these groups overlap. No date-like NUMBER anomaly was identified.

## Outcome

**No exact duplicate or blocking identity conflict remains.** The five Rotunda same-name pairs are distinct registered structures in one hospital complex; the single existing-archive proximity hit is a building near street fixtures; and the 103 candidate proximity pairs are neighbouring records with distinct addresses.

This review does not establish field verification, coordinate accuracy, current access, or photography permission. No production records are created or merged.
