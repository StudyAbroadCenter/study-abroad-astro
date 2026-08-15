// Draft page registry for recruitment-facing programme pages.
//
// IMPORTANT:
// - These pages are MVP presentation surfaces. They may exist before all operational
//   facts are verified.
// - Do not add dates, fees, accommodation, eligibility, status, or application facts
//   unless verified under docs/handbook/21_CROSS_SPEC_GOVERNANCE.md.
// - A draft page may intentionally say that details are being prepared.

export type ProgrammePageId =
  | 'rsjp'
  | 'rsjp-express'
  | 'rwjp'
  | 'rwjp-express'
  | 'rdsp'
  | 'rbmp'
  | 'custom-programs';

export interface ProgrammePageDraft {
  id: ProgrammePageId;
  code: string;
  category: string;
  title: string;
  lead: string;
  emphasis: string;
  campus?: string;
  isNewProgramme?: boolean;
}

export const programmePageDrafts: ProgrammePageDraft[] = [
  {
    id: 'rsjp',
    code: 'RSJP',
    category: '日本語・日本文化',
    title: 'Ritsumeikan Summer Japanese Program',
    lead: '日本語と日本文化を軸に学ぶ短期プログラム。',
    emphasis: '日本語を軸に、学びと日本での体験をつなぐプログラムです。年度別の期間・実施場所・条件は、確認できた情報から掲載します。',
  },
  {
    id: 'rsjp-express',
    code: 'RSJP EXPRESS',
    category: '日本語・日本文化',
    title: 'RSJP Express',
    lead: '日本語・文化・交流を 短期集中で。',
    emphasis: '短期集中でも、イイじゃん。学ぶ・動く・出会うを濃く。年度別の期間・実施場所・条件は、確認できた情報から掲載します。',
  },
  {
    id: 'rwjp',
    code: 'RWJP',
    category: '日本語・日本文化',
    title: 'Ritsumeikan Winter Japanese Program',
    lead: '冬の京都で、日本語を中心に学ぶ5週間。',
    emphasis: '教室で学ぶ日本語と、キャンパス・京都で過ごす時間を一つにつなげます。',
  },
  {
    id: 'rwjp-express',
    code: 'RWJP EXPRESS',
    category: '日本語・日本文化',
    title: 'RWJP Express',
    lead: '日本語と日本文化を 短期集中で学ぶ。',
    emphasis: '期間は短くても、学びまで薄くしない。年度別の条件は、確認済みの事実だけで示します。',
  },
  {
    id: 'rdsp',
    code: 'RDSP',
    category: '専門テーマ · 正式名称確認中',
    title: 'RDSP',
    lead: '専門テーマを 日本で深める。',
    emphasis: '正式名称と年度別の学習テーマを含む詳細は確認中です。確認できた内容から、学びの特徴と参加判断に必要な情報を掲載します。',
  },
  {
    id: 'rbmp',
    code: 'RBMP',
    category: 'BUSINESS MANAGEMENT · 企画中',
    title: 'Ritsumeikan Business Management Program',
    lead: 'ビジネスを、教室の外まで。',
    emphasis: 'Business Managementを中心に検討中の新規プログラムです。正式な年度別の期間・実施場所・条件は、確認できた内容から掲載します。',
    isNewProgramme: true,
  },
  {
    id: 'custom-programs',
    code: 'CUSTOM PROGRAMS',
    category: '大学・機関向け',
    title: 'Custom Programs',
    lead: '大学の目的から、ひとつの学びをつくる。',
    emphasis: '教育目的やテーマを起点に、授業・共修・文化体験・訪問・宿泊を一つのプログラムとして設計します。',
  },
];

export const getProgrammePageDraft = (id: string) =>
  programmePageDrafts.find((programme) => programme.id === id);
