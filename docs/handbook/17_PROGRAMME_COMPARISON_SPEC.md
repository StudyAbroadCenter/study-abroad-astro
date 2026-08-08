# 17_PROGRAMME_COMPARISON_SPEC.md

# RSJP Experience System — Programme Comparison Specification

**Version:** 2.0  
**Status:** Formal handbook specification

## Cross-Spec Governance

This specification is a **derivative comparison view**. It owns comparison UX and comparison logic, not the underlying programme facts.

All compared values must come from the authoritative domains defined in `21_CROSS_SPEC_GOVERNANCE.md`. Comparison must never become a second manually maintained Source of Truth.

A detected factual conflict is a publication blocker.

### Canonical Fact Certainty

Use `Confirmed`, `Provisional`, `Unknown`, and `Not Applicable`. Use `Subject to change` only for a real provisional plan.

## 1. Purpose

Programme comparison should help students choose between realistic programme options without reconstructing differences across multiple pages.

Students should be able to compare fit around goals, schedule, budget, Japanese preparation, location, duration, academics, interaction, accommodation, and application timing.

**Compare differences that matter. Do not manufacture differences for marketing.**

## 2. Decision Tool, Not Ranking

Comparison should reduce confusion, repetitive enquiries, poor programme fit, and accidental application to the wrong programme.

It must not create an internal league table or imply a universal winner.

## 3. Non-Negotiable Accuracy Rules

Never:

- invent comparison values,
- fill missing data by assumption,
- rank quality without a defined method,
- create arbitrary star/number ratings,
- create unsupported `best for`, popularity, or prestige labels,
- hide disadvantages through information order,
- compare different fee scopes as equivalent,
- present provisional and confirmed values as equally certain.

## 4. What Should Be Compared

Compare only programmes sharing enough meaningful decision dimensions.

Do not force fundamentally different programme types into one matrix merely because they appear on the same website.

## 5. Comparison Modes

### Quick Comparison
For early-stage choice. Prioritise status, dates, duration, fee, location, Japanese level, accommodation, and application period.

### Detailed Comparison
For users choosing between realistic candidates. May add contact hours, academic structure, student interaction, inclusions, eligibility nuance, and accommodation detail.

### Editorial Guidance
May describe neutral fit/trade-offs, but must remain evidence-based and non-authoritative unless a validated recommendation model exists.

## 6. No Universal Winner

Students may legitimately prioritise shorter/longer study, lower cost, particular seasons/locations, stronger language focus, accommodation, or current availability.

The design should expose trade-offs rather than declare one programme best.

## 7. Core Comparison Dimensions

Potential verified dimensions include:

- programme name,
- current status,
- dates/season,
- duration,
- location/campus,
- programme fee,
- application period,
- eligibility,
- Japanese/language requirement,
- academic focus/contact hours,
- cultural/academic activities,
- student interaction,
- accommodation,
- inclusions/exclusions,
- capacity where meaningful,
- application route.

Only show useful verified dimensions.

## 8. Decision-Critical Priority

The first view should usually prioritise feasibility:

1. Status
2. Dates
3. Duration
4. Fee
5. Location
6. Language/prerequisites
7. Accommodation
8. Application period

Do not lead with decorative differentiation while hiding disqualifying conditions.

## 9. Academic Comparison

Use factual academic dimensions from `13_SYLLABUS_SPEC.md`, such as:

- Japanese-language component,
- Japan Studies component,
- contact hours,
- course level,
- assessment/attendance where relevant,
- learning format.

Do not use `Academic Depth: High` or `Language Intensity: 5/5` without an explicit approved methodology.

## 10. Contact Hours

Compare equivalent units. Prefer total instructional minutes/clock hours and number of sessions where useful.

Do not compare one programme in 90-minute periods and another in clock hours without conversion/explanation.

## 11. Fees

Fee comparison must make scope explicit:

- authoritative amount/currency,
- accommodation included or separate,
- major inclusions/exclusions.

Do not make a fee including accommodation appear directly equivalent to one excluding it.

## 12. Total Cost and Currency

Do not calculate `total cost` unless the components and method are sufficiently known and approved.

Do not invent meal/travel/personal-spending assumptions.

Foreign-currency conversions are derived and non-authoritative; the authoritative programme currency must remain clear.

## 13. Dates / Duration / Season

Use consistent, internationally clear date formats and duration units.

Do not mix weeks, nights, class days, or different offering years without explanation.

Use season only when it genuinely helps distinguish offerings.

## 14. Location

Compare campus/city and practical study-life context where useful.

Do not reduce location to tourism attractiveness or label one city better.

## 15. Language Requirements

Use real approved requirements, for example beginner accepted, hiragana/katakana required, placement-based, or prior study required.

Do not invent JLPT/CEFR/ACTFL equivalencies.

## 16. Eligibility

Make disqualifying conditions visible, such as enrolment status, age if formally required, partner affiliation, language preparation, and independent-application eligibility.

Do not bury eligibility differences under lifestyle content.

## 17. Application Status and Period

Use the canonical status vocabulary:

- `Coming Soon`
- `Open`
- `Closed`
- `Full`
- `Cancelled`

Status drives CTA behaviour. Do not infer `Open` from dates alone without an approved business rule and verified application-system state.

## 18. Accommodation Comparison

Use verified facts from `15_ACCOMMODATION_SPEC.md`, for example:

- provided/self-arranged,
- included/separate cost,
- room type/occupancy,
- guarantee/condition,
- campus access.

Do not score accommodation quality with stars.

## 19. Student Interaction Comparison

Use real structures from `14_STUDENT_INTERACTION_SPEC.md`, such as formal buddy programme, joint learning, peer exchange, or student-led activity.

Do not use vague qualitative ratings such as `Excellent`.

## 20. Cultural / Experiential Components

Compare confirmed programme structures only. Do not treat draft activities as confirmed or count activities as a quality score without a meaningful basis.

## 21. Inclusions / Exclusions

Where programmes materially differ, show major verified inclusions such as accommodation, insurance, materials, cultural activity, local transport, or meals.

## 22. Capacity and Availability

Show capacity only when confirmed and useful.

Do not equate smaller with better or imply real-time remaining seats unless the data truly is current.

## 23. Comparison Set

Prefer a small number of realistic candidate programmes over a giant matrix.

Do not preselect a `best` programme. A default set may contain commonly related programmes without implying ranking.

## 24. Interactive Selection

Interactive programme selection is optional, not required for MVP.

If used, it should not require an account and should avoid unnecessary client-side complexity. Static comparison may be preferable.

## 25. Mobile Comparison

Mobile is a primary design problem.

At 390px prefer stacked summaries, grouped dimensions, persistent programme identity where useful, and progressive disclosure.

Do not make a wide desktop table the only experience. At 320px remain usable.

## 26. Desktop Comparison

Desktop may use aligned columns, side-by-side structures, tables, or sticky programme headers where they improve scanning.

Avoid extremely wide matrices requiring constant horizontal travel.

## 27. Tables and Sticky Elements

Use tables only when row/column relationships genuinely improve understanding.

Keep programme names visible, labels concise, semantics accessible, and meaning independent of colour.

Sticky headers/columns must remain compact and keyboard/mobile safe.

## 28. Progressive Disclosure

Show decision-critical differences first. Link/expand to syllabus, accommodation, safety, detailed schedule, and policies rather than building one giant table.

## 29. Highlighting Differences

Visual highlighting may help scanning but must indicate difference, not superiority.

Shared values may be visually quieter without being hidden when decision-critical.

## 30. `Best For`, Popularity, and Rankings

Avoid unsupported labels such as:

- Best for Beginners
- Best Value
- Most Popular
- Student Favourite
- Highest Rated

Prefer factual descriptors such as `Shorter option`, `Winter offering`, `Longer language-study period`, or `Accommodation included` where accurate.

## 31. Decision Guidance

Neutral guidance may connect verified structure to a student priority, e.g. `Consider the longer programme if you want more instructional time.`

Do not turn editorial guidance into a recommendation claim beyond the evidence.

## 32. Fit Questions / Recommendation Tools

Neutral self-reflection prompts may ask about time available, Japanese preparation, preferred length/location, or accommodation needs.

A recommendation tool is not required for MVP. If introduced later, logic must be transparent, eligibility cannot be hidden, alternatives must remain visible, and unsupported personal profiling must be avoided.

## 33. Accessibility

Comparison must support semantic structure, keyboard use, visible focus, screen-reader interpretation, sufficient contrast, and text labels.

Do not rely on colour, icons, or position alone.

## 34. Language and Multilingual Consistency

Use the same terminology as programme pages.

Language versions may adapt wording but must preserve identical dates, fee, status, duration, eligibility, accommodation, and academic facts.

## 35. Data Source

Comparison should consume the same shared structured facts used by programme pages where practical.

Do not maintain a separate duplicate comparison dataset.

## 36. Derived and Missing Values

Centralise formatting/calculation for duration, status label, accommodation summary, contact hours, etc.

If derivation requires assumptions, do not derive it.

Use explicit missing states such as `To be confirmed`, `Not applicable`, or `Not available` according to actual meaning—never `0`, unexplained dashes, guessed values, or previous-year data.

## 37. Offering Consistency

Do not accidentally compare one programme's current offering with another programme's old offering without making the context explicit.

Archived programmes must not appear as current options. Cancelled status must remain unmistakable.

## 38. CTA Logic

CTA must reflect real status and verified application-system availability.

Early comparison should prioritise understanding (`View Programme`, `Compare Details`); application CTA may become prominent after fit is clearer.

Never show one universal active `Apply Now` button for all programmes regardless of status.

## 39. Comparison Page Structure

A useful page may include:

1. Short introduction
2. Programme selector/predefined set
3. Quick comparison
4. Key differences
5. Academic comparison
6. Accommodation comparison
7. Interaction/experience comparison
8. Eligibility
9. Included / Not Included
10. Programme-specific CTA
11. FAQ/guidance

Use only sections that add decision value.

## 40. Relationship to Other Specs

Comparison narrows choices; it does not replace the Programme Page.

Use concise academic facts and link to Syllabus. Summarise accommodation and link to detail. Shared Safety & Support should not be marketed as a programme differentiator unless it genuinely differs.

## 41. SEO / Performance / Analytics

Comparison pages may serve real search intent but should not spawn near-duplicate SEO pages.

Keep implementation lightweight; do not add heavy client data grids if static/stacked content works.

If approved analytics exist, comparison use/click-through may inform UX, but click-through alone does not measure programme quality.

## 42. Decision Evidence

Use real applicant enquiries/feedback to prioritise comparison dimensions over time.

Do not invent user research.

## 43. Ownership and Verification

Because comparison aggregates facts, it needs a clear content/data owner for dimension choice, terminology, data freshness, and publication readiness.

Where practical inherit source, owner, verification date, offering, and certainty from the authoritative data rather than creating comparison-only metadata.

## 44. Publication Lifecycle

Use:

1. `Draft`
2. `Fact Check Required`
3. `Review`
4. `Ready for Publication`
5. `Published`
6. `Archived`

Possible blocking review flag:

- `Cross-Programme Consistency Check Required`

A comparison cannot be ready while decision-critical values for a compared programme remain unresolved.

## 45. Change Control

Changes to dates, fee, status, duration, eligibility, accommodation, academic hours, or application period require comparison review.

Build from shared programme data where practical so core facts propagate automatically.

## 46. Quality Review Checklist

### Truth / Comparability
- all facts are verified or honestly provisional,
- offerings are compatible/current,
- labels/units and fee scopes are comparable,
- academic/contact-hour and accommodation differences are accurately expressed.

### Student Decision
- major differences and eligibility constraints are quickly visible,
- users can understand length, availability, accommodation, and cost trade-offs.

### Neutrality
- no universal winner, arbitrary ranking, or unsupported popularity/best-for claim exists,
- visual emphasis indicates difference rather than superiority.

### UX / Accessibility
- 390px and 320px work,
- important information does not depend on wide scrolling where avoidable,
- programme identity remains trackable,
- controls/structure are accessible.

### Governance
- shared facts are used where practical,
- material changes propagate,
- ownership and publication state are clear.

## 47. Definition of Done

Comparison is complete when only meaningfully comparable programmes are compared, decision-critical differences use consistent verified facts/units, fees and academics are transparent, accommodation/eligibility/status are accurate, mobile is usable, rankings are not fabricated, and no duplicate Source of Truth has been created.

## 48. Final Standard

A student should be able to say:

> I can see the important differences without opening five tabs.  
> I understand the trade-offs.  
> I know which programmes I am eligible for.  
> I can compare cost, duration, academics, accommodation, and timing fairly.  
> I do not feel that the website is pushing me toward one option.  
> I know which programme I want to explore next.

The goal is not to make every programme look equally attractive.

**The goal is to make every programme equally understandable.**
