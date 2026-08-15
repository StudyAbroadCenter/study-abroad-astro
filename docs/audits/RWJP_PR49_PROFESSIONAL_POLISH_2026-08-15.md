# RWJP PR49 Professional Polish Audit — 2026-08-15

Status: IMPLEMENTED / CI & VISUAL UAT PENDING

## Goal

Raise the RWJP page to a professional university recruitment experience suitable for prospective students, overseas university partners, senior university leadership and public-sector review.

The target is a calm, credible and highly finished experience built around:

- natural Japanese typography
- restrained Ritsumeikan enji accents
- light institutional surfaces
- curated real photography
- verified programme facts and historical evidence
- clear applicant decision support

## Implemented changes

- Remove the standalone AI concept-photo gallery introduced during the earlier mock-up phase.
- Replace temporary concept imagery with five curated real-photo WebP assets.
- Place real photography directly into existing RWJP learning, interaction, culture, Kyoto and presentation areas.
- Remove generated-image badges and generated-image disclosure from the live page.
- Keep real photography documentary in character with restrained crop, exposure, white-balance and privacy softening.
- Move long runs of charcoal / near-black surfaces toward warm white, ivory, pale greige and light sage.
- Use Ritsumeikan enji as an accent for kickers, fine rules, CTA and selected emphasis rather than as a large background surface.
- Simplify headline punctuation and remove sentence-like full stops from short titles and banners.
- Reduce oversized Japanese display type where it created unnecessary vertical stacking.
- Protect important Japanese heading lines and phrases from mid-word or orphaned-particle wrapping.
- Remove Japanese heading dependence on `ch` width units.
- Remove `text-wrap: balance` from Japanese display headings where browser balancing could create unnatural line breaks.
- Preserve verified 2027 programme facts and 2023–2026 historical participation evidence.
- Make worldwide participation explicit while retaining the definition that country / region refers to the location of the sending university or institution, not participant nationality.

## Japanese typography rule

Headings must be treated as visual information units rather than prose paragraphs.

Rules:

1. Short headings, banners and card titles normally do not end with `。`.
2. Avoid unnecessary `、` in short display copy.
3. Body copy keeps normal Japanese punctuation.
4. Do not use `ch` to constrain Japanese display-heading width; use `em`, `rem`, grid width or explicit semantic line structure.
5. Do not use `text-wrap: balance` on Japanese H2/H3 headings when it may rebalance text at unnatural phrase boundaries.
6. Desktop headings should remain on one line when they comfortably fit.
7. Longer concept headings should normally remain within two or three semantic lines.
8. Never leave particles or fragments such as `が`, `を`, `こと`, or part of a word isolated on the next line.
9. When a line break is editorially intentional, encode the semantic line or phrase explicitly and prevent internal wrapping at desktop sizes.
10. At mobile widths, reduce type scale before allowing a protected semantic phrase to overflow.

## Photography rule

Real photography is preferred.

Current adopted assets are tracked in `docs/rwjp/RWJP_PHOTO_LIBRARY.md` and stored under:

`public/images/programs/rwjp/real/`

Public-web treatment should:

- preserve natural skin tones and documentary character
- crop for story and context rather than simply filling a rectangle
- prefer distance, back / side views and gentle detail softening for privacy
- avoid obvious mosaic anonymisation
- avoid implying that a photographed activity is a confirmed 2027 activity unless independently verified in canonical programme data

## Evidence boundary

Verified 2023–2026 overall evidence remains:

- 522 participants
- 27 countries / regions
- 114 universities / institutions
- RSJP 153
- RSJP Express 158
- RWJP 140
- RWJP Express 71

RWJP-specific evidence remains:

- 140 participants
- 9 countries / regions
- 18 universities / institutions

Country / region means the location of the sending university or institution, not participant nationality. Historical participation does not imply current partnership, current recruitment eligibility or future acceptance.

## UAT focus

Before merge, verify:

- desktop wide-screen visual hierarchy
- intermediate / tablet width
- 390px mobile
- 320px mobile
- no Japanese word split inside major H1/H2/H3 copy
- no orphaned particles or one-word second lines
- no horizontal overflow caused by protected semantic phrases
- no unnecessary forced line break where a short heading fits on one line
- header and CTA readability
- Global Reach title and historical-evidence hierarchy
- real-photo crops and image integrity
- Apply / Applicant Readiness flow
- GitHub Actions green
- Vercel Preview ready
- no unresolved P1 / P2 review findings

## Final judgement rule

A green build alone is not sufficient for Merge GO.

Final GO requires code checks and visual UAT to agree that the page is natural at desktop, tablet, 390px and 320px widths.
