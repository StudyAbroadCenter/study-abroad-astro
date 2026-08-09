# RWJP Express media plan

## Goal

Keep the current light, digital-native Express experience while making future photo and video replacement safe, fast and auditable.

## Visual principle

RWJP Express should not become a photo-heavy copy of the five-week RWJP page.

Use media as short fragments of a two-week experience:

- phone = immediate memory / social sharing
- camera roll = accumulation of small moments
- tablet = photo library / looking back
- laptop = study log / slideshow / optional short video
- parents/supporters = calm information and trust, not social decoration

## Production asset priority

1. Hero phone main image
2. Japanese-class detail or hands/notebook image
3. Student interaction image with privacy-safe framing
4. Culture/activity image
5. Kyoto / after-class image
6. Weekend image
7. Optional 15–30 second video

## Preferred photography

Prioritise real, candid-feeling images over staged group portraits. Faces do not need to be prominent. Useful framing includes hands, notebooks, backs of students, food, transport, library, classroom details, campus paths and city scenes.

The Express page benefits from vertical and square crops because the visual language is phone/social/photo-library based.

## Slideshow and video

The lightweight slideshow is the default experience. It must work without video.

When a verified Express video becomes available:

- keep the existing laptop shell;
- show a poster image first;
- load video only after user interaction;
- do not autoplay with sound;
- target approximately 15–30 seconds;
- retain a photo/slideshow fallback for low-bandwidth and reduced-motion contexts.

## Accuracy boundary

Current RWJP photos are provisional layout media. They are not presented as participant testimony. Before public launch, replace any image that could imply an unverified Express-specific activity, schedule or outcome.

All programme facts remain governed separately by the programme data source of truth.

## Replacement workflow

1. Add approved image/video assets to the repository.
2. Update `src/data/rwjp-express-media.ts`.
3. Check desktop, 390px and 320px crops.
4. Check image payload and lazy/eager behaviour.
5. Verify alt text and privacy-safe framing.
6. Preview before merge.
