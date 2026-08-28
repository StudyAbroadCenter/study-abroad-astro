# Japanese Social Impact / Multilingual Audit — 2026-08-28

Status: **AUDIT COMPLETE / IMPLEMENTATION IN PROGRESS**

## Executive judgement

The current Astro site already has a strong evidence base for inbound participation and a separate Buddy / Global Connections experience. The next release should not invent new impact numbers. It should connect verified inbound evidence, documented co-learning activities and future verified co-learning metrics into one auditable Japanese institutional narrative.

The Japanese edition has a different primary job from the international-language editions:

- **Japanese canonical edition:** explain institutional value, multicultural co-learning, campus internationalisation and social impact, while also supporting programme discovery.
- **English / Korean / Chinese editions:** prioritise programme attractiveness, eligibility, practical information and participation pathways. Co-learning and Buddy activity should be presented as a concrete programme benefit, not as the dominant institutional narrative.

## Policy alignment checked on 2026-08-28

Current MEXT policy explicitly positions multicultural co-learning as Japanese and international students using cultural diversity to learn together, and identifies participation in multicultural co-learning as an outcome indicator within the FY2026 Social Impact / Multicultural Co-learning Campus support programme.

The site should therefore make existing practice legible in evidence terms without claiming that Ritsumeikan activities are identical to, funded by, or formally part of a MEXT programme unless that is separately verified.

## What is already strong

1. Verified inbound evidence exists for 2023–2026: 522 participants, 27 countries/regions and 114 universities/institutions across the four established Japanese-language short-term programmes.
2. The evidence layer records source period, verification date and counting definition.
3. The current Japanese homepage already contains an `InternationalLearningImpact` section.
4. The Buddy page already frames interaction as meeting, learning together, cultural sharing and continued global connection.
5. Real programme photography is already used and labelled as past-program evidence.
6. Existing multilingual strategy correctly requires shared facts but separately authored language editions.

## Critical gaps

### A. Co-learning evidence is not yet auditable

There is no verified dataset in the repository for unique Ritsumeikan student participants, co-learning participations, Buddy matches, or co-learning activity counts. These numbers must not be inferred from photos, schedules or staff memory.

**Rule:** a co-learning number may be displayed only after it has a source, period, definition and verification date.

### B. Japanese institutional narrative and recruitment narrative are mixed

The Japanese homepage is recruitment-led but has institutional-impact sections. This is useful, but it needs a clearer evidence sequence:

1. what we do;
2. verified reach;
3. how incoming and Ritsumeikan students learn together;
4. what evidence is currently verified;
5. what is being measured next.

### C. Programme facts are not yet a true one-edit multilingual source

`src/data/programs.ts` separates presentation copy by locale, which is good. However, annual dates, fees, deadlines, accommodation and cancellation rules still live in programme-specific fact domains or page logic. The target architecture should keep annual facts language-neutral and render them into each locale.

### D. Personal information boundary must remain strict

Public impact reporting should use aggregate, non-PII evidence. Buddy recruitment / matching may require personal information, but that operational data must not be stored in the public Astro site or its evidence datasets.

## Required architecture

### 1. Evidence layers

- `participation-history.ts`: verified inbound reach.
- `co-learning-evidence.ts`: verified aggregate co-learning evidence only.
- Operational Buddy data: outside the public website repository.

Every published metric requires:

- metric key;
- value;
- unit;
- period;
- counting definition;
- source;
- verified date;
- publication status.

Unverified metrics are hidden, not shown as zero.

### 2. Japanese homepage

Add a visible **共に学んだことを、事実で示す** section after the institutional impact section and before global reach evidence.

It should:

- show verified inbound reach;
- show concrete documented co-learning activity types;
- show verified co-learning metrics only when available;
- link to the Buddy / Global Connections page;
- explain counting / evidence governance briefly;
- never use animated vanity counters or estimates.

### 3. Multilingual editions

English / Korean / Chinese should remain recruitment-first:

- programme choice;
- academic content;
- dates / fees / eligibility;
- campus and accommodation;
- student connection / Buddy as a benefit;
- application pathway.

Do not reproduce the full Japanese policy narrative line by line.

### 4. Canonical fact model

Target direction:

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

Facts are edited once. Locale pages format the same facts. Audience-facing copy is separately authored.

## Editorial principle

The Japanese site should communicate a practice-based understanding of multicultural learning: language barriers, unfamiliar customs, uncertainty and isolation are real parts of crossing cultures. The institutional message should emphasise that co-learning is created through actual encounters and support, not abstract slogans.

Do not turn this into a personal biography on the homepage. The lived-experience philosophy should appear through the design of support, Buddy activity and co-learning practice. A staff story may be published later only as an explicitly approved editorial feature.

## Risk controls

- no fabricated or inferred impact numbers;
- no participant PII in the public repository;
- unique students and total participations must be separate metrics;
- historical participation must not imply current partnership or eligibility;
- Japanese canonical factual changes must trigger locale review for legal / eligibility / cancellation text;
- machine translation may draft but not silently publish high-risk conditions;
- official university facts remain authoritative outside this site where specified by governance docs.

## GO / NO-GO

**GO** for the Japanese social-impact evidence layer and audience-specific multilingual strategy.

**NO-GO** for publishing a numeric Ritsumeikan-student co-learning KPI until the underlying source dataset and counting definitions are verified.
