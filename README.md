# Portfolio v2

Static portfolio site (no build step).  
HTML is in `index.html`, styles in `css/`, and scripts in `js/`.

## Project structure

- `index.html` — page markup (links CSS/JS)
- `css/main.css` — all site styles (moved out of inline `<style>`)
- `js/main.js` — all site behavior (moved out of inline `<script>`)
- `static/` — icons and other static assets
- `files/` — downloadable files (e.g. resume PDF)

## Run locally

Any static server works. Examples:

```bash
npx serve .
```

Or with Python:

```bash
python -m http.server 5173
```

Then open the shown local URL in your browser.

