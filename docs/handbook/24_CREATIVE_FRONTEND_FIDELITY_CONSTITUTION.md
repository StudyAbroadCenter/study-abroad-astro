# Creative Frontend Fidelity Constitution

Status: normative visual implementation rule
Effective: 2026-09-03

## Supreme rule

Approved mockups and design patterns are specifications, not loose inspiration. Do not simplify a distinctive composition merely because a generic hero/grid/card/CTA implementation is easier, familiar, already present, or conventional for Astro.

Before accepting visual loss, ask: **Is this truly a technical limitation, or merely an implementation shortcut?**

## Visual authority

Use this order for visual decisions:

1. latest explicitly approved mockup/reference for the surface;
2. approved pattern/design specification;
3. explicit recorded design decisions;
4. current implementation only as evidence of current state.

Existing components, starter themes, Pinwheel-derived structure, framework conventions and prior implementations are not visual authority. If the authoritative reference is missing, conflicting, ambiguous, or cannot actually be inspected, do not guess.

## No assumed verification

Never claim a page, screenshot, responsive state, image or render was checked unless it was actually inspected. Build success and code inspection are not visual verification.

## Fidelity obligations

Preserve defining design decisions as applicable: composition, hierarchy, asymmetry, negative space, scale, image crop/dominance, typography measure and art-directed line breaks, overlap/depth, navigation character, pacing/density, material/texture, motion, mobile interpretation and emotional tone.

Template is not authority. Previous implementation is evidence, not authority. Reuse a component only after verifying that it preserves the approved design.

## Creative Frontend method

Use the layer that best preserves the approved design: semantic HTML, Grid/Flex where genuinely structural, absolute/coordinate-driven artboards, transforms, z-index, masks/clip-path, SVG, responsive imagery, partial rasterisation, composited artwork with live semantic overlays, selective JavaScript, GSAP/Motion, and WebGL/Three.js only when genuinely required.

Implementation purity is not a goal. Fidelity, usability, accessibility and measured performance are.

## Responsive and multilingual art direction

Responsive design is not desktop shrinkage. Desktop, tablet and mobile may be separately art-directed editions of one design identity.

One design identity does not require identical geometry across languages. Japanese, English, Korean, Simplified Chinese and Traditional Chinese may use different line breaks, heading width, spacing, CTA width, card height, crop balance and local composition when needed for natural language.

**Design may localise. Facts may not.** Dates, fees, eligibility, programme status, accommodation conditions and other factual rules must remain governed by verified canonical data.

For substantial work, independently inspect affected published locales at 320px, 390px, representative tablet and representative desktop (normally including 1440x900 where suitable to the reference).

## Mandatory workflow

For substantial visual work:

1. identify and actually inspect the authoritative reference;
2. analyse the defining geometry and visual character;
3. choose rendering strategy per region;
4. match macro geometry first;
5. add texture/detail second;
6. render the actual implementation in a browser;
7. compare it with the reference side by side and, when useful, by overlay/difference inspection;
8. identify material deviations;
9. adjust and re-render;
10. repeat until no unexplained major deviation remains.

A successful build is an engineering checkpoint, not visual completion.

## Visual deviation ledger

Any material remaining deviation must record reference/viewport, observed deviation, cause, fix attempted, remaining difference and status (`fixed` or `explicitly accepted`). Do not silently normalise a major deviation as “close enough”.

## Evidence before invoking constraints

Performance, accessibility, maintainability, responsiveness and framework limitations are real constraints, but they may not be assumed reasons for simplification. Demonstrate the conflict where measurable and test responsive assets, AVIF/WebP, SVG, partial rasterisation, separate mobile artwork, semantic overlays or more suitable CSS geometry before flattening the design.

## Photography

Inspect native dimensions before assigning a critical image role. Avoid visible upscaling, accidental crop, misleading stock use and unnecessary reuse where uniqueness/storytelling matters. Prefer authentic programme imagery when it supports the section purpose.

## Definition of done

Visual work is not complete unless the authoritative reference was actually inspected; desktop/mobile and each affected published locale were actually rendered and reviewed; major geometry is intentionally faithful; image suitability was checked; accessibility basics remain intact; relevant repository checks pass; material deviations are fixed or explicitly accepted; and evidence of visual comparison exists.

Final test: **When the approved reference and actual browser rendering are shown side by side, would an informed viewer immediately recognise the implementation as the intended design rather than a simplified approximation?** If not, it is not finished.

## Future patterns

Every future pattern must include both a visual specification (references, desktop/mobile composition, typography, imagery, motion, distinctive details) and an implementation strategy (flow/artboard regions, SVG/raster opportunities, interaction, performance/accessibility risks, QA viewports/locales).

## Attitude

Do not search first for reasons the design cannot be implemented. Search first for the responsible combination of techniques that can implement it. Avoidable design loss, blind precedent, unverified assumptions and “probably fine” are not completion criteria.