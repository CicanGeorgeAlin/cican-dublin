# VISUAL DISCOVERY BATCH 038 — Clonliffe Terrace and Georgian Entrance Photograph Leads

**Date:** 28 October 2026  
**Repository:** https://github.com/CicanGeorgeAlin/cican-dublin  
**Mission:** LEAVE NO LOCATION BEHIND.

## 1. Live baseline fetched before research

Fetched the current live catalogue, visual-assets, sources, audit matrix and Batch 037 report. Batch 037 remains the latest report before this batch; no earlier batch was overwritten.

| Measure | Live baseline |
|---|---:|
| Catalogue locations | 195 |
| Visual records | 195 |
| Registered sources | 251 |
| Image-reference entries | 78 |
| OBJECT_PHOTOGRAPH references | 49 |
| STREET_CONTEXT references | 29 |
| Records with at least one image reference | 67 |
| Records without image references | 128 |
| Audit matrix rows | 195 |

The JSON files parsed. Catalogue and visual record IDs matched; there were no orphan visual records, duplicate visual IDs or broken source references.

## 2. 238 Clonliffe Road — DUB-BLD-0082 / NIAH 50120194

### New historical streetscape image found and visually inspected

A planning Environmental Impact Assessment Report, Appendix A16, includes a photographic panel for “Clonliffe Terrace, 234, 236, 238 Clonliffe Road, Dublin 3” on printed Appendix A16 page 17 (PDF page index 18):
https://www.pleanala.ie/publicaccess/EIAR-NIS/317121/1.%20S51%20Application/EIAR%20%28incl%20NTS%20in%20Irish%29/Volume%204%20-%20Appendices/Vol%204%20Part%203/Ch.%2016%20Architectural%20Heritage/A16.1-A16.3.pdf

The page was opened as a PDF and the actual page image was visually inspected. It shows a wide streetscape view across the road, with the Clonliffe Terrace houses, a corner building and mature trees. The image is a genuine location-level reference for the terrace, but it is not a close-up. The page's own description identifies the protected-structure group as Nos. 234, 236 and 238; the image does not allow the specific No. 238 doorway, plaque, bootscraper, gate or coal-hole details to be verified confidently.

The official NIAH record independently identifies No. 238 as a c.1860 corner-sited end-of-terrace house with an inscribed granite street-name plaque, cast-iron bootscrape, wrought-iron railings and gate, granite platform and steps:
https://www.buildingsofireland.ie/buildings-search/building/50120194/238-clonliffe-road-dublin-3-dublin

The NIAH Dublin Stage 4 Ministerial Recommendations reproduce the description and identify the same registration number:
https://www.buildingsofireland.ie/app/uploads/2021/11/Dublin-City-Ministerial-Recommendations-November-2021.pdf

The EIAR is a public planning document, but its inclusion of a photograph does not itself establish an open or commercial reuse licence. The photographer, capture date and image-specific reproduction terms were not established in this pass.

**Decision: visually inspected STREET_CONTEXT / archival lead only; not added.** Seek permission from the planning report authors/rightsholder or create a founder-original full façade and detail set. Do not claim the image proves the condition of the individual fittings at No. 238.

## 3. 47 Hardwicke Street — DUB-BLD-0088 / NIAH 50010889

The official NIAH search result confirms a c.1810 three-bay Georgian townhouse over raised basement. Its description specifically records an encaustic-tiled entrance platform, wrought-iron bootscraper and two granite steps:
https://www.buildingsofireland.ie/buildings-search/building/50010889/47-hardwicke-street-dublin-1-dublin

A search for the exact address and registration number did not produce a newly verifiable photograph of No. 47. An image result for No. 3 Hardwicke Street is a different property and was rejected. A general Hardwicke Street architectural photograph cannot be substituted for No. 47's specific bootscraper and entrance.

The official NIAH page returned HTTP 403 when opened directly in this pass, preventing inspection of its individual survey photographs.

**Decision: no qualifying new image; no data change.** Continue with a founder-original entrance detail or an accessible, rights-cleared photograph explicitly identifying No. 47.

## 4. 6 Sherrard Street Upper — DUB-BLD-0089 / NIAH 50010744

The official NIAH record describes a c.1828 late-Georgian townhouse. It identifies the original timber door, petal fanlight, Ionic doorcase, granite platform, cast-iron bootscraper, railings and modern steel gate:
https://www.buildingsofireland.ie/buildings-search/building/50010744/6-sherrard-street-upper-dublin-1-co-dublin

Exact-address and registration-number searches did not establish a new photograph with verified source provenance and compatible reuse rights. The NIAH page returned HTTP 403 on direct opening, so the survey gallery could not be inspected in this pass.

**Decision: official descriptive lead only; no image added.**

## 5. 1 Pembroke Street Upper — DUB-STR-0079 / DUB-STR-0080 / NIAH 50930231

The official NIAH page was opened and inspected. It includes a survey image gallery, but both image links tested returned HTTP 403. The record itself describes a c.1825 former townhouse, now an embassy, with a granite entrance platform, cast-iron bootscraper, five granite steps, cast-iron railings and a pavement coal-hole cover:
https://www.buildingsofireland.ie/buildings-search/building/50930231/embassy-of-greece-1-pembroke-street-upper-dublin-2-dublin

This confirms the heritage features to be photographed, but the gallery images could not be visually checked or tested at original resolution. No permission for commercial reuse of the survey photographs was established.

**Decision: official survey-gallery lead only; no image added.** Request an accessible image and written reuse terms from NIAH/Department or photograph the entrance and pavement objects as founder originals.

## 6. Evidence and rejection register

| Candidate | What was inspected | What it proves | Decision |
|---|---|---|---|
| Clonliffe Terrace EIAR image | Actual PDF page image, printed p.17 | Historical streetscape for Nos. 234–238 as a group | Context lead; rights unresolved |
| 47 Hardwicke Street | NIAH search-result record; direct page 403 | Exact architectural description, not a usable image | No image |
| 6 Sherrard Street Upper | NIAH search-result record; direct page 403 | Exact architectural description, not a usable image | No image |
| 1 Pembroke Street Upper | NIAH page and two image links; both 403 | Exact building description; gallery inaccessible | No image |
| 3 Hardwicke Street search image | Search image result | Different address from No. 47 | Rejected as substitute |

## 7. Repository changes

No candidate met all required conditions for a new archive image reference. No data changes were made to:
- `data/objects.json`
- `data/visual-assets.json`
- `data/sources.json`
- `documentation/VISUAL-AUDIT-MATRIX-2026-10-27.csv`

This is a report-only batch. No image references were added.

## 8. Next research actions

1. Identify the EIAR photograph's author/photographer and request permission for any proposed archive use; retain it only as group-level context unless No. 238 can be positively identified in the frame.
2. Request NIAH survey image access and commercial/print reuse terms for 47 Hardwicke Street, 6 Sherrard Street Upper and 1 Pembroke Street Upper.
3. Prioritise founder-original photographs of the exact bootscrapers, fanlight, coal-hole cover, plaque, railings and full elevations.
4. Continue systematic image discovery across the 128 locations without image references.
5. Maintain the separation between exact-object photographs, context photographs, archival historical images and founder originals.

## Conclusion

Batch 038 found and visually inspected a genuine historical streetscape photograph covering the Clonliffe Terrace group, including No. 238. It is not a verified close-up of No. 238's specific entrance details and its reuse rights remain unresolved. The official NIAH records provide precise photographic targets for 47 Hardwicke Street, 6 Sherrard Street Upper and 1 Pembroke Street Upper, but the survey image files were inaccessible in this pass. No new image reference was accepted.

**LEAVE NO LOCATION BEHIND.**
