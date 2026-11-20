# NIAH Skerries FastTrack Research — Batch 027

**Project:** CICAN Dublin Archive  
**Scope:** Three new Dublin NIAH registrations in Skerries, Fingal  
**Research date:** 20 November 2026  
**Status:** Research checkpoint only — no production records or map pins added

## Method

This pass follows the NIAH-only publishing rule. Each candidate was checked against the official Buildings of Ireland / NIAH individual record and exact registration-number membership was checked against the current repository files:

- Master catalogue: `data/objects.json` — 462 records
- Public NIAH collection: `data/niah-registered-objects.json` — 342 records
- Source registry: `data/sources.json` — 580 records

The master catalogue was retrieved from its Git blob after the normal file-content route returned an empty payload. All three candidate numbers returned zero exact matches in each of the three files.

## Three records identified

### 1. NIAH 11311025 — 5 Convent Lane, Skerries

- Official record: https://www.buildingsofireland.ie/buildings-search/building/11311025/fingal
- Rating: Regional
- Special interest: Architectural, Social
- Original / current use: House
- Date: 1750–1850
- NIAH description: Terraced three-bay, single-storey thatched house, c.1800, with a later corrugated-iron-roofed extension.
- NIAH page coordinate pair: 325355, 260523. The individual page does not label the coordinate reference system; do not convert or publish it as a map point until reconciled against the official Dublin CSV / GIS data.
- Source: Official NIAH individual record.

### 2. NIAH 11311030 — Skerries Mills (windmill)

- Official record: https://www.buildingsofireland.ie/buildings-search/building/11311030/skerries-mills-townparks-ba-e-by-skerries-co-dublin
- Rating: National
- Special interest: Architectural, Technical
- Original / current use: Windmill
- Date: 1500–1550
- NIAH description: Windmill, c.1525, circular in plan, with a thatched conical roof and four canvas sails; restored c.1995.
- NIAH page coordinate pair: 325044, 259936. The individual page does not label the coordinate reference system; do not convert or publish it as a map point until reconciled against the official Dublin CSV / GIS data.
- Source: Official NIAH individual record.

### 3. NIAH 11311031 — Skerries Mills (watermill)

- Official record: https://www.buildingsofireland.ie/buildings-search/building/11311031/skerries-mills-townparks-ba-e-by-skerries-dublin
- Rating: Regional
- Special interest: Architectural, Technical
- Original use: Water mill
- Current use: Heritage centre / interpretative centre
- Date: 1830–1850
- NIAH description: Watermill, c.1840, comprising multiple-bay, two-storey roughly dressed rubble-stone buildings with mill pond, mill-race, sluice gates and waterwheel; the watermill closed in 1931 and bakery use operated from 1846 to 1986.
- NIAH page coordinate pair: 325230, 259913. The individual page does not label the coordinate reference system; do not convert or publish it as a map point until reconciled against the official Dublin CSV / GIS data.
- Source: Official NIAH individual record.

## Deduplication result

| Registration | Master catalogue | Public NIAH collection | Source registry |
|---|---:|---:|---:|
| 11311025 | 0 | 0 | 0 |
| 11311030 | 0 | 0 | 0 |
| 11311031 | 0 | 0 | 0 |

These three registrations are separate NIAH records. In particular, 11311030 is a windmill and 11311031 is a watermill; they must not be merged merely because both are part of Skerries Mills.

## Publishing decision

**Found:** 3 official NIAH registrations.  
**Verified:** 3 registration identities and their individual NIAH record details.  
**Published:** 0.

No production object was created in this batch. The NIAH data-download page states that its Dublin CSV covers Dublin City, Fingal and South Dublin and supplies location data in ITM, latitude/longitude and National Grid. The Dublin ZIP resource was identified, but could not be retrieved in this pass. Therefore the page coordinate pairs above remain unlabelled and are not approved for map use.

Before publication:
1. Retrieve and match each registration in the official Dublin CSV or NIAH GIS service.
2. Confirm the coordinate reference system and retain the original coordinate values and transformation provenance.
3. Confirm the current site/address and any relevant access restrictions from appropriate sources.
4. Check image availability, source attribution and reuse/licensing terms before adding images.
5. Add the accepted entries consistently to the master catalogue, public NIAH collection, source registry, visual inventory, individual SEO pages and sitemap.
6. Run schema, duplicate, website and deployment checks.

## Official supporting sources

- NIAH 11311025: https://www.buildingsofireland.ie/buildings-search/building/11311025/fingal
- NIAH 11311030: https://www.buildingsofireland.ie/buildings-search/building/11311030/skerries-mills-townparks-ba-e-by-skerries-co-dublin
- NIAH 11311031: https://www.buildingsofireland.ie/buildings-search/building/11311031/skerries-mills-townparks-ba-e-by-skerries-dublin
- NIAH Dublin data download and coordinate formats: https://www.buildingsofireland.ie/niah-data-download/

---
**Batch 027 outcome:** Three official registrations identified and individually checked; all three are new to the current 462-object master catalogue, 342-entry public NIAH collection and 580-entry source registry. Coordinate reconciliation remains the publication gate.
