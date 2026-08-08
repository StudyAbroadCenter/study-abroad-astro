# 03_UX_SPEC.md

# RSJP Experience System — UX Specification

## UX Objective

Reduce uncertainty and decision friction while preserving trust.

The UX must help a prospective student understand:

- what the programme is,
- whether it fits them,
- what it costs,
- what it requires,
- what they will experience,
- what happens next.

## Primary Journeys

### Journey A — First-Time Visitor

Typical sequence:

1. arrival from search/social/referral,
2. understand programme/site identity,
3. see key value,
4. discover available programmes,
5. compare or choose,
6. inspect essential facts,
7. understand experience,
8. inspect accommodation/practicalities,
9. review eligibility/FAQ,
10. apply or contact.

The exact page order may vary, but the decision sequence should remain coherent.

### Journey B — Returning Applicant

Prioritise fast access to:

- application status,
- deadlines,
- guidelines,
- fee,
- application action,
- contact.

Do not force returning users through promotional content again.

### Journey C — Partner/Advisor

Allow efficient access to:

- programme structure,
- academic content,
- dates,
- fees,
- eligibility,
- support,
- contact.

Do not restructure the whole site around institutional users.

## Information Priority

### Tier 1 — Decision Critical

- programme identity,
- status,
- dates,
- duration,
- fee,
- eligibility,
- application timing,
- primary CTA.

### Tier 2 — Confidence Building

- academic experience,
- cultural/student experience,
- accommodation,
- campus/location,
- support,
- inclusions/exclusions.

### Tier 3 — Operational Detail

- detailed policies,
- special conditions,
- administrative procedures.

Tier 3 information should not obscure Tier 1.

## Progressive Disclosure

Use progressive disclosure when:

- details are needed by some users but not all,
- policy text is long,
- exceptions would overwhelm the primary path.

Do not hide essential facts behind accordions solely to make the page look cleaner.

## Navigation

Navigation must support user intent, not organisational charts.

Keep top-level choices limited and meaningful.

Avoid deep nested menus.

## Search and Findability

Where site scale justifies it, search may be useful.

Do not add search merely because large websites have it.

Before adding search, confirm there is enough content and real user need.

## Programme Comparison

Use comparison only when programmes share enough decision dimensions to make side-by-side comparison useful.

Common dimensions may include:

- duration,
- season,
- location,
- language intensity,
- fee,
- accommodation,
- eligibility.

Do not force incomparable programmes into artificial tables.

## CTA Strategy

Each page should have a dominant next action where appropriate.

Primary CTA prominence should reflect readiness.

Examples:

- programme overview → `View Programme`
- detailed programme page → `Apply Now`
- pre-launch programme → `View Details` or approved interest/contact action
- closed programme → do not show an active apply CTA.

## Status UX

Status must be visible, textual, and consistent.

Never communicate status through colour alone.

If status prevents application, CTA behaviour must match.

## Forms

### Principles

- ask only what is needed,
- group fields logically,
- label clearly,
- preserve entered data when possible,
- show errors near the problem,
- explain recovery.

### Error Messages

Tell the user:

- what went wrong,
- what to do next.

Avoid codes and technical implementation language.

## Mobile UX

At 390px:

- primary message should be visible quickly,
- key facts should be scannable,
- CTA should be easy to find,
- controls should be comfortable to tap,
- no essential content should depend on hover.

At 320px:

- layouts may simplify,
- important content must remain readable,
- horizontal scrolling should not be required for ordinary content.

## Accessibility

UX decisions must account for:

- keyboard users,
- screen-reader users,
- reduced-motion preferences,
- colour-vision differences,
- zoom,
- readable touch targets.

## Empty / Unknown / Coming Soon

Use honest states.

Examples:

- `Applications are not open yet.`
- `Dates will be announced when confirmed.`

Do not show placeholder values that resemble confirmed programme facts.

## Performance as UX

Fast response and stable layout are part of usability.

Do not use heavy interaction patterns where static content is sufficient.

## UX Review Questions

For every major page:

1. What question brought the user here?
2. Is the answer visible quickly?
3. What is the next likely question?
4. Is the next action obvious?
5. Are essential facts buried?
6. Is any university structure exposed without user value?
7. Does mobile preserve the same decision quality?
8. What happens when information is missing?
9. What happens when the user makes an error?
10. Can the same outcome be achieved with less friction?
