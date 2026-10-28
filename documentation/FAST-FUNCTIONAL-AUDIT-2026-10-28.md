# CICAN DUBLIN — Fast Functional Audit

**Date:** 2026-10-28  
**Scope:** Static repository and application integrity check. This is not a full interactive browser test.

## Passed checks

- Root entry point `index.html` exists and references the map application, stylesheet, manifest, favicon and emblem.
- Application files exist: `preview/app/app.js`, `preview/app/app.css`, `preview/app.html`.
- Data files exist at the root: `data/objects.json`, `data/sources.json`, `data/visual-assets.json`.
- The root page's `<base href="./preview/"` makes the app's relative data requests `../data/objects.json`, `../data/sources.json`, and `../data/visual-assets.json` resolve to those existing root data files.
- Service worker exists at `service-worker.js`; its shell list references existing core HTML, JS, CSS, manifest, icon and data files. Its registered scope is the site root.
- Manifest is valid JSON and points to an existing SVG icon.
- The map code uses MapLibre GL JS and OpenFreeMap's Liberty style; map controls, cluster layers, point selection, search/filter handlers and geolocation handlers are present in the application source.
- All 23 statically selected DOM IDs in the main application are present in the root HTML. Two additional IDs (`photo-viewer`, `save-place`) are generated dynamically by the application, so their absence from the initial HTML is expected.
- Catalogue integrity rechecked from live repository files: 195 objects, 195 visual records, 262 source records; source IDs are unique.
- Visual inventory rechecked: 88 reference-image entries across 72 locations; 123 locations have no registered reference image.

## Issues found

1. **Social preview image path appears broken.** Root `index.html` declares `https://cicangeorgealin.github.io/cican-dublin/assets/social-preview.png`, but `assets/social-preview.png` is not present at that repository path. This affects link-preview metadata, not the map/catalogue application itself. No replacement was guessed.
2. **Live browser execution could not be confirmed in this audit.** The public GitHub Pages URLs for the home page and `preview/app.html` were not accessible to the browser inspection service in this session. Therefore this report does not claim that live map tiles, CDN loading, GPS permission, or on-device interactions were runtime-tested.
3. The map depends on external network services: MapLibre GL JS/CSS from unpkg and the OpenFreeMap Liberty style. Offline map tiles are not guaranteed; the service worker caches the app shell and catalogue JSON, not the external map style/tiles.

## Photo-first production workflow

Continue to work only against the existing 195 catalogue records:
1. Search official heritage galleries, archives and rights-cleared public collections for exact-object photographs.
2. Open and visually inspect each candidate before attaching it.
3. Register provenance, photographer, date where known, licence and attribution.
4. Keep contextual images separate from exact-object matches.
5. Keep third-party references separate from founder originals.
6. After the research pass, prepare a fieldwork list for the remaining objects. The founder will capture original photographs; line art and colouring-book pages must be derived from those founder photographs or another explicitly rights-cleared image with adaptation permission.

## Result

**Static integrity: PASS with one non-blocking metadata defect.**  
**Full live browser/runtime test: NOT CONFIRMED.**  
No catalogue records or image-coverage counts were altered by this audit.
