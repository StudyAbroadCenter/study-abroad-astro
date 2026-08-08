# RSJP Experience System Handbook

This handbook is the central reference for the RSJP Experience System.

It exists to keep product, brand, UX, UI, content, data, SEO, and engineering decisions consistent across:

- programme staff,
- developers,
- designers,
- content editors,
- ChatGPT,
- Codex,
- Claude Code,
- other AI coding agents.

## Core Outcome

A prospective student should be able to say:

> I understand the programme.  
> I trust the information.  
> I can imagine myself there.  
> I know whether it is right for me.  
> I know what to do next.

## Document Map

### Root operational files

- `PRINCIPLES.md` — the constitution
- `AGENTS.md` — AI implementation behaviour
- `PROJECT.md` — compact product direction
- `UX.md` — compact UX rules
- `DESIGN.md` — compact UI/design rules
- `CONTENT.md` — compact writing rules

### Formal specifications

Located in `docs/handbook/`:

- `00_OVERVIEW.md`
- `01_PROJECT_SPEC.md`
- `02_BRAND.md`
- `03_UX_SPEC.md`
- `04_DESIGN_SPEC.md`
- `05_CONTENT_SPEC.md`
- `06_COMPONENTS.md`
- `07_DATA.md`
- `08_SEO.md`
- `09_TECH.md`
- `10_ROADMAP.md`
- `11_DECISIONS.md`
- `12_PROGRAMME_PAGE_SPEC.md`
- `13_SYLLABUS_SPEC.md`
- `14_STUDENT_INTERACTION_SPEC.md`
- `15_ACCOMMODATION_SPEC.md`
- `16_SAFETY_SUPPORT_SPEC.md`
- `17_PROGRAMME_COMPARISON_SPEC.md`
- `18_BEFORE_YOU_APPLY_SPEC.md`
- `19_BEFORE_YOU_ARRIVE_SPEC.md`
- `20_FAQ_SPEC.md`
- `21_CROSS_SPEC_GOVERNANCE.md`

## Authority and Source-of-Truth Governance

For programme-facing facts, follow `docs/handbook/21_CROSS_SPEC_GOVERNANCE.md`.

The system does not use one universal document as the Source of Truth for every fact. Each fact domain has an authoritative owner/source. Programme Page, Comparison, and FAQ are derivative views and must not redefine facts owned by another domain.

When documents or data conflict:

1. treat the conflict as a publication blocker,
2. identify the authoritative fact domain,
3. resolve the fact from the current approved source/owner,
4. correct shared structured data where applicable,
5. propagate the resolved fact to every dependent view.

For principles and product direction, use this hierarchy when there is no factual-domain conflict:

1. `PRINCIPLES.md`,
2. `01_PROJECT_SPEC.md`,
3. accepted decisions in `11_DECISIONS.md`,
4. the relevant formal specification,
5. root operational files,
6. implementation details in code.

The repository remains the source of truth for what is currently implemented. The handbook is not permission to rewrite working code without a scoped reason.

## No-Invention Rule

Do not invent:

- dates,
- fees,
- capacity,
- eligibility,
- application periods,
- accommodation conditions,
- programme status,
- academic requirements,
- institutional claims,
- student outcomes,
- statistics,
- testimonials,
- rankings.

If information is unknown, represent it as unknown.

## Documentation Rule

Avoid duplicating long rules across files.

- Root files should be concise and operational.
- Formal specifications should contain full reasoning.
- Decisions should record exceptions and major changes.
- Code should contain implementation, not policy prose.

If the same question is repeatedly answered, document it in the appropriate handbook file.
