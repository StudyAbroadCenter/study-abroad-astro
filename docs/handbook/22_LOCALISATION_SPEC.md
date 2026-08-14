# 22_LOCALISATION_SPEC.md

# RSJP Experience System — Multilingual & Localisation Specification

## 1. Purpose

This specification defines how the RSJP Experience System is authored and maintained in Japanese, English, and Korean.

The Japanese site is the master reference version for the product's information architecture, verified programme meaning, page structure, visual direction, and editorial decisions.

English and Korean are not secondary-quality translations. They are fully localised versions derived from the approved Japanese master and the same verified programme facts.

The goal is to create three language experiences that:

- present the same verified programme facts,
- preserve the same core product and visual identity,
- sound natural to readers of each language,
- remain maintainable as programme information changes.

The goal is not to create three literal translations of one website.

## 2. Master Site and Language Rollout Order

The Japanese site (`ja`) is the master site and development baseline.

Implementation and editorial review shall proceed in this order:

1. Japanese (`ja`) — master version
2. English (`en`) — localised from the approved Japanese master and verified facts
3. Korean (`ko`) — localised after Japanese and English are stable

Do not develop all three languages simultaneously while programme facts, structure, photography, UX, or visual direction are still changing.

A page should normally reach Japanese completion before English localisation begins.

A major page should normally reach Japanese and English stability before Korean localisation begins.

## 3. What the Japanese Master Controls

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
- the intended meaning of explanatory content.

English and Korean should normally preserve this structure and product experience.

However, localisation may change:

- sentence structure,
- paragraph length,
- heading wording,
- line breaks,
- explanatory order inside a section,
- CTA wording,
- culturally unnecessary explanations,
- culturally necessary clarifications,

when required for natural communication.

Do not force English or Korean to copy Japanese grammar or line length.

A structural departure from the Japanese master is allowed only when it improves comprehension for that locale without changing programme facts or the core product intent.

## 4. Core Rule: Same Facts, Different Writing

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

Preserve facts and intent, not sentence structure.

## 5. Japanese Editorial Standard

Japanese is the master editorial version.

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

The Japanese master must be reviewed for both factual correctness and communication quality before it becomes the source for localisation.

## 6. English Localisation Standard

English must not be produced by sentence-by-sentence translation of Japanese.

The English version must read as if it were originally written in English for prospective international university students.

The approved Japanese master determines what the page is trying to communicate. Verified source facts determine what is factually true.

### 6.1 Audience

Write primarily for international university students comparing short-term study opportunities in Japan.

Many readers will use English as a second or additional language.

Therefore English should be natural but not unnecessarily complex.

### 6.2 Required English Style

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

### 6.3 Native-Natural Test

Before English is considered complete, review each major page with this question:

> Would an English-speaking prospective student reasonably believe this page was written for them in English, rather than translated from Japanese?

If the answer is no, rewrite rather than polish the translation.

### 6.4 English Fact Review

Naturalisation must never change facts.

When English wording requires interpretation of a Japanese source, verify the intended meaning against the source fact rather than guessing.

A factual ambiguity is a blocker.

## 7. Korean Localisation Standard

Korean shall be authored after the Japanese master and English version are stable.

Korean must not be produced as a mechanical translation of English alone.

Use both:

- the approved Japanese master,
- the approved English localisation,
- the verified programme facts,

as controlled references.

Korean should sound natural to Korean university students considering short-term study in Japan.

Avoid Japanese administrative phrasing carried directly into Korean where a clearer Korean explanation is available.

Official Japanese names may be retained or accompanied by Korean explanation where useful.

Programme facts must remain identical to the verified source data.

## 8. Language Architecture

Use explicit locale routes:

- `/ja/`
- `/en/`
- `/ko/`

The Japanese route is the master public version from which the other language experiences are derived.

Do not create language versions only through client-side text replacement.

Each locale must have a stable, shareable, crawlable URL.

Do not depend on browser-language auto-detection as the only navigation method.

A visible language switcher must allow the user to choose language manually.

### 8.1 Root URL

The root URL policy shall reinforce the Japanese-master architecture while keeping multilingual access clear.

Recommended policy for this project:

- `/` resolves to `/ja/` unless a later explicit project decision changes it,
- `/ja/` is the canonical Japanese master experience,
- `/en/` is the English localised experience,
- `/ko/` is the Korean localised experience,
- the language switcher remains visible and manual on every major page,
- browser-language detection may suggest a language but must not trap or silently redirect users against their choice.

Changing the root default away from Japanese requires an explicit project-level decision and corresponding documentation update.

## 9. Shared Facts vs Localised Copy

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

## 10. Source-of-Truth Hierarchy

For programme-facing content, use this order:

1. verified programme source documents/data,
2. approved structured programme facts in the repository,
3. approved Japanese master editorial copy and page intent,
4. approved English localisation,
5. approved Korean localisation.

The Japanese master controls editorial intent and page structure, but it does not override a verified factual source.

A translated page is never a higher authority than the verified underlying programme facts.

If sources conflict, stop and surface the conflict.

## 11. Translation Keys and Content IDs

Use stable semantic identifiers for localised content.

Prefer identifiers representing meaning or page role, for example:

- `programme.hero.title`
- `programme.hero.lead`
- `programme.facts.fee_label`
- `programme.application.cta`

Avoid identifiers derived from the full Japanese sentence.

Do not use one large translation file for the entire site if it becomes difficult to review.

Keep content grouped by page or domain so programme staff can audit it.

The content structure should make it easy to compare Japanese, English, and Korean versions without duplicating locale-neutral facts.

## 12. Visual Design Across Languages

The Japanese master defines the design baseline.

English and Korean should preserve:

- overall visual identity,
- component family,
- spacing logic,
- imagery,
- colour system,
- interaction model,
- information hierarchy.

Exact line breaks must not be forced to match.

Do not insert manual line breaks solely because they look good in Japanese unless tested and appropriate in every locale.

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

## 13. Typography

Use fonts that fully support the required scripts.

Do not solve Korean or Japanese rendering problems with fallback fonts that visibly break the design system.

Typography may use locale-appropriate font stacks while preserving the hierarchy established by the Japanese master.

English all-caps may be used selectively for short labels, but not for long reading text.

## 14. SEO and Metadata

Each language page must have language-specific:

- page title,
- meta description,
- Open Graph text where applicable,
- canonical/alternate relationships,
- `lang` attribute.

Use appropriate `hreflang` relationships between equivalent Japanese, English, and Korean pages.

Do not reuse Japanese metadata on English or Korean routes.

The Japanese master being the development baseline does not mean English or Korean SEO metadata may be treated as translated placeholders.

## 15. Accessibility

The document language must be declared correctly for each locale.

Alt text must be written naturally in the page language.

Do not mechanically reuse Japanese alt text for English or Korean pages.

Language-switch controls must be keyboard accessible and clearly labelled.

Decorative English text inside a Japanese page should not create misleading accessibility output.

## 16. Programme Names and Proper Nouns

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

## 17. Mixed-Language Design

Some RSJP pages intentionally use English visual labels inside Japanese layouts.

This is permitted when the English is functioning as:

- branding,
- a short technical label,
- a navigation convention,
- a visual design element.

It is not permitted as a substitute for a real English locale.

A Japanese page containing many English headings is still a Japanese page.

The approved Japanese master may therefore intentionally retain selected English visual elements.

## 18. Review Gates

### Gate A — Japanese Master Complete

Before English authoring begins for a page:

- programme facts are verified,
- Japanese information architecture is stable,
- Japanese copy is reviewed,
- visual design is approved,
- photography/media choices are approved or clearly marked provisional,
- placeholders are identified,
- CTA and navigation behaviour are stable,
- mobile layout is acceptable,
- no known factual conflict remains.

Passing Gate A means the page can serve as the localisation master.

### Gate B — English Complete

Before English is approved:

- all facts match the verified source,
- the English page preserves the Japanese master's product intent and hierarchy,
- English has been rewritten naturally rather than literally translated,
- headings and CTA wording are idiomatic,
- mobile layout is checked,
- metadata is localised,
- no Japanese placeholder text remains except intentional proper nouns or design labels.

### Gate C — Korean Complete

Before Korean is approved:

- all facts match the verified source,
- the Korean page preserves the Japanese master's product intent and hierarchy,
- Korean has been reviewed as Korean communication rather than translation output,
- terminology is consistent,
- mobile layout is checked,
- metadata is localised,
- no Japanese or English placeholder prose remains except intentional proper nouns or design labels.

## 19. Automated Translation and AI

AI may assist with drafting and comparison, but AI output is not automatically approved content.

AI must not:

- invent missing facts,
- silently resolve conflicting facts,
- translate an unverified placeholder as if it were current information,
- create official names that do not exist,
- change programme conditions for fluency,
- redesign the English or Korean site independently from the Japanese master without a documented reason.

Use AI for language production only after the factual source and Japanese master intent are controlled.

## 20. Change Management

When a programme fact changes:

1. update the verified shared fact/source,
2. identify every affected locale,
3. update the Japanese master where explanatory prose or layout is affected,
4. update English,
5. update Korean,
6. verify all three versions before treating the change as complete.

When a design or information-architecture change is proposed:

1. implement and approve it in the Japanese master first,
2. assess its localisation impact,
3. carry it into English,
4. carry it into Korean,
5. verify that locale-specific text expansion does not break the design.

Do not update only one language and leave conflicting live information in another language.

Where immediate publication is necessary, it is safer to temporarily mark a locale as not yet updated than to publish contradictory facts.

## 21. Completion Definition

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

The Japanese master is complete only when it is strong enough to be used as the controlled product baseline for English and Korean localisation.

## 22. Required Delivery Sequence

1. Complete the Japanese master site.
2. Audit every Japanese page for verified facts, placeholders, UX, copy, imagery, mobile behaviour, and CTA completeness.
3. Stabilise Japanese information architecture and design.
4. Remove factual duplication from UI components where practical.
5. Implement explicit `/ja/`, `/en/`, `/ko/` locale architecture and a language switcher without changing the Japanese master experience unnecessarily.
6. Move localisable prose into maintainable locale content structures.
7. Complete English page by page using the Japanese master and verified facts.
8. Perform English native-natural editorial review.
9. Complete Korean page by page using the Japanese master, approved English, and verified facts.
10. Perform Korean natural-language editorial review.
11. Add locale SEO metadata and `hreflang`.
12. Perform cross-language fact audit.
13. Perform 320px / 390px / tablet / desktop UAT in all languages.
14. Only then treat multilingual V1 as complete.

## 23. Final Principle

Build and approve the Japanese site first.

Treat it as the master product experience.

English must communicate the same verified meaning naturally to international readers, not mirror Japanese sentences.

Korean must communicate the same verified meaning naturally to Korean readers, not mirror Japanese or English sentences mechanically.

The three versions should feel like one RSJP product family: one master experience, professionally localised for three audiences.