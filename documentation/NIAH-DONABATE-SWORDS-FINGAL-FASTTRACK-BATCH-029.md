# NIAH Donabate–Swords–Fingal Bulk FastTrack — Batch 029

**Project:** CICAN Dublin Archive  
**Date:** 20 November 2026  
**Batch target:** Up to 100 fully verified registrations  
**Outcome:** 12 individual NIAH records verified and absent from all three current archive datasets. Production additions: 0.

## Why this batch is smaller than 100

The bulk-first method was attempted using the official NIAH download resources. The NIAH confirms that its Dublin CSV covers Dublin City, Fingal and South Dublin, and includes registration numbers, descriptions, ratings and coordinates. The national data.gov.ie CSV resource is advertised as current to 10 November 2026 and CC BY 4.0. However, the bulk CSV and ArcGIS service could not be retrieved in this execution environment. We therefore did not fabricate a 100-record bulk result.

Instead, the official NIAH Dublin search result page (page 5) was used as a discovery index, and individual NIAH records were opened and checked. Only records with accessible individual NIAH pages and exact repository deduplication results are included below.

## Repository-wide exact deduplication

The current full Git blobs were retrieved and parsed:

- `data/objects.json`: 462 records
- `data/niah-registered-objects.json`: 342 records
- `data/sources.json`: 580 records

All 12 registrations below returned zero exact registration-number matches in all three datasets.

## Verified registrations

| NIAH number | Record | Rating | NIAH date range | NIAH page coordinate pair |
|---|---|---|---|---|
| 11336015 | Donabate Railway Station, Turvey Avenue, Beaverstown | Regional | 1850–1870 | 322767, 249980 |
| 11336016 | Main Street, Beaverstown — graveyard | Regional | 1840–1900 | 322851, 249960 |
| 11336022 | Smyth, Turvey Avenue, Corballis | Regional | 1830–1850 | 322780, 249919 |
| 11336023 | Seafield House — farmyard complex, Ballymadrough | Regional | 1850–1860 | 321153, 248448 |
| 11336024 | Seafield House — Palladian country house, Ballymadrough | National | 1740–1760 | 321209, 248439 |
| 11337001 | Balcarrick Martello Tower | National | 1800–1810 | 325174, 249219 |
| 11341001 | Corrstown House, Corrstown | Regional | 1830–1850 | 311507, 246822 |
| 11342001 | Knocksedan Bridge, Brazil | Regional | 1780–1820 | 315171, 246632 |
| 11342003 | Brackenstown House — gate lodge | Regional | 1820–1860 | 315584, 245920 |
| 11342004 | Knocksedan House | Regional | 1750–1770 | 315212, 246446 |
| 11342005 | Brazil — detached house | Regional | 1750–1850 | 315100, 246789 |
| 11342007 | Chapelmidway Bridge, Corrstown | Regional | 1780–1860 | 312337, 246196 |

All coordinate pairs above are transcribed from the individual NIAH pages. The individual page does not label the coordinate reference system, so these pairs are retained as source text only and are **not approved for WGS84 conversion or map pins** until matched by REG_NO against the official Dublin CSV or GIS service.

## Individual official records

- 11336015: https://www.buildingsofireland.ie/buildings-search/building/11336015/donabate-railway-station-turvey-avenue-beaverstown-donabate-co-dublin
- 11336016: https://www.buildingsofireland.ie/buildings-search/building/11336016/main-street-beaverstown-donabate-co-dublin
- 11336022: https://www.buildingsofireland.ie/buildings-search/building/11336022/smyth-turvey-avenue-corballis-ns-by-donabate-co-dublin
- 11336023: https://www.buildingsofireland.ie/buildings-search/building/11336023/seafield-house-ballymadrough-co-dublin
- 11336024: https://www.buildingsofireland.ie/buildings-search/building/11336024/seafield-house-ballymadrough-co-dublin
- 11337001: https://www.buildingsofireland.ie/buildings-search/building/11337001/balcarrick-martello-tower-balcarrick-co-dublin
- 11341001: https://www.buildingsofireland.ie/buildings-search/building/11341001/corrstown-house-corrstown-co-dublin
- 11342001: https://www.buildingsofireland.ie/buildings-search/building/11342001/knocksedan-bridge-brazil-co-dublin
- 11342003: https://www.buildingsofireland.ie/buildings-search/building/11342003/brackenstown-house-brackenstown-co-dublin
- 11342004: https://www.buildingsofireland.ie/buildings-search/building/11342004/knocksedan-house-knocksedan-co-dublin
- 11342005: https://www.buildingsofireland.ie/buildings-search/building/11342005/brazil-co-dublin
- 11342007: https://www.buildingsofireland.ie/buildings-search/building/11342007/chapelmidway-bridge-corrstown-chapelmidway-co-dublin

## Explicit exclusions / duplicate control

- 11336014 Turvey Avenue bridge was not included because the exact registration number already appears in the master catalogue.
- 11336025–11336028 were excluded because they already appear in the existing master/public NIAH datasets.
- 11336013 and 11336018 were present in the official NIAH search index but their individual record fetches returned access errors in this session; they remain unverified for this batch and are not counted.

## Found / verified / published

- **Found:** 12 new official NIAH registrations from the accessible individual records.
- **Verified:** 12 individual NIAH records, including their exact registration numbers, record identity, rating, date range and page coordinate pair.
- **Published:** 0. Coordinate CRS reconciliation and image-rights/access checks remain outstanding.
- **Excluded as already present:** 5 registrations identified in the page-five index (11336014 and 11336025–11336028).
- **Pending individual-page retrieval:** 2 (11336013 and 11336018).

## Next bulk-ingestion improvement

The next technical priority is to retrieve the official CSV or query the official Feature Service from an environment that can access the resource, then filter Dublin local authorities and join by `REG_NO`. This will support the intended 100-record verification batches. The official download page says the Dublin CSV includes all three Dublin authorities; the data.gov.ie resource advertises the national CSV and CC BY 4.0 reuse licence. The live service terms must also be observed before using the GIS API.

Official dataset references:
- https://www.buildingsofireland.ie/niah-data-download/
- https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/433f91ea-0b54-4753-99b2-d484baf2c7ec
- https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildingsOpenData/FeatureServer

---
**Batch 029 is a 12-record verified research batch, not a completed 100-record batch. No production data, map pins, image assets, SEO pages or sitemap entries were changed.**
