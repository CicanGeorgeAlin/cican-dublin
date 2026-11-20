# CICAN Dublin — Batch 045: HEV Direct NIAH Query URL Pattern and Test Links

**Date:** 20 November 2026  
**Scope:** Establish a direct-link shortcut for exact NIAH registration searches using the Historic Environment Viewer.  
**Publication state:** Research only; no production changes.

## 1. Direct query URL pattern observed in indexed official viewer

A search-indexed Historic Environment Viewer result exposes a URL using this query parameter format:

https://heritagedata.maps.arcgis.com/apps/webappviewer/index.html?id=0c9eb9575b544081b0d296436d8f60f8&query=18a4bc9c428-layer-10%2CREG_NO%2C32400827

The indexed page result displays the queried record as:
- 32400827 : Urlar House : house
- Rating: Regional
- View main record on NIAH Website

This is evidence that the viewer's URL query parameter can encode a layer identifier, field name REG_NO, and registration-number value. It gives a reproducible candidate pattern for direct exact-record lookup. It is not proof that the corresponding Mack's Bridge URL successfully resolves.

Source:
https://heritagedata.maps.arcgis.com/apps/webappviewer/index.html?id=0c9eb9575b544081b0d296436d8f60f8&query=18a4bc9c428-layer-10%2CREG_NO%2C32400827

## 2. Mack's Bridge direct test URL

Candidate URL substituting the known registration number 11336004:

https://heritagedata.maps.arcgis.com/apps/webappviewer/index.html?id=0c9eb9575b544081b0d296436d8f60f8&query=18a4bc9c428-layer-10%2CREG_NO%2C11336004

The web retrieval tool returned an access error when this exact URL was opened. That does not establish that the URL fails in an ordinary browser. The HEV application itself was not interactively operated in this session.

## 3. Related test URLs

Candidate exact-query URLs for the four separate neighbouring registrations:

- 11336002: https://heritagedata.maps.arcgis.com/apps/webappviewer/index.html?id=0c9eb9575b544081b0d296436d8f60f8&query=18a4bc9c428-layer-10%2CREG_NO%2C11336002
- 11336003: https://heritagedata.maps.arcgis.com/apps/webappviewer/index.html?id=0c9eb9575b544081b0d296436d8f60f8&query=18a4bc9c428-layer-10%2CREG_NO%2C11336003
- 11336004: https://heritagedata.maps.arcgis.com/apps/webappviewer/index.html?id=0c9eb9575b544081b0d296436d8f60f8&query=18a4bc9c428-layer-10%2CREG_NO%2C11336004
- 11336005: https://heritagedata.maps.arcgis.com/apps/webappviewer/index.html?id=0c9eb9575b544081b0d296436d8f60f8&query=18a4bc9c428-layer-10%2CREG_NO%2C11336005

These are test candidates, not verified search results. Do not treat them as evidence of successful record retrieval until the HEV displays the expected exact REG_NO and the record attributes are exported.

## 4. Independently rechecked Fingal relationship evidence

The Fingal Donabate–Portrane Heritage Audit Appendix 2 lists Mack's Bridge as REG_NO 11336004 at Newbridge Demesne, Hearse Road, Donabate, coordinate pair 322039,249413. It separately lists 11336002, 11336003 and 11336005 as other assets in the demesne. The EIAR Appendix 1 likewise provides separate rows for 11336004, 11336005 and 11336002 and explicit ITM East/North columns for Mack's Bridge. These records must not be merged.

Sources:
- https://www.fingal.ie/sites/default/files/2023-03/Donabate%20Portrane%20Heritage%20Audit%20Report%20FINAL%2019.09.2022.pdf
- https://www.pleanala.ie/publicaccess/EIAR-NIS/304624/00-Broadmeadow%20Way%20EIAR%20and%20NIS-Digital/EIAR%20Documents/Volume%204%20PDF/Broadmeadow%20Way-Vol%204A-EIAR%20Appendix%201%20%28May%202019%29.pdf

## 5. Gate status

No HEV query was successfully executed in this session and no CSV export was obtained.
- Gate 1: PARTIAL / HOLD; individual NIAH page identity known, appraisal still not captured.
- Gate 2: HOLD; no exact national row.
- Gate 3: PARTIAL; separate-asset relationships corroborated by Fingal records; official national row comparison pending.
- Gate 4: PARTIAL; field verification, current access and image rights outstanding.
- Gate 5: NOT AUTHORISED.
- Gate 6: NOT RUN.

**Batch 045 outcome:** A direct HEV query URL format has been observed from an indexed official viewer record and converted into candidate URLs for the four relevant registrations. The Mack's Bridge candidate could not be opened through the retrieval layer, so it remains unverified. No production data, source registry, object record or website was changed.
