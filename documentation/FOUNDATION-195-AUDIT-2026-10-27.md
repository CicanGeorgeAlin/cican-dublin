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
