# Batch 091 — proximity review

**Batch:** 091 (25-record NIAH scale-up pilot)  
**Review date:** 24 November 2026  
**Scope:** Coordinate proximity findings from successful quality run 45455964118.

## Review method

The 30-metre screen is a conservative review trigger, not a duplicate rule. Each finding was compared by registration identity and address. A nearby centroid does not establish that two records describe the same structure. The national NIAH WGS84 coordinates are source-derived centroids with unspecified positional accuracy; they are not field GPS.

The automated report found:
- zero exact registration conflicts;
- zero exact normalized address conflicts;
- zero exact name matches;
- zero source-ID conflicts;
- nine candidate-to-existing-archive proximity hits;
- 38 candidate-to-candidate proximity pairs.

## Candidate-to-existing archive proximity

| Candidate | Nearby archive record | Distance | Review |
|---|---|---:|---|
| 50010250 — Duffy’s Fabrics, 27 Earl Street North | DUB-BLD-0334 — 23–24 Earl Street North | 23.0 m | Distinct street numbers and NIAH registrations |
| 50010251 — The Earl Bakery and Restaurant, 26 Earl Street North | DUB-BLD-0334 — 23–24 Earl Street North | 16.1 m | Distinct street numbers and NIAH registrations |
| 50010252 — Madigan’s Bar, 25 Earl Street North | DUB-BLD-0334 — 23–24 Earl Street North | 10.3 m | Distinct street numbers and NIAH registrations |
| 50010253 — Boyer’s Department Store, 19–22 Earl Street North | DUB-BLD-0334 — 23–24 Earl Street North | 19.9 m | Distinct street numbers and NIAH registrations |
| 50010254 — 14 North Earl Street | DUB-BLD-0006 — 23 Marlborough Street | 28.4 m | Different street/address |
| 50010254 — 14 North Earl Street | DUB-BLD-0333 — 89 Marlborough Street | 28.8 m | Different street/address |
| 50010257 — Bonavox Hearing Aids, 9 Earl Street North | DUB-BLD-0334 — 23–24 Earl Street North | 27.8 m | Different address; candidate remains held for individual-page verification |
| 50010262 — 92 Marlborough Street | DUB-BLD-0006 — 23 Marlborough Street | 22.9 m | Distinct street numbers and NIAH registrations |
| 50010263 — 93 Marlborough Street | DUB-BLD-0006 — 23 Marlborough Street | 25.4 m | Distinct street numbers and NIAH registrations |

## Candidate-to-candidate proximity

All 38 pairs are retained in the machine-generated reconciliation report. Each pair has a distinct NIAH registration number and a separately stated address in the candidate manifest. These are neighbouring buildings and street-frontage records in a dense urban area, not evidence of duplicate identity.

The closest reported pairs are:
- 50010256 / 50010257 — 5.9 m
- 50010266 / 50010267 — 6.0 m
- 50010262 / 50010263 — 6.5 m
- 50010250 / 50010251 — 6.9 m
- 50010249 / 50010250 — 7.4 m

The remaining pairs are preserved without suppression in `audit/batch-091-25-candidate-reconciliation.json`.

## Outcome

**No proximity finding is classified as an exact duplicate.** The nine existing-archive hits and 38 candidate pairs are classified as distinct neighbouring records on registration/address evidence. No records are merged or removed.

Registration **50010257 remains on HOLD** because its canonical individual NIAH page has not been independently verified. This page-verification hold is separate from the proximity assessment.

This review does not confer field verification, positional accuracy, present-day access status, or photography permission. No publication or production import is authorized by this review.
