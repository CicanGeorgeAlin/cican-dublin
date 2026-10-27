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
