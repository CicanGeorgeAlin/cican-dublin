# CICAN Dublin Archive — Donabate ID Correction and Portrane Heritage Candidates Batch 008

**Research date:** 20 November 2026  
**Scope:** Correct the Donabate railway-group ID assumptions in Batch 007; verify five additional NIAH assets in Portrane/Donabate; audit the live catalogue.  
**Status:** Research-only. No production objects or map pins.

## 1. Correction to Batch 007: Donabate railway group

The Fingal County Council Donabate–Portrane Heritage Audit (Appendix 2) provides the following exact NIAH registration-number mapping:

| NIAH reference | Correct asset | Audit coordinate pair |
|---|---|---|
| 11336015 | Donabate Railway Station | 322767, 249980 |
| 11336018 | Donabate Railway Station, Station Master's House | 322768, 249960 |
| 11336014 | Donabate Railway Station, Bridge | 322756, 249938 |
| 11336016 | Donabate Cemetery | 322851, 249960 |
| 11329011 | Donabate Railway Station, Signal Box | 322748, 250022 |

The earlier exploratory queue in Batch 007 contained incorrect tentative labels for 11336014, 11336016 and 11336017. The first two are now corrected above; the audit identifies the signal box as 11329011, not 11336017. Do not use the earlier tentative labels. These are separate NIAH assets, even where Fingal's Record of Protected Structures groups the station, signal box and pedestrian bridge under RPS 511.

Source: Fingal County Council, Donabate–Portrane Heritage Audit, Appendix 2:
https://www.fingal.ie/sites/default/files/2023-03/Donabate%20Portrane%20Heritage%20Audit%20Report%20FINAL%2019.09.2022.pdf

The audit labels these values simply as “Coordinates”; this report does not infer the CRS. Do not transform or publish map pins until the coordinate reference system is confirmed from the underlying NIAH dataset.

## 2. Five additional Portrane / Donabate records

### 2.1 Round Tower (memorial folly), Saint Ita's Hospital — NIAH 11330002

Official NIAH record:
https://www.buildingsofireland.ie/buildings-search/building/11330002/saint-itas-hospital-portrane-road-portraine-demesne-donabate-dublin

- Rating: Regional.
- Special interest: Architectural.
- Original use: Folly.
- Date range: 1850–1880; record description dates it c.1865.
- NIAH coordinates: 325643, 250346.
- Recorded: 1 August 2000.
- Description: round tower with battered profile and conical stone roof; granite ashlar base and coursed limestone above.
- The NIAH attributes its design to Sophia Evans (née Parnell), in memory of her husband George.

Fingal's St Ita's Demesne history and the Portrane Demesne Architectural Conservation Area statement contextualise the round tower as a memorial landmark within the earlier designed landscape. Preserve the NIAH's use classification “Folly” and distinguish it from medieval ecclesiastical round towers.

### 2.2 Former Saint Ita's Hospital complex — NIAH 11330001

Official NIAH record:
https://www.buildingsofireland.ie/buildings-search/building/11330001/saint-itas-hospital-portraine-demesne-portrane

- Rating: Regional.
- Special interest: Architectural, Artistic, Social, Technical.
- Original and current use in NIAH: Hospital/infirmary.
- Date range: 1880–1920; description dates the complex c.1900.
- NIAH coordinates: 325290, 250175.
- Recorded: 1 August 2000.
- Description: extensive red-brick hospital complex of multiple-bay single-, two- and three-storey buildings, designed by George Coppinger Ashlin.

Fingal County Council's St Ita's Demesne page states that the asylum was built between 1896 and 1903 and that the former hospital complex and demesne are now an active HSE healthcare campus with services operating and private property restrictions. Do not encourage access to restricted areas; public interpretation should use permitted public viewpoints and official access guidance.

### 2.3 Nurses' Home, Saint Ita's Hospital — NIAH 11330003

Official NIAH record:
https://www.buildingsofireland.ie/buildings-search/building/11330003/saint-itas-hospital-portraine-demesne-portrane

- Rating: Regional.
- Special interest: Architectural.
- Original use: Nurses' home.
- Date range: 1890–1900; description dates the terraces c.1895.
- NIAH coordinates: 325271, 250679.
- Recorded: 10 September 2001.
- Description: two terraces of twelve single-storey yellow-brick houses, with gabled projecting central bays and gable-fronted end-of-terrace houses.

This is a distinct NIAH record from the main hospital complex, despite the shared Saint Ita's Hospital title and estate setting. Keep the individual nurses' accommodation as its own archive object and link it to the hospital campus as a related component.

### 2.4 Donabate Railway Station Bridge — NIAH 11336014

The Fingal Heritage Audit Appendix 2 identifies this as “Donabate Railway Station, Bridge”, registration 11336014, at the audit coordinate pair 322756, 249938. Fingal's Donabate Framework Plan lists the railway station, signal box and pedestrian bridge together under RPS 511. The audit's exact NIAH ID is the authoritative identifier for this candidate in this batch.

Do not conflate it with Packenham Bridge, Barnhill Bridge or the station building. The coordinate CRS remains unverified in this source extract.

### 2.5 Donabate Cemetery — NIAH 11336016

The Fingal Heritage Audit Appendix 2 identifies Donabate Cemetery, Beaverstown, registration 11336016, at coordinate pair 322851, 249960.

This is separate from the railway station and station master's house despite the close coordinate proximity. Do not merge it with Saint Marnock's graveyard in Portmarnock or any other cemetery record.

## 3. Additional group context and research caution

Fingal's St Ita's Hospital and Portrane Demesne Architectural Conservation Area Statement describes the surviving designed landscape elements, including the former Portrane House entrance, gate lodge and drive, memorial round tower, productive garden complex, woodland and shelter belts. It describes the original St Ita's Hospital complex as built 1896–1903 to the design of G. C. Ashlin. These are contextual relationships, not permission to invent or merge individual archive records.

The NIAH record for 11330002 explicitly calls the tower a folly. Do not describe it as a medieval round tower. The NIAH record 11330003 is the nurses' home; do not mistake it for the main hospital complex (11330001).

## 4. Catalogue collision audit

The canonical production catalogue was fetched from the GitHub Contents API and parsed: 452 objects.

All five exact references in this batch are absent:
- 11330002
- 11330001
- 11330003
- 11336014
- 11336016

No exact candidate name or alias collision was found in the tested existing object name, title, address, location and description fields.

The corrected railway-group references 11336014 and 11336016 were also absent. The signal box reference 11329011 should be added to a future candidate reconciliation batch, after a separate exact-reference check at that time.

## 5. Coordinate and access controls

The NIAH record pages give coordinate pairs for the three Saint Ita's records, but the individual pages do not spell out the CRS beside each coordinate pair. The Fingal audit gives the Donabate bridge and cemetery coordinate pairs without CRS metadata. Retain all as source-transcribed raw values, not as verified ITM or WGS84.

No local-authority field value was retrieved. No boundary overlay or WGS84 conversion was performed. No public map pin is approved.

Fingal County Council describes the St Ita's HSE campus as private property. Archive field photography must respect access restrictions and should use public viewpoints unless permission is obtained.

## 6. Next actions

1. Add Donabate signal box NIAH 11329011 to the candidate queue with the correct audit name and coordinates; verify its official NIAH record.
2. Review the other Portrane Demesne NIAH entries, including the gate lodge, former estate features and hospital campus components, while avoiding duplicate or umbrella records.
3. Obtain the official Dublin CSV using a binary-capable download route; preserve the source file, retrieval date and checksum.
4. Confirm the CRS for every coordinate source before any transformation or map pin.
5. Continue discovery into Newbridge Demesne and the wider Fingal coastline.

## 7. Sources

- Fingal County Council, Donabate–Portrane Heritage Audit, Appendix 2:
  https://www.fingal.ie/sites/default/files/2023-03/Donabate%20Portrane%20Heritage%20Audit%20Report%20FINAL%2019.09.2022.pdf
- NIAH 11330002:
  https://www.buildingsofireland.ie/buildings-search/building/11330002/saint-itas-hospital-portrane-road-portraine-demesne-donabate-dublin
- NIAH 11330001:
  https://www.buildingsofireland.ie/buildings-search/building/11330001/saint-itas-hospital-portraine-demesne-portrane
- NIAH 11330003:
  https://www.buildingsofireland.ie/buildings-search/building/11330003/saint-itas-hospital-portraine-demesne-portrane
- Fingal County Council, St Ita's Demesne:
  https://www.fingal.ie/heritage-and-conservation/heritage-and-tourism/donabate-portrane-heritage/st-itas-demesne
- Fingal County Council, St Ita's Hospital and Portrane Demesne ACA Statement of Character:
  https://www.fingal.ie/sites/default/files/2019-04/St%20Itas%20ACA%20Final%20Version%20Dec2013.pdf
- Fingal County Council, Donabate Framework Plan, Table 3-1 (RPS 511 group):
  https://www.fingal.ie/sites/default/files/2024-05/fcc-2024-donabate-fp-corrected-2024-05-29-compressed.pdf

## 8. Production change statement

Documentation-only research batch. No production objects, images, public map pins, website code or public-facing catalogue content were changed.
