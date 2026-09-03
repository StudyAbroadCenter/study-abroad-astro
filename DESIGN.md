# DESIGN.md

# RSJP Experience System — Operational UI Rules

For the full design specification, see `docs/handbook/04_DESIGN_SPEC.md`.

For high-fidelity mockup-to-code work, responsive art direction, hybrid rendering, and multilingual visual fidelity, also read and apply `docs/handbook/24_CREATIVE_FRONTEND_FIDELITY_STANDARD.md`.

## Visual Character

The interface should feel:

- authentic,
- modern,
- warm,
- credible,
- international,
- refined,
- student-centred.

It should not feel:

- bureaucratic,
- template-driven,
- childish,
- tourism-agency-like,
- generic AI-generated.

## Creative Frontend Fidelity

Approved visual references are design specifications, not loose inspiration.

Do not replace distinctive composition with generic grids/cards merely because they are easier to implement. Preserve defining hierarchy, image relationships, negative space, typography rhythm, motion intent, and responsive art direction using the appropriate combination of Astro/HTML, CSS, SVG, responsive imagery, partial rasterisation, and minimal client-side interaction.

A successful build is not the completion criterion for visually significant work. Render, compare against the approved reference, refine, and repeat.

The simplest implementation means the simplest implementation that fully satisfies the approved visual requirement.

## Authenticity

Prefer real programme photography over decorative graphics.

When choosing between a beautiful location image and an authentic programme activity image, prefer the activity image unless the section's purpose is specifically to communicate place.

## Premium Through Restraint

Prefer:

- strong photography,
- clear typography,
- generous but practical spacing,
- restrained colour,
- strong hierarchy,
- purposeful motion.

Avoid visual noise.

## AI-Look Prevention

Avoid repetitive use of:

- identical rounded cards,
- pill labels,
- gradient blobs,
- glassmorphism,
- glowing backgrounds,
- decorative badges,
- meaningless statistics,
- repeated headline + three-card layouts,
- centred layouts in every section.

Centred composition is allowed when it strengthens hierarchy; it must not become the default.

## Mobile First

Primary reference: `390px`.

Minimum supported width: `320px`.

Desktop should expand the layout, not redefine priorities.

Responsive design may use different art-directed compositions by viewport when this better preserves the approved design.

## Multilingual Design

The visual identity and core hierarchy are shared across languages, but text geometry does not need to be identical.

Locale-specific versions may adjust heading width, line breaks, navigation spacing, CTA width, module height, adjacent decorative positioning, crop balance, and other composition details when required by natural Japanese, English, Korean, Simplified Chinese, or Traditional Chinese.

Preserve one design identity; allow locale-specific art direction. Facts remain canonical and common across languages.

## Typography

Use the project's established type system.

Prioritise:

- readability,
- clear hierarchy,
- comfortable line length,
- sufficient contrast.

Do not introduce decorative body fonts.

## Colour

Use a restrained palette.

Institutional colour may support identity, but should not overwhelm the student experience.

Never use colour alone to communicate programme status.

## Hero

A hero should usually communicate:

- what this is,
- why it matters,
- what the user can do next.

Use one strong message, concise support copy, and a clear primary CTA.

Do not introduce institutional history before student value.

A distinctive approved hero may be implemented as an art-directed composition rather than forced into a generic hero template.

## Cards

Use cards only when items are meaningfully separate or selectable.

Do not put ordinary content into cards merely for decoration.

Do not replace an approved editorial/asymmetric composition with cards for implementation convenience.

## CTA

Buttons must have clear hierarchy.

Avoid oversized pill buttons, excessive gradients, and decorative icons without function.

## Photography

Prefer:

- real students,
- real classes,
- real campus,
- real programme activities,
- real programme locations.

Avoid generic stock photography when authentic images are available.

Check source resolution, intended crop, rendered size, and focal point for visually important images.

## Motion

Motion must be subtle and purposeful.

Avoid:

- scroll hijacking,
- decorative parallax with no design purpose,
- bouncing controls,
- delayed content,
- constant motion.

Subtle depth, continuity, or tactile feedback is acceptable when it is part of an approved concept.

Respect reduced-motion preferences.

## Visual QA

For substantial visual work:

1. render controlled desktop/mobile viewports;
2. compare against the approved mockup/reference;
3. correct geometry, scale, crop, density, whitespace, typography, and responsive differences;
4. repeat until the implementation is recognisably the approved design, not a simplified substitute.

## Tokens

Exact colours, type sizes, spacing values, radii, breakpoints, and other visual tokens belong in code.

Do not duplicate exact token values in this document unless the project formally adopts them as specification.
