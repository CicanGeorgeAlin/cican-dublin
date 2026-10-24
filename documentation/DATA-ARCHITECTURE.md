# CICAN DUBLIN ARCHIVE — Data Architecture

**Version:** 1.0  
**Owner:** CICAN GEORGE ALIN  
**Scope:** Dublin City and County Dublin

## Purpose

This document defines the common data model used by the research catalogue, map, field missions and public visual archive. A discovery must be recorded once and then reused by every part of the site. The catalogue is the source of truth; map markers, filters, mission lists and detail views are generated from it.

## Core collections

| File | Role |
|---|---|
| `data/objects.json` | Master catalogue of physical discoveries |
| `data/sources.json` | Reusable evidence/source registry |
| `data/districts.json` | Geographic research and coverage zones |
| `data/categories.json` | Human-readable discovery taxonomy |
| `routes/` | Curated field routes and mission groupings |
| `photos/originals/` | Founder-supplied original photographs |
| `line-art/` | Approved derivative illustrations |

JSON Schema contracts are stored in `schemas/`. They define valid record shapes without changing or silently rewriting the current catalogue.

## Object identity and hierarchy

Every distinct discovery receives one permanent ID in the form `DUB-XXX-NNNN`. The category abbreviation is a stable identifier, not a description of historical importance.

Use `parent_id` when a separately documentable detail belongs to a larger site or object. Examples: a plaque on a memorial, a lamp standard beside a monument, or a carved date on a building. A parent record does not automatically prove that every child feature has been documented.

Use `feature_type` to distinguish:
- `SITE`: a park, square, cemetery, campus, bridge complex or other larger place.
- `PRIMARY_OBJECT`: a building, monument, structure or individually identifiable feature.
- `MICRO_DETAIL`: a plaque, lamp, gate component, carving, bollard or other distinct small feature.
- `SURFACE_OR_SEQUENCE`: a street, paving area, wall or repeated physical sequence documented as a parent area.

## Location and coordinate provenance

- Keep the supplied Irish National Grid reference in `national_grid_reference`; never place it in latitude or longitude.
- Decimal `latitude` and `longitude` must both be null until a defensible coordinate is available.
- `coordinate_status` records whether coordinates are unset, address-approximate, source-derived or field-verified.
- `coordinate_source` records where the point came from; `coordinate_accuracy_m` records a known estimated accuracy in metres.
- Do not present an approximate address pin as the exact position of a plaque or small detail.
- Preserve the source address in `address`; record its provenance separately when known.
- Navigation links are convenience links and are not evidence of exact object coordinates.

## Evidence model

Each object references one or more source IDs from `data/sources.json`. Each source has a stable ID, title, publisher, URL and access date. Optional source type and specific register reference improve traceability.

Verification values:
- `RESEARCH_LEAD`: candidate discovery; identity, location or significance remains unconfirmed.
- `PARTIALLY_VERIFIED`: some material facts are supported, but named uncertainties remain.
- `VERIFIED`: identity, location and material claims are supported by adequate cited evidence.

A source listing is not a claim that the founder has visited, photographed or independently inspected the object.

## Production lifecycle

| Stage | Field | Completion rule |
|---|---|---|
| Research | `verification_status` | Evidence and unresolved questions recorded |
| Field visit | `photography_status` | Mark photographed only after founder confirms original files are archived |
| Illustration | `line_art_status` | Mark created only after comparison with the original photograph |
| Publication | `publication_status` | Mark published only after a live publication record is verified |

Original photo paths and line-art paths are separate arrays. Never overwrite the original photograph with an edited image.

## Controlled categories

The current catalogue codes remain supported: `MONUMENT`, `ARCHITECTURE`, `STREET_DETAIL`, `MEMORIAL`, `INSCRIPTION` and `PUBLIC_ART`. The object schema reserves additional codes for archaeology, infrastructure, landscape, transport heritage, burial art, commercial history and other discoveries. Add a category to the human-readable category catalogue before using it in production records.

## Geographic coverage

Postal districts are work zones, not a complete administrative map of County Dublin. The district registry may later include local authority areas, neighbourhoods, townlands, parks, corridors and coastal zones. Coverage status describes research or fieldwork progress only; it must never imply that an entire area is exhaustively documented.

## Data quality gate for every new record

1. Search for duplicates by name, address, parent, register ID and known coordinates.
2. Assign a permanent unique ID.
3. Classify the physical feature and parent relationship.
4. Record address and district; keep unsupported coordinates null.
5. Add source records and cite the exact evidence supporting claims.
6. Set the verification state honestly and list unresolved questions.
7. Add access, safety and photography restrictions where known.
8. Write a useful field photography brief.
9. Validate the JSON record against `schemas/archive-object.schema.json`.
10. Add the record to the website only after the data checks pass.

## Compatibility and migration

The current 15 catalogue entries remain in their existing shape. New provenance fields are optional at this stage so the live site is not broken by a forced bulk migration. Future interface work must tolerate absent optional fields and display unknown data as unknown—not as guessed values.

## Next implementation stage

Build the discovery taxonomy and geographic coverage layer on top of these contracts, then expand the researched inventory district by district. The map and field-mission interface must consume the same catalogue rather than maintaining a second list of locations.
