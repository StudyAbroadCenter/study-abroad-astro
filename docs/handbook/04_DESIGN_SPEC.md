# 04_DESIGN_SPEC.md

# RSJP Experience System — Design Specification

## Objective

Create an authentic, premium, student-centred interface where the programme experience is more memorable than the interface itself.

## Core Design Principles

### Authenticity Before Decoration

Use real programme experience as the primary visual material.

Do not compensate for weak content with gradients, decorative shapes, unnecessary illustration, or animation.

### Premium Through Restraint

Premium means:

- clear hierarchy,
- strong photography,
- generous but efficient spacing,
- restrained colour,
- deliberate typography,
- consistent alignment,
- purposeful motion.

### Clarity Before Cleverness

Users should immediately understand:

- where they are,
- what the page is about,
- what matters,
- what they can do next.

### Student First

Information hierarchy must reflect applicant needs rather than internal ownership.

### Mobile First

Reference width: 390px.

Minimum supported width: 320px.

Desktop expands composition; it does not redefine importance.

## Visual Character

The site should feel:

- contemporary,
- warm,
- international,
- refined,
- youthful,
- credible,
- human,
- Japanese through reality rather than stereotype.

Avoid:

- bureaucratic,
- luxury-hotel,
- tourism-agency,
- generic startup,
- generic AI landing-page aesthetics.

## Avoiding the AI-Generated Look

Avoid defaulting to:

- identical rounded cards,
- pill-shaped labels everywhere,
- large gradient blobs,
- glowing surfaces,
- glassmorphism,
- floating decorative shapes,
- icon grids with no information value,
- repetitive centred layouts,
- repeated `headline + three cards`,
- decorative badges,
- meaningless statistics.

These patterns are not universally forbidden. They must have a functional or brand reason.

## Layout

Use rhythm rather than repetitive section templates.

Mix intentionally:

- immersive photography,
- compact information,
- editorial image/text layouts,
- structured facts,
- calm whitespace.

Do not make every section the same height or shape.

## Containers and Reading Width

Use consistent page containers.

Long-form text should use a comfortable reading width.

Do not stretch paragraphs across very wide desktop screens.

Exact widths belong in code/design tokens.

## Grid

Use flexible grid logic.

Mobile is primarily single-column.

Use two columns on mobile only when readability and touch usability remain strong.

## Spacing

Use a small consistent spacing scale.

Whitespace should create hierarchy, not force unnecessary scrolling.

Mobile spacing may be tighter than desktop while preserving clarity.

## Typography

Prioritise:

- readability,
- language support,
- efficient delivery,
- clear hierarchy.

Use a modern sans-serif system unless a later documented decision changes it.

Do not use decorative fonts for body text.

## Heading Hierarchy

Use only the levels needed.

Avoid oversized mobile headings that push useful content below the fold without benefit.

Use intentional line breaks.

## Body Text

Use comfortable line height and moderate line length.

Avoid dense blocks.

Do not shrink text to force content into a component.

## Colour

Use a restrained palette.

Institutional colour may support identity but should not dominate every section.

Status must never rely on colour alone.

## Backgrounds

Prefer neutral surfaces.

Use background changes to indicate real shifts in content or mood.

Avoid unnecessary alternating colour bands.

## Photography

Photography is a primary design asset.

Prefer:

- real students,
- real classes,
- real campuses,
- real programme activities,
- real locations,
- natural moments.

Avoid generic stock imagery when authentic material exists.

### Student Images

Prefer candid participation over staged posing.

When privacy or permission is uncertain:

- use wider shots,
- crop appropriately,
- show activity rather than identity.

Do not unnecessarily enlarge student faces.

### Cropping

Do not force every image into one ratio.

Use varied, intentional crops.

### Image Quality

Use responsive delivery and appropriate compression.

Do not load source-resolution images unnecessarily.

## Hero

A hero should usually contain:

- a clear programme/value message,
- concise support copy,
- one primary CTA,
- meaningful visual context.

Avoid:

- complete programme explanations,
- vague emotional slogans,
- leading with institutional history.

## Video

Do not autoplay heavy background video by default.

If used:

- require intentional playback when practical,
- provide a strong poster,
- preserve full functionality without playback.

## CTA

Use clear hierarchy.

Primary CTA should be obvious.

Secondary actions should be quieter.

Avoid:

- multiple equally dominant buttons,
- oversized pill styling everywhere,
- unnecessary gradients,
- decorative icons.

## Cards

Cards are for meaningfully separate/selectable units.

Use them for:

- programmes,
- accommodation options,
- student stories,
- structured comparisons.

Do not put ordinary paragraphs into cards merely because cards look modern.

## Programme Cards

Communicate essential differences quickly.

Potential fields:

- programme name,
- location,
- duration,
- dates,
- status,
- short differentiator.

Do not reproduce full programme detail inside the card.

## Tables

Use tables when row/column relationships matter.

On mobile:

- redesign where possible,
- stack content where clearer,
- use horizontal scrolling only when the table structure genuinely requires it.

Never make text unreadably small.

## Icons

Use icons to improve comprehension.

Use one coherent icon language.

Do not decorate every heading with an icon.

## Illustrations

Photography is primary.

Use illustration only where it communicates something photography cannot.

Avoid generic AI illustration as default brand language.

## Maps

Use maps when they improve practical understanding.

Prefer lightweight solutions when interaction is unnecessary.

## Header

Keep lightweight.

Prioritise:

- identity,
- programme discovery,
- essential navigation,
- application action where appropriate.

## Sticky Elements

Use only when they improve navigation or conversion.

Do not consume excessive mobile viewport space.

## Footer

Provide essential navigation, contact, institutional relationship, and necessary legal links.

Do not duplicate the entire site map by default.

## Sections

Each section should have one dominant purpose.

Split sections when information, promotion, testimonial, statistics, and CTA compete simultaneously.

## Editorial Layout

Use editorial asymmetry and varied photo relationships to avoid repetitive card-based design.

Variation must remain intentional.

## Testimonials

Keep authentic, concise, and contextual.

Do not use anonymous claims as proof of unsupported outcomes.

## Statistics

Use only accurate, contextualised, useful statistics.

Never invent numbers for visual credibility.

## Programme Status

Use consistent textual labels.

Visual treatment must support, not replace, the text.

## Forms

Use clear labels, help text, grouping, and visible error states.

Placeholder text is not a substitute for labels.

## Motion

Appropriate:

- state transition,
- menu transition,
- subtle hover feedback.

Avoid:

- scroll hijacking,
- decorative parallax,
- bouncing controls,
- animation that delays content.

Respect `prefers-reduced-motion`.

## Responsive Behaviour

Responsive design means reprioritising, not shrinking.

At smaller sizes:

- simplify,
- reorder when useful,
- reduce decoration,
- preserve essential content and CTA.

## Touch Targets

Controls must remain comfortable to tap.

Do not create tightly packed small interactive elements.

## Location Identity

Japan should be communicated through authentic place, architecture, materials, culture, and student life.

Avoid decorative stereotypes such as unrelated torii, brush fonts, cherry blossoms, or patterns.

Kyoto and Osaka should retain distinct visual identities.

## Programme Family

Programmes may vary through:

- photography,
- season,
- location,
- content,
- selected accent use.

Do not create disconnected mini-brand systems.

## Design Tokens

Define reusable code-level tokens for:

- colour,
- typography,
- spacing,
- radius,
- border,
- shadow,
- container width,
- transitions.

Do not hard-code near-duplicate values across components.

Exact token values should live in code unless formally approved as a specification.

## Shadows and Radius

Use sparingly.

Prefer hierarchy through spacing, borders, contrast, and surfaces before heavy shadows.

Pill shapes should be intentional, not the default.

## Loading / Empty / Error

Loading should be minimal.

Empty states must explain what is unavailable and what happens next.

Error states should prioritise recovery.

## Accessibility

Preserve:

- sufficient contrast,
- visible focus,
- understandable controls,
- readable type,
- semantic hierarchy.

Do not remove focus styling without an accessible replacement.

## Performance as Design

A beautiful page that loads slowly is not successful.

Prioritise:

- responsive images,
- efficient assets,
- minimal JS,
- restrained fonts,
- limited animation.

## Design Review

Ask:

1. Is purpose immediately clear?
2. Is essential information easy to find?
3. Does it feel authentic?
4. Does it fit the brand?
5. Does it work at 390px?
6. Does it remain usable at 320px?
7. Is the CTA obvious?
8. Is any visual element unnecessary?
9. Does photography strengthen the message?
10. Does it look intentionally designed rather than template-generated?

## Priority

1. Accuracy and trust
2. Usability
3. Accessibility
4. Content clarity
5. Mobile experience
6. Performance
7. Visual consistency
8. Emotional impact
9. Novelty
