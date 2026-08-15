# Japanese Recruitment Site — Institutional Polish Audit

Date: 2026-08-15
Status: IMPLEMENTED / CI & VISUAL UAT PENDING

## Goal

Raise the Japanese recruitment website from a strong prototype to a professional university-grade recruitment and institutional communication experience.

The target is not visual spectacle. The target is clarity, trust, evidence, international reach and a level of finish suitable for prospective students, overseas university partners, senior university leadership and public-sector review.

## Design judgement

The previous build had several strong sections but accumulated too many dark surfaces. Navy, charcoal and near-black panels appeared in sequence and made the page feel heavier than the programme itself.

The final direction is therefore:

- warm white and ivory as the default surface
- pale greige and very light sage for section changes
- Ritsumeikan enji as the primary accent
- dark colours reserved for text and limited high-contrast moments
- photography as the main source of energy
- thin borders and restrained shadows instead of heavy card depth

## Ritsumeikan enji rule

Enji is an accent, not a background wallpaper.

Use it for:

- section kickers
- small rules and dividers
- selected states
- important numeric accents
- primary CTA
- small labels and navigation emphasis

Avoid large continuous enji surfaces unless there is a clear communication reason.

Current web-tuned enji token: `#8b2432`.

Before final public launch, confirm the official CI/VI web colour value if an authoritative brand asset or guideline becomes available.

## Typography rule

Primary Japanese UI and body typeface: Noto Sans JP.

Headings should behave as headings, not as prose sentences.

Rules:

1. No final Japanese full stop `。` in short headings, banners or card titles.
2. Avoid commas in short headings unless the meaning genuinely requires them.
3. Body copy keeps normal Japanese punctuation.
4. Do not force visually balanced line breaks on short H2/H3 text.
5. Desktop headings should stay on one line when the available width allows it.
6. Mobile headings may wrap naturally at semantic phrase boundaries.
7. Avoid orphaned particles and one-word second lines.
8. Prefer hierarchy through spacing, weight and scale instead of decorative punctuation.

## Colour and surface audit

Implemented changes:

- common fixed header changed from dark translucent navy to warm translucent white
- scrolled header remains light rather than switching to a dark bar
- primary navigation CTA changed to restrained enji
- Programme Finder changed toward warm ivory and white
- partner/custom-programme panel changed from bright/dark blue to pale enji/ivory
- International Learning section changed from teal-led styling to warm white with enji accents
- Global Reach changed from near-black dashboard styling to an editorial light evidence section
- RWJP Japanese-study section changed from a long charcoal surface to pale grey-green
- RWJP transition panel remains pale enji rather than saturated colour
- RWJP final apply section changed from charcoal to warm light neutral
- common footer changed from another dark wall to a light institutional finish

## Global reach and evidence

The site must make international reach explicit, while remaining precise about what the figures mean.

Verified 2023–2026 evidence:

- 522 participants
- 27 countries / regions
- 114 universities / institutions
- RSJP: 153
- RSJP Express: 158
- RWJP: 140
- RWJP Express: 71

RWJP-specific evidence:

- 140 participants
- 9 countries / regions
- 18 universities / institutions

RWJP Express-specific evidence:

- 71 participants
- 6 countries / regions
- 15 universities / institutions

Editorial rule:

Use the wording `世界◯か国・地域から` so that worldwide participation is visible before the user reads the detailed statistics.

Country / region refers to the location of the sending university or institution, not participant nationality.

Historical participation must not imply current partnership, current recruitment eligibility or future acceptance.

## Global Reach visual hierarchy

Order of communication:

1. worldwide reach
2. verified participant count
3. university / institution count
4. representative photography
5. lightweight globe / network motif
6. programme-level totals
7. searchable historical institution directory where relevant

The section should read as institutional evidence, not as a KPI dashboard.

## Photography rule

Real photography is preferred.

Current implementation uses curated real photography for RWJP Japanese study, broader learning, cultural learning, Kyoto activity and presentation/output.

Future photo replacement rules:

- prefer real programme or related international-education photography
- avoid heavy filters
- preserve natural skin tones
- crop for story and subject, not merely to fill a rectangle
- avoid obvious mosaic treatment
- where privacy requires it, prefer distance, back/side views, crop and gentle detail softening
- keep a consistent WebP delivery format
- do not use a photograph as evidence that the exact photographed activity is confirmed for a future programme year unless separately verified

Photo candidates and selected assets are tracked in `docs/rwjp/RWJP_PHOTO_LIBRARY.md`.

## Layout and spacing rule

- generous whitespace is intentional
- avoid long runs of visually identical cards
- use alternating light surfaces sparingly to create rhythm
- keep card radii moderate rather than SaaS-like
- keep shadows very soft
- avoid dense borders
- section headings should have enough breathing room from body copy
- images should align to the surrounding text block rather than float as decoration

## Copy rule

The site should sound like a university that understands the student experience, not like advertising copy generated from slogans.

Prefer:

- concrete nouns and verbs
- short headings
- verified facts
- calm confidence
- human-scale descriptions of study and daily life

Avoid:

- exaggerated outcome claims
- repeated emotional slogans
- excessive punctuation
- artificial contrasts
- unsupported claims of partnership, nationality or guaranteed educational outcomes

## Accessibility and responsive requirements

Final visual UAT must check:

- desktop wide screen
- intermediate / tablet width
- 390px mobile
- 320px mobile
- header readability and menu contrast
- no orphaned Japanese particles in major headings
- focus visibility after colour changes
- CTA contrast
- Global Reach country search
- details / summary keyboard and touch behaviour
- real-photo crops
- no broken image assets
- no horizontal overflow

## Final readiness gate

Do not merge solely because the build is green.

Final GO requires:

1. GitHub Actions green
2. Vercel Preview ready
3. no unresolved P1/P2 review threads
4. desktop visual UAT
5. 390px and 320px visual UAT
6. verified evidence values unchanged
7. no broken photography
8. no accidental regression in Apply / Applicant Readiness

## Remaining work after this PR

Photography can continue to improve incrementally. The visual system should not be redesigned again each time a photo changes.

The next photo work should therefore be treated as asset curation inside the fixed institutional design system, not as another structural redesign.
