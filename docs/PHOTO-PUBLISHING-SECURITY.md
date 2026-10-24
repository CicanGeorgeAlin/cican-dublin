# Founder Photo Publishing — Secure Implementation Plan

**Status:** Design documented; live publishing is not enabled.

## Why the current photo control is local-only

The archive is hosted as a static GitHub Pages site. A browser-only page cannot safely write image files or catalogue changes into the GitHub repository without a server-side publishing component. A GitHub token must never be placed in public HTML, JavaScript, or a downloadable configuration file.

## Recommended architecture

1. Keep the public archive on GitHub Pages.
2. Add a small server-side upload service (Cloudflare Worker) and private object storage (Cloudflare R2).
3. Restrict the upload service to the archive founder using Cloudflare Access authentication. Do not expose an anonymous public write endpoint.
4. Validate file size, MIME type, actual image decoding, and the target archive object ID on the server.
5. Strip EXIF metadata from public derivatives, especially embedded GPS and device details. Preserve the original privately only if needed for the archive's evidence workflow.
6. Store files under stable object-based paths, for example `photos/DUB-MON-0001/2026-10-24-001.webp`.
7. Generate a small web derivative and a full-resolution archival copy. Never overwrite an earlier original.
8. Record photographer credit, capture date (if supplied), object ID, caption, licence/permission status, and derivative path in a versioned photo manifest.
9. Publish manifest changes through a server-side GitHub App with narrowly scoped repository Contents permission, or through a reviewed pull request. Keep all credentials in server-side secrets.
10. Display only successfully published manifest entries in the public archive.

## Required safeguards

- Founder authentication before upload.
- No GitHub credentials in the browser.
- File-size and image-dimension limits.
- Image content validation; do not trust the filename or browser MIME type alone.
- EXIF/GPS removal from public images.
- No automatic publication of unreviewed uploads.
- Preserve original files and a clear edit/derivative history.
- Credit line: **CICAN GEORGE ALIN**.
- Respect site photography restrictions, privacy, copyright, and permissions.

## What is needed to activate it

A Cloudflare account with Workers and R2 enabled, a founder-only Access identity, and a GitHub App (or equivalent narrowly scoped server-side credential). Once those are available, the service can be deployed and connected to the existing photo picker.

Until then, the archive correctly labels photo selection as a local preview and does not claim that it has been saved or published.
