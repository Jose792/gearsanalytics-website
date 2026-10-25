# Gears Analytics website

This repository contains the static Gears Analytics website.

## Site files

- `index.html` is the page served by GitHub Pages from the root of `main`.
- `Gearsanalytics-Space-No-Cards.html` is the selected source page.
- `gears-mark.svg` is the brand mark shown in the footer.
- `build.js` generates the root page and Vercel output in `dist/`.
- `site-enhancements.js` keeps the public page read-only, consolidates the requested service pairs, adds IP management and intelligence services, keeps the team photo gallery collapsed until requested, matches names only when the filenames identify them, hides contact text behind accessible icon links, and adds the footer logo.
- `team/` contains the team photos used in the public page gallery.
- `vercel.json` configures Vercel to publish `dist/`.

## Build

Run `node build.js` to refresh the GitHub Pages root page and Vercel output.
