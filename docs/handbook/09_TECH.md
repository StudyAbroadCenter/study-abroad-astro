# 09_TECH.md

# RSJP Experience System — Technical Direction

## Current Preferred Stack

- Astro
- TypeScript
- GitHub
- Vercel

The repository's actual configuration is the source of truth.

Do not invent packages, commands, adapters, or integrations that are not present.

## Engineering Goal

Build a fast, maintainable, low-complexity recruitment site.

## Architecture

Prefer:
- static generation,
- simple content/data flow,
- server/static features before client JS,
- small purposeful components,
- explicit dependencies.

Avoid:
- unnecessary client state,
- speculative service layers,
- premature backend infrastructure,
- excessive framework wrappers.

## Styling

Use the existing styling approach.

Do not introduce Tailwind, another CSS framework, or a component library solely for consistency unless a project-level decision approves it.

## JavaScript

Use client-side JavaScript only where interaction needs it.

Astro islands should remain purposeful.

Do not hydrate static content.

## TypeScript

Use types to clarify contracts and reduce errors.

Avoid complex type-level programming that makes ordinary maintenance harder.

## Dependencies

Before adding:
1. check native platform/Astro capability,
2. check existing dependencies,
3. check maintained library options,
4. evaluate bundle and maintenance cost.

Prefer maintained, established libraries where they reduce total complexity.

## Images

Use Astro/project image tooling where available.

Prioritise:
- responsive sizes,
- appropriate formats,
- lazy loading where appropriate,
- explicit dimensions/aspect ratio to reduce layout shift.

## Fonts

Keep font loading restrained.

Prefer broad language support and performance.

Do not add multiple decorative families without strong design justification.

## Routing

Keep routes readable and stable.

Do not redesign routing for hypothetical multilingual/CMS needs without a decision record.

## Internationalisation

Do not introduce an i18n framework until actual language architecture requires it.

When multilingual implementation begins, preserve:
- shared facts,
- language-specific editorial copy,
- stable language routing,
- SEO relationships.

## CMS

No CMS in MVP unless explicitly approved.

Prepare through:
- data/content separation,
- reusable structures,
- clear source ownership.

Do not imitate a future CMS architecture prematurely.

## Security

Do not expose secrets in client code or repository files.

Use environment mechanisms provided by the platform.

Do not log sensitive applicant information unnecessarily.

If forms handle personal information, treat privacy/security as a design requirement.

## Forms

Prefer established, approved form handling.

Do not create custom backend infrastructure if an existing safe mechanism already serves the requirement.

## Analytics

Add only approved analytics.

Do not add trackers or marketing scripts casually.

Consider performance, privacy, and consent requirements.

## Performance

Design target from project specification:
- strong Lighthouse-class performance, especially mobile.

Exact scores are quality targets, not guarantees.

Optimise real user experience before artificial benchmark chasing.

## Accessibility

Technical implementation must preserve semantic structure, focus, keyboard interaction, and reduced-motion support.

## Testing

Use the repository's actual test/build/type/lint tools.

Do not invent commands.

Where automated coverage is limited, verify critical paths manually and document risk.

## CI/CD

Use existing GitHub/Vercel workflow as the source of truth.

Do not introduce complex pipelines without operational need.

## Error Handling

Fail clearly in development.

Do not silently swallow errors.

User-facing errors should remain understandable.

## Technical Decision Test

Before introducing technology, ask:

1. What current problem does it solve?
2. Can existing tools solve it?
3. What maintenance cost does it add?
4. What bundle/runtime cost does it add?
5. Can it be removed later?
6. Does it create lock-in?
7. Is the benefit real now, not hypothetical?
