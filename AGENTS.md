# AGENTS.md

# AI Development Rules — RSJP Experience System

Follow these rules before writing or changing code.

## 0. Repository Reality

The repository itself is the source of truth for the current implementation state.

Before making programme-facing changes:

- read the relevant current code and data,
- read the relevant handbook specification,
- distinguish prototype/placeholder content from verified current programme facts,
- never relabel fictional, sample, historical, or provisional content as current verified information.

The handbook defines product and governance rules. It does not turn existing prototype content into verified programme data.

For programme-facing work, also read the relevant specification in `docs/handbook/12_...` through `20_...` and apply `docs/handbook/21_CROSS_SPEC_GOVERNANCE.md`.

For multilingual, translation, locale-routing, or language-specific content work, also read and apply `docs/handbook/22_LOCALISATION_SPEC.md`.

A factual conflict is a blocker. Do not choose the value that appears most plausible.

## 1. Read Before Editing

Before implementation:

1. understand the requested outcome,
2. inspect the relevant existing files,
3. inspect existing components, utilities, styles, and data,
4. identify the smallest safe change,
5. check mobile impact,
6. check whether shared data or global styles are affected.

Do not create a new solution before checking whether the project already has one.

## 2. Scope Control

Change only what is necessary.

Do not:

- refactor unrelated code,
- rename unrelated files or symbols,
- reformat unrelated files,
- redesign neighbouring components,
- change global styles to solve a local issue unless the issue is genuinely global.

Prefer focused, reviewable changes.

## 3. Simplicity

Choose the simplest implementation that fully satisfies the current requirement.

Avoid:

- speculative abstractions,
- unnecessary configuration,
- unnecessary dependencies,
- compatibility layers for obsolete code,
- duplicate implementations,
- architecture designed for hypothetical features.

## 4. Existing Capabilities First

Before adding a dependency:

- check Astro capabilities,
- check existing dependencies,
- check existing utilities and components,
- check the library's documentation and types when relevant.

Do not add packages for functionality already available.

## 5. No Guessing

Never invent programme facts or technical facts.

Do not infer:

- dates,
- fees,
- eligibility,
- programme status,
- capacity,
- accommodation conditions,
- requirements,
- commands that do not exist in the repository.

If a fact is needed and cannot be verified, stop and surface the uncertainty.

## 6. UI Preservation

Unless redesign is explicitly requested:

- preserve typography,
- preserve colours,
- preserve established spacing,
- preserve interaction patterns,
- preserve responsive behaviour,
- preserve neighbouring components.

Reuse existing design tokens and patterns before creating new ones.

## 7. Mobile First

Primary reference width: `390px`.

Minimum supported width: `320px`.

Every relevant UI change must remain usable at:

- 320px,
- 390px,
- tablet,
- desktop.

Do not solve desktop issues by degrading mobile usability.

## 8. Data

Do not repeatedly hard-code programme facts inside UI components.

Where practical, use shared structured data for:

- dates,
- fees,
- application periods,
- capacity,
- status,
- accommodation,
- campus/location,
- eligibility.

UI components display programme facts; they should not become independent fact stores.

## 9. CMS

Do not introduce a CMS unless explicitly approved.

Keep content/data sufficiently separated from presentation to make future migration practical.

Do not build CMS-like abstractions merely because a CMS may exist later.

## 10. Performance

Prefer:

- static output,
- minimal JavaScript,
- Astro-native features,
- responsive images,
- limited hydration.

Hydrate only when interaction requires it.

## 11. Accessibility

Use semantic HTML and preserve:

- logical heading order,
- keyboard usability,
- visible focus states,
- sufficient contrast,
- meaningful labels,
- meaningful alt text.

## 12. Decision Making

If uncertainty is minor, reversible, low-risk, and does not affect facts:

choose the simplest reasonable option and continue.

Ask or stop before proceeding when uncertainty materially affects:

- programme facts,
- architecture,
- security,
- data integrity,
- external services,
- cost,
- significant UX,
- significant visual design.

## 13. Verification

Before considering a task complete:

- verify requested behaviour,
- confirm unrelated behaviour remains intact,
- confirm no unnecessary dependency was added,
- confirm no unrelated file changed,
- check responsive behaviour,
- run existing build/type/lint/test commands when they are actually defined by the repository.

Do not invent validation commands.

## 14. Final Rule

When two solutions are equally correct, choose the one that is:

1. easier to understand,
2. easier to maintain,
3. easier to remove,
4. less dependent on hidden behaviour,
5. less likely to affect unrelated functionality.
