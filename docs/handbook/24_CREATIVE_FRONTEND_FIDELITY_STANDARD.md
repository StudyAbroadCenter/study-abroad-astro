# 24_CREATIVE_FRONTEND_FIDELITY_STANDARD.md

# RSJP Experience System — Creative Frontend Fidelity Standard

Status: proposed project-wide implementation doctrine
Last updated: 2026-09-03

## 1. Purpose

This specification adds a high-fidelity implementation discipline to the existing RSJP design, UX, performance and localisation rules.

The problem it prevents is mockup-to-code translation loss: an approved composition may be visually distinctive, editorial, immersive or asymmetric, but implementation can drift toward convenient generic patterns such as repeated cards, uniform grids and conventional hero blocks.

That drift is not acceptable merely because the resulting page is technically correct.

**Core rule:**

> Preserve the approved design idea first. Choose the frontend technique second. Do not let implementation convenience redefine the design.

This rule applies to the current site, future redesigns, programme pages, campaign/landing pages, and any future visual pattern library used by the Study Abroad Center.

## 2. Relationship to existing governance

This standard supplements, and does not replace:

- `04_DESIGN_SPEC.md`;
- `03_UX_SPEC.md`;
- `09_TECH.md`;
- `21_CROSS_SPEC_GOVERNANCE.md`;
- `22_LOCALISATION_SPEC.md`;
- `23_ENGLISH_LOCALISATION_SPEC.md`;
- all programme-specific factual specifications.

Accuracy, source-of-truth governance, accessibility and user clarity remain higher priority than visual novelty.

High fidelity must never be achieved by weakening factual controls or making important information harder to understand.

## 3. Creative Frontend, not template substitution

When an approved design contains distinctive composition, do not automatically translate it into a standard component pattern.

Examples of avoidable design loss include:

- asymmetric editorial composition replaced by equal cards;
- layered imagery replaced by a single banner;
- distinctive typography rhythm replaced by one generic heading style;
- designed negative space filled merely to make the layout feel efficient;
- immersive visual progression replaced by repeated same-height sections;
- expressive mobile composition reduced to a simple stacked desktop layout.

Generic primitives are allowed when they match the design. They must not replace distinctive visual decisions simply because they are easier to code.

## 4. Technology layers

Astro remains fully suitable for expressive visual work.

Use the least complex combination that faithfully delivers the design:

- semantic Astro/HTML for structure, content, navigation, CTA and forms;
- normal flow, Grid and Flexbox for structured information;
- CSS absolute positioning for true art-directed regions;
- transforms and z-index for intentional spatial composition;
- CSS masks, clip-path, pseudo-elements and gradients where appropriate;
- SVG for scalable line work, masks, diagrams, maps and decorative geometry;
- AVIF/WebP/JPEG/PNG for authentic photography and raster artwork;
- Astro image tooling / responsive images for delivery optimisation;
- small client scripts or Astro islands only when interaction materially requires them;
- GSAP/Motion only for choreography that cannot be achieved cleanly with CSS or lightweight scripting;
- Canvas/WebGL/Three.js only when an approved concept genuinely needs advanced 2D/3D/shader effects.

Do not add technology for prestige. Add it only when it preserves a meaningful design decision.

## 5. Artboard regions

Some sections should be implemented as designed artboards rather than ordinary document flow.

Examples may include:

- a highly composed hero;
- immersive campus/programme storytelling;
- editorial photo spreads;
- programme journey diagrams;
- interactive maps;
- special campaign pages;
- student-story compositions.

An artboard may use manually controlled:

- x/y position;
- width/height;
- crop/focal point;
- rotation;
- overlap;
- clipping;
- z-index;
- whitespace;
- visual pacing.

Designed irregularity should generally be deterministic. Do not runtime-randomise a composition that was approved visually.

## 6. Hybrid rendering is allowed

Implementation purity is not a quality target.

A section may combine:

- live text;
- CSS layout;
- SVG decoration;
- independent photographs;
- partially rasterised artwork;
- interactive overlays.

Rasterising a decorative cluster is acceptable when it substantially improves fidelity and lowers implementation complexity, provided that:

- essential text remains semantic/live or has an accessible equivalent;
- actions remain real controls;
- programme facts are not trapped only inside raster imagery;
- desktop/mobile assets are delivered appropriately;
- file size remains reasonable.

Preferred order:

1. live HTML/CSS/SVG/image composition;
2. partial rasterisation for difficult decorative elements;
3. fully composited artwork only where justified.

## 7. Responsive art direction

Responsive design means preserving intent, not preserving identical coordinates.

Desktop, tablet and mobile may be different editions of the same design.

They may legitimately differ in:

- image count;
- image crop;
- element order;
- overlap;
- decorative density;
- navigation form;
- heading measure;
- line breaks;
- section height;
- interaction behaviour.

Review at minimum:

- 320px;
- 390px;
- tablet;
- desktop.

Mobile must look intentionally designed, not like a damaged desktop composition.

## 8. Multilingual visual art direction

The shared design system and brand identity should remain common across locales, but **visual geometry may differ by language**.

This extends `22_LOCALISATION_SPEC.md`.

The Japanese edition controls product intent and master visual direction. Other locales preserve the same design identity and hierarchy, but may adjust composition where language demands it.

Allowed locale-specific visual differences include:

- different headline line breaks;
- different headline width;
- different paragraph measure;
- different CTA width;
- different navigation spacing;
- different card/module height;
- different position of adjacent decoration when text geometry changes;
- different crop or focal balance where text occupies a different amount of space;
- different number of decorative elements if necessary for legibility;
- locale-specific type scale adjustments within the established hierarchy.

Do **not** force English, Korean, Simplified Chinese or Traditional Chinese into Japanese text geometry.

The correct principle is:

> One design identity; locale-specific art direction where necessary.

A Japanese hero and English hero can be recognisably the same design while having different line breaks, text blocks or image balance.

## 9. Facts remain common even when composition differs

Visual freedom across locales must never create factual drift.

Dates, fees, eligibility, status, accommodation, programme requirements and other controlled facts remain derived from canonical verified sources.

Locale-specific design may recompose explanation, but it may not:

- hide a required condition;
- strengthen a claim;
- omit a material limitation merely to improve visual balance;
- convert provisional information into confirmed information;
- create a different programme meaning.

**Design can localise. Facts cannot.**

## 10. Photography fidelity

Real programme photography remains the preferred visual material.

For every important image assignment:

- inspect source resolution;
- select an intentional crop/focal point;
- avoid visible upscaling;
- use an appropriate responsive image size;
- verify that the image actually supports the section purpose;
- do not repeatedly reuse the same image merely to fill layouts;
- do not imply that stock imagery is a documented programme event.

Image selection is part of art direction and must be reviewed visually, not only by filename or dimensions.

## 11. Mockup-to-code workflow

For visually significant changes:

### Phase A — Reference analysis

Identify:

- defining composition;
- focal point;
- hierarchy;
- image relationships;
- typography rhythm;
- whitespace;
- section pacing;
- motion intent;
- mobile interpretation;
- locale implications.

### Phase B — Rendering strategy

Decide region by region whether the design is best served by:

- normal flow;
- Grid/Flexbox;
- artboard/absolute composition;
- SVG;
- raster asset;
- hybrid layers;
- interactive script.

### Phase C — Macro geometry

Match major proportions first:

- section dimensions;
- headline block;
- dominant photography;
- negative space;
- navigation relation;
- content density.

### Phase D — Detail

Only after geometry is correct, refine:

- borders;
- masks;
- shadows;
- texture;
- typography details;
- decoration;
- hover/motion;
- crop focal points.

### Phase E — Visual comparison

Render controlled screenshots and compare against the approved reference.

Side-by-side and semi-transparent overlay comparison are both valid.

Check for:

- position drift;
- scale mismatch;
- excessive symmetry;
- incorrect density;
- wrong crop;
- typography flattening;
- missing depth/material;
- mobile degradation;
- locale-specific awkwardness.

### Phase F — Iterate

Repeat:

implement → render → compare → adjust → render again.

A successful build is the beginning of visual QA, not the end of design implementation.

## 12. Definition of done for visual work

A visually significant implementation is complete only when:

- the requested behaviour works;
- controlled facts remain correct;
- target viewports are rendered/reviewed;
- major visual geometry matches the approved direction;
- mobile is intentionally art-directed;
- relevant locales are visually checked;
- no horizontal overflow exists;
- image resolution and crop are appropriate;
- accessibility basics are preserved;
- performance cost is proportionate to design value;
- the page does not look like a generic approximation of the approved design.

**Final fidelity test:**

> If the approved reference and implementation are shown together, is it immediately clear that they are the same design rather than merely the same content?

If not, visual implementation is unfinished.

## 13. Visual quality versus simplicity

The repository's existing rule to prefer simple, maintainable solutions remains valid, but must be interpreted correctly.

The simplest solution means:

> the simplest solution that fully satisfies the approved requirement.

If the requirement includes a distinctive visual composition, a generic card grid is not a simpler correct solution; it is an incomplete solution.

Likewise, maintainability is an engineering constraint to solve, not a reason to erase approved art direction.

## 14. Motion and performance

Motion must support hierarchy, continuity, tactility or narrative.

Preferred escalation:

1. CSS transitions;
2. minimal client-side script/island;
3. GSAP/Motion where justified;
4. WebGL/Three.js only for genuinely advanced visual concepts.

Respect `prefers-reduced-motion`.

Performance remains part of design quality:

- responsive images;
- appropriate compression;
- minimal hydration;
- lazy loading below the fold;
- priority treatment for true LCP assets;
- no oversized desktop artwork delivered unnecessarily to mobile.

## 15. Future design-pattern rule

Any future visual pattern or redesign concept must specify both:

### Visual specification

- concept;
- approved reference/mockup;
- desktop composition;
- mobile composition;
- typography;
- photography treatment;
- motion intent;
- distinctive details.

### Implementation strategy

- normal-flow regions;
- artboard regions;
- SVG opportunities;
- rasterisation candidates;
- required interaction;
- performance considerations;
- accessibility considerations;
- multilingual composition considerations;
- visual QA viewports.

A pattern is not fully specified until both are considered.

## 16. Final principle

Do not search first for reasons an approved design cannot be built.

Search first for the responsible combination of techniques that can preserve it.

The project standard is not visual extravagance at any cost. It is **disciplined refusal to accept avoidable design loss while preserving factual trust, accessibility, localisation quality and performance**.
