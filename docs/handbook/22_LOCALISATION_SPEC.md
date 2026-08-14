# 22_LOCALISATION_SPEC.md

# RSJP Experience System — Multilingual & Localisation Specification

## 1. Purpose

This specification defines how the RSJP Experience System is authored and maintained in Japanese, English, and Korean.

The goal is not to create three literal translations of one website.

The goal is to create three language experiences that:

- present the same verified programme facts,
- sound natural to readers of each language,
- preserve the same product intent and trust level,
- remain maintainable as programme information changes.

## 2. Language Rollout Order

Implementation and editorial review shall proceed in this order:

1. Japanese (`ja`)
2. English (`en`)
3. Korean (`ko`)

This is a production workflow, not a statement that Japanese is the final primary audience language.

Japanese is completed first because it is the internal editorial baseline and is easiest for the programme team to verify precisely.

English is then authored from the verified Japanese baseline and underlying source facts.

Korean is authored only after the Japanese and English versions are stable enough to use as controlled references.

Do not develop all three languages simultaneously while programme facts and page structure are still changing.

## 3. Core Rule: Same Facts, Different Writing

All languages must preserve the same programme facts.

The following must never differ between language versions unless the programme itself explicitly has language-specific conditions:

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

Prose, sentence order, headings, examples, explanatory detail, and calls to action may differ where needed for natural communication.

Preserve facts, not sentence structure.

## 4. Japanese Editorial Standard

Japanese is the first editorial baseline.

Japanese copy should be:

- professional,
- friendly,
- concise,
- student-centred,
- understandable without knowledge of Japanese university administration.

Avoid:

- internal university terminology unless needed,
- unnecessarily formal administrative language,
- long noun chains,
- vague promotional claims,
- unexplained abbreviations,
- excessive English mixed into Japanese prose.

English terms may remain when they are:

- official programme names,
- recognised technical terms,
- deliberate visual labels,
- clearer than an artificial Japanese translation.

Decorative English and actual English-language content must not be confused.

## 5. English Localisation Standard

English must not be produced by sentence-by-sentence translation of Japanese.

The English version must read as if it were originally written in English for prospective international university students.

### 5.1 Audience

Write primarily for international university students comparing short-term study opportunities in Japan.

Many readers will use English as a second or additional language.

Therefore English should be natural but not unnecessarily complex.

### 5.2 Required English Style

Prefer:

- short sentences,
- direct verbs,
- familiar international English,
- clear headings,
- explicit dates, fees, conditions, and actions,
- practical explanations before promotional language.

Avoid:

- literal Japanese sentence order,
- Japanese-style omission of subjects or actors where English needs them,
- excessive nominalisation,
- corporate or bureaucratic university English,
- generic AI marketing copy,
- exaggerated claims,
- unnatural slogans created only to mirror Japanese wordplay.

### 5.3 Native-Natural Test

Before English is considered complete, review each major page with this question:

> Would an English-speaking prospective student reasonably believe this page was written for them in English, rather than translated from Japanese?

If the answer is no, rewrite rather than polish the translation.

### 5.4 English Fact Review

Naturalisation must never change facts.

When English wording requires interpretation of a Japanese source, verify the intended meaning against the source fact rather than guessing.

A factual ambiguity is a blocker.

## 6. Korean Localisation Standard

Korean shall be authored after the Japanese and English versions are stable.

Korean must not be produced as a mechanical translation of English alone.

Use both:

- the verified Japanese source,
- the approved English version,

as references.

Korean should sound natural to Korean university students considering short-term study in Japan.

Avoid Japanese administrative phrasing carried directly into Korean where a clearer Korean explanation is available.

Official Japanese names may be retained or accompanied by Korean explanation where useful.

Programme facts must remain identical to the verified source data.

## 7. Language Architecture

Use explicit locale routes:

- `/ja/`
- `/en/`
- `/ko/`

Do not create language versions only through client-side text replacement.

Each locale must have a stable, shareable, crawlable URL.

Do not depend on browser-language auto-detection as the only navigation method.

A visible language switcher must allow the user to choose language manually.

### 7.1 Root URL

The development order and the final root-language behaviour are separate decisions.

During Japanese-first implementation, the existing root may temporarily continue to show the current Japanese experience.

Before public multilingual launch, `/` should have an explicit documented policy.

Recommended final policy:

- `/` resolves to English or a language-neutral landing decision,
- users can always switch explicitly to Japanese or Korean,
- no user is trapped by automatic locale detection.

Because the product's primary audience is international students, English is the recommended final default public language unless a later project decision states otherwise.

## 8. Shared Facts vs Localised Copy

Do not maintain programme facts independently inside three page implementations.

Where practical, separate:

### Shared locale-neutral facts

Examples:

- programme code,
- dates,
- fee amount and currency,
- enrolment limits,
- campus identifiers,
- application deadline,
- status,
- credit status,
- accommodation availability.

### Locale-specific content

Examples:

- page title,
- lead paragraph,
- section heading,
- explanatory paragraph,
- FAQ wording,
- CTA wording,
- image caption,
- accessibility description where language-specific.

The UI should display shared facts and locale-specific copy together.

Do not create three independent fact stores.

## 9. Source-of-Truth Hierarchy

For programme-facing content, use this order:

1. verified programme source documents/data,
2. approved structured programme facts in the repository,
3. approved Japanese editorial copy,
4. approved English localisation,
5. approved Korean localisation.

A translated page is never a higher authority than the verified underlying programme facts.

If sources conflict, stop and surface the conflict.

## 10. Translation Keys and Content IDs

Use stable semantic identifiers for localised content.

Prefer identifiers representing meaning or page role, for example:

- `programme.hero.title`
- `programme.hero.lead`
- `programme.facts.fee_label`
- `programme.application.cta`

Avoid identifiers derived from the full Japanese sentence.

Do not use one large translation file for the entire site if it becomes difficult to review.

Keep content grouped by page or domain so programme staff can audit it.

## 11. Visual Design Across Languages

The same design system should be preserved across languages, but exact line breaks must not be forced to match.

Do not insert manual line breaks solely because they look good in one language unless tested in every locale.

English and Korean often need different line lengths from Japanese.

Layouts must tolerate text expansion.

Review at minimum:

- 320px,
- 390px,
- tablet,
- desktop.

Check especially:

- navigation,
- buttons,
- badges,
- cards,
- headings,
- tables/fact grids,
- captions,
- language switcher.

## 12. Typography

Use fonts that fully support the required scripts.

Do not solve Korean or Japanese rendering problems with fallback fonts that visibly break the design system.

Typography may use locale-appropriate font stacks while preserving the visual hierarchy.

English all-caps may be used selectively for short labels, but not for long reading text.

## 13. SEO and Metadata

Each language page must have language-specific:

- page title,
- meta description,
- Open Graph text where applicable,
- canonical/alternate relationships,
- `lang` attribute.

Use appropriate `hreflang` relationships between equivalent Japanese, English, and Korean pages.

Do not reuse Japanese metadata on English or Korean routes.

## 14. Accessibility

The document language must be declared correctly for each locale.

Alt text must be written naturally in the page language.

Do not mechanically reuse Japanese alt text for English or Korean pages.

Language-switch controls must be keyboard accessible and clearly labelled.

Decorative English text inside a Japanese page should not create misleading accessibility output.

## 15. Programme Names and Proper Nouns

Maintain a controlled glossary for:

- official programme names,
- campus names,
- university names,
- college/faculty names,
- staff titles,
- accommodation names,
- application-system names,
- recurring technical terms.

Do not allow the same proper noun to be translated differently across pages.

Where an official English name exists, use it rather than creating a new translation.

## 16. Mixed-Language Design

Some RSJP pages intentionally use English visual labels inside Japanese layouts.

This is permitted when the English is functioning as:

- branding,
- a short technical label,
- a navigation convention,
- a visual design element.

It is not permitted as a substitute for a real English locale.

A Japanese page containing many English headings is still a Japanese page.

## 17. Review Gates

### Gate A — Japanese Complete

Before English authoring begins for a page:

- programme facts are verified,
- Japanese structure is stable,
- Japanese copy is reviewed,
- placeholders are identified,
- mobile layout is acceptable,
- no known factual conflict remains.

### Gate B — English Complete

Before English is approved:

- all facts match the verified source,
- English has been rewritten naturally rather than literally translated,
- headings and CTA wording are idiomatic,
- mobile layout is checked,
- metadata is localised,
- no Japanese placeholder text remains except intentional proper nouns or design labels.

### Gate C — Korean Complete

Before Korean is approved:

- all facts match the verified source,
- Korean has been reviewed as Korean communication rather than translation output,
- terminology is consistent,
- mobile layout is checked,
- metadata is localised,
- no Japanese or English placeholder prose remains except intentional proper nouns or design labels.

## 18. Automated Translation and AI

AI may assist with drafting and comparison, but AI output is not automatically approved content.

AI must not:

- invent missing facts,
- silently resolve conflicting facts,
- translate an unverified placeholder as if it were current information,
- create official names that do not exist,
- change programme conditions for fluency.

Use AI for language production only after the factual source is controlled.

## 19. Change Management

When a programme fact changes:

1. update the verified shared fact/source,
2. identify every affected locale,
3. update Japanese where explanatory prose is affected,
4. update English,
5. update Korean,
6. verify all three versions before treating the change as complete.

Do not update only one language and leave conflicting live information in another language.

Where immediate publication is necessary, it is safer to temporarily mark a locale as not yet updated than to publish contradictory facts.

## 20. Completion Definition

Multilingual support is not complete merely because a language switcher exists.

A locale is complete only when:

- all required pages exist,
- facts are verified,
- prose is natural for that language,
- navigation and CTAs work,
- metadata is localised,
- responsive behaviour is verified,
- accessibility basics are verified,
- no accidental source-language placeholders remain.

## 21. Recommended Delivery Sequence

1. Finish Japanese information architecture and copy.
2. Remove factual duplication from UI components where practical.
3. Introduce explicit locale routing and language switcher.
4. Move localisable prose into maintainable locale content structures.
5. Complete and review English page by page.
6. Complete and review Korean page by page.
7. Add locale SEO metadata and `hreflang`.
8. Perform cross-language fact audit.
9. Perform 320px / 390px / tablet / desktop UAT in all languages.
10. Only then treat multilingual V1 as complete.

## 22. Final Principle

The Japanese version verifies what we mean.

The English version must communicate that meaning naturally to an international reader.

The Korean version must communicate the same verified facts naturally to a Korean reader.

The three versions should feel like one product, not one original page plus two machine translations.
