# Dublin geographic coverage system

## Geographic hierarchy

The archive uses separate geographic layers rather than treating postal districts as the map of Dublin:

1. **Local authority areas** — the four administrative authorities serving Dublin: Dublin City Council, Fingal County Council, South Dublin County Council and Dún Laoghaire-Rathdown County Council.
2. **Statutory townlands** — the fine-grained official geography for systematic coverage, especially beyond the continuous urban area.
3. **Postal districts** — practical city work zones, retained as an operational overlay only.
4. **Neighbourhoods and settlements** — useful named research areas, with provenance and boundaries described honestly.
5. **Fieldwork routes and corridors** — walkable assignments, parks, streets, waterfronts and clusters; not administrative boundaries.

## Authoritative boundary basis

Dublin.ie identifies the four local authorities serving County Dublin. Tailte Éireann provides official administrative and statutory boundary datasets, including local authority areas and townlands. Its 2026 townlands dataset is the intended fine-grained source. The Tailte Éireann boundary guidance warns that maps are not a substitute for the relevant Ordnance Map when a legal boundary must be established.

Sources:
- Dublin.ie, [The four Dublin council areas](https://dublin.ie/live/life-in-dublin/dublin-council-areas/)
- Tailte Éireann, [Boundary Data](https://tailte.ie/map-shop/professional-map-products/boundary-data/)
- Tailte Éireann, [Townlands — National Statutory Boundaries — Ungeneralised 2026](https://data.gov.ie/dataset/townlands-national-statutory-boundaries-ungeneralised-20261)

## Current implementation

- `data/coverage-zones.json` defines the four authority areas and separate working-zone layers.
- `data/districts.json` remains the postal-district work-zone list.
- `data/sources.json` records the official geographic references.
- No boundary polygons or GPS points are fabricated in this stage.
- The 2026 townland source is identified but its full Dublin-only geometry has not yet been imported or rendered.

## Import and validation plan

1. Obtain the Tailte Éireann 2026 townland GeoJSON or other supported boundary export.
2. Confirm the reuse licence and required attribution before redistributing geometry.
3. Filter features to the four Dublin local authority areas using the official administrative boundary layer, not a postal-district approximation.
4. Preserve the source feature identifier, English and Irish place names where present, source dataset version, coordinate reference system and access date.
5. Transform geometry to web-map coordinates using a documented GIS conversion; retain the source geometry or source reference separately.
6. Check for missing names, invalid geometries, duplicate identifiers and features falling outside the selected Dublin authority polygons.
7. Add neighbourhood and fieldwork overlays only when their provenance and intended use are explicit.

## Coverage status

A zone may progress through NOT_YET_RESEARCHED, RESEARCH_IN_PROGRESS, INITIAL_RESEARCH_COMPLETE, FIELDWORK_IN_PROGRESS and FIELDWORK_REVIEWED. These labels describe archive work only. They do not certify that every historic feature in an area has been found.
