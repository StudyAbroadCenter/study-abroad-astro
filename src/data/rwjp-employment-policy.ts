export type RwjpEmploymentPolicyCertainty = 'Confirmed' | 'Provisional';

export interface RwjpEmploymentPolicy {
  id: string;
  paidWorkAllowed: boolean;
  partTimeWorkAllowed: boolean;
  programmeVisaCategory: 'Temporary Visitor';
  shortAnswerJa: string;
  detailJa: string;
  audiences: Array<'website' | 'manual' | 'faq'>;
  certainty: RwjpEmploymentPolicyCertainty;
  source: string;
  verifiedAt: string;
}

const ownerConfirmation = 'Programme owner working confirmation for 2027 RWJP';

export const rwjpEmploymentPolicy: RwjpEmploymentPolicy = {
  id: 'rwjp.operations.no-employment',
  paidWorkAllowed: false,
  partTimeWorkAllowed: false,
  programmeVisaCategory: 'Temporary Visitor',
  shortAnswerJa: 'RWJP参加中のアルバイトや有償の就労は認められていません。',
  detailJa: 'RWJP参加期間中は、アルバイトを含む有償の就労を認めていません。RWJPは短期滞在（Temporary Visitor）を前提とするプログラムであり、就労を目的とした在留資格ではありません。参加者はプログラム期間中、就労活動を行わず、日本語講座・日本文化体験・その他の予定された活動への参加を優先してください。',
  audiences: ['website', 'manual', 'faq'],
  certainty: 'Confirmed',
  source: ownerConfirmation,
  verifiedAt: '2026-08-14',
};
