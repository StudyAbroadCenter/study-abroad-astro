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
  refundPolicy: RwjpFact<string>;
  eligibility: RwjpFact<string>;
  japaneseRequirement: RwjpFact<string>;
  applicationPeriod: RwjpFact<{ start: string; end: string }>;
  programmeFee: RwjpFact<number>;
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
  refundPolicy: {
    value: '参加費支払後にキャンセルする場合、管理手数料54,000円は返金されません。残額は返金対象ですが、キャンセル時点ですでに手配済みで返金できない費用がある場合は、その実費を差し引いて返金します。',
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  eligibility: {
    value: '申請時からプログラム参加時まで大学または大学院に在籍している学生が対象です。大学入学前の方、卒業後の方は対象外です。社会人でも、大学・大学院にパートタイム学生として在籍している場合は対象です。',
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  japaneseRequirement: {
    value: 'JLPT N1保持者は対象外です。日本語学習経験がない方も応募できますが、プログラム開始前までにひらがな・カタカナを読めるようにしておく必要があります。',
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  applicationPeriod: {
    value: { start: '2026-09-30', end: '2026-10-14' },
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  programmeFee: {
    value: 370000,
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
};

export const isKnownFact = <T>(fact: RwjpFact<T>): fact is RwjpFact<T> & { value: T } =>
  fact.value !== null && fact.certainty !== 'Unknown';
