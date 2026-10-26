# CICAN DUBLIN ARCHIVE

**Created by CICAN GEORGE ALIN · Dublin, Ireland**

An evidence-first visual archive of Dublin's monuments, memorials, inscriptions, buildings, infrastructure, streets and overlooked historic details.

## Live website

https://cicangeorgealin.github.io/cican-dublin-archive/

## Current catalogue

The catalogue currently contains **122 records** across Dublin 1, Dublin 2 and Dublin 3, linked to **154 source entries**. The current district distribution is 46 records in Dublin 1, 34 in Dublin 2 and 42 in Dublin 3. Recent research has added individually documented discoveries including historic post boxes, lamp standards, coal-hole covers, boot scrapers, railings and Georgian entrance details.

- **120 VERIFIED** records.
- **2 PARTIALLY_VERIFIED** records, where specific details still require field confirmation.
- **122 awaiting original founder photography**.
- No record is marked photographed, illustrated or published.

This is an expanding research inventory, not a complete survey of Dublin. All 122 records currently carry a source-derived map coordinate and a National Inventory reference; these points are not founder-recorded GPS fixes and still require field verification.

## Locked map baseline

The current map-marker implementation is preserved as **MAP MARKER SYSTEM V1 BASELINE** on the [`baseline/v1-map-marker-system`](https://github.com/CicanGeorgeAlin/cican-dublin-archive/tree/baseline/v1-map-marker-system) branch. Recovery commit: `afc74b4a0814a856efe5f6f97a4ad3bfebbcc0bb`. Future map improvements should preserve this reference point.

## Core mission

Discover, verify and catalogue Dublin's historic physical environment. The founder photographs each location in person. Original photographs are preserved separately and may be converted into faithful black-and-white A4 line-art illustrations for themed publications.

## Production workflow

RESEARCH → VERIFY → REGISTER → PLAN FIELDWORK → FOUNDER PHOTOGRAPHS → ARCHIVE ORIGINAL → CREATE LINE ART → QUALITY CONTROL → WEBSITE → PUBLISH.

## Integrity rules

- Every discovery receives one unique archive ID.
- Historical claims must be supported by sources.
- Verified records, partial verifications and research leads remain distinct.
- Never invent coordinates, object details, images or publication URLs.
- Photography is marked complete only after founder confirmation.
- Preserve original photographs separately from derivative artwork.
- Check for duplicates before creating records.
- Respect access, safety, copyright and photography restrictions.

## Repository structure

- `data/objects.json` — master object catalogue.
- `data/districts.json` — postal-district fieldwork zones.
- `data/coverage-zones.json` — Dublin local authorities and geographic coverage plan.
- `data/categories.json` — discovery taxonomy.
- `data/sources.json` — source registry.
- `schemas/` — JSON Schema contracts for objects, sources and geographic zones.
- `documentation/` — project standards, research batches and data architecture.
- `routes/` — proposed and completed fieldwork plans.
- `research/` — source-based investigations.
- `photos/originals/` — founder's original photographs.
- `line-art/` — approved illustrations.
- `books/` — publication source files and metadata.

## Website

The website provides a responsive warm editorial catalogue with ivory, charcoal and muted woodland-green accents, including:

- Search across record names, IDs, addresses, categories, historical descriptions, periods, significance, references, research notes and photography briefs.
- Category and district filters.
- Name or district sorting.
- A record detail view with location, historical context, access notes, source links and photography checklist.
- A live catalogue overview showing total records, verified records and records awaiting photography.

The website displays research records as placeholders until original field photographs are added. It does not use stock or generated images as substitutes.

## Geographic and coordinate accuracy

All **122 current records** now have decimal WGS 84 coordinates derived from their published NIAH Irish Grid references (TM65 / Irish Grid, EPSG:29902), transformed using EPSG operation 1641. The original Irish Grid references remain preserved in the catalogue. Every WALK THERE link uses the record's latitude and longitude as its Google Maps walking destination, not an address or street-name search.

These are **source-derived map points, not founder-recorded GPS fixes**. NIAH dataset metadata explains that legacy point centroids were digitised relative to OSI 6-inch mapping and may need revision against larger-scale mapping. The EPSG coordinate transformation has a published 1 m accuracy, but that does not establish the accuracy of the underlying NIAH point. Field verification remains outstanding; no coordinate is labelled FIELD_VERIFIED until checked on site. Future records must retain a published coordinate reference or another documented source—never estimate a pin from an address.

Postal districts are operational research zones, not proof that an area has been fully surveyed.

## Social sharing

The homepage and archive page use the same 1200 × 630 CICAN feature image for Open Graph and large-card social previews. GitHub Actions renders the PNG from the repository's SVG source during deployment.

## Founder

CICAN GEORGE ALIN  
Dublin, Ireland
