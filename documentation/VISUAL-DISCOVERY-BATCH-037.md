# VISUAL DISCOVERY BATCH 037 — Seville Place and Earlsfort Terrace Image Leads

**Date:** 28 October 2026  
**Repository:** https://github.com/CicanGeorgeAlin/cican-dublin  
**Mission:** LEAVE NO LOCATION BEHIND.

## 1. Live repository baseline

Fetched the live catalogue, visual-assets, sources, audit matrix and Batch 036/035 reports before research. The latest commit before this report was Batch 036, `066ef438c7ae2e05e68963ac4ce9663b15f0cf34`. No existing batches were overwritten.

| Measure | Live count before Batch 037 |
|---|---:|
| Catalogue objects | 195 |
| Visual records | 195 |
| Registered sources | 251 |
| Reference-image entries | 78 |
| OBJECT_PHOTOGRAPH references | 49 |
| STREET_CONTEXT references | 29 |
| Records with any reference image | 67 |
| Records with no reference images | 128 |
| Audit matrix data rows | 195 |

All three JSON files parsed. Visual record IDs matched catalogue IDs, there were no orphan visual records, and all image source references resolved to the source registry.

## 2. 6 Seville Place — DUB-BLD-0086

### Newly inspected property-photo lead

A current sales listing for 6 Seville Place, Dublin 1, contains 17 photographs:
https://www.property.ie/property-for-sale/6-Seville-Place-Dublin-1-Dublin-1/6659505/

The source page was opened and its image links followed. Three listing photographs were visually inspected:
- The main photograph shows the Victorian terrace and identifies the subject property with a red outline.
- A closer view shows the blue entrance door, shared granite entrance platform, steps and cast-iron railings.
- A rear view shows the property's rear plot and ancillary structures.

The NIAH record for 6 Seville Place, Reg. 50010046, describes the house as a c.1850 Victorian townhouse. It specifically records the shared granite platform, cast-iron bootscraper, ten granite steps, intermediate platform and original cast-iron railings:
https://www.buildingsofireland.ie/buildings-search/building/50010046/6-seville-place-dublin-1-dublin

The listing images are useful for identifying the present building and for planning a founder field visit. The visible front photograph does not provide a sufficiently clear, close view to verify the specific cast-iron bootscraper. The property listing is not a reuse licence; no photographer identity or commercial/print permission was established.

**Decision: visually inspected location/context lead only; not accepted as an archive image.** Do not download/reuse the listing images as archive assets without written permission from the photographer/rightsholder and listing platform as required. Founder field photography should include a full façade, entrance platform, bootscraper, railings and stair details.

## 3. 17 Earlsfort Terrace — DUB-BLD-0087 / NIAH 50110448

### Newly identified historical photographic record

The National Library of Ireland catalogue identifies a photograph titled “Houses on Earlsfort Terrace, Dublin, between Hatch Street Lower and Adelaide Road”:
https://catalogue.nli.ie/Record/vtls000269590

Catalogue metadata identifies:
- Creator: Michael S. Walker.
- Date: approximately 1970–1980.
- Coverage: Nos. 14–18, including “Stella Maris”, the private nursing home at No. 17.
- Format: one 35 mm colour slide.
- Rights note: reproduction rights owned by the National Library of Ireland.

The catalogue indicates that a digital copy is available, but the catalogue page returned HTTP 403 when opened in this research session. The photograph itself therefore could not be visually inspected. It cannot yet be confirmed that the slide clearly depicts the exact entrance fittings or pavement features recorded for No. 17.

The official NIAH Dublin Stage 4 Ministerial Recommendations describe No. 17 Earlsfort Terrace as a late-Victorian house with granite entrance steps, cast-iron boot-scrape, cast-iron balustrade, matching gate and a coal-hole cover set in a granite slab:
https://www.buildingsofireland.ie/app/uploads/2021/11/Dublin-City-Ministerial-Recommendations-November-2021.pdf

**Decision: historical context/access lead only.** Request a digital viewing copy and a reproduction quotation/licence from the National Library of Ireland. If the image is confirmed to include No. 17, it may provide valuable historical context, but it cannot be treated as a verified photograph of the bootscraper or coal-hole cover unless those exact details are legible.

## 4. Merrion Square coal-hole search — nearby objects rejected as substitutes

A Commons search surfaced several newly uploaded coal-hole photographs from Merrion Square South:
- Tonge & Taggart replacement coal-hole cover, camera location 53.338806, -6.250947: https://commons.wikimedia.org/wiki/File:Coal-hole_cover_Tonge_%26_Taggart_Dublin.jpg
- Sharkey Foundry replacement coal-hole cover, camera location 53.338654, -6.250317: https://commons.wikimedia.org/wiki/File:Coal-hole_cover_by_Sharkey_Church_Street.jpg

These are specifically described as replacement covers on Merrion Square South. They do not establish the identity or location of the archive's separate coal-hole target outside 46 Merrion Square East. They must not be substituted for that target.

The Commons category confirms these are among a small set of Dublin coal-hole files:
https://commons.wikimedia.org/wiki/Category:Coal_hole_covers_in_Dublin

**Decision: rejected as exact-object substitutes.** They may be useful comparative reference material for foundry marks and replacement-cover design, but not as photographs of the 46 Merrion Square East object. No archive data change.

## 5. 47 Hardwicke Street — DUB-BLD-0088 / DUB-STR-0077

The NIAH record for 47 Hardwicke Street, Reg. 50010889, describes a c.1810 Georgian townhouse with an encaustic-tiled entrance platform and wrought-iron bootscraper:
https://www.buildingsofireland.ie/buildings-search/building/50010889/47-hardwicke-street-dublin-1-dublin

This official description is useful for field verification, but the searches in this batch did not establish a new, visually inspected photograph with traceable photographer and compatible reuse rights.

**Decision: official descriptive evidence only; no image added.**

## 6. Rights and acceptance decisions

| Candidate | Visual inspection | Exact-object status | Rights status | Decision |
|---|---|---|---|---|
| 6 Seville Place listing images | Three images inspected | Building/façade visible; bootscraper not clearly verified | Listing reuse permission not established | Context/field lead only |
| 17 Earlsfort Terrace NLI slide | Not inspected; NLI page returned 403 | Coverage metadata includes No. 17; exact detail visibility unknown | Reproduction rights held by NLI | Access/permission lead only |
| Merrion Square South coal-hole covers | Commons metadata reviewed | Different pavement locations and replacement covers | Licence must be checked per file before reuse | Reject as target substitutes |
| 47 Hardwicke Street | Official NIAH description reviewed | No new photo verified | No new image rights established | No image added |

## 7. Repository changes

No image met all acceptance requirements in this batch.

No changes were made to:
- `data/objects.json`
- `data/visual-assets.json`
- `data/sources.json`
- `documentation/VISUAL-AUDIT-MATRIX-2026-10-27.csv`

This is a report-only batch. No new image reference was accepted.

## 8. Next actions

1. Contact the photographer/rightsholder and listing platform for permission before considering any 6 Seville Place listing image for archive use; prioritise founder originals of the bootscraper and entrance ironwork.
2. Request the digital scan and reproduction terms for the Michael S. Walker Earlsfort Terrace slide from the National Library of Ireland.
3. Keep the Merrion Square South replacement coal-hole images separate from the 46 Merrion Square East target.
4. Continue exact-object image discovery across the 128 locations without image references.
5. Continue distinguishing context photographs, object photographs, historical archive photographs and founder originals in all future batches.

## Conclusion

Batch 037 adds two actionable photographic leads: a visually inspected current listing for 6 Seville Place and a National Library of Ireland historical slide record covering Nos. 14–18 Earlsfort Terrace. Neither is cleared for archive reuse or sufficiently verified as a detail photograph of the target street furniture. Two Merrion Square South replacement covers were explicitly rejected as substitutes for the different 46 Merrion Square East object. No image references were added.

**LEAVE NO LOCATION BEHIND.**
