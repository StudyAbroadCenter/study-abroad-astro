export type RwjpVisaPolicyCertainty = 'Confirmed' | 'Provisional';

export interface RwjpVisaPolicy {
  id: string;
  visaType: 'Temporary Visitor';
  studentVisaIssued: false;
  universityDocumentsAfterPayment: boolean;
  applicantResponsibleForApplication: boolean;
  applicantPaysVisaCosts: boolean;
  visaRefusalAtApplicantRisk: boolean;
  visaRefusalCompensationProvided: false;
  visaRefusalUsesStandardRefundPolicy: boolean;
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
  visaRefusalAtApplicantRisk: true,
  visaRefusalCompensationProvided: false,
  visaRefusalUsesStandardRefundPolicy: true,
  shortAnswerJa: 'ビザが必要な参加者には、プログラム費用の支払完了後、立命館大学が短期滞在ビザ申請に必要な大学側書類を準備します。RWJPは学生ビザではありません。ビザ申請費用は本人負担で、ビザが発給されない場合も大学からの追加補償はありません。',
  detailJa: 'RWJP参加のために査証が必要な参加者については、プログラム費用の支払完了後、立命館大学が短期滞在ビザ（Temporary Visitor）申請に必要な大学側書類を準備します。RWJPは学生ビザを前提とするプログラムではありません。参加者本人は、自身の国籍・居住地に応じた査証要件を確認し、立命館大学から受け取った書類を用いて必要な査証申請手続きを行います。ビザ申請料、大使館・領事館等への申請に伴う費用、その他ビザ取得のために必要となる費用は参加者本人の負担であり、プログラム費用には含まれません。ビザの発給可否は大学が保証するものではなく、不発給となった場合の責任は参加者本人にあります。立命館大学はビザ不発給そのものに対する追加の費用補償を行いません。不発給により参加を取りやめる場合の返金は通常の支払後キャンセル規定に従い、管理手数料54,000円および既に手配済みで返金不能な実費がある場合はそれらを差し引いた残額を返金します。',
  audiences: ['website', 'manual', 'faq'],
  certainty: 'Confirmed',
  source: ownerConfirmation,
  verifiedAt: '2026-08-14',
};
