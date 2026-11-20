# CICAN Dublin Archive — NIAH Official Download Retrieval and Fingal Batch 007

**Research date:** 20 November 2026  
**Scope:** Confirm official NIAH download route; retrieve the official Dublin archive where possible; review five additional Fingal NIAH candidates; audit catalogue collisions.  
**Status:** Research-only. No production catalogue changes or map pins.

## 1. Official Dublin CSV download route confirmed

The official Buildings of Ireland NIAH Data Download page states that the Dublin CSV includes Dublin City, Fingal and South Dublin County; contains Ministerial Recommendations indexed by NIAH registration number; includes location, classification, rating, description, appraisal, record and image links; and provides location data in ITM, latitude/longitude and National Grid. It says the data is refreshed biannually as surveys are published.

The page's actual Dublin download link resolves to:

https://www.buildingsofireland.ie/niah/NIAHDataDownload/Dublin.zip

The web retrieval environment rejected the ZIP as an unsupported binary content type, so the file contents have **not** been inspected or parsed in this batch. This is a confirmed official download URL, not a claim that the archive has been downloaded. The next technical step is to retrieve the ZIP through a binary-capable download path, preserve the original archive and metadata, then inspect its CSV schema and exact records.

The official HEV also supports selective CSV export of query results. The HEV User Guide explicitly describes using the query results feature-actions menu and selecting “Export to CSV” to download the attributes for selected records.

## 2. Five additional Fingal NIAH candidates

These five candidates were selected from official Buildings of Ireland records and Fingal heritage sources. They are not yet production-ready.

| NIAH ref | Candidate | Official record / source |
|---|---|---|
| 11336015 | Donabate Railway Station | https://www.buildingsofireland.ie/buildings-search/building/11336015/donabate-railway-station-beaverstown-donabate-fingal |
| 11336018 | Donabate Railway Station Master's House | https://www.buildingsofireland.ie/buildings-search/building/11336018/donabate-railway-station-beaverstown-donabate-fingal |
| 11336023 | Seafield House farmyard complex | https://www.buildingsofireland.ie/buildings-search/building/11336023/seafield-house-ballymadrough-co-dublin |
| 11337001 | Balcarrick Martello Tower | https://www.buildingsofireland.ie/buildings-search/building/11337001/balcarrick-martello-tower-balcarrick-fingal |
| 11342007 | Chapelmidway Bridge | https://www.buildingsofireland.ie/buildings-search/?county=DU&date_from=&date_to=&group=&location_type=building&query=&search_page=5&town=&townland=&type= |

### 2.1 Donabate Railway Station — 11336015

Official NIAH search result describes a detached eight-bay single-storey red-brick railway station, c.1860, with a central gable-fronted projecting porch and associated platform structures. The official record search result gives Regional rating; special interest categories Architectural, Artistic, Social and Technical; original/current use railway station; date range 1850–1870; ITM coordinates E 322767, N 249980; recorded 17 September 2000.

The station is part of a larger railway heritage group. DART+ Coastal North planning documentation independently cross-references the station as NIAH 11336015 and Fingal RPS 0511. Keep the station separate from its signal box, station master's house, nearby railway bridge, and parish hall/cemetery records.

### 2.2 Donabate Railway Station Master's House — 11336018

Official NIAH record gives Regional rating; Architectural interest; original use station master's house; date range 1880–1900; coordinates E 322768, N 249960; recorded 1 August 2000. The description identifies a detached two-bay, two-storey red-brick house c.1890, with a rear return and later extension.

DART+ Coastal North documentation cross-references NIAH 11336018 and Fingal RPS 0510. Preserve as a separate building from the station building.

### 2.3 Seafield House farmyard complex — 11336023

Official individual NIAH record gives Regional rating; Architectural interest; original/current use farmyard complex; date range 1850–1860; coordinates E 321153, N 248448; recorded 9 August 2000. The record describes an L-shaped, multi-bay, two-storey farmyard around a courtyard, with carriageway arches, a square clock tower, carriage house and outbuilding.

This is a separate NIAH record from the principal Palladian Seafield House (11336024). The two should be represented as distinct objects with a documented estate/group relationship, not merged.

### 2.4 Balcarrick Martello Tower — 11337001

Official individual NIAH record gives National rating; Architectural, Historical, Social and Technical interest; original use Martello tower; date range 1800–1810; coordinates E 325174, N 249219; recorded 9 August 2000. The description dates the tower to about 1805 and describes a circular tapered form, machicolation supported on brackets above a raised entrance, rendered roof extension and coursed rubble walls with lime render.

A separate coastal heritage assessment also cross-references NIAH 11337001 at Balcarrick. Images found on Wikimedia Commons are not automatically accepted as archive reference photographs; each image must be assessed for photographer, date, viewpoint, licence and source provenance before registration.

### 2.5 Chapelmidway Bridge — 11342007

The official NIAH search result describes a triple-arch rubble-stone road bridge over a river, c.1820, with curved cutwaters. Fingal Historic Bridges Survey identifies the bridge as FHBS12, located between Laurestown and Corrstown (additional townland Skephubble), on Fieldstown-Skephubble Road, over the Ward River, with grid coordinates E 312337, N 246196. A Fingal proposed RPS addition document describes a triple-arched round-headed stone road bridge on the R122 over the Ward River and recommends it for addition to the Record of Protected Structures.

The Historic Bridges Survey calls the coordinate fields “Grid co-ordinates”; the CRS is not established in this report. Do not label these as ITM or transform them until the original survey metadata confirms the coordinate reference system.

## 3. Catalogue collision audit

The current canonical `data/objects.json` was retrieved from the GitHub Contents API and parsed. It contains 452 objects.

All five exact NIAH references below were absent:
- 11336015
- 11336018
- 11336023
- 11337001
- 11342007

The candidate names/aliases were also absent from the tested existing object name, title, address, location and description fields. This is a first-pass check; railway and estate groups require relationship review before publication.

## 4. Coordinate and local-authority controls

The coordinate values stated above for 11336015, 11336018, 11336023 and 11337001 are transcribed from the individual official NIAH record/search pages, which label the coordinate values without explicitly spelling out the CRS on those individual pages. The official NIAH data download page says the download offers ITM, latitude/longitude and National Grid location values; until the CSV header and metadata are inspected, the values must remain transcribed as “NIAH coordinates” rather than asserting an unverified coordinate system in the archive.

The Chapelmidway Bridge survey grid coordinates are likewise retained as source-labelled grid coordinates only.

No exact NIAH `LOCAL_AUTHORITY_` attribute values were retrieved. No point-in-polygon assignment against official 2026 local-authority boundaries was performed. No WGS84 transformation or public map pin is approved.

## 5. Next actions

1. Retrieve the official Dublin ZIP through a binary-capable path and preserve its checksum, filename, retrieval date and source URL.
2. Inspect CSV headers, coordinate-system metadata and the five candidate rows, then compare the candidate values with individual Buildings of Ireland pages.
3. Retrieve the five Batch 002 candidate rows (11201140, 11205035, 11211029, 60260255, 11335003) from the same official extract.
4. Reconcile the full Donabate railway group, Seafield estate group and Chapelmidway bridge source coordinate system.
5. Only after CRS and administrative attributes are verified, prepare WGS84 transformations and spatial authority checks.
6. Continue candidate discovery across the remainder of Fingal, then Dublin City, South Dublin and Dún Laoghaire-Rathdown.

## 6. Source register

- Official NIAH Data Download page: https://www.buildingsofireland.ie/ga/niah-data-download/
- Official Dublin ZIP: https://www.buildingsofireland.ie/niah/NIAHDataDownload/Dublin.zip
- Historic Environment Viewer: https://www.archaeology.ie/advice-and-support/locate-a-monument-or-wreck/historic-environment-viewer/
- HEV User Guide PDF: https://www.archaeology.ie/app/uploads/2025/01/HEV_UserGuide_v01.pdf
- Donabate Railway Station NIAH search result: https://www.buildingsofireland.ie/buildings-search/?county=DU&date_from=&date_to=&group=&location_type=building&query=&search_page=5&town=&townland=&type=
- Donabate Railway Station Master's House: https://www.buildingsofireland.ie/buildings-search/building/11336018/donabate-railway-station-beaverstown-donabate-fingal
- Seafield House farmyard complex: https://www.buildingsofireland.ie/buildings-search/building/11336023/seafield-house-ballymadrough-co-dublin
- Balcarrick Martello Tower: https://www.buildingsofireland.ie/buildings-search/building/11337001/balcarrick-martello-tower-balcarrick-fingal
- Fingal Historic Bridges Survey, Volume 2, Chapelmidway Bridge: https://www.fingal.ie/sites/default/files/2019-04/Fingal%20Historic%20Bridges%20Volume%202.pdf
- Fingal proposed RPS additions, Chapelmidway Bridge: https://consult.fingal.ie/en/system/files/materials/4389/Proposed%20Additions%20-%20Bridges.pdf
- Fingal Donabate-Portrane Heritage Audit, 2022: https://www.fingal.ie/sites/default/files/2023-03/Donabate%20Portrane%20Heritage%20Audit%20Report%20FINAL%2019.09.2022.pdf
- DART+ Coastal North Constraints Report, railway heritage group: https://www.dartplus.ie/S3mvc/media/DART-Coastal-North-PC2/Useful%20Material%20and%20Downloads/Annex%203.1%20Technical%20Report%20-%20Constraints%20Report/Annex-3-1-Constraint-Report.pdf
- Coastal heritage assessment, Balcarrick Martello Tower: https://www.pleanala.ie/publicaccess/EIAR-NIS/320768/Environmental%20Impact%20Assessment%20Report%20%28EIAR%29/Volume%203%20Topic%20Chapters/Chapter%2022%20Archaeological%2C%20Architectural%20and%20Cultural%20Heritage.pdf

## 7. Production change statement

Documentation-only research batch. The production catalogue, website, map data, images and public-facing content were not changed.
