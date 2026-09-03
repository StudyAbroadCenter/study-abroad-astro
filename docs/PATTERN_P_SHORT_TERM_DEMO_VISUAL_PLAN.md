# Pattern P Short-Term Study Demo — Visual Measurement & Implementation Blueprint

Status: implementation branch `pattern-p-short-term-demo`
Authoritative reference: user-approved Pattern P short-term study mockup generated in ChatGPT on 2026-09-04.
Target: high-fidelity implementation demo for visual review; not production publication.

## Visual Measurement
Reference: Pattern P short-term study mockup
Reference viewport: portrait full-page mockup, approximately 1024 px wide source image
Hero/section height: implementation targets a 610 px desktop hero while preserving the mockup's near 50/50 image/red split and dominant red panel.
Headline x/y/width: right hero panel, upper-middle alignment, approximately 70% of panel width; two-line `Short-Term / Study in Kyoto` composition.
Primary image x/y/w/h: left half of hero, full-height crop; image remains edge-to-edge and dominant.
Secondary images: programme cards use shallow landscape crops; editorial mosaic mixes tall, medium and wide crops; student stories use image+quote modules; Life in Kyoto uses four image tiles.
Overlap/z-order: hero red panel contains subtle oversized outlined Japanese character motif behind semantic content; photo-overlay cards place text gradients above imagery.
Whitespace: large white gutters between editorial groups, deliberately tighter gaps inside mosaics.
Navigation/CTA: restrained white header; two hero CTAs; red final CTA band.
Typography/line breaks: bold neutral sans-serif, short headings, controlled line breaks matching the approved mockup hierarchy.
Crop/focal point: assertive `object-fit: cover` crops are used to preserve geometry.
Native image dimensions checked: repository image files are multi-megapixel originals by file metadata; production image-role suitability still requires final visual inspection.

## Implementation Blueprint
Surface/pattern: Pattern P — Modular Editorial Brand Grid / Story Mosaic
Authoritative reference: approved short-term study mockup

| Region | Visual requirement | Rendering strategy | Responsive/locale strategy | Risk |
|---|---|---|---|---|
| Header | quiet, white, low-height navigation | CSS Grid / semantic nav | collapse primary nav on tablet/mobile | low |
| Hero | split photo/red art-directed composition | CSS Grid desktop; stacked art direction mobile | mobile reorders to image then red content | medium |
| Programmes | side label + four compact cards | CSS Grid; horizontal scroll mobile | two-column tablet, scroll rail mobile | low |
| Why Ritsumeikan | signature unequal mosaic | explicit CSS Grid spans | dedicated tablet/mobile compositions | high |
| Student Stories | editorial quote cards | 3-column grid -> single column | preserve image/text split | low |
| Life in Kyoto | four photographic tiles | image overlay tiles | 2-column tablet, 1-column small mobile | low |
| News/Deadlines | editorial tiles, final contrasting tile | 4-column grid | 2-column tablet, 1-column mobile | low |
| Final CTA | strong deep-red horizontal band | flex row | stacked mobile | low |
| Footer | restrained institutional footer | multi-column grid | collapse progressively | low |

Desktop: preserve split hero, side-label editorial sections and unequal mosaic geometry.
Tablet: retain editorial asymmetry with reduced column count; avoid converting all modules to equal cards.
Mobile: separately art-directed stacked hero and mosaic; programme cards become a controlled horizontal rail.
Locale differences: English demo only. Future Japanese version may alter measure, line breaks and tile heights without changing facts.
Typography: neutral bold sans-serif; brand personality comes primarily from composition, photography, red field and editorial scale.
Images: reuse existing repository imagery for the implementation test; production should replace any context-mismatched image after photo-content review.
Motion: restrained hover image scale only; no decorative animation required.
Accessibility/performance evidence: semantic sections/nav/links, alt text on content images, no JS required for the core layout, CSS-only responsive design.

## Visual QA Record
Reference: approved Pattern P short-term study mockup
Implementation URL/build: pending Vercel Preview Deployment
Browser render inspected: no — pending Preview Deployment
Screenshot/reference compared: no — pending Preview Deployment
Images checked: partial — repository image files selected and high-resolution; final crops pending browser review
Overflow checked: pending
No unexplained Major deviation: pending
Overall >= 9.5: pending
Final: NOT READY until browser comparison is completed.
