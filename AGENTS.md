# AGENTS.md

# AI Development Rules — RSJP Experience System

Follow these rules before writing or changing code.

## 0. Supreme visual implementation rule

For any substantial visual design, redesign, mockup implementation, pattern work, or multilingual visual adaptation, `docs/handbook/24_CREATIVE_FRONTEND_FIDELITY_CONSTITUTION.md` is the highest visual implementation rule in this repository.

Approved mockups and design patterns are specifications, not loose inspiration. Existing components, Pinwheel-derived structures, Astro conventions, previous implementations and reusable cards are not visual authority. Do not simplify distinctive composition for convenience.

Do not claim visual verification unless the actual rendered browser result was inspected. Build success is not visual completion.

## 1. Repository Reality

The repository itself is the source of truth for the current implementation state, but not automatically the source of truth for approved visual intent.

Before making programme-facing changes:

- read the relevant current code and data,
- read the relevant handbook specification,
- read `docs/handbook/24_CREATIVE_FRONTEND_FIDELITY_CONSTITUTION.md` for visual/pattern work,
- distinguish prototype/placeholder content from verified current programme facts,
- never relabel fictional, sample, historical, or provisional content as current verified information.

The handbook defines product and governance rules. It does not turn existing prototype content into verified programme data.

For programme-facing work, also read the relevant specification in `docs/handbook/12_...` through `20_...` and apply `docs/handbook/21_CROSS_SPEC_GOVERNANCE.md`.

For multilingual, translation, locale-routing, or language-specific content work, also read and apply `docs/handbook/22_LOCALISATION_SPEC.md`.

For English localisation work, also read and apply `docs/handbook/23_ENGLISH_LOCALISATION_SPEC.md`. English must be authored as a natural English edition from the Japanese master intent and shared verified facts, not produced by sentence-by-sentence translation.

A factual conflict is a blocker. Do not choose the value that appears most plausible.

## 2. Read Before Editing

Before implementation:

1. understand the requested outcome,
2. inspect the relevant existing files,
3. identify and inspect the authoritative visual reference when visual work is involved,
4. inspect existing components, utilities, styles, and data,
5. identify the smallest safe change that still preserves approved design intent,
6. check mobile impact,
7. check whether shared data or global styles are affected.

Do not create a new solution before checking whether the project already has one. Do not reuse an existing solution if it degrades an approved visual specification.

## 3. Scope Control

Change only what is necessary.

Do not:

- refactor unrelated code,
- rename unrelated files or symbols,
- reformat unrelated files,
- redesign neighbouring components,
- change global styles to solve a local issue unless the issue is genuinely global.

Prefer focused, reviewable changes.

## 4. Simplicity

Choose the least complex implementation that fully satisfies both the functional requirement and the approved design.

Avoid:

- speculative abstractions,
- unnecessary configuration,
- unnecessary dependencies,
- compatibility layers for obsolete code,
- duplicate implementations,
- architecture designed for hypothetical features.

Simplicity must not be used as permission to flatten a distinctive approved design.

## 5. Existing Capabilities First

Before adding a dependency:

- check Astro capabilities,
- check existing dependencies,
- check existing utilities and components,
- check the library's documentation and types when relevant.

Do not add packages for functionality already available.

## 6. No Guessing

Never invent programme facts or technical facts.

Do not infer:

- dates,
- fees,
- eligibility,
- programme status,
- capacity,
- accommodation conditions,
- requirements,
- commands that do not exist in the repository,
- visual approval from a build or code review alone.

If a fact or authoritative visual reference is needed and cannot be verified, stop and surface the uncertainty.

## 7. UI Preservation / Fidelity

Unless redesign is explicitly requested, preserve established visual behaviour. When redesign or pattern implementation is requested, follow the approved reference rather than blindly preserving legacy layout.

For substantial visual work, apply `docs/handbook/24_CREATIVE_FRONTEND_FIDELITY_CONSTITUTION.md`, including actual browser render/reference comparison and correction of material deviations.

Reuse design tokens and components only when they preserve the approved composition.

## 8. Mobile First

Primary reference width: `390px`.

Minimum supported width: `320px`.

Every relevant UI change must remain usable at:

- 320px,
- 390px,
- tablet,
- desktop.

Do not solve desktop issues by degrading mobile usability. Expressive layouts may use separate mobile art direction rather than shrinking desktop.

## 9. Data

Do not repeatedly hard-code programme facts inside UI components.

Where practical, use shared structured data for dates, fees, application periods, capacity, status, accommodation, campus/location and eligibility.

For multilingual work, locale-specific copy must not become a separate factual source. Design may localise; facts may not.

## 10. CMS

Do not introduce a CMS unless explicitly approved.

Keep content/data sufficiently separated from presentation to make future migration practical.

Do not build CMS-like abstractions merely because a CMS may exist later.

## 11. Performance

Prefer static output, minimal JavaScript, Astro-native features, responsive images and limited hydration.

Performance is a constraint to measure and solve alongside fidelity, not an assumed excuse for visual simplification. If performance is invoked to change an approved design, demonstrate the conflict where measurable and test alternatives first.

## 12. Accessibility

Use semantic HTML and preserve logical heading order, keyboard usability, visible focus states, sufficient contrast, meaningful labels and meaningful alt text.

## 13. Decision Making

If uncertainty is minor, reversible, low-risk, and does not affect facts or significant visual design, choose the simplest reasonable option and continue.

Ask or stop before proceeding when uncertainty materially affects programme facts, architecture, security, data integrity, external services, cost, significant UX, or significant visual design.

## 14. Verification

Before considering a task complete:

- verify requested behaviour,
- confirm unrelated behaviour remains intact,
- confirm no unnecessary dependency was added,
- confirm no unrelated file changed,
- check responsive behaviour,
- run existing build/type/lint/test commands when actually defined,
- for substantial visual work, actually render and inspect affected desktop/mobile surfaces,
- for multilingual visual work, independently inspect each affected published locale,
- compare against the authoritative reference and resolve or explicitly record material deviations.

Do not invent validation commands. Do not describe uninspected UI as verified.

## 15. Final Rule

When two solutions are equally faithful and correct, choose the one that is easier to understand, maintain and remove, less dependent on hidden behaviour, and less likely to affect unrelated functionality.

When one solution is easier but materially less faithful to the approved design, it is not equally correct.
