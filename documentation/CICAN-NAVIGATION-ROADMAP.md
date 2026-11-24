# CICAN Navigation — Implementation Roadmap

**Project:** CICAN Dublin Archive  
**Feature:** CICAN Navigation  
**First implementation stage:** Walking-route prototype  
**Status:** Prototype implementation on feature branch; not yet accepted for production.

## Product goal

Visitors should be able to select an archive point of interest and receive walking directions inside the CICAN Dublin map, without being handed off to Google Maps. Navigation must use the archive's recorded destination coordinates and the visitor's live GPS position. Routing must never silently repair, overwrite or certify archive coordinates.

## Stage 1 — Native map walking-route prototype

Implemented in this branch:
- Replace the map detail's Google Maps walking link with **WALK THERE WITH CICAN**.
- Use the latest actual browser GPS fix as the route origin. If live tracking is not running, request it and calculate after the first fix.
- Submit a pedestrian route request to the Valhalla routing API.
- Decode Valhalla polyline6 geometry and draw a highlighted route on the existing MapLibre map.
- Show route distance, estimated duration and turn instructions.
- Allow the user to clear the route.
- Keep the existing live GPS implementation intact.
- Do not use a Google Maps route handoff in the map application.

### Prototype dependency warning

The first prototype calls the public FOSSGIS Valhalla demonstration server at `https://valhalla1.openstreetmap.de/route`. This is a community demonstration service with fair-use limits, not a CICAN-owned production backend. Valhalla's maintainers request that public applications identify themselves with an `X-Client-Id` and contact them through GitHub Discussions before relying on the service for an end-user application. This prototype sends an identifying header, but the project must contact the service operator and arrange suitable usage before public production launch.

The current map style and map tiles are also externally hosted. The website is not yet fully self-hosted or offline independent.

## Site-wide integration completed

The navigation entry points across the website now lead into the CICAN map using the selected archive ID: the main archive catalogue, archive record detail, My Dublin fieldwork queue and generated permanent SEO place pages. The map reads the `destination` query parameter and opens the matching archive record before the visitor requests a route. No Google Maps directions handoff is used by these website walking actions.

The root and preview service-worker cache identifiers were incremented to invalidate stale app JavaScript. Regression tests regenerate all SEO pages and scan every generated permanent place page for Google Maps directions links. A live Valhalla pedestrian-route smoke test checks that the service returns route geometry, distance, duration and manoeuvres.

## Stage 2 — Navigation reliability

- Add route progress and remaining-distance calculation from fresh GPS fixes.
- Detect when the user has moved materially away from the route, accounting for reported GPS accuracy.
- Recalculate routes with throttling and clear status messaging.
- Improve start/end snapping and reject unusable or low-confidence archive coordinates with explicit warnings.
- Add route cancellation, retry and network-loss handling.
- Test route correctness on foot across representative Dublin streets, crossings, bridges, pedestrian paths and restricted-access areas.

## Stage 3 — Multi-stop heritage walks and voice

- Replace the existing multi-stop external map handoff with native Valhalla multi-waypoint routing.
- Add reorderable stops and route optimisation only where it preserves the user's chosen visit constraints.
- Add optional spoken turn instructions and accessible text guidance.

## Stage 4 — CICAN-owned infrastructure

- Host and operate a CICAN-controlled Valhalla service with a documented data-update process, monitoring, backups, rate limits and privacy controls.
- Host map tiles/style assets under CICAN control, preserving required OpenStreetMap attribution and licence compliance.
- Evaluate a Dublin/County Dublin regional extract first, then broader coverage.
- Define a realistic operating budget and maintenance plan before claiming independence from third-party infrastructure.

## Stage 5 — Offline navigation

- Package regional map data and routing graph updates for offline use.
- Provide clear offline coverage, freshness and storage indicators.
- Ensure route calculation and GPS tracking can continue without a mobile data connection.

## Evidence and safety rules

- Route distance and ETA are estimates, not guarantees.
- Routing data may be incomplete, stale or wrong; visitors must follow signs, crossings and lawful public access.
- Never route users into private property, closed sites, unsafe paths or inaccessible archaeological locations.
- Do not imply a research lead is a visitor attraction.
- Preserve source coordinates, founder GPS observations and route-snapped positions as separate data.
- Do not store or upload a user's location history by default.
- A successful automated test is not a substitute for physical walking tests.

## Release gate

Do not merge or deploy as a production navigation feature until JavaScript syntax, route geometry tests, archive validation, service-worker checks and live route tests have passed. Confirm the community server's usage requirements before public release.
