# CICAN Dublin — NIAH Discovery Batch 091

**Reviewed:** 24 November 2026  
**Status:** Research-only candidate packet; no catalogue import or publication  
**Scope:** Five Dublin City NIAH registrations on North Earl Street

## Selection and source controls

The five registrations below are the next five sequential Dublin City candidates after Batch 090, and each occurs exactly once in the refreshed official four-authority missing-registration queue (workflow run 45322466436, artifact 14888302603). All five are assigned to Dublin City Council / County Dublin. Number sequence alone is not used as evidence of eligibility.

Each individual Buildings of Ireland NIAH page was located and reviewed. The national CSV row and individual page text are kept as separate source fields. The CSV WGS84 latitude/longitude and ITM coordinates (EPSG:2157) are recorded separately. The raw page coordinate pairs are also retained separately without inferring their CRS.

## Candidate register

| NIAH registration | Official page heading | CSV NAME | Address |
|---|---|---|---|
| 50010249 | Dunnes Stores | Dunnes Stores | 28 Earl Street North, Dublin 1 |
| 50010250 | Duffy’s Fabrics | Contains U+FFFD replacement character | 27 Earl Street North, Dublin 1 |
| 50010251 | The Earl Bakery and Restaurant | The Earl Bakery and Restaurant | 26 Earl Street North, Dublin 1 |
| 50010252 | Madigan’s Bar | Contains U+FFFD replacement character | 25 Earl Street North, Dublin 1 |
| 50010253 | Boyer’s Department Store | Contains U+FFFD replacement character | 19–22 Earl Street North, Dublin 1 |

## Record-level evidence

- **50010249 — Dunnes Stores:** The official page describes a 1917–19 commercial building designed by George L. O’Connor, with a granite parapet and pediment, giant Ionic pilasters, rusticated granite at first-floor level and a double-height oriel window. The national CSV description/appraisal contains replacement-character corruption; clean page transcription is kept separately.
- **50010250 — Duffy’s Fabrics:** The official page describes a four-storey commercial building dated 1918 and designed by George Sheridan, with a hipped slate roof, dated rainwater hopper, rusticated limestone first floor and timber sash windows. The national CSV NAME field contains U+FFFD in place of the apostrophe character; the official page heading is used only as the display name.
- **50010251 — The Earl Bakery and Restaurant:** The official page describes a 1917–19 four-storey retail premises designed by George L. O’Connor, with red brick and Portland stone detailing and a double-height bow-fronted oriel window. The CSV appraisal contains a replacement-character encoding error in “façade”.
- **50010252 — Madigan’s Bar:** The official page describes a four-storey red brick and granite public house, built 1917–19 and designed by Laurence McDonnell, with a modillion cornice, sash windows and a later shopfront. The national CSV NAME field contains U+FFFD in place of the apostrophe character.
- **50010253 — Boyer’s Department Store:** The official page describes a 1908 nine-bay red brick and granite retail premises designed by Frederick Higginbotham, with Doric pilasters and granite dressings. The national CSV NAME and APPRAISAL contain U+FFFD replacement-character corruption in the name; the official page heading and clean appraisal are kept separately.

Full official-page descriptions, appraisals, source values and coordinate pairs are preserved in `audit/batch-091-five-candidate-evidence.json`.

## Data-quality cautions

1. The CSV NAME fields for 50010250, 50010252 and 50010253 contain U+FFFD replacement characters. Preserve those raw values; do not silently repair them in the source layer.
2. The CSV DESCRIPTION and/or APPRAISAL fields for 50010249, 50010251 and 50010253 also contain replacement-character corruption. The clean text is transcribed from the corresponding individual official NIAH pages and is stored separately.
3. Official CSV WGS84 and ITM coordinates are separate fields. Raw coordinate pairs shown on individual pages are retained independently; their CRS is not inferred.
4. The five addresses are separate adjacent premises. Their close coordinates are expected for a continuous terrace; proximity alone is not a duplicate finding.
5. Survey-era use and descriptions do not establish current occupancy, condition, access or permission to photograph.

## Duplicate and proximity review

- Each candidate appears exactly once in the refreshed official missing-registration queue.
- None of the five exact registrations appears in the 509-record official-register audit.
- GitHub issue searches and pull-request searches for each exact registration returned no matches.
- Full master-catalogue exact registration/address/name/source-ID and 30-metre coordinate-proximity checks are performed by `scripts/reconcile-niah-batch-091.mjs` in CI. Any nearby records must be manually compared by identity; proximity alone is not a duplicate.

## Publication boundary

This batch is research-only. No permanent archive IDs, master objects, public NIAH register entries, source records, visual inventory records, map pins or SEO pages are created. Production remains unchanged. Publication requires a separate review of the CI reconciliation report, source transcription, schema and technical checks.

## Official individual NIAH pages

- [50010249 — Dunnes Stores](https://www.buildingsofireland.ie/buildings-search/building/50010249/dunnes-stores-28-earl-street-north-dublin-1-dublin)
- [50010250 — Duffy’s Fabrics](https://www.buildingsofireland.ie/buildings-search/building/50010250/duffys-fabrics-27-earl-street-north-dublin-1-dublin)
- [50010251 — The Earl Bakery and Restaurant](https://www.buildingsofireland.ie/buildings-search/building/50010251/the-earl-bakery-and-restaurant-26-earl-street-north-dublin-1-dublin)
- [50010252 — Madigan’s Bar](https://www.buildingsofireland.ie/buildings-search/building/50010252/madigans-bar-25-earl-street-north-dublin-1-dublin)
- [50010253 — Boyer’s Department Store](https://www.buildingsofireland.ie/buildings-search/building/50010253/boyers-department-store-19-22-earl-street-north-dublin-1-co-dublin)
