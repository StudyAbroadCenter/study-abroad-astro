# PR47 Global Learning / UX Audit

Status: **IMPLEMENTED / HISTORICAL DATA RECONCILED / CI & VISUAL UAT PENDING**

Verified: 2026-08-15

## Goal

Move the Japanese recruitment experience beyond programme promotion and make the educational value of inbound mobility visible at three levels: incoming participant learning, co-learning opportunities for Ritsumeikan students, and internationalisation of the campus learning environment. The homepage, RWJP and RWJP Express should use one institutional design language rather than separate campaign microsites.

## Historical data recovery and reconciliation

The previously supplied source workbook and former globe evidence were recovered and reconciled.

- Source: `短期受入プログラム参加実績_2023-2026_統合.xlsx`
- Period: 2023–2026
- Scope: RSJP / RSJP Express / RWJP / RWJP Express
- Participants: **522**
- Countries / regions: **27**
- Universities / institutions: **114**
- Programme totals: RSJP **153** / RSJP Express **158** / RWJP **140** / RWJP Express **71**
- RWJP: **140 participants / 9 countries or regions / 18 institutions**
- RWJP Express: **71 participants / 6 countries or regions / 15 institutions**
- 2024 RWJP Express was cancelled and therefore has zero participants for that year

These totals match the evidence layer previously used by the Global Learning Network / globe review build.

**Definition:** country / region means the location of the sending university or institution, not participant nationality. No participant names or other personally identifiable information are stored in the website evidence dataset.

## Implemented

- shared `InternationalLearningImpact` section connecting recruitment to co-learning / Global at Home / language confidence / intercultural understanding
- shared `GlobalLearningEvidence` section with real programme and Kinugasa imagery
- homepage evidence: 522 / 27 / 114 and programme-family totals
- RWJP evidence: 140 / 9 / 18 plus verified 2027 design facts (5 weeks, 57.5 hours Japanese instruction, 11 cultural-experience sessions)
- RWJP Express evidence: 71 / 6 / 15 and 2024 cancellation note
- searchable country / university history on RWJP and RWJP Express
- data-driven top origins around a lightweight globe motif
- page metadata aligned to verified historical totals
- responsive desktop / tablet / 390px / 320px layouts
- stronger Ritsumeikan University naming in the shared header

## Evidence / editorial rules

- historical counts must come from the integrated workbook or a later authoritative successor
- do not infer nationality from university location
- historical participation does not imply a current partnership, current eligibility or future acceptance
- do not publish participant PII
- participant voices require verified source text and consent-safe attribution
- quantitative learning outcomes require programme / year / sample context

## Brand judgement

No approved local Ritsumeikan logo image asset is committed in the repository. The PR therefore does not fabricate an official logo. Institutional character is expressed through `RITSUMEIKAN UNIVERSITY` naming, the existing site mark, Kinugasa imagery, real programme photography, restrained dark / white / teal surfaces with an enji accent, and shared typography / spacing / interaction patterns. An approved logo can later replace the shared-header mark in one place.

## UX rules

- headline evidence is readable without interaction
- the globe supports, but never gates, access to data
- students can search country / region or institution by text
- country groups use accessible `details` controls rather than hover-only UI
- narrow screens stack content instead of squeezing desktop columns
- the mobile search field uses 16px text to avoid browser zoom
- reduced-motion users do not lose information
- no fake counters, vanity animation or remote flag dependency

## Remaining before final GO

1. Astro / CI build green
2. Vercel Preview green
3. visual UAT at desktop, tablet, 390px and 320px
4. intermediate-width header / evidence review
5. keyboard and touch test for search / disclosure controls
6. confirm that evidence does not dilute Apply / Applicant Readiness
7. later: verified participant voices with consent-safe attribution
8. later: curate the larger photo archive for stronger evidence photography

## Executive judgement

PR47 now combines educational intent with auditable reach. It can explain both why inbound short-term programmes matter institutionally and how far the programmes have actually reached. Merge remains blocked on CI / Preview / visual UAT, not on evidence availability.
