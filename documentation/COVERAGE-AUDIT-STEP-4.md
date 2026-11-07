# Step 4 — Dublin-wide geographic coverage audit

**Audit date:** 7 November 2026  
**Founder:** CICAN GEORGE ALIN  
**Scope:** Dublin City and County Dublin

## Outcome

The geographic coverage framework is now reconciled against the canonical catalogue. The archive contains **274 objects** across five postal-district work zones:

| Postal district | Catalogue records |
|---|---:|
| Dublin 1 | 98 |
| Dublin 2 | 78 |
| Dublin 3 | 67 |
| Dublin 4 | 18 |
| Dublin 8 | 13 |
| **Total** | **274** |

These are counts of the district labels stored on object records. They are not administrative-area counts and do not establish that every object has been spatially assigned to a local authority.

## Four local authorities

The framework now explicitly tracks:
- Dublin City Council
- Fingal County Council
- South Dublin County Council
- Dún Laoghaire-Rathdown County Council

All four currently have `record_count: null` and `NOT_SPATIALLY_ASSIGNED`. This is deliberate: the audit does not infer local-authority membership from postal districts.

## Authoritative boundary sources

1. **Tailte Éireann, Local Authorities — National Statutory Boundaries — Ungeneralised 2026.** The data.gov.ie listing describes the 2026 national boundary dataset and identifies the three county councils in County Dublin in addition to Dublin City Council. A GeoJSON resource is listed. The 2026 dataset listing does not specify a reuse licence, so the geometry is identified but not copied into this repository pending licence review.
2. **Tailte Éireann, Townlands — National Statutory Boundaries — Ungeneralised 2026.** The dataset describes townlands as statutory boundaries and lists multiple download formats. Its data.gov.ie resource listing says no licence is provided; reuse terms must be confirmed before redistribution.
3. **Tailte Éireann boundary-data guidance.** The official guidance says boundary data is available as attributed polygon datasets in ITM and cautions users to exercise due diligence where boundary delineation matters.

## Corrections made

- Reconciled the district counts in `data/districts.json` with the live 274-object catalogue.
- Replaced the outdated 70 / 55 / 66 counts with the current 98 / 78 / 67 counts for Dublin 1, 2 and 3.
- Marked Dublin 4 and Dublin 8 as active research zones with 18 and 13 records respectively.
- Removed the unsupported claim that 191 postal-district records are a verified Dublin City Council administrative count.
- Added a separate machine-readable `data/coverage-audit.json`.
- Added schema contracts for the coverage framework and coverage audit.
- Extended the quality gate to reconcile all postal-district counts and check every source reference.

## What is not claimed

- No local-authority polygon count has been calculated yet.
- No boundary geometry is bundled or displayed by this change.
- A record with no coordinate, or only a building-level approximate point, is not forced into a local-authority count.
- Research counts do not measure the total number of heritage objects in an area.

## Next geographic work

After licence and geometry metadata are confirmed, spatially intersect only defensible object points with the 2026 local-authority polygons. Then create townland/settlement work zones, identify gaps within each authority, and expand the archive in a balanced manner. Continue to distinguish source-derived coordinates from founder GPS and preserve unresolved assignments.

**Step 4 status:** Geographic coverage framework and catalogue audit complete; polygon import and object-level local-authority assignment remain explicitly pending.
