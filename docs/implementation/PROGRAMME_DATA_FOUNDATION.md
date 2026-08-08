# Programme Data Foundation

**Status:** Current implementation note  
**Scope:** Static MVP programme data  
**Governance:** `docs/handbook/21_CROSS_SPEC_GOVERNANCE.md`

## Purpose

The current student-facing MVP uses `src/data/programs.ts` as its programme registry.

This is an implementation choice, not a declaration that a TypeScript file is the institutional Source of Truth.

Authoritative facts remain owned by the fact domains defined in the handbook. The registry may contain a fact only when that fact has been verified for the intended use.

## Current boundary

`src/data/programs.ts` currently contains programme-level data already used by the Japanese recruitment experience.

Do not add offering-specific values such as:

- dates,
- fees,
- application status,
- application deadlines,
- capacity,
- accommodation assignments,
- eligibility rules,
- refund rules,

until the current value is supported by the appropriate authoritative domain.

## Legacy programme data

The repository also contains older prototype programme representations, including hard-coded page data and `src/content/programs` records.

These are legacy/prototype surfaces. They are not alternative authorities for current student-facing programme facts.

PR32 does not delete or migrate them. Removing them before replacement routes exist would make this foundational change unnecessarily risky.

## Change rule

When a current programme fact changes:

1. verify the authoritative domain/source,
2. update the current registry only when the value is confirmed for publication,
3. review dependent views according to `21_CROSS_SPEC_GOVERNANCE.md`,
4. do not reconcile conflicting values by inference.

## Deliberate non-goals

This foundation does not:

- add a CMS,
- add new programme facts,
- redesign the homepage,
- activate fictional prototype detail pages,
- migrate the legacy English site,
- split the data model into speculative abstractions.

Keep the implementation simple until the next real requirement justifies expansion.
