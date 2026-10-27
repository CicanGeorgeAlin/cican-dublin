# CICAN DUBLIN — Visual Archive Audit

**Audit date:** 27 October 2026  
**Catalogue baseline:** 195 records  
**Scope:** Every record in `data/objects.json`

## Current photographic coverage

- **195/195 catalogue records** have a corresponding visual inventory entry.
- **59/195 locations** have at least one registered third-party reference photograph (**30.3% coverage**).
- **136/195 locations** have no registered reference photograph.
- **64 photograph references** are registered across the 59 covered locations.
- The 64 references resolve to **47 unique image URLs**; some context images are intentionally associated with multiple related catalogue records.
- Image roles: **35 OBJECT_PHOTOGRAPH** references and **29 STREET_CONTEXT** references.
- **0 original founder photographs** are registered.
- **0 line-art illustrations** are registered.
- Third-party reference photographs are not founder originals and do not complete the founder-photography or line-art production stages.

## Inventory and metadata integrity

- `data/objects.json`: 195 records.
- `data/visual-assets.json`: 195 visual entries; `record_count` is 195.
- `data/sources.json`: 232 source records.
- Every visual entry maps to an existing catalogue ID.
- Every registered image reference has the required source ID, image URL, source page URL, photographer, licence, licence URL, attribution and image role.
- All image source IDs now resolve to a registered source record. A 13-entry source-registry gap was repaired on 27 October 2026 (commit `db7579065db14bfa9a56c88725a3252f81ed07df`).
- Structural checks found no missing image metadata fields, invalid image roles, malformed HTTPS prefixes or orphaned visual records.
- Structural validation does not establish that every remote image endpoint is currently reachable. URL availability must be checked independently; inaccessible or unverified URLs must not be treated as confirmed live images.

## Category totals

| Category | Records |
|---|---:|
| ARCHITECTURE | 85 |
| INFRASTRUCTURE | 5 |
| INSCRIPTION | 8 |
| MEMORIAL | 2 |
| MONUMENT | 9 |
| PUBLIC_ART | 2 |
| STREET_DETAIL | 84 |
| **Total** | **195** |

## Image integrity policy

1. A reference image must genuinely depict the catalogued object or be explicitly labelled as surrounding streetscape context.
2. Preserve the original photographer's attribution and the source's actual licence or usage conditions.
3. Do not infer a licence from the fact that an image is publicly accessible.
4. Do not use an image whose subject cannot be matched reliably to the location.
5. Do not present third-party reference photographs as founder photography.
6. Keep original founder photographs and derivative illustrations as separate assets.
7. Create A4 line art only from the matching founder photograph, preserving visible details.
8. A building photograph does not prove the exact position or condition of a small street object.
9. Documentary verification, field photography and exact GPS verification remain separate states.
10. Never change an existing archive ID as part of visual production.

## NIAH image-use note

The Buildings of Ireland terms state that website content may be used for educational or private purposes with NIAH credit, while commercial use requires prior written agreement. NIAH image-gallery links were identified during the 27 October research batch, but several direct image requests returned access errors during this audit. Those candidate images have not been added to the visual inventory and do not increase photographic coverage. The terms and access limitations are documented in `research/2026-10-27-visual-photo-investigation-batch-09.md`.

## Workflow

`DISCOVER → IDENTIFY EXACT LOCATION → VERIFY IMAGE SUBJECT → CHECK IMAGE URL → CHECK LICENCE → REGISTER SOURCE AND ATTRIBUTION → ADD IMAGE REFERENCE → REVALIDATE → FOUNDER PHOTOGRAPH → PRESERVE ORIGINAL → CREATE A4 LINE ART → QUALITY CONTROL → PUBLISH`

## Website boundary

Preserve the existing black-and-white design, navigation, catalogue behaviour, record IDs and research content. Do not display empty or invented image URLs. Do not replace existing verified images with inferior alternatives. Any image addition must retain its direct/context role and complete provenance metadata.

## Remaining work

Prioritise the 136 records without reference photographs. Search exact names, historic names, street addresses, NIAH registration numbers, Commons, Geograph Ireland, Flickr, Dublin City Libraries & Archive, National Library of Ireland and other institutional collections. Record inaccessible or rights-restricted candidates as leads only. Update the coverage figures only after a photograph has passed subject, source, URL and usage-condition checks.
