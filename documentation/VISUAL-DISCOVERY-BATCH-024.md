# VISUAL DISCOVERY BATCH 024 — First Ten Wikimedia Source-Page Checks

**Date:** 27 October 2026  
**Scope:** First ten existing image references in live record order  
**Method:** Opened original Wikimedia Commons file pages; searched the page text for author/licence details; attempted direct image URL opens for a subset. No image was promoted or changed.

## 1. Baseline

The live baseline remains:
- 195 catalogue objects
- 195 visual records
- 243 source records
- 70 image references (41 OBJECT_PHOTOGRAPH, 29 STREET_CONTEXT)
- 37 records containing an OBJECT_PHOTOGRAPH role
- 28 context-only records
- 130 records with no image reference

## 2. Original source-page results

All ten source pages below opened successfully in the research session. This tests source-page reachability, not the direct image binary and not the image's visual match to the catalogue object.

| Catalogue ID | Role | Source page | Page result | Photographer / licence findings | Identity assessment |
|---|---|---|---|---|---|
| DUB-MON-0001 | OBJECT_PHOTOGRAPH | https://commons.wikimedia.org/wiki/File:Dublin_-_O%27Connell_Monument.jpg | Opened | P. Hughes; page states CC BY 4.0 and attribution requirements | Page title/caption identifies O'Connell Monument; visual inspection still required |
| DUB-BLD-0001 | OBJECT_PHOTOGRAPH | https://commons.wikimedia.org/wiki/File:The_General_Post_Office,_O%27Connell_St_Lower,_Dublin_(507183)_(32497479360).jpg | Opened | Robert Linsdell; page states CC BY 2.0 | Page description identifies GPO; visual inspection still required |
| DUB-STR-0001 | STREET_CONTEXT | https://commons.wikimedia.org/wiki/File:O%27Connell_Street.jpg | Opened | Existing record states William Murphy, CC BY-SA 2.0; not revalidated in this pass | Context only; page title is broad street view, not the specific lantern bases or wheel guards |
| DUB-MEM-0001 | OBJECT_PHOTOGRAPH | https://commons.wikimedia.org/wiki/File:Famine_Memorial_along_Custom_House_Quay_-_geograph.org.uk_-_3687319.jpg | Opened | Joseph Mischyshyn; page states CC BY-SA 2.0 and provides attribution | Page title, caption and memorial category identify Famine Memorial; visual inspection still required |
| DUB-INS-0001 | OBJECT_PHOTOGRAPH | https://commons.wikimedia.org/wiki/File:Famine_Plaque.png | Opened | Knguyen25; page states CC0 1.0 | Exact subject is a family-name plaque at the memorial, but only one plaque is shown; does not establish a complete plaque inventory |
| DUB-BLD-0002 | OBJECT_PHOTOGRAPH | https://commons.wikimedia.org/wiki/File:Custom_House_Dublin,_Ireland.jpg | Opened | Creevylea identified in structured data; page indicates CC BY-SA 4.0 | Page identifies Custom House; visual inspection still required |
| DUB-MON-0002 | OBJECT_PHOTOGRAPH | https://commons.wikimedia.org/wiki/File:Grattan_Statue,_Dublin.jpg | Opened | Sheila1988 identified in structured data; licence not independently extracted in this pass | Page identifies Grattan Statue; visual inspection still required |
| DUB-MON-0003 | OBJECT_PHOTOGRAPH | https://commons.wikimedia.org/wiki/File:Thomas_Davis_Statue,_Dublin_-_geograph.org.uk_-_7821543.jpg | Opened | Meirion; page states CC BY-SA 2.0 and provides attribution | Page title/caption identifies Thomas Davis Statue; visual inspection still required |
| DUB-MON-0004 | OBJECT_PHOTOGRAPH | https://commons.wikimedia.org/wiki/File:George_Salmon_Statue_Trinity_College_Dublin.jpg | Opened | Ahorsewithnoname2021 identified in structured data; licence not independently extracted in this pass | Page title identifies George Salmon Statue; visual inspection still required |
| DUB-MON-0005 | OBJECT_PHOTOGRAPH | https://commons.wikimedia.org/wiki/File:William_Edward_Hartpole_Lecky_statue_Trinity_College_Dublin.jpg | Opened | Steven Lek; existing record states CC BY-SA 4.0; licence needs final page-level confirmation | Page description identifies Lecky statue; visual inspection still required |

## 3. Direct image URL test limitation

Direct media URLs were attempted for:
- O'Connell Monument
- General Post Office
- Famine family-name plaque
- Custom House

The web page reader returned an internal access error for these direct binary URLs. This is a limitation of the inspection tool, **not proof that the files are broken**. Record these four as direct-image test inconclusive, not failed. No successful HTTP status or rendered binary was obtained through this method.

## 4. Results

- Original source pages opened: **10/10**
- Object-photo source pages opened: **9**
- Context source pages opened: **1**
- Direct media URL attempts: **4**
- Direct media URL successes established: **0**
- Direct media URL failures established: **0**
- Visual inspection of actual image pixels: **not completed**
- Exact object identity fully visually confirmed: **0 in this batch**
- JSON updates: **none**
- New images added: **0**

The page-level metadata checks strengthen provenance for several entries, but the image files must still be rendered/inspected and the direct image URLs tested by a suitable binary-capable method. Do not change the image-role status based only on page titles.

## 5. Next cycle

1. Continue with the next ten image references (records 11–20) and open their original source pages.
2. Use a binary-capable retrieval method to test and visually inspect image files, preserving a distinction between tool-access failure and an actual HTTP/file failure.
3. For pages with incomplete metadata, extract individual author, date, licence deed and attribution requirements.
4. Compare each visible object with the catalogue's exact address, NIAH reference and physical description.
5. Keep all uncertain matches out of the verified 195/195 count.

**Batch 024 conclusion:** Ten original source pages are reachable. No direct image URL was proven broken or successful in this pass, and no image has yet been visually confirmed by this batch. The independently verified object-photo total therefore remains unchanged and not yet established.

**LEAVE NO LOCATION BEHIND.**
