# Canonical map compatibility prototype

This branch evaluates the canonical `data/objects.json` catalogue as a possible full-archive map source. It is deliberately separate from production.

## Run

From the repository root:

```sh
node scripts/test-canonical-map-compatibility.mjs
```

The script is read-only. It does not alter the map application or archive data.

## Scope

- Checks canonical object IDs, schema-required fields, categories and map filter fields.
- Applies the exact coordinate eligibility predicate currently used by `preview/app/app.js`.
- Checks source references, parent links and visual-inventory coverage.
- Measures how many additional canonical records and mapped points are outside the current NIAH-only dataset.
- Confirms that the production map still references `niah-registered-objects.json`.

## Important limitation

This is a data-contract and compatibility preflight, not a browser end-to-end test. It does not prove MapLibre rendering, clustering, popup behavior, responsive layout, route requests or GPS behavior for the larger dataset. Those require a separate browser test against a non-production app build.

Do not change the production `DATA_URL` based solely on this report.

## First CI result — 2026-11-25

The read-only preflight completed all **15 checks successfully** on the pull-request validation run.

| Measure | Current NIAH dataset | Canonical prototype |
|---|---:|---:|
| Records | 509 | 629 |
| Mapped points under the app's current coordinate predicate | 456 | 557 |
| Additional mapped points | — | 101 |
| Additional records without coordinates | — | 19 |

The prototype also confirmed:
- All 120 records outside the NIAH subset have canonical IDs and matching visual inventory records.
- All canonical source references resolve.
- Parent references resolve.
- Category, district, verification and photography filter fields are present.
- Coordinate pairs are complete and within valid numeric ranges.
- The production map data URL remains the NIAH subset.

The broader validation job also passed the existing GPS, walking-navigation, SEO, site-wide navigation and archive preflight steps. GitHub marked the overall run cancelled during concurrent branch updates after those substantive checks had completed; this is not reported as a fully green workflow conclusion.

**Decision:** The data layer is compatible enough to proceed to a non-production browser build. It is not yet evidence that the full map UI, clustering, visual detail panels or routing have been end-to-end tested with 629 records.

## Isolated browser prototype page

An isolated copy of the map app is now available in this branch at `preview/canonical-map-prototype.html`. Its companion script loads `data/objects.json` instead of the NIAH subset. It uses the existing map styles and UI code, but intentionally does not register a service worker or manifest. The production `preview/app.html` and `preview/app/app.js` remain unchanged.

This page is a branch-only prototype. It is not deployed to the production GitHub Pages site. A browser-level visual and interaction test is still required before considering any production data-source change.

## Browser-level validation — added, awaiting CI

A Chromium-based end-to-end test now exercises the isolated page using a local static server and a deterministic blank MapLibre style. It checks the full 629-record list, category filter counts, detail/source rendering for a record outside the NIAH subset, safe handling of a record without coordinates, map canvas initialization, and a 390px mobile layout. The test does not contact the live routing service or request the user's GPS position.

CI installs Playwright and Chromium temporarily; no production dependency or application runtime is added. The browser test must pass before the prototype is considered complete.

The first browser dependency installation attempt exposed a runner compatibility issue: the default runner image was Ubuntu 26.04, which Playwright 1.56.1 does not support for dependency installation. The validation workflow is now pinned to Ubuntu 24.04, a supported runner, before retrying Chromium installation. This was an environment setup failure; the browser test itself did not execute in that attempt.

The first Chromium run successfully installed and launched the browser, loaded the full catalogue, and initialized MapLibre. The test then failed because the intro's enter button was already hidden by the app's initial UI state; the browser test incorrectly attempted to click it. The test has been corrected to exercise the archive directly without depending on that optional intro control. This was a test-harness issue, not a production application failure.

The second Chromium run identified an intentional UI behavior: the discovery sheet starts collapsed and hides its result list until expanded. The test now starts at a mobile viewport and explicitly opens the discovery sheet using its visible grip control before testing the full list and filters. This preserves the actual user interaction rather than bypassing the UI.

The third browser attempt clarified that the app deliberately keeps the discovery sheet hidden in its resting map mode; its records remain loaded but not visible until the map/detail flow opens them. The browser suite now tests list/filter/search data in the DOM and opens both mapped and unmapped records through the app's existing `?destination=ARCHIVE_ID` deep-link behavior. This avoids trying to click elements that the design intentionally hides, while still testing the actual detail UI and navigation safeguards.
