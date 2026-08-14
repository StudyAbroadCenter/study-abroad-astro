export type RwjpApplicationRequirementCertainty = 'Confirmed' | 'Provisional';

export interface RwjpApplicationRequirement {
  id: string;
  labelJa: string;
  labelEn: string;
  required: boolean;
  certainty: RwjpApplicationRequirementCertainty;
  audiences: Array<'website' | 'manual' | 'faq'>;
  source: string;
  verifiedAt: string;
}

const ownerConfirmation = 'Programme owner working confirmation for 2027 RWJP';

export const rwjpApplicationRequirements: RwjpApplicationRequirement[] = [
  {
    id: 'rwjp.application.enrollment-certificate',
    labelJa: '在籍証明書',
    labelEn: 'Enrollment Certificate',
    required: true,
    certainty: 'Confirmed',
    audiences: ['website', 'manual', 'faq'],
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  {
    id: 'rwjp.application.passport-copy',
    labelJa: 'パスポートのコピー',
    labelEn: 'Passport Copy',
    required: true,
    certainty: 'Confirmed',
    audiences: ['website', 'manual', 'faq'],
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  {
    id: 'rwjp.application.japanese-essay',
    labelJa: '日本語エッセイ',
    labelEn: 'Japanese Essay',
    required: true,
    certainty: 'Confirmed',
    audiences: ['website', 'manual', 'faq'],
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  {
    id: 'rwjp.application.health-certificate',
    labelJa: '健康診断書',
    labelEn: 'Health Certificate',
    required: true,
    certainty: 'Confirmed',
    audiences: ['website', 'manual', 'faq'],
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
];
