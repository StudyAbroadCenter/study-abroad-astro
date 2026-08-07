# Ritsumeikan brand assets

## Communication mark

The Japanese recruitment prototype now uses the publicly rendered preview of the official **horizontal R / RITSUMEIKAN communication mark** in the header and footer.

Current preview source:

`https://www.ritsumei.ac.jp/image.jsp?id=228381`

This is intentionally treated as a temporary preview dependency rather than a final production asset.

## Brand rule

Ritsumeikan's published history of the 2007 communication mark records the usage rule that the **R mark and the RITSUMEIKAN logotype must be used together and must not be separated**. The site therefore no longer creates or displays an independent substitute `R` mark.

The site must not:

- redraw the official mark
- recolour the official mark with CSS filters
- crop the mark so that either the R or the RITSUMEIKAN logotype disappears
- distort the aspect ratio
- treat a text approximation as the production logo

## Before public launch

Ask the appropriate Ritsumeikan communications / PR office for an internally approved web asset, ideally SVG or a transparent PNG, plus the current CI/VI usage requirements.

When that asset is supplied:

1. Add the approved file under `public/brand/`.
2. Replace the two `officialLogo` constants in `StudentHeader.astro` and `StudentFooter.astro` with the local asset path.
3. Keep the current fixed logo containers so the header/footer do not shift while the asset loads.
4. Confirm clear space, minimum display size, background usage, and the exact official enji value.
5. Remove the external preconnect to `www.ritsumei.ac.jp` if it is no longer needed.

## Design intent

The communication mark itself remains untouched. Visual integration comes from the surrounding UI:

- a translucent white header surface over the hero image
- a slightly more opaque header after scroll
- restrained enji interaction lines
- a white brand plate in the dark footer
- separate `SHORT-TERM PROGRAMS` subsite labelling outside the official mark

This allows the site to feel unmistakably Ritsumeikan without modifying the institutional identity asset.
