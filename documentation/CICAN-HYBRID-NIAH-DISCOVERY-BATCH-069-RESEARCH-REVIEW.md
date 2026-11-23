# CICAN Dublin Archive — Batch 069 NIAH research review

**Status: research only; draft review packet.**

## Scope

Five Dublin City NIAH registrations individually checked against the official-NIAH-derived missing-registration queue from workflow run [#1910](https://github.com/CicanGeorgeAlin/cican-dublin/actions/runs/44917825350):

- **50010077** — 22 Portland Row, Empress Place
- **50010078** — 21 Portland Row
- **50010079** — 20 Portland Row
- **50010080** — 19 Portland Row
- **50010081** — 18 Portland Row

All five exact registration numbers are present in the Dublin City Council section of the queue. Official national CSV ITM EPSG:2157 and separate latitude/longitude values are recorded in the JSON evidence packet.

## Individual record review

The five official NIAH pages were checked for registration, address, rating, categories, date range, description and appraisal. The full source URLs and coordinate fields are preserved in the JSON packet.

- **22 Portland Row (50010077):** end-of-terrace house with distinctive channelled rendered ground-floor treatment and geometric fanlight.
- **21 Portland Row (50010078):** terraced house with a chimney stack described as shared to the north.
- **20 Portland Row (50010079):** terraced house with an unusually elaborate entrance composition, including pilasters, acanthus-scroll console brackets and geometric leaded fanlight.
- **19 Portland Row (50010080):** terraced house with rendered corbelled chimney stack described as shared to the south.
- **18 Portland Row (50010081):** end-of-terrace house with chimney stack described as shared to the north.

All five records describe members of a terrace of five. This coherent grouping is useful for streetscape analysis but does not justify merging five official registrations into one archive object. Shared chimney stacks and architectural details remain relationship notes until footprint-level review.

## Duplicate and overlap screening

- All five registrations occur in the official-NIAH-derived missing-registration queue generated against the repository's current master catalogue and public NIAH collection at the audit snapshot.
- Exact registration-number searches across open PRs #28, #29, #30, #32, #33, #35, #36, #37, #38 and #39 returned no matches for 50010077–50010081.
- This is a registration-number screen, not a substitute for later spatial/footprint review or a fresh full-catalogue semantic duplicate audit.

## Coordinate provenance

The official national CSV values are preserved as **ITM EPSG:2157** and as separate **latitude/longitude** fields. The individual NIAH pages display coordinate pairs without labelling their CRS; those are retained separately as raw page evidence and must not be substituted for the official CSV values. No coordinates are imported into archive map fields or used to authorise map pins.

## Decision and safeguards

This packet is suitable for independent research review only. No archive IDs are assigned; no catalogue, public NIAH register, source registry or visual inventory is changed; no map pins or coordinates are imported; no merge or deployment is authorised. Footprint review, current condition/access verification, schema validation, source/visual parity and independent technical review remain required.

**Production remains untouched.**
