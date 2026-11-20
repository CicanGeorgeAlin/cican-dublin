# NIAH-only Stage 1 public catalogue filter

**Date:** 20 November 2026  
**Repository:** CICAN DUBLIN  
**Scope:** Public map, public archive, crawlable place pages and sitemap.

## Result

The 460-record master catalogue was reviewed using the `national_inventory_reference` field.

- Master catalogue records reviewed: **460**.
- Records with a field consisting of exactly one eight-digit numeric NIAH registration: **406**.
- Distinct registration numbers among those rows: **340**.
- Canonical public Stage 1 records: **340**.
- Repeated catalogue rows consolidated because they shared an existing registration number: **66**.
- Master rows excluded because they did not contain an exact eight-digit NIAH registration in the field: **54**.

## Selection rule

A public Stage 1 record must have `national_inventory_reference` consisting of exactly eight digits. A prose association such as “Associated with NIAH 50010011” is not treated as an independent NIAH registration for that micro-feature. Other register references (RPS, RMP, DCIHR and similar) do not qualify as NIAH registrations.

One canonical public record is retained per unique NIAH number. When several master rows share one number, the canonical building or primary-object record is preferred over a separately catalogued street detail or inscription. If there is no such preferred record, the first eligible record in the master catalogue is retained. This prevents one NIAH registration from appearing as multiple independent Stage 1 registrations.

## Preservation

No records were deleted from `data/objects.json`. The full master catalogue, sources, visual inventory, research notes and existing IDs remain preserved. The filtered 340-record collection is stored separately in `data/niah-registered-objects.json`.

The production map, public archive and generated individual SEO pages now read the filtered collection. The sitemap is regenerated from that same collection during GitHub Pages deployment. The service-worker cache version was incremented so clients can receive the new dataset.

## Important qualification

This is a catalogue-field eligibility and deduplication pass. It does **not** claim that all 340 references have already been independently rechecked against a freshly downloaded official NIAH extract, nor does it certify that 340 is the final total for all four Dublin local-authority areas. That independent official-register reconciliation remains a separate next task. The user's current target of 3,395 is not substituted or treated as verified by this filtering operation.

## Verification

The deployment preflight checks that the public Stage 1 catalogue contains exactly 340 records, that every published reference is exactly eight digits, that the references are unique, and that generated place pages and sitemap entries are based on the filtered catalogue.
