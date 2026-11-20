# CICAN Dublin — NIAH Retrospective Register Audit Batch 039

**Date:** 20 November 2026  
**Status:** Research-only structural preflight; all 454 public NIAH registrations remain **HOLD** pending record-by-record Gate 1 and exact national-dataset Gate 2 verification.  
**Scope:** Existing public NIAH register and its linked master, source and visual catalogues.

## Purpose

Resume under the binding [CICAN NIAH Gold Standard Publication Protocol](CICAN-NIAH-GOLD-STANDARD-PUBLICATION-PROTOCOL.md). Before any new import, recover the complete existing catalogue and establish a reproducible baseline for the retrospective audit of all 454 existing public NIAH registrations.

## Repository evidence recovered

The GitHub Contents endpoint returned empty content for the two large JSON files, but the Git blob endpoint successfully returned their complete contents. This resolves the earlier technical blocker for local catalogue inspection.

| File | Records | Git blob SHA |
|---|---:|---|
| `data/objects.json` | 574 | `1fd2cd93b6d42b25a3641c87` |
| `data/niah-registered-objects.json` | 454 | `4895c933c01390490aa4733c56c4c3085b7f5dee` |
| `data/sources.json` | 692 | `9630c3ea68a8cd26eabb95b9717d7f467673dc45` |
| `data/visual-assets.json` | 574 visual records | `915676b5ad1772cb5c4d48ea6663eed47abd3315` |

All four datasets were parsed in full during this preflight. These are current repository blob identifiers observed on 20 November 2026, not checksums of the external NIAH dataset.

## Structural preflight findings

- Public NIAH register: **454** records.
- Public REG_NO values: **454 unique**, all formatted as eight digits; no duplicate REG_NO values detected.
- Every public NIAH record has a corresponding object in the master catalogue by exact REG_NO.
- Public records' source IDs all resolve to existing source records; no broken source-ID links detected.
- **453/454** public records have a linked individual NIAH / Buildings of Ireland source record in the source registry.
- **1/454** lacks a linked individual NIAH source record: `DUB-INF-0189`, Mack's Bridge — Newbridge Demesne, REG_NO `11336004`. Its current linked evidence is Fingal's Donabate–Portrane Heritage Assets Audit and the Broadmeadow Way EIAR. It must remain HOLD until the individual NIAH record is retrieved and checked.
- **304/454** link the generic `SRC-NIAH-NATIONAL-DATASET` source record. This is a dataset-level metadata/source reference, not proof that the exact registration row was matched.
- **273/454** link `SRC-EPSG-TM65-29902`; this does not replace verification of each registration's source coordinates and transformation provenance.
- Coordinate status: **437 SOURCE_DERIVED**, **17 NOT_SET**. None of the 454 records had a malformed latitude/longitude pair in the structural check. A structurally valid point is not proof of a correct or current official point.
- Existing verification labels: **243 VERIFIED**, **211 PARTIALLY_VERIFIED**. These are inherited catalogue labels, not a pass result under the newly adopted Gold Standard.
- No duplicate normalized titles were detected in the public register. Repeated normalized addresses do occur, generally for multiple separately registered structures or details on the same street, campus, cemetery or estate. Address coincidence is not a duplicate finding; each relationship requires contextual review.

### The 17 public records currently without coordinates

These remain unmapped; do not infer coordinates from nearby features or unlabelled page coordinate pairs.

- `DUB-BLD-0130` — St Anne’s Park — Roman Tower — 50030021
- `DUB-BLD-0131` — St Anne’s Park — Annie Lee Tower and Bridge — 50030023
- `DUB-BLD-0132` — St Anne’s Park — Clock Tower and walled-garden entrance — 50030037
- `DUB-BLD-0133` — St Anne’s Park — Herculanean Temple — 50030024
- `DUB-BLD-0134` — St Anne’s Park — rustic archway and flanking viewing arches — 50030030
- `DUB-BLD-0135` — St Anne’s Park — Yew Circle and former fountain — 50030031
- `DUB-BLD-0136` — St Anne’s Park — remains of the earlier walled garden — 50030026
- `DUB-BLD-0137` — St Anne’s Park — double-arch bridge incorporating a hermitage — 50030034
- `DUB-BLD-0138` — St Anne’s Park — Pompeiian Temple / Boathouse (former tea house) — 50030032
- `DUB-BLD-0180` — The Thatch Cottage, Ballisk, Donabate — 11329015
- `DUB-INF-0136` — St Anne’s Park — Rockwork Bridge — 50030028
- `DUB-INF-0137` — St Anne’s Park — Naniken River footbridge with carved stone bracket — 50030025
- `DUB-INF-0138` — St Anne’s Park — Naniken River segmental-arch footbridge — 50030027
- `DUB-INF-0139` — St Anne’s Park — former kitchen-garden path bridge with groin-vaulted passage — 50030036
- `DUB-STR-0096` — St Anne’s Park — shell house with “The House that Jack built” pier — 50030040
- `DUB-STR-0097` — St Anne’s Park — Naniken River grotto / hermitage — 50030035
- `DUB-STR-0136` — St Anne’s Park — relocated nineteenth-century iron gate screen and granite piers — 50030039

## Official national dataset investigation

The data.gov.ie resource page identifies the national CSV resource as updated 10 November 2026 and licensed CC BY 4.0. However, its descriptive text still refers to a 2023 snapshot/version date. The metadata/version discrepancy must be resolved by inspecting the downloaded file itself; no CSV bytes, checksum, header row or individual record row are claimed as retrieved in this batch.

Resource page:  
https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset/resource/433f91ea-0b54-4753-99b2-d484baf2c7ec

CSV resource:  
https://heritagedata.maps.arcgis.com/sharing/rest/content/items/69689ebd654e4a83af76fdb4648f8529/data

A separate official NIAH FeatureServer layer was inspected. Its layer metadata identifies EPSG:2157 and fields including REG_NO, LOCAL_AUTHORITY_, DESCRIPTION, APPRAISAL, DATEFROM, DATETO, RATING, ITM_E, ITM_N, LATITUDE and LONGITUDE. The layer metadata reports a data last-edit timestamp of 4 March 2025. A filtered query for a specific registration could not be retrieved in this session; therefore no feature row or current exact registration match is claimed.

FeatureServer layer metadata:  
https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/arcgis/rest/services/NIAHBuildingsOpenData/FeatureServer/0

The national dataset page describes ITM as the official coordinate reference for official purposes and warns that older centroids may need revision. Preserve ITM and WGS84 as separate source fields; do not silently substitute coordinates from a different layer or from an unlabelled individual-page coordinate pair.

## Gate status

| Gate | Current status | Reason |
|---|---|---|
| Gate 1 — Individual official record | **HOLD — 454/454 pending retrospective re-open/recheck** | 453 linked source records exist, but the full set of individual pages has not yet been freshly inspected and transcribed under the Gold Standard; Mack's Bridge has no linked individual page source. |
| Gate 2 — Exact national dataset row | **HOLD — 454/454** | No current national CSV bytes/checksum or exact per-registration row matches were obtained in this batch. |
| Gate 3 — Full duplicate/relationship audit | **PARTIAL / HOLD** | Complete local datasets are now recovered and structural checks are complete. Relationship-level review, coordinate proximity and source-to-object reconciliation remain to be executed for all 454. |
| Gate 4 — Evidence, rights, access and field status | **PARTIAL / HOLD** | Existing metadata is present, but each record needs a Gold Standard review; inherited VERIFIED labels are not sufficient. |
| Gate 5 — Controlled publication | **NOT AUTHORISED** | No new publication or silent promotion. |
| Gate 6 — Production validation | **NOT RUN** | No production changes were made. |

## Decision and next actions

1. Keep all 454 existing public NIAH records in the retrospective audit queue with provisional HOLD status until their individual gates are adjudicated. This is an audit control, not a claim that all 454 are defective.
2. Retrieve and checksum the actual 10 November 2026 national CSV. If the CSV resource remains inaccessible, retrieve exact registration rows from a verified official live service and record the service's actual data timestamp/version.
3. Create a machine-readable per-registration audit ledger with separate fields for Gate 1, Gate 2, Gate 3, Gate 4, final PASS/HOLD/QUARANTINE, reviewer date and evidence references.
4. Begin individual record review in bounded batches, including Mack's Bridge 11336004 as the first explicit missing-individual-source exception.
5. Review the 17 unmapped records separately after exact national rows are available. Do not guess or copy a neighbouring point.
6. Do not add new Lucan registrations 11201019, 11201021, 11201023, 11201024 or 11201025 to production until their own Gold Standard gates pass.
7. Do not change public data, map pins, SEO pages or deployment in this batch.

**Batch 039 outcome:** Full local dataset recovery succeeded; a reproducible structural baseline for all 454 public NIAH records was established. No public records were added, removed or modified. All 454 remain on HOLD pending exact national row verification and the full retrospective documentary audit.
