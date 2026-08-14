export type RwjpApplicationRequirementCertainty = 'Confirmed' | 'Provisional';

export interface RwjpApplicationRequirement {
  id: string;
  labelJa: string;
  labelEn: string;
  required: boolean;
  issueLanguage?: 'English' | 'Not Applicable';
  detailJa?: string;
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
  {
    id: 'rwjp.application.health-certificate',
    labelJa: '健康診断書',
    labelEn: 'Health Certificate',
    issueLanguage: 'English',
    detailJa: '立命館大学所定の健康診断書様式をプログラムWebサイトからダウンロードして使用してください。医師の署名が必要です。様式の指示をよく読み、必要事項を漏れなく記入・確認したうえで提出してください。一般的な健康診断書で代替できるとは案内しません。',
    ...common,
  },
];
