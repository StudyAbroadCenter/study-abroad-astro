# English RWJP Flagship Standard

Status: **VISUAL POLISH DRAFT — DO NOT MERGE**

## 1. Purpose

RWJP is the first English programme-detail flagship and the quality reference for later English programme pages.

The goal is not to translate the Japanese page and not to imitate a generic English-language university landing page. The goal is to create a Ritsumeikan page that feels art-directed for an international audience while remaining factually identical to the Japanese master where facts are concerned.

## 2. Two sources of truth

### Facts

**Canonical RWJP data is the factual source of truth.**

Dates, fees, academic load, eligibility, accommodation, application period, payment and refund rules must come from authoritative data or verified Japanese master content. English copy must never become a second factual database.

### Visual direction

**The approved English RWJP mockup is the visual source of truth.**

Its defining elements are:

- red `RITSUMEIKAN UNIVERSITY` wordmark with restrained Short-Term Programs sublabel;
- a cinematic, full-width Kyoto landscape hero;
- large white editorial serif typography over photography;
- a thin Ritsumeikan-red accent rather than decorative clutter;
- a clean white sticky programme navigation with a strong red application CTA;
- an integrated opening spread combining the five-week story, `57.5 HOURS`, and four learning pillars;
- warm paper / blush neutrals balanced by deep navy and Ritsumeikan red;
- a Global Reach composition built as **map / network on light ground + evidence on deep navy**, not a collage of cards;
- large evidence numbers with calm institutional labels;
- strong rhythm between photographic, editorial, factual and decision-making sections.

The live implementation is judged against this composition and tone, not against earlier PR #56 iterations.

## 3. Core design model

**Approved Mockup Art Direction × Native English Editorial × Verified Canonical Facts**

The Japanese site remains the programme-meaning and factual reference. It is not a rigid layout template for this English flagship. English may use its own hierarchy, line breaks, typography scale and section composition when that improves native readability and visual quality.

## 4. Current implementation source of truth

The active English RWJP implementation is:

- page component: `src/components/EnglishRwjp2027Page.astro`;
- route: `src/pages/en/programs/rwjp/index.astro`;
- single page stylesheet: `src/styles/english-rwjp-2027.css`;
- visual gate: `scripts/english_rwjp_visual_uat.mjs`.

The route must use an isolated `rw26-*` component namespace and import only `english-rwjp-2027.css` for RWJP-specific styling.

Retired RWJP styles must not be reintroduced:

- `english-rwjp.css`;
- `english-rwjp-layout-fixes.css`;
- `english-rwjp-art-direction.css`;
- `english-rwjp-art-fixes.css`;
- `english-rwjp-rebuild.css`;
- `rwjp-flagship.css`;
- `rwjp-professional-polish.css`;
- `global-learning-evidence.css`;
- `global-reach-network.css`.

Solve visual problems in the current DOM and current single stylesheet rather than adding another override layer.

## 5. English editorial standard

- Write for university students who naturally read English.
- Interpret the Japanese idea; do not translate Japanese copy line by line.
- Prefer concrete language over generic study-abroad claims.
- Keep institutional facts calm and exact.
- Allow student-facing headings to have rhythm and personality.
- Avoid unsupported promises about fluency, friendship, transformation, access or outcomes.
- Distinguish organised programme elements from participant free time.
- State annual uncertainty where arrangements may change.
- Use `Program` / `Center` consistently in the English public interface.

### Core RWJP line

**Study Japanese. Live in Kyoto.**

It expresses the verified combination of Japanese study and a five-week stay in Kyoto without promising a residential, tourism or transformation outcome.

## 6. Page choreography

The flagship must have visible changes of pace rather than one long flat column.

1. **Brand + Kyoto Hero** — Ritsumeikan first, Kyoto immediately visible, one strong message.
2. **Sticky programme nav** — orientation and application path.
3. **Five-week editorial spread** — story + `57.5 HOURS` + Learn / Use / Check / Record.
4. **Experience** — restrained real programme photography at a size justified by source resolution.
5. **Living in Kyoto** — one immersive winter scene and practical life notes.
6. **Is it for me?** — eligibility written as a decision aid, not legalistic fine print.
7. **Taishogun Dormitory** — concise accommodation facts and walking-distance visual.
8. **Global Reach** — illustrated world network + deep-navy evidence panel.
9. **2027 Essentials** — calm factual table.
10. **Payment / Refund** — explicit decision information.
11. **Application** — clear three-step route and JST-aware application state.

## 7. Photography quality gate

Photography is part of the design, not decoration.

- A large hero must use a source image that remains sharp at the rendered width.
- A small programme photograph must never be enlarged merely to fill a layout box.
- If the source photograph cannot support the intended size, reduce the design footprint, replace it, or remove it.
- Visual UAT must fail when rendered image width exceeds the accepted source-resolution threshold.
- Generated mockup imagery may guide composition but must not silently be presented as documentary programme photography.
- Photo provenance rules remain mandatory.

## 8. Brand rule

The English header must visibly identify Ritsumeikan before the user reads programme copy.

The approved mockup uses a red `RITSUMEIKAN UNIVERSITY` wordmark treatment with `SHORT-TERM PROGRAMS` beneath it. Do not substitute a generic dark text label. If an authorised official graphic logo asset is later supplied, it may replace the text wordmark without changing the surrounding hierarchy.

## 9. Global Reach rule

Historical participation evidence must remain exact:

- 293 participants;
- 21 countries / regions;
- 81 universities / institutions;
- reporting period 2023–2026;
- RSJP + RWJP five-week programmes only;
- country / region means university or institution location, not nationality;
- historical participation does not imply a current partnership.

The network graphic is an editorial visualisation of geographic reach. It must not invent additional participant counts or partnership claims.

## 10. Application rule

The application CTA must respect the confirmed application period in Japan Standard Time.

Before the period: show when applications open and do not expose the live application action as available.

During the period: enable the official application link.

After the period: show that applications are closed.

## 11. Visual polish standard

A technically correct page is not enough. Final review must check:

- Hero has immediate Kyoto identity and sufficient photographic sharpness;
- Hero heading remains a deliberate two-line composition on desktop;
- the opening story remains a deliberate three-line composition on desktop;
- `57.5 HOURS` is visually dominant without colliding with the learning pillars;
- real programme photographs are never enlarged beyond the source-quality gate;
- sections alternate in density and tone so the page does not become visually flat;
- deep navy, Ritsumeikan red, warm paper and restrained sage/blush are used as a coherent palette;
- typography, rules, spacing and evidence numbers feel editorial rather than template-driven;
- motion is subtle, progressive-enhancement only, and disabled with `prefers-reduced-motion`;
- mobile is designed as its own reading rhythm, not a shrunken desktop page.

## 12. UAT / merge gate

PR #56 remains Draft until all of the following pass:

- Astro check / production build;
- Japanese Visual UAT regression;
- English Top Visual UAT regression;
- English RWJP Desktop 1536px;
- English RWJP Mobile 390px;
- English RWJP Mobile 320px;
- no horizontal overflow;
- no missing or unloaded local images;
- no image upscaling beyond the agreed threshold;
- no `Daishogun` / `Daihogun` public text;
- `Taishogun Dormitory` present;
- Ritsumeikan wordmark present;
- full-width hero, academic-load spread, dormitory walking-distance visual and Global Reach composition present;
- no overlap between `57.5 HOURS` and learning pillars;
- correct pre-open / open / closed application behaviour;
- final screenshots reviewed visually against the approved mockup.

**Green CI is necessary but not sufficient. The final merge decision requires visual comparison with the approved mockup.**

## 13. Multilingual reuse

RWJP English becomes a quality model, not a sentence template.

Future Korean, Simplified Chinese and Traditional Chinese pages must return to:

1. Canonical facts;
2. Japanese programme meaning;
3. the shared Ritsumeikan visual language;
4. native editorial localisation for that language.

English copy must not become the translation source for other languages.
