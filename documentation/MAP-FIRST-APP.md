# CICAN DUBLIN — Map-first app prototype

## Entry point
The prototype is available at `/app.html`. The existing homepage, archive catalogue, and My Dublin notebook are deliberately unchanged while this prototype is reviewed.

## Opening experience\nThe app begins with a cinematic “Open the Atlas” screen: a quiet cartographic grid, editorial typography and a live count of archive records. The visitor enters the map explicitly. The intro is dismissed for the current browser tab session after the first entry; it does not modify archive data or saved-place records.\n\n## Experience
- Full-screen interactive Dublin map with documented archive locations.
- Search across names, IDs, categories, districts, addresses, periods, historical descriptions, significance and source identifiers, including source names and publishers.
- The discovery panel shows live archive totals by documented and in-review status.
- Research references open their original publisher records where a valid HTTP(S) source URL is recorded.
- Category and district filters.
- Tappable markers and a detail panel with historical context, verification state, coordinate provenance, access notes, photography brief and source identifiers.
- Walking directions open Google Maps externally.
- Saved places are held locally in this browser using localStorage.
- On smaller screens, the map remains visible behind a responsive discovery sheet and bottom navigation.
- My Dublin remains linked to the existing notebook page and its existing IndexedDB store.

## Data integrity
The app reads `data/objects.json` directly. It does not duplicate, rewrite or infer archive records. Coordinates remain labelled as source-derived where that is how the catalogue records them. A documented record is not represented as a field-verified visit or founder photograph.

## Map and attribution
The map uses Leaflet and the OpenStreetMap standard tile service. Visible attribution is retained and the map includes a direct link to the OpenStreetMap copyright page. The public standard tile service is suitable for development and modest interactive use subject to its usage policy; it is not a guaranteed production tile hosting contract. Review the tile usage policy and select a suitable provider before significant public traffic. Map tiles are not cached by the service worker.

## PWA and offline boundary
The manifest enables installation where supported. The service worker caches the app shell and catalogue for repeat visits. Third-party map tiles and the Leaflet CDN are not cached, so offline map rendering is not promised. A previously cached shell may open without a connection, but the live basemap still requires network access.

## Privacy
Location is requested only after the visitor taps the location control. Saved places remain in local browser storage. No visitor location or saved-place data is sent to CICAN servers.

## Next review gate
Check the prototype on desktop and mobile, verify the map provider's production terms, and test the saved-place and location-permission flows. Only after approval should the app become the primary homepage or replace existing navigation.
