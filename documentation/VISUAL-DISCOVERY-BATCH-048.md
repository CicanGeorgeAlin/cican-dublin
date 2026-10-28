# VISUAL DISCOVERY BATCH 048 — NLI Wiltshire Harcourt Street Archive Leads

**Date:** 28 October 2026  
**Repository:** https://github.com/CicanGeorgeAlin/cican-dublin

## Baseline

Re-fetched the live main-branch files after Batch 047. The catalogue remains 195 objects and the visual inventory remains 195 records. There are 79 registered reference-image entries across 68 locations; 127 catalogue records still have no reference-image entry.

## Archival findings

The National Library of Ireland's Wiltshire Photographic Collection catalogue search for Harcourt Street identifies several 1969 records:
- Two catalogue entries titled “Detail of iron boot scraper with ‘hawk’ motif”.
- A separate “Detail of iron boot scraper with ‘dolphin’ motif”; the catalogue note cross-references WIL60[12] and WIL61[1].
- “Row of houses, Harcourt Street, Dublin” (1969).
- Multiple “Harcourt Street Railway Station, Dublin” photographs (1969).
- “Ornate ironwork lamp standards at No. 17 Harcourt Street” (1966), with the house also called Hoover House.

Four research-source entries were added to data/sources.json:
1. NLI-WIL-49313-HARCOURT-ROW-1969 — record vtls000049313, call number WIL 60[10], one 6 × 6 cm negative and one 12 × 21.5 cm print.
2. NLI-WIL-49461-HARCOURT-STATION-1969 — record vtls000049461, call number WIL 68[6], one 6 × 6 cm negative and one 13.5 × 21.5 cm print.
3. NLI-WIL-48037-HARCOURT-17-LAMP-1966 — record vtls000048037, call number WIL 22[10], one 6 × 6 cm negative.
4. NLI-WIL-HARCOURT-BOOTSCRAPERS-1969-COLLECTION — NLI collection search result documenting the hawk and dolphin motif scraper leads.

## Address-matching decisions

The NLI search page does not expose reliable street numbers or individual stable record IDs for the hawk/dolphin boot-scraper items in the search result. Consequently, none has been attached to the existing CICAN entries for 84, 69, 67 or 37 Harcourt Street. The 1969 row-of-houses photograph remains context-only until the individual façades are inspected. The No. 17 lamp-standard image is a potentially exact historic source for No. 17, but the current 195-record catalogue has no No. 17 record; it has not been attached to a different address.

## Rights

The NLI item records state that reproduction rights are owned by the National Library of Ireland. Catalogue access or availability of a digital copy does not mean open licensing. No image file was copied into the project, no NLI photograph was marked as rights-cleared, and permission must be confirmed with NLI before reuse.

## Files changed

- data/sources.json — four NLI archival research leads registered with stable IDs and explicit limits.
- README.md — source count corrected to match the live JSON inventory.
- documentation/VISUAL-DISCOVERY-BATCH-048.md — this report.

No changes to data/objects.json, data/visual-assets.json or the visual audit matrix. No new photographs are counted.

## Validation

- Catalogue records: 195.
- Visual records: 195.
- Registered source records: 256.
- Reference-image entries: 79.
- Locations with reference images: 68.
- Locations without reference images: 127.
- New NLI source IDs: four, unique.
- Unverified street numbers and boot-scraper IDs invented: zero.
- NLI images copied or represented as rights-cleared: zero.

**Batch 048 conclusion:** four NLI archive leads have been registered. The 1969 hawk/dolphin boot-scraper photographs are now traceable research targets, but remain unassigned until the original images are inspected, their addresses confirmed and reproduction permission checked.

**LEAVE NO CICAN LOCATION BEHIND.**
