# Gears Analytics website

This repository contains the static Gears Analytics website.

## Site files

- `index.html` is the page served by GitHub Pages from the root of `main`.
- `Gearsanalytics-Space-No-Cards.html` is the selected source page.
- `gears-mark.svg` is the brand mark shown in the footer.
- `build.js` generates the root page and Vercel output in `dist/`.
- `site-enhancements.js` keeps the public page read-only, consolidates the requested services, adds IP management and intelligence services, provides a quote-only pricing section linked from the navigation and contacts, styles the mobile menu in blue, hides the team names and photos behind one accessible disclosure, adds show-more controls for the story and works lists, describes common expert research challenges, links each work to a WhatsApp request, simplifies the Core Values list, hides contact text behind accessible icon links, and adds the footer logo.
- `build.js` removes the design-note copy and visitor editing controls from the generated page.
- `team/` contains the team photos used in the public page gallery.
- `vercel.json` configures Vercel to publish `dist/`.

## Build

Run `node build.js` to refresh the GitHub Pages root page and Vercel output.
