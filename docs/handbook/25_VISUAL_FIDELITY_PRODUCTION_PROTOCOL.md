# Visual Fidelity Production Protocol

Status: mandatory operating procedure under `24_CREATIVE_FRONTEND_FIDELITY_CONSTITUTION.md`

## Mandatory gates

For substantial mockup/pattern/multilingual visual implementation, pass these gates in order.

### A. Reference Authority
Identify and actually inspect the exact approved visual reference, related design specification, and explicit design decisions. Current Astro/Pinwheel code is current-state evidence only. If the reference is missing, conflicting or not inspectable, stop rather than infer.

### B. Visual Measurement
Before detailed coding, record the important targets: reference viewport, section height, headline x/y and measure, major image x/y/w/h, overlap/z-order, dominant whitespace, navigation/CTA geometry, crop/focal point and major spacing. Use px, %, ratios or bounded visual estimates.

### C. Implementation Blueprint
For each major region, state the rendering strategy: normal flow, Grid/Flex, coordinate-driven artboard, SVG, raster/composite artwork, semantic overlay and/or motion layer. State desktop/tablet/mobile art direction, locale-specific geometry, typography strategy, image roles and known accessibility/performance risks.

### D. Browser Comparison and Convergence
Render the actual browser page and compare with the authoritative reference. Repeat:

`Reference -> Render V1 -> Difference Audit -> Correction -> Render V2 -> Difference Audit -> ... -> Acceptance`

A build is not visual completion. Continue until no unexplained Major deviation remains. If the first render already meets the threshold with evidence, a redundant correction pass is unnecessary.

### E. Acceptance Evidence
Retain a Visual QA Record containing references, viewports/locales, seven-axis scores, differences, fixes, image checks and final status.

## Seven-axis fidelity score

Score applicable axes 0-10:
1. Composition
2. Geometry
3. Typography
4. Imagery
5. Materiality
6. Responsive Art Direction
7. Motion / Interaction (N/A if not part of the design)

For fidelity-led mockup/pattern work:
- overall target: **9.5+**;
- no applicable axis below **9.0** without explicit design-owner acceptance;
- Composition and Geometry >= **9.2** for signature art-directed hero/landing sections;
- N/A excluded from average.

Scores require comparison notes; unsupported scoring is unverified.

## Difference audit order

1. **Macro:** section height, headline block, primary image, centre of gravity, whitespace, major overlaps.
2. **Typography / imagery:** type character, size, leading, line breaks, measure, crop, focal point, image hierarchy.
3. **Material / detail:** texture, border, shadow, rotation, masks, decorative elements, motion.

Do not polish Tier 3 while Tier 1 is materially wrong.

## Deviation classes

- **Major:** changes recognisable composition, hierarchy, focal point, image dominance, signature navigation or mobile art direction. Fix or explicitly accept.
- **Moderate:** noticeable typography, crop, spacing, overlap, texture or density difference. Normally fix.
- **Minor:** browser/font/rendering variance that does not change design perception. May remain if recorded.

Do not dismiss differences merely as responsive/framework/performance/maintainability issues without evidence.

## Required measurement record

```md
# Visual Measurement
Reference:
Reference viewport:
- Hero/section height:
- Headline x/y/width:
- Primary image x/y/w/h:
- Secondary imagery:
- Main overlaps/z-order:
- Dominant whitespace:
- Navigation/CTA:
- Section spacing:
- Typography character/size/line-height/line breaks:
- Crop/focal point:
- Native image dimensions checked: yes/no
- Signature material/motion details:
```

## Required Implementation Blueprint

```md
# Implementation Blueprint
Surface/pattern:
Authoritative reference:

| Region | Visual requirement | Rendering strategy | Responsive/locale strategy | Risk |
|---|---|---|---|---|

Desktop art direction:
Tablet art direction:
Mobile art direction:
Locale-specific geometry:
Typography strategy:
Image strategy:
Motion strategy:
Accessibility/performance constraints and evidence:
```

## Required Visual QA Record

```md
# Visual QA Record
Reference:
Implementation URL/build:
Date:

| Viewport / locale | Composition | Geometry | Typography | Imagery | Materiality | Responsive | Motion | Average |
|---|---:|---:|---:|---:|---:|---:|---:|---:|

| Severity | Observed difference | Cause | Fix attempted | Final status |
|---|---|---|---|---|

- reference inspected: yes/no
- actual browser render inspected: yes/no
- screenshot/reference comparison: yes/no
- image dimensions checked: yes/no
- overflow/clipping checked: yes/no
- each affected published locale independently checked: yes/no/N/A
- no unexplained Major deviation remains: yes/no
- overall target >= 9.5: yes/no
- final status: ACCEPTED / NOT READY
```

## Multilingual rule

One locale passing visual QA does not prove another locale passes. For each affected published language, independently inspect line breaks, text measure, button width, card/section height, crop balance and local geometry. Design may localise; programme facts may not.

## Stop conditions

Stop instead of improvising when the authoritative reference cannot be inspected, the programme facts conflict, a required asset's suitability cannot be verified, or a claimed constraint has not been demonstrated.

Operating rule: **Measure before coding. Blueprint before detailing. Render before claiming. Compare before accepting. Iterate until material differences are gone or explicitly approved.**
