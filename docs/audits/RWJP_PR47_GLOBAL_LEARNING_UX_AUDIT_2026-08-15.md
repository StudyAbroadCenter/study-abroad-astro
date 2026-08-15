# PR47 Global Learning / UX Audit

Status: **IMPLEMENTED / HISTORICAL DATA RECONCILED / CI & VISUAL UAT PENDING**

Verified: 2026-08-15

## Goal

Move the Japanese recruitment experience beyond programme promotion and make the educational value of inbound mobility visible at three levels:

1. incoming participant learning
2. co-learning opportunities for Ritsumeikan students
3. internationalisation of the campus learning environment

The homepage, RWJP and RWJP Express should use one institutional design language rather than separate campaign microsites.

## Historical data recovery and reconciliation

The previously supplied source workbook was recovered and re-used:

- source: `短期受入プログラム参加実績_2023-2026_統合.xlsx`
- period: 2023–2026
- scope: RSJP / RSJP Express / RWJP / RWJP Express
- participants: **522**
- countries / regions: **27**
- universities / institutions: **114**
- RSJP: **153**
- RSJP Express: **158**
- RWJP: **140**
- RWJP Express: **71**

The workbook totals reconcile with the verified evidence layer previously used by the Global Learning Network / globe review build.

Important definition: `country / region` means the location of the sending university or institution, **not participant nationality**.

Programme-specific reconciliation used by the public UI:

- RWJP: **140 participants / 9 countries or regions / 18 institutions**
- RWJP Express: **71 participants / 6 countries or regions / 15 institutions**
- 2024 RWJP Express was cancelled and therefore has zero participants for that year

No participant names or other personally identifiable information are stored in the website evidence dataset.

## Implemented

- shared `InternationalLearningImpact` section on homepage and RWJP
- co-learning / Global at Home / language confidence / intercultural understanding narrative
- shared `GlobalLearningEvidence` section
- homepage evidence: 522 participants / 27 countries or regions / 114 institutions
- programme family totals shown beneath the homepage evidence
- RWJP evidence: 140 / 9 / 18 plus verified 2027 design facts (five weeks, 57.5 hours Japanese instruction, 11 cultural-experience sessions)
- RWJP Express evidence: 71 / 6 / 15, including the 2024 cancellation note
- searchable country / university history for RWJP and RWJP Express
- top historical origins displayed around the lightweight globe motif
- real programme photography already stored in the repository
- Kinugasa campus clock-tower image as institutional place evidence
- responsive evidence layout for desktop, tablet, 390px and 320px-class mobile widths
- lightweight CSS globe motif without a heavy 3D runtime dependency
- stronger Ritsumeikan University naming in the shared header and direct navigation to international-learning content

## Evidence / editorial rules

- historical counts must come from the integrated workbook or a later authoritative successor
- do not infer nationality from university location
- do not imply that a university shown in historical participation data is a current partner or guarantees future eligibility
- do not turn historical participation into an endorsement claim
- do not publish participant names in this evidence layer
- participant voices require verified source text and consent-safe attribution before publication
- quantitative educational outcomes must identify their programme/year/sample rather than being presented as universal impact

## Brand judgement

No approved local Ritsumeikan logo image asset is currently committed in the repository. This PR therefore does **not** fabricate an official logo. Institutional character is expressed through:

- `RITSUMEIKAN UNIVERSITY` naming
- the existing site brand mark
- Kinugasa campus imagery
- existing real programme photography
- restrained dark / white / teal surfaces with a Ritsumeikan-like enji accent in the evidence layer
- typography, spacing and interaction patterns shared with the Japanese homepage

If an approved official logo asset is supplied later, it should replace the shared-header mark in one place rather than being duplicated across pages.

## UX rules

- numbers are immediately readable without opening a control
- the globe supports the story but is never the only way to access evidence
- a student can search a country / region or institution by text on RWJP and RWJP Express
- country groups are accessible `details` elements, not hover-only panels
- mobile layouts stack rather than squeeze desktop columns
- search input uses a 16px mobile font to avoid browser zoom behaviour
- evidence remains usable with reduced motion
- no fake counters, vanity animation or remote flag dependency is required

## Remaining before final GO

1. Astro / CI build green
2. Vercel Preview green
3. visual UAT at desktop, tablet, 390px and 320px
4. verify intermediate-width header and evidence layouts
5. verify search and country disclosure behaviour with keyboard and touch
6. verify the new evidence sections do not dilute the Apply / Applicant Readiness journey
7. later: add verified participant voices with programme year / country / institution metadata and consent-safe attribution
8. later: curate the programme owner's larger photo archive and replace any merely adequate image with stronger evidence photography

## Executive judgement

PR47 now combines educational intent with auditable reach. It can explain both why inbound short-term programmes matter institutionally and how far the programmes have actually reached. This is substantially stronger for university leadership and external stakeholders than promotional copy alone. Merge remains blocked on CI / Preview / visual UAT, not on evidence availability.
