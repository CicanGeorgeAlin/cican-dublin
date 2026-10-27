# Visual Discovery Batch 023 — 195-Point Inventory and Image-Role Audit

**Date:** 27 October 2026  
**Cycle:** 020

## 1. Live inventory

Fetched the live `data/objects.json`, `data/visual-assets.json` and `data/sources.json` files before research.

- Catalogue objects: 195
- Visual records: 195
- Locations with at least one image reference: 65
- Total image references: 70
- Locations without any image reference: 130
- Registered sources: 243
- Location-level reference coverage: 33.3%

### Image-role distribution

- OBJECT_PHOTOGRAPH: 41
- STREET_CONTEXT: 29

Role counts are image-reference counts, not unique location counts. A location can contain multiple references and mixed roles.

## 2. Important reconciliation: prior Batch 022 exists

The repository already contains `documentation/VISUAL-DISCOVERY-BATCH-022.md`, titled **Famine Memorial Bronze Name Plaque**. It documents an earlier addition:
- Target: DUB-INS-0001, bronze name plaques at the Famine Memorial.
- Image: Famine_Plaque.png on Wikimedia Commons.
- Author: Knguyen25.
- Licence: CC0 1.0.
- Source record: WMC-DUB1-FAMINE-PLAQUE-2026-01.

That earlier report recorded the inventory moving from 64/69/242 to 65/70/243. The current live files confirm 65 covered locations, 70 references and 243 sources. The earlier Batch 022 report was preserved and not overwritten.

## 3. Existing context-image flags

The current visual inventory includes references explicitly classified as `STREET_CONTEXT`. They must not be treated as exact-object evidence for the named micro-feature without a visual match.

Examples:
- DUB-BLD-0084 and DUB-STR-0066 through DUB-STR-0069 use an Amiens Street context photograph; it does not identify the individual coal-hole, lamp or entrance fitting described by those records.
- DUB-STR-0070 and DUB-STR-0071 use a Mountjoy Square footscraper photograph without evidence it depicts the exact fitting at the catalogue address.
- DUB-STR-0072 uses a Mountjoy Square coal-hole photograph that is not confirmed as the cover at the target point.

These remain image references but should not be counted as exact-object coverage.

## 4. NIAH object identity leads rechecked

Official NIAH descriptions give specific visual criteria for missing postbox targets:

- DUB-STR-0003 Gardiner Street Upper, NIAH 50010760: c.1880 Victoria VR, A. Handyside & Co. https://www.buildingsofireland.ie/buildings-search/building/50010760/gardiner-street-upper-dublin-1-dublin
- DUB-STR-0007 Lower Abbey Street, NIAH 50010291: c.1905 Edward VII, Handyside. https://www.buildingsofireland.ie/buildings-search/building/50010291/lower-abbey-street-dublin-1-dublin
- DUB-STR-0004 Marlborough Street, NIAH 50010238: c.1905 Edward VII, McDowall Steven. https://www.buildingsofireland.ie/buildings-search/building/50010238/marlborough-street-dublin-1-dublin
- DUB-STR-0045 Haddon Road, NIAH 50030046: c.1895 W.T. Allen VR wall box. https://www.buildingsofireland.ie/buildings-search/building/50030046/haddon-road-clontarf-dublin-3-co-dublin
- DUB-STR-0049 Mount Prospect Avenue, NIAH 50030342: c.1940 Carron P&T pillar box. https://www.buildingsofireland.ie/buildings-search/building/50030342/mount-prospect-avenue-clontarf-dublin-3-dublin
- DUB-STR-0050 Kincora Grove, NIAH 50030286: c.1965 Carron pillar box. https://www.buildingsofireland.ie/buildings-search/building/50030286/kincora-grove-clontarf-dublin-3-dublin
- DUB-STR-0051 Dunluce Road, NIAH 50030333: c.1960 G.L. Murphy pillar box. https://www.buildingsofireland.ie/buildings-search/building/50030333/dunluce-road-clontarf-furrypark-dublin-3-dublin

The descriptions help distinguish individual boxes by maker, royal cipher, P&T insignia and construction date. They are not reusable photograph licences.

## 5. Further visual leads

- Commons Dublin postbox category: https://commons.wikimedia.org/wiki/Category:Post_boxes_in_Dublin
- Commons Dublin coal-hole category: https://commons.wikimedia.org/wiki/Category:Coal_hole_covers_in_Dublin
- Geograph 7639726: coal-hole cover on Merrion Street Upper, Rossographer, CC BY-SA 2.0. It is not yet matched to a current catalogue record: https://www.geograph.ie/photo/7639726
- Geograph 7639734: coal-hole cover on Merrion Street Upper, Rossographer; reuse is offered under Geograph's Creative Commons licence, but individual licence details and exact target match must be verified before use: https://www.geograph.ie/photo/7639734
- Geograph 7639740: coal-hole cover on Hume Street, Rossographer; not a match to any target solely because it is a Dublin coal-hole: https://www.geograph.ie/photo/7639740

No new photograph met all exact-object, source, rights and location checks during this cycle. No data JSON was changed.

## 6. Missing-photo queue

There are 130 current catalogue objects with no reference image. The queue is generated from the live catalogue and visual records. First 30:

- **DUB-BLD-0004** — Old Detective Office, 1 Exchange Court (1 Exchange Court, Dublin 2)
- **DUB-STR-0003** — Victorian cast-iron pillar post box, Gardiner Street Upper (Gardiner Street Upper, Dublin 1 (NIAH 50010760; verify exact pavement position in the field))
- **DUB-STR-0004** — Marlborough Street Edwardian post box (West side of Marlborough Street, Dublin 1, north of the Pro-Cathedral)
- **DUB-BLD-0006** — 23 Marlborough Street (23 Marlborough Street, Dublin 1)
- **DUB-BLD-0007** — 77 Marlborough Street (77 Marlborough Street, Dublin 1)
- **DUB-BLD-0008** — 82 Marlborough Street (82 Marlborough Street, Dublin 1)
- **DUB-BLD-0010** — National Model Schools, Marlborough Street — main school building (Marlborough Street, Dublin 1)
- **DUB-STR-0005** — Four Victorian cast-iron bollards, north end of O’Connell Street (Central mall at the north end of O’Connell Street, Dublin 1)
- **DUB-STR-0006** — Historic Custom House Docks boundary wall on Commons Street (Commons Street, beside Connolly Station, Dublin 1)
- **DUB-STR-0007** — Edwardian cast-iron pillar post box, Lower Abbey Street (North side of Lower Abbey Street, Dublin 1)
- **DUB-STR-0008** — Early Free State twin-slot post box, Jervis Street (East side of Jervis Street near the junction with Mary Street, Dublin 1)
- **DUB-STR-0010** — Early Free State twin post box, O'Connell Street Upper (North end of O'Connell Street Upper at the junction with Cathal Brugha Street, Dublin 1)
- **DUB-STR-0011** — Edward VII cast-iron pillar post box, North Circular Road (South side of North Circular Road outside No. 530, Dublin 1)
- **DUB-STR-0013** — Early Free State twin post box, South Great George's Street (Footpath at the junction of South Great George's Street and Fade Street, Dublin 2)
- **DUB-STR-0014** — Edward VII cast-iron pillar post box, Burgh Quay (Burgh Quay footpath at the junction with Hawkins Street, Dublin 2)
- **DUB-STR-0015** — Early Free State double post box, Dame Street (North footpath of Dame Street, south of the Central Bank, Dublin 2)
- **DUB-STR-0017** — Handyside cast-iron pillar post box, Townsend Street (Townsend Street footpath south of the Screen Cinema, Dublin 2)
- **DUB-STR-0018** — Victorian Handyside pillar post box, Mount Street Crescent (East end of Mount Street Crescent at Warrington Place, Dublin 2)
- **DUB-STR-0019** — Tonge & Taggart cast-iron pillar post box, South Richmond Street (South Richmond Street at Lennox Street, Dublin 2)
- **DUB-STR-0020** — Early Free State double post box, St Andrew Street (Footpath in front of the main post office on St Andrew Street, Dublin 2)
- **DUB-STR-0021** — George V cast-iron pillar post box, Westmoreland Street (West side footpath of Westmoreland Street, Dublin 2)
- **DUB-STR-0023** — Edward VII pillar post box, Fitzwilliam Place (South-east end of Fitzwilliam Place, Dublin 2)
- **DUB-STR-0024** — Victorian anonymous cast-iron pillar post box, Ely Place (Footpath at the junction of Ely Place and Baggot Street Lower, Dublin 2)
- **DUB-STR-0025** — Victorian Handyside pillar post box, Fitzwilliam Square South (Footpath at the junction of Fitzwilliam Square South and Pembroke Street Upper, Dublin 2)
- **DUB-STR-0027** — Art Deco double-headed concrete electric lamp standard, College Street (East end, north side of College Street, Dublin 2)
- **DUB-BLD-0011** — 23 Hatch Street Lower — Georgian house with South City Foundry coal-hole cover (23 Hatch Street Lower, Dublin 2)
- **DUB-BLD-0012** — Harrington Hall, 69 Harcourt Street — boot scrapers and coal-hole cover (69 Harcourt Street, Dublin 2)
- **DUB-BLD-0013** — 67 Harcourt Street — Romanesque Revival doorway and coal-hole cover (67 Harcourt Street, Dublin 2)
- **DUB-BLD-0014** — 37 Harcourt Street — Georgian frontage and coal-hole cover (37 Harcourt Street, Dublin 2)
- **DUB-BLD-0016** — The Moorings, 13 Charleville Mall — coal-hole cover and cast-iron entrance details (13 Charleville Mall, Dublin 1)

The full queue must be regenerated from live files in the next cycle; do not treat this excerpt as the complete list.

## 7. Outcome

- New image references added: 0
- Newly covered catalogue locations: 0
- New source records: 0
- JSON files changed: none
- Existing Batch 022 preserved
- Current coverage: 65/195 (33.3%)
- Missing image references: 130

## 8. Next cycle — Batch 024

1. Audit the 70 existing image URLs and their source pages in batches, recording HTTP reachability, redirects and failures.
2. Visually inspect the 41 object-photograph references, checking that each depicts the named target rather than a similar nearby object.
3. Review all 29 context references and replace or supplement them with exact-object photographs.
4. Work through all 130 missing locations by exact address, NIAH identifier and distinctive object details.
5. Add only exact matches with explicit reuse rights, attribution and source metadata.
6. Re-fetch JSON and test deployed image rendering after every data change.

**Completion rule:** all 195 objects require correctly matched photographs, tested image URLs, checked source pages and recorded rights/attribution. A filled image field alone is not completion.
