# 22_LOCALISATION_SPEC.md

# RSJP Experience System — Multilingual & Localisation Specification

## 1. Purpose

This specification defines how the Study Abroad / short-term inbound programme website is authored and maintained across languages.

The Japanese website is the **master product experience**. It is the baseline for information architecture, verified programme meaning, page structure, visual direction, photography, component behaviour, and editorial intent.

Other languages are not secondary-quality translations. They are professionally localised editions derived from the approved Japanese master and the same verified programme facts.

The goal is one multilingual product family with natural language experiences for each audience, not one original page plus machine-translated copies.

## 2. Language Roadmap and Delivery Order

Current delivery order:

1. Japanese (`ja`) — master version, canonical at unprefixed URLs
2. English (`en`) — active localisation phase
3. Korean (`ko`) — next planned localisation
4. Simplified Chinese (`zh-CN`) — future localisation
5. Traditional Chinese (`zh-TW`) — future localisation, including Taiwan-facing wording where appropriate

Do not develop all locales simultaneously while programme facts, structure, photography, UX, or visual direction are still changing.

A language must not be published merely because a route exists. It must pass its editorial, factual, responsive, metadata, and accessibility gates.

## 3. Canonical URL Architecture

Japanese is the main public site and uses **unprefixed canonical URLs**.

Canonical route pattern:

- Japanese home: `/`
- Japanese pages: `/<page>/`
- Japanese programme pages: `/programs/<id>/`
- English: `/en/...`
- Korean: `/ko/...`
- Simplified Chinese: `/zh-cn/...`
- Traditional Chinese: `/zh-tw/...`

Japanese must not use `/ja/` as its canonical route. Legacy `/ja/` URLs may remain only as redirects to the equivalent unprefixed route.

Do not automatically redirect `/` based on browser language. Browser language may later support a locale suggestion, but explicit user choice must win.

## 4. What the Japanese Master Controls

The approved Japanese site controls:

- information architecture,
- page hierarchy,
- programme discovery flow,
- section order and core story,
- verified factual meaning,
- visual system,
- photography direction,
- component behaviour,
- CTA placement,
- mobile interaction patterns,
- intended meaning of explanatory content.

Localised editions should preserve the same product intent and hierarchy, but may change wording, paragraph length, heading wording, line breaks, CTA wording, explanatory order inside a section, and culturally necessary clarification.

**Do not preserve Japanese sentence structure merely for visual symmetry.**

## 5. Core Rule: Same Facts, Different Writing

All published languages must preserve the same verified programme facts.

The following must not drift between locales unless an explicitly verified language-specific condition exists:

- programme name and code,
- dates,
- fees,
- application periods and deadlines,
- eligibility,
- enrolment conditions,
- programme status,
- accommodation conditions,
- campus/location,
- academic requirements,
- language requirements,
- credit status,
- cancellation/refund conditions,
- application procedure,
- contact destination,
- participation evidence and its defined scope.

Preserve **facts and intent**, not sentence structure.

## 6. Canonical Facts Architecture

Programme facts must not be maintained independently in each language.

Where practical, locale-neutral facts must live in one shared structured source and be rendered into every locale. Examples include:

- ISO dates and date ranges,
- application windows,
- fee amounts and currency,
- duration,
- campus identifiers,
- accommodation dates and amounts,
- academic/contact hours,
- eligibility flags,
- programme status,
- refund/management fee amounts,
- application URLs,
- historical participation counts and evidence scope.

Locale-specific files should contain **language**, not independent factual truth.

A localised sentence may include a fact for readability, but the fact must be derived from or verified against the canonical source. Do not create separate English, Korean, Simplified Chinese, and Traditional Chinese fact stores.

### 6.1 Change Propagation Rule

When a programme fact changes:

1. verify the authoritative source,
2. update the shared canonical fact,
3. identify every page and locale affected,
4. update Japanese editorial prose where the changed fact is embedded in copy,
5. update all published localised prose where required,
6. run cross-locale factual checks,
7. run locale-specific visual UAT,
8. publish only after all affected live locales are consistent.

A date or fee update is therefore **one factual change with multilingual impact**, not a series of unrelated translations.

### 6.2 Factual Conflict Rule

If Japanese copy, localised copy, repository data, and an authoritative source disagree, do not choose the most plausible value.

Stop the factual change, surface the conflict, and resolve the source of truth first.

## 7. Japanese Editorial Standard

Japanese is the master editorial edition.

It should be professional, friendly, concise, student-centred, and understandable without knowledge of Japanese university administration.

Official information is short and strong. Student-facing copy may play. Facts never play.

Avoid unnecessary decorative English, vague promotional claims, unexplained abbreviations, and internal administrative wording.

## 8. English Localisation Standard

English must not be produced by sentence-by-sentence translation of Japanese.

The English edition must read as if it were originally written in English for prospective international university students and, where relevant, overseas university staff.

### 8.1 English Voice

For student-facing pages:

- clear,
- warm,
- confident,
- practical,
- internationally understandable,
- lightly energetic without sounding like advertising copy.

For institutional / Custom Programs pages:

- professional,
- calm,
- specific,
- collaborative,
- suitable for study abroad advisers, faculty members, and international education staff.

For rules, eligibility, fees, deadlines, refunds, accommodation, and application guidance:

- direct,
- literal about conditions,
- easy to scan,
- free of playful wording.

### 8.2 English Writing Rules

Prefer:

- short sentences,
- direct verbs,
- familiar international English,
- concise headings,
- explicit dates and conditions,
- useful nouns over abstract marketing language,
- natural CTA labels such as `Explore programs`, `See program details`, `Check eligibility`, and `How to apply` where context supports them.

Avoid:

- Japanese sentence order in English,
- bureaucratic university English,
- overuse of passive voice,
- generic AI marketing copy,
- exaggerated claims,
- slogans created only to mirror Japanese wordplay,
- repeated use of `global`, `transformative`, `unique`, `once-in-a-lifetime`, or `experience Japan` when a specific statement is stronger.

### 8.3 English Copy Is Allowed to Recompose

A Japanese headline may become a different English headline if the English communicates the same intent more naturally.

English may:

- combine two Japanese lines into one,
- split one Japanese sentence into two,
- change the order of explanation inside a section,
- shorten labels,
- use a different rhythm,
- change line breaks,
- adjust text length for English typography.

English may not:

- add an unverified benefit,
- make a provisional fact sound confirmed,
- strengthen eligibility or service guarantees,
- invent partnership status,
- imply that students choose a campus when they do not,
- turn historical participation into a current partnership claim.

### 8.4 Native-Natural Gate

Before approving an English page, ask:

> Would an English-speaking prospective student or university staff member reasonably believe this page was written for them in English rather than translated from Japanese?

If not, rewrite it. Do not merely polish the translation.

## 9. Korean Localisation Standard

Korean is authored after the Japanese master and English localisation are stable enough to serve as references.

Do not mechanically translate the English edition alone. Use the Japanese master, approved English localisation, and verified canonical facts together.

Korean should read naturally to Korean university students and university staff considering short-term study in Japan. Japanese administrative phrasing should not be carried into Korean when clearer Korean communication is available.

## 10. Simplified Chinese and Traditional Chinese

Simplified Chinese and Traditional Chinese are separate localisation targets, not a character-conversion task.

Both must use the Japanese master and canonical facts as primary controlled references. Approved English and Korean may be consulted for intent, but must not become independent factual sources.

### 10.1 Simplified Chinese (`zh-CN`)

Use natural wording suitable for readers accustomed to Simplified Chinese. Terminology, punctuation, date presentation, and institutional phrasing should be reviewed as Chinese-language content rather than converted mechanically from Japanese or English.

### 10.2 Traditional Chinese (`zh-TW`)

Use Traditional Chinese and Taiwan-appropriate terminology where that improves natural communication without changing meaning. Do not assume that Simplified Chinese converted to Traditional characters is an acceptable Taiwan-facing localisation.

Terminology differences must be controlled in the glossary.

## 11. Language Switcher

Do not show a locale option that leads to a missing, misleading, or substantially unfinished edition.

Enable languages only after their required routes pass completion gates.

From every localised page, Japanese must point to the equivalent unprefixed Japanese route, never `/ja/`.

The switcher must be keyboard accessible and must not rely on client-side text replacement.

## 12. Localised Copy Structure

When localisation data is separated from presentation, use stable semantic keys such as:

- `programme.hero.title`
- `programme.hero.lead`
- `programme.facts.fee_label`
- `programme.application.cta`
- `customPrograms.hero.title`

Avoid keys derived from entire Japanese sentences.

Group copy by page/domain rather than maintaining one enormous translation file.

## 13. Controlled Terminology and Proper Nouns

Maintain a controlled glossary for:

- official programme names,
- programme abbreviations,
- university name,
- campus names,
- accommodation names,
- application systems,
- offices/support desks,
- academic terminology,
- recurring CTA and status language.

Where an official English name exists, use it. Do not invent an official-sounding translation.

A glossary entry may have locale-specific preferred terms, but the underlying entity must remain the same.

## 14. Visual Design Across Languages

The Japanese master defines the visual identity and hierarchy, not fixed line breaks.

Every locale may require changes to:

- heading width,
- line length,
- button width,
- card height,
- navigation spacing,
- font size within the established hierarchy,
- text wrapping,
- paragraph measure.

Do not force English, Korean, or Chinese text into Japanese line-break patterns.

Review at minimum:

- 320px,
- 390px,
- tablet,
- desktop.

Check navigation, buttons, badges, cards, headings, tables/fact grids, captions, footer text, and the language switcher.

## 15. Typography

Use locale-appropriate font stacks with full script support while preserving the hierarchy established by the Japanese master.

Do not use visibly inconsistent fallback fonts. Do not reduce text excessively merely to make a translated label fit.

## 16. SEO, Metadata, and `hreflang`

Each locale must have language-specific:

- page title,
- meta description,
- Open Graph text where applicable,
- canonical URL,
- document `lang`,
- `hreflang` relationships to equivalent published pages.

Do not include unfinished locales in `hreflang` or sitemap coverage.

Japanese alternates point to unprefixed routes.

## 17. Accessibility

Declare the correct document language for every locale.

Alt text must be authored naturally in the page language. It must not be mechanically translated solely to satisfy coverage.

Language controls must be keyboard accessible and clearly labelled.

## 18. Source-of-Truth Hierarchy

For programme-facing content, use this order:

1. verified authoritative programme source documents/data,
2. approved structured canonical programme facts in the repository,
3. approved Japanese master editorial copy and page intent,
4. approved locale-specific localisation.

No localised edition becomes a new factual source of truth.

## 19. Review Gates

### Gate A — Japanese Master

Before localisation begins for a page:

- relevant facts are verified or explicitly marked pending,
- information architecture is stable,
- Japanese copy is reviewed,
- visual design is approved,
- provisional imagery is clearly identified,
- CTA/navigation behaviour is complete,
- 320px and 390px layouts are acceptable,
- no known factual conflict remains.

### Gate B — Locale Editorial Completion

Before a localised page is approved:

- facts match canonical data,
- product intent matches the Japanese master,
- prose is naturally authored for the locale,
- headings and CTAs are idiomatic,
- metadata is localised,
- accidental source-language placeholders are absent.

### Gate C — Locale Visual/UAT Completion

Before publication:

- 320px, 390px, tablet, and desktop are checked,
- no horizontal overflow,
- no broken navigation or CTA,
- no local resource errors,
- text does not require unnatural shrinking,
- language switcher behaviour is correct,
- canonical/hreflang metadata is correct for published locales.

## 20. AI and Automated Translation

AI may assist with drafting, localisation comparison, terminology checks, and editorial alternatives, but AI output is not automatically approved content.

AI must not invent missing facts, silently resolve factual conflicts, turn historical or provisional content into current information, invent official names, change conditions for fluency, or treat machine translation as final localisation.

## 21. Completion Definition

A locale is not complete because its pages exist.

A locale is complete only when required routes exist, facts are consistent, prose is natural, navigation and CTAs work, metadata is localised, responsive behaviour is verified, accessibility basics are verified, and accidental source-language placeholders are gone.

## 22. Required Delivery Sequence

1. Keep Japanese canonical and FIXED except for verified fact updates or genuine defects.
2. Maintain shared canonical facts separately from locale-specific copy.
3. Implement English page by page.
4. Perform English native-natural editorial review and English Visual UAT.
5. Stabilise English before Korean authoring.
6. Implement and review Korean.
7. Add Simplified Chinese and Traditional Chinese only after the source architecture is stable enough to avoid duplicated fact maintenance.
8. For every future factual update, propagate the change across all published locales before considering the update complete.
9. Perform cross-language fact audit before multilingual V1 is declared complete.

## 23. Final Principle

**Japanese is the controlled master product experience, but factual truth belongs to verified canonical data.**

Each language communicates that same truth in writing that feels native to its intended readers.

Do not translate the interface word for word. Do not localise the facts. Localise the communication.
