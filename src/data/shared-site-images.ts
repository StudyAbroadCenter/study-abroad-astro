// Shared visual asset registry for all public language editions.
//
// Governance:
// - Change a visual asset here when the Japanese master design changes.
// - English, Korean, Simplified Chinese and Traditional Chinese must consume the
//   same asset keys; only alt text / captions remain locale-authored.
// - Do not duplicate image paths in locale components.
// - This registry is an implementation asset map, not a source of programme facts.

export const sharedSiteImages = {
  home: {
    hero: 'IMG_1588.JPG',
    story: {
      campus: 'hero/hero-kinugasa-clocktower.jpg',
      classroom: 'programs/rwjp/real/rwjp-real-japanese-class.webp',
      interaction: 'programs/rwjp/real/rwjp-real-learning-hub.webp',
      presentation: 'programs/rwjp/real/rwjp-real-academic-presentation.webp',
      culture: 'programs/rwjp/real/rwjp-real-culture-tatami.webp',
      kyoto: 'programs/rwjp/real/rwjp-real-kyoto-field.webp',
      studentInteraction: 'programs/rwjp/rwjp-student-interaction.webp',
    },
  },
  programmes: {
    rsjp: 'IMG_8178.JPG',
    'rsjp-express': 'IMG_5092.JPG',
    rwjp: 'IMG_8263.JPG',
    'rwjp-express': 'IMG_1588.JPG',
    rdsp: 'IMG_3725.JPG',
    rbmp: 'IMG_6091.JPG',
    'custom-programs': 'IMG_1687.JPG',
  },
} as const;

export type SharedProgrammeImageKey = keyof typeof sharedSiteImages.programmes;
