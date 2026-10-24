# Archive record schema and status rules

## Identity and relationships
- `id`: permanent unique CICAN identifier.
- `name`: exact object or feature name.
- `category`: controlled category code.
- `parent_id`: optional ID of a larger building, monument or site. Use this for individually documented details that belong to a larger feature.

## Location
- `district`, `address`: geographic description.
- `latitude`, `longitude`: decimal GPS coordinates only. Keep null until verified.
- `national_grid_reference`: preserve source-provided Irish Grid coordinates separately; never copy them into latitude/longitude.
- `map_url`: directions/search link based on a verified address.

## Historical evidence
- `historical_period`, `historical_description`, `historical_significance`: concise claims supported by listed sources.
- `national_inventory_reference`: exact register number where applicable.
- `sources`: IDs in `data/sources.json`.
- If a detail is only partly established, use `PARTIALLY_VERIFIED` and explain what needs field confirmation.

## Production status
- `verification_status`: `RESEARCH_LEAD`, `PARTIALLY_VERIFIED`, or `VERIFIED`.
- `photography_status`: `TO_PHOTOGRAPH` until the founder confirms the original image is archived.
- `line_art_status`: `TO_CREATE` until artwork has been created and checked against the original.
- `publication_status`: `NOT_PUBLISHED` until a live Lulu product URL is verified.

## Non-negotiable rules
- Never invent a GPS coordinate, photograph, inscription, historical claim or publication URL.
- One physical discovery has one permanent ID; use parent-child links for details within a larger site.
- A register entry is evidence of a recorded feature, not proof that the founder has visited or photographed it.
- Keep source uncertainty visible.
