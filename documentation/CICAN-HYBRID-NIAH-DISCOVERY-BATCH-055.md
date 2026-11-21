# CICAN Dublin — Hybrid NIAH Discovery Batch 055

**Research date:** 21 November 2026  
**Scope:** Five individually consulted official Dublin City NIAH records  
**Status:** Source-verified core records; not field-verified

## Records added

| Archive ID | NIAH registration | Official subject | District |
|---|---:|---|---|
| DUB-BLD-0301 | 50010864 | 10 Gardiner Place | Dublin 1 |
| DUB-BLD-0302 | 50010963 | 21 Denmark Street Great / North Great George's Street | Dublin 1 |
| DUB-BLD-0303 | 50010915 | Dublin City Gallery / Charlemont House | Dublin 1 |
| DUB-BLD-0304 | 50070329 | Saint Paul's Christian Brothers School | Dublin 7 |
| DUB-BLD-0305 | 50080523 | Mendicity Institution gate screen, 9 Usher's Island | Dublin 8 |

All five official individual NIAH records were consulted. Their exact registration numbers, titles, ratings, special-interest categories, original/current uses, date ranges, date-recorded fields, and relevant description/appraisal details were captured in the source registry. The description and appraisal text in the archive is a concise faithful summary, not a claim of field inspection.

## Heritage details worth photographing

- **10 Gardiner Place:** Ionic doorcase, fanlight, granite entrance details, basement railings, cast-iron posts and urn finials; carriage arch context to Nerney's Court.
- **21 Denmark Street Great:** Georgian corner treatment, pedimented Doric doorcase, sash windows, granite steps and basement ironwork.
- **Charlemont House / Dublin City Gallery:** Ionic portico, façade lettering, quadrant wings, obelisks, lanterns and gallery architecture. Interior photography is subject to current visitor rules.
- **Saint Paul's Christian Brothers School:** Terracotta name and date plaques, yellow-brick arches, granite sills and late-Victorian school façade. School grounds are not assumed accessible.
- **Mendicity Institution gate screen:** Carved granite piers, cast-iron gates and railings, limestone boundary walls and pedimented pedestrian entrances. HSE grounds are treated as restricted.

## Duplicate and relationship audit

The complete canonical master catalogue (595 objects), public NIAH register (475 records), source registry (713 sources) and visual inventory (595 records) were parsed before import. The five candidates were checked against exact NIAH registration number, archive ID, source ID, normalized name and exact address. No exact duplicate was found. Saint Paul's shares the street-address string Brunswick Street North with DUB-BLD-0292 (Carmichael House gate lodges), but the NIAH registration, official title and physical subject are distinct; this is a same-street overlap, not a duplicate.

## Coordinate, access and image controls

- All five records have null latitude/longitude, null map URL and `coordinate_status: NOT_SET`.
- The coordinate pairs displayed on the individual NIAH pages are retained as source-specific reference text only. The pages do not label the coordinate reference system, so no transformation or map pin is asserted.
- No NIAH photographs were reused. Founder photography and A4 line art remain outstanding.
- Residential properties are public-viewpoint-only. School and HSE grounds are not assumed accessible. Gallery interior photography is subject to current visitor rules.
- The NIAH record's historic description does not establish present-day condition or field survival.

## Post-batch catalogue totals

- Master objects: **600**
- Public NIAH records: **480**
- Official and other source records: **718**
- Visual records: **600**
- New map pins: **0**
- New records awaiting founder photography: **5**

## Next actions

1. Run the archive quality gate and official national CSV exact REG_NO audit; verify 480/480 public registrations.
2. Confirm the Pages deployment and generated place pages/sitemap.
3. Continue with five more individually consulted Dublin City NIAH records, while treating national-field/CRS reconciliation and founder photography as separate workstreams.
4. Keep expanding from the NIAH baseline to the smaller physical details described in parent appraisals; create separate micro-detail records only where the individual feature can be uniquely identified and responsibly located.


## Official national CSV, quality and deployment confirmation — 21 November 2026

The first quality run correctly caught a stale top-level `record_count` in `data/visual-assets.json` (595 while the record array and master catalogue contained 600). The count and last-updated date were reconciled. The final quality gate passed: official national CSV source rows **48,327**; exact public REG_NO matches **480/480**; four-authority Dublin denominator **7,535**; **7,055** remain to review; official duplicate references **0**; unassigned authority rows **0**. The archive validator passed. SEO generation produced **480 crawlable NIAH place pages** and a sitemap with **483 URLs**. The coverage audit completed and its review-queue artifact uploaded. The explicit Pages deployment and GitHub Pages build/deployment both succeeded. Workflow runs: [quality 44861781038](https://github.com/CicanGeorgeAlin/cican-dublin/actions/runs/44861781038), [CICAN Pages deploy 44861780971](https://github.com/CicanGeorgeAlin/cican-dublin/actions/runs/44861780971), [Pages build/deployment 44861780195](https://github.com/CicanGeorgeAlin/cican-dublin/actions/runs/44861780195). This confirms automated validation and deployment, not a manual visual/device/GPS smoke test or field verification.
