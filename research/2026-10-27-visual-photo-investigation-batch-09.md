# CICAN DUBLIN — Visual Photograph Investigation Batch 009

**Research date:** 27 October 2026  
**Scope:** First priority group of catalogue records without registered reference photographs.  
**Outcome:** NIAH identity and photographic leads recorded; no new photograph references added in this batch because the image-access and reuse checks were not sufficient to pass the archive's acceptance rules.

## Baseline at start of batch

- Catalogue records: 195
- Locations with registered reference photographs: 59
- Locations without registered reference photographs: 136
- Photograph references: 64
- Unique image URLs: 47
- Coverage: 30.3%

Coverage was recalculated directly from `data/objects.json` and `data/visual-assets.json`. The 64 references include repeated context images attached to related records; coverage is counted by distinct catalogue location, not by reference count.

## NIAH location matches investigated

| Catalogue record | NIAH reference | Research result | Photograph status |
|---|---|---|---|
| Old Detective Office, 1 Exchange Court (DUB-BLD-0004) | 50910280 | Exact named building record; detailed description identifies the former RIC barracks / detective office, doorcase, plaque and façade | Photo not accepted; image access not confirmed |
| Gardiner Street Upper Victorian pillar box (DUB-STR-0003) | 50010760 | Exact post-box record; c.1880, Queen Victoria cipher and A. Handyside & Co. maker's inscription | NIAH page gallery found; direct image request returned 403 |
| Marlborough Street Edwardian post box (DUB-STR-0004) | 50010238 | Exact post-box record; c.1905, Edward VII cipher, McDowall Steven & Co. maker's mark and granite kerbing | NIAH page gallery found; direct image request returned 403 |
| 23 Marlborough Street (DUB-BLD-0006) | 50010218 | Exact late-eighteenth-century townhouse record; c.1780, Flemish-bond brick façade and sash windows | NIAH page gallery found; direct image request returned 403 |
| 77 Marlborough Street (DUB-BLD-0007) | Not confirmed in this batch | A current Irish Times article search result includes a photograph captioned 77 Marlborough Street, credited to Chris Maddaloni | Copyrighted press-photo lead only; no reuse permission established |
| 82 Marlborough Street (DUB-BLD-0008) | 50010230 | Exact Georgian townhouse / gate-lodge record; c.1810, raised basement, fanlight, granite platform and railings | NIAH page surfaced; image access not confirmed |
| National Model Schools main school building (DUB-BLD-0010) | 50010223 | Exact 1902 school building record; seven-bay return, rendered façade, granite Doric doorcase and sash windows | NIAH page gallery found; direct image request returned 403 |
| Four Victorian bollards, north O'Connell Street (DUB-STR-0005) | 50010556 | Exact four-bollard record; c.1880, central mall, decorative pierced and scrolled cast iron | NIAH record found; image access not confirmed |
| Custom House Docks boundary wall, Commons Street (DUB-STR-0006) | 50060568 | Exact c.1830 limestone and granite boundary wall record behind Connolly Station | NIAH record found; image access not confirmed |
| Lower Abbey Street Edwardian post box (DUB-STR-0007) | 50010291 | Exact c.1905 Handyside post-box record, north side of Abbey Street Lower | NIAH record found in search; image access not confirmed |
| Jervis Street early Free State twin-slot box (DUB-STR-0008) | 50010458 | Exact c.1930 twin post-box record, east side of Jervis Street near Mary Street | NIAH record found in search; image access not confirmed |

## NIAH image endpoints identified

The NIAH page carousel exposed these candidate image URLs:

- Gardiner Street Upper, NIAH 50010760: `https://www.buildingsofireland.ie/building-images/niah/images/survey_specific/800/50010760_5.jpg`
- Marlborough Street post box, NIAH 50010238: `https://www.buildingsofireland.ie/building-images/niah/images/survey_specific/800/50010238_5.jpg`
- 23 Marlborough Street, NIAH 50010218: `https://www.buildingsofireland.ie/building-images/niah/images/survey_specific/800/50010218_13.jpg`
- National Model Schools, NIAH 50010223: `https://www.buildingsofireland.ie/building-images/niah/images/survey_specific/800/50010223_28.jpg`

The Buildings of Ireland record pages themselves were accessible, and their carousel showed image entries. Direct retrieval of the four linked image endpoints returned HTTP 403 through the research browser. This means the URL reachability requirement has not been passed for these image endpoints in this batch. They remain leads and are not in `data/visual-assets.json`.

## Copyright and reuse decision

The Buildings of Ireland terms state that website content may be used for educational or private purposes if NIAH is credited, and that commercial use requires prior written agreement from NIAH. The NIAH national dataset is separately published under CC BY 4.0; that dataset licence must not be assumed to cover every photograph displayed on the website.

For this project, the intended future colouring-book publication means that a photograph with unresolved commercial reuse permission must not be treated as a cleared publication asset. A source page may be cited as identification evidence while its photograph remains excluded from the registered visual gallery pending permission or an independently licensed alternative.

The 77 Marlborough Street press photograph is likewise only a discovery lead. The article credits photographer Chris Maddaloni; no image licence or permission for CICAN reuse was established.

## Other photographic source discovery

### National Library of Ireland — Marlborough Street records

Two additional NLI catalogue leads were identified:

- **HOG144 — “Car and carts outside Farrell's Carriage and Funeral Establishment, Marlborough Street, Dublin”**: W. D. Hogan, circa June/July 1922. The NLI/Flickr Commons description places the camera at the corner of present-day Marlborough Street and Cathal Brugha Street, looking south down Marlborough Street; Farrell's Undertakers at 66 Marlborough Street is visible behind the barricade. The matching Wikimedia Commons file is [Farrell's Barricade.jpg](https://commons.wikimedia.org/wiki/File:Farrell%27s_Barricade.jpg). Its page records “No known copyright restrictions”, the National Library of Ireland on The Commons as the source, W. D. Hogan as photographer, and camera coordinates 53.352437, -6.259138. The NLI catalogue record is https://catalogue.nli.ie/Record/vtls000207019 and the NLI Flickr item is https://www.flickr.com/photos/nlireland/38919259014/.
- **NPA WALK88 — “Traffic and shop fronts on Marlborough Street, Dublin”**: Michael S. Walker, 1972, one colour slide in the Michael S. Walker Photographic Collection. The NLI catalogue states that reproduction rights are owned by the National Library of Ireland. The record is https://catalogue.nli.ie/Record/vtls000268929.

The HOG144 photograph is a genuine historical Marlborough Street scene and has a strong, source-documented location. However, its camera position and south-facing view do not depict the target locations currently missing on the northward stretch (including the Edwardian post box, 77/82 Marlborough Street and the National Model Schools). It has therefore not been attached to those records or counted as coverage. The NPA WALK88 slide has not been visually inspected in this research session and its reproduction rights are not cleared for CICAN reuse. Both remain documented leads rather than registered photographs.

The existing NIAH pages provide exact registration numbers, descriptions and location context for the post boxes, bollards, wall and historic buildings above. Search was also directed to Wikimedia Commons, Flickr, Geograph Ireland, Dublin City Council and the National Library of Ireland using exact building names and street names. No additional candidate from those searches passed both subject verification and rights / image-access checks for the specific missing catalogue locations in this batch.

## Repository integrity repair completed in this session

A separate structural audit found 13 image source IDs already used by `data/visual-assets.json` but absent from `data/sources.json`. Thirteen source records were restored from the existing image metadata, preserving the recorded photographer, attribution, licence, source URL and image role.

Commit: `db7579065db14bfa9a56c88725a3252f81ed07df`

The GitHub Actions archive quality gate passed after this repair. The source-registry repair does not add new photograph references and does not change the coverage figures.

## Acceptance rule for future batches

A candidate increases coverage only when all of the following are established:

1. The image genuinely depicts the exact location or is explicitly labelled as surrounding streetscape context.
2. The source page identifies the image and its provenance.
3. The photographer is credited where known.
4. The licence or written reuse conditions are recorded.
5. The image URL is independently reachable.
6. The correct catalogue record receives the reference and complete metadata.

Until all six checks pass, retain the candidate as a research lead and keep the location in the missing-photograph count.
