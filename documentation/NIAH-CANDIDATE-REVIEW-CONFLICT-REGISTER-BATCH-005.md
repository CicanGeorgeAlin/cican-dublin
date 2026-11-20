# CICAN Dublin Archive — NIAH Candidate Review and Conflict Register, Batch 005

**Research date:** 20 November 2026  
**Scope:** Detailed review of the five Batch 004 candidates; reconcile conflicting descriptions for Barnhill Bridge; verify catalogue collisions.  
**Status:** Research-only. No production catalogue entries or map pins created.

## 1. Summary

Five candidate NIAH references were checked again against the live canonical catalogue. All five exact registration numbers remain absent, and no exact candidate name was found in the tested name/title/address/location/description fields.

The two Carnegie libraries have now been reviewed from their individual official Buildings of Ireland record pages, including ITM coordinates, rating, interest categories, dates and detailed architectural descriptions.

A significant unresolved identity/description conflict was found for Barnhill Bridge (11352001). The official NIAH search result describes a single-arch stone bridge over a river, c.1900. DART+ West environmental documentation identifies Barnhill Bridge, R149 Road, as a single-span railway overbridge and associates it with NIAH reference 11352001. This is not reconciled. The record must remain on hold until exact mapped geometry and site identity establish whether the sources describe the same structure, separate adjacent structures, or an error in one source.

## 2. Catalogue collision audit

Canonical file: `data/objects.json`, retrieved from the GitHub Contents API on `main`.

- Total objects: 452
- Candidate references already present: 0 of 5
- Exact candidate-name matches in tested fields: 0 of 5

Candidates checked:
- 11351005 — Strand Road graveyard
- 11352001 — Barnhill Bridge
- 11352002 — Packenham Bridge
- 60260117 — Shankill Carnegie Free Library
- 60260244 — Cabinteely Carnegie Free Library

This is a first-pass collision check only. It does not rule out aliases, component-level objects, parent/child relationships or records represented under a different title.

## 3. Candidate findings

### 3.1 Strand Road graveyard — NIAH 11351005

Official Buildings of Ireland search result title: **Strand Road, Burrow (Co. by.) Malahide ED, Portmarnock, Co. Dublin**.

Published NIAH search-result description: graveyard with markers from c.1600 to present; ruin of church SMR DU015-007001 to site; site described as overgrown with vegetation.

An archaeological report submitted to Fingal County Council states that the NIAH graveyard record is 11351005 and separately discusses the church monument DU015-007001, the graveyard DU015-007004, and a wall monument DU015-007005. It also notes two nearby monuments, a holy well DU015-007002 and an ogham stone DU015-007003, with no apparent surviving trace reported in that assessment.

**Archive handling:** retain the graveyard, church, wall monument, holy well and ogham-stone identifiers as distinct archaeological records where the source records distinguish them. Do not infer that the ogham stone or holy well survives at the site today. The archaeological report is a secondary planning document and must not replace the official NIAH/SMR record as the primary source.

### 3.2 Barnhill Bridge — NIAH 11352001

Official NIAH search result: **Barnhill Bridge, Barnhill, Co. Dublin**. Its short description states: single-arch stone bridge over river, c.1900, with cut limestone walls and voussoirs.

Conflicting evidence:
- DART+ West EIAR identifies Barnhill Bridge, R149 Road, Barnhill, as a railway overbridge with a single-span railway bridge and three-centred arch, associates it with RPS 712 (Fingal County Council), and lists NIAH 11352001.
- A separate DART+ West bridge-intervention assessment calls Barnhill Bridge NIAH 11352001 and discusses lowering the track beneath the bridge to improve overhead-line clearance.
- An older planning EIAR reproduces the short NIAH description of a single-arch stone bridge over a river.

**Decision:** unresolved. Do not combine the two descriptions into a single object record or choose one as correct without spatial and source-level reconciliation. Obtain the NIAH feature geometry, compare it with the R149 railway alignment, inspect historic and current mapping, and review the relevant protected-structure schedule. If the official geometry identifies a different adjacent bridge, create separate objects with their respective identities and relationships.

### 3.3 Packenham Bridge — NIAH 11352002

Official NIAH search result: **Packenham Bridge, Barnhill, Co. Dublin**. Description: single-arch limestone humpback road bridge over Royal Canal, c.1820, with ashlar parapet walls.

DART+ West documentation identifies Packenham Bridge at Barberstown Lane as a canal bridge and associates it with NIAH 11352002 and RPS 711 (Fingal County Council). This is broadly consistent with the NIAH description, although exact position and feature geometry still require verification.

**Archive handling:** preserve the NIAH spelling “Packenham” as the source title. Do not silently normalise it to “Pakenham”.

### 3.4 Shankill Carnegie Free Library — NIAH 60260117

Official individual record:
https://www.buildingsofireland.ie/buildings-search/building/60260117/shankill-carnegie-free-library-new-vale-library-road-shankill-shankill-co-dun-laoghaire-rathdown

- Rating: Regional
- Special interest: Architectural, Artistic, Historical, Social
- Original/current use: Library/archive
- NIAH date range: 1905–1915
- ITM coordinate: E 325115, N 221959
- Date recorded: 9 September 2015
- Description dates design to 1910, construction to 1910–12, opening to 1912; renovated in 1978.
- Appraisal attributes the design to Rudolph Maximilian Butler and identifies Arts and Crafts glazing patterns, granite dressings, a cruciform plan, and a spire-topped cupola.

The NIAH page itself provides the ITM coordinate. It is preserved here as ITM only. No WGS84 conversion or public pin is approved.

### 3.5 Cabinteely Carnegie Free Library — NIAH 60260244

Official individual record:
https://www.buildingsofireland.ie/buildings-search/building/60260244/cabinteely-carnegie-free-library-old-bray-road-cabinteely-cabinteely-co-dublin

- Rating: Regional
- Special interest: Architectural, Artistic, Historical, Social
- Original/current use: Library/archive
- NIAH date range: 1905–1915
- ITM coordinate: E 323535, N 224845
- Date recorded: 12 April 2016
- Description dates design to 1910, construction to 1910–12, opening to 1912; repaired in 1925, burnt in 1987, and undergoing extension in 2016.
- Appraisal attributes the design to Rudolph Maximilian Butler and notes the relationship to the Shankill Carnegie Free Library.

The NIAH page itself provides the ITM coordinate. It is preserved here as ITM only. No WGS84 conversion or public pin is approved.

## 4. Relationship and provenance notes

The two Carnegie libraries are separate NIAH records, but their appraisals explicitly compare them and attribute both designs to the same architect. If both are added later, they should have separate archive IDs with a documented “related design / same architect” relationship, not be merged.

The Strand Road graveyard is part of a wider archaeological landscape with separately identified SMR components. The archive should maintain separate records for the NIAH building/landscape record and each SMR monument where supported by the source register.

Barnhill Bridge remains a hard hold because the NIAH summary and railway project documents appear to describe different structural forms. This discrepancy is precisely the kind of conflict that the archive must preserve rather than hide.

## 5. Coordinate and administrative geography status

- ITM coordinates are verified from the two individual Carnegie library NIAH pages only.
- No coordinates are approved for the graveyard, Barnhill Bridge or Packenham Bridge in this report.
- No coordinate transformation to WGS84 was performed.
- No exact `LOCAL_AUTHORITY_` feature-service values were retrieved.
- No point-in-polygon boundary assignment was performed.
- The locality and address text must not be used as a substitute for the NIAH local-authority attribute or authoritative boundary analysis.

## 6. Next actions

1. Obtain the official NIAH CSV or HEV export for the five candidates, retaining the source file, filename, date and licence/provenance.
2. Reconcile Barnhill Bridge by comparing the NIAH geometry, railway alignment, road crossing and protected-structure schedule; preserve the conflict until resolved.
3. Verify exact feature coordinates and local-authority attributes for all five.
4. Convert ITM to WGS84 only with a documented EPSG:2157 to EPSG:4326 transformation; preserve both coordinate systems and precision.
5. Complete relationship review for the Saint Marnock's archaeological complex and the two Carnegie libraries.
6. Prepare draft objects only after the above checks; no automatic publication.

## 7. Source register

- Buildings of Ireland search results, County Dublin page 11, including 11351005, 11352001 and 11352002: https://www.buildingsofireland.ie/buildings-search/?county=DU&date_from=&date_to=&group=&location_type=building&query=&search_page=11&town=&townland=&type=
- Strand Road graveyard search result: https://www.buildingsofireland.ie/buildings-search/?county=&date_from=&date_to=&group=&location_type=building&query=Graveyard&search_page=9&type=
- Fingal County Council archaeological report, Burrow/Portmarnock: https://www.fingal.ie/sites/default/files/2022-12/22E0601.%20Burrow%2C%20Portmarnock%20Final%20archaeological%20report%20%282%29.pdf
- DART+ West EIAR Chapter 21, architectural heritage: https://www.dartplus.ie/S3mvc/media/DART-West-Railway-Order/4%20EIAR/Volume%202%20Main%20Text/Chapter-21-Architectural-Heritage.pdf
- DART+ West EIAR, built heritage structures appendix: https://www.dartplus.ie/S3mvc/media/DART-West-Railway-Order/4%20EIAR/Volume%204%20Appendices/Chapter%2021%20Architectural%20Heritage/A21-2-Built-Heritage-Structures.pdf
- DART+ West bridge interventions assessment: https://www.dartplus.ie/getattachment/8b5ecf18-b246-4981-9e09-2519463b7273/Annex-6-2-Bridge-Interventions-Assessment.pdf
- Buildings of Ireland, Shankill Carnegie Free Library: https://www.buildingsofireland.ie/buildings-search/building/60260117/shankill-carnegie-free-library-new-vale-library-road-shankill-shankill-co-dun-laoghaire-rathdown
- Buildings of Ireland, Cabinteely Carnegie Free Library: https://www.buildingsofireland.ie/buildings-search/building/60260244/cabinteely-carnegie-free-library-old-bray-road-cabinteely-cabinteely-co-dublin
- NMS Historic Environment Viewer: https://www.archaeology.ie/advice-and-support/locate-a-monument-or-wreck/historic-environment-viewer/

## 8. Production change statement

Documentation-only research batch. The production object catalogue, map data, website application, photographs and public-facing content were not changed.
