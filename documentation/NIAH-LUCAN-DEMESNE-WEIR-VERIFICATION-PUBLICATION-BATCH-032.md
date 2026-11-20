# CICAN Dublin — NIAH Lucan Demesne Weir Verification & Publication Batch 032

**Date:** 20 November 2026  
**Scope:** NIAH-only Stage 1; Lucan Demesne, Lucan, County Dublin  
**Outcome:** One individual NIAH registration fully passed the page, national CSV, duplicate and provenance checks and was added to production.

## 1. Batch summary

| Measure | Result |
|---|---:|
| Individual NIAH record pages checked | 1 |
| Official national CSV rows matched by exact REG_NO | 1 |
| New master objects | 1 |
| New public NIAH records | 1 |
| New official source records | 1 |
| New visual-workflow records | 1 |
| Exact duplicate registration matches before import | 0 |
| Founder photographs / field verifications | 0 |
| NIAH photographs reused | 0 |

This batch intentionally contains one record only. Other nearby candidates appeared in official search results, but their individual record pages were not all retrieved and checked in this pass. They remain in the candidate queue and were not promoted.

## 2. Verified registration

| NIAH registration | CICAN ID | Official record | Rating | Date range |
|---|---|---|---|---|
| 11201017 | DUB-INF-0205 | Lucan Demesne — weir | Regional | 1770–1800 (c.1785) |

The individual Buildings of Ireland page identifies:
- Original use and in-use type: weir.
- Special interest: Architectural and Technical.
- Date recorded: 25 April 2002.
- Description: single-stage weir of coursed and uncoursed limestone rubble, with a central dressed-stone spine and a north-side sluice groove for former gates.
- Appraisal: unusual late-eighteenth-century structure, partly formed using river bedrock, probably serving a mill on the north bank; described by NIAH as the last remnant of that mill.

The national CSV row matched by exact REG_NO identifies South Dublin County Council, the NIAH Survey of South Dublin County 2002, Regional rating, and the same description/appraisal.

## 3. Coordinate provenance

The official national CSV supplies:
- ITM (EPSG:2157): E 702113, N 735363.
- WGS84: latitude 53.358603, longitude -6.465972.

The individual NIAH page displays the coordinate pair 302169, 235339 without labelling its CRS. That pair is retained only as an observation in this report and is not used for map placement or transformed. The production map uses the explicit WGS84 fields from the official CSV row.

NIAH metadata warns that source centroids were digitised relative to OSI 6-inch mapping and may require revision against larger-scale mapping. Positional accuracy is unspecified. The record is marked SOURCE_DERIVED, not founder GPS.

## 4. Fieldwork and image-rights controls

- Exact registration 11201017 was absent from the complete pre-batch master catalogue, public NIAH collection and source registry.
- The new record is PARTIALLY_VERIFIED: its official register identity and source fields are verified, but present survival, condition, exact on-site position and access are not field-verified.
- Access remains NOT ASSESSED. The weir is a watercourse structure; photography must be from a safe, lawful public vantage point. Do not enter the water, climb onto the weir, cross barriers or approach unstable/wet banks.
- No NIAH-linked image was reused. The dataset's CC BY 4.0 record-data licence is not assumed to cover separately linked photographs.
- One visual workflow entry was created. Founder photography is still required before line art or gallery publication.

## 5. Post-import totals

| Dataset | Before Batch 032 | After Batch 032 |
|---|---:|---:|
| Master catalogue | 568 | **569** |
| Public NIAH collection | 448 | **449** |
| Registered sources | 686 | **687** |
| Visual inventory records | 568 | **569** |
| Records with at least one reference image | 108 | **108** |
| Founder original photographs | 0 | **0** |

The four-authority NIAH Building Survey denominator remains 7,535. The public collection contains 449 exact-matched registrations, leaving **7,086** official registrations for review. Exact registration reconciliation is 449 / 7,535 = **6.0%**. This is not full research, fieldwork or photography completion.

The coverage audit now reconciles to 569 catalogue objects and 569 settlement/townland work-zone counts. Lucan, County Dublin rises from 18 to 19. These work-zone labels are not point-in-polygon local-authority assignments.

## 6. Official sources

- Individual NIAH record: https://www.buildingsofireland.ie/buildings-search/building/11201017/lucan-demesne-lucan-dublin
- NIAH Data Download page: https://www.buildingsofireland.ie/niah-data-download/
- Official national NIAH dataset: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset
- National CSV audit artifact workflow: https://github.com/CicanGeorgeAlin/cican-dublin/actions/runs/44746276279

## 7. Next operation

Continue from the official missing-registration queue. The next nearby Cooldrinagh candidates include 11201008, 11201009, 11201013, 11201015 and 11201016. They appeared in the official NIAH search listing, but remain held until each individual page and its matching CSV row are checked and reconciled. Do not treat a search-result snippet as a substitute for a complete individual record.

**Production scope:** one NIAH-only master object, public record, official source entry and visual-workflow entry. The existing GitHub Pages workflow regenerates the individual SEO place pages and sitemap. No map-app redesign was made.
