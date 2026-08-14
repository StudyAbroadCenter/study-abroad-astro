# 22_LOCALISATION_SPEC.md

# RSJP Experience System — Multilingual & Localisation Specification

## 1. Purpose

This specification defines how the RSJP Experience System is authored and maintained in Japanese, English, and Korean.

The Japanese website is the **master product experience**. It is the baseline for information architecture, verified programme meaning, page structure, visual direction, photography, component behaviour, and editorial decisions.

English and Korean are not secondary-quality translations. They are professionally localised versions derived from the approved Japanese master and the same verified programme facts.

The goal is one RSJP product family with three natural language experiences, not one original page plus two machine translations.

## 2. Master Site and Delivery Order

Development and editorial approval shall proceed in this order:

1. Japanese — master version
2. English — localised from the approved Japanese master and verified facts
3. Korean — localised after Japanese and English are stable

Do not develop all three languages simultaneously while programme facts, structure, photography, UX, or visual direction are still changing.

A major page should normally pass the Japanese completion gate before English localisation begins.

## 3. Canonical URL Architecture

Japanese is the main public site and therefore uses **unprefixed canonical URLs**.

Canonical routes:

- Japanese home: `/`
- Japanese pages: `/<page>/`
- Japanese programme pages: `/programs/<id>/`
- English home: `/en/`
- English pages: `/en/<page>/`
- Korean home: `/ko/`
- Korean pages: `/ko/<page>/`

### 3.1 Japanese Must Not Use `/ja/` as the Canonical Route

Do not expose `/ja/` as the normal Japanese URL.

Legacy `/ja/` URLs may remain only as redirects for backward compatibility. They must redirect to the equivalent unprefixed Japanese URL.

Examples:

- `/ja/` → `/`
- `/ja/programs/rdsp/` → `/programs/rdsp/`

Do not create new links, canonical tags, sitemap entries, or navigation paths that point to `/ja/`.

### 3.2 Root Behaviour

`/` is Japanese by project decision.

Do not automatically redirect `/` to English based on browser language.

Browser language may later be used to suggest another locale, but explicit user choice always wins.

Changing the root language away from Japanese requires an explicit project-level decision and this specification must be updated first.

## 4. What the Japanese Master Controls

The approved Japanese site is the baseline for:

- site information architecture,
- page hierarchy,
- programme discovery flow,
- section order and core story,
- visual system,
- typography hierarchy,
- photography and media direction,
- component behaviour,
- CTA placement,
- mobile interaction patterns,
- intended meaning of explanatory content.

English and Korean should normally preserve this product experience.

Localisation may change wording, paragraph length, heading wording, line breaks, explanatory order inside a section, CTA wording, and culturally necessary clarification when this improves natural communication without changing facts or product intent.

## 5. Core Rule: Same Facts, Different Writing

All languages must preserve the same verified programme facts.

The following must not differ between locales unless the programme itself explicitly has language-specific conditions:

- programme name and code,
- dates,
- fees,
- application periods and deadlines,
- eligibility,
- minimum and maximum enrolment,
- programme status,
- accommodation conditions,
- campus/location,
- academic requirements,
- language requirements,
- credit status,
- cancellation or refund conditions,
- application procedure,
- contact destination.

Preserve facts and intent, not sentence structure.

## 6. Japanese Editorial Standard

Japanese is the master editorial version.

Japanese copy should be professional, friendly, concise, student-centred, and understandable without knowledge of Japanese university administration.

Avoid internal terminology unless necessary, excessive administrative formality, long noun chains, vague promotional claims, unexplained abbreviations, and unnecessary English inside Japanese prose.

English terms may remain when they are official programme names, recognised technical terms, deliberate short visual labels, or clearer than an artificial Japanese translation.

Decorative English and actual English-language content must not be confused.

## 7. English Localisation Standard

English must not be produced by sentence-by-sentence translation of Japanese.

The English version must read as if it were originally written in English for prospective international university students.

Prefer short sentences, direct verbs, familiar international English, clear headings, explicit dates and conditions, and practical explanations before promotional language.

Avoid literal Japanese sentence order, bureaucratic university English, generic AI marketing copy, exaggerated claims, and slogans created only to mirror Japanese wordplay.

### Native-Natural Gate

Before an English page is approved, ask:

> Would an English-speaking prospective student reasonably believe this page was written for them in English rather than translated from Japanese?

If not, rewrite it. Do not merely polish the translation.

Naturalisation must never change programme facts.

## 8. Korean Localisation Standard

Korean is authored after the Japanese master and English version are stable.

Do not mechanically translate the English version alone.

Use the approved Japanese master, approved English localisation, and verified programme facts as controlled references.

Korean should read naturally to Korean university students considering short-term study in Japan. Avoid carrying Japanese administrative phrasing directly into Korean when a clearer Korean explanation is available.

Programme facts must remain identical to the verified source data.

## 9. Language Switcher

Do not show a language option that leads to a missing, misleading, or substantially unfinished locale.

During the Japanese-completion phase, it is acceptable to hide English and Korean links.

When English is ready, enable English navigation to `/en/` and equivalent English routes.

When Korean is ready, enable Korean navigation to `/ko/` and equivalent Korean routes.

From English or Korean, the Japanese option must point to the equivalent **unprefixed** Japanese route, never `/ja/`.

The switcher must be keyboard accessible and must not rely on client-side text replacement.

## 10. Shared Facts vs Localised Copy

Do not maintain programme facts independently inside three page implementations.

Where practical, separate locale-neutral facts such as codes, dates, fees, capacity, campus identifiers, deadlines, status, credit status, and accommodation availability from locale-specific copy such as headings, lead paragraphs, FAQ wording, CTA wording, captions, and alt text.

Do not create three independent fact stores.

## 11. Source-of-Truth Hierarchy

For programme-facing content, use this order:

1. verified programme source documents/data,
2. approved structured programme facts in the repository,
3. approved Japanese master editorial copy and page intent,
4. approved English localisation,
5. approved Korean localisation.

The Japanese master controls editorial intent and product structure, but it never overrides a verified factual source.

If sources conflict, stop and surface the conflict.

## 12. Content Structure and IDs

Use stable semantic identifiers for localised content when localisation data is separated from presentation.

Prefer identifiers representing meaning or page role, for example:

- `programme.hero.title`
- `programme.hero.lead`
- `programme.facts.fee_label`
- `programme.application.cta`

Avoid keys derived from full Japanese sentences.

Keep content grouped by page or domain so programme staff can audit it without navigating one huge translation file.

## 13. Visual Design Across Languages

The Japanese master defines the design baseline.

English and Korean should preserve the overall visual identity, component family, spacing logic, imagery, colour system, interaction model, and information hierarchy.

Exact line breaks must not be forced to match Japanese. Layouts must tolerate English and Korean text expansion.

Review at minimum:

- 320px,
- 390px,
- tablet,
- desktop.

Check especially navigation, buttons, badges, cards, headings, tables/fact grids, captions, and the language switcher.

## 14. Typography

Use font stacks that fully support the required scripts.

Do not solve Korean or Japanese rendering problems with visibly inconsistent fallback fonts.

Typography may use locale-appropriate font stacks while preserving the hierarchy established by the Japanese master.

## 15. SEO, Canonical, and `hreflang`

Each locale must have language-specific page title, meta description, Open Graph text where applicable, canonical URL, and document `lang`.

Japanese canonical URLs are unprefixed.

Examples:

- Japanese canonical: `/programs/rdsp/`
- English canonical: `/en/programs/rdsp/`
- Korean canonical: `/ko/programs/rdsp/`

Use `hreflang` relationships between equivalent pages. The Japanese alternate must point to the unprefixed route.

Legacy `/ja/` redirect routes must not be canonical or appear as sitemap targets.

## 16. Accessibility

Declare the correct document language for every locale.

Alt text must be authored naturally in the page language. Do not mechanically reuse Japanese alt text for English or Korean.

Language controls must be keyboard accessible and clearly labelled.

Decorative English inside Japanese pages must not create misleading accessibility output.

## 17. Programme Names and Proper Nouns

Maintain a controlled glossary for official programme names, campus names, university names, college/faculty names, staff titles, accommodation names, application-system names, and recurring technical terms.

Where an official English name exists, use it rather than inventing a translation.

Do not allow the same proper noun to drift between pages.

## 18. Review Gates

### Gate A — Japanese Master Complete

Before English authoring begins for a page:

- programme facts are verified,
- Japanese information architecture is stable,
- Japanese copy is reviewed,
- visual design is approved,
- photography/media choices are approved or clearly provisional,
- placeholders are removed or explicitly tracked,
- CTA and navigation behaviour are complete,
- mobile layout is acceptable at 320px and 390px,
- no known factual conflict remains,
- canonical URL uses the unprefixed Japanese route.

### Gate B — English Complete

Before English is approved:

- facts match the verified source,
- product intent and hierarchy match the Japanese master,
- English is naturally rewritten rather than literally translated,
- headings and CTAs are idiomatic,
- responsive layout is checked,
- metadata is localised,
- no accidental Japanese placeholder prose remains.

### Gate C — Korean Complete

Before Korean is approved:

- facts match the verified source,
- product intent and hierarchy match the Japanese master,
- Korean reads as natural Korean communication,
- terminology is consistent,
- responsive layout is checked,
- metadata is localised,
- no accidental Japanese or English placeholder prose remains.

## 19. AI and Automated Translation

AI may assist with drafting and comparison, but AI output is not automatically approved content.

AI must not invent missing facts, silently resolve conflicting facts, turn historical or provisional content into current information, invent official names, change programme conditions for fluency, or independently redesign a locale without a documented reason.

Use AI for language production only after the factual source and Japanese master intent are controlled.

## 20. Change Management

When a programme fact changes:

1. update the verified shared fact/source,
2. identify every affected locale,
3. update the Japanese master where prose or layout is affected,
4. update English,
5. update Korean,
6. verify all published locales before treating the change as complete.

When a design or information-architecture change is proposed, implement and approve it in the Japanese master first, then assess and apply the localisation impact.

## 21. Completion Definition

A locale is not complete merely because a language switcher exists.

A locale is complete only when required pages exist, facts are verified, prose is natural, navigation and CTAs work, metadata is localised, responsive behaviour is verified, accessibility basics are verified, and accidental source-language placeholders are gone.

The Japanese master is complete only when it is strong enough to serve as the controlled baseline for English and Korean localisation.

## 22. Required Delivery Sequence

1. Make the Japanese site canonical at `/` and other unprefixed routes.
2. Redirect legacy `/ja/` routes to their unprefixed Japanese equivalents.
3. Complete and audit the Japanese home page.
4. Complete and audit every Japanese programme page.
5. Complete Japanese support, FAQ, application guidance, contact, and other required journeys.
6. Remove or isolate obsolete prototype pages that conflict with the Japanese-master architecture.
7. Stabilise Japanese information architecture, photography, UX, and visual design.
8. Remove factual duplication from UI components where practical.
9. Implement `/en/` and localise English page by page.
10. Perform English native-natural editorial review.
11. Implement `/ko/` and localise Korean page by page.
12. Perform Korean natural-language editorial review.
13. Add full locale metadata, canonical alternates, `hreflang`, and sitemap coverage.
14. Perform cross-language fact audit.
15. Perform 320px / 390px / tablet / desktop UAT in all published locales.
16. Only then treat multilingual V1 as complete.

## 23. Final Principle

**Japanese is the main site and master product experience. Its canonical URLs do not carry `/ja/`.**

English communicates the same verified meaning naturally to international readers under `/en/`.

Korean communicates the same verified meaning naturally to Korean readers under `/ko/`.

The three versions must feel like one RSJP product family, with Japanese as the controlled master and each additional language professionally localised for its audience.
