# CICAN Dublin Archive — NIAH Source Conflict Resolution and Coordinate Provenance, Batch 006

**Research date:** 20 November 2026  
**Scope:** Reconcile Barnhill Bridge identity; check Strand Road graveyard reference and coordinate provenance; refine collision audit.  
**Status:** Research-only. No production catalogue objects or map pins created.

## 1. Executive result

The Barnhill Bridge conflict is substantially resolved. Multiple independent sources converge on one protected structure:
- NIAH registration 11352001;
- Fingal Record of Protected Structures (RPS) entry 712;
- location Barnhill Bridge, R149 Road, Barnhill;
- DART+ West built-heritage entry BH-168;
- railway overbridge, single-span stone/limestone arch.

The short NIAH search-result text saying “single-arch stone bridge over river” conflicts with the local-authority protected-structure description and the detailed DART+ West assessment. The best-supported interpretation is that the short NIAH text is inaccurate or incomplete, not that the DART+ documents describe a separate nearby structure. Preserve the source discrepancy in the archive provenance rather than silently replacing the NIAH wording.

## 2. Barnhill Bridge — identity and spatial evidence

### Primary identifiers and agreement

| Field | Evidence |
|---|---|
| NIAH | 11352001 |
| Fingal RPS | 712 |
| DART+ West built-heritage ID | BH-168 |
| Named location | Barnhill Bridge, R149 Road, Barnhill |
| Townland | Barnhill |
| Parish / barony | Clonsilla / Castleknock |
| Classification | Railway overbridge |
| ITM coordinate | E 703157, N 738857 |
| Description in DART+ West appendix | Single-span railway bridge with three-centred arch |
| Statutory protection in EIAR schedule | Yes |

The DART+ West Appendix A21.2 lists all of these identifiers in one record. The Fingal RPS schedule separately describes RPS 712 as a stone arched bridge with a single arch over the disused Dublin–Navan railway line, with replacement parapet walls and the original stone arch retained. The DART+ West Chapter 21 table identifies BH-170 as Barnhill Bridge, a railway overbridge, and associates it with RPS 712 and NIAH 11352001. The bridge-intervention assessment also identifies the same NIAH reference and describes track-lowering works beneath it.

### Resolution status

**Substantially reconciled; retain a source-text conflict note.**

The NIAH search result short description “over river” is not consistent with the Fingal RPS description or the DART+ West engineering and heritage schedules. The latter sources identify the railway as the structure crossed by the bridge. The archive should:
1. preserve the NIAH wording verbatim in a source quotation field;
2. record the RPS and DART+ West descriptions as separate source statements;
3. use “railway overbridge” as the reconciled classification, attributed to RPS and DART+ West;
4. keep the record's evidence status as source-reconciled, not field-verified;
5. avoid describing the bridge as crossing a river unless a primary source or field inspection establishes that feature.

## 3. Packenham Bridge — corroborating control case

DART+ West Appendix A21.2 identifies:
- NIAH 11352002;
- RPS 711 (Fingal County Council);
- Packenham Bridge, Barberstown Lane;
- ITM E 703760, N 738225;
- classification: canal bridge;
- description: single-span limestone canal bridge with elliptical arch.

This is consistent with the NIAH search-result description of a limestone humpback road bridge over the Royal Canal, c.1820. The DART+ coordinate and classification provide a useful cross-check for the nearby Barnhill record, but no geometry overlay has been performed in this batch.

## 4. Strand Road / Saint Marnock's graveyard — reference and coordinate provenance

### Record identity

- NIAH reference: 11351005
- Fingal Historic Graveyards Project survey reference: FHG 7
- RMP reference: DU015-00704 (graveyard)
- RPS reference: 478
- Location: Strand Road, Burrow, Portmarnock

The Fingal Historic Graveyards Project identifies NIAH 11351005 as the graveyard and records the associated medieval church as DU015-00701. It also notes a wall monument DU015-00705, a holy well DU015-00702 and an ogham stone DU015-00703. The report says no visible trace of the well or ogham stone was present at the time of its survey; these should not be represented as extant features without newer evidence.

A later archaeological report also identifies the NIAH graveyard record and distinguishes the church, graveyard and wall monument records.

### Coordinate-system caution

The Historic Graveyards Project reports X 324503, Y 243496 but labels these only as X/Y coordinates; it does not identify the coordinate reference system in the cited entry. A separate 2025 underwater archaeological impact assessment reports the NIAH 11351005 point as ITM 724409 E, 743512 N. These coordinate pairs must not be compared as though they share a CRS. The earlier Fingal survey coordinates are likely from a different Irish grid convention, but this batch does not assert a conversion or transformation.

**Archive decision:** retain both source coordinate pairs with their original field labels and source references. Only the explicitly identified ITM pair may be treated as ITM. Do not publish either as a WGS84 pin until the original coordinate reference of the FHG survey is established and the point has been checked against authoritative mapping.

## 5. Catalogue collision audit refinement

The canonical `data/objects.json` still contains 452 objects. Exact NIAH reference checks for all five Batch 004 candidates return zero existing records.

A broad free-text search for the phrase “Strand Road” returns two unrelated North Strand Road objects in Dublin 3:
- DUB-STR-0056 — George V McDowall Steven pillar postbox;
- DUB-STR-0057 — 1820s Howth milestone.

These are not collisions with the Portmarnock graveyard; the shared words are only “Strand Road”. The audit must compare complete locality/address and feature identity, not treat partial street-name substring matches as duplicates.

No exact Barnhill Bridge, Packenham Bridge, Shankill Carnegie Free Library or Cabinteely Carnegie Free Library name match was found in the tested object text fields.

## 6. Remaining verification

- Obtain official NIAH Feature Service / HEV export rows and retain the source file with retrieval date.
- Confirm the exact `LOCAL_AUTHORITY_` attribute values from the NIAH records.
- Establish the CRS of the Fingal Historic Graveyards Project X/Y values from its metadata or original GIS deliverable.
- Compare the NIAH geometry for Barnhill and Packenham against the RPS/DART+ ITM points and the Royal Canal / railway alignment.
- Perform a documented transformation to WGS84 only after CRS and source geometry are verified.
- Field-verify current condition and public-viewing position before marking any object as field-verified.

## 7. Source register

- Buildings of Ireland County Dublin search result, including NIAH 11352001 and 11352002: https://www.buildingsofireland.ie/buildings-search/?county=DU&date_from=&date_to=&group=&location_type=building&query=&search_page=11&town=&townland=&type=
- DART+ West EIAR Volume 4 Appendix A21.2, Built Heritage Structures, page 64: https://www.dartplus.ie/S3mvc/media/DART-West-Railway-Order/4%20EIAR/Volume%204%20Appendices/Chapter%2021%20Architectural%20Heritage/A21-2-Built-Heritage-Structures.pdf
- DART+ West EIAR Chapter 21, Architectural Heritage: https://www.dartplus.ie/S3mvc/media/DART-West-Railway-Order/4%20EIAR/Volume%202%20Main%20Text/Chapter-21-Architectural-Heritage.pdf
- Fingal County Council, Record of Protected Structures, entry 712: https://consult.fingal.ie/en/consultation/draft-fingal-development-plan-2017-%E2%80%93-2023-stage-2/chapter/appendix-2-record-protected
- DART+ West Bridge Interventions Assessment, Annex 6.2: https://www.dartplus.ie/getattachment/8b5ecf18-b246-4981-9e09-2519463b7273/Annex-6-2-Bridge-Interventions-Assessment.pdf
- Fingal Historic Graveyards Project, Volume 2, FHG 7: https://www.fingal.ie/sites/default/files/2019-03/Fingal%20Historic%20Graveyards%20Project%20Volume%202.pdf
- Fingal archaeological report, Burrow/Portmarnock: https://www.fingal.ie/sites/default/files/2022-12/22E0601.%20Burrow%2C%20Portmarnock%20Final%20archaeological%20report%20%282%29.pdf
- 2025 underwater archaeological impact assessment, NIAH 11351005 coordinate listing: https://www.maritimeregulator.ie/wp-content/uploads/2025/11/230018-Underwater-Archaeological-Impact-Assessment_redacted.pdf

## 8. Production change statement

Documentation-only research batch. No production objects, map pins, images, public-facing website content or application code were changed.
