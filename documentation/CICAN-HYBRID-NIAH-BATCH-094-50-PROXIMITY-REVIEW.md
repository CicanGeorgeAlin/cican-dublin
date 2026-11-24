# Batch 094 — 50-record proximity and identity review

**Batch:** 094  
**Quality run:** 45460330870  
**Review date:** 24 November 2026

## Automated identity checks

- Exact registration conflicts: 0
- Exact address conflicts against existing archive objects: 0
- Exact name matches against existing archive objects: 0
- Existing NIAH source-ID conflicts: 0
- Same-batch exact address conflicts: 0
- Same-batch exact-name matches: 2 pairs
- Existing archive proximity hits within 30 m: 4
- Candidate-to-candidate proximity pairs within 30 m: 128

No exact identity conflict blocks the batch. The two same-name pairs and all proximity findings were checked against the individual registration numbers and street addresses.

## Same-name pair review

| Registrations | Shared display name | Separate NIAH addresses | Assessment |
|---|---|---|---|
| 50010400 / 50010401 | Independent House | 91–92 Middle Abbey Street / 87–90 Middle Abbey Street | Distinct separately registered buildings; the latter is the main Independent House and the former is its separately described extension |
| 50010409 / 50010410 | Today FM | 123–124 Upper Abbey Street / 125 Upper Abbey Street | Distinct separately registered houses within the same former radio-studio terrace |

The repeated names are not treated as duplicate identities. Both pairs retain their individual registrations and address evidence.

## Existing-archive proximity review

| Candidate | Existing archive object | Distance | Assessment |
|---|---|---:|---|
| 50010392 — Ana Liffey Drug Project, 51 Middle Abbey Street | DUB-BLD-0036 — 50 Middle Abbey Street | 7.9 m | Adjacent numbered properties; distinct addresses and registrations |
| 50010394 — 48 Middle Abbey Street | DUB-BLD-0036 — 50 Middle Abbey Street | 11.9 m | Different street number; neighbouring properties |
| 50010395 — 47 Middle Abbey Street | DUB-BLD-0036 — 50 Middle Abbey Street | 17.5 m | Different street number; neighbouring properties |
| 50010408 — 94 Marlborough Street | DUB-BLD-0006 — 23 Marlborough Street | 28.6 m | Different street number; separate property |

None of the four proximity hits is an exact address match. The 30-metre screen is a conservative review trigger, not a duplicate rule.

## Candidate-to-candidate proximity review

All 128 machine-reported pairs were checked against the manifest and the official queue addresses. No pair has an exact normalized address match. The nearest examples are adjacent street-frontage records:

| Pair | Distance |
|---|---:|
| 50010429 / 50010430 — 29 / 31 Capel Street | 3.6 m |
| 50010417 / 50010418 — 12 / 13 Capel Street | 5.0 m |
| 50010420 / 50010421 — 15 / 16 Capel Street | 5.1 m |
| 50010419 / 50010420 — 14 / 15 Capel Street | 5.2 m |
| 50010430 / 50010431 — 31 / 32 Capel Street | 5.2 m |
| 50010414 / 50010415 — 9 / 10 Capel Street | 5.3 m |
| 50010428 / 50010429 — 28 / 29 Capel Street | 5.3 m |
| 50010415 / 50010416 — 10 / 11 Capel Street | 5.4 m |
| 50010421 / 50010422 — 16 / 17 Capel Street | 5.4 m |
| 50010422 / 50010423 — 17 / 18 Capel Street | 5.4 m |
| 50010426 / 50010427 — 25 / 26 Capel Street | 5.5 m |
| 50010388 / 50010389 — 61 / 60 Middle Abbey Street | 5.6 m |
| 50010394 / 50010395 — 48 / 47 Middle Abbey Street | 5.6 m |
| 50010384 / 50010385 — 65 / 64 Middle Abbey Street | 5.7 m |
| 50010433 / 50010434 — 37 / 38 Capel Street | 5.8 m |

The complete 128-pair list remains in `audit/batch-094-50-candidate-reconciliation.json`; no finding has been suppressed. These are neighbouring properties, not evidence that two registrations describe the same building.

## Page holds and source anomalies

Four candidates remain held because a canonical individual NIAH page was not independently located:
- 50010385 — House of Colour
- 50010389 — J.J. Lalor Ltd Printers
- 50010411 — T. P. Smith's
- 50010427 — CASA

The official CSV includes 10 blank NAME fields and 30 rows with U+FFFD replacement characters somewhere in their raw values. These conditions can overlap. Registration 50010411 also has the malformed/date-like NUMBER value `09-Oct`. Raw values are preserved; no silent repairs are made.

## Outcome

**No exact duplicate or blocking identity conflict was found.** The four existing-archive proximity hits and 128 candidate proximity pairs are distinct neighbouring records on address and registration evidence. The two same-name pairs are separately registered properties and remain separate.

This review does not establish field verification, positional accuracy, current occupancy/access, or permission to reuse NIAH photographs. No production records are created or merged.
