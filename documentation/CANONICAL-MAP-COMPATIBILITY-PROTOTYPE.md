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
