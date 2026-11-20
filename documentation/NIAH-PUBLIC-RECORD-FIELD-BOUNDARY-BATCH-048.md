# CICAN Dublin — Batch 048: Public NIAH Record Field Boundary and Appraisal Retrieval Route

**Date:** 20 November 2026  
**Scope:** Re-inspect the individual public NIAH record and compare its visible field set with the official NIAH Handbook.  
**Publication state:** Research only; no production changes.

## 1. Individual Mack's Bridge public page re-opened

Official page:
https://www.buildingsofireland.ie/buildings-search/building/11336004/newbridge-house-newbridge-demesne-donabate-dublin

The current public page explicitly displays:
- Title: Newbridge House, NEWBRIDGE DEMESNE, Donabate, DUBLIN
- REG_NO: 11336004
- Rating: Regional
- Categories of Special Interest: Architectural, Artistic, Technical
- Original Use: Bridge
- In Use As: Bridge
- Date: 1760–1800
- Coordinates: 322039, 249413 (page does not label CRS)
- Date Recorded: 10/08/2000
- Date Updated: --/--/--
- Description: single-arch humpback road bridge c.1780, carved limestone archivolt and keystones, random rubble stone parapet walls with wrought-iron railings and ashlar piers.

The public page then proceeds directly from Description to user contribution links ("Add your photos to this record" and "Get in touch..."). There is no visible Appraisal field on this public record page. This is now a confirmed public-page field boundary, not simply a failure to find a hidden paragraph in the page extraction.

Source: individual NIAH page (opened 20 November 2026).

## 2. Official NIAH Handbook distinguishes internal survey fields

The official NIAH Handbook, Edition July 2025, says the written record includes NIAH Online Database datafields including Description and Appraisal. It describes Appraisal as a distinct field explaining the site's significance and supporting the Categories of Special Interest and Rating. It also explains that the complete NIAH record has written, photographic and mapping components.

Handbook:
https://www.buildingsofireland.ie/app/uploads/2025/08/NIAH-Handbook-Edition-July-2025.pdf

Relevant sections:
- Handbook PDF lines 505–519: record consists of written, photographic and mapping parts.
- Lines 543–548: REG_NO is a unique eight-digit identifier.
- Lines 910–955: Appraisal field's purpose and content.
- Appendix E / lines 2224–2230: the NIAH Online Database is a controlled SharePoint application; access and credentials are supplied by NIAH to authorised project users.
- Appendix E / lines 2461–2485: the Details section includes Description and Appraisal datafields.

This controlled internal database is not a public archive retrieval endpoint and we do not have authorised credentials. Do not attempt to access it or infer its contents.

## 3. Corrected interpretation of Gate 1

For Mack's Bridge:
- The individual public NIAH record page is verified for the fields it actually exposes.
- The public page does not expose an Appraisal field.
- The official NIAH Handbook confirms that Appraisal exists as a distinct internal survey field in the NIAH Online Database.
- Therefore, Gate 1 should be recorded as **PUBLIC PAGE VERIFIED / APPRAISAL NOT PUBLICLY EXPOSED** rather than implying that the appraisal was overlooked or that the record itself is incomplete.
- Gate 1 cannot be treated as fully satisfied for any archive policy requiring the complete NIAH written record unless the appraisal is supplied by an official open-data extract or another authorised public source. If that cannot be obtained, retain an explicit field-availability exception and do not invent or paraphrase an appraisal.

## 4. Best available next route

The official national dataset documentation says the Dublin CSV contains both Description and Appraisal and is indexed by REG_NO. The live FeatureServer schema also contains APPRAISAL. The next legitimate route remains:
1. Obtain the public NIAH Dublin CSV through a binary-capable retrieval path, or use the official HEV Query/export interface.
2. Filter exact REG_NO 11336004.
3. Preserve the original response and retrieval metadata.
4. Confirm whether the Appraisal is populated in that official export.
5. If no public extract can provide it, contact NIAH via the public contact channel (niah@housing.gov.ie) for clarification/access route; do not use the controlled internal SharePoint system without credentials.

## 5. Gate status

- Gate 1: PUBLIC PAGE VERIFIED / APPRAISAL NOT PUBLICLY EXPOSED. No unsupported appraisal text.
- Gate 2: HOLD. Exact national feature/CSV row still not retrieved.
- Gate 3: PARTIAL. Distinct registrations and relationships corroborated; complete national row and coordinate comparison pending.
- Gate 4: PARTIAL. Provenance documented; field verification, current access and image rights pending.
- Gate 5: NOT AUTHORISED.
- Gate 6: NOT RUN.

**Batch 048 outcome:** The individual public page's visible field boundary is now explicitly documented and reconciled with the official handbook's internal survey-field model. This prevents falsely treating an undisplayed appraisal as a missing or overlooked public-page field. No production records or website files were changed.
