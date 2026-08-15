# PR47 Global Learning / UX Audit

Status: **IMPLEMENTED / CI PENDING / VERIFIED HISTORICAL DATA STILL REQUIRED**

Verified: 2026-08-15

## Goal

Move the Japanese recruitment experience beyond programme promotion and make the educational value of inbound mobility visible at three levels:

1. incoming participant learning
2. co-learning opportunities for Ritsumeikan students
3. internationalisation of the campus learning environment

The visual language should remain consistent between the Japanese homepage and RWJP rather than creating a separate campaign-style microsite.

## Implemented

- shared `InternationalLearningImpact` section on homepage and RWJP
- co-learning / Global at Home / language confidence / intercultural understanding narrative
- shared `GlobalLearningEvidence` section
- real programme photography already stored in the repository
- Kinugasa campus clock-tower image as institutional place evidence
- responsive evidence layout for desktop, tablet, 390px and 320px-class mobile widths
- lightweight CSS globe motif without a heavy 3D runtime dependency
- verified RWJP 2027 evidence: five weeks, 57.5 hours Japanese instruction, 11 cultural-experience sessions
- canonical `participation-history.ts` schema for future year / programme / country / university / participant-count evidence
- fail-closed public behaviour: historical counts remain unpublished until authoritative data is entered
- stronger Ritsumeikan University naming in the shared header and direct navigation to international-learning content

## Brand judgement

No official Ritsumeikan logo image asset was found in the repository during this implementation. The PR therefore does **not** fabricate an official logo. Institutional character is expressed through:

- `RITSUMEIKAN UNIVERSITY` naming
- the existing R brand mark used by the site
- Kinugasa campus imagery
- restrained dark / white / teal visual system with a red institutional accent in the evidence section
- consistent typography, spacing and card language shared with the Japanese homepage

If an approved official logo asset is later supplied, it should replace the current site mark through a single header component rather than being duplicated across pages.

## Historical participation data rule

The requested participant-count / country / institution layer is strategically important, especially for university leadership and external stakeholders. It is not populated in this PR because no authoritative historical dataset has yet been verified in the repository.

The canonical record requires:

- year
- programme
- country or region
- institution
- participants
- source
- verification date

Once populated, the same dataset can feed:

- homepage total reach
- RWJP-only reach
- RWJP Express-only reach
- country / institution browsing
- future globe/map visualisation
- leadership-facing trend charts

## UX rules

- never shrink a desktop dashboard into unreadable mobile content
- evidence cards stack vertically on narrow screens
- programme facts remain text-readable without interaction
- the globe is decorative/informational and does not block access to the evidence
- images use meaningful alt text
- no hover-only information
- no fake counters or animated vanity metrics

## Remaining before final GO

1. CI / Astro build green
2. Vercel preview green
3. visual UAT at desktop, tablet, 390px and 320px
4. verify header does not wrap awkwardly at intermediate widths
5. verify the new sections do not dilute the Apply / readiness journey
6. later: populate canonical historical data from authoritative records
7. later: add verified participant voices with programme year / country / institution metadata and consent-safe attribution
8. later: replace or expand photography using the programme owner's curated image archive

## Executive judgement

The design direction is appropriate for an institutional audience because it connects recruitment, inbound mobility, co-learning and campus internationalisation without claiming unmeasured educational outcomes. The remaining gap is not concept or UI architecture; it is authoritative historical evidence and final visual UAT.
