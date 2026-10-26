# CICAN DUBLIN — Atlas Application

This application source is served from `/preview/` by the CICAN DUBLIN GitHub Pages site. The production homepage opens the map-first experience. The source of the prototype remains the `app/map-first-prototype` branch.

The production entry point launches `app.html` with the map-first Dublin discovery experience. The map application reads its catalogue, sources and visual inventory directly from the root `data/` directory so the map and research catalogue always use the same source of truth.


## Visual record

Place founder-captured originals under `photos/` and register them in the matching archive record (`original_photo_paths`) or visual inventory entry (`original_photo` / `gallery`). Only repository-local paths beginning with `photos/` are displayed. No stock, borrowed, or generated substitute photographs are used. Until real photographs are registered, each record displays an honest field-photography-pending panel with its capture brief.
