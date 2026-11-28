# CICAN Dublin — Production Map Migration Readiness Plan

**Prepared:** 2026-11-25  
**Target:** Evaluate a future production switch from the NIAH-derived map dataset to the canonical archive catalogue  
**Production baseline:** `main` — production map entry point `preview/app.html`  
**Status:** Planning document only; no migration authorised  
**Decision owner:** CICAN GEORGE ALIN

## 1. Executive decision

The full-catalogue prototype has passed its current automated compatibility and live-service checks. That is sufficient to proceed to a controlled migration-readiness phase, but **not** sufficient to switch production.

The recommended future target is the canonical `data/objects.json` catalogue (629 records), while retaining `data/niah-registered-objects.json` as a derived NIAH-specific dataset. The production map currently loads the 509-record NIAH-derived file. The prototype demonstrates that the canonical catalogue can be loaded and represented by the map client, including 557 coordinate-eligible points.

**Current recommendation: NO-GO for production migration. GO for further isolated acceptance work only.**

Reasons the production gate remains closed:

- All 557 existing canonical coordinate pairs are marked `SOURCE_DERIVED`; none are `FIELD_VERIFIED`.
- 72 canonical records have no complete coordinate pair and must remain discoverable in the catalogue without fabricated map positions.
- Automated tests do not prove that each point represents the exact object, entrance, building or site location.
- Live service checks are single CI observations, not availability guarantees or real-device field validation.
- The public Valhalla service and OpenFreeMap tile service remain external dependencies.
- The PR stack is still draft and has not been merged or deployed.

## 2. Verified baseline and scope

| Item | Current audited state |
|---|---:|
| Canonical catalogue | 629 records |
| NIAH-derived map dataset | 509 records |
| Canonical records outside NIAH subset | 120 |
| Canonical records with complete coordinate pairs | 557 |
| Canonical records without complete coordinate pairs | 72 |
| Canonical coordinate pairs marked SOURCE_DERIVED | 557 |
| Canonical coordinate pairs marked FIELD_VERIFIED | 0 |
| Registered sources | 749 |
| Visual inventory records | 629 |
| Duplicate canonical IDs | 0 |
| Dangling object-to-source references | 0 |
| Orphan parent references | 0 |

The 509 NIAH records are included in the canonical 629-record catalogue. The audit found nine shared records where the NIAH copy lacks newer canonical provenance/research fields. This is a reason to keep one canonical source of truth and generate derived datasets, not to maintain parallel manually edited copies.

The prototype validation on commit `a8858dcf4ac019aaa7c298d03016aefb98c9dba4` passed:
- 15/15 data compatibility checks;
- 10/10 canonical map browser checks;
- 557 coordinate-eligible map features and cluster/single-point layers;
- all 629 catalogue records in the discovery list;
- category filtering, search, detail/source links and unmapped navigation safeguard;
- 390px mobile layout with no horizontal overflow;
- live OpenFreeMap style, TileJSON and Dublin vector-tile request;
- a live Valhalla pedestrian route smoke test using fixed central-Dublin coordinates;
- real-style Chromium initialisation and zoom-in/zoom-out layer-retention check;
- simulated style and routing HTTP 503 fallback checks;
- archive quality preflight.

These results validate the tested prototype paths only. They do not constitute field validation, a full visual audit of every map tile/marker, or device performance certification.

## 3. Migration principles (non-negotiable)

1. **Single source of truth:** `data/objects.json` remains canonical. Derived subsets must be generated or parity-checked.
2. **No invented coordinates:** a record without a complete defensible coordinate pair remains unmapped. Do not infer a point from a name, address or parent.
3. **Provenance visible:** SOURCE_DERIVED must never be presented as FIELD_VERIFIED. Coordinate meaning (site, building, entrance, individual object) must not be overstated.
4. **Stable identity:** preserve every existing archive ID; no ID renumbering or silent record replacement.
5. **Evidence preserved:** source references, verification status, image provenance, parent relationships and photography restrictions must survive the switch.
6. **Navigation safety:** only records meeting the explicit coordinate/navigation eligibility rule may offer walking navigation. Unmapped records remain searchable and readable.
7. **Production isolation:** all migration work remains on a branch or preview until the complete release gate is passed and approval is explicit.
8. **Reversible release:** preserve the previous production data source and a tested rollback commit.

## 4. Required work before a production decision

### Gate A — Data contract and schema

- [ ] Define a versioned, client-neutral archive record contract for web and future Android clients.
- [ ] Run a formal JSON Schema 2020-12 validator against all 629 canonical records (the previous audit was a structural check, not a full validator run).
- [ ] Standardise missing coordinate pairs to explicit `null` values, without filling them.
- [ ] Define coordinate semantics and provenance fields: source CRS, method, positional meaning, uncertainty/accuracy when supported, and verification event reference.
- [ ] Confirm all 629 IDs are unique and stable; source and parent references resolve.
- [ ] Reconcile the nine canonical/NIAH record differences and make the NIAH dataset deterministically generated or parity-tested.
- [ ] Confirm the 120 non-NIAH records have correct category, verification, source, parent and publication states.
- [ ] Confirm the 72 unmapped records stay in discovery results and cannot start navigation.
- [ ] Confirm no record is accidentally promoted from research lead or partially verified status by the map UI.

**Pass condition:** zero schema errors, duplicate IDs, dangling references, invalid coordinate pairs or unexplained dataset drift. Every exception is documented and deliberately handled.

### Gate B — Map and interaction acceptance

- [ ] Run full catalogue compatibility tests against the exact release candidate commit.
- [ ] Verify 629 discovery records and 557 map-eligible source features, with the exact counts explained in the UI/test report.
- [ ] Verify every category, district, verification and photography filter against independently computed expected results.
- [ ] Verify search by ID, name, address, source terms and parent/child relationships.
- [ ] Verify detail panels preserve all relevant provenance, source links, photography restrictions and verification explanations.
- [ ] Verify cluster expansion, single-point selection, map movement, zoom levels and marker/photo-marker behaviour.
- [ ] Verify mapped records offer the correct navigation action and unmapped records do not.
- [ ] Test mobile widths including 320px, 360px, 390px and tablet/desktop layouts; check no overflow, inaccessible controls or obscured map content.
- [ ] Test keyboard navigation, focus restoration, screen-reader labels, contrast and reduced-motion preferences.
- [ ] Check that live map tile failures do not remove catalogue/search/detail access.

**Pass condition:** all acceptance checks pass on the release candidate with zero uncaught browser errors and no unexplained count differences.

### Gate C — Routing, location and external dependencies

- [ ] Validate route responses (schema, geometry, distance, duration and manoeuvres), malformed responses, empty routes and no-path responses.
- [ ] Test timeouts, rate limits, HTTP 4xx/5xx, offline state and recovery.
- [ ] Confirm the routing provider can be configured without embedding secrets in public client code.
- [ ] Review the location disclosure and document exactly which coordinates are sent to the external route provider.
- [ ] Review provider terms, rate limits, privacy, retention and attribution for OpenFreeMap and the public Valhalla instance.
- [ ] Define provider monitoring and a clear degraded mode; never silently present a straight line as a pedestrian route.
- [ ] Conduct real walking tests on a representative Dublin route set, including crossings, bridges, pedestrianised streets, parks and restricted/private access where relevant.
- [ ] Record route mismatches, unsafe suggestions and network-data gaps; resolve or explicitly exclude them.
- [ ] Test on the target Android devices and browsers with location permission granted, denied and revoked; include poor GPS and interrupted network conditions.

**Pass condition:** no unresolved safety-critical route issue; route results and limitations are understandable; privacy and provider obligations are approved. CI smoke tests alone cannot satisfy this gate.

### Gate D — Performance and resilience

- [ ] Benchmark the release candidate on the target Pixel 6 and at least one lower-powered Android device.
- [ ] Measure cold start, style load, first usable map, filter/search latency, zoom/cluster interaction, memory and battery impact.
- [ ] Repeat tests on constrained mobile data and high-latency networks.
- [ ] Establish numerical budgets before testing (for example, first interactive catalogue and map, interaction latency, memory ceiling); report raw measurements and device/browser versions.
- [ ] Test repeated zoom/pan, filter changes, detail open/close and long sessions for memory leaks or duplicate markers/listeners.
- [ ] Verify the service worker updates safely and that stale cached archive data is identifiable.
- [ ] Confirm map failure and route failure remain isolated from archive browsing.

**Pass condition:** agreed budgets are met on target devices, with repeatable measurements and no blocking regressions.

### Gate E — Release, monitoring and rollback

- [ ] Confirm all prerequisite PRs are merged in the correct order or consolidated into one reviewed release branch.
- [ ] Run all required workflows on the exact candidate commit; archive quality gate and app validation must both pass.
- [ ] Review the final diff to ensure no unintended changes to coordinates, source records, photos, SEO pages, service-worker scope or unrelated app functions.
- [ ] Create a release tag and record the exact production baseline commit.
- [ ] Keep the old NIAH map source and previous deploy commit available for immediate rollback.
- [ ] Define rollback triggers: broken map initialisation, wrong counts, missing detail/source links, unsafe navigation eligibility, critical mobile regression, unacceptable performance, privacy/provider issue or failed quality gate.
- [ ] Test rollback in a non-production preview before release.
- [ ] Deploy once, then perform a short production smoke test on desktop and mobile.
- [ ] Monitor error reports and user-reported issues; document a post-release review.

**Pass condition:** one-click/repeatable rollback path, exact commit traceability, successful pre-release checks and explicit founder approval.

## 5. Proposed release sequence

1. Finish data-contract/schema work on an isolated branch.
2. Finish field-route and target-device acceptance; keep current production unchanged.
3. Prepare one release candidate that uses canonical data while retaining the existing production map/navigation implementation.
4. Run Gates A–E against that exact candidate.
5. Obtain explicit approval to merge/deploy.
6. Deploy and run the production smoke test.
7. Only after stability, consider later routing-provider ownership, Android and offline work as separate releases.

Do not combine a catalogue migration with a routing-engine replacement, new Android app, offline map implementation or broad UI redesign. Keep each risk independently testable and reversible.

## 6. Rollback procedure (planned)

If a release trigger occurs:
1. Stop further rollout and record the production URL, time, browser/device and observed failure.
2. Revert the production map data-source change to the last known-good NIAH dataset (or revert the release commit).
3. Redeploy through the established GitHub Pages workflow.
4. Verify the production map, search, record detail, source links, GPS state and walking navigation.
5. Confirm the canonical archive files remain intact; rollback must not delete or rewrite archive evidence.
6. Record root cause, affected commit and required regression test before another attempt.

The exact rollback mechanism must be tested in preview before the first migration release.

## 7. Current decision record

| Decision | Status |
|---|---|
| Canonical catalogue is the recommended long-term source of truth | Recommended |
| Prototype supports full-catalogue map loading | Automated checks passed |
| Production map may switch now | **NO-GO** |
| Real-device and field-route validation complete | No |
| Formal full-schema validation complete | No |
| Provider privacy/terms review complete | No |
| Production rollback rehearsal complete | No |
| Merge/deploy approval granted | No |

## 8. Immediate next stage

Proceed with **Gate A** as a separate read-only/isolated task: formal schema validation, explicit coordinate-null normalisation proposal, and a generated NIAH-subset parity report. Do not edit production records or switch the production map source during that work.

---

**Safety statement:** This document is a plan only. It does not authorise production migration, merge, deployment, coordinate changes, data rewriting or provider replacement.
