# Coordinate navigation and social preview repair

**Date:** 24 October 2026  
**Scope:** Existing catalogue coordinates, all WALK THERE actions, and social-sharing metadata.

## Coordinate repair

All 29 catalogue records contained a published Irish Grid reference but had empty decimal latitude and longitude fields. The previous WALK THERE links used address strings, which could send Google Maps to a broad street or an imprecise search result.

The archive now converts each recorded legacy Irish Grid point from **TM65 / Irish Grid (EPSG:29902)** to **WGS 84** using EPSG transformation operation 1641 (TM65 to WGS 84 (2)). The original grid references remain unchanged. Decimal coordinates are recorded to seven decimal places for consistent navigation links.

Every catalogue record now has:
- `latitude` and `longitude`
- `coordinate_source` documenting the conversion and the remaining field-check requirement
- `coordinate_status: SOURCE_DERIVED`
- `coordinate_accuracy_m: null`, because the underlying point accuracy is not established
- a Google Maps walking URL whose destination is the coordinate pair

The NIAH national dataset metadata says legacy point centroids were digitised relative to OSI 6-inch mapping and that older Irish Grid points may need revision against larger-scale ITM mapping. The EPSG transformation's published 1 m accuracy describes the datum transformation, not the positional accuracy of the original NIAH point. For this reason, no record is marked FIELD_VERIFIED. Founder GPS/photo checks remain the next validation step.

## WALK THERE behavior

- Listing cards use the coordinate-based walking URL.
- Record detail panels use the same coordinate-based walking URL.
- Both destinations use Google Maps `destination=latitude,longitude` and `travelmode=walking`.
- If a future record has no valid coordinate pair, the interface displays GPS PENDING rather than silently substituting an address search.
- The detail view shows the coordinate pair and its source-derived status.

## Social preview

The archive page now has Open Graph and Twitter large-card metadata pointing to the same 1200 × 630 PNG feature image as the homepage. GitHub Actions renders `assets/social-preview.png` from `assets/social-preview.svg` during deployment.

## Validation

- 29/29 records have valid numeric coordinates within the Dublin bounding area.
- 29/29 map URLs contain the same coordinate pair stored on their record.
- 29/29 map URLs specify walking mode.
- Two child/detail records intentionally share their parent monument's NIAH point because the source locates them within the same monument footprint; they are not independent survey fixes.
- All coordinates remain SOURCE_DERIVED pending founder field verification.
