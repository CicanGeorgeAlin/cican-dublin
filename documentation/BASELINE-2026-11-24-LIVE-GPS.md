# CICAN Dublin — Live GPS Baseline

**Baseline date:** 2026-11-24  
**Status:** Accepted as the working live-GPS baseline  
**Production map:** https://cicangeorgealin.github.io/cican-dublin/preview/app.html

## Accepted behaviour

- Browser Geolocation API with `watchPosition()`, high-accuracy request and fresh fixes.
- Live blue position marker and map follow.
- The displayed marker uses accepted GPS fixes with stationary-position gating and bounded coordinate smoothing.
- Speculative marker dead-reckoning between GPS fixes is disabled; the displayed marker is not intentionally projected ahead using reported speed or heading.
- GPS session exports retain raw accepted coordinates and reported accuracy separately from the filtered display position. Raw device speed/heading are separate from processed values, with their derivation source, movement-gate result and smoothing parameters recorded.
- Tracking can be stopped; the watch and animation frame are cancelled.
- No location history is uploaded or stored by this feature.
- Live GPS does not overwrite archive coordinates or mark heritage records as field-verified.

## Verification evidence

- The current deployed implementation includes the PR #82 stability changes merged as `78ae8d71cf0896fd04bf76d925bd59b2eb914215`.
- Main-branch `Validate CICAN DUBLIN`, `Archive quality gate` and `pages build and deployment` workflows all completed successfully for that commit.
- Automated checks establish software behaviour, not ground-truth GPS accuracy. The new stationary filter and compass camera behaviour still require repeatable outdoor field tests on the target phone.

- Founder supplied a real-device screenshot showing live GPS active, coordinates **53.362256, -6.272746**, and reported horizontal accuracy **±3 m**.
- Automated GPS integration tests and repository quality workflow passed.
- GitHub Pages deployment workflow completed successfully.
- Physical screenshot confirms the interface and a working location fix on the device; it does not establish that all outdoor routes, reception conditions or phone models have been tested.

## Source revision

GPS implementation and test changes were present in the following release commits:
- `6fe02066792e3c42bfcfaee9743dc151ccef9d36` — fresh fixes and smooth marker motion tests
- `8d9e213528ee3e6eed124b8496f7bc8922925562` — GPS behaviour and limitations documented
- `79aaaa57ab5bf2b1745bd415c443c6c572d2a908` — animation-frame marker movement test
- `cda29db9db6162bd2bb8305d11de4355d6dbde47` — app service-worker cache refresh
- `e91091c0d065a395749bdec0df416e180b0ed8e5` — root service-worker cache refresh

## Change-control rule

Keep this implementation unchanged unless a reproducible defect, security issue, accessibility issue or meaningful improvement is demonstrated and tested. Any future change must preserve the distinction between measured GPS fixes and interpolated visual movement, and must pass automated checks plus a real-device test.

This is a browser-based GPS baseline, not a claim of identical performance to native Google Maps or a guarantee of fixed GNSS update frequency.
