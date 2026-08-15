# 2027 RWJP Canonical Facts Audit

Status: **PASS FOR FACT BASELINE / EXPERIENCE DESIGN NEXT**

Verified: 2026-08-15

Scope:
- `src/data/rwjp-2027-facts.ts`
- 2027 RWJP Japanese recruitment page fact baseline
- Microsoft Forms first-stage application journey

## Executive judgement

The 2027 RWJP Japanese recruitment work now has a sufficiently stable fact baseline to move from fact collection into experience and information-architecture refinement.

The immediate blocking inconsistency identified on 2026-08-15 was the Daishogun Dormitory fee. The canonical web data still contained JPY 94,500 while the confirmed operational amount used in the Microsoft Forms application is JPY 92,500.

This audit corrects the web canonical value to **JPY 92,500** and requires all visible accommodation/payment copy to derive from that canonical value or remain consistent with it.

## Confirmed annual facts used as the baseline

- Programme: 2027 Ritsumeikan Winter Japanese Program
- Programme period: 2027-01-12 through 2027-02-11
- Application period: 2026-09-30 through 2026-10-14
- Campus: Kinugasa Campus, Kyoto
- Programme fee: JPY 370,000
- Daishogun Dormitory fee: **JPY 92,500** in addition to the programme fee when used
- Dormitory stay: check-in 2027-01-11; check-out 2027-02-12
- Japanese classes: 50 minutes × 3 classes × 23 teaching days = 3,450 minutes / 57.5 hours
- Cultural experiences: 90 minutes × 11 sessions = 990 minutes
- JLPT N1 holders are not eligible
- Complete beginners may apply, but must be able to read hiragana and katakana before the programme starts
- Applicants must remain enrolled at a university or graduate school from application through programme participation; part-time university/graduate students are eligible

## Application architecture baseline

The public Microsoft Forms application is the **first-stage application and readiness check**, not the secure document-submission system.

The website and form should work as one journey:

1. Attract — explain why RWJP is worth considering
2. Understand — show the academic, cultural and living experience clearly
3. Check fit — make eligibility, Japanese readiness and participation expectations explicit
4. Decide — show cost, accommodation, dates and important conditions transparently
5. Apply — send the applicant to the official first-stage Microsoft Forms route during the application period
6. Continue securely — collect passport, transcript, enrolment certificate, medical form and Japanese essay later through an approved secure process

The public website must not imply that submitting Microsoft Forms alone equals acceptance or completed admission.

## Correction made in this audit

`src/data/rwjp-2027-facts.ts`

- `accommodationFee`: 94,500 → **92,500**
- `accommodationPolicy`: 94,500 → **92,500**
- `paymentPolicy`: 94,500 → **92,500**

No visual redesign is included in this PR. This is intentional: the purpose is to establish a reliable factual floor before the next experience-design PR.

## Source-of-truth rule

Annual facts such as dates and fees should have one canonical source in code. Presentation components should consume canonical facts rather than restating independently maintained amounts wherever practical.

Historical audit documents may contain values that were correct or believed correct at the time they were written. For 2027 RWJP publication work after 2026-08-15, this audit and the current canonical data supersede any earlier reference to a JPY 94,500 Daishogun Dormitory fee.

## Remaining publication-quality work

The next phase is not additional fact dumping. It is controlled information architecture and evidence-led presentation.

Priority order:

1. Programme Experience — connect Japanese study, culture, student interaction and Kyoto into one coherent learning journey
2. Living in Kyoto / Daishogun — present accommodation as part of the learning and living experience, with practical reality rather than hotel-style promotion
3. Applicant Readiness — align website eligibility, preparation, cost and participation expectations with the Microsoft Forms philosophy
4. Evidence-based Photography — assign every photo a communication purpose (study, live, connect, culture, Kyoto, daily life)
5. Japanese copy and executive-level polish — improve hierarchy, density, wording, accessibility and mobile readability without weakening factual precision

## Quality principle

The target is not merely a more attractive recruitment page. The RWJP site should demonstrate responsible university recruitment: compelling enough to attract suitable applicants, transparent enough to support an informed decision, and structured enough to reduce avoidable mismatch before application.
