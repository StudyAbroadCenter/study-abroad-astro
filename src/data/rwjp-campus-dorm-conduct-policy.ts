export type RwjpConductPolicyCertainty = 'Confirmed' | 'Provisional';

export interface RwjpCampusDormConductPolicy {
  id: string;
  japanLawComplianceRequired: true;
  campusSmokingAllowed: false;
  campusAlcoholAllowed: false;
  taishogunDormSmokingAllowed: false;
  taishogunDormAlcoholScope: 'private-room-only';
  shortAnswerJa: string;
  detailJa: string;
  audiences: Array<'website' | 'manual' | 'faq'>;
  certainty: RwjpConductPolicyCertainty;
  source: string;
  verifiedAt: string;
}

const ownerConfirmation = 'Programme owner working confirmation for 2027 RWJP';

export const rwjpCampusDormConductPolicy: RwjpCampusDormConductPolicy = {
  id: 'rwjp.operations.smoking-and-alcohol',
  japanLawComplianceRequired: true,
  campusSmokingAllowed: false,
  campusAlcoholAllowed: false,
  taishogunDormSmokingAllowed: false,
  taishogunDormAlcoholScope: 'private-room-only',
  shortAnswerJa: '日本の法令を守ってください。立命館大学のキャンパスは禁煙で、キャンパス内での飲酒もできません。大将軍寮も禁煙で、飲酒は居室内に限ります。',
  detailJa: 'RWJP参加者は、日本の法令および立命館大学・大将軍寮のルールを守る必要があります。立命館大学のキャンパス内は禁煙で、キャンパス内での飲酒も認められていません。大将軍寮も禁煙です。大将軍寮で飲酒する場合は居室内に限り、共用スペース等では飲酒しないでください。年齢その他の法令上の要件についても日本法に従ってください。',
  audiences: ['website', 'manual', 'faq'],
  certainty: 'Confirmed',
  source: ownerConfirmation,
  verifiedAt: '2026-08-14',
};
