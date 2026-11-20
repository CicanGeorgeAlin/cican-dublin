# CICAN DUBLIN — Rush / Kenure NIAH Verification & Kilbush House Addition (Batch 023)

**Date:** 20 November 2026  
**Autopilot:** CICAN HERITAGE AUTOPILOT  
**Scope:** Rush and Kenure, Fingal, County Dublin  
**Status:** One new NIAH-backed object added to the master and NIAH-only public collection. Six carry-forward registrations remain held pending official coordinate-row retrieval.  
**Rule:** NIAH registrations only for this publishing stream. RPS-only and SMR-only assets are not added to the NIAH collection.

## 1. Batch 022 follow-through — individual records retrieved

The official NIAH individual pages were retrieved for the two remaining Rush street objects:

### 11324007 — Whitestown Road post box
Official record: https://www.buildingsofireland.ie/buildings-search/building/11324007/whitestown-road-rush-rush-co-dublin

- Regional rating; Artistic and Social interest.
- Original and in-use type: post box.
- NIAH date range: 1900–1910.
- Description: wall-mounted cast-iron post box, c.1905, with 'ER VII' monogram.
- Page coordinate pair: 325999, 254186; the individual page does not label its CRS.
- Recorded 3 September 2000.

The full page confirms the official description and classification, but its unlabelled coordinate pair is not approved for conversion or map use.

### 11324020 — Lower Main Street water pump
Official record: https://www.buildingsofireland.ie/buildings-search/building/11324020/lower-main-street-rush-rush-co-dublin

- Regional rating; Artistic and Technical interest.
- Original use: water pump.
- NIAH date range: 1870–1890.
- Description: cast-iron water pump, c.1900, square profile, now missing parts.
- Page coordinate pair: 326692, 254088; the individual page does not label its CRS.
- Recorded 10 August 2000.

**Date-field discrepancy preserved:** the NIAH survey's date range is 1870–1890 while its written description dates the pump c.1900. Both source statements are retained; no attempt is made to silently reconcile them. The page coordinate pair is not used for map placement.

The official NIAH search result and the individual page agree that the pump is a separate registration from 11324012, Harbour Road.

## 2. Seven-record carry-forward status

The seven registrations first checked in Batch 022 remain absent from the 460-record baseline master catalogue and 577-record source registry. Two now have full individual pages retrieved in Batch 023. For all seven, the official Dublin CSV row/live Feature Service attributes still need to be extracted to establish the exact official ITM and latitude/longitude fields independently.

| NIAH reference | Record | Evidence now held | Production status |
|---|---|---|---|
| 11318003 | Kenure Park north gate lodge | Individual NIAH page | Held; coordinate CRS unresolved |
| 11324007 | Whitestown Road post box | Individual NIAH page retrieved in Batch 023 | Held; coordinate CRS unresolved |
| 11324020 | Lower Main Street water pump | Individual NIAH page retrieved in Batch 023 | Held; date-field discrepancy logged; coordinate CRS unresolved |
| 11324024 | The Thatched Cottage, Skerries Road | Individual NIAH page | Held; coordinate CRS unresolved |
| 11324010 | Sion House | Individual NIAH page | Held; coordinate CRS unresolved |
| 11324011 | Desio | Individual NIAH page | Held; coordinate CRS unresolved |
| 11324031 | W.F. Price | Individual NIAH page | Held; coordinate CRS unresolved |

The live NIAH Feature Service publishes fields including REG_NO, LOCAL_AUTHORITY_, ITM_E, ITM_N, LATITUDE and LONGITUDE and identifies EPSG:2157 as its layer spatial reference. A direct query response for these seven registrations was not retrievable in this research session. The official Dublin CSV download link is available from the NIAH Data Download page, but its ZIP payload could not be downloaded by the current retrieval route. No feature attributes are invented.

## 3. New production object — Kilbush House (NIAH 11324032)

### Identity and official NIAH survey

Official NIAH individual record:  
https://www.buildingsofireland.ie/buildings-search/building/11324032/kilbush-lane-rush-rush-co-dublin

- NIAH registration: **11324032**
- Name: **Kilbush House**
- Address: Kilbush Lane, Rush, County Dublin
- Rating: Regional
- Special interest: Architectural, Social
- NIAH date range: 1820–1880; described c.1850
- Recorded: 10 August 2000
- Description: detached seven-bay, single-storey thatched house with attic storey; timber projecting entrance porch c.1980; flat-roofed single-storey rear extension c.1970.
- NIAH individual page coordinate pair: 327077, 254322. CRS not labelled beside the pair; not used for the map coordinate.

### Independent local-authority survey and coordinate

Source: Fingal County Council, *Fingal Thatch Project 2022*, gazetteer Record FCC-TS-27:  
https://www.fingal.ie/sites/default/files/2023-02/Fingal%20Thatch%20Project%202022_Report.pdf

The report explicitly links FCC-TS-27 to NIAH 11324032 and identifies Kilbush House, Kilbush Lane, Rush. It provides:

- **ITM Easting:** 727000.8903
- **ITM Northing:** 754343.8243
- **RPS reference shown in the survey:** 264

The report describes a west-facing, detached lobby-entry, seven-bay, single-storey thatched house with dormer attic, a flat-roofed entrance porch and kitchen extension to the rear. It records a pitched wheaten-straw roof with flush bobbin ridge, four rows of bamboo to the ridge with a lattice band, bamboo eaves rodding, scalloped verges, rendered chimney, pebbledash facade, painted random-coursed stone to the rear, timber casement windows and later extensions. Its appraisal describes the building as one of Rush's last five remaining houses with intact early thatched roofs at the time of the 2022 survey.

The ITM pair was transformed from EPSG:2157 to WGS 84 using PROJ's **IRENET95 to WGS 84 (1)** operation, with a stated transformation accuracy of 1 m:

- Latitude: **53.523694444450484**
- Longitude: **-6.084638888981472**

Transformation accuracy does not establish the original survey point's positional accuracy. The coordinate is a source-derived house locator, not founder GPS. The unlabelled NIAH page coordinate pair was not used.

### Archive implementation

Added as **DUB-BLD-0192 — Kilbush House — c.1850 thatched house**.

- Master catalogue: 461 objects.
- NIAH-only public collection: 341 unique exact NIAH registrations.
- Source registry: 579 source records.
- Visual inventory: 461 records.
- Status: PARTIALLY_VERIFIED; awaiting founder field photography.
- No reference photograph imported. The Fingal report's embedded photograph is not treated as reusable without a separate confirmed image licence.
- No field visit, founder photograph or exact object GPS is claimed.
- Access note: private residential property; photograph only from a lawful public road or with owner/occupier permission.

The object, NIAH page and Fingal report were added consistently to `data/objects.json`, `data/niah-registered-objects.json`, `data/sources.json` and `data/visual-assets.json`. The coverage audit was reconciled to 461 master records and a new Rush settlement work-zone label; no local-authority count or boundary assignment is claimed. The archive description and validation expectation were updated from 340 to 341.

## 4. Important scope and count clarification

The current live NIAH-only tranche is **341 records**, not the full Dublin NIAH inventory. The founder's target remains **3,396 Dublin registrations**. Do not describe the current 341 as exhaustive. Continue systematically against the official NIAH Dublin dataset, preserving the original master catalogue and publishing only records that pass exact-reference, identity, provenance and coordinate checks.

The NIAH Data Download page states that the Dublin CSV covers Dublin City, Fingal and South Dublin County and that location information is available in ITM, latitude/longitude and National Grid:
https://www.buildingsofireland.ie/niah-data-download/

The national data.gov.ie resource identifies the live NIAH Feature Service and says the ITM easting/northing values should be quoted for official purposes:
https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/90aad26f-cfa3-4d54-93a7-e2f5d23ebc1a

## 5. Next checkpoint — Batch 024

1. Retrieve the Dublin CSV payload or a functioning feature-service query response and extract exact rows for the seven held Rush/Kenure registrations.
2. Compare the official row fields against the page coordinate pairs and Fingal survey coordinates; retain every CRS separately.
3. Continue the NIAH-only discovery sequence in Rush/Kenure and Lusk. The Fingal Thatch Project's Gazetteer contains other distinct NIAH-backed buildings that should be checked against the complete master before promotion; do not infer a registration where the report leaves NIAH blank or says a former number has been removed.
4. Prioritise official NIAH registrations with full individual pages and defensible ITM positions.
5. Run the repository quality gate and deployment workflow; report completion only after GitHub Actions succeeds.

**Production impact:** One new NIAH object added to master and public NIAH collection. No photographs, founder GPS fixes, unlicensed report images, RPS-only objects or SMR-only objects added.
