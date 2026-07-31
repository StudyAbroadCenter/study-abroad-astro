# Study Abroad Astro Prototype

An independent prototype evaluating whether [Astro](https://astro.build/) could support a future website for short-term inbound study programs at a Japanese university.

> **Important:** This is not an official university website. All program names, places, dates, fees, deadlines and descriptions are fictional. Do not add personal, confidential or sensitive information to this repository.

## What is included

- Responsive Home, Programs, Program Detail, FAQ, Contact, About and custom 404 pages
- Reusable Astro layouts and components with semantic HTML and accessible focus styles
- Program pages generated at build time from a validated Astro Content Collection
- Local CSS placeholder artwork only; no downloaded photography, logos, analytics, cookies or live forms

## Project structure

```text
src/
├── components/          # Shared header, footer, layout and program card
├── content/programs/    # Editable program Markdown files
├── pages/               # Routes; programs/[id].astro builds detail pages
├── styles/global.css    # Site-wide responsive visual system
└── content.config.ts    # Program collection loader and validation schema
```

## Editing program content

Each program is a Markdown file in `src/content/programs/`. Its filename becomes its URL (for example, `cities-culture.md` becomes `/programs/cities-culture/`). Frontmatter stores the structured facts; Markdown below the frontmatter stores the longer page content.

To add a program:

1. Copy an existing file in `src/content/programs/`.
2. Give it a short, lowercase, hyphenated filename.
3. Update every frontmatter field: `name`, `summary`, `dates`, `duration`, `location`, `academicFocus`, `fee`, `applicationDeadline`, `accommodation`, `status` and `featured`.
4. Replace the Markdown body with the new overview and learning details.
5. Run `npm run check` and `npm run build`. The Programs listing and detail route are generated automatically.

Dates, fees and deadlines can be updated directly in the relevant Markdown frontmatter without editing any component. The schema in `src/content.config.ts` reports missing fields and restricts `status` to `Applications open`, `Coming soon` or `Waitlist`.

## Local development

Requires a current Node.js release supported by Astro.

```sh
npm install
npm run dev
```

Open the local address printed by Astro (normally `http://localhost:4321`).

## Build and preview

```sh
npm run build
npm run preview
```

The static output is written to `dist/`. The preview server normally runs at `http://localhost:4321`.

## Prototype limitations

- Content is fictional and is not admissions, immigration, financial or travel guidance.
- The Contact page is deliberately non-functional and collects no information.
- There is no application workflow, CMS editing interface, authentication, search, localization, analytics or backend.
- Placeholder visuals are CSS-generated and should be replaced only with properly licensed assets in any future project.
- The configured canonical site (`https://example.invalid`) is intentionally non-production and must be replaced before real deployment.
- Accessibility and device testing here are an initial implementation, not a substitute for audit and user testing.
