/**
 * Current annual offering facts — single structured source for all language editions.
 *
 * 編集ルール:
 * - 年度・日程・費用・募集期間・チェックイン/アウト・最少催行など、年度で動く事実はここだけを更新する。
 * - 日本語・英語・韓国語・中国語の表示側で同じ値を直書きしない。
 * - 未確認値は null のままにし、前年値や推測値で埋めない。
 * - source / verifiedAt は公開用表示ではなく、内部の検証可能性のために保持する。
 * - プログラムの魅力を伝える文章は各言語で個別に編集してよいが、このファイルの事実を変更してはならない。
 */

export type CurrentOfferingId = 'rsjp' | 'rsjp-express' | 'rwjp' | 'rwjp-express' | 'rdsp' | 'rbmp';
export type OfferingCertainty = 'Confirmed' | 'Provisional' | 'Unknown';
export type OfferingStatus = 'Confirmed' | 'Working plan' | 'Pending';

export type DateRange = { start: string; end: string };

export interface CurrentOfferingFact {
  id: CurrentOfferingId;
  academicYear: number;
  code: string;
  offering: string;
  officialName: string;
  status: OfferingStatus;
  certainty: OfferingCertainty;
  campusId: 'kinugasa' | 'oic';
  campusJa: string;
  programmeDates: DateRange | null;
  applicationPeriod: DateRange | null;
  checkIn: string | null;
  checkOut: string | null;
  programmeFeeJPY: number | null;
  accommodationFeeJPY: number | null;
  minimumParticipants: number | null;
  paymentMethod: string | null;
  refundDeductionJPY: number | null;
  source: string;
  verifiedAt: string | null;
}

export const currentOfferingFacts: Record<CurrentOfferingId, CurrentOfferingFact> = {
  rsjp: {
    id: 'rsjp',
    academicYear: 2027,
    code: 'RSJP',
    offering: '2027 RSJP',
    officialName: 'Ritsumeikan Summer Japanese Program',
    status: 'Pending',
    certainty: 'Unknown',
    campusId: 'kinugasa',
    campusJa: '衣笠キャンパス（京都）',
    programmeDates: null,
    applicationPeriod: null,
    checkIn: null,
    checkOut: null,
    programmeFeeJPY: null,
    accommodationFeeJPY: null,
    minimumParticipants: null,
    paymentMethod: null,
    refundDeductionJPY: null,
    source: '2027年度情報は正式確認後に登録',
    verifiedAt: null,
  },
  'rsjp-express': {
    id: 'rsjp-express',
    academicYear: 2027,
    code: 'RSJP EXPRESS',
    offering: '2027 RSJP Express',
    officialName: 'RSJP Express',
    status: 'Pending',
    certainty: 'Unknown',
    campusId: 'kinugasa',
    campusJa: '衣笠キャンパス（京都）',
    programmeDates: null,
    applicationPeriod: null,
    checkIn: null,
    checkOut: null,
    programmeFeeJPY: null,
    accommodationFeeJPY: null,
    minimumParticipants: null,
    paymentMethod: null,
    refundDeductionJPY: null,
    source: '2027年度情報は正式確認後に登録',
    verifiedAt: null,
  },
  rwjp: {
    id: 'rwjp',
    academicYear: 2027,
    code: 'RWJP',
    offering: '2027 RWJP',
    officialName: 'Ritsumeikan Winter Japanese Program',
    status: 'Confirmed',
    certainty: 'Confirmed',
    campusId: 'kinugasa',
    campusJa: '衣笠キャンパス（京都）',
    programmeDates: { start: '2027-01-12', end: '2027-02-11' },
    applicationPeriod: { start: '2026-09-30', end: '2026-10-14' },
    checkIn: '2027-01-11',
    checkOut: '2027-02-12',
    programmeFeeJPY: 370000,
    accommodationFeeJPY: 92500,
    minimumParticipants: null,
    paymentMethod: 'Convera',
    refundDeductionJPY: 54000,
    source: '2027年度RWJP担当者確認',
    verifiedAt: '2026-08-18',
  },
  'rwjp-express': {
    id: 'rwjp-express',
    academicYear: 2027,
    code: 'RWJP EXPRESS',
    offering: '2027 RWJP Express',
    officialName: 'RWJP Express',
    status: 'Confirmed',
    certainty: 'Confirmed',
    campusId: 'kinugasa',
    campusJa: '衣笠キャンパス（京都）',
    programmeDates: { start: '2027-02-16', end: '2027-02-26' },
    applicationPeriod: null,
    checkIn: '2027-02-15',
    checkOut: '2027-02-27',
    programmeFeeJPY: null,
    accommodationFeeJPY: null,
    minimumParticipants: 15,
    paymentMethod: 'Convera',
    refundDeductionJPY: 27000,
    source: '2027年度RWJP Express担当者確認',
    verifiedAt: '2026-08-18',
  },
  rdsp: {
    id: 'rdsp',
    academicYear: 2027,
    code: 'RDSP',
    offering: 'RDSP',
    officialName: 'RDSP',
    status: 'Working plan',
    certainty: 'Provisional',
    campusId: 'oic',
    campusJa: '大阪いばらきキャンパス（OIC）',
    programmeDates: null,
    applicationPeriod: null,
    checkIn: null,
    checkOut: null,
    programmeFeeJPY: null,
    accommodationFeeJPY: null,
    minimumParticipants: null,
    paymentMethod: null,
    refundDeductionJPY: null,
    source: '2026RDSPW_Outlineおよび2027年度担当者確認',
    verifiedAt: '2026-08-18',
  },
  rbmp: {
    id: 'rbmp',
    academicYear: 2027,
    code: 'RBMP',
    offering: '2027 RBMP',
    officialName: 'Ritsumeikan Business Management Program',
    status: 'Working plan',
    certainty: 'Provisional',
    campusId: 'oic',
    campusJa: '大阪いばらきキャンパス（OIC）',
    programmeDates: { start: '2027-02-12', end: '2027-02-24' },
    applicationPeriod: null,
    checkIn: '2027-02-10',
    checkOut: '2027-02-25',
    programmeFeeJPY: 200000,
    accommodationFeeJPY: null,
    minimumParticipants: 15,
    paymentMethod: null,
    refundDeductionJPY: null,
    source: '2027年度RBMP担当者確認',
    verifiedAt: '2026-08-18',
  },
};

export const getCurrentOfferingFact = (id: string) =>
  currentOfferingFacts[id as CurrentOfferingId];
