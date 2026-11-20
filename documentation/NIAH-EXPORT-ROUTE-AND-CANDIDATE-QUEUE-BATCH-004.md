# CICAN Dublin Archive — NIAH Export Route and New Candidate Queue, Batch 004

**Research date:** 20 November 2026  
**Scope:** Resolve the NIAH data-access route, correct source freshness notes, and identify five further Dublin County candidate records.  
**Status:** Research-only. No catalogue or website production data changed.

## 1. Key finding: a documented selective export route exists

The National Monuments Service confirms that the Historic Environment Viewer (HEV) provides access to NIAH spatial data and that selected datasets can be downloaded through its Open Data page. The HEV User Guide specifically documents that, after running a query, users can use the feature-actions menu and choose **Export to CSV** to download attributes for the selected records.

This is the most practical fallback for the five Batch 002 candidates because the direct ArcGIS REST query URL could not be read in this research environment. The official data.gov.ie dataset page also explicitly identifies the HEV Query Tool as an alternative way to selectively filter and download the data represented in the viewer.

**Operational next step:** run one HEV query for each of the five NIAH registration numbers (or a combined registration-number filter if the query builder supports it), export the selected attributes, and retain the downloaded CSV with source URL, retrieval date and original filename. Do not transcribe authority or coordinates from assumptions.

## 2. Source freshness correction

This batch records an important correction to the source-freshness wording in earlier NIAH research notes:

- The NIAH Feature Service layer metadata page reports its own **Data Last Edit Date** and **Schema Last Edit Date** as 3 April 2025.
- The data.gov.ie resource metadata for the NIAH Feature Service lists that resource as updated 16 September 2026.
- The data.gov.ie National CSV resource metadata currently lists the national CSV download as updated 10 November 2026.
- The NIAH data download page describes the regional CSVs as containing Ministerial Recommendations published to date and says the data is refreshed biannually as surveys are published.

These dates describe different resources and metadata records. They must not be collapsed into one “dataset last updated” date. The national CSV metadata is newer than the earlier Batch 001 statement that the available CSV snapshot was dated October 2023. That older statement is superseded for the current national CSV resource listing.

The Feature Service layer metadata and data.gov.ie resource metadata should both be retained in provenance, with the exact resource and timestamp identified.

## 3. New candidate queue — five NIAH records

The official Buildings of Ireland search index surfaced these five additional Dublin County records:

| NIAH registration | Record title | Published description summary |
|---|---|---|
| 11351005 | Strand Road graveyard, Burrow (Co. by.) Malahide ED, Portmarnock | Graveyard with markers from c.1600 to present; church ruin noted on site |
| 11352001 | Barnhill Bridge | Single-arch stone bridge over river, c.1900 |
| 11352002 | Packenham Bridge | Single-arch limestone humpback road bridge over Royal Canal, c.1820 |
| 60260117 | Shankill Carnegie Free Library | Detached three-bay single-storey library, designed 1910; built 1910–12; opened 1912 |
| 60260244 | Cabinteely Carnegie Free Library | Detached single-storey library, designed 1910; built 1910–12; opened 1912 |

The descriptions above are concise summaries of the official Buildings of Ireland search results, not field observations. Full individual records must be reviewed before object drafting.

## 4. Canonical catalogue collision check

The current `data/objects.json` file was retrieved from the GitHub Contents API and parsed. It contains 452 objects.

| Candidate | Existing exact NIAH reference | Tested name/alias collision |
|---|---:|---:|
| 11351005 — Strand Road graveyard | None | None |
| 11352001 — Barnhill Bridge | None | None |
| 11352002 — Packenham Bridge | None | None |
| 60260117 — Shankill Carnegie Free Library | None | None |
| 60260244 — Cabinteely Carnegie Free Library | None | None |

The name/alias check covered the existing object's name, title, address, location and description fields. This is a first-pass collision check only; relationships, shared sites, parent/child structures and component-level identity still require review.

## 5. What is not yet verified

- The live Feature Service rows for the five Batch 002 records have not been retrieved.
- Exact `LOCAL_AUTHORITY_` field values for any of these new candidates have not been checked.
- The ITM coordinates and WGS84 values for the five new candidates are not included here.
- No point-in-polygon test against authoritative local-authority boundaries has been run.
- No photographs, image-source entries, archive object IDs or public map pins have been created.
- The five new candidates are not approved for production publication.

## 6. Source register

- National Monuments Service, Historic Environment Viewer: https://www.archaeology.ie/advice-and-support/locate-a-monument-or-wreck/historic-environment-viewer/
- National Monuments Service, Open Data: https://www.archaeology.ie/collections-and-publications/open-data/
- HEV User Guide (PDF): https://www.archaeology.ie/app/uploads/2025/01/HEV_UserGuide_v01.pdf
- data.gov.ie, NIAH National Dataset / Feature Service resource: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/cac7450a-38b6-4016-9b7a-39b4efda00d5
- data.gov.ie, NIAH National CSV resource: https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/433f91ea-0b54-4753-99b2-d484baf2c7ec
- NIAH Data Download page: https://www.buildingsofireland.ie/niah-data-download/
- Official Buildings of Ireland search results, County Dublin:
  - https://www.buildingsofireland.ie/buildings-search/?county=DU&date_from=&date_to=&group=&location_type=building&query=&search_page=11&town=&townland=&type=
  - https://www.buildingsofireland.ie/buildings-search/?county=&date_from=&date_to=&group=&location_type=building&query=Library&search_page=5&type=

## 7. Production change statement

Documentation-only research batch. The live object catalogue, website, map data, photographs and public-facing content were not changed.
