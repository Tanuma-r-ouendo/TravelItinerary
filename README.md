# Shiori Maker

Static single page app for creating and exporting one-day itinerary booklets.

## Run Locally

Open `index.html` directly in a browser.

No server, build step, login, or backend is required. User data is stored in browser `localStorage`.

## Features

- Direct editing on the booklet preview
- Schedule item reorder by drag and drop
- Optional item fields: place, transport, memo, URL
- Header image replacement from a local image file
- Local autosave
- PNG, JPEG, PDF print, and ICS export
- Static hosting compatible

## Deploy To Netlify

Use this folder as the site root.

Netlify settings:

- Build command: leave empty
- Publish directory: `.`

The included `netlify.toml` already defines this.

## Files

- `index.html`: Page structure
- `styles.css`: Layout and visual design
- `app.js`: Editing, saving, export, and local image handling
- `figma-assets-data.js`: Figma asset Data URLs used for local-safe Canvas export
- `assets/figma/`: Figma-derived assets used by the current design

## Notes

PDF export uses the browser print dialog. Choose "Save as PDF" in the print screen.
