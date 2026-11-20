# CICAN Dublin — Batch 050: Dublin NIAH Candidate Discovery and Publication Gate

**Date:** 20 November 2026  
**Method:** Hybrid NIAH discovery protocol; Dublin City priority.  
**Outcome:** Two individual official NIAH records re-opened and researched; one additional candidate identified from official search results and an independent planning document. No production records were added because the complete master-object catalogue could not be read back for a definitive duplicate audit.

## 1. Official individual records reviewed

### Candidate A — Grand Canal, Fifth Lock, Inchicore
- NIAH REG_NO: 50080439
- Official individual record: https://www.buildingsofireland.ie/buildings-search/building/50080439/grand-canal-inchicore-dublin-8-12-dublin
- Rating: Regional
- Special interest: Architectural, Social, Technical
- Use: Lock
- Date range: 1770–1780; description dates construction to c.1775
- Description: canal lock with two pairs of mitre gates, timber footboards and balance beams, a cut-limestone lock chamber, later concrete, mooring bollards and cast-iron winding mechanisms.
- Appraisal: identifies the asset as the Fifth Lock, part of the Inchicore lock group; describes its place in the Grand Canal's development and its technical/engineering interest.
- The official page was opened and its REG_NO, rating, categories, dates, description and appraisal were captured.
- Independent corroboration: Bluebell Waterways Architectural Heritage Impact Assessment (May 2025) identifies the Fifth Lock by REG_NO 50080439 and discusses its heritage context: https://engage.dublincity.ie/uploads/e8206ced-19a9-482b-94a9-3a4bb90782e3/phase_file/file/71b0c522-0bfa-42ad-b22d-13806c7523e4/Architectural_Heritage_Impact_Assessment.pdf
- The public NIAH page displays coordinates 310774, 232700 without a CRS label in the retrieved page. Do not publish a map pin or transform this pair absent explicit CRS evidence.

### Candidate B — 11 Parnell Square East, Dublin 1
- NIAH REG_NO: 50011011
- Official individual record: https://www.buildingsofireland.ie/buildings-search/building/50011011/11-parnell-square-east-dublin-1-dublin
- Rating: National
- Special interest: Architectural, Artistic, Historical, Social, Technical
- Original use: House; current use: Office
- Date range: 1750–1760; description says built c.1755
- Date recorded: 04/12/2011
- The official page describes a five-bay, four-storey Georgian house over basement, with central doorcase, full-height rear bow, slate roof, red-brick walls, granite details, decorative railings and significant interior alterations for Dublin County Council Chambers around 1901. Its appraisal discusses Parnell Square's development, the house's history and retained architectural details.
- Independent corroboration: Swords to City Centre Core Bus Corridor EIAR Appendix A16 identifies NIAH 50011011 and DCC RPS 6376, with location, c.1755 date and National NIAH rating: https://www.pleanala.ie/publicaccess/EIAR-NIS/317121/1.%20S51%20Application/EIAR%20%28incl%20NTS%20in%20Irish%29/Volume%204%20-%20Appendices/Vol%204%20Part%203/Ch.%2016%20Architectural%20Heritage/A16.1-A16.3.pdf
- The official page displays coordinates 315723, 235150 without a CRS label in the retrieved page. No map pin or transformed coordinates are proposed.

### Candidate C — Sarsfield Road / Inchicore Works Estate post box
- NIAH REG_NO: 50080442
- Official NIAH search result identifies the registration as a rectangular cast-iron wall post box set into the limestone boundary wall of Inchicore Works Estate; door replaced c.1930, royal crown and Saorstát Éireann emblem, maker's mark W.T. Allen & Co London.
- Official search result: https://www.buildingsofireland.ie/buildings-search/?county=&date_from=&date_to=&group=&location_type=building&query=Inchicore&search_page=2&type=
- Independent corroboration: Liffey Valley to City Centre Core Bus Corridor EIAR Appendix A16.2, page 195, identifies NIAH 50080442, describes the wall-mounted post box, records c.1905/c.1930, Regional rating and Artistic/Social/Technical interests: https://www.pleanala.ie/publicaccess/EIAR-NIS/314056/EIAR%20%28incl%20NTS%20in%20Irish%29/Volume%204%20-%20Appendices/Part%202%20of%202/Ch.%2016%20Architectural%20Heritage/EIAR%20Appendix%20A16.1-A16.3%20Architectural%20Heritage.pdf
- The individual official NIAH record page could not be retrieved in this session. Candidate remains HOLD; do not create a public core page until the individual record is opened and core fields captured.

## 2. Duplicate and publication gate

- Exact REG_NO searches in the source registry and visual inventory returned zero occurrences for all three candidates.
- GitHub code search also returned no matching indexed snippets. This is not a complete catalogue duplicate check.
- The canonical data/objects.json and data/niah-registered-objects.json content endpoints returned empty bodies through the GitHub text-file connector in this session. Consequently, a complete duplicate/alias/relationship audit against all master objects and registered objects could not be completed.
- No new CICAN archive IDs, source records, visual records, archive pages, sitemap URLs, or map pins were created.
- Candidates A and B are individually page-verified at the NIAH source level but remain DISCOVERY_QUEUE pending complete catalogue duplicate review and exact national-row enrichment.
- Candidate C remains DISCOVERY_QUEUE / HOLD pending direct official individual-page review and the full duplicate check.
- No NATIONAL_DATA_VERIFIED or FIELD_VERIFIED claim is made.

## 3. Deployment and website check

- GitHub repository read-back succeeded for the three Batch 049 archive pages and sitemap.
- Direct live GitHub Pages retrieval for all three pages returned inaccessible/internal errors through the available retrieval layer. This does not prove the site is down; it means a live smoke test could not be confirmed.
- No website redesign or production changes were made.

## 4. Next actions

1. Recover complete canonical master-object and registered-object JSON through a raw Git blob or other reliable complete-content path.
2. Run exact REG_NO, normalized title/address, alias and relationship checks for 50080439 and 50011011; then open the individual NIAH page for 50080442.
3. Continue selecting 3–5 Dublin City candidates per batch; publish only those passing the full duplicate and core-page gates.
4. Recheck GitHub Pages deployment and live page availability independently; do not equate retrieval-tool failure with deployment failure.
5. Continue national CSV/FeatureServer row matching and retrospective audit separately.

**Batch 050 result:** two strong individual NIAH records researched and one registered post-box candidate corroborated; zero imports, because complete master-catalogue duplicate validation was not available. This is a deliberate quality hold, not a loss of discovery progress.
