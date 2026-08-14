export type SharedDormRuleCertainty = 'Confirmed' | 'Provisional';

export interface SharedDormRule {
  id: string;
  appliesTo: ('RWJP' | 'RWJP Express')[];
  title: string;
  shortAnswer: string;
  detail: string;
  certainty: SharedDormRuleCertainty;
  source: string;
  verifiedAt: string;
}

const ownerConfirmation = 'Programme owner working confirmation for RWJP / RWJP Express';

export const taishogunDormSharedRules: SharedDormRule[] = [
  {
    id: 'taishogun.checkin-checkout.schedule',
    appliesTo: ['RWJP', 'RWJP Express'],
    title: '大将軍寮のチェックイン・チェックアウト日',
    shortAnswer: 'チェックインはプログラム開始前日、チェックアウトはプログラム終了翌日です。',
    detail: '大将軍寮を利用する場合、チェックインは各プログラム開始日の前日、チェックアウトは各プログラム終了日の翌日です。任意の日程に変更することはできません。',
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  {
    id: 'taishogun.checkin.window',
    appliesTo: ['RWJP', 'RWJP Express'],
    title: '大将軍寮のチェックイン時間枠',
    shortAnswer: 'チェックインには指定時間枠があります。現在は15:00〜18:00を仮置きしています。',
    detail: 'チェックインは自由な時刻ではなく、大学・寮側が指定する時間枠内に行う必要があります。現時点では15:00〜18:00を仮の時間枠として扱います。正式な時間枠は資料確認後に更新してください。',
    certainty: 'Provisional',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
  {
    id: 'taishogun.checkout.window-and-inspection',
    appliesTo: ['RWJP', 'RWJP Express'],
    title: '大将軍寮のチェックアウト時間枠と立会い検査',
    shortAnswer: 'チェックアウトには指定時間枠があり、寮スタッフの立会い検査があります。現在は9:00〜12:00を仮置きしています。',
    detail: 'チェックアウトは自由な時刻には設定できません。指定された時間枠内に行い、大将軍寮スタッフによる立会い検査を受ける必要があります。現時点では9:00〜12:00を仮の時間枠として扱います。正式な時間枠は資料確認後に更新してください。',
    certainty: 'Provisional',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
];

export const getTaishogunDormRule = (id: string) =>
  taishogunDormSharedRules.find((rule) => rule.id === id);
