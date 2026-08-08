# 11_DECISIONS.md

# RSJP Experience System — Decision Log

Record major decisions here.

Do not rewrite history. Add a new decision when a previous decision is superseded.

## Decision Format

### YYYY-MM-DD — Short decision title

**Status:** Proposed / Accepted / Superseded / Rejected

**Context**  
What problem or constraint required a decision?

**Decision**  
What was decided?

**Reasoning**  
Why was this chosen?

**Alternatives considered**  
What meaningful alternatives were considered?

**Consequences**  
What becomes easier, harder, or intentionally deferred?

**Supersedes / Superseded by**  
Reference another decision if applicable.

---

## 2026-08-08 — Adopt the RSJP Experience System Handbook

**Status:** Accepted

**Context**  
AI-assisted development requires consistent product, UX, UI, content, data, and engineering rules so that different tools do not make incompatible local decisions.

**Decision**  
Use the RSJP Experience System Handbook as the central design and implementation framework.

Root operational files remain concise. Long-form specifications live under `docs/handbook/`.

**Reasoning**  
Separating operational rules from formal specifications keeps everyday AI context focused while preserving deeper rationale.

**Consequences**  
New work should follow the handbook. Existing working areas should not be rewritten solely for cosmetic conformity.

---

## 2026-08-08 — MVP does not require a CMS

**Status:** Accepted

**Context**  
The immediate goal is to ship a strong recruitment experience without adding operational and approval complexity that is not yet necessary.

**Decision**  
Do not introduce a CMS during MVP unless explicitly re-approved based on demonstrated operational need.

**Reasoning**  
A CMS adds architecture, vendor, workflow, and governance complexity. The current product should first prove its content model and workflows.

**Consequences**  
Content and programme facts should still be separated sufficiently to make later migration practical.

---

## 2026-08-08 — Prefer Astro, TypeScript, GitHub, and Vercel for the current implementation

**Status:** Superseded

**Context**  
The early project direction assumed a lightweight static-first architecture and Vercel deployment.

**Decision**  
Prefer Astro + TypeScript with GitHub and Vercel for the current implementation.

**Reasoning**  
This reflected the intended direction before the repository deployment configuration was inspected during PR review.

**Consequences**  
This decision is retained as history but is no longer the current deployment direction.

**Supersedes / Superseded by**  
Superseded by `2026-08-08 — Use the existing GitHub Pages deployment for the current implementation` below.

---

## 2026-08-08 — Student-first recruitment experience, not a corporate university-site replica

**Status:** Accepted

**Context**  
Traditional university information architecture often reflects organisational structure rather than prospective-student decision needs.

**Decision**  
Organise the RSJP Experience System around prospective-student questions and actions.

**Reasoning**  
The site's purpose is recruitment, understanding, trust, and application confidence.

**Consequences**  
Institutional identity remains important, but internal organisational hierarchy must not define the primary navigation or content structure.

---

## 2026-08-08 — Adopt authoritative-domain cross-spec governance

**Status:** Accepted

**Context**  
Programme-facing specifications repeat important facts across Programme Page, Syllabus, Student Interaction, Accommodation, Safety & Support, Comparison, Application, Pre-Arrival, and FAQ views. Without explicit governance, repeated facts can drift or create competing Sources of Truth.

**Decision**  
Adopt `21_CROSS_SPEC_GOVERNANCE.md`. Each changing fact belongs to one authoritative domain. Derivative views may display the fact but may not redefine it. A detected factual conflict blocks publication until the authoritative source/owner resolves it.

Use one canonical content lifecycle (`Draft`, `Fact Check Required`, `Review`, `Ready for Publication`, `Published`, `Archived`) and separate domain-specific review flags from lifecycle status. Use canonical fact certainty states (`Confirmed`, `Provisional`, `Unknown`, `Not Applicable`).

**Reasoning**  
This prevents AI, staff, or duplicated page copy from silently choosing between conflicting values. It also allows shared structured data, future CMS tooling, and multiple language views to remain consistent without making the tool itself the authority.

**Alternatives considered**  
- one universal document as the Source of Truth for all facts,
- allowing each page/specification to own its own copy of repeated facts,
- resolving conflicts by newest timestamp or apparent plausibility.

These alternatives were rejected because different fact types have different real owners, and recency/plausibility cannot establish truth.

**Consequences**  
Current offering facts must be traceable to their domain source. Previous-year values remain references only. Material changes require review of dependent views. AI may identify conflicts but must not decide which conflicting fact is true without authoritative evidence.

**Supersedes / Superseded by**  
Clarifies and strengthens the Source-of-Truth rules in the original handbook adoption decision.

---

## 2026-08-08 — Use the existing GitHub Pages deployment for the current implementation

**Status:** Accepted

**Context**  
Repository inspection confirms that the implemented deployment pipeline is GitHub Pages through `.github/workflows/deploy-pages.yml`, with operator guidance in `README-GITHUB-PAGES.md`. No approved Vercel deployment configuration exists in the repository.

**Decision**  
Treat Astro + TypeScript + GitHub + GitHub Pages as the current implemented technical/deployment direction. Continue using the existing GitHub Pages workflow unless a later approved migration changes the deployment platform.

**Reasoning**  
Technical documentation must describe repository reality rather than an intended or assumed platform. This prevents agents from bypassing the working deployment pipeline or creating a second deployment Source of Truth.

**Alternatives considered**  
- document Vercel as a parallel deployment target,
- migrate to Vercel immediately.

Both were rejected because no approved migration or repository configuration currently supports them.

**Consequences**  
Technical specifications and root guidance should refer to GitHub Pages. A future move to Vercel or another host requires an explicit decision and corresponding repository changes.

**Supersedes / Superseded by**  
Supersedes the earlier same-day Vercel preference decision.
