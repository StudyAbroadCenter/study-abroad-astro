# RSJP Experience System — 12–20 Cross-Spec Audit Report

**Audit scope:** Specs 12–20  
**Resolution:** Incorporated into v2.0 programme-facing specifications and `21_CROSS_SPEC_GOVERNANCE.md`

## Executive Assessment

Specs 12–20 were individually strong, but horizontal review identified a second-order risk: each document had begun developing its own small governance vocabulary and repeated some of the same facts/rules from different perspectives.

That was not a failure of the individual specifications. It was a system-governance issue that could eventually create:

- different workflow states for different content types,
- unclear precedence when two sources disagree,
- derivative pages becoming accidental Sources of Truth,
- inconsistent treatment of unknown/provisional facts,
- terminology drift,
- previous-year values re-entering current content through secondary views,
- local fixes that fail to propagate to dependent pages.

The v2.0 revision resolves these issues at system level.

## 1. Publication Workflow Drift — RESOLVED

Earlier documents used useful but inconsistent state labels such as provider confirmation, contact verification, application-system check, data verification, answer verification, and ready-for-release.

### Resolution

Use one content lifecycle:

1. `Draft`
2. `Fact Check Required`
3. `Review`
4. `Ready for Publication`
5. `Published`
6. `Archived`

Domain-specific checks are **review flags**, not additional lifecycle states.

## 2. Fact Certainty vs Page Status — RESOLVED

`To be confirmed`, `Not yet available`, `Subject to change`, and workflow status had been used without one semantic model.

### Resolution

Fact certainty is independent from page workflow:

- `Confirmed`
- `Provisional`
- `Unknown`
- `Not Applicable`

`Subject to change` may be used only when a real current plan exists but is provisional. It is not a substitute for `Unknown`.

## 3. Source-of-Truth Competition — RESOLVED

Programme data, syllabus, accommodation confirmation, application guidelines, public copy, and previous-year documents can all contain overlapping values.

### Resolution

The system now uses **authoritative fact domains**, not one universal document.

Source precedence:

1. current approved offering-specific authority,
2. current authoritative external source for externally controlled facts,
3. shared structured data,
4. published page copy,
5. previous-year material/staff memory.

Shared structured data must be corrected when it conflicts with current authoritative evidence.

## 4. Derivative-Page Authority — RESOLVED

Programme Page, Comparison, and FAQ repeat facts owned by specialist domains.

### Resolution

Specs 12, 17, and 20 are explicitly derivative for facts they do not own.

They may present authoritative facts but cannot redefine them.

A conflict is resolved upstream before any derivative page is corrected.

## 5. Cross-Domain Overlap — RESOLVED

Intentional overlap exists:

- Accommodation appears across 12, 15, 17, 18, 19, 20.
- Safety appears across 12, 16, 18, 19, 20.
- Academic facts appear across 12, 13, 17, 18, 20.
- Application facts appear across 12, 17, 18, 20.

### Resolution

A Cross-Spec Authority Matrix now defines ownership. Repetition for student usability is allowed; competing authority is not.

## 6. Guarantee Terminology — RESOLVED

`Guaranteed`, `Conditional`, `Optional`, `Subject to availability`, and similar wording had different local interpretations.

### Resolution

Canonical guarantee states:

- `Guaranteed`
- `Conditional`
- `Optional`
- `Not Provided`
- `Unknown`

`Subject to availability` is a condition rather than a standalone guarantee state.

Guarantee language cannot be used for outcomes outside programme control.

## 7. Programme / Application Status Vocabulary — RESOLVED

### Resolution

Canonical underlying status:

- `Coming Soon`
- `Open`
- `Closed`
- `Full`
- `Cancelled`

CTA behaviour derives from real status and verified application-system availability.

## 8. Previous-Year Reuse — STRENGTHENED

All specifications already warned against old-year reuse, but the rule was repeated locally.

### Resolution

One cross-spec rule now applies universally:

**Previous-year content is reference material only and cannot establish a current fact without current-domain verification.**

## 9. Volatile External Facts — STRENGTHENED

Visa, entry, transport, weather, insurer, government, and similar facts can change independently of programme content.

### Resolution

These are explicitly treated as externally controlled volatile facts requiring current authoritative sources and rechecking for high-stakes use.

Evergreen pages should avoid freezing unstable detail where linking to the authoritative current source is safer.

## 10. Change Propagation — STRENGTHENED

Individual specifications already required updates after material change, but there was no shared dependency map.

### Resolution

`21_CROSS_SPEC_GOVERNANCE.md` now contains a change-propagation matrix showing which dependent views require review after programme, academic, interaction, accommodation, safety, or application changes.

## 11. AI Truth Boundary — STRENGTHENED

All documents prohibited fabrication, but the cross-system conflict rule needed to be explicit.

### Resolution

AI may identify conflicts, gaps, stale values, and better wording.

AI may not decide which conflicting value is true based on recency, plausibility, convenience, averaging, or previous-year precedent.

Missing authority remains visible until resolved.

## 12. Programme vs Offering Identity — STRENGTHENED

Several specifications warned against mixing years.

### Resolution

Changing facts are conceptually attached to a current **Offering**, separate from stable **Programme** identity.

This reduces accidental 2026/2027 or term-to-term leakage.

## 13. Required / Recommended / Optional — STANDARDISED

These concepts occur across eligibility, packing, academics, and programme activity.

### Resolution

Canonical meanings are shared across specifications so UX cannot make advice look mandatory or optional conditions appear required.

## 14. Language-Version Authority — STRENGTHENED

Language versions can otherwise become separate copies of factual truth.

### Resolution

Japanese and English are presentation layers for changing facts. They may differ in wording/order, but factual authority remains with the relevant domain and shared structured data.

An editorial source language cannot override an authoritative programme fact.

## 15. What Was Intentionally Preserved

The audit did not remove domain-specific detail simply to make the handbook shorter.

The documentation rule is:

- centralise shared governance,
- preserve specialist domain guidance,
- allow repeated presentation when it helps students,
- eliminate competing authority and duplicated fact ownership.

## Final Assessment

Before the audit, Specs 12–20 were a strong set of individual specifications.

After horizontal consolidation, they function as one governed system.

The key improvement is that the handbook now answers four questions consistently:

1. Who owns this fact?
2. How certain is it?
3. Which views may display it?
4. What must be reviewed when it changes?

That is the point at which documentation begins to function as operational governance rather than a collection of good intentions.
