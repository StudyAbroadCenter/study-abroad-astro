# 23_SHARED_PROGRAMME_CONTENT_ARCHITECTURE.md

# RSJP Experience System — Shared Programme Content Architecture

## 1. Purpose

Programme information must not be copied independently into the website, FAQ, manual, English pages and Korean pages.

The system must support a single factual update propagating to every approved consumer without changing the meaning of the programme.

This is especially important for annual values such as dates, fees, application periods, accommodation fees, deadlines, programme status and other operational conditions.

## 2. Three content layers

### Layer A — Annual verified facts

Store year-specific values once per programme offering.

Examples:

- programme dates
- application period
- programme fee
- accommodation fee and dates
- campus
- learning minutes
- payment method
- refund amount
- annual capacity or status

These values must be locale-neutral wherever possible. Dates and numbers are data, not translated prose.

A new offering such as 2028 RWJP must receive its own annual fact record rather than overwriting the historical 2027 record.

### Layer B — Stable shared programme rules

Store programme rules that are reused across Website, Manual and FAQ under stable semantic IDs.

Examples:

- `rwjp.academic.class-placement`
- `rwjp.academic.grading`
- `rwjp.academic.transcript-and-certificate`
- `rwjp.culture.activity-model`

Each rule must state its certainty, source and verification date.

When a stable rule changes, change the rule once and review every consumer rather than editing copied paragraphs independently.

### Layer C — Localised editorial copy

Japanese, English and Korean wording may differ naturally, but each locale must reference the same Layer A facts and Layer B rules.

Do not place independent copies of dates, fees or eligibility facts inside translated page components when those values already exist in structured programme data.

Japanese remains the master editorial experience. English and Korean are independently naturalised text layers over the same factual core.

## 3. Annual change rule

When programme dates, fees, application periods or other annual data change:

1. create or update the relevant annual offering record;
2. do not search-and-replace the same number across page files;
3. website facts, FAQ answers, manual content and localised pages must read the same structured value;
4. CI or content validation should eventually fail when a required annual fact is missing;
5. previous-year records should remain auditable unless there is an explicit retention decision.

## 4. Localisation rule

A factual update is not a translation task.

For example, changing the 2028 programme fee must change one numeric fact. Japanese, English and Korean renderers should then format that fact appropriately without maintaining three separate fee values.

Narrative changes are different: if a programme rule or explanatory meaning changes, update the canonical shared rule first, then revise Japanese editorial wording and re-localise English and Korean as needed.

## 5. Shared-consumer rule

A shared knowledge entry may declare approved consumers:

- `website`
- `manual`
- `faq`

Future consumers may be added only when the content ownership and publication rules are clear.

Do not assume that every internal operational note belongs on the public website.

## 6. Certainty and publication

Every decision-critical fact or shared rule must have a certainty state and source.

Do not convert examples, common practice or past-year behaviour into confirmed annual commitments.

For example, RWJP commonly uses tea ceremony, calligraphy and zazen, but individual cultural activities are selected during programme arrangements. Until selected for a specific offering, they may be shown only as examples and must not be promised.

## 7. RWJP implementation baseline

The current RWJP implementation uses:

- `src/data/rwjp-2027-facts.ts` for 2027 annual verified facts;
- `src/data/rwjp-shared-knowledge.ts` for stable Website/Manual/FAQ knowledge;
- Japanese page components as consumers of those sources.

English and Korean implementations must consume the same factual and rule layers rather than fork them.

## 8. Release gate

A programme page is not publication-ready if:

- a decision-critical value is duplicated in multiple independent sources;
- translated pages carry their own separate facts;
- a common-practice example is presented as a confirmed annual activity;
- FAQ, Manual and Website contradict one another on the same programme rule.
