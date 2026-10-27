# Catalogue-wide Visual Coverage Audit — Batch 022

**Date:** 27 October 2026  
**Scope:** All 195 catalogue points of interest, matched by immutable object ID against all 195 visual records and the 243 registered sources.

## Executive result

The audit tested every catalogue object, not just the previously prioritised postboxes.

| Test outcome | Locations |
|---|---:|
| Exact-object photograph recorded (`OBJECT_PHOTOGRAPH`) | 37 |
| Context photograph only (`STREET_CONTEXT`) | 28 |
| No photograph reference | 130 |
| Metadata review required | 0 |
| **Total tested** | **195** |

**Strict exact-object photo coverage: 37/195 (19.0%).**

The previous headline figure of 65 locations with reference images overstates the number of locations with a photograph of the actual point of interest: 28 records have context-only images and should not count as photographed POIs. One record has both a context and object image and is counted in the exact-object group. The 65 image-bearing records comprise 65 visual records; 70 image references in total.

## Tests performed on all 195 points

1. **Catalogue integrity:** checked each catalogue ID appears in the visual inventory.
2. **ID association:** matched visual records by exact `record_id`, not by similar names or nearby addresses.
3. **Photo-role classification:** counted `OBJECT_PHOTOGRAPH` separately from `STREET_CONTEXT`; context views do not satisfy the requested per-POI photograph requirement.
4. **Source integrity:** checked every reference's `source_id` resolves to a registered source.
5. **Attribution metadata:** checked each reference includes image URL, source URL, photographer, licence, attribution and image role.
6. **Uncovered inventory:** identified every point without an exact-object photograph.

Results: all 195 catalogue IDs have a corresponding visual record; all image references resolve to registered source IDs; all image references pass the required metadata-field presence test. This is a structural and provenance-metadata audit. It does **not** claim that every remote image URL was fetched successfully or that all image pixels were visually inspected against the site in this run. Those require separate per-image availability and visual identity checks.

## Complete 195-point audit register

Status definitions:
- `OBJECT_PHOTO_RECORDED`: at least one reference is labelled `OBJECT_PHOTOGRAPH`; still subject to independent image-content review.
- `CONTEXT_ONLY`: image(s) are labelled `STREET_CONTEXT`; they do not depict the catalogued object closely enough to count as its photograph.
- `NO_PHOTO`: no reference image is registered.
- `METADATA_REVIEW_REQUIRED`: a source ID or required attribution field is missing.

| Object ID | Point of interest | Result | Refs | Source IDs | Metadata |
|---|---|---|---:|---|---|
| DUB-MON-0001 | O'Connell Monument | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0001 | General Post Office (GPO) | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-STR-0001 | GPO historic cast-iron lantern bases and wheel guards | CONTEXT_ONLY | 1 | OK | OK |
| DUB-MEM-0001 | Famine Memorial — Rowan Gillespie | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-INS-0001 | Bronze name plaques within the Famine Memorial paving | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0002 | The Custom House | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-MON-0002 | Henry Grattan Monument | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-MON-0003 | Thomas Davis Monument and Fountain | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-MON-0004 | George Salmon Statue | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-MON-0005 | Lecky Statue | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-MON-0006 | Edmund Burke Statue | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-ART-0001 | Cactus Provisoire — Alexander Calder | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-ART-0002 | Reclining Figures — Henry Moore | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0003 | City Hall (former Royal Exchange) | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0004 | Old Detective Office, 1 Exchange Court | NO_PHOTO | 0 | OK | OK |
| DUB-MON-0007 | Jim Larkin Monument | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-INS-0002 | Jim Larkin Monument pedestal inscription plaques | CONTEXT_ONLY | 1 | OK | OK |
| DUB-STR-0002 | Talbot Street cast-iron P&T post box | CONTEXT_ONLY | 1 | OK | OK |
| DUB-STR-0003 | Victorian cast-iron pillar post box, Gardiner Street Upper | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0005 | 10 Talbot Street | CONTEXT_ONLY | 1 | OK | OK |
| DUB-INF-0001 | Loop Line railway viaduct over Talbot Street | CONTEXT_ONLY | 1 | OK | OK |
| DUB-STR-0004 | Marlborough Street Edwardian post box | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0006 | 23 Marlborough Street | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0007 | 77 Marlborough Street | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0008 | 82 Marlborough Street | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0009 | Talbot House, 9 Talbot Street | CONTEXT_ONLY | 1 | OK | OK |
| DUB-BLD-0010 | National Model Schools, Marlborough Street — main school building | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0005 | Four Victorian cast-iron bollards, north end of O’Connell Street | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0006 | Historic Custom House Docks boundary wall on Commons Street | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0007 | Edwardian cast-iron pillar post box, Lower Abbey Street | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0008 | Early Free State twin-slot post box, Jervis Street | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0009 | P&T double-aperture cast-iron post box, O'Connell Street Lower | CONTEXT_ONLY | 1 | OK | OK |
| DUB-STR-0010 | Early Free State twin post box, O'Connell Street Upper | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0011 | Edward VII cast-iron pillar post box, North Circular Road | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0012 | Victorian cast-iron pillar post box, Mountjoy Square West | CONTEXT_ONLY | 1 | OK | OK |
| DUB-STR-0013 | Early Free State twin post box, South Great George's Street | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0014 | Edward VII cast-iron pillar post box, Burgh Quay | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0015 | Early Free State double post box, Dame Street | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0016 | P&T double-opening post box with Áth Cliath lettering, Nassau Street | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-STR-0017 | Handyside cast-iron pillar post box, Townsend Street | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0018 | Victorian Handyside pillar post box, Mount Street Crescent | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0019 | Tonge & Taggart cast-iron pillar post box, South Richmond Street | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0020 | Early Free State double post box, St Andrew Street | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0021 | George V cast-iron pillar post box, Westmoreland Street | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0022 | Edward VII cast-iron pillar post box, Merrion Square | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-STR-0023 | Edward VII pillar post box, Fitzwilliam Place | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0024 | Victorian anonymous cast-iron pillar post box, Ely Place | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0025 | Victorian Handyside pillar post box, Fitzwilliam Square South | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0026 | Victorian cast-iron triple gas-lamp standard, Amiens Street | CONTEXT_ONLY | 1 | OK | OK |
| DUB-STR-0027 | Art Deco double-headed concrete electric lamp standard, College Street | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0028 | The Five Lamps — cast-iron lamp standard and former fountain | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0011 | 23 Hatch Street Lower — Georgian house with South City Foundry coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0012 | Harrington Hall, 69 Harcourt Street — boot scrapers and coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0013 | 67 Harcourt Street — Romanesque Revival doorway and coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0014 | 37 Harcourt Street — Georgian frontage and coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0015 | 82 Amiens Street — original coal-hole cover and cast-iron bootscraper | CONTEXT_ONLY | 1 | OK | OK |
| DUB-BLD-0016 | The Moorings, 13 Charleville Mall — coal-hole cover and cast-iron entrance details | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0017 | 11 Charleville Mall — Georgian frontage and coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0018 | 12 Charleville Mall — Georgian house with coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0019 | 14 Charleville Mall — Georgian entrance and coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0020 | 15 Charleville Mall — paired bootscrapers and coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0021 | 2 Buckingham Street Lower — Henshaw coal-hole covers | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0022 | 1A Sherrard Street Upper — Victorian frontage and coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0023 | 60 Amiens Street — original coal-hole cover in granite slab | CONTEXT_ONLY | 1 | OK | OK |
| DUB-BLD-0024 | 17–18 Nassau Street — Georgian house with coal-hole cover and basement light | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0025 | 3 Mountjoy Square North — Georgian house with historic political use and coal-hole cover | CONTEXT_ONLY | 1 | OK | OK |
| DUB-BLD-0026 | 585 North Circular Road — coal-hole cover and basement ironwork | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0027 | 83 Amiens Street — Henshaw-inscribed coal-hole cover | CONTEXT_ONLY | 1 | OK | OK |
| DUB-BLD-0028 | 8 Charleville Mall — Georgian entrance and coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0029 | 9 Charleville Mall — Georgian house with coal-hole cover and balconettes | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0030 | 10 Charleville Mall — Georgian entrance details and coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0031 | 1 Pembroke Street Upper — Georgian embassy frontage with coal-hole cover | CONTEXT_ONLY | 1 | OK | OK |
| DUB-BLD-0032 | 14 Pembroke Street Lower — Victorian townhouse with coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0033 | 13 Pembroke Street Upper — Georgian townhouse with coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0034 | 4 Sherrard Street Lower — original granite paving and coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0035 | 619 North Circular Road — Georgian frontage and cast-iron entrance ironwork | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0036 | 50 Middle Abbey Street — Georgian house with Harte-marked lamp standards | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0037 | 18 Pembroke Street Upper — Georgian frontage with lamp standard and coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0038 | Art Deco double-headed concrete electric lamp standard, Pearse Street | NO_PHOTO | 0 | OK | OK |
| DUB-INF-0002 | Huband Bridge — 1791 Grand Canal bridge and parapet lamp standard | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0038 | 7 Marino Crescent — Georgian doorway and leaded fanlight | CONTEXT_ONLY | 1 | OK | OK |
| DUB-BLD-0039 | Marino College — 1935–36 technical institute and library | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0040 | Vernon Lodge — 1885 carved limestone pedestrian entrance | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0041 | 24 Marino Crescent — Georgian house and entrance details | CONTEXT_ONLY | 1 | OK | OK |
| DUB-BLD-0042 | Marino Institute of Education — former St Patrick’s Monastery | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0043 | Clontarf Stationmaster’s House — polychrome brick railway architecture | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0044 | Clontarf and Scots Presbyterian Church — Gothic Revival church | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0045 | Church of St John the Baptist — seventeenth-century church ruins | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0046 | Central Hall, 71 Clontarf Road — 1906 Methodist hall | OBJECT_PHOTO_RECORDED | 2 | OK | OK |
| DUB-INS-0003 | Central Hall date plaque — “Central Hall 1906” | CONTEXT_ONLY | 1 | OK | OK |
| DUB-BLD-0047 | Clontarf Castle gate lodge — Gothic Revival entrance building | OBJECT_PHOTO_RECORDED | 3 | OK | OK |
| DUB-STR-0039 | Clontarf Castle gate lodge — sculpted animal-head corbels | CONTEXT_ONLY | 1 | OK | OK |
| DUB-BLD-0048 | Clontarf Castle — Gothic Revival country house, rebuilt 1836–37 | OBJECT_PHOTO_RECORDED | 2 | OK | OK |
| DUB-BLD-0049 | Warrenpoint gate lodge — 84 Clontarf Road | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0050 | 86 Clontarf Road | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0051 | Clontarf Promenade — Modernist concrete shelter | OBJECT_PHOTO_RECORDED | 2 | OK | OK |
| DUB-BLD-0052 | Clontarf handball alley — former Garda station recreation structure | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0053 | Seaview Terrace — 77–81 Clontarf Road | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0054 | Dublin United Tramways cast-iron transformer — Conquer Hill Road | CONTEXT_ONLY | 1 | OK | OK |
| DUB-BLD-0055 | Clontarf Promenade reinforced-concrete bandstand | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0056 | Victoria Terrace, 163–173 Clontarf Road | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0057 | Clontarf Promenade — group of eight Modernist concrete shelters | CONTEXT_ONLY | 1 | OK | OK |
| DUB-BLD-0058 | St Anthony's Hall — former Clontarf Town Hall | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0059 | Clontarf Garda Station — former Dublin Metropolitan Police Station | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0060 | Clontarf Baths — historic seafront swimming pool | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0061 | Hillview Terrace — 204 Clontarf Road | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0062 | Edward VII cast-iron postbox — Castle Avenue | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0063 | Rathmore — former pair of houses, 8–9 Castle Avenue | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0064 | Balmoral Lodge — 17 Castle Avenue | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0065 | Clontarf Telephone Exchange | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0066 | Ivy Lodge — 18 Castle Avenue | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0067 | Clontarf Hospital — former nurses' home | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0068 | Church of St John the Baptist — historic graveyard and ruined church | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0069 | Brian Boróimhe's Well — 1850 commemorative drinking fountain | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0070 | Seafield Road West — Jessop Davis cast-iron postbox | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0071 | St John the Baptist Church — First and Second World War Celtic cross memorial | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0072 | 54 Vernon Avenue — 1913 detached villa | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0073 | Vernon Avenue — Carron cast-iron pillar postbox | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0074 | Woodside Villa — 70–72 Vernon Avenue | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0075 | Verville — early Georgian house and former private asylum | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0076 | Church of St John the Baptist — Seafield Road West | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0077 | Hillview Terrace / Rutland Terrace — 205–206 Clontarf Road | NO_PHOTO | 0 | OK | OK |
| DUB-INS-0004 | Vernon Lodge — 1885 date stone | NO_PHOTO | 0 | OK | OK |
| DUB-INS-0005 | Vernon Lodge — Vernon family motto, coat of arms and crest | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0040 | Warrenpoint — paired masonry sphinxes on the entrance piers | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0041 | 86 Clontarf Road — petal-motif fanlight above the entrance | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0042 | Clontarf Castle gate lodge — carved shield above the former carriage arch | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0043 | Clontarf Road — Victorian cast-iron pillar postbox | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-STR-0044 | Howth Road — Victorian wall-mounted cast-iron postbox | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-STR-0045 | Haddon Road — W.T. Allen Victorian wall-mounted postbox | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0078 | 1 Sherrard Street Upper — c.1828 townhouse with surviving historic entrance fabric | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0079 | 53 Gardiner Street Upper — Sherrard Street corner townhouse | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0046 | 1 Sherrard Street Upper — original cast-iron coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0047 | 1 Sherrard Street Upper — original decorative leaded fanlight | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0048 | 1 Sherrard Street Upper — historic benchmark recorded in the streetscape | NO_PHOTO | 0 | OK | OK |
| DUB-INS-0006 | 53 Gardiner Street Upper — “Sherrard Street 1825” limestone date plaque | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0080 | Beech Lodge — former Clontarf Castle gate lodge | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0081 | 89 Clontarf Road — 1847 terrace house and entrance fabric | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0049 | Mount Prospect Avenue — Carron cast-iron P&T pillar postbox | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0050 | Kincora Grove — Carron cast-iron pillar postbox | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0051 | Dunluce Road — G.L. Murphy Irish cast-iron P&T pillar postbox | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0052 | Malahide Road — Jessop Davis P&T cast-iron pillar postbox | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0053 | Beresford Place — early Free State twin-aperture cast-iron postbox | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0054 | Dorset Street Lower — disused early Free State cast-iron pillar postbox | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0055 | Grand Canal Quay — McDowall Steven cast-iron postbox | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0056 | North Strand Road — George V McDowall Steven pillar postbox | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0057 | North Strand Road / Bayview Avenue — 1820s Howth milestone | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-BLD-0082 | 238 Clonliffe Road — Victorian corner house | NO_PHOTO | 0 | OK | OK |
| DUB-INS-0007 | 238 Clonliffe Road — inscribed granite street-name plaque | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0058 | 238 Clonliffe Road — cast-iron bootscrape | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0059 | 238 Clonliffe Road — cast-iron gate and historic railings | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0083 | Fairview Park — 1930s former public convenience | OBJECT_PHOTO_RECORDED | 1 | OK | OK |
| DUB-STR-0060 | Fairview Park former public convenience — Art Deco chimney stack and roofscape | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0061 | Seafield Road East and West — 1930s Art Deco concrete lamp standards | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0062 | 12 Charleville Mall — cast-iron entrance bootscraper | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0063 | 12 Charleville Mall — cast-iron coal-hole cover in granite pavement setting | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0064 | 46 Merrion Square — surviving remnant of a wrought-iron lamp standard | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0065 | 46 Merrion Square — cast-iron coal-hole cover in the pavement | NO_PHOTO | 0 | OK | OK |
| DUB-INS-0008 | 54 Vernon Avenue — 1913 date plaque above the entrance | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0084 | 86 Amiens Street — Regency townhouse with surviving street-fabric details | CONTEXT_ONLY | 1 | OK | OK |
| DUB-STR-0066 | 86 Amiens Street — cast-iron coal-hole cover inscribed “J. Sharkey Church St Dublin” | CONTEXT_ONLY | 1 | OK | OK |
| DUB-STR-0067 | 86 Amiens Street — cast-iron coal-hole cover inscribed “RY Dublin” | CONTEXT_ONLY | 1 | OK | OK |
| DUB-STR-0068 | 86 Amiens Street — surviving remains of a cast-iron entrance bootscraper | CONTEXT_ONLY | 1 | OK | OK |
| DUB-STR-0069 | 86 Amiens Street — cast-iron party-wall circuit box marked “Oxford” | CONTEXT_ONLY | 1 | OK | OK |
| DUB-STR-0070 | 3 Mountjoy Square North — cast-iron bootscraper west of the entrance | CONTEXT_ONLY | 1 | OK | OK |
| DUB-STR-0071 | 3 Mountjoy Square North — remains of a second bootscraper east of the entrance | CONTEXT_ONLY | 1 | OK | OK |
| DUB-STR-0072 | 3 Mountjoy Square North — cast-iron coal-hole cover in the front pavement | CONTEXT_ONLY | 1 | OK | OK |
| DUB-BLD-0085 | 46 Merrion Square East — Georgian townhouse and historic setting | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0086 | 6 Seville Place — Victorian townhouse with historic entrance fabric | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0073 | 6 Seville Place — cast-iron entrance bootscraper | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0087 | 17 Earlsfort Terrace — late-Victorian townhouse and ironwork | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0074 | 17 Earlsfort Terrace — cast-iron entrance bootscrape | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0075 | 17 Earlsfort Terrace — cast-iron coal-hole cover in granite slab | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0076 | 17 Earlsfort Terrace — cast-iron balustrade and matching gate | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0088 | 47 Hardwicke Street — early Georgian townhouse with entrance fabric | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0077 | 47 Hardwicke Street — wrought-iron entrance bootscraper | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0089 | 6 Sherrard Street Upper — late-Georgian townhouse | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0078 | 6 Sherrard Street Upper — cast-iron entrance bootscraper | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0079 | 1 Pembroke Street Upper — cast-iron entrance bootscraper | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0080 | 1 Pembroke Street Upper — cast-iron pavement coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0081 | 37 Harcourt Street — cast-iron pavement coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0090 | 18 Earlsfort Terrace — late-Victorian townhouse with surviving entrance ironwork | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0082 | 18 Earlsfort Terrace — cast-iron entrance bootscrape | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0083 | 18 Earlsfort Terrace — cast-iron coal-hole cover in granite slab | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0084 | 18 Earlsfort Terrace — cast-iron balustrade and matching gate | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0091 | 1 Harcourt Terrace — Regency corner house and pavement setting | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0085 | 1 Harcourt Terrace — cast-iron coal-hole cover in granite pavior | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0092 | 2 Pembroke Street Upper — Regency townhouse with historic entrance fittings | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0086 | 2 Pembroke Street Upper — cast-iron entrance bootscraper | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0087 | 2 Pembroke Street Upper — cast-iron pavement coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0088 | 13 Pembroke Street Upper — cast-iron pavement coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-BLD-0093 | 84 Harcourt Street — early-Victorian townhouse with surviving cast-iron entrance fittings | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0089 | 84 Harcourt Street — cast-iron entrance bootscraper | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0090 | 84 Harcourt Street — cast-iron pavement coal-hole cover | NO_PHOTO | 0 | OK | OK |
| DUB-STR-0091 | 84 Harcourt Street — cast-iron railings with anthemion finials | NO_PHOTO | 0 | OK | OK |

## Required next work

1. Resolve all 28 context-only records by finding an exact-object photograph or replacing the context reference with a properly labelled exact photograph.
2. Find exact-object photographs for all 130 records currently without images.
3. Visually inspect each existing `OBJECT_PHOTOGRAPH` against its catalogue object and location evidence; do not assume a role label alone proves identity.
4. Fetch every original image URL and file page, verify availability, author, date, licence and attribution before adding or retaining it as a publishable asset.
5. Update the coverage counter to report exact-object coverage separately from context-image coverage.

## Data changes

No catalogue or image records were changed in this audit. No photograph was promoted from context to object status. No new photo coverage is claimed.
