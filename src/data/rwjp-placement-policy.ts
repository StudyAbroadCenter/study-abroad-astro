export type PlacementPolicyCertainty = 'Confirmed' | 'Provisional';

export interface PlacementTestRule {
  id: string;
  firstJapaneseClassPeriod: true;
  shortAnswerJa: string;
  detailJa: string;
  audiences: Array<'website' | 'manual' | 'faq'>;
  certainty: PlacementPolicyCertainty;
  source: string;
  verifiedAt: string;
}

export interface ProgrammePlacementSchedule {
  offering: 'RWJP' | 'RWJP Express';
  year: number;
  japaneseCourseStarts: 'programme-day-1' | 'programme-day-2';
  dayPart: 'morning' | 'afternoon' | null;
  placementTestTiming: 'first-period-of-first-japanese-class';
  certainty: PlacementPolicyCertainty;
  source: string;
  verifiedAt: string;
}

const ownerConfirmation = 'Programme owner working confirmation for 2027 RWJP / RWJP Express';

export const rwjpPlacementTestRule: PlacementTestRule = {
  id: 'rwjp.academic.placement-test-timing',
  firstJapaneseClassPeriod: true,
  shortAnswerJa: 'プレイスメントテストは、プログラム全体の初日ではなく、日本語講座の初回授業の1時間目に実施します。',
  detailJa: 'プレイスメントテストは、日本語講座が始まる日の最初の授業（1時間目）に実施します。日本語講座の開始日はプログラムによって異なり、プログラム初日に実施する場合と2日目に実施する場合があります。したがって、Web・Manual・FAQでは「プログラム初日に実施」と固定せず、「日本語講座初日の1時間目に実施」と案内してください。テスト結果に基づきクラスを再調整し、必要に応じてクラス移動を行います。',
  audiences: ['website', 'manual', 'faq'],
  certainty: 'Confirmed',
  source: ownerConfirmation,
  verifiedAt: '2026-08-14',
};

export const placementSchedule2027: ProgrammePlacementSchedule[] = [
  {
    offering: 'RWJP',
    year: 2027,
    japaneseCourseStarts: 'programme-day-2',
    dayPart: null,
    placementTestTiming: 'first-period-of-first-japanese-class',
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  {
    offering: 'RWJP Express',
    year: 2027,
    japaneseCourseStarts: 'programme-day-1',
    dayPart: 'afternoon',
    placementTestTiming: 'first-period-of-first-japanese-class',
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
];
