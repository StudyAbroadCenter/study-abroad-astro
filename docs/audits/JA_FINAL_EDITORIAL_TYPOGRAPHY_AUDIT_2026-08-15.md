# Japanese Master — Final Editorial & Typography Audit

Date: 2026-08-15  
Branch: `agent/ja-final-editorial-polish`  
Status: IMPLEMENTATION IN PROGRESS / VISUAL UAT REQUIRED

## Purpose

Finish the unprefixed Japanese website as the controlled master product experience before English localisation begins.

The target is not louder marketing. The target is a highly legible, confident and memorable university recruitment experience that can withstand review by prospective students, partner universities, Ritsumeikan leadership, public-sector reviewers and internal programme owners.

## Editorial principle

**Official information is short and strong. Student-facing copy may play. Facts never play.**

### Tier A — facts / evidence / eligibility / cost / application / safety

- calm
- exact
- short sentences
- no meme references
- no unsupported superlatives
- no emotional guarantees
- no invented current values

### Tier B — programme value / academic experience / campus / student interaction

- concise
- active verbs
- concrete nouns
- one idea per sentence
- warm but realistic
- no guaranteed friendship or outcomes

### Tier C — student-facing discovery / cards / lifestyle moments

- rhythmic
- contemporary
- a small amount of playful language is allowed
- playful wording must remain understandable without knowledge of the reference
- do not let trend references become the main institutional voice

Approved style examples:
- `2週間でも、イイじゃん。`
- `学びも、出会いも。倍々に。`
- `見るだけじゃ、もったいない。`
- `何が好き？ 日本語？ 京都？ 人との出会い？`

Avoid direct imitation of songs, celebrities or campaign catchphrases when the reference itself is doing more work than the programme meaning.

## Japanese line-break rules

1. High-value display headings are authored by semantic line, not browser balancing alone.
2. Desktop target: normally 1–2 lines for major H2 headings.
3. A three-line heading is acceptable only when the semantic rhythm genuinely benefits.
4. Never allow a particle, auxiliary expression or word fragment to become an accidental line by itself.
5. Never use `ch` as a Japanese character-count width proxy.
6. Do not solve overflow by shrinking Japanese text below a readable size.
7. At 320px and 390px, release desktop `nowrap` when necessary and reflow by meaning.
8. Use Japanese kinsoku behaviour (`line-break: strict`) and semantic spans where display copy matters.

## Typography floor

Target visual-review sizes, not absolute legal constraints:

- ordinary explanatory body: about 16–17px
- compact card body: about 15px
- important helper text: about 14px
- source / legal / historical note: about 12.5–13.5px
- decorative English labels may be smaller, but they may never carry primary meaning alone
- buttons/filters must remain readable on a projector and at 390px

Tiny copy must never be used as a layout escape hatch.

## Section-spacing rule

Whitespace must establish hierarchy, not create empty screens.

Audit every transition for:
- duplicated top/bottom padding
- empty spacer bands
- large blank areas caused by fixed/min heights
- heading blocks separated too far from the content they introduce
- footer transitions that feel disconnected

Do not compress the site into a dashboard. Keep editorial breathing room while removing accidental dead space.

## Truth / governance rules

Follow the handbook domain rules.

- one fact / one authority / many views
- historical participation is historical evidence, not a current partnership claim
- Student Interaction may show opportunity but never guarantee friendship
- accommodation and safety claims require their real current authority
- application CTA must match the real application status and route
- old-year values and prototype facts cannot become current facts through copy editing

## Page inventory in this audit

### Japanese master
- `/`
- `/programs/`
- `/programs/rsjp/`
- `/programs/rsjp-express/`
- `/programs/rwjp/`
- `/programs/rwjp-express/`
- `/programs/rdsp/`
- `/programs/rbmp/`
- `/programs/custom-programs/`
- `/about/`
- `/faq/`
- `/contact/`
- `/404.html` / 404 route

### Shared homepage surfaces
- Header / footer
- Hero
- Programme Finder
- Programme cards
- Experience Pillars
- International Learning Impact
- Global Evidence / Global Reach
- Real Photo Story
- Participant Day
- Campus Journey
- Support Preview

## Known findings before implementation

### P0 / credibility
- `/programs/`, `/about/`, `/faq/`, `/contact/` and 404 still contain obsolete English prototype / fictional-site copy.
- `/programs/` independently hard-codes sample programme facts, including values that can conflict with current programme sources.

### P1 / editorial
- several explanatory paragraphs are longer than needed
- some Japanese headings are oversized and depend on browser wrapping
- historical/evidence copy is sometimes too verbose for the visual role
- some student-interaction copy implies `friend` outcomes more strongly than the formal interaction policy allows
- `Buddy` appears in a site-wide illustrative day even though the interaction model is programme-specific

### P1 / readability
- multiple helper labels and programme-card details have been styled below comfortable presentation size
- source notes are sometimes close to 11px
- labels around Global Evidence and Program Finder are readable on a laptop but weak on a projector

### P2 / tone
- the site contains good playful moments but they are not yet governed consistently
- some formal sections are too promotional while some student-facing sections are too administrative

## Japanese completion gate

Do not start full English localisation until:

- obsolete English prototype routes are removed, redirected or rebuilt as Japanese master pages
- every current Japanese route has coherent navigation and visual identity
- major display headings pass desktop and mobile line-break review
- ordinary explanatory text is comfortably readable
- no known factual contradiction remains
- no current-page copy guarantees social outcomes unsupported by the interaction spec
- programme cards link to real or clearly labelled MVP programme pages
- current application CTA logic remains honest
- 320px / 390px / tablet / desktop visual UAT passes
- GitHub Actions and Vercel Preview are green

## English handoff

After the Japanese completion gate:

- retain the same visual system and information hierarchy
- author English from the approved Japanese intent + verified facts
- do not translate sentence-by-sentence
- rewrite headings, CTAs, paragraph order and explanation so an English-speaking student reads it as native English
- keep dates, fees, eligibility, academic facts, accommodation, application status and contact destinations fact-identical
- review every page at 320px / 390px / tablet / desktop because English expands differently

The English quality gate is: **Would a prospective English-speaking student believe the page was written for them in English?**
