# Batch 095 — 50-record proximity and identity review

**Batch:** 095  
**Quality run:** 45461228598  
**Review date:** 24 November 2026

## Automated identity results

- Exact registration conflicts: 0
- Exact address conflicts against existing archive objects: 0
- Exact name matches against existing archive objects: 0
- Existing NIAH source-ID conflicts: 0
- Same-batch exact address conflicts: 0
- Same-batch exact-name matches: 1 pair
- Existing-archive proximity hits within 30 m: 3
- Candidate-to-candidate proximity pairs within 30 m: 95
- Explicit shared-address distinct-structure exception: 50010456 / 50010457

## Same-name pair review

| Registrations | Shared display name | Separate NIAH addresses | Assessment |
|---|---|---|---|
| 50010459 / 50010461 | Todd Burns and Company | Jervis Street / Mary Street corner department store; 18–21 Mary Street façade | Distinct separately registered buildings. 50010459 is the large c.1902–05 department store with dome; 50010461 is the separate c.1910 nine-bay, two-storey commercial façade retained in the Jervis Centre development |

The same business name reflects the historical department-store operator, not a duplicate building identity. Both records retain separate registration numbers and addresses.

## Shared Jervis Street site address

Registrations 50010456 and 50010457 share the broad queue address “Jervis Street”. Their canonical NIAH records describe separate structures:
- 50010456 is an attached three-bay, four-storey c.1730 Georgian house, now retained as a fire-exit façade within the Jervis Centre.
- 50010457 is a separate nine-bay, four-storey former Jervis Street Charitable Infirmary, built 1884–87, now retained as apartments.

The exact reciprocal exception is recorded in the manifest and reconciliation report. It is limited to this pair only.

## Existing-archive proximity review

| Candidate | Existing archive object | Distance | Assessment |
|---|---|---:|---|
| 50010455 — Edward Lee and Company, 48 Mary Street / Jervis Street | DUB-STR-0008 — early Free State twin-slot post box, Jervis Street | 15.7 m | Separate commercial building and street fixture |
| 50010459 — Todd Burns and Company, Jervis Street / Mary Street | DUB-STR-0008 — early Free State twin-slot post box, Jervis Street | 7.2 m | Separate department store and street fixture |
| 50010460 — 17 Mary Street | DUB-STR-0008 — early Free State twin-slot post box, Jervis Street | 29.2 m | Separate numbered building and street fixture |

None is an exact address match. The 30-metre screen is a conservative review trigger, not a duplicate rule.

## Candidate-to-candidate proximity review

All 95 machine-reported pairs were checked against the candidate manifest and official queue addresses. No pair has an exact normalized address match. The nearest examples are adjacent Capel Street, Henry Street, Moore Street and Liffey Street properties:

| Pair | Distance |
|---|---:|
| 50010444 / 50010445 — 140 / 141 Capel Street | 4.7 m |
| 50010466 / 50010467 — 24 / 25 Liffey Street Upper | 5.8 m |
| 50010439 / 50010440 — 132 / 133 Capel Street | 6.0 m |
| 50010442 / 50010443 — 136 / 137 Capel Street | 6.0 m |
| 50010474 / 50010475 — 20 / 21 Henry Street | 6.1 m |
| 50010440 / 50010441 — 133 / 134–135 Capel Street | 6.3 m |
| 50010471 / 50010472 — 16 / 17 Henry Street | 6.8 m |
| 50010483 / 50010484 — 6 / 7 Moore Street | 6.9 m |
| 50010435 / 50010436 — 39 / 40–41 Capel Street | 7.5 m |
| 50010475 / 50010476 — 21 / 22–23 Henry Street | 7.6 m |
| 50010481 / 50010482 — Moore Street junction / 2 Moore Street | 8.0 m |
| 50010436 / 50010437 — 40–41 / 42 Capel Street | 8.6 m |
| 50010438 / 50010439 — 129–131 / 132 Capel Street | 8.7 m |
| 50010486 / 50010487 — 60–61 / 59 Moore Street | 8.8 m |
| 50010485 / 50010486 — 62 / 60–61 Moore Street | 9.4 m |

The complete 95-pair list remains in `audit/batch-095-50-candidate-reconciliation.json`; no finding has been suppressed. These are neighbouring properties with separate registrations and address evidence.

## Page holds and source anomalies

Nine candidates remain on HOLD because canonical individual pages have not been independently verified:
50010435, 50010437, 50010444, 50010450, 50010451, 50010484, 50010485, 50010488 and 50010489.

The selected national CSV rows contain 23 blank NAME values and 43 rows with U+FFFD replacement characters somewhere in the raw fields; the two groups overlap. Two NUMBER fields are malformed/date-like: 50010450 (`06-Sep`) and 50010470 (`Jul-15`). Raw source values are preserved.

## Outcome

**No unexplained exact duplicate or blocking identity conflict was found.** The one same-name pair is two distinct Todd Burns buildings; the 50010456/57 shared-address pair is two distinct structures; the three existing-archive proximity hits are buildings near a street fixture; and all 95 candidate proximity pairs have distinct address identities.

This review does not establish field verification, coordinate accuracy, current access, or photography permission. No production records are created or merged.
