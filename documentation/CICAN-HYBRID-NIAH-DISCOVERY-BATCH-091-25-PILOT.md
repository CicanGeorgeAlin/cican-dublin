# CICAN Dublin — NIAH Batch 091 (25-record scale-up pilot)

**Status:** research-only pilot; no archive records or production data are created by this batch.

## Why this batch exists

Batch 091 tests a 25-candidate research and reconciliation workload before the archive moves to a normal target of 50 candidates per batch. The source queue is regenerated from the official national NIAH CSV by the existing four-authority audit workflow.

## Selection rule

Select the first 25 rows after registration 50010248 that:
- occur exactly once in the refreshed missing-registration queue;
- are assigned to Dublin City Council; and
- have COUNTY=DUBLIN.

Registration 50010259 is deliberately excluded because the queue assigns it to South Dublin County Council. The sequence is not assumed to be continuous or eligible merely because a registration number follows another.

## Pilot registrations

| Registration | Display heading | Official individual page |
|---|---|---|
| 50010249 | Dunnes Stores | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010249/dunnes-stores-28-earl-street-north-dublin-1-dublin) |
| 50010250 | Duffy’s Fabrics | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010250/duffys-fabrics-27-earl-street-north-dublin-1-dublin) |
| 50010251 | The Earl Bakery and Restaurant | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010251/the-earl-bakery-and-restaurant-26-earl-street-north-dublin-1-dublin) |
| 50010252 | Madigan’s Bar | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010252/madigans-bar-25-earl-street-north-dublin-1-dublin) |
| 50010253 | Boyer’s Department Store | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010253/boyers-department-store-19-22-earl-street-north-dublin-1-dublin) |
| 50010254 | 14 North Earl Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010254/ice-babe-14-north-earl-street-marlborough-street-dublin-1-dublin) |
| 50010255 | Meteor | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010255/meteor-13-earl-street-north-dublin-1-co-dublin) |
| 50010256 | Guineys | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010256/guineys-earl-street-north-dublin-1-dublin-city) |
| 50010257 | Bonavox Hearing Aids | **HOLD:** only legacy queue URL available; canonical individual page not independently verified |
| 50010258 | Nice Price | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010258/nice-price-4-earl-street-north-dublin-1-dublin) |
| 50010260 | Hot Wok Thai Noodle Bar | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010260/hot-wok-thai-noodle-bar-2-earl-street-north-dublin-1-co-dublin) |
| 50010261 | North Earl Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010261/north-earl-street-oconnell-street-lower-dublin-1-dublin) |
| 50010262 | 92 Marlborough Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010262/92-marlborough-street-dublin-1-co-dublin) |
| 50010263 | 93 Marlborough Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010263/the-compassion-centre-marlborough-street-dublin-1-co-dublin) |
| 50010264 | Dublin United Transport Company | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010264/dublin-united-transport-company-marlborough-street-dublin-1-dublin) |
| 50010265 | Ladbrokes | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010265/ladbrokes-sackville-place-dublin-dublin-city) |
| 50010266 | Saks Hair Salon/Phish International Services Ltd | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010266/saks-hair-salon-phish-international-services-ltd-15-sackville-place-dublin-1-co-dublin) |
| 50010267 | The Sackville | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010267/the-sackville-16-sackville-place-dublin-1-dublin) |
| 50010268 | Unity Building | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010268/unity-building-sackville-place-oconnell-street-lower-dublin-1-dublin) |
| 50010269 | Cummins and Sons | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010269/cummins-and-sons-marlborough-street-abbey-street-lower-dublin-1-dublin) |
| 50010270 | The Flowing Tide | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010270/the-flowing-tide-9-abbey-street-lower-marlborough-street-dublin-1-dublin) |
| 50010271 | Dublin Central Mission | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010271/dublin-central-mission-lower-abbey-street-dublin-1-dublin) |
| 50010272 | 9–9B Lower Abbey Street | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010272/9-9b-lower-abbey-street-dublin-1-dublin) |
| 50010273 | Veritas Building | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010273/veritas-building-7-8-lower-abbey-street-dublin-1-co-dublin) |
| 50010274 | Reynolds | [NIAH record](https://www.buildingsofireland.ie/buildings-search/building/50010274/reynolds-6-lower-abbey-street-dublin-1-co-dublin) |

## Source anomalies to preserve

- 50010250 and 50010252: national CSV NAME values contain U+FFFD replacement characters; official individual page headings are stored separately.
- 50010254: national CSV NAME is blank; retain the blank raw field.
- 50010257: individual canonical NIAH page not independently verified; hold from any publication input.
- 50010273: national CSV NUMBER is the malformed date-like value `07-Aug`; preserve it verbatim and do not infer a street number from it.

## Automated gate

`scripts/reconcile-niah-batch-091-25.mjs` verifies:
- exactly 25 unique candidates;
- exact queue membership and Dublin City Council / County Dublin scope;
- official WGS84 and ITM coordinate presence and plausible bounds;
- canonical individual page status;
- exact registration, address and source-ID conflicts;
- exact-name matches and 30-metre proximity for manual review;
- candidate-to-candidate proximity.

The script writes `audit/batch-091-25-candidate-reconciliation.json`. Any unresolved page, source anomaly, exact-name match or proximity result remains visible for manual review. A successful pilot does not itself authorize publication.

## Coordinate and publication safeguards

All coordinates remain source-derived from the national NIAH CSV. They are not founder GPS or field-verified positions. No permanent archive IDs, master objects, public NIAH register entries, source records, visual records, map pins or SEO pages are created by this research batch. NIAH image URLs are not treated as permission to reuse photographs.
