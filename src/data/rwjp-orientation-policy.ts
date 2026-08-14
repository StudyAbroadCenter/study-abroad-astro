export type RwjpOrientationPolicyCertainty = 'Confirmed' | 'Provisional';

export interface RwjpOrientationPolicy {
  id: string;
  programmeDay: 'Day 1';
  dayPart: 'Morning';
  exactTime: null;
  delivery: 'In person';
  preDepartureOnlineOrientation: false;
  shortAnswerJa: string;
  detailJa: string;
  audiences: Array<'website' | 'manual' | 'faq'>;
  certainty: RwjpOrientationPolicyCertainty;
  source: string;
  verifiedAt: string;
}

const ownerConfirmation = 'Programme owner working confirmation for 2027 RWJP';

export const rwjpOrientationPolicy: RwjpOrientationPolicy = {
  id: 'rwjp.operations.orientation-timing',
  programmeDay: 'Day 1',
  dayPart: 'Morning',
  exactTime: null,
  delivery: 'In person',
  preDepartureOnlineOrientation: false,
  shortAnswerJa: 'RWJPのオリエンテーションは、来日後のプログラム初日午前に対面で実施します。',
  detailJa: 'RWJPのオリエンテーションは、参加者が来日した後、プログラム初日の午前に対面で実施します。具体的な開始時刻は年度ごとの実施日程で案内します。現時点では、プログラム開始前のオンライン・オリエンテーションを正式な実施形態とはしていません。プログラム運営、保険、緊急時対応、参加上の注意事項などの詳細を案内します。',
  audiences: ['website', 'manual', 'faq'],
  certainty: 'Confirmed',
  source: ownerConfirmation,
  verifiedAt: '2026-08-14',
};
