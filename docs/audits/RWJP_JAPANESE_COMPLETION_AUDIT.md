# RWJP Japanese Completion Audit

Status: **IN PROGRESS / P0 FACTS RESOLVED**

Scope: `/programs/rwjp/`

## Completion target

RWJP is complete only when the page is both compelling and decision-ready. Visual quality alone is not sufficient.

## Implemented in this pass

- Preserved the existing RWJP flagship visual direction.
- Added a structured `rwjp-2027-facts.ts` fact boundary with certainty and source fields.
- Connected the RWJP route to a decision-information panel.
- Added confirmed programme dates, duration, campus, learning minutes, accommodation, payment method, programme fee and application period.
- Programme fee confirmed at **370,000 JPY**.
- Application period confirmed as **September 30, 2026 through October 14, 2026**.
- Program period confirmed as **January 12, 2027 through February 11, 2027**.
- Eligibility confirmed: applicant must be an enrolled university or graduate student through the programme period; pre-enrolment and post-graduation applicants are not eligible; working adults who are enrolled as part-time university/graduate students are eligible.
- Japanese requirement confirmed: JLPT N1 holders are not eligible; students with no prior Japanese may apply but must master hiragana and katakana before the programme starts.
- Refund policy confirmed: after payment, the 54,000 JPY management fee is non-refundable; the balance is refundable less any already-arranged non-refundable costs applicable at the time of cancellation.
- Added a client-side application-state label derived from the confirmed application dates so the static page does not hard-code a stale status.
- Added an `Is RWJP for you?` self-assessment section.
- Added RWJP-specific title and description metadata.
- Kept `noindex,nofollow` while Japanese contact/application journeys and P1 operational/academic checks remain incomplete.
- Prevented linking to the legacy English `/contact/` prototype from the RWJP page.

## P0 status

**Resolved.** No decision-critical P0 fact remains open in this audit.

## Remaining publication blockers

### P1 — Accommodation detail

Daishogun Dormitory is identified for the offering. Public wording still needs confirmed room arrangement, occupancy, facilities, guarantee/conditions and any alternative-accommodation rule that is appropriate for publication.

### P1 — Academic detail verification

The flagship page currently describes morning Japanese study, presentations, quizzes, tests and transcripts. These statements must be tied to the current approved academic authority before indexability is enabled.

### P1 — Student interaction and culture detail

Current copy is deliberately cautious, but formal interaction model and current cultural-activity scope should be checked against the responsible domains.

### P1 — Japanese Contact / Application journey

Do not link RWJP to the legacy English prototype. Enable real CTAs only after the Japanese destination exists.

### P2 — UAT

Before publication:

- desktop
- tablet
- 390px
- 320px
- keyboard focus
- anchor/sticky-header behaviour
- image crop
- reduced motion
- heading hierarchy
- metadata/canonical

## Release rule

Keep `noindex,nofollow` until P1 publication checks are resolved and Preview UAT passes.

Target: **GO — RWJP Japanese Master Page**, then use the same completion standard for RWJP Express, RDSP and RBMP.
