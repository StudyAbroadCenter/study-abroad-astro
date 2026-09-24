// Shared visual asset registry for all public language editions.
//
// Governance:
// - Change a visual asset here when the Japanese master design changes.
// - English, Korean, Simplified Chinese and Traditional Chinese must consume the
//   same asset keys; only alt text / captions remain locale-authored.
// - Do not duplicate image paths in locale components.
// - This registry is an implementation asset map, not a source of programme facts.

const rwjpReal = {
  classroom: 'programs/rwjp/real/rwjp-real-japanese-class.webp',
  interaction: 'programs/rwjp/real/rwjp-real-learning-hub.webp',
  presentation: 'programs/rwjp/real/rwjp-real-academic-presentation.webp',
  culture: 'programs/rwjp/real/rwjp-real-culture-tatami.webp',
  kyoto: 'programs/rwjp/real/rwjp-real-kyoto-field.webp',
} as const;

export const sharedSiteImages = {
  home: {
    hero: 'generated/home-hero.webp',
    story: {
      campus: 'hero/hero-kinugasa-clocktower.jpg',
      classroom: rwjpReal.classroom,
      interaction: rwjpReal.interaction,
      presentation: rwjpReal.presentation,
      culture: rwjpReal.culture,
      kyoto: rwjpReal.kyoto,
      studentInteraction: 'programs/rwjp/rwjp-student-interaction.webp',
    },
  },
  programmes: {
    rsjp: 'generated/rsjp.webp',
    'rsjp-express': 'generated/rsjp-express.webp',
    rwjp: 'generated/rwjp.webp',
    'rwjp-express': 'generated/rwjp-express.webp',
    rdsp: 'generated/rdsp.webp',
    rbmp: 'generated/rbmp.webp',
    'custom-programs': 'generated/custom.webp',
  },
  rwjp: {
    hero: 'programs/rwjp/rwjp-kyoto-winter.webp',
    winterLife: 'programs/rwjp/rwjp-winter-life.webp',
    japaneseClass: 'programs/rwjp/rwjp-japanese-class.webp',
    studentInteraction: 'programs/rwjp/rwjp-student-interaction.webp',
    culturalExperience: 'programs/rwjp/rwjp-cultural-experience.webp',
    culturalActivity: 'programs/rwjp/rwjp-cultural-activity.webp',
    presentation: 'programs/rwjp/rwjp-presentation.webp',
    learningEvidence: 'programs/rwjp/rwjp-learning-evidence.webp',
    real: rwjpReal,
  },
} as const;

export type SharedProgrammeImageKey = keyof typeof sharedSiteImages.programmes;
