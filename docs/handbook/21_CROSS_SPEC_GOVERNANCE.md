# 21_CROSS_SPEC_GOVERNANCE.md

# RSJP Experience System — Cross-Spec Governance

**Version:** 1.1  
**Status:** Formal handbook specification  
**Applies to:** `12_PROGRAMME_PAGE_SPEC.md` through `20_FAQ_SPEC.md`

## 1. Purpose

This specification defines shared governance for programme-facing content.

It exists to prevent:

- contradictory facts,
- duplicated authorities,
- terminology drift,
- stale previous-year information,
- derivative pages becoming accidental Sources of Truth,
- AI choosing between conflicting values,
- unverified external information being treated as stable programme fact.

**One fact. One authoritative domain. Many consistent views.**

## 2. Truth Is a System Property

Accuracy requires more than careful copywriting.

For every decision-critical changing fact, the system should know where practical:

- the fact/value,
- programme/offering identity,
- authoritative domain,
- supporting source,
- certainty state,
- responsible owner,
- last verification date,
- dependent views.

A polished page is not reliable when these relationships are unclear.

## 3. Authoritative Domains

There is no single universal document that owns every fact. Each fact type belongs to one authoritative domain.

### 3.1 Programme Offering Domain

Authoritative for approved offering-level facts such as:

- official programme identity,
- offering/year/term,
- programme dates,
- programme status,
- duration,
- programme fee,
- capacity where approved,
- campus/location where approved.

Preferred authority:

- current approved offering record or programme decision,
- represented in shared structured programme data.

**The application opening/closing period does not belong to this domain. It belongs to the Application Domain.**

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
- approved academic owner/source.

`13_SYLLABUS_SPEC.md` governs this domain.

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
- guarantee/condition,
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
- student-relevant support boundaries.

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
- **application opening date**, 
- **application closing date/deadline**, 
- **application period**, 
- application workflow,
- selection model,
- payment timing/process,
- cancellation/refund rules,
- application-system behaviour.

Preferred authority:

- approved current application guideline/policy,
- current approved application-system configuration,
- current approved application decision/owner.

`18_BEFORE_YOU_APPLY_SPEC.md` governs this domain.

Programme pages and shared programme data may display the application period, but they do not own it.

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

## 4. Derivative Views

The following are primarily derivative views:

- `12_PROGRAMME_PAGE_SPEC.md`
- `17_PROGRAMME_COMPARISON_SPEC.md`
- `20_FAQ_SPEC.md`

They may present facts from authoritative domains but may not independently redefine those facts.

If a derivative view conflicts with an authoritative domain:

1. do not choose whichever value appears newer,
2. do not fix only the derivative page,
3. block publication/update,
4. resolve the fact with the real authoritative source/owner,
5. correct shared structured data where applicable,
6. propagate the resolved value to dependent views.

## 5. Source Precedence

When evidence conflicts, use this logic.

### Tier 1 — Current Approved Domain Authority

Examples:

- approved programme decision,
- approved current syllabus,
- current accommodation booking/provider confirmation,
- approved application/payment/refund rule,
- current operational safety procedure.

### Tier 2 — Current Authoritative External Source

Use when the fact is controlled outside the programme.

Examples:

- government immigration/entry guidance,
- public emergency information,
- current transport information,
- insurer documentation.

### Tier 3 — Shared Structured Data

Shared data should represent approved facts and power multiple views.

If it conflicts with Tier 1 or Tier 2, shared data must be corrected.

### Tier 4 — Published Page Copy

Published copy records what was communicated. It is not authority for a conflicting fact.

### Tier 5 — Previous-Year Material / Staff Memory

Reference only. Never authoritative for a current offering without re-verification.

## 6. Conflict Rule

**A detected factual conflict is a publication blocker.**

Do not resolve conflicts by:

- guessing,
- averaging,
- choosing the convenient value,
- choosing the plausible value,
- automatically choosing the newest-looking value,
- copying last year,
- asking AI to decide what must be true.

Resolve the conflict with the responsible authoritative source/owner.

## 7. Canonical Fact Certainty

Fact certainty is separate from content workflow.

Use:

- `Confirmed` — supported by the current authoritative source.
- `Provisional` — a real current plan exists but is not final.
- `Unknown` — the current value is not known or verified.
- `Not Applicable` — the concept genuinely does not apply.

Do not confuse `Unknown` and `Not Applicable`.

### Public wording

- `To be confirmed` — a real decision is pending.
- `Subject to change` — a current real plan exists but may legitimately change.
- `Not available yet` — information is genuinely expected later.
- `Not applicable` — the concept does not apply.

Do not use fake dates, zero values, previous-year values, blanks that resemble errors, or invented estimates.

## 8. Canonical Content Lifecycle

Use one lifecycle across Specs 12–20:

1. `Draft`
2. `Fact Check Required`
3. `Review`
4. `Ready for Publication`
5. `Published`
6. `Archived`

Domain-specific checks are review flags, not alternative lifecycle states.

Possible flags include:

- `Academic Approval Required`
- `Provider Confirmation Required`
- `Contact Verification Required`
- `Application System Check Required`
- `Cross-Programme Consistency Check Required`
- `Operational Review Required`
- `External Source Recheck Required`
- `Translation Review Required`

A blocking flag must be resolved before `Ready for Publication`.

## 9. Canonical Programme/Application Status

Use one underlying status vocabulary:

- `Coming Soon`
- `Open`
- `Closed`
- `Full`
- `Cancelled`

Display labels may be localised, but the underlying value must stay consistent.

`Open` must not be inferred merely from the current date unless an approved rule explicitly defines that behaviour and the real application path is available.

## 10. Guarantee Vocabulary

Use only when operationally defensible:

- `Guaranteed`
- `Conditional`
- `Optional`
- `Not Provided`
- `Unknown`

`Subject to availability` is a condition, not a standalone guarantee state.

Never guarantee outcomes outside programme control, including friendship, visa approval, external credit recognition, medical outcome, transport performance, or insurance claim outcome.

## 11. Required / Recommended / Optional

Use consistently:

- `Required` — must be completed or satisfied.
- `Recommended` — strongly advised but not mandatory.
- `Optional` — may be chosen and is not required.

`Preferred` is not a canonical eligibility state. If a formal selection preference exists, describe it as a selection criterion in the Application Domain rather than as an eligibility category.

## 12. Current Offering Identity

Every changing fact must be attributable to the relevant current offering.

Distinguish:

- stable Programme identity,
- current Offering/year/term.

Never silently mix facts from different years or terms.

## 13. Previous-Year Rule

Previous-year content is reference material only.

It may accelerate drafting but may not establish a current fact.

Re-verification is required even when staff expect no change or a value historically remained the same.

**Probably the same is not a current fact.**

## 14. Shared Structured Data

Where a fact appears in multiple views, store/derive it from a shared structured source where practical.

High-priority shared facts include:

- programme name,
- offering,
- programme dates,
- duration,
- fee,
- programme status,
- location,
- application period,
- major eligibility facts,
- application URL/state.

Shared storage does not transfer authority. For example, an application period stored in shared programme data is still owned by the Application Domain.

## 15. Structured Facts, Rules, Copy, and Derived Values

Separate:

- **Structured facts** — values that should remain identical across views.
- **Domain rules** — policies/conditions controlled by the responsible domain.
- **Editorial copy** — student-facing explanation that may vary while preserving facts.
- **Derived values** — calculated/formatted values produced from authoritative facts.

A derived value must use one defined rule. If it requires assumptions, do not derive it.

## 16. Currency, Dates, and Academic Time

Preserve authoritative fee amount and currency. Foreign-currency conversions are derived and non-authoritative.

Use an unambiguous date style for international audiences. Specify time zone when exact deadline timing matters.

For academic load distinguish sessions, minutes per session, total instructional minutes, and clock hours where useful.

## 17. Volatile External Facts

Examples include:

- visa/entry requirements,
- transport routes,
- weather forecasts,
- government rules,
- insurer-controlled policy details.

Use a current authoritative external source, recheck when stakes are high, and avoid freezing unstable details into evergreen copy when linking to the authority is safer.

## 18. Current Operational Facts

Programme-controlled facts may also change quickly, including:

- emergency contact,
- check-in process,
- application URL,
- accommodation assignment,
- first-day meeting point.

These require current-offering verification and change propagation.

## 19. Cross-Spec Authority Matrix

| Fact / Topic | Primary Authority | Main Presentation Specs |
|---|---|---|
| Programme identity/status/dates/duration/fee | Programme Offering Domain | 12, 17, 18 |
| Application period/deadline/eligibility/payment/refund | Application Domain / 18 | 12, 17, 18, 20 |
| Academic content/contact hours/assessment | Academic Domain / 13 | 12, 13, 17, 18, 20 |
| Student interaction | Student Interaction Domain / 14 | 12, 14, 17, 20 |
| Accommodation | Accommodation Domain / 15 | 12, 15, 17, 18, 19, 20 |
| Safety/support/insurance process | Safety & Support Domain / 16 | 12, 16, 18, 19, 20 |
| Arrival/check-in/first-day operations | Pre-Arrival Operations Domain / 19 | 19, 20 |
| Comparison | Derivative / 17 | 17 |
| FAQ | Derivative / 20 | 20 |

A presentation specification never overrides its primary authority.

## 20. Change Propagation

### Programme dates/status/fee changed
Review 12, 17, 18, 19 where affected, and 20.

### Application period/deadline/eligibility/payment/refund changed
Review 18, 12, 17, 20, and 19 where accepted-student instructions are affected.

### Academic fact changed
Review 13, 12, 17, 18, and 20.

### Student Interaction changed
Review 14, 12, 17, and 20.

### Accommodation changed
Review 15, 12, 17, 18, 19, and 20.

### Safety / Support changed
Review 16, 12, 18, 19, and 20.

## 21. Contradiction Audit

Before a major offering is published, check at minimum:

- programme dates,
- duration,
- programme fee,
- application status,
- application opening/closing dates,
- eligibility,
- language requirements,
- accommodation,
- academic contact hours,
- insurance/support claims,
- CTA destination.

A contradiction must be resolved upstream before publication.

## 22. CTA Governance

CTA behaviour derives from real programme/application status and verified application-system state.

- `Coming Soon` — no active application CTA unless a real pre-application mechanism is explicitly labelled.
- `Open` — application CTA only when the real application route is available.
- `Closed` — no active application CTA.
- `Full` — no active application CTA unless a real approved waitlist exists.
- `Cancelled` — no application CTA.

CTA wording is not an independent marketing fact.

## 23. Critical URLs and External Systems

Verify links that affect application, payment, insurance, government guidance, or arrival operations.

A URL returning successfully can still point to the wrong year or process.

## 24. Public vs Internal Information

Public pages show what students need.

Internal records may hold owners, sources, approvals, review flags, contact verification, and escalation procedures.

Truth requires traceability, not public disclosure of every internal detail.

## 25. Ownership

Every authoritative domain should have a real responsible role/process.

This specification does not invent job titles or named owners.

If ownership of a decision-critical fact is unknown, resolve that governance gap before strong public claims are made.

## 26. AI Rule

AI may:

- reorganise verified information,
- identify conflicts,
- propose clearer wording,
- generate implementation structure,
- flag missing data.

AI must not:

- choose which conflicting fact is true,
- infer an unverified current value,
- turn last year's value into this year's fact,
- fabricate a missing policy,
- invent an external rule.

When authoritative evidence is missing, expose the gap.

## 27. Minimum Verification Record

For decision-critical facts, record where practical:

- fact/value,
- programme/offering,
- domain,
- source,
- certainty state,
- owner,
- last verified date,
- affected views.

The implementation may later use data files, a CMS, or another approved mechanism. Governance matters more than the tool.

## 28. Definition of Done

Cross-spec governance is functioning when:

- every decision-critical fact has one authoritative domain,
- derivative pages do not redefine facts,
- application opening/closing dates have one owner,
- canonical terminology is used,
- fact certainty is separate from workflow,
- previous-year values are never treated as current without verification,
- conflicts block publication,
- material changes propagate to dependent views,
- volatile external facts are rechecked,
- shared structured data powers repeated facts where practical,
- AI exposes uncertainty rather than filling it.

## 29. Final Standard

A student should never need to wonder which page is correct.

Staff should never need to guess which document is authoritative.

AI should never be asked to choose between conflicting facts.

**The system should make the correct fact easier to preserve than the incorrect one.**
