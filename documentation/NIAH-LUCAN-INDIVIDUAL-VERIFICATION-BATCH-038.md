# CICAN Dublin — Lucan NIAH Individual Record Verification Batch 038

**Date:** 20 November 2026  
**Scope:** Gardenville / Leixlip Road, Lucan, South Dublin County  
**Status:** Official individual-record verification completed for 11201024 and 11201025; research-only pending exact national dataset rows and full duplicate audit.

## 1. NIAH 11201024 — Gardenville, Primrose Lane / Leixlip Road

Official individual record:
https://www.buildingsofireland.ie/buildings-search/building/11201024/gardenville-primrose-lane-lexilip-road-lucan-and-pettycanon-lucan-co-dublin

Verified fields:
- Registration: 11201024
- Rating: Regional
- Special interest: Artistic
- Original use: Steward's house
- In use as: House
- Date range: 1735–1740; described as dated 1738
- Date recorded: 22 April 2002
- Description: detached two-bay, two-storey steward's house, dated 1738, on an L-shaped plan; originally two-bay, two-storey on a rectangular plan. Pitched and hipped slate roof with terracotta ridge tiles; red-brick running-bond chimney stacks with stepped capping and terracotta pots; cast-iron rainwater goods; roughcast walls on battered base; rusticated rendered corner piers; six-over-three timber sash windows; north round-headed six-over-six sash window with interlocking Y-tracery glazing bars; south segmental-headed entrance with timber panelled door and fanlight; rendered perimeter boundary wall with rubble-stone coping.
- Appraisal: prominent corner site at Primrose Lane and Leixlip Road; collared-petal fanlight, widely spaced openings and retained early fabric, including hornless sash frames and historic glass.
- NIAH appraisal states it was erected for the steward of the Lucan House estate and adjoins the walled garden (cross-reference printed as "12201023") and faces the entrance to stable yard (11201137). It also cites Bernard Scalé's 1772 "Edmondsbury Manor of Lucan COUNTY OF DUBLIN" illustration and early fabric including corner fireplaces and timber work.
- Individual-page coordinate display: 303115, 235048. CRS is not labelled in this display; do not use for archive mapping.

## 2. NIAH 11201025 — Leixlip Road, former house / current office

Official individual record:
https://www.buildingsofireland.ie/buildings-search/building/11201025/lexilip-road-lucan-and-pettycanon-lucan-co-dublin

Verified fields:
- Registration: 11201025
- Rating: Regional
- Special interest: Architectural
- Original use: House
- In use as: Office
- Date range: 1820–1840; described as c.1830
- Date recorded: 22 April 2002
- Description: semi-detached three-bay, two-storey former house, c.1830, now used as a travel agency. Smooth rendered walls; timber sash windows with stone sills; replacement timber door with projecting gabled hood; plain timber cornice beneath pitched slate roof with gable end and shared chimney stacks; replacement slate roof to rear; low rubble-limestone walls and gate piers to street; carriage arch with timber doors to east.
- Appraisal: one of a pair of modest early nineteenth-century houses retaining original proportions and features; part of a group with a common building line set back from the street.
- Individual-page coordinate display: 303159, 235073. CRS is not labelled in this display; do not use for archive mapping.

## 3. Relationship and reference checks

- 11201025 is officially described as one of a pair of houses. NIAH 11201026 (Annadale) is a separate registration and appears adjacent in the official search sequence; verify its individual page and spatial relationship before asserting that it is the paired building.
- 11201024 appraisal prints a walled-garden cross-reference as "12201023". This does not match the nearby Lucan orchard/walled-garden registration 11201023. Preserve the literal official text and flag this as an apparent unresolved cross-reference discrepancy; do not silently correct it or assume the referenced asset.
- 11201024 also references stable yard 11201137. This is a separate NIAH registration; do not merge it with Gardenville.
- The official individual-page coordinate pairs above are unlabelled CRS. They are not used as ITM or converted to WGS84.

## 4. Bulk-data and repository duplicate status

The data.gov.ie national CSV resource page advertises a November 2026 resource update, while its descriptive text still contains older bulk-download version wording. The CSV binary has not been downloaded or inspected in this session; no exact CSV row values or checksum are claimed.

The official NIAH FeatureServer layer metadata confirms EPSG:2157 and query support, but the filtered feature query could not be retrieved through this session's web client. Metadata schema is not a substitute for exact feature rows.

Repository data directory API listing is accessible, but large data/objects.json and data/niah-registered-objects.json exceed the GitHub text-fetch limits; raw file retrieval was rejected as too large. Exact-string code search alone cannot certify absence. Full master/public/source/visual duplicate audit remains pending.

## 5. Production decision

No records imported. No source entries, visual inventory entries, public place pages, map points, SEO pages or sitemap entries changed. No production deployment or smoke test performed.

Last confirmed production totals remain 574 master objects, 454 public NIAH registrations, 692 sources and 574 visual records. Four-authority denominator remains 7,535.

## 6. Next actions

1. Retrieve exact NIAH CSV rows or FeatureServer JSON for 11201024 and 11201025, preserving REG_NO, local authority, ITM_E, ITM_N, LATITUDE and LONGITUDE.
2. Resolve the 11201024 printed "12201023" cross-reference through source evidence; do not auto-correct.
3. Verify 11201026 individual record and assess the NIAH-described pair.
4. Retrieve complete catalogue datasets through a supported large-file path and run full duplicate checks.
5. Import only after all evidence and integrity gates pass.
