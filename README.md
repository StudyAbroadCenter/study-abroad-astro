# Ritsumeikan Study Abroad / Short-Term Inbound Programmes

Astro-based website for Ritsumeikan University Study Abroad Center short-term inbound programmes.

Production:
https://study-abroad-astro.vercel.app/

## Current status

The Japanese site is the current master product experience.

**Japanese Master MVP = FIXED**

The Japanese design, information architecture, verified facts, photography rules and visual hierarchy are treated as the baseline for future language editions. The Japanese site should not be changed casually while other languages are being developed.

The English localisation phase is in progress on a separate pull request. English is being authored for international readers rather than translated sentence by sentence from Japanese. Korean, Simplified Chinese and Traditional Chinese for Taiwan are planned future locales.

## Core publishing rule

> Official information is short and strong. Student-facing copy may play. Facts never play.

Programme facts must not be invented, inferred from old material or strengthened for marketing purposes.

Dates, fees, application periods, eligibility, accommodation, campus, recruitment status, application URLs and participation evidence must come from verified programme data or another documented authoritative source. If a current fact is not confirmed, the site should leave it unpublished, clearly mark it as pending, or fail closed.

Language-specific copy is a presentation layer. It must never become an independent factual source.

## Multilingual architecture

The project is moving toward one factual foundation with separately authored language experiences.

```text
Canonical / verified programme facts
            |
            +-- Japanese     /
            +-- English      /en/
            +-- Korean       /ko/          planned
            +-- Simplified Chinese /zh-cn/ planned
            +-- Traditional Chinese /zh-tw/ planned
```

This means a future change such as a programme date or fee should be made at the factual source and then reflected consistently across every published locale. The implementation is being migrated toward this model incrementally; do not assume every historical programme field has already been fully centralised.

Localisation rules are documented in the handbook. Do not perform line-by-line translation or maintain duplicate factual values independently for each language.

## Programme scope

The current site includes the following short-term inbound programme pathways:

- Ritsumeikan Summer Japanese Program (RSJP)
- RSJP Express
- Ritsumeikan Winter Japanese Program (RWJP)
- RWJP Express
- Ritsumeikan Data Science Program (RDSP)
- Ritsumeikan Business Management Program (RBMP)
- Custom Programs for overseas universities and educational institutions

Custom Programs are institution-to-institution programmes. They are not an individual-student application pathway.

## Important factual boundary

Not every programme currently has a complete set of confirmed annual public information.

Some programme pages may still be awaiting authoritative confirmation of items such as:

- annual dates
- fees
- application periods and methods
- eligibility
- accommodation
- recruitment status

This is an information-governance state, not permission to fill gaps with plausible values.

RWJP 2027 has a dedicated verified fact boundary in the repository. Other programme-year facts must be verified independently before publication.

Historical participation data is evidence of past participation only. It does not imply participant nationality, a current institutional partnership, current eligibility or future acceptance.

## Repository governance

Start with these files before changing programme content or architecture:

```text
AGENTS.md
PRINCIPLES.md
PROJECT.md
UX.md
DESIGN.md
CONTENT.md
HANDBOOK.md
docs/handbook/
docs/audits/
```

Key rules include:

- factual conflicts are publication blockers
- previous-year information is reference-only until re-verified
- programme pages, FAQs and comparison views are derivative views, not Sources of Truth
- AI must not choose the value that merely looks most plausible
- Japanese Master MVP remains fixed except for confirmed factual updates, defects or approved content/media replacement
- multilingual copy may be rewritten naturally, but factual meaning may not change

## Data and implementation

The repository contains several generations of data structures because the project evolved from an early prototype into a governed recruitment site.

Do **not** treat legacy `src/content/programs/` prototype records as authoritative programme facts.

Current factual and policy data is increasingly held under `src/data/`, with programme-specific canonical boundaries where available. Check the relevant governance and audit documents before editing any public-facing fact.

The project uses Astro and TypeScript with reusable components, local photography, responsive layouts and build-time image optimisation.

## Photography

Photography must have a known role and provenance.

The repository may contain:

- verified programme photography
- related-programme reference photography
- layout/reference photography
- clearly labelled concept imagery

Reference or concept imagery must never be presented as evidence that a specific programme activity or participant experience occurred.

Some RWJP Express imagery remains provisional and is explicitly disclosed as such until verified programme-specific photography is available.

## Validation

Changes should normally pass the repository's CI and visual review gates before merge.

Current validation includes:

- Astro check/build
- Japanese Visual UAT
- responsive review including desktop, 390px and 320px widths
- HTTP / JavaScript / local-resource error checks
- horizontal-overflow checks
- screenshot artefacts for review

Language-specific UAT should be added as each locale becomes active.

## Local development

Use a current Node.js release supported by the project.

```sh
npm install
npm run dev
```

For a production-style check:

```sh
npm run check
npm run build
npm run preview
```

## Publication and privacy

This repository is public. Do not commit personal, confidential, restricted or sensitive information.

Do not publish applicant or participant personally identifiable information. Public programme content must stay within the approved factual and privacy boundaries documented in the repository.

## Development direction

Current sequence:

1. keep the Japanese Master MVP stable
2. complete English localisation with native English editorial review
3. extend the same factual architecture to Korean
4. add Simplified Chinese and Traditional Chinese for Taiwan
5. continue replacing provisional media and pending annual facts as authoritative materials become available

The goal is not to create five translated copies of one website. The goal is one trustworthy programme-information system presented naturally for each language audience.
