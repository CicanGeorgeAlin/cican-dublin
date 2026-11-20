# NIAH Fingal Vernacular FastTrack — Batch 028

**Project:** CICAN Dublin Archive  
**Research date:** 20 November 2026  
**Scope:** Three official Dublin NIAH registrations: Milverton, Malahide and Portmarnock  
**Status:** Research-only checkpoint; no production objects, map pins, image files or SEO pages added.

## Method and repository deduplication

The complete master catalogue was retrieved from its Git blob (the ordinary file-content route had returned an empty response). Exact registration-number checks were run against all three current repository datasets:

- `data/objects.json`: 462 master records
- `data/niah-registered-objects.json`: 342 public NIAH records
- `data/sources.json`: 580 source records

All three registrations below returned zero exact matches in each dataset.

## 1. Ivy Lodge, Milverton — NIAH 11311038

Official record: https://www.buildingsofireland.ie/buildings-search/building/11311038/ivy-lodge-milverton-co-dublin

- Rating: Regional
- Special interests: Architectural, Social
- Original use: House
- Date range: 1910–1950; NIAH description dates the house to c.1930
- Description: Detached four-bay, single-storey thatched house with projecting gable-fronted entrance porch. NIAH records it as now derelict, with the original thatched roof mostly collapsed, and a detached rubble-stone farm building to the side.
- NIAH page coordinate pair: 324272, 259228. The individual page does not label the CRS; do not transform or publish this pair as a map point until matched to the official Dublin CSV / GIS layer.
- Access: Derelict status is not permission to enter. No access assumption; photograph only from a lawful public vantage point or with express permission.
- Official page confirms registration number, rating, date range, coordinate pair and description.

## 2. Casino, Dublin Road, Malahide — NIAH 11344016

Official record: https://www.buildingsofireland.ie/buildings-search/building/11344016/casino-dublin-road-malahide-malahide-dublin

- Rating: Regional
- Special interests: Architectural, Artistic, Social
- Original / current use: House
- Date range: 1730–1770; NIAH description dates the house to c.1750
- Description: Detached eight-bay, single- and two-storey thatched house, with a central curved entrance bow and curved single-storey bays. NIAH describes sliced-straw thatch, hazel-rod pinning, rubble-stone walls, timber sash windows and a spider-web fanlight.
- NIAH page coordinate pair: 322416, 246083. CRS not labelled on the individual page; not approved for map use pending official dataset reconciliation.
- Access: The NIAH record lists current use as a house. Treat as private residential property; no entry or close-up photography without permission.
- Official page confirms registration number, rating, use, date range, coordinate pair and description.

## 3. The Thatch Cottage, Strand Road, Portmarnock — NIAH 11351006

Official record: https://www.buildingsofireland.ie/buildings-search/building/11351006/strand-road-burrow-co-by-malahide-ed-portmarnock

- Rating: Regional
- Special interests: Architectural, Social
- Original / current use: House
- Date range: 1750–1850; NIAH description dates it to c.1800
- Description: Detached nine-bay, single-storey thatched house, formerly two detached four-bay houses linked by a single-storey entrance bay; a single-storey timber conservatory was added c.1980.
- NIAH page coordinate pair: 324268, 243324. CRS not labelled on the individual page; not approved for map use pending official dataset reconciliation.
- Access: The NIAH record lists current use as a house. Treat as private residential property; no entry or close-up photography without permission.
- Official page confirms registration number, rating, use, date range, coordinate pair and description.

## Exact deduplication

| NIAH registration | Master (462) | Public NIAH (342) | Sources (580) |
|---|---:|---:|---:|
| 11311038 | 0 | 0 | 0 |
| 11344016 | 0 | 0 | 0 |
| 11351006 | 0 | 0 | 0 |

## Found / verified / published

- **Found:** 3 official Dublin NIAH registrations.
- **Verified:** 3 official individual records and their registration identities, descriptions, ratings and NIAH page data.
- **Published:** 0; publication is deliberately held pending official coordinate reconciliation and source/licensing implementation.

## Coordinate and reuse controls

The NIAH individual pages expose coordinate pairs but do not label their CRS. The official NIAH data download page says the Dublin CSV covers Dublin City, Fingal and South Dublin and includes ITM, latitude/longitude and National Grid location fields. The data.gov.ie dataset page describes the official GIS service as ITM (EPSG:2157), says ITM coordinates should be quoted for official purposes, and identifies the national dataset as CC BY 4.0. The individual record coordinate pairs must still be matched to the official dataset by registration number before using coordinates in CICAN map records.

Official references:
- NIAH 11311038: https://www.buildingsofireland.ie/buildings-search/building/11311038/ivy-lodge-milverton-co-dublin
- NIAH 11344016: https://www.buildingsofireland.ie/buildings-search/building/11344016/casino-dublin-road-malahide-malahide-dublin
- NIAH 11351006: https://www.buildingsofireland.ie/buildings-search/building/11351006/strand-road-burrow-co-by-malahide-ed-portmarnock
- NIAH Dublin data download: https://www.buildingsofireland.ie/niah-data-download/
- NIAH National Dataset metadata and licence: https://data.gov.ie/en_GB/dataset/national-inventory-of-architectural-heritage-niah-national-dataset

Before production publication:
1. Match all three records by REG_NO in the official Dublin CSV or GIS feature service and preserve the source coordinate values and CRS.
2. Add a documented transformation to WGS84 only if needed for the website map; retain original ITM values.
3. Record the official source and attribution, respecting CC BY 4.0 conditions.
4. Do not reuse NIAH photographs or third-party images without confirming the applicable image rights/licence; dataset reuse terms do not automatically establish rights to every image.
5. Check lawful public vantage points and private-property boundaries before founder photography.
6. Add accepted records consistently across the master catalogue, NIAH collection, source registry, visual inventory, SEO pages and sitemap, then run schema, duplicate, website and deployment checks.

---
**Batch 028 outcome:** Three official Dublin NIAH registrations individually verified and absent from the 462-record master catalogue, 342-record public NIAH collection and 580-record source registry. No production publication until coordinate reconciliation and image/access checks are complete.
