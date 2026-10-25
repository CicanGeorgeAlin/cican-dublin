# CICAN DUBLIN ARCHIVE — Failure Modes, Redundancy & Recovery

Purpose: keep the public archive recoverable, accurate and welcoming as the catalogue grows.
Operating rule: no unattended bulk publishing until the quality gate passes and a human review approves the batch.

## 1. Safety architecture

- Git is the version history; never rewrite or force-push the production branch as a routine recovery method.
- Work on a dedicated branch. Review a pull request before merging production changes.
- GitHub Actions must run the archive preflight before deployment.
- A failed preflight blocks deployment. A failed deployment must not be described as live.
- Keep catalogue IDs stable. Never recycle a retired ID.
- Treat source-derived coordinates, field-verified coordinates, documentary verification and photography as separate facts.
- Keep original founder photographs, published derivatives and third-party reference images distinct.
- Keep third-party image attribution and licence data with the image record.
- Never put credentials or upload tokens in public HTML, JavaScript or repository files.

## 2. Failure-mode register

| Failure | Detection | Required response |
|---|---|---|
| JSON is malformed | Preflight JSON parse | Block deployment; repair on branch |
| Duplicate record/source ID | Uniqueness test | Block; reconcile without renumbering existing records |
| Record references missing source/parent | Referential-integrity test | Block; restore source or correct reference |
| Coordinate invalid or incomplete | Range and pair checks | Block; preserve original grid reference and provenance |
| Walking link loses walking mode | URL query test | Block; regenerate from documented coordinates |
| Visual entry missing or duplicated | Inventory-to-catalogue test | Block; restore one matching entry |
| Image lacks attribution/licence | Image metadata test | Block; do not publish until rights data is complete |
| External image host unavailable | Browser/network smoke test; image error fallback | Show an honest fallback; retain source link; prefer controlled, rights-compliant local copies where permitted |
| Homepage/archive JavaScript syntax error | Node syntax parse in preflight | Block deployment |
| Homepage data endpoint fails | Runtime error state | Show clear recovery message and link to full archive; never silently show false totals |
| New deployment breaks navigation | Link and manual smoke tests | Stop batch; revert to last known-good commit |
| Founder device lost | Local-only notebook warning | Local IndexedDB is not a backup; export copies to a separate secure location |
| Upload credential exposed | Secret incident procedure | Revoke immediately, rotate credentials, audit repository history and access |
| Copyright or privacy concern | Rights review / takedown report | Unpublish the affected asset promptly while preserving internal evidence of the decision |

## 3. Simulated return-flight checklist

Run these scenarios on a staging branch before enabling unattended batches:

1. Missing JSON: temporarily rename a data file in the test branch. Expected: preflight fails and no deployment occurs.
2. Duplicate ID: duplicate one record ID in a disposable fixture. Expected: preflight fails.
3. Broken source reference: change a record to reference an unknown source. Expected: preflight fails.
4. Bad coordinates: set latitude outside the legal range or remove longitude. Expected: preflight fails.
5. Image without rights data: remove attribution or licence from a test image. Expected: preflight fails.
6. External image outage: block the image host in browser developer tools. Expected: a designed placeholder appears; text, source link and walking action remain usable.
7. Broken JavaScript: introduce a syntax error on the test branch. Expected: preflight fails before deployment.
8. Rollback: revert a test-only homepage change. Expected: the previous known-good version can be redeployed from Git history.

Do not inject these faults into main or the live website. Use a disposable branch or fixture.

## 4. Deployment gates

A production batch is eligible only when all are true:

- JSON parses and catalogue checks pass.
- Every object has a unique stable ID and valid source references.
- Every visual record maps to exactly one object.
- Every published third-party image has HTTPS image/source links, attribution and licence.
- Founder originals are never confused with third-party references or generated artwork.
- Inline page scripts pass syntax checks.
- The quality workflow passes on the pull request.
- The Pages deployment succeeds after merge.
- A human smoke test checks homepage, archive search, one detail record, source link, walking link and mobile layout.

## 5. Rollback procedure

1. Stop further publishing and do not merge the next batch.
2. Identify the last known-good production commit from GitHub Actions.
3. Revert the faulty commit with a new revert commit or submit a corrective pull request.
4. Wait for the deployment workflow to complete successfully.
5. Test the homepage and archive on a real device.
6. Re-run catalogue integrity checks before resuming.

Never delete or overwrite the original evidence to make a failed batch appear clean.

## 6. What is not yet redundant

- GitHub is the primary code/data host; an independent scheduled backup/export is not yet configured.
- The founder's My Dublin notebook uses browser-local IndexedDB. Clearing browser storage, changing devices or losing the device can lose those entries. It needs an explicit export/import backup feature before it is trusted for valuable originals.
- Permanent founder-photo publishing through authenticated server-side storage is documented but not deployed.
- Third-party image hosts are outside the project's control. External image availability must not be treated as guaranteed.
- A successful GitHub Pages workflow proves deployment completion, not that every browser/device rendered every interaction correctly.

## 7. Autopilot release rule

Autopilot may prepare research and proposed changes. It must not silently publish uncertain claims, unlicensed imagery, unverified field visits, or bulk changes that fail the checks. Start with small batches, a reviewed pull request, automatic preflight, successful deployment and a real-device smoke test. Increase batch size only after repeated clean cycles.
