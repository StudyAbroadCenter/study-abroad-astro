import { sharedSiteImages } from './shared-site-images';

// Shared, locale-neutral Custom Programs presentation assets.
// Future English/Korean/Chinese pages should consume this file for the same
// partner ordering, flags, photo slots and layout roles. Locale-specific copy
// remains in each language implementation.

export const customProgramPartners = [
  { flag: '🇺🇸', countryCode: 'US', name: 'University of Oklahoma' },
  { flag: '🇺🇸', countryCode: 'US', name: 'Rutgers University' },
  { flag: '🇺🇸', countryCode: 'US', name: 'James Madison University' },
  { flag: '🇺🇸', countryCode: 'US', name: 'Case Western Reserve University' },
  { flag: '🇨🇳', countryCode: 'CN', name: 'Shanghai Jiao Tong University' },
  { flag: '🇺🇸', countryCode: 'US', name: 'University of North Carolina at Asheville' },
  { flag: '🇦🇺', countryCode: 'AU', name: 'University of Adelaide' },
  { flag: '🇨🇦', countryCode: 'CA', name: 'University of Alberta' },
  { flag: '🇰🇷', countryCode: 'KR', name: 'Kyung Hee University' },
  { flag: '🇰🇷', countryCode: 'KR', name: 'Yonsei University' },
  { flag: '🇰🇷', countryCode: 'KR', name: 'Inha University' },
  { flag: '🇺🇸', countryCode: 'US', name: 'Florida International University' },
  { flag: '🇺🇸', countryCode: 'US', name: 'Princeton University' },
  { flag: '🇨🇦', countryCode: 'CA', name: 'George Brown College' },
  { flag: '🇦🇺', countryCode: 'AU', name: 'RMIT University' },
  { flag: '🇭🇰', countryCode: 'HK', name: 'The Chinese University of Hong Kong' },
  { flag: '🇭🇰', countryCode: 'HK', name: 'City University of Hong Kong' },
] as const;

export const customProgramVisuals = {
  hero: sharedSiteImages.programmes['custom-programs'],
  whyRitsumeikan: sharedSiteImages.home.story.studentInteraction,
  gallery: [
    { role: 'learn', image: sharedSiteImages.rwjp.real.classroom },
    { role: 'connect', image: sharedSiteImages.rwjp.real.interaction },
    { role: 'output', image: sharedSiteImages.rwjp.real.presentation },
    { role: 'culture', image: sharedSiteImages.rwjp.real.culture },
    { role: 'field', image: sharedSiteImages.rwjp.real.kyoto },
    { role: 'specialist', image: sharedSiteImages.programmes.rbmp },
    { role: 'buddy', image: 'IMG_6985.JPG' },
    { role: 'orientation', image: 'IMG_7053.JPG' },
  ],
} as const;

export type CustomProgramVisualRole = typeof customProgramVisuals.gallery[number]['role'];
