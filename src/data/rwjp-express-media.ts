import { sharedSiteImages } from './shared-site-images';

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
 * RWJP Express presentation media.
 * Asset paths come from the shared multilingual registry so Japanese-master
 * photo changes propagate to all language editions that use the same role.
 * Express-specific verified assets can replace the shared key when approved,
 * but should still be registered in shared-site-images.ts first.
 */
export const rwjpExpressMedia: RwjpExpressMediaItem[] = [
  {
    id: 'hero-main',
    src: `images/${sharedSiteImages.rwjp.culturalActivity}`,
    alt: '日本で文化活動に参加するイメージ',
    role: 'hero',
    status: 'provisional',
    crop: 'center',
    note: 'Hero phone main post. Replace first when Express-specific imagery is available.',
  },
  {
    id: 'class',
    src: `images/${sharedSiteImages.rwjp.japaneseClass}`,
    alt: '日本語授業に取り組むイメージ',
    role: 'class',
    status: 'provisional',
    crop: 'center',
  },
  {
    id: 'culture',
    src: `images/${sharedSiteImages.rwjp.culturalExperience}`,
    alt: '文化体験のイメージ',
    role: 'culture',
    status: 'provisional',
    crop: 'center',
  },
  {
    id: 'people',
    src: `images/${sharedSiteImages.rwjp.studentInteraction}`,
    alt: '学生同士が交流するイメージ',
    role: 'people',
    status: 'provisional',
    crop: 'center',
  },
  {
    id: 'city',
    src: `images/${sharedSiteImages.rwjp.hero}`,
    alt: '京都の街で過ごすイメージ',
    role: 'city',
    status: 'provisional',
    crop: 'center',
  },
  {
    id: 'weekend',
    src: `images/${sharedSiteImages.rwjp.hero}`,
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
    poster: `images/${sharedSiteImages.rwjp.culturalActivity}`,
    recommendedDurationSeconds: '15–30',
  },
  frames: ['hero-main', 'class', 'people', 'city'],
};

export const getRwjpExpressMedia = (id: string) =>
  rwjpExpressMedia.find((item) => item.id === id);
