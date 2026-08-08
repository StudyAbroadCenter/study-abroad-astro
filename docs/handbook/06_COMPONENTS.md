# 06_COMPONENTS.md

# RSJP Experience System — Component Specification

This document defines reusable UI patterns by purpose, not by implementation technology.

Component names in code may differ. Do not rename working components merely to match this document.

## Component Principles

A component should exist when it represents:

- a recurring UI pattern,
- a clear responsibility,
- a reusable interaction,
- a stable data contract.

Do not create components for one-off wrappers without a clear reuse or readability benefit.

## 1. Site Header

### Purpose
Provide identity, primary navigation, and important programme action.

### Must
- remain lightweight,
- work on mobile,
- show clear navigation state,
- preserve keyboard access.

### Avoid
- internal university menu complexity,
- too many secondary links,
- oversized sticky footprint.

## 2. Mobile Navigation

### Purpose
Expose essential destinations efficiently.

### Must
- open/close predictably,
- trap/focus responsibly if implemented as a modal pattern,
- provide comfortable touch targets,
- expose critical programme/application destinations.

### Avoid
- deeply nested accordions,
- hidden essential actions.

## 3. Site Footer

### Purpose
Provide secondary navigation, contact, institutional relationship, and legal links.

### Avoid
- duplicating the full main navigation without need.

## 4. Hero

### Variants
- site/home hero,
- programme hero,
- informational/page hero.

### Required Logic
A hero should answer:
- What is this?
- Why does it matter?
- What should I do next?

### Avoid
- long institutional introductions,
- multiple competing CTAs,
- decorative video without value,
- vague slogan-only messaging.

## 5. Programme Card

### Purpose
Help users identify and compare programme options.

### Potential Fields
- programme name,
- location,
- duration,
- dates,
- status,
- short differentiator,
- image.

### Rules
- show only decision-useful facts,
- do not duplicate full programme detail,
- status must be textual,
- card must remain understandable without image.

## 6. Programme Status

### Purpose
Communicate current application state.

### Rules
Use one central status model.

Status text must not depend on colour.

Status must drive CTA behaviour.

Example conceptual states:
- open,
- closed,
- coming-soon,
- full,
- cancelled.

Exact data values and display labels belong in the data layer.

## 7. Programme Facts

### Purpose
Present essential facts compactly.

Typical facts:
- dates,
- duration,
- fee,
- location,
- capacity,
- application period,
- language level.

### Rules
- values must come from verified shared data,
- do not hide facts in decorative icons,
- maintain readable mobile layout.

## 8. Primary CTA

### Purpose
Represent the main next action.

### Rules
- one dominant primary action where possible,
- clear verb/action wording,
- disabled/unavailable states must explain why.

Do not show `Apply Now` when application is unavailable.

## 9. Secondary CTA / Text Link

Use when action is useful but not primary.

Visual priority must remain below the primary CTA.

## 10. Section Header

### Purpose
Introduce a section clearly.

May contain:
- heading,
- concise lead,
- optional secondary link.

Avoid generic `Overview` or `Information` when a more useful heading exists.

## 11. Content Section

Do not create one universal visual section that forces all content into identical layout.

Support varied editorial composition while preserving shared spacing/tokens.

## 12. Image + Text Feature

### Purpose
Tell a story using authentic photography and concise copy.

### Rules
- image should add meaning,
- layout must stack gracefully on mobile,
- image orientation may vary.

## 13. Gallery

Use when multiple images materially help the user understand experience/place.

Avoid galleries as filler.

Provide accessible alt/caption strategy.

## 14. Accommodation Summary

### Purpose
Help users understand where/how they may stay.

Potential fields:
- accommodation name/type,
- room arrangement,
- location context,
- key facilities,
- conditions,
- images.

Do not convert uncertain availability into a promise.

## 15. Fee / Cost Summary

### Purpose
Make cost easy to understand.

Must distinguish:
- programme fee,
- currency,
- included items,
- important exclusions,
- relevant conditions.

Do not scatter required cost information across unrelated components.

## 16. Eligibility / Requirements

Separate:
- required,
- recommended,
- notes.

Avoid ambiguous mandatory-looking recommendations.

## 17. Schedule / Timeline

Use when chronological order helps comprehension.

Must work without relying on horizontal desktop-only presentation.

Do not imply draft activities are confirmed unless data says so.

## 18. FAQ / Accordion

Use when questions are meaningful and answers benefit from collapse/expand.

Do not hide essential decision facts inside FAQ.

Questions should reflect real applicant concerns.

Ensure keyboard and screen-reader usability.

## 19. Testimonial / Student Story

### Purpose
Provide authentic student perspective.

Must:
- have context where appropriate,
- avoid unsupported claims,
- respect privacy/permission.

Avoid over-designed quotation marks or decorative treatments that overpower content.

## 20. Location / Campus Feature

Use to explain practical and experiential context.

Do not turn every programme into a tourism landing page.

## 21. Map

Use only when spatial understanding matters.

Prefer lightweight static/linked solutions unless interaction provides real value.

## 22. Alert / Notice

Use for high-importance temporary or exceptional information.

Examples:
- application deadline update,
- programme cancellation,
- important accommodation condition.

Do not use alerts as general decorative banners.

## 23. Form Field

Must have:
- persistent label,
- validation state,
- help/error text where needed,
- accessible association.

Placeholder is not the only label.

## 24. Empty State

Explain:
- what is unavailable,
- whether it is temporary,
- what the user can do next.

Never fill with fake data.

## 25. Error State

Explain:
- what happened,
- what action is possible.

Do not expose unnecessary technical detail.

## 26. Loading State

Use only when actual asynchronous delay exists.

Do not simulate loading for visual effect.

## Component Reuse Test

Before creating a new component, ask:

1. Does an existing component already solve this?
2. Is the new responsibility meaningfully different?
3. Will a new component reduce duplication or improve clarity?
4. Is the abstraction stable enough to name?
5. Is a one-off local implementation actually simpler?

## Component Change Rule

Do not expand a shared component with many optional props solely to serve one unusual page.

Prefer:
- composition,
- a small purposeful variant,
- or a local pattern

over a universal component with unclear responsibility.
