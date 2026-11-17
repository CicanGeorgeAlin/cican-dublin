# CICAN Dublin — Online Photograph Discovery and Coverage Audit

**Audit date:** 17 November 2026  
**Source catalogue:** `data/visual-assets.json` on the default branch  
**Purpose:** Build a reliable visual reference for every archive record while preserving image rights, source provenance and the founder-photography workflow.

## Current measured coverage

The current visual-assets file contains 447 records, matching its declared record count.

| Measure | Count |
|---|---:|
| Archive records in visual-assets.json | 447 |
| Records with at least one online reference image | 104 |
| Records without an online reference image | 343 |
| Registered reference-image entries | 129 |
| Founder-original photographs recorded | 0 |

These are catalogue measurements from the current committed file after the Clontarf image-discovery batch. They are not a claim that every image has been visually rechecked during this audit, nor that every referenced URL is currently reachable.

## Publishing rule

1. Prefer a photograph that clearly depicts the exact archive object.
2. Prefer high-resolution, well-composed, current photographs with useful orientation or context.
3. Search authoritative heritage inventories, public bodies, institutional collections, Wikimedia Commons and Geograph.
4. Record creator/photographer, title, date where known, original source page, direct image URL, licence/terms, attribution and the relationship between the image and the object.
5. Confirm the actual reuse terms before publication. A publicly viewable image is not automatically reusable.
6. Do not copy images from ordinary search results, social media, commercial stock sites or other websites without a clear reuse permission.
7. Do not treat a street scene, nearby building or parent-site photograph as an exact-object photograph. If useful, label it `STREET_CONTEXT` and explain what it does and does not show.
8. Do not imply that an online reference photograph was taken by CICAN or verifies the object's present condition.
9. If no suitable, rights-cleared image can be found, keep the record in the founder-photography queue. The founder can later upload an original photograph with capture date and field-verification details.
10. Never invent a missing image, photographer, date, licence, attribution or image-to-object match.

## Image-source hierarchy

- **Official heritage record:** NIAH / Buildings of Ireland and relevant local-authority heritage inventories. Check their terms; NIAH website terms distinguish educational/private use from commercial reuse and require credit.
- **Institutional collections:** libraries, archives, museums and public bodies, subject to each item's rights statement.
- **Open-licence repositories:** Wikimedia Commons and Geograph. Verify the individual file page and comply with the exact licence, including attribution and share-alike requirements where applicable.
- **Other sources:** only where explicit permission or a suitable licence is documented.

## Record status distinctions

- `OBJECT_PHOTOGRAPH`: image depicts the exact catalogue object.
- `DETAIL_PHOTOGRAPH`: image depicts a specific feature or component of the object.
- `STREET_CONTEXT`: image helps identify the surrounding street or setting but is not proof of the exact object.
- Founder originals remain in `original_photo` with founder credit and capture metadata; third-party reference images remain in `reference_images`.

## Workflow for every discovery batch

1. Select records with no reference images, prioritising high visual value and places likely to be visited.
2. Search by exact name, address, NIAH registration number, historic name and local-authority inventory reference.
3. Open and inspect the original source page; do not rely only on a search-result thumbnail.
4. Verify image-to-object match, image quality, date/context and reuse rights.
5. Check the existing catalogue and source registry for duplicates.
6. Add only fully documented images and sources; otherwise record the search as unresolved and leave the founder-photo queue intact.
7. Validate JSON, image URLs, attribution fields, source references and website rendering before deployment.

## Visitor experience

Every place should have a useful visual cue where possible. The website should clearly distinguish third-party reference photography from founder-captured photography. Where no image is available, the record should remain discoverable and be visibly marked as awaiting a founder photograph rather than showing an unrelated image.

## Latest additions in the Clontarf batch

- Vernon Lodge, 41A Castle Avenue (NIAH 50030164): three official NIAH images covering the front elevation, street setting and entrance detail.
- Clontarf Stationmaster's House, 96 Howth Road (NIAH 50030283): two official NIAH images covering the street view and polychrome brick gable.
- Both NIAH image groups are subject to the NIAH website terms: educational/private use with NIAH credit; commercial use requires prior written agreement. Their records explicitly preserve that condition.

## Limitations of this audit

The coverage counts above are computed from the current `data/visual-assets.json` file. They do not establish that all 447 image URLs have been live-tested, that all licence terms have been re-reviewed, or that every image is a current-condition photograph. Those checks belong in the continuing image-discovery and validation batches.
