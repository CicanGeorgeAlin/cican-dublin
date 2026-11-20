# CICAN Dublin — Lucan NIAH Sequence Research Batch 035

**Date:** 20 November 2026  
**Scope:** Leixlip Road / Lucan and Pettycanon, South Dublin County  
**Status:** Research-only checkpoint. No production records added.

## 1. Candidate 11201021 — Leixlip Road public house (Ball Alley House)

Official Buildings of Ireland search result and individual-record metadata identify:

- NIAH registration: **11201021**
- Address / locality: Leixlip Road, Lucan and Pettycanon, Lucan, County Dublin
- Rating: Regional
- Special interest: Architectural
- Original use and current use: Public house
- Date range: 1845–1850; described as c.1847
- Date recorded: 24 April 2002
- Description: detached eight-bay, two-storey public house consisting of three originally terraced buildings; rendered, ruled-and-lined painted walls; square-headed openings with two-pane and multiple-pane timber sash windows; pitched slate roof with four rendered chimney stacks marking former building partitions; simple timber pub front with large casement windows; two-storey rear section with corrugated-iron roof and blocked openings.
- Appraisal: retains its original form and contributes character to this approach to Lucan village.

Official record URL: https://www.buildingsofireland.ie/buildings-search/building/11201021/ball-alley-house-leixlip-road-lucan-south-dublin-county

Search index and official record page agree on the registration and description. The individual page coordinate pair is 302945, 235001; CRS is not labelled in the individual record display. Do not transform or use it for mapping.

## 2. Next candidate surfaced in the official Lucan search — 11201023

The official Buildings of Ireland Lucan search results also identify:

- NIAH registration: **11201023**
- Address: Leixlip Road, Lucan and Pettycanon, Lucan, County Dublin
- Feature: former orchard boundary wall
- Date: c.1850
- Description in the official search result: random-rubble limestone wall with brick coping to a section; wall repointed; large brick-dressed opening now blocked; brick coping may formerly have been part of a building.

Official individual record URL: https://www.buildingsofireland.ie/buildings-search/building/11201023/leixlip-road-lucan-and-pettycanon-lucan-co-dublin

The individual page request timed out during this pass. Treat this as a search-result candidate only; obtain and verify the complete individual record page before considering production.

## 3. GIS service and coordinate-provenance improvement

The official NIAH FeatureServer root and layer metadata were opened:

- Service: https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildingsOpenData/FeatureServer
- Layer: https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildingsOpenData/FeatureServer/0
- Layer ID: 0, NIAHBuildings
- Spatial reference: ITM EPSG:2157
- Fields exposed include REG_NO, LOCAL_AUTHORITY_, DESCRIPTION, APPRAISAL, DATEFROM, DATETO, RATING, ITM_E, ITM_N, LATITUDE, LONGITUDE, IMAGE_LINK, WEBSITE_LINK, SURVEY and CSI.

The query endpoint is documented by the service, but the browser retrieval attempt for a REG_NO-filtered JSON response was not accessible in this session. Therefore no GIS attributes or coordinates are claimed as retrieved for 11201021 or 11201023 in this batch. The existence of the service and its schema does not itself verify a specific registration's row values.

## 4. Relationship and duplicate controls

- 11201021 and 11201023 are distinct official registration numbers and describe different feature types (a public house and an orchard boundary wall).
- This does not by itself prove that the two features are physically unrelated or that the wall is a separate detached object. Preserve the two official records independently while avoiding unsupported component-level claims.
- GitHub code search for exact strings 11201021 and 11201023 did not return matching archive files in the indexed default-branch search. This is only an index-level negative result, not a complete master-catalogue duplicate check.
- The large master and public NIAH JSON files previously returned empty content via the current repository file endpoint. Full master, public, source-registry and visual-inventory duplicate checks remain uncertified.

## 5. Production decision

No records imported. No public pages, map points, source records, visual inventory records, sitemap entries or SEO pages generated. No deployment performed.

Both 11201021 and 11201023 remain HOLD / RESEARCH CANDIDATES until:
1. Full official individual NIAH pages are checked.
2. Exact REG_NO rows are retrieved from the official national CSV or FeatureServer.
3. Original ITM EPSG:2157, WGS84 and local-authority fields are reconciled and retained.
4. Full master, public NIAH, source and visual datasets are recovered and checked for duplicates.
5. Access and field-verification status are explicitly represented.

## 6. Next operation

Continue sequentially from the official Dublin NIAH queue. Prioritise retrieval of live FeatureServer or official CSV rows for 11201019, 11201021 and 11201023; recover complete catalogue files before import; then verify the next unprocessed Lucan registrations. Never infer coordinates from an unlabelled individual-page coordinate pair.

The last confirmed production totals remain 574 master objects, 454 public NIAH registrations, 692 sources and 574 visual records. The four-authority Building Survey denominator remains 7,535; this research-only batch changes none of those figures.
