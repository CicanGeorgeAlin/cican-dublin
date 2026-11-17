# CICAN DUBLIN — NIAH Dublin Master Inventory Plan and Website Audit

**Audit date:** 17 November 2026  
**Repository:** `CicanGeorgeAlin/cican-dublin`  
**Branch:** `main`  
**Purpose:** Establish a complete, evidence-led workflow for incorporating the National Inventory of Architectural Heritage (NIAH) records across Dublin City and County Dublin, and record the latest technical checks of the public website.

## 1. Scope decision

For this project, **Dublin** means all four Dublin local-authority areas:
1. Dublin City Council
2. Fingal County Council
3. South Dublin County Council
4. Dún Laoghaire–Rathdown County Council

This is broader than Dublin City Council alone. The geographic filter must use the official local-authority field or an independently verified boundary assignment; postal districts and settlement labels are not substitutes.

NIAH is an inventory of post-1700 architectural heritage. It is not a complete inventory of every archaeological monument, prehistoric/medieval site, or every small historic object in Dublin. The wider CICAN archive must continue to include NMS/RMP monuments, industrial heritage, historic street furniture, inscriptions, archaeological traces and field discoveries in addition to NIAH.

## 2. What can currently be said about the number of records

### National position

The current Buildings of Ireland home page describes the NIAH search database as containing **over 65,000 records nationally**. This is a national figure, not a Dublin count.

### Dublin historical baseline

A Dáil written answer dated 31 March 2021 gave the following numbers of structures recommended by NIAH to the four Dublin local authorities:
- Fingal: 664
- South Dublin: 788
- Dublin City: 3,967
- Dún Laoghaire–Rathdown: 383

**Arithmetic total: 5,802 recommendations** in that 2021 answer.

This is a dated baseline of ministerial recommendations, not a verified current count of every NIAH survey record in Dublin. Dublin City and Dún Laoghaire–Rathdown fieldwork were described as ongoing. It must not be presented as the exact 2026 total.

### Official data sources

- NIAH Data Download page: https://www.buildingsofireland.ie/niah-data-download/
  - The page provides a Dublin CSV download and states that its download contains Ministerial Recommendations indexed by registration number, with location, classification, rating, description, appraisal and links to records/images.
  - The page says data is refreshed as surveys are published.
- National NIAH dataset on data.gov.ie: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset
  - The dataset record exposes the NIAH Feature Service and a national CSV download.
- NIAH Open Data Feature Service: https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildingsOpenData/FeatureServer
  - Layer 0 is `NIAHBuildings`, a point feature layer in ITM (EPSG:2157), with fields including `REG_NO`, `NAME`, `COUNTY`, `LOCAL_AUTHORITY_`, `DESCRIPTION`, `APPRAISAL`, `RATING`, `ITM_E`, `ITM_N`, `LATITUDE`, `LONGITUDE`, `IMAGE_LINK`, `WEBSITE_LINK`, `SURVEY` and `CSI`.
- Historic Environment Viewer: https://www.archaeology.ie/advice-and-support/locate-a-monument-or-wreck/historic-environment-viewer/
  - The Viewer provides access to NIAH and National Monuments Service spatial datasets.

The national CSV resource record on data.gov.ie was updated 10 November 2026. The NIAH Dublin download page and its CSV link were inspected; the ZIP cannot be parsed in this current environment. A current four-authority count therefore remains **not yet established**.

## 3. Import strategy — do not dump blindly into the curated catalogue

The existing CICAN catalogue has 447 curated records according to the current README and coverage audit. The canonical `data/objects.json` is approximately 1.2 MB and could not be fully returned by the GitHub file-fetch interface in this audit. No complete duplicate reconciliation can honestly be claimed from this inspection alone.

The safe approach is to create a separately auditable **NIAH source index** and then reconcile it with the curated archive:

1. Retrieve the latest official Dublin dataset and the live Feature Service records for all four Dublin local authorities.
2. Record source version/date, query filters, extraction date, total count and per-authority counts.
3. Preserve the original NIAH registration number as the authoritative external key.
4. Normalize names, addresses, townlands, local authority values, survey references and coordinates without overwriting the original source fields.
5. Deduplicate against existing CICAN records first by NIAH registration number, then by name/address, then by spatial proximity with manual review.
6. Where a CICAN record already represents the same NIAH structure, add the official NIAH reference/source to the existing record; do not create a second parent object.
7. Where a new NIAH structure is genuinely absent, create one permanent CICAN parent ID and link the NIAH source record.
8. Keep existing micro-details as child records. Do not collapse a plaque, gate pier, post box or inscription into a parent building if it is independently catalogued.
9. Keep NIAH coordinates labelled as source-derived locators. Do not convert them to founder GPS or claim exact micro-feature positions.
10. Retain NIAH's own descriptions and ratings as attributed source data; do not present them as CICAN field verification or legal protected status.
11. Preserve access and photography restrictions. A map point is not permission to enter or photograph.
12. Validate every imported row and the full JSON/schema/duplicate rules before deployment.

### Website presentation recommendation

Add an explicit **NIAH register layer/filter** to the map and searchable archive. Keep these states distinct:
- **NIAH source record** — a record in the official inventory.
- **CICAN curated record** — a record reviewed and reconciled into the archive.
- **CICAN field-verified** — present-day field observation actually completed.
- **Founder photographed** — original image confirmed and archived.

This prevents the user interface from implying that all official records have been individually researched, visited, photographed or field-verified.

## 4. Website technical audit — static code and GitHub Actions

### Latest repository state inspected

- Latest commit at audit start: `95cabe0f397e6289c9de03489784895aae67089f` (Batch 151 research note).
- `index.html` uses `<base href="./preview/">`, so its relative map app assets resolve into `preview/`.
- The app script is `preview/app/app.js`; its data endpoints resolve to root `data/objects.json`, `data/sources.json` and `data/visual-assets.json`.
- `service-worker.js` pre-caches the map app, archive JSON and required shell assets and serves navigation/data with network-first behaviour.
- The root and preview HTML IDs were statically compared with the IDs referenced by the application JavaScript. Missing verification/photography filters in the root page are optional in the script; the photo viewer and save-place controls are created dynamically. No missing mandatory static control was found by this check.

### Geolocation code inspection

The map's **Locate** button calls `navigator.geolocation.getCurrentPosition` with:
- `enableHighAccuracy: true`
- `maximumAge: 0`
- `timeout: 15000`

On success it moves the map to the reported longitude/latitude, places a user-location marker and displays the browser-reported accuracy in metres.

The **Nearby** function also requests high-accuracy location, permits a cached fix up to 60 seconds old, and filters mapped discoveries to a 3 km radius.

This confirms that the code requests high-accuracy browser location. It does **not** prove that the user's Android precise-location permission is enabled or that a real GPS fix has succeeded on the device. That final check requires a live browser session on the phone with Location enabled and precise location permission granted to the browser.

### Latest automated quality and deployment runs

For commit `95cabe0f397e6289c9de03489784895aae67089f`:

- **Archive quality gate:** completed successfully.
  - Check map application JavaScript syntax — success.
  - Check SEO page generator syntax — success.
  - Generate crawlable place pages and full sitemap — success.
  - Validate catalogue, images, links and page scripts — success.
- **GitHub Pages deployment:** completed successfully.
  - Check map app JavaScript syntax — success.
  - Generate crawlable place pages and sitemap — success.
  - Archive safety preflight — success.
  - Configure Pages, render social preview, upload and deploy — success.

Workflow runs:
- Quality: https://github.com/CicanGeorgeAlin/cican-dublin/actions/runs/44075751778
- Pages deployment: https://github.com/CicanGeorgeAlin/cican-dublin/actions/runs/44075751691

### Runtime test boundary

The public Pages URL could not be opened in the available live browser retrieval path during this audit. No real tap-through browser session, Android location permission prompt, physical GPS fix, map tile load or device-specific interaction test was performed. Therefore this report does not certify every button or GPS as working perfectly. GitHub Actions success is strong automated evidence for syntax, data and deployment checks, but it is not a substitute for on-device runtime testing.

## 5. Current archive baseline

- Curated catalogue: 447 records (README and coverage audit).
- Registered sources: 552 (last confirmed Batch 146 reconciliation; source file is present and readable).
- Current local-authority spatial assignments: 0 confirmed in the coverage audit.
- NIAH Dublin complete current total: not yet counted.
- Full NIAH source-index import: not yet performed.
- No NIAH mass-import has been attempted in this audit.

## 6. Immediate next actions

1. Obtain and parse the current official NIAH source data for all four Dublin local authorities.
2. Publish a reproducible count by local authority, plus a total and extraction date.
3. Build a machine-readable NIAH staging index before touching the curated 447-record catalogue.
4. Reconcile all NIAH registration numbers against the complete canonical object file.
5. Import only genuinely missing parent records and add NIAH source links to existing matches.
6. Add the NIAH layer/filter to the map with an explicit “official register record” label and separate field-verification status.
7. Conduct the final live Android test: allow precise browser location, test Locate, Nearby, map recentering, search, filters, marker clusters, place detail, save/unsave, photo viewer, navigation and walking directions.
8. Re-run automated quality checks and Pages deployment after each production change.

## 7. Source references

- Buildings of Ireland, NIAH Data Download: https://www.buildingsofireland.ie/niah-data-download/
- data.gov.ie, National Inventory of Architectural Heritage dataset: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset
- NIAH Feature Service: https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildingsOpenData/FeatureServer
- National Monuments Service, Historic Environment Viewer: https://www.archaeology.ie/advice-and-support/locate-a-monument-or-wreck/historic-environment-viewer/
- Dáil written answer, 31 March 2021, Dublin authority NIAH recommendation counts: https://data.oireachtas.ie/ie/oireachtas/debateRecord/dail/2021-03-31/writtens/mul%40/main.pdf
- Buildings of Ireland home page, national NIAH database description: https://www.buildingsofireland.ie/

**Integrity statement:** This is a technical and source audit, not a claim that the complete NIAH Dublin inventory has already been imported or that physical GPS has been tested. The next production milestone is a reproducible official-data census and safe staging import.
