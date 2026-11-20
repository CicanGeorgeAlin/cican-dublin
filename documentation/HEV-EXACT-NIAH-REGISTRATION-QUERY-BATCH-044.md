# CICAN Dublin — Batch 044: Exact NIAH Registration-Number Query Confirmed in HEV Guide

**Date:** 20 November 2026  
**Scope:** Confirm the exact NIAH query field and refine the small-test export procedure.  
**Publication state:** Research only; no production changes.

## 1. Critical detail confirmed in official user guide

The official Historic Environment Viewer User Guide, Version 4 (08 July 2024), section 6.e.ii “NIAH Query” (PDF pages 27–31), explicitly lists four NIAH query criteria:
1. County
2. Townland
3. Original use
4. NIAH registration number

The guide states that the NIAH registration number field accepts the **full number**. This is materially stronger than the generic Query-to-CSV workflow documented in Batch 043: we can test exact NIAH REG_NO values rather than relying on map selection or a place-name search.

Official guide:
https://www.archaeology.ie/app/uploads/2025/01/HEV_UserGuide_v01.pdf

Relevant lines in the opened guide include 763–782 for the NIAH query field and full-number instruction; lines 783 onward show the NIAH query panel. The guide's Query results instructions (pages 30–31) describe the displayed-feature count, result list, ellipsis menu and Export to CSV for selected results.

## 2. Proposed first exact-query test

Use the HEV Query widget, choose **National Inventory of Architectural Heritage (NIAH)**, enter:
- County: Dublin (if the UI's county choices include it and the filter does not suppress relevant local authority coverage)
- NIAH reg. no.: 11336004
- Spatial filter: Return features within full extent of the map (not a drawn-shape filter)
- Apply.

Then inspect the displayed-features count and the exact registration number/name in Results. The expected test condition is one matching feature for REG_NO 11336004; this is a test expectation, not an observed result.

Export the query result to CSV using the ellipsis menu. Preserve the raw export and record file size, SHA-256, headers, retrieval timestamp, exact REG_NO and full attribute row. If no row appears, clear the county criterion and retry with only the full registration number; document both attempts and do not infer a negative record result from a failed UI query.

## 3. Four-record relationship test

After the single-record test succeeds, repeat with 11336002, 11336003, 11336004 and 11336005, either as separate exact queries or through a controlled export if the interface permits multi-value selection. Reconcile the returned REG_NO set against the requested set exactly. Do not assume the query UI supports a comma-separated list unless tested. Separate registration identities must remain separate assets.

## 4. Limits of what has been done

The HEV user guide confirms the field and workflow, but the HEV application itself was not interactively operated in this session. An attempt to open a constructed deep-link query URL through the web retrieval layer returned an access error. Therefore:
- No HEV query was actually run.
- No CSV was downloaded.
- No exact national row, appraisal or coordinates were newly obtained.
- No negative conclusion about REG_NO 11336004 is justified.

## 5. Gate status

Mack's Bridge 11336004 remains HOLD:
- Gate 1 partial: individual NIAH page known; appraisal not captured.
- Gate 2 hold: exact live national row not exported.
- Gate 3 partial: relationship evidence exists, official row comparison pending.
- Gate 4 partial: field inspection, current access and image rights pending.
- Gate 5 not authorised; Gate 6 not run.

**Batch 044 outcome:** We now have official documentation that HEV supports a full NIAH registration-number query. This is the most precise next manual retrieval route for the 454-record audit. No production data or website files were changed.
