export type RwjpExpressMediaStatus = 'provisional' | 'verified';

export interface RwjpExpressMediaItem {
  id: string;
  src: string;
  alt: string;
  role:
    | 'hero'
    | 'class'
    | 'culture'
    | 'people'
    | 'city'
    | 'weekend'
    | 'reel';
  status: RwjpExpressMediaStatus;
  crop?: string;
  note?: string;
}

/**
 * RWJP Express media source of truth.
 *
 * Current entries intentionally point to provisional RWJP imagery so the
 * production layout can be reviewed before Express-specific assets are supplied.
 * When verified Express photos/video arrive, replace paths here rather than
 * scattering replacements through the page component.
 */
export const rwjpExpressMedia: RwjpExpressMediaItem[] = [
  {
    id: 'hero-main',
    src: 'images/programs/rwjp/rwjp-cultural-activity.webp',
    alt: '日本で文化活動に参加するイメージ',
    role: 'hero',
    status: 'provisional',
    crop: 'center',
    note: 'Hero phone main post. Replace first when Express-specific imagery is available.',
  },
  {
    id: 'class',
    src: 'images/programs/rwjp/rwjp-japanese-class.webp',
    alt: '日本語授業に取り組むイメージ',
    role: 'class',
    status: 'provisional',
    crop: 'center',
  },
  {
    id: 'culture',
    src: 'images/programs/rwjp/rwjp-cultural-experience.webp',
    alt: '文化体験のイメージ',
    role: 'culture',
    status: 'provisional',
    crop: 'center',
  },
  {
    id: 'people',
    src: 'images/programs/rwjp/rwjp-student-interaction.webp',
    alt: '学生同士が交流するイメージ',
    role: 'people',
    status: 'provisional',
    crop: 'center',
  },
  {
    id: 'city',
    src: 'images/programs/rwjp/rwjp-kyoto-winter.webp',
    alt: '京都の街で過ごすイメージ',
    role: 'city',
    status: 'provisional',
    crop: 'center',
  },
  {
    id: 'weekend',
    src: 'images/programs/rwjp/rwjp-kyoto-winter.webp',
    alt: '週末に京都を歩くイメージ',
    role: 'weekend',
    status: 'provisional',
    crop: 'center',
  },
];

export const rwjpExpressReel = {
  mode: 'slideshow' as const,
  frameDurationMs: 1800,
  futureVideo: {
    enabled: false,
    src: '',
    poster: 'images/programs/rwjp/rwjp-cultural-activity.webp',
    recommendedDurationSeconds: '15–30',
  },
  frames: ['hero-main', 'class', 'people', 'city'],
};

export const getRwjpExpressMedia = (id: string) =>
  rwjpExpressMedia.find((item) => item.id === id);
