# 00_OVERVIEW.md

# RSJP Experience System — Handbook Overview

## Purpose

This handbook defines the long-term product and implementation framework for the RSJP Experience System.

It is designed to reduce repeated decisions and keep work coherent across people and AI systems.

## Layer Model

The system is intentionally organised from principles to implementation and student journey:

1. Principles — what must remain true
2. Project — what product we are building
3. Brand — what it should mean and feel like
4. UX — how users move, decide, and recover
5. Design — how the experience is visually and interactively expressed
6. Content — how information is written
7. Components — how recurring UI patterns behave
8. Data — how programme facts are structured
9. SEO — how pages are discovered and represented
10. Technology — how the product is implemented
11. Roadmap — what may happen later
12. Decisions — why major choices were made
13. Programme Page — how one programme becomes a trustworthy decision experience
14. Syllabus — how academic substance is communicated
15. Student Interaction — how real exchange opportunities are represented
16. Accommodation — how living arrangements are explained accurately
17. Safety & Support — how responsibility and support are made clear
18. Programme Comparison — how students compare meaningful differences
19. Before You Apply — how application uncertainty is removed
20. Before You Arrive — how accepted students prepare and arrive confidently
21. FAQ — how real recurring uncertainty is resolved
22. Cross-Spec Governance — how facts, authority, certainty, lifecycle, and change propagation stay consistent
23. Agents — how AI systems should work inside the repository

## Source of Truth

Programme facts must come from verified current sources.

For programme-facing work, `21_CROSS_SPEC_GOVERNANCE.md` defines the authoritative domain, source precedence, certainty states, lifecycle, and conflict handling.

The handbook defines rules, not current programme facts.

Do not place changing programme dates or fees in policy documents unless they are examples explicitly labelled as examples.

A previous-year value is reference material only until re-verified for the current offering.

## Change Policy

### Change freely when needed

- operational root files,
- component guidance,
- technical guidance.

### Change carefully

- project principles,
- brand values,
- UX priorities,
- source-of-truth rules.

### Record major changes

Use `11_DECISIONS.md` when changing:

- framework,
- CMS strategy,
- data ownership,
- design-system direction,
- routing/internationalisation strategy,
- major dependencies,
- product scope.

## Contradictions

If implementation and handbook differ:

1. determine whether the code or handbook is outdated,
2. do not automatically rewrite working code,
3. document the intended direction,
4. make a scoped change when justified.

The handbook is not permission for uncontrolled refactoring.
