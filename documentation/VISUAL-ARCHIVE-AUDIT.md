# CICAN DUBLIN — Visual Archive Audit

**Audit date:** 26 October 2026  
**Catalogue baseline:** 136 records  
**Scope:** Every record in `data/objects.json`

## Audit result

- **136/136 records** included in the visual inventory.
- **136** awaiting original founder photography.
- **0** original founder photographs registered.
- **0** line-art illustrations registered.
- **0** location galleries ready for publication.
- Existing record IDs, historical descriptions, sources, map points and verification statuses are unchanged.

## Image integrity policy

1. Public location galleries use original photographs taken by the founder.
2. Do not use stock imagery, borrowed historical photographs or AI-generated substitute images.
3. Create A4 line art only from the matching founder photograph, preserving visible details.
4. Keep original photographs and derivative illustrations as separate files.
5. A building photograph does not prove the exact position or condition of a small street object.
6. Documentary verification, field photography and exact GPS verification remain separate states.
7. Never change an existing archive ID as part of visual production.

## Workflow

`RECORD AUDIT → FOUNDER PHOTOGRAPH → PRESERVE ORIGINAL → REVIEW IMAGE → CREATE A4 LINE ART → QUALITY CHECK → ADD LOCATION GALLERY → BOOK EDITION`

## Category totals

| Category | Records |
|---|---:|
| ARCHITECTURE | 71 |
| INFRASTRUCTURE | 5 |
| INSCRIPTION | 6 |
| MEMORIAL | 2 |
| MONUMENT | 9 |
| PUBLIC_ART | 2 |
| STREET_DETAIL | 41 |
| **Total** | **136** |

## Machine-readable inventory

`data/visual-assets.json` contains one visual production entry per existing record, including its ID, address, photography brief, planned shots, original-photo state, field-verification state, line-art state and A4 output specification.

## Website boundary

The current black-and-white design, navigation, catalogue behaviour, record IDs and research content remain unchanged in this first stage. Existing records continue to show their established awaiting-photography state. Gallery images should appear only after real founder image files and metadata have been added and checked. No empty or invented image URLs should be displayed.

## Next production step

Begin with a small representative fieldwork batch. Photograph each selected location using its existing `photography_brief`, preserve the originals, then create matching A4 line art. After the first real image pair passes review, integrate the gallery pattern into record detail pages and extend it consistently across the catalogue.
