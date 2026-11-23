# CICAN Dublin Archive — Batch 068 NIAH research review

**Status: research only; draft review packet.**

## Scope
Five Dublin City NIAH registrations individually identified in the official-NIAH-derived missing-registration queue from workflow run [#1910](https://github.com/CicanGeorgeAlin/cican-dublin/actions/runs/44917825350):

- **50010056** — 114 Seville Place
- **50010057** — 115 Seville Place
- **50010058** — 176 North Strand Road
- **50010059** — 175 North Strand Road
- **50010061** — The Five Lamps, 5–6 North Strand Road

The queue contains 7,040 missing registrations overall. Each of these five exact registration numbers was found in the Dublin City Council portion. The queue's official CSV row supplies the separate ITM EPSG:2157 and latitude/longitude fields recorded in the accompanying JSON evidence packet.

## Individual record review

All five official NIAH pages were checked for registration number, location, rating, special-interest categories, original/historical use where supplied, date range, description and appraisal. See the official links in the JSON packet.

- **114 and 115 Seville Place (50010056–57):** neighbouring but architecturally distinct buildings. 114 is a three-storey-over-basement house described as one of a pair; 115 is a diminutive single-storey end-of-terrace house. The record for 114 notes a shared entrance platform. Preserve separate registrations and verify exact footprints before creating any platform micro-detail.
- **176 and 175 North Strand Road (50010058–59):** the two official appraisals identify a pair of small-scale early-nineteenth-century houses facing the Five Lamps. Keep two records; any shared chimneystack, platform or boundary feature requires footprint-level evidence.
- **The Five Lamps (50010061):** the NIAH title is misleading if read without the description. Registration 50010061 refers to a terraced pair of former houses at 5–6 North Strand Road, not the freestanding lamp standard. The lamp standard/fountain has its own NIAH registration, **50010060**, and is not in this missing-registration batch. Do not conflate them.

## Duplicate and overlap screening

- The workflow-generated missing-registration queue is derived by comparing the official four-authority national register with the current public NIAH collection and master catalogue. All five candidates are present in that queue.
- Exact registration-number searches across open PRs #28, #29, #30, #32, #33, #35, #36, #37 and #38 returned no matches for these five candidates.
- This does not resolve spatial overlaps, terrace membership or subsidiary architectural details. Those remain explicit review items, not assumptions.

## Coordinate provenance

The official national CSV values are preserved as **ITM EPSG:2157** and as separate **latitude/longitude** fields. The individual NIAH pages display a different coordinate pair without labelling its CRS; those values are retained separately as raw page evidence and must not be substituted for the official CSV values. None of the coordinates are imported into archive map fields or used to authorise map pins.

## Condition and access caveats

The NIAH records for 115 Seville Place and 175–176 North Strand Road contain statements that the properties were scheduled for demolition in 2011. This is historical source wording, not proof of present-day demolition or survival. Current condition, access and founder photography require separate lawful field verification. NIAH notes that most surveyed structures are privately owned and not open to the public.

## Decision and safeguards

This packet is suitable for independent research review only. No archive IDs are assigned; no catalogue, public NIAH register, source registry or visual inventory is changed; no map pins or coordinates are imported; no merge or deployment is authorised. If any candidate later passes footprint, provenance, schema, source/visual parity and technical review, conversion to archive objects can be proposed in a separate controlled change.

**Production remains untouched.**
