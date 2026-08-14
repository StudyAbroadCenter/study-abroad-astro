export type FactCertainty = 'Confirmed' | 'Provisional' | 'Unknown' | 'Not Applicable';

export interface RwjpFact<T> {
  value: T | null;
  certainty: FactCertainty;
  source: string;
  verifiedAt: string | null;
}

export interface RwjpFacts {
  offering: string;
  officialName: RwjpFact<string>;
  programmeDates: RwjpFact<{ start: string; end: string }>;
  durationLabel: RwjpFact<string>;
  campus: RwjpFact<string>;
  japaneseMinutes: RwjpFact<number>;
  cultureMinutes: RwjpFact<number>;
  accommodation: RwjpFact<string>;
  paymentMethod: RwjpFact<string>;
  refundAmount: RwjpFact<number>;
  applicationPeriod: RwjpFact<string>;
  programmeFee: RwjpFact<number>;
  applicationStatus: RwjpFact<string>;
}

const ownerConfirmation = 'Programme owner working confirmation for 2027 RWJP';

export const rwjp2027Facts: RwjpFacts = {
  offering: '2027 RWJP',
  officialName: {
    value: 'Ritsumeikan Winter Japanese Program',
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  programmeDates: {
    value: { start: '2027-01-12', end: '2027-02-11' },
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  durationLabel: {
    value: '5週間',
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  campus: {
    value: '衣笠キャンパス（京都）',
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  japaneseMinutes: {
    value: 990,
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  cultureMinutes: {
    value: 360,
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  accommodation: {
    value: '大将軍寮を使用予定。部屋条件・配慮事項は正式募集案内で確認します。',
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  paymentMethod: {
    value: 'Convera',
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  refundAmount: {
    value: 54000,
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  applicationPeriod: {
    value: null,
    certainty: 'Unknown',
    source: 'Awaiting approved application schedule',
    verifiedAt: null,
  },
  programmeFee: {
    value: null,
    certainty: 'Unknown',
    source: 'Awaiting approved programme fee',
    verifiedAt: null,
  },
  applicationStatus: {
    value: null,
    certainty: 'Unknown',
    source: 'Awaiting approved application status',
    verifiedAt: null,
  },
};

export const isKnownFact = <T>(fact: RwjpFact<T>): fact is RwjpFact<T> & { value: T } =>
  fact.value !== null && fact.certainty !== 'Unknown';
