# RWJP Japanese Completion Audit

Status: **IN PROGRESS / NOT YET PUBLICATION READY**

Scope: `/programs/rwjp/`

## Completion target

RWJP is complete only when the page is both compelling and decision-ready. Visual quality alone is not sufficient.

## Implemented in this pass

- Preserved the existing RWJP flagship visual direction.
- Added a structured `rwjp-2027-facts.ts` fact boundary with certainty and source fields.
- Connected the RWJP route to a decision-information panel.
- Added confirmed programme dates, duration, campus, learning minutes, accommodation, payment method, programme fee, application period and refund amount.
- Programme fee confirmed at **370,000 JPY**.
- Application period confirmed as **September 30, 2026 through October 14, 2026**.
- Program period confirmed as **January 12, 2027 through February 11, 2027**.
- Added a client-side application-state label derived from the confirmed application dates so the static page does not hard-code a stale status.
- Added an `Is RWJP for you?` self-assessment section.
- Added RWJP-specific title and description metadata.
- Kept `noindex,nofollow` while remaining decision-critical facts and Japanese contact/application journeys remain incomplete.
- Prevented linking to the legacy English `/contact/` prototype from the RWJP page.

## Remaining publication blockers

### P0 — Eligibility

Need approved applicant eligibility and Japanese-language prerequisites/requirements.

### P0 — Refund policy details

The confirmed refund amount is 54,000 JPY, but the applicable deadline, conditions and procedure must be verified before public policy copy is published.

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

Keep `noindex,nofollow` until all P0 blockers are resolved and Preview UAT passes.

Target: **GO — RWJP Japanese Master Page**, then use the same completion standard for RWJP Express, RDSP and RBMP.
