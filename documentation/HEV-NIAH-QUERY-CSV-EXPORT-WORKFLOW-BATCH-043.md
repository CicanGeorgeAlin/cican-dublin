# CICAN Dublin — Batch 043: Historic Environment Viewer Query/CSV Export Workflow

**Date:** 20 November 2026  
**Scope:** Validate the official NIAH-selective-export workflow and define a repeatable audit method for the existing 454 public registrations.  
**Publication state:** Research only; no production changes.

## 1. Official source confirms a selective data-extract path

The data.gov.ie NIAH dataset page explicitly recommends the Historic Environment Viewer (HEV) data extract tool for a live/current view and states that the HEV Query tool can selectively filter and download data represented in the viewer. It links the official HEV User Guide:
https://data.gov.ie/dataset/national-inventory-of-architectural-heritage-niah-national-dataset

Official HEV:
https://www.archaeology.ie/advice-and-support/locate-a-monument-or-wreck/historic-environment-viewer/

Official HEV User Guide (PDF):
https://www.archaeology.ie/app/uploads/2025/01/HEV_UserGuide_v01.pdf

## 2. User Guide confirms query result export

The official guide's Query section (PDF page 31; printed page 31) documents:
- a Query panel with a Search tab and Results tab;
- a layer selector including National Inventory of Architectural Heritage;
- displayed-feature count and a list of matching NIAH records;
- an ellipsis / feature-actions menu on the query result;
- an **Export to CSV** action that downloads attributes for the selected records;
- an option to view selected results in the attribute table;
- a spatial filter that can be combined with the query filter or used independently.

The guide screenshot demonstrates the query-results list with records represented by registration number, name and type. This establishes an official export workflow; it does not itself establish that a specific REG_NO filter expression can be entered or that a particular export was completed.

## 3. Recommended controlled workflow for the 454-record audit

A. In the HEV, select the NIAH layer, use the Query panel and search/filter controls to isolate a small test set of known existing registrations, beginning with 11336004 and the adjacent registrations 11336002, 11336003 and 11336005 where the interface supports it.

B. Inspect the returned Results list. Record the displayed feature count and the exact registration numbers shown. Do not treat a name-only or map selection as a match.

C. Use the result ellipsis and Export to CSV. Preserve the original downloaded file without editing. Record retrieval date/time, selected query/filter, displayed result count, filename, byte size and SHA-256. Parse the CSV and confirm the returned REG_NO set exactly matches the requested set.

D. Verify the CSV headers and inspect the full row for each REG_NO, especially LOCAL_AUTHORITY_, DESCRIPTION, APPRAISAL, DATEFROM, DATETO, RATING, ITM_E, ITM_N, LATITUDE, LONGITUDE and CSI. Retain the raw export as evidence. Do not infer omitted fields.

E. Scale only after the small test set succeeds. Partition the 454 requested REG_NO values into manageable query batches; reconcile every batch's returned registration set against the requested set. Capture omissions, duplicates and unexpected extras. Never assume a query returned all selected features merely because an export file exists.

F. For each candidate row, compare the official row to the individual NIAH page and current archive record; preserve differences. Gate 2 passes only when the exact REG_NO row is present and its relevant identifying fields reconcile. Gate 1 still requires the individual official record page, including appraisal where available; a HEV export alone does not replace that gate.

## 4. Mack's Bridge status

The official HEV export workflow is now documented as the next practical retrieval route for REG_NO 11336004. No actual HEV query or CSV export was executed in this research session. Therefore no exact row, appraisal, or national coordinate values are newly claimed. Mack's Bridge remains HOLD under Gates 1 and 2.

## 5. Important version and rights controls

The data.gov.ie description distinguishes the live/current HEV and FeatureServer from the bulk CSV snapshot (descriptive version date 11/10/2023). Do not call an HEV export a CSV snapshot or vice versa. Preserve the retrieval method and time with every evidence file.

The data.gov.ie dataset page states CC BY 4.0 for NIAH dataset reuse. This applies to the dataset material; it does not automatically grant rights to third-party basemaps or photographs shown in the viewer. Image rights remain separately assessed.

## 6. Gate status and next action

- **Gate 1:** PARTIAL / HOLD for Mack's Bridge; individual NIAH page is known, appraisal not yet captured.
- **Gate 2:** HOLD; official export procedure documented, but no row exported or inspected.
- **Gate 3:** PARTIAL; existing relationship checks remain, exact official row and common-CRS check pending.
- **Gate 4:** PARTIAL; provenance documented; field verification/access/photo rights outstanding.
- **Gate 5:** NOT AUTHORISED.
- **Gate 6:** NOT RUN.

**Batch 043 outcome:** The official HEV Query-to-CSV workflow is now verified from the government's user guide and provides a documented path around the inaccessible direct REST query and binary ZIP retrieval. The next test must be a real small export with exact REG_NO reconciliation. No public data or website files were changed.
