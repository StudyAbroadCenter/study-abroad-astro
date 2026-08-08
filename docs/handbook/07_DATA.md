# 07_DATA.md

# RSJP Experience System — Data Specification

## Objective

Maintain programme facts consistently, visibly, and safely.

Data design should support the current static/MVP architecture while keeping future CMS migration practical.

## Core Rule

There must be a clear distinction between:

- programme facts,
- editorial copy,
- UI labels,
- policy text,
- derived display values.

Do not duplicate the same changing fact across multiple page files when a shared source is practical.

## No-Invention Rule

Never create a value merely because a field exists.

Unknown and not-yet-confirmed are valid states.

## Programme Entity

A programme data model may contain concepts such as:

- id,
- slug,
- official name,
- approved short name,
- location/campus,
- dates,
- duration,
- fee,
- currency,
- capacity,
- application period,
- status,
- eligibility,
- language requirements,
- accommodation summary,
- application destination.

This is a conceptual model, not permission to invent fields or values without project need.

## IDs

Use stable machine identifiers.

IDs should not depend on mutable marketing copy.

Avoid embedding year/date in an ID unless the entity genuinely represents a specific yearly offering.

## Programme vs Offering

Where useful, separate:

### Programme
Long-lived concept:
- name,
- general description,
- location,
- typical structure.

### Offering
Time-specific instance:
- year/term,
- dates,
- fee,
- capacity,
- status,
- application period.

Do not introduce this split until it solves a real data problem.

## Dates

Store machine-readable dates where possible.

Display formatting belongs in presentation utilities.

Do not store ambiguous date strings as the only representation.

If date is not confirmed, use an explicit unknown/TBD model rather than a fake approximate date.

## Fees

Store:
- numeric amount,
- currency,
- optional structured inclusion/exclusion references where useful.

Do not store formatted symbols as the only source value.

Approximate currency conversions, if ever displayed, must be clearly derived and non-authoritative.

## Status

Use a central finite set of machine states.

Example conceptual states:
- open,
- closed,
- coming-soon,
- full,
- cancelled.

Display labels should be mapped centrally.

Do not create spelling variants across components.

## Capacity

Do not invent capacity.

If capacity is not publicly confirmed, omit or mark appropriately rather than estimating.

## Application Period

Represent opening and closing independently when possible.

A missing opening date is not equivalent to `open`.

CTA availability should be derived from explicit status/business rules, not guessed from today's date alone unless the business rule is formally defined.

## Accommodation

Accommodation availability may be conditional.

Data must distinguish:
- confirmed standard accommodation,
- conditional availability,
- external/self-arranged accommodation,
- unavailable/unknown.

Do not convert physical availability into guaranteed entitlement.

## Eligibility

Separate machine-checkable conditions from editorial explanation when useful.

Do not encode complex policy logic prematurely.

## Language Requirements

Represent exact requirements when known.

Do not reduce concrete requirements into vague labels if the programme needs specific script/skill readiness.

## Derived Values

Examples:
- formatted date range,
- duration label,
- status label,
- CTA state.

Derived values should be calculated centrally when practical.

Do not duplicate formatting logic across pages.

## Content Separation

Structured facts should not contain long presentation-specific prose unless it is truly part of the data model.

Editorial content may live in:
- content files,
- Markdown/MDX,
- page copy,
- future CMS.

Keep facts reusable.

## Localisation

Shared facts should remain language-neutral where possible.

Translate:
- labels,
- editorial descriptions,
- explanatory text.

Do not duplicate numeric/date facts separately in each language unless unavoidable.

## Validation

Validate data shape where practical using the project's existing tools.

Do not add a validation framework solely because validation is theoretically useful.

## CMS Migration

Future CMS design should map from the real data model, not the other way around.

Do not imitate Sanity or another CMS schema before adoption is approved.

## Source Attribution

For operationally sensitive facts, consider recording a source/reference in internal data or decision documentation where useful.

Do not expose internal source metadata publicly unless intended.

## Data Review Questions

1. Is this value verified?
2. Is it duplicated elsewhere?
3. Is it stable or offering-specific?
4. Is unknown represented honestly?
5. Is presentation logic leaking into source data?
6. Will changing this value update all relevant UI?
7. Is language duplication creating risk?
