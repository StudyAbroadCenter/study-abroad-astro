# RWJP PR49 Professional Polish Audit — 2026-08-15

Status: IMPLEMENTED / CI & VISUAL UAT PENDING

## Goal
Raise the RWJP page from a technically complete concept-photo implementation to a professional university recruitment experience focused on clarity, natural Japanese, visual hierarchy, and honest image disclosure.

## Changes
- Remove the standalone AI concept-photo gallery introduced in PR48.
- Reuse the verified local concept WebP assets directly inside the existing RWJP experience cards.
- Use concept imagery only for Japanese study, student interaction, and Kyoto/place-based learning scenes.
- Keep a small `生成イメージ` badge on each generated image.
- Add one concise disclosure near the experience section rather than repeating long warnings.
- Simplify headline punctuation and remove sentence-like full stops from short titles and banners.
- Shorten several headings that felt explanatory or unnatural as UI copy.
- Improve card padding, heading balance, line-height, media crop, border radius, and shadow restraint.
- Preserve all existing factual programme copy, evidence boundaries, and 2027 canonical facts.

## Editorial rule
Titles, banners, navigation labels, and short visual headings should generally avoid Japanese full stops and unnecessary commas. Full explanatory paragraphs retain normal punctuation for readability.

## Image rule
Generated images are concept imagery only. They do not represent actual participants, confirmed class scenes, or evidence of a specific 2027 activity. Generated images remain visibly labeled.

## UAT focus
- Desktop visual hierarchy and image crops
- Tablet layout
- 390px and 320px readability
- No beige/broken placeholders in the three concept-image scenes
- Generated-image disclosure remains visible but unobtrusive
- No regression to Apply / Applicant Readiness / factual content
- Astro CI and Vercel Preview green
