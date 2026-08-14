# RWJP Data Architecture

`src/data/rwjp/index.ts` is the canonical read entry point for RWJP data.

## Why this exists

During the 2027 RWJP completion audit, many operational rules were confirmed separately. Keeping those files independent was useful while facts were being collected, but allowing pages, FAQ and manuals to import them directly would create long-term drift.

The facade groups the existing authoritative modules into five domains without copying their values:

1. **annual** — year-specific dates, fees, application period and current offering facts
2. **application** — application route, documents, selection, placement and visa
3. **academicOperations** — teaching, orientation, attendance, conduct and discipline
4. **accommodation** — Taishogun Dormitory facilities and rules
5. **participantLife** — travel, safety, devices, money and transport preparation

## Rules for future development

- New RWJP website, Manual and FAQ code should import from `src/data/rwjp/index.ts`.
- Do not duplicate a confirmed fact in the facade. Edit the authoritative source module instead.
- Values that change by programme year belong in annual facts, not in general policy modules.
- Shared rules that also apply to RWJP Express should remain shared and be exposed through the accommodation or participant-life domain.
- Japanese is the master content language during the current completion phase. English and Korean must be derived from the same fact IDs and must not create independent factual sources of truth.
- Before removing any older source module, first migrate all consumers and add regression coverage. P1-1 does **not** delete source modules because that would create unnecessary breakage while the Japanese master page is still under construction.

## Migration strategy

P1-1 introduces the facade and moves the live `RwjpDecisionPanel` consumer onto it. Subsequent P1 work should migrate new and existing RWJP consumers through this single entry point. Once all consumers are migrated and CI/UAT are green, redundant compatibility exports or obsolete modules may be removed in a separate cleanup PR.
