# Performance Stabilization Sprint

## Purpose

The Japanese recruitment homepage uses two immersive, scroll-driven sections:

- Participant Day
- Kyoto, Osaka and Shiga Campus Journey

The goal of this sprint is to preserve those experiences while making them comfortable on ordinary office PCs and student smartphones.

## Previous cost centres

The initial implementation intentionally prioritised experience design. It also created several performance costs:

- Full-resolution JPG files were sent directly to the browser.
- Desktop sticky stages and mobile scene layouts each contained their own image elements.
- All sticky-stage images could enter the browser's loading and decoding queue at roughly the same time.
- Inactive full-screen images remained composited at zero opacity.
- Full-screen CSS filters, large backdrop blurs and oversized shadows increased GPU work.
- IntersectionObserver callbacks could trigger repeated DOM updates for an already active scene.

## Stabilised architecture

### Responsive build-time images

`scripts/generate-immersive-images.mjs` creates WebP variants before every development and production build.

| Use | Widths |
| --- | --- |
| Smartphone | 640px and 960px |
| Desktop | 1280px and 1920px |

Original photographs remain untouched in `public/images/`. Generated files are written to `public/images/optimized/` and are not committed.

A build-time `manifest.json` records each generated file's dimensions and byte size. This provides a repeatable audit trail when source photographs are replaced.

### Viewport-specific delivery

`picture`, `srcset`, `sizes` and media queries ensure that:

- desktop browsers do not decode the mobile scene photographs;
- mobile browsers do not decode the desktop sticky-stage photographs;
- the browser selects an image size suited to the actual viewport.

### Progressive sticky-stage loading

Only the active and upcoming sticky-stage photographs are assigned real URLs. Later images remain one-pixel placeholders until they are needed.

### Reduced composition work

- inactive full-screen images are hidden after their fade;
- image filters are removed from the live scroll layer;
- scale animations are reduced;
- backdrop blur is replaced with a more opaque surface;
- large shadows are reduced;
- scene updates are batched with `requestAnimationFrame`;
- duplicate active-scene updates are ignored.

### Accessibility

The existing reduced-motion behaviour remains in place. The mobile layouts remain readable without relying on the desktop sticky animation.

## Validation checklist

### Functional

- [ ] Participant Day changes through all five scenes.
- [ ] Campus Journey changes through Kyoto, Osaka and Shiga.
- [ ] Fast scrolling does not reveal a blank stage.
- [ ] Campus tab buttons still navigate to the correct scene.
- [ ] Resizing from desktop to mobile and back restores the correct images.
- [ ] 320px and 390px layouts remain readable.

### Chrome Performance

Record the page before and after the sprint using the same browser and viewport.

1. Open DevTools → Performance.
2. Disable screenshots for a lower-overhead trace.
3. Start recording.
4. Scroll slowly through Participant Day and Campus Journey.
5. Repeat with a fast scroll.
6. Review long tasks, raster activity, GPU composition and dropped frames.

### Network

In DevTools → Network:

- filter by `Img`;
- confirm that the immersive sections request WebP files;
- confirm that desktop requests use 1280/1920 variants;
- confirm that mobile requests use 640/960 variants;
- confirm that the original JPG files are not requested by those sections.

## Performance targets

These are project targets, not claims about the current measured result:

- no visible blank frames during normal scrolling;
- no repeated long tasks caused by scene activation;
- smooth scrolling on a standard university office PC;
- LCP under 2.5 seconds on a representative production connection;
- CLS under 0.1;
- mobile Lighthouse Performance of 80 or above;
- Accessibility of 95 or above.

## Future work

- Replace provisional photographs and rerun the manifest review.
- Consider AVIF only after WebP performance and visual quality are measured.
- Add automated Lighthouse CI once the public production route is stable.
- Extend the responsive image pipeline to programme cards and future Support content.
