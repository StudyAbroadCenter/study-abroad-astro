export type RwjpVisaPolicyCertainty = 'Confirmed' | 'Provisional';

export interface RwjpVisaPolicy {
  id: string;
  visaType: 'Temporary Visitor';
  studentVisaIssued: false;
  universityDocumentsAfterPayment: boolean;
  applicantResponsibleForApplication: boolean;
  applicantPaysVisaCosts: boolean;
  shortAnswerJa: string;
  detailJa: string;
  audiences: Array<'website' | 'manual' | 'faq'>;
  certainty: RwjpVisaPolicyCertainty;
  source: string;
  verifiedAt: string;
}

const ownerConfirmation = 'Programme owner working confirmation for 2027 RWJP';

export const rwjpVisaPolicy: RwjpVisaPolicy = {
  id: 'rwjp.operations.visa-support',
  visaType: 'Temporary Visitor',
  studentVisaIssued: false,
  universityDocumentsAfterPayment: true,
  applicantResponsibleForApplication: true,
  applicantPaysVisaCosts: true,
  shortAnswerJa: 'ビザが必要な参加者には、プログラム費用の支払完了後、立命館大学が短期滞在ビザ申請に必要な大学側書類を準備します。RWJPは学生ビザではありません。ビザ申請にかかる費用は参加者本人の負担です。',
  detailJa: 'RWJP参加のために査証が必要な参加者については、プログラム費用の支払完了後、立命館大学が短期滞在ビザ（Temporary Visitor）申請に必要な大学側書類を準備します。RWJPは学生ビザを前提とするプログラムではありません。参加者本人は、自身の国籍・居住地に応じた査証要件を確認し、立命館大学から受け取った書類を用いて、必要な査証申請手続きを行います。ビザ申請料、大使館・領事館等への申請に伴う費用、その他ビザ取得のために必要となる費用は参加者本人の負担であり、プログラム費用には含まれません。',
  audiences: ['website', 'manual', 'faq'],
  certainty: 'Confirmed',
  source: ownerConfirmation,
  verifiedAt: '2026-08-14',
};
