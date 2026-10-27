# CICAN DUBLIN — Foundation Inventory Audit
Date: 27 October 2026
Scope: Initial structural and metadata audit of the 195-location foundation.

## Executive result
The catalogue contains 195 records. All 195 have unique, consistently formatted identifiers with four-digit numeric suffixes. The letters in identifiers are category codes, not missing sequence numbers. **Do not renumber the existing records.** Preserve all current IDs to protect links and relationships.

This is an initial repository/data audit, not a completed photograph-by-photograph visual verification or live browser test. The 64 image URLs have not yet all been fetched and visually inspected.

## Repository snapshot
- `data/objects.json`: 195 location records.
- `data/visual-assets.json`: 195 corresponding visual records.
- `data/sources.json`: 232 source records.
- Every catalogue ID has exactly one matching visual record.
- No duplicate catalogue IDs, malformed IDs, duplicate visual record IDs, missing source IDs, duplicate source IDs, or broken parent references were found.
- Every catalogue record's name matches its corresponding visual record.

## Identifier scheme
All 195 IDs match `DUB-[CATEGORY]-NNNN`, where the category code is alphabetic and the final four characters are numeric.
Category totals:
- MONUMENT: 9
- ARCHITECTURE: 85
- STREET_DETAIL: 84
- MEMORIAL: 2
- INSCRIPTION: 8
- PUBLIC_ART: 2
- INFRASTRUCTURE: 5

## Photography audit — important gaps
All 195 visual records currently have:
- `photo_status = AWAITING_FOUNDER_PHOTOGRAPH`
- `gallery_status = NOT_YET_PUBLISHED`
- `line_art_status = WAITING_FOR_ORIGINAL_PHOTO`
- No original founder photograph recorded.

Current reference-image inventory:
- 64 reference-image entries.
- 47 unique image URLs.
- 59 catalogue records have at least one reference image.
- 31 records have at least one image labelled `OBJECT_PHOTOGRAPH`.
- 29 records have at least one image labelled `STREET_CONTEXT`; one record has both roles.
- 136 records have no reference image at all.
- 164 records do not yet have an exact-object photograph reference (136 with no image + 28 context-only).

All 64 reference entries contain the expected metadata fields (image URL, source URL, source ID, title, photographer, licence, licence URL, attribution and image role), and all referenced source IDs exist in the source registry. This confirms metadata completeness only; it does not prove that a URL still responds, that the image visually depicts the correct object, or that the stated licence has been independently rechecked.

Seven image URLs are reused across records. These require review to confirm each reuse is appropriate and not an accidental duplicate.

## Location and verification gaps
- 150 records have valid numeric latitude/longitude pairs.
- 45 records have no coordinates and no usable map URL destination. They need location research and verification before being treated as fully mappable.
- Verification status: 167 VERIFIED; 28 PARTIALLY_VERIFIED.
- All parent IDs currently resolve to an existing catalogue record.

## Work still required before declaring the foundation complete
1. Review all 195 records individually for name, category, description, address, evidence, coordinate accuracy and status.
2. Resolve or explicitly retain as unmapped the 45 records without coordinates; do not guess coordinates.
3. Visually inspect every one of the 64 existing image references against its target object and location.
4. Test all image URLs for successful retrieval, redirects and usable image content.
5. Verify licence terms and attribution at the original source page, including commercial reuse suitability where relevant.
6. Find suitable exact-object photographs for the 136 records with no current reference images and replace context-only images where possible.
7. Correct any inaccurate, ambiguous or mismatched record/photo/source relationships.
8. Test the live site: all 195 detail views, map/list presence, search, filters, unmapped-location handling, photo display/fallback, attribution, saved places and fieldwork navigation.
9. Run automated data and code checks again after repairs and verify the deployed commit.

## Audit boundary
No claim is made here that all 195 photographs are present or working. No claim is made that all 195 locations have accurate map pins. No full dynamic browser or Pixel 6 test has been completed as part of this audit. The website should not enter automatic location expansion until the above acceptance checks are passed and the foundation is signed off.


## Coordinate remediation update — 27 October 2026
A subsequent research pass resolved the 45 records that previously had null latitude/longitude fields:
- 44 micro-detail records now inherit the already sourced coordinate of their linked parent building. These are explicitly labelled `PARENT_BUILDING_REFERENCE`; they are navigation anchors, not claims that the micro-feature itself has been surveyed at that exact point.
- DUB-STR-0061 (the Seafield Road East/West lamp-standard group) now uses the NIAH Registration 50030341 site reference, Irish Grid 320244, 236366, transformed from EPSG:29902 to WGS 84. It is labelled `NIAH_SITE_REFERENCE`, not an individual lamp-post coordinate.
- The detail-page UI now explains these two reference types and warns that the precise micro-detail or individual lamp positions still need field verification.
- The map and walking-link fields have been populated for all 45 records.

After the update, all 195 records have numeric coordinates and map navigation references. This is **100% coordinate-field coverage**, not 100% exact-feature survey accuracy. Forty-four inherited pins intentionally coincide with their host-building reference; exact object-level positioning remains a fieldwork task.

## Remaining foundation blockers
- 136 records still have no reference photograph.
- 28 records have only street-context imagery, not an exact-object photograph.
- Only 31 records currently have at least one reference labelled `OBJECT_PHOTOGRAPH`.
- The 64 existing image references still need individual URL-response, visual-subject and rights checks. Metadata presence is not a successful image test.
- 28 catalogue records remain `PARTIALLY_VERIFIED` and require review.
- A full live browser/device regression across all 195 detail pages has not been performed.

The foundation is not approved for automatic expansion until photo, evidence, image-rights, and runtime checks are completed or remaining exceptions are explicitly signed off.


## Visual-source audit and correction update — 27 October 2026
A second visual-source pass has made the following changes and findings:
- Replaced the George Salmon image reference that had a contradictory Commons description naming W. E. H. Lecky. The replacement is the independently captioned “George Salmon Statue Trinity College Dublin” file by Ahorsewithnoname2021, dated 26 November 2021, licensed CC BY-SA 4.0. The visible seated figure and plinth inscription match the NIAH description of the George Salmon statue (Registration 50020521).
- Added a direct exact-object photograph for DUB-STR-0044, the Howth Road Victorian wall-mounted postbox. Wikimedia Commons identifies the object as the 1890 Howth Road postbox; its camera coordinates (53.366792, -6.218658) are approximately 6 metres from the archive's NIAH-derived coordinate. The image is CC BY-SA 4.0 and credited to Dwmalone.
- Confirmed the Clontarf Road pillar postbox image already attached to DUB-STR-0043 is a direct-object image; its Commons record and NIAH registration 50030114 correspond to the same postbox.
- Reviewed additional Commons file pages for The Five Lamps, the George Salmon statue, Central Hall and Marino Crescent. A filename/description mismatch was detected and corrected for George Salmon; context photographs remain labelled as context, not object proof.
- Added the Howth Road image's source entry and corrected the George Salmon source record. All image reference source IDs resolve to the source registry after these changes.
- Completed previously missing source classification/reference metadata for 19 NIAH entries and 2 government context sources. The source registry now has 233 records, with no missing source_type or specific_reference fields.

### Updated visual inventory
- 195 catalogue records and 195 matching visual records remain intact.
- 65 reference-image entries across 48 unique image URLs.
- 32 records have at least one OBJECT_PHOTOGRAPH reference.
- 28 records have context-only reference imagery.
- 135 records have no reference-image entry.
- 163 records therefore still lack an exact-object photograph reference (28 context-only + 135 with none).

These are reference-photo counts, not founder-photo completion. No record has been marked as founder-photographed, and no line art has been created from third-party images. The Commons file pages provide evidence of the named creators and stated licences, but a complete byte-level response test of all image URLs and a visual inspection of every image remain outstanding. A Commons page being reachable does not by itself prove the direct thumbnail URL will load in the live app.

### Current remaining blockers
1. Audit the 28 PARTIALLY_VERIFIED catalogue records individually and upgrade only where the underlying evidence is sufficient.
2. Continue searching for exact-object images for the remaining 163 records; verify subject, creator, licence and reuse conditions at each original file page.
3. Test all 65 image entries' actual delivery URLs and visible rendering in the deployed app.
4. Review the full 195 records for factual and coordinate quality, including the 44 parent-building navigation references and one NIAH site reference that still require field-level precision checks.
5. Complete a full live-browser and Pixel 6 regression or explicitly record the limits of available runtime testing.

The foundation remains NOT COMPLETE and automatic expansion remains on hold.


## Further image and identifier audit — 27 October 2026
A further exact-object image was added for DUB-BLD-0083, Fairview Park's former public convenience. The Wikimedia Commons file page and structured data identify the exact building (NIAH Registration 50120133), photographer Smirkybec, capture date 30 September 2021 and CC BY-SA 4.0. The image is partly obscured by foliage and a site information board; it is a valid identification reference but not a sufficient founder documentation photograph.

### Revised image totals
- 66 reference-image entries across 49 unique image URLs.
- 33 catalogue records have at least one OBJECT_PHOTOGRAPH reference.
- 28 records have context-only imagery.
- 134 records have no reference image.
- 162 records still lack an exact-object photograph reference (28 context-only + 134 with none).
- All 66 image source IDs resolve to source-registry entries.
- The source registry now contains 234 entries. Every source has a source_type and specific_reference value; the official GPO Building of the Month item uses the schema-approved OFFICIAL_HERITAGE_REGISTER type.

### Stable identifier / category cross-check
The category audit found 10 records whose existing ID prefix does not match the record's current category: DUB-STR-0039, DUB-BLD-0054, DUB-BLD-0060, DUB-BLD-0062, DUB-BLD-0065, DUB-BLD-0068, DUB-BLD-0069, DUB-BLD-0070, DUB-BLD-0071 and DUB-BLD-0073. The category values were checked against the objects described and appear to be the meaningful current classification; the prefixes are therefore treated as stable legacy identifiers, not as a live category field. IDs will not be silently renamed. This exception is now explicit and should remain visible in the data-quality record.

### Current position
The data now has 195/195 records, 195/195 visual entries, complete source references, numeric coordinate fields and valid source registry links. These structural checks do not establish factual completeness, exact feature-position accuracy, image delivery or publication readiness. The foundation remains NOT COMPLETE: 28 records are PARTIALLY_VERIFIED, 162 lack exact-object photo references, all reference URLs still need live delivery tests, and full browser/device regression remains outstanding. No automatic expansion is authorised.


## New official evidence route for the remaining partial records — 27 October 2026
A new official NIAH bulk-data route has been identified for the 28 records still marked PARTIALLY_VERIFIED:
- NIAH Data Download: https://www.buildingsofireland.ie/niah-data-download/ — the official page states that five regional CSV files are available, including Dublin, indexed by registration number, with location, classification, rating, description, appraisal, and links to NIAH records and images. Location fields are available in ITM, latitude/longitude and National Grid.
- NIAH live ArcGIS Feature Service: https://services-eu1.arcgis.com/HyjXgkV6KGMSF3jt/ArcGIS/rest/services/NIAHBuildingsOpenData/FeatureServer — the published service describes a searchable NIAH buildings dataset with JSON query support. The NIAH dataset catalogue shows a national CSV distribution updated 9 July 2026.

Both official routes have been registered in the source registry as SRC-NIAH-DATA-DOWNLOAD-2026 and SRC-NIAH-ARCGIS-LIVE. Direct access to the download page and service endpoint was blocked in this session, so the dataset has not yet been retrieved and no partial record has been upgraded. The next evidence pass should obtain the Dublin CSV or query the feature service by the 28 NIAH registration numbers, compare the full Description and Appraisal fields and coordinate systems, and then upgrade only records that match exactly. This is a concrete route to resolving the full-page HTTP 403 limitation without relying on search snippets.

The source registry now contains 236 entries, with no missing source_type or specific_reference values. The foundation remains NOT COMPLETE.


## NIAH record-by-record review — 27 October 2026
A new batch of individual official NIAH record results supplied full survey fields rather than only indexed snippets. The returned pages expose registration number, location, rating, categories of special interest, original/in-use function, date, Irish Grid coordinates, date recorded, full Description and Appraisal. This is the official data content described by the NIAH download page.

Twenty-four of the 28 previously PARTIALLY_VERIFIED records were upgraded to VERIFIED after matching the catalogue object's identity and description against the full NIAH record. The upgraded records are:
- DUB-STR-0043, DUB-STR-0044, DUB-STR-0045
- DUB-BLD-0078, DUB-BLD-0079
- DUB-STR-0046, DUB-STR-0047, DUB-INS-0006
- DUB-BLD-0080, DUB-BLD-0081
- DUB-STR-0049, DUB-STR-0050, DUB-STR-0051, DUB-STR-0052, DUB-STR-0053, DUB-STR-0054, DUB-STR-0055, DUB-STR-0056, DUB-STR-0057
- DUB-BLD-0082, DUB-STR-0058, DUB-STR-0059, DUB-BLD-0083, DUB-STR-0060

Four records remain PARTIALLY_VERIFIED because their identity or exact inscription/location still requires founder field evidence, not because the associated parent NIAH entry is absent:
- DUB-INS-0001 — individual Famine Memorial name plaques need full on-site transcription and photographic verification.
- DUB-INS-0002 — Jim Larkin pedestal plaque wording, punctuation and face-by-face transcription require close founder photographs.
- DUB-STR-0048 — the NIAH appraisal mentions a rare benchmark in the streetscape but does not state its exact position or precise form; do not claim a precise object location until identified.
- DUB-INS-0007 — the street-name plaque is confirmed on the building, but its actual wording and condition are not transcribed by the NIAH entry.

Updated verification totals: 191 VERIFIED and 4 PARTIALLY_VERIFIED (195 total). These statuses concern source-backed identity and historical description; they do not mean current condition, founder photography, exact micro-feature coordinates, line art or publication are complete. The photo and fieldwork gaps remain open.


## NIAH photo-search batch — 27 October 2026
A direct-object photograph was found and added for DUB-STR-0057, the North Strand Road / Bayview Avenue milestone (NIAH 50120248). Wikimedia Commons file page identifies the object as the ‘Dublin 1 Howth 8’ milestone, photographer John S Turner, captured 13 March 2018, with a visible plaque inscription matching the NIAH description. The file is CC BY-SA 2.0. The image's recorded object/camera coordinate is 53.357793, -6.242408; the catalogue point is 53.35782984, -6.24248202, approximately 6 metres away. The image is a third-party reference, not a founder original. The existing catalogue point remains source-derived and should be field-checked before claiming survey-level precision.

Updated photo inventory after this addition: 67 reference-image entries across 50 unique URLs; 34 records have an exact-object reference; 28 have context-only imagery; 133 have no reference-image entry. Therefore 161 records still lack an exact-object reference photograph. All image source IDs now resolve to the source registry, which contains 237 sources with no missing source_type or specific_reference fields.


## Further exact-object photo found — Vernon Avenue postbox — 27 October 2026
A second exact-object image was added for DUB-BLD-0073, the Carron cast-iron pillar postbox on Vernon Avenue (NIAH 50030098). Wikimedia Commons identifies the depicted object as “Vernon Avenue pillar postbox” (Wikidata Q110821196), links it to NIAH ID 50030098, records photographer Tdr112 and capture date 7 September 2022, and states CC BY-SA 4.0. The structured object coordinate is 53.364587, -6.195402, about 6 metres from the archive's NIAH-derived coordinate. This is a third-party reference image; founder photography and line art remain outstanding. The Commons file page is verified, but direct image delivery timed out in this research session, so actual image loading in the site remains to be tested.

Updated visual inventory: 68 reference-image entries across 51 unique URLs; 35 records have exact-object reference images; 28 records have context-only images; 132 records have no reference image. Therefore 160 records still lack an exact-object reference image (28 context-only + 132 without any image). The source registry contains 238 sources; all 68 photo source IDs resolve, and all source records have source_type and specific_reference values.

### Verification count update
The 24-record NIAH review left 191 VERIFIED and 4 PARTIALLY_VERIFIED records. The four remaining exceptions are DUB-INS-0001, DUB-INS-0002, DUB-STR-0048 and DUB-INS-0007, each requiring founder field evidence for precise inscription transcription or exact feature identification.
