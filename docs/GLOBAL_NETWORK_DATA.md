# Global Learning Network data policy

The Global Learning Network section visualises Ritsumeikan short-term inbound education as both an institutional network and a student-to-student human network.

## Public-display rule

Every named country / region and institution shown in the live network must be supported by a confirmed short-term programme participation, delivery, or programme-connection record. Do not add an institution simply because it is a Ritsumeikan institutional partner.

The current review build contains **83 institution examples across 15 countries / regions**. These are project-confirmed examples supplied through programme planning notes and programme-record screenshots. The interface deliberately says `AND MORE`: this is not presented as the complete historical network.

Current country / region coverage:

- United States
- Canada
- United Kingdom
- Finland
- Romania
- China
- Korea
- Taiwan
- Macau
- Singapore
- Australia
- Indonesia
- Japan
- United Arab Emirates
- Qatar

The complete visible institution list lives in `src/data/globalNetwork.ts`.

## Screenshot normalisation

Programme-record screenshots supplied during review contain duplicates, variant spellings, umbrella-system names, colleges and universities. Before adding them to the live data we normalise obvious duplicates and spelling variants while preserving distinct institutions.

Examples:

- `College of Staten Island` and `City University of New York College of Staten Island` are represented once as `College of Staten Island, CUNY`.
- `Taiwan University` and `National Taiwan University` are represented once as `National Taiwan University`.
- repeated rows such as `University of Alberta`, `Konkuk University`, `Gachon University` and `The University of Melbourne` are counted once per institution.
- CUNY colleges such as Hunter, Queens, Brooklyn, Lehman, LaGuardia, BMCC, Queensborough and College of Staten Island remain distinct institutions.
- obvious name variants are normalised to the institution's standard English form where practical (for example `Monash University`, `SOAS University of London`, `Royal Holloway, University of London`).

Because the source includes colleges and university systems as well as universities, the UI uses **INSTITUTION EXAMPLES** rather than **UNIVERSITY EXAMPLES**.

The number is an **example-institution count for this visualisation**, not yet a certified historical KPI. Before this value is used in formal reporting or an external funding application, reconcile it against the source-of-truth table described below, especially for umbrella systems and constituent colleges.

## Before public launch

Create or verify a source-of-truth table with at least:

- country / region
- official institution name
- preferred short name
- programme name
- participation / implementation year(s)
- campus
- programme type (Japanese Language & Culture / Specialist / Custom)
- whether the relationship may be publicly named
- evidence source / record reference

The live country / region and institution-example figures are calculated from `src/data/globalNetwork.ts`, not manually duplicated in the component. When the source-of-truth table is available, migrate the visible data to that verified historical table and calculate any participant totals from it as well.

## Current review note

The 15-country / region network intentionally leaves room for additional countries and institutions still being compiled. New records should be added to the data file, not hard-coded into the SVG or copy. The map is designed to grow while keeping Ritsumeikan visually central and preserving stable hover / tap behaviour.

## Editorial principle

The visualisation distinguishes three layers:

1. **Fact** — participating countries / regions, institutions and programme records.
2. **Experience** — co-learning, interaction, language / culture experiences and student-to-student contact.
3. **Potential impact** — future learning, mobility and human networks. Describe this as possibility unless supported by measured outcomes.

Policy-oriented terms such as `国際共修`, `異文化間協働`, `国際教育連携`, `学生主体`, `多文化共生` and `学修成果の可視化` should be used only where the underlying activity supports the term. Student-facing copy remains primary.
