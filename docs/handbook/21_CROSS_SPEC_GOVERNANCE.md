# 21_CROSS_SPEC_GOVERNANCE.md

# RSJP Experience System — Cross-Spec Governance

**Version:** 1.0  
**Status:** Formal handbook specification  
**Applies to:** `12_PROGRAMME_PAGE_SPEC.md` through `20_FAQ_SPEC.md`

## 1. Purpose

This specification defines the shared governance rules for programme-facing content.

It exists to prevent:

- contradictory facts,
- duplicated authorities,
- terminology drift,
- stale previous-year information,
- different publication workflows for each content type,
- derivative pages becoming accidental Sources of Truth,
- unverified external information being treated as stable programme fact.

**One fact. One authoritative domain. Many consistent views.**

## 2. Truth Is a System Property

Accuracy is not achieved merely by careful copywriting.

For decision-critical information, the system should know:

- what the fact is,
- which programme/offering it belongs to,
- which domain owns it,
- what source supports it,
- whether it is confirmed,
- when it was last verified where practical,
- which views display it.

A polished page is not reliable when these relationships are unclear.

## 3. Authority Is Defined by Fact Domain

There is no single universal document that is authoritative for every type of fact.

Each changing fact belongs to one **authoritative domain**.

### 3.1 Programme Offering Domain

Authoritative for approved offering-level facts such as:

- official programme identity,
- offering/year/term,
- programme dates,
- programme status,
- duration,
- programme fee,
- capacity where approved,
- application period where approved.

Preferred authority:

- current approved offering record/decision,
- represented in shared structured programme data.

### 3.2 Academic Domain

Authoritative for:

- course title/code,
- learning outcomes,
- instructional/contact hours,
- course level,
- prerequisites,
- language of instruction,
- assessment,
- grading,
- attendance,
- academic materials,
- academic schedule.

Preferred authority:

- current approved syllabus,
- academic owner/approved academic source.

`13_SYLLABUS_SPEC.md` governs presentation and academic integrity.

### 3.3 Student Interaction Domain

Authoritative for:

- interaction model,
- formal buddy status,
- matching model,
- frequency,
- required/optional status,
- current offering availability/capacity,
- responsible interaction owner/group.

Preferred authority:

- current approved interaction plan,
- responsible operational/academic owner.

`14_STUDENT_INTERACTION_SPEC.md` governs this domain.

### 3.4 Accommodation Domain

Authoritative for:

- property/type,
- room type,
- occupancy,
- provision/guarantee condition,
- facilities,
- accommodation cost,
- accommodation-specific rules,
- check-in/out,
- commute facts.

Preferred authority:

- current booking/contract,
- provider confirmation,
- approved current accommodation arrangement.

`15_ACCOMMODATION_SPEC.md` governs this domain.

### 3.5 Safety & Support Domain

Authoritative for:

- programme support routes,
- support hours,
- emergency responsibility,
- insurance process,
- programme safety procedures,
- student-relevant escalation/support boundaries.

Preferred authority:

- current approved programme/university operational procedure,
- current insurer documentation,
- current authoritative public source for externally controlled facts.

`16_SAFETY_SUPPORT_SPEC.md` governs this domain.

### 3.6 Application Domain

Authoritative for:

- applicant types,
- application eligibility rules,
- required application documents,
- application workflow,
- application deadline,
- selection model,
- payment timing/process,
- cancellation/refund rules,
- application-system behaviour.

Preferred authority:

- approved current application guideline/policy,
- current approved application-system configuration,
- current offering data for shared programme facts.

`18_BEFORE_YOU_APPLY_SPEC.md` governs this domain.

### 3.7 Pre-Arrival Operations Domain

Authoritative for:

- accepted-student actions,
- current arrival instructions,
- arrival reporting,
- current check-in procedure,
- first-day logistics,
- operational communication channels.

Preferred authority:

- current approved accepted-student instructions,
- current operational confirmations.

`19_BEFORE_YOU_ARRIVE_SPEC.md` governs this domain.

## 4. Derivative Views Are Not Authorities

The following are primarily **derivative views**:

- `12_PROGRAMME_PAGE_SPEC.md`
- `17_PROGRAMME_COMPARISON_SPEC.md`
- `20_FAQ_SPEC.md`

They may present facts from authoritative domains, but must not independently redefine them.

If a derivative view conflicts with an authoritative domain:

1. do not choose whichever value appears newer,
2. do not silently fix only the derivative page,
3. stop publication/update,
4. resolve the authoritative fact with the real owner/source,
5. correct shared structured data where applicable,
6. propagate the resolved fact to all dependent views.

## 5. Source Precedence

When evidence conflicts, apply this precedence logic.

### Tier 1 — Current Approved Offering-Specific Authority

Examples:

- approved programme decision,
- approved current syllabus,
- current accommodation booking/provider confirmation,
- approved payment/refund rule,
- current operational safety procedure.

### Tier 2 — Current Authoritative External Source

Use when the fact is controlled outside the programme.

Examples:

- government immigration/entry guidance,
- public emergency information,
- current transport information,
- insurer documentation.

### Tier 3 — Shared Structured Data

Shared programme data should represent approved facts and power multiple views.

If shared data conflicts with Tier 1 or Tier 2, shared data must be corrected.

### Tier 4 — Published Page Copy

Published web copy records what was communicated, but it is not the authority for a conflicting fact.

### Tier 5 — Previous-Year Material / Staff Memory

Reference only.

Never authoritative for a current offering without re-verification.

## 6. Conflict Rule

**A detected factual conflict is a publication blocker.**

Do not resolve a conflict by:

- guessing,
- averaging,
- choosing the convenient value,
- choosing the value that sounds plausible,
- automatically choosing the newest-looking value,
- copying last year,
- asking AI to decide what must be true.

Record/raise the conflict and resolve it with the responsible authoritative source/owner.

## 7. Canonical Fact Certainty States

Fact certainty is separate from page/content workflow.

Use:

### `Confirmed`
Supported by the current authoritative source/domain.

### `Provisional`
A real current plan/value exists but is not final.

If shown publicly, its provisional nature must be clear where material.

### `Unknown`
The current value is not known or has not been verified.

Do not display a placeholder value.

### `Not Applicable`
The concept genuinely does not apply to the offering.

Do not confuse `Unknown` with `Not Applicable`.

## 8. Public Wording for Unconfirmed Facts

### `To be confirmed`
Use when a real decision is genuinely pending.

### `Subject to change`
Use only when a current real plan exists but may legitimately change.

It is not a synonym for `Unknown`.

### `Not available yet`
Use only when the information is genuinely expected later.

### `Not applicable`
Use when the concept does not apply.

Do not use:

- `0`,
- fake dates,
- blanks that resemble errors,
- previous-year values,
- invented estimates.

## 9. Canonical Content Lifecycle

Use one lifecycle across Specs 12–20:

1. `Draft`
2. `Fact Check Required`
3. `Review`
4. `Ready for Publication`
5. `Published`
6. `Archived`

These are **content lifecycle states**.

Do not create independent lifecycle vocabularies for individual domains.

## 10. Canonical Review Flags

Domain-specific checks are **review flags**, not new lifecycle states.

Possible flags include:

- `Academic Approval Required`
- `Provider Confirmation Required`
- `Contact Verification Required`
- `Application System Check Required`
- `Cross-Programme Consistency Check Required`
- `Operational Review Required`
- `External Source Recheck Required`
- `Translation Review Required`

Multiple flags may apply simultaneously.

A blocking flag must be resolved before `Ready for Publication`.

## 11. Programme / Application Status Vocabulary

Use one underlying status vocabulary across public views:

- `Coming Soon`
- `Open`
- `Closed`
- `Full`
- `Cancelled`

Display labels may be localised naturally, but the underlying value must remain consistent.

`Open` must not be inferred merely from the current date unless an approved business rule explicitly defines this and the application path is actually available.

## 12. Guarantee Vocabulary

Use guarantee language only when operationally defensible.

### `Guaranteed`
The programme commits to the stated provision for eligible participants under the defined offering conditions.

### `Conditional`
Provision depends on an explicitly defined condition.

### `Optional`
May be selected/available but is not required.

### `Not Provided`
The programme does not provide it.

### `Unknown`
Current provision has not been verified.

`Subject to availability` is a condition, not a standalone guarantee state.

Never use `Guaranteed` for outcomes outside programme control, including friendship, visa approval, external credit recognition, medical outcome, transport performance, or insurance claim outcome.

## 13. Required / Recommended / Optional

Use consistently:

### `Required`
Must be completed/satisfied.

### `Recommended`
Strongly advised but not mandatory.

### `Optional`
May be chosen and is not required.

Do not make recommended items appear mandatory through visual treatment.

## 14. Current Offering Identity

Every changing fact must be attributable to an offering.

Internally distinguish at minimum:

- stable Programme identity,
- current Offering/year/term.

Offering-specific facts include dates, fees, status, capacity, application period, accommodation, interaction plan, schedule, and current operational contacts where applicable.

Never silently merge facts from different years/terms.

## 15. Previous-Year Rule

Previous-year content is reference material only.

It may accelerate drafting but may not establish a current fact.

Re-verification is required even when:

- the value has historically remained unchanged,
- the same provider is expected,
- staff expect no change,
- the programme name is unchanged.

`Probably the same` is not a current fact.

## 16. Shared Data Rule

Where a fact appears in multiple public views, store/derive it from a shared structured source where practical.

High-priority shared facts include:

- programme name,
- offering,
- dates,
- duration,
- fee,
- application period,
- programme status,
- location,
- major eligibility facts,
- application URL/state.

Do not centralise editorial prose merely because structured facts are centralised.

## 17. Structured Facts vs Domain Rules vs Editorial Copy

Separate:

### Structured Facts
Values that should remain identical across views.

### Domain Rules
Policies/conditions controlled by the responsible domain.

### Editorial Explanation
Student-facing language that may vary by page/language while preserving facts.

### Derived Values
Calculated/formatted values produced from authoritative facts.

Do not manually re-enter derived values where they can be produced reliably from source data.

## 18. Derived Values

Derived values must have one defined calculation/formatting rule.

Examples:

- formatted duration,
- total contact hours,
- status label,
- fee display,
- date range.

If a value cannot be derived without assumptions, do not derive it.

## 19. Currency

Preserve authoritative amount and currency.

Foreign-currency conversions are derived and non-authoritative.

Do not freeze approximate conversions into permanent copy unless intentionally maintained and clearly labelled.

## 20. Dates and Time Zones

Use one approved date style per language/site context.

For international deadlines/meetings, specify the time zone when exact timing matters.

Avoid ambiguous numeric-only dates for international audiences.

## 21. Academic Time

Where instructional load is shown, distinguish:

- number of sessions,
- minutes per session,
- total instructional minutes,
- clock hours where useful.

Do not treat a class period as 60 minutes unless it actually is.

## 22. External Volatile Facts

Some facts are controlled outside the programme and can change quickly:

- visa/entry requirements,
- transport routes,
- weather forecasts,
- government rules,
- insurer policy details.

For such facts:

1. use a current authoritative external source,
2. record/recheck verification date where operationally useful,
3. avoid freezing unstable detail into evergreen copy when linking to the authority is safer,
4. recheck before high-stakes use.

## 23. Current Operational Facts

Programme-controlled facts can also change quickly, including:

- emergency contact,
- check-in process,
- application URL,
- accommodation assignment,
- first-day meeting point.

These require current-offering verification and change propagation.

## 24. Cross-Spec Authority Matrix

| Fact / Topic | Primary Authority | Main Presentation Specs |
|---|---|---|
| Programme identity/status/dates/duration/fee | Programme Offering Domain | 12, 17, 18 |
| Academic content/contact hours/assessment | Academic Domain / 13 | 12, 13, 17, 18, 20 |
| Student interaction | Student Interaction Domain / 14 | 12, 14, 17, 20 |
| Accommodation | Accommodation Domain / 15 | 12, 15, 17, 18, 19, 20 |
| Safety/support/insurance process | Safety & Support Domain / 16 | 12, 16, 18, 19, 20 |
| Application/eligibility/payment/refund | Application Domain / 18 | 12, 17, 18, 20 |
| Arrival/check-in/first-day operations | Pre-Arrival Operations Domain / 19 | 19, 20 |
| Comparison | Derivative / 17 | 17 |
| FAQ | Derivative / 20 | 20 |

A presentation specification never overrides its primary authority.

## 25. Change Propagation Matrix

### Programme dates/status/fee changed
Review:

- 12 Programme Page
- 17 Comparison
- 18 Before You Apply
- 19 Before You Arrive where affected
- 20 FAQ

### Academic fact changed
Review:

- 13 Syllabus
- 12 Programme Page
- 17 Comparison
- 18 Before You Apply
- 20 FAQ

### Student Interaction changed
Review:

- 14 Student Interaction
- 12 Programme Page
- 17 Comparison
- 20 FAQ

### Accommodation changed
Review:

- 15 Accommodation
- 12 Programme Page
- 17 Comparison
- 18 Before You Apply
- 19 Before You Arrive
- 20 FAQ

### Safety / Support changed
Review:

- 16 Safety & Support
- 12 Programme Page
- 18 Before You Apply
- 19 Before You Arrive
- 20 FAQ

### Application rule changed
Review:

- 18 Before You Apply
- 12 Programme Page
- 17 Comparison
- 20 FAQ
- 19 Before You Arrive if accepted-student instructions are affected

## 26. Contradiction Audit

Before a major offering is published, check at minimum:

- dates,
- duration,
- programme fee,
- application status,
- application deadline,
- eligibility,
- language requirements,
- accommodation,
- academic contact hours,
- insurance/support claims,
- CTA destination.

A contradiction must be resolved upstream before publication.

## 27. CTA Governance

CTA is derived from real programme/application status and verified application-system state.

### Coming Soon
No active application CTA unless an approved pre-application/interest mechanism is explicitly labelled as such.

### Open
Application CTA may be active only when the real application route is available.

### Closed
No active application CTA.

### Full
No active application CTA unless a genuine approved waitlist route exists.

### Cancelled
No application CTA.

CTA wording is not an independent marketing fact.

## 28. URL / External System Governance

Critical links must be verified where they affect application, payment, insurance, official government guidance, or arrival operations.

A working URL can still point to the wrong year/process. Do not treat HTTP success as factual validity.

## 29. Public vs Internal Information

Truth requires traceability, not public disclosure of every internal detail.

Public pages show what students need. Internal records may hold owner, source, approvals, review flags, internal contacts, and escalation procedures.

## 30. Ownership

Every authoritative fact domain should have a real responsible role/process.

This document does not invent job titles or named owners.

If a decision-critical fact has no known owner/source, that is a governance problem and may block publication.

## 31. AI Rule

AI may:

- reorganise verified information,
- identify conflicts,
- identify missing facts,
- propose clearer wording,
- generate implementation structure,
- flag stale/duplicated values.

AI must not:

- decide which conflicting fact is true without authoritative evidence,
- infer an unverified current value,
- convert last year's value into this year's fact,
- fabricate a missing policy,
- invent an external rule,
- turn a plausible assumption into public content.

When authoritative evidence is missing, AI should expose the gap.

## 32. Minimum Verification Record

For decision-critical facts, record where practical:

- fact/value,
- programme/offering,
- authoritative domain,
- source,
- certainty state,
- owner,
- last verified date,
- affected views.

Implementation may use a data file, future CMS, internal register, or another approved mechanism.

The governance requirement matters more than the tool.

## 33. Definition of Done

Cross-spec governance is functioning when:

- each decision-critical fact has one authoritative domain,
- derivative views do not redefine facts,
- one lifecycle vocabulary is used,
- fact certainty is separate from workflow,
- previous-year values are not treated as current without verification,
- conflicts block publication,
- material changes trigger dependent-view review,
- volatile external facts are rechecked appropriately,
- repeated structured facts come from shared data where practical,
- AI exposes uncertainty instead of filling it.

## 34. Final Standard

A student should never need to wonder which page is correct.

Staff should never need to guess which document is authoritative.

AI should never be asked to choose between conflicting facts.

**The system should make the correct fact easier to preserve than the incorrect one.**
