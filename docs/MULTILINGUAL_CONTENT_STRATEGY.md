# Multilingual Content Strategy

## Principle

The site should use one shared information architecture and design system, but each language must be authored for its primary audience. The English, Korean and Chinese sites should not be produced by replacing Japanese sentences line by line.

The facts must remain consistent across languages:

- programme name and code;
- season and duration;
- eligibility and application requirements;
- campus;
- dates, fees and cancellation rules;
- included and excluded services;
- safety and support information.

The framing, rhythm, examples and calls to action may differ by language.

## Japanese canonical role

The Japanese edition is the canonical institutional narrative for the Study Abroad Center website. It must do more than recruit participants.

It should explain, with auditable evidence:

- the scale and reach of inbound short-term programmes;
- how incoming students and Ritsumeikan students learn together;
- how student exchange contributes to campus internationalisation;
- what has actually been implemented, using real programme photography and verified aggregate evidence;
- how evidence is counted and governed;
- where data is not yet verified.

The Japanese edition may consciously address institutional stakeholders, including university leadership, partner units and public-policy audiences. It must not imply formal alignment, funding or endorsement by a government programme unless separately verified.

A key editorial rule is: **show what happened, not what we wish had happened.** No inferred participant counts, vanity counters or estimated co-learning numbers.

## International-language role

The English, Korean and Chinese editions should remain recruitment-first. Their primary task is to help international students and partner institutions understand why a programme is attractive and how to participate.

They should prioritise:

- programme purpose and academic experience;
- dates, fees, eligibility and application steps;
- campus and accommodation;
- student connection, Buddy activity and co-learning as concrete programme benefits;
- practical support and safety;
- clear calls to action.

They do not need to reproduce the full Japanese institutional / policy narrative. Co-learning should be visible because it improves the student experience, not because every locale must repeat the same institutional framing.

## Single-source factual model

Annual facts must be edited once and rendered consistently in every locale. The target architecture is:

```ts
programmeFacts = {
  id,
  year,
  dates,
  fee,
  deadline,
  eligibility,
  accommodation,
  cancellation,
  source,
  verifiedAt
}

programmeCopy = {
  ja: {...},
  en: {...},
  ko: {...},
  zhHant: {...},
  zhHans: {...}
}
```

A future Markdown-backed implementation may store language-neutral annual facts in frontmatter and locale-authored copy separately. Changing a date, fee or deadline in the verified fact source must update all locale renderings without manually editing the same number in five pages.

High-risk prose such as eligibility, cancellation, health and legal conditions must not be silently machine-translated and published. A Japanese factual change should mark affected locale copy for review.

## Evidence architecture

Public evidence is aggregate and non-PII.

- inbound participation evidence: verified source dataset;
- co-learning evidence: separate verified aggregate dataset;
- operational Buddy / matching data: outside the public Astro repository.

Unique students and total participations must be separate metrics. Unverified metrics are hidden, not displayed as zero.

## Recommended publication order

### 1. Japanese and English together

Japanese and English should launch together once the core pages are complete.

The Japanese site serves:

- overseas Japanese faculty and coordinators;
- partner-university staff who work in Japanese;
- internal stakeholders;
- students and families who can read Japanese.

The English site is essential for international students and partner universities. It should be treated as an original international recruitment edition rather than a translation.

### 2. Korean

Korean should be the next full edition because Korean students represent a major participant group. The Korean edition should be student-first, mobile-first and written in natural contemporary Korean. It should also support the channels Korean students actually use to discover and evaluate programmes.

### 3. Traditional Chinese

Traditional Chinese should follow for Taiwan and other readers who prefer Traditional Chinese. Taiwan is an important recruitment and partnership audience and should not be hidden inside a generic Chinese edition.

### 4. Simplified Chinese

Simplified Chinese remains strategically important. Political friction is not a reason to withdraw from student-level and university-level exchange. A university programme site should support informed, respectful contact even when government relations are difficult.

## URL structure

Use stable language roots:

- `/ja/`
- `/en/`
- `/ko/`
- `/zh-hant/`
- `/zh-hans/`

Do not infer language only from browser settings. Provide a visible language selector and preserve the equivalent page where possible.

## English editorial direction

English copy should be:

- concise and benefit-led;
- active rather than institutional;
- specific about student participation;
- clear about what is academic and what is experiential;
- confident without sounding promotional or exaggerated;
- written for both students and university decision-makers.

Example difference:

Japanese framing:

> 日本語を軸に、学生共修、日本文化体験、京都でのフィールドラーニングをじっくり経験する夏の総合プログラムです。

English edition:

> Build practical Japanese through five immersive weeks of campus life, student collaboration and cultural field learning in Kyoto.

The English sentence is not a direct translation. It foregrounds the student experience and uses a rhythm natural to international recruitment writing.

## Korean editorial direction

The Korean edition should:

- state programme length, season and campus early;
- make student exchange and co-learning highly visible;
- explain accommodation and practical support clearly;
- use concise mobile-friendly sections;
- avoid Japanese institutional terminology where a natural Korean explanation is clearer;
- distinguish cultural learning from sightseeing.

## Chinese editorial direction

Traditional and Simplified Chinese editions may share factual source data, but they should be reviewed separately for terminology and naturalness.

Both editions should clearly explain:

- the academic purpose of the programme;
- Japanese-language requirements;
- student exchange and co-learning;
- accommodation arrangements;
- application and payment procedures;
- what is and is not included.

## Content architecture

Programme facts should remain language-neutral where possible. Audience-facing copy is stored by locale.

The current programme data already separates Japanese and English copy for:

- programme names;
- summaries;
- campus labels;
- family labels;
- image alternative text;
- programme-specific experience lines.

The experience-pillar content also contains separately authored Japanese and English editions.

Future Korean and Chinese copy should extend the same structure rather than duplicate the page components.

## Search and metadata

Each completed language edition should include:

- localized page titles and descriptions;
- canonical URLs;
- `hreflang` links for available equivalents;
- localized Open Graph text;
- language-appropriate structured data where applicable;
- a language-specific sitemap entry.

Do not publish machine-translated placeholder pages for search indexing.

## Quality rule

A language edition is ready only when a fluent reader would believe it was written for them from the beginning.
