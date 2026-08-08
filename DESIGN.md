# DESIGN.md

# RSJP Experience System — Operational UI Rules

For the full design specification, see `docs/handbook/04_DESIGN_SPEC.md`.

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

## Cards

Use cards only when items are meaningfully separate or selectable.

Do not put ordinary content into cards merely for decoration.

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

## Motion

Motion must be subtle and purposeful.

Avoid:

- scroll hijacking,
- decorative parallax,
- bouncing controls,
- delayed content,
- constant motion.

Respect reduced-motion preferences.

## Tokens

Exact colours, type sizes, spacing values, radii, breakpoints, and other visual tokens belong in code.

Do not duplicate exact token values in this document unless the project formally adopts them as specification.
