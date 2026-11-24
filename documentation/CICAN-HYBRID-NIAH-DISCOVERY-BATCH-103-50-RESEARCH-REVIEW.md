# CICAN Dublin — NIAH Batch 103 (50-record normal batch)

**Status:** research-only; twelfth standard 50-record batch.

## Selection and official queue

The batch contains the first 50 Dublin City Council / County Dublin entries after Batch 102's final registration 50010862 in the refreshed four-authority NIAH missing-registration queue.

- Exactly 50 unique registrations, each required to occur exactly once in the refreshed queue.
- Selected queue range begins at 50010863 and ends at 50010916, retaining official gaps.
- Areas include Gardiner Place, Temple Street, George's Place, Gardiner Street Upper, Frederick Street North, Hardwicke Street and Parnell Square North.

## Individual NIAH page status

44 canonical individual pages have been located and checked against their registration numbers. Six remain on HOLD:

| Registration | Candidate | Hold reason |
|---|---|---|
| 50010865 | 9 Gardiner Place | Canonical individual page not independently located |
| 50010867 | 7 Gardiner Place | Canonical individual page not independently located |
| 50010869 | 5 Gardiner Place | Canonical individual page not independently located |
| 50010893 | 1 Hardwicke Street / Frederick Street North | Canonical individual page not independently located |
| 50010903 | 8 Frederick Street North | Canonical individual page not independently located |
| 50010908 | 3 Frederick Street North | Canonical individual page not independently located |

The national CSV legacy URLs are preserved for these six but do not count as canonical individual-page verification.

## Source anomalies and display rules

- 37 selected rows have blank raw CSV NAME values. Raw blanks are retained; verified official page titles are stored separately where available.
- 19 selected rows contain U+FFFD replacement characters somewhere in raw national CSV values. This overlaps the blank-name group.
- No selected NUMBER field was identified as malformed/date-like.
- For 50010874 and 50010875, the national CSV has the same institution name, Temple Street Children's University Hospital. The individual page title for 50010874 identifies the chapel; the two separate title fields are preserved.
- For 50010904 and 50010905, the national CSV has the same Harry Clarke Stained Glass Limited / Joshua Clarke & Sons name at 7 and 6 Frederick Street North. The two addresses and individual page titles remain separate.
- The reconciliation report preserves raw CSV NAME, NUMBER and street fields separately from display headings.

## Related but distinct structures

- 50010874 is the Temple Street Children's University Hospital chapel; 50010875 is the separate hospital building at 14–15 Temple Street. They share an institutional name but are separately registered structures.
- 50010876 (Saint George's Parochial Hall) and 50010878 (Saint George's Church) are separate structures on the George's Place / Hardwicke Place site.
- 50010877 is the presbytery at 54 Gardiner Street Upper. It is a separate structure from the Catholic Church of Saint Francis Xavier church building, registration 50010824, researched in Batch 102. This cross-batch relationship is recorded explicitly; the presbytery is not treated as a second copy of the church.
- 50010904 and 50010905 are separately registered neighbouring buildings at 7 and 6 Frederick Street North, both historically associated with Harry Clarke Stained Glass / Joshua Clarke & Sons. Their shared business name does not collapse the two properties.

## Automated reconciliation

`scripts/reconcile-niah-batch-103-50.mjs` verifies:
- exactly 50 unique candidates;
- exact membership in the refreshed official four-authority queue;
- Dublin City Council / County Dublin scope;
- WGS84 and ITM coordinate presence and plausible bounds;
- canonical individual-page status;
- exact registration, address, source-ID and same-batch address conflicts;
- exact-name matches and 30-metre proximity against the existing archive and within the batch;
- raw CSV anomalies and page holds.

The report is written to `audit/batch-103-50-candidate-reconciliation.json`. Unexplained exact identity conflicts block the batch. Proximity and exact-name matches remain visible for manual review.

## Publication boundary

Research-only. No permanent archive IDs, master objects, public NIAH register entries, source records, visual records, map pins or SEO pages are created. Coordinates remain source-derived, not founder GPS or field verified. No NIAH photographs are reused.

## Proximity review outcome

The full reconciliation returned **zero exact registration conflicts, zero exact address conflicts, zero source-ID conflicts and zero unexplained same-batch exact-address conflicts**. Two same-name pairs remain explicitly distinct by address and registration:

- 50010874 (hospital chapel) and 50010875 (hospital building at 14–15 Temple Street).
- 50010904 (7 Frederick Street North) and 50010905 (6 Frederick Street North), separately registered neighbouring properties associated with the same stained-glass business.

The 125 candidate-to-candidate pairs within 30 metres were reviewed as close neighbouring buildings along the selected Gardiner Place, Frederick Street North, Hardwicke Street and Parnell Square North streetscapes, plus the Temple Street hospital site. Proximity is a review trigger, not evidence that two registrations describe the same object. The 16 hits against existing archive objects all relate to the existing 47 Hardwicke Street building and its entrance bootscraper; selected records at 48 Hardwicke Street and nearby Frederick Street North are neighbouring structures. The corner-sited 12C Frederick Street North / 48 Hardwicke Street relationship is retained as a connection/access relationship, not a merged identity.

No archive objects, visual records, map pins or source records are added by this research batch.

## Supplemental planning-document checks for the six page holds

A further search found independent planning documentation for three of the six held registrations. These sources are useful corroboration but are **not canonical individual NIAH pages**, so the manifest deliberately keeps all three `page_verified: false`.

- **50010903 — 8 Frederick Street North:** the Transport Infrastructure Ireland MetroLink Architectural Heritage report identifies this address and registration together (PDF lines 2824–2828). The separate NIAH listing extract filed in an An Bord Pleanála case also identifies No. 8 Frederick Street North at 50010903 (PDF lines 112–115). This supports the candidate address, but does not replace individual-page verification.
- **50010908 — 3 Frederick Street North:** the NIAH listing extract filed with An Bord Pleanála identifies No. 3 Frederick Street North at 50010908 (PDF lines 125–127). The TII report independently groups 2–5 Frederick Street North and includes 50010908 (PDF lines 2803–2807). The candidate remains held pending its canonical NIAH page.
- **50010893 — address conflict discovered:** the TII report associates 50010893 with **11 Frederick Street North** (PDF lines 2845–2849) and also with **1 Hardwicke Street** (PDF lines 3006–3009). These are different addresses. This is a material source conflict, not a harmless naming variation. The record remains held and must not be assigned to either address until the official individual NIAH record or another authoritative correction resolves it.

No independently useful corroborating page was located in this search for **50010865, 50010867 or 50010869** (9, 7 and 5 Gardiner Place respectively). They remain held without an alternative address claim.

Sources:
- TII MetroLink Architectural Heritage report: https://www.pleanala.ie/publicaccess/EIAR-NIS/314724/5_EIAR/Volume%203%20Environmental%20Baseline%20and%20Assessment/Chapter%2026%20Architectural%20Heritage.pdf
- NIAH listing extract filed with An Bord Pleanála: https://www.pleanala.ie/publicaccess/EIAR-NIS/302881/EIAR%20%26%20Screening/Volume%202/Appendix_5.3.1_NIAH%20Listing%20Extract.pdf?r=736119

**Hold count remains six.** The evidence status is refined, not promoted to canonical-page verification. No candidate is published or silently corrected.
