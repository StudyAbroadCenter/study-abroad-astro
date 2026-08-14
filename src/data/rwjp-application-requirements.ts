export type RwjpApplicationRequirementCertainty = 'Confirmed' | 'Provisional';

export interface RwjpApplicationRequirement {
  id: string;
  labelJa: string;
  labelEn: string;
  required: boolean;
  issueLanguage?: 'English' | 'Not Applicable';
  certainty: RwjpApplicationRequirementCertainty;
  audiences: Array<'website' | 'manual' | 'faq'>;
  source: string;
  verifiedAt: string;
}

const ownerConfirmation = 'Programme owner working confirmation for 2027 RWJP';
const common = {
  required: true,
  certainty: 'Confirmed' as const,
  audiences: ['website', 'manual', 'faq'] as Array<'website' | 'manual' | 'faq'>,
  source: ownerConfirmation,
  verifiedAt: '2026-08-14',
};

export const rwjpApplicationDocumentPolicy = {
  requiredIssueLanguage: 'English' as const,
  noteJa: '提出書類は英語で発行されたものを提出してください。日本語エッセイは日本語で作成します。',
  certainty: 'Confirmed' as const,
  source: ownerConfirmation,
  verifiedAt: '2026-08-14',
};

export const rwjpApplicationRequirements: RwjpApplicationRequirement[] = [
  { id: 'rwjp.application.enrollment-certificate', labelJa: '在籍証明書', labelEn: 'Enrollment Certificate', issueLanguage: 'English', ...common },
  { id: 'rwjp.application.transcript', labelJa: '成績証明書', labelEn: 'Academic Transcript', issueLanguage: 'English', ...common },
  { id: 'rwjp.application.passport-copy', labelJa: 'パスポートのコピー', labelEn: 'Passport Copy', issueLanguage: 'Not Applicable', ...common },
  { id: 'rwjp.application.japanese-essay', labelJa: '日本語エッセイ', labelEn: 'Japanese Essay', issueLanguage: 'Not Applicable', ...common },
  { id: 'rwjp.application.health-certificate', labelJa: '健康診断書', labelEn: 'Health Certificate', issueLanguage: 'English', ...common },
];
