# CICAN Dublin — App and Navigation Foundation Audit

**Audit date:** 2026-11-25  
**Baseline:** `main` at `000833ded162949c0d8ed08964a4281f56f9b52d`  
**Status:** Architecture audit complete; implementation roadmap proposed  
**Production entry point:** https://cicangeorgealin.github.io/cican-dublin/preview/app.html

## 1. Decision

Continue evolving the existing map-first web application into the shared foundation for the website and future Android app. Do not create a separate catalogue or duplicate the map application.

The archive remains the single source of truth. The website, installable web experience and future Android client should consume the same stable record IDs, verified coordinates, evidence, source references and image provenance.

Do not replace working navigation infrastructure until an alternative has been tested against real Dublin walking routes and demonstrated to be reliable.

## 2. What already exists

Inspected production files:

- `preview/app.html`
- `preview/app/app.js`
- `preview/app/app.css`
- `preview/manifest.webmanifest`
- `preview/service-worker.js`
- `data/niah-registered-objects.json`
- `data/sources.json`
- `data/visual-assets.json`
- `documentation/BASELINE-2026-11-24-LIVE-GPS.md`

Existing capabilities confirmed in source:

- MapLibre GL JS renders the interactive map.
- OpenFreeMap's Liberty style is used for the base map.
- Archive points are loaded from the shared root data files and clustered on the map.
- Browser Geolocation API `watchPosition()` supplies live location updates.
- The live GPS implementation has a documented baseline that distinguishes accepted raw fixes from the smoothed display marker.
- Walking route requests use Valhalla's route API with pedestrian costing.
- The app decodes Valhalla polyline6 geometry, draws the route, displays manoeuvre instructions and estimates remaining distance/time.
- Route progress is matched against route geometry.
- Off-route detection can request a recalculated route.
- The map can follow the user and use device orientation for heading-up display.
- The manifest provides a standalone installable web-app experience.
- A service worker caches the app shell and archive data with a network-first strategy for JSON data.

## 3. External dependencies and ownership boundary

The current application is Google-independent for its map and routing implementation, but it is not infrastructure-independent.

| Function | Current implementation | Ownership status |
|---|---|---|
| Map rendering | MapLibre GL JS | Open-source client library |
| Base map style/tiles | OpenFreeMap Liberty endpoint | External hosted service |
| Walking route calculation | `https://valhalla1.openstreetmap.de/route` | Public community instance; not CICAN-operated |
| Geographic source data | OpenStreetMap-derived map data | External open data; attribution and licence obligations apply |
| GPS position | Browser Geolocation API | Device/browser capability |
| Archive catalogue | Repository JSON files | CICAN-controlled |
| App shell/offline cache | Service worker | CICAN-controlled code; current cache is not a complete offline navigation dataset |
| Android distribution | Not yet implemented | Future work |

The route request currently sends the user's current latitude/longitude and the selected destination coordinates to the public Valhalla endpoint. The interface discloses this. Before production-scale deployment, assess privacy, retention, service terms, availability, rate limits and whether a CICAN-operated endpoint is needed.

The base map style and tile delivery are also external dependencies. Owning the navigation experience does not require owning the underlying street survey, but it does require a documented, replaceable provider architecture and a lawful data pipeline.

## 4. Important limitations

1. A successful automated integration test does not prove the public routing endpoint is continuously available.
2. GPS integration tests do not prove real-world accuracy on every phone, in every street canyon or under poor satellite reception.
3. The current public Valhalla service is a dependency and must not be described as CICAN's own routing server.
4. The current service worker caches the app shell and selected JSON files; it does not constitute complete offline maps or offline route calculation.
5. A route can only be as accurate as its underlying pedestrian network and the destination coordinates supplied. Source-derived or parent-building coordinates must not be presented as exact field-verified entrances or object positions.
6. Browser GPS, compass, background execution and voice behaviour can differ from a native Android application.
7. The production site is hosted on GitHub Pages. GitHub Pages cannot host a continuously running routing engine; a CICAN-operated routing backend would require separate infrastructure.

## 5. Recommended architecture

### Shared archive layer
Keep the canonical archive records, unique IDs, coordinate provenance, evidence status, sources and visual inventory in the repository. Define and validate stable schemas before introducing new clients.

### Shared map and navigation client
Continue using MapLibre for map presentation. Keep route rendering, progress display and user experience in a client layer that can be reused or adapted for Android.

### Routing service abstraction
Move route calculation behind a small provider interface. The client should not hard-code a single public endpoint throughout the navigation logic. The interface should support:
- route request and response validation;
- pedestrian profile and language;
- clear timeout and error states;
- provider attribution;
- privacy disclosure;
- controlled fallback;
- telemetry that excludes precise location unless explicitly justified and consented to.

### CICAN-operated routing
Evaluate running Valhalla on CICAN-controlled infrastructure using a documented, periodically refreshed OpenStreetMap extract for the intended service area. Begin with Dublin and pedestrian routing. Do not deploy until cost, memory/CPU requirements, update process, monitoring, backups, abuse controls and privacy obligations are understood.

### Android application
First stabilise the installable web application and shared data contracts. Then evaluate a native Android client or a carefully chosen web-app packaging approach. The Android client must use the same archive IDs and navigation API, not a forked catalogue.

## 6. Ordered implementation roadmap

### Phase 0 — Baseline and architecture audit
- [x] Inspect the production map application and current GPS baseline.
- [x] Identify current map, routing and data dependencies.
- [x] Confirm whether Google Maps is used for the current navigation route calculation.
- [x] Record limitations and infrastructure ownership boundaries.
- [ ] Add explicit automated checks for routing-provider configuration and disclosure.
- [ ] Review the current app service-worker registration and cache scope before expanding offline behaviour.

### Phase 1 — Archive data foundation
- [ ] Audit canonical catalogue schemas and coordinate provenance.
- [ ] Confirm stable unique IDs and duplicate prevention.
- [ ] Ensure every navigable record has a defensible coordinate status.
- [ ] Separate exact-object position, site/building reference and unverified coordinate states.
- [ ] Establish a versioned, client-neutral archive data contract.
- [ ] Add data export and compatibility tests for future Android use.

### Phase 2 — Navigation provider boundary
- [ ] Extract route calculation behind a provider module without changing visible production behaviour.
- [ ] Add response schema validation and malformed-route handling.
- [ ] Add deterministic tests for timeouts, rate limits, unavailable service, no-route responses and invalid geometry.
- [ ] Make the routing provider configurable without exposing secrets in public client code.
- [ ] Keep location disclosure visible and understandable.

### Phase 3 — Dublin route pilot
- [ ] Select a small set of real Dublin pedestrian journeys with varied street/path conditions.
- [ ] Compare route geometry and instructions against lawful, accessible pedestrian paths.
- [ ] Test bridges, crossings, pedestrianised streets, parks and restricted/private access where represented in map data.
- [ ] Record route failures and map-data gaps rather than silently improvising.
- [ ] Conduct founder real-device walking tests; automated tests alone are insufficient.

### Phase 4 — CICAN-controlled routing service
- [ ] Compare self-hosted Valhalla operating requirements and costs.
- [ ] Establish a Dublin-only map-data import and refresh process.
- [ ] Deploy a test endpoint with monitoring, rate limits, backups and documented ownership.
- [ ] Run the same route acceptance suite against the test endpoint.
- [ ] Switch production only after acceptance tests and rollback are proven.

### Phase 5 — App readiness and Android
- [ ] Define shared client data contracts and API versioning.
- [ ] Complete installable web-app checks on Android.
- [ ] Evaluate native Android requirements for background GPS, voice guidance, compass, battery use and offline storage.
- [ ] Build an Android test release only after the navigation backend and data contract are stable.
- [ ] Keep website and app on one archive source of truth.

### Phase 6 — Offline capability
- [ ] Define a lawful downloadable Dublin map-data package.
- [ ] Define storage limits, update versioning and stale-data warnings.
- [ ] Support offline route calculation only after a regional routing dataset is available locally.
- [ ] Test offline start, route completion, interrupted updates and recovery.

## 7. Release gates

No phase is considered complete merely because code compiles.

- Archive data must pass schema, duplicate, provenance and coordinate-status checks.
- Navigation must pass automated route-response and failure-mode tests.
- Real Dublin walking routes must be field-tested on the target Android device.
- The app must disclose when location is sent to an external routing provider.
- Offline claims must only be made for functions that have actually been tested offline.
- Production changes must pass the repository's quality gate and GitHub Pages deployment.
- Research-only catalogue work must remain separate from production publication.

## 8. Immediate next action

Begin Phase 1 with a read-only audit of the canonical archive data schemas, coordinate status fields, record IDs and the live map's data contract. Produce a measurable gap report before changing any production data or application code.

**No production application code, archive records, coordinates, map pins or service configuration were changed by this audit.**
