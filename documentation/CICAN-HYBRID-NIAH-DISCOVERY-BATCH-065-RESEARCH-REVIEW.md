# CICAN Dublin Archive — Batch 065 research review

**Status:** research-only; full canonical duplicate, alias, footprint and coordinate reconciliation pending  
**Accessed:** 21 November 2026  
**Candidates:** five individual NIAH registrations  
**Publication:** not authorised

## Candidate records

### 1. 103 Seville Place — NIAH 50010039
- Regional; Architectural and Artistic; house; 1820–1840; built c.1830.
- Flemish-bond red brick, granite plinth, parapet and M-profile slate roof, sash windows, Ionic doorcase, original timber door and fanlight.
- NIAH describes it as one of a terrace of five dating from the early nineteenth century.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010039/103-seville-place-dublin-1-co-dublin

### 2. 104 Seville Place — NIAH 50010040
- Regional; Architectural and Artistic; house, now recorded as apartments; 1820–1840; built c.1830.
- Terraced two-bay, three-storey house over raised basement, with Flemish-bond brickwork, granite plinth, parapet roof and gauged-brick openings.
- NIAH describes it as one of a terrace of five built before insertion of the former Dublin and Drogheda railway.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010040/104-seville-place-dublin-1-co-dublin

### 3. Parcels Post Office, 102–106 Amiens Street / Preston Street — NIAH 50010042
- Regional; Architectural, Artistic, Historical and Social; former post office, now office; 1890–1895; built 1892.
- Detached seven-bay, two-storey former railway parcels office with Dutch-gable return, Flemish Revival brickwork, shaped gables, limestone detailing and elaborate entrance.
- NIAH attributes the design to J. Howard Pentland and identifies the building as part of the Great Northern Railway Terminus complex.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010042/parcels-post-office-102-106-amiens-street-preston-street-dublin-1-dublin

### 4. Hugh Ward & Co. Solicitors, 9 Seville Place — NIAH 50010043
- Regional; Architectural and Artistic; former house, now office; 1840–1860; built c.1850.
- End-of-terrace two-bay, two-storey house over raised basement, with yellow Flemish-bond brick, granite plinth and steps, Doric doorcase and cast-iron railings.
- NIAH describes it as the southern end of a terrace of seven houses.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010043/hugh-ward-co-solicitors-9-seville-place-dublin-1-co-dublin

### 5. 8 Seville Place — NIAH 50010044
- Regional; Architectural and Artistic; house; 1840–1860; built c.1850.
- Terraced two-bay, two-storey house over raised basement, with yellow Flemish-bond brickwork, granite plinth, slate roof, Doric doorcase, original timber door and petal fanlight, shared granite steps, bootscraper and iron railings.
- NIAH describes it as part of a terrace of seven similar houses on the west side of Seville Place.
- Official record: https://www.buildingsofireland.ie/buildings-search/building/50010044/seville-place-dublin-1-dublin-city-13

## Exclusion and related-feature controls

- **50010041 — Connolly Station water tower and adjacent turntable:** excluded because it is already represented in current main as **DUB-INF-0195 / Connolly Station**. Do not create a second archive object for it.
- **50010042 — Parcels Post Office:** a separate NIAH building within the Great Northern Railway Terminus complex. It must not be conflated with the already archived water tower (50010041) or the current-main locomotive shed (50010034). Confirm the separate building footprint before any import.
- **50010039 and 50010040:** individually registered addresses in the early nineteenth-century terrace of five; retain distinct identities.
- **50010043 and 50010044:** individually registered buildings in the terrace of seven; retain distinct identities.
- **50010044 bootscraper:** check against the existing micro-detail inventory, including DUB-STR-0073 at 6 Seville Place. Similarity of feature type does not establish that these are the same physical object.

## Coordinate provenance

The individual NIAH pages display coordinate pairs but do not label their CRS. The accompanying JSON preserves those values only as raw page evidence. They are **not** labelled ITM, Irish Grid, latitude/longitude or GPS and are not imported into archive map fields.

The official NIAH download provides separate ITM, latitude/longitude and National Grid fields. Retrieve and match the official CSV fields by registration number before any coordinate adoption. The official dataset metadata notes that historical centroid positions may need revision. Sources:
- NIAH Data Download: https://www.buildingsofireland.ie/niah-data-download/
- NIAH National Dataset metadata: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset

## Preliminary duplicate screen and remaining gates

A preliminary indexed-repository exact-registration search returned no hit for 50010039, 50010040, 50010042, 50010043 or 50010044. This is **not** a complete duplicate determination. The current-main baseline at commit `baff31959d56ae418aa8b89239054f2622a5e44c` is 615 objects, 495 public NIAH records, 735 sources and 615 visual records. The full canonical JSON datasets and every open research/import PR must still be parsed and reconciled.

Before any import:
1. Re-run exact NIAH registration, normalized title, address and alias checks against current main and every open PR.
2. Compare the 50010042 railway-complex footprint against DUB-INF-0195 / NIAH 50010041 and NIAH 50010034 without merging distinct registrations.
3. Check the Seville Place terrace group relationships and the existing micro-detail inventory.
4. Extract official national CSV ITM and latitude/longitude values by registration number and preserve source provenance.
5. Convert the evidence packet into candidate archive objects only after the above review; then validate against `schemas/archive-object.schema.json`, source references, IDs and visual parity.

## Explicit non-actions

No archive IDs assigned. No master catalogue, public NIAH register, source registry or visual inventory records added. No coordinates imported. No map pins authorised. No founder photography or field verification claimed. No production deployment.
