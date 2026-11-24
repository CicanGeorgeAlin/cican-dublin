# Batch 092 — 50-record proximity review

**Batch:** 092  
**Quality run:** 45456643007  
**Review date:** 24 November 2026

## Automated duplicate results

- Exact registration conflicts: 0
- Exact address conflicts against existing archive objects: 0
- Exact name matches against existing archive objects: 0
- Existing NIAH source-ID conflicts: 0
- Same-batch exact address matches: 0
- Same-batch exact name matches: 0
- Documented shared-site relationship: 50010286 / 50010287 only

The 30-metre coordinate screen returned 10 candidate-to-existing-archive hits and 89 candidate-to-candidate pairs. Proximity is a review trigger, not a duplicate rule. National NIAH coordinates are source-derived point centroids with unspecified positional accuracy, not field GPS.

## Existing archive proximity review

| Candidate | Nearby archive object | Distance | Assessment |
|---|---|---:|---|
| 50010275 — Munster and Leinster Bank | DUB-STR-0009 — O'Connell Street Lower post box | 22.3 m | Separate registered building and street fixture |
| 50010280 — Photocare, 31 Lower Abbey Street | DUB-STR-0158 — 110 Marlborough Street pavement light | 22.8 m | Different address; building versus pavement fixture |
| 50010281 — Club Travel, 30 Lower Abbey Street | DUB-STR-0158 — 110 Marlborough Street pavement light | 19.0 m | Different address; building versus pavement fixture |
| 50010282 — Budget Travelshop, 29 Lower Abbey Street | DUB-STR-0158 — 110 Marlborough Street pavement light | 17.1 m | Different address; candidate remains held for page verification |
| 50010283 — 109 Marlborough Street | DUB-STR-0158 — 110 Marlborough Street pavement light | 7.5 m | Different street number; building versus pavement fixture |
| 50010285 — 111 Marlborough Street | DUB-STR-0158 — 110 Marlborough Street pavement light | 6.8 m | Different street number; candidate remains held for page verification |
| 50010288 — Age Action, 12B Lower Abbey Street | DUB-STR-0007 — Lower Abbey Street post box | 27.2 m | Separate registered building and street fixture |
| 50010302 — Liberty Hall | DUB-STR-0053 — Beresford Place post box | 9.8 m | Separate registered building and street fixture |
| 50010318 — Hopkins and Hopkins | DUB-MON-0001 — O'Connell Monument | 28.6 m | Separate registered building and monument |
| 50010321 — Kapp and Peterson | DUB-MON-0001 — O'Connell Monument | 28.5 m | Separate registered corner building and monument |

## Candidate-to-candidate proximity review

All 89 machine-reported pairs were reviewed against the manifest's individual registration numbers and display addresses. No pair has an exact address match; each pair refers to separately registered neighbouring buildings or heritage structures. The closest examples include:

| Pair | Distance |
|---|---:|
| 50010309 / 50010310 | 6.1 m |
| 50010323 / 50010324 | 6.1 m |
| 50010307 / 50010308 | 6.2 m |
| 50010322 / 50010323 | 6.3 m |
| 50010281 / 50010282 | 6.5 m |
| 50010325 / 50010326 | 6.5 m |
| 50010314 / 50010315 | 6.6 m |
| 50010280 / 50010281 | 6.7 m |
| 50010313 / 50010314 | 6.7 m |
| 50010305 / 50010306 | 6.9 m |

The complete list remains in `audit/batch-092-50-candidate-reconciliation.json`; no proximity hit has been suppressed.

## Shared address exception

50010286 (Scots Presbyterian Hall) and 50010287 (Scots Presbyterian Church) share the Lower Abbey Street / Old Abbey Street site address. Their individual NIAH records identify separate connected structures and separate registrations. The manifest records this exact reciprocal relationship; it is not generalized to any other pair.

## Outcome

**No exact duplicate or blocking identity conflict was found.** The proximity findings are classified as neighbouring records, not duplicates. Four page-verification holds remain: 50010282, 50010285, 50010298 and 50010309. These are not eligible for publication until canonical individual NIAH pages are verified.

No archive records are merged or created by this review. No candidate is marked field verified, and no photography or access permission is inferred.
