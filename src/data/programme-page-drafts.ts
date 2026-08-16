// 日本語MVPのプログラムページ用レジストリ。
//
// IMPORTANT:
// - 日程、費用、宿泊、応募資格、募集状況等は確認済み情報だけを掲載する。
// - 未確認情報は推測せず、必要に応じて「確認中」と明示する。

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
    lead: '日本語から広がる 日本での学び',
    emphasis: '日本語の学習を軸に、日本文化やキャンパスでの体験へ学びを広げる短期プログラムです。年度ごとの日程・実施場所・参加条件は、正式に確認できた情報から掲載します。',
  },
  {
    id: 'rsjp-express',
    code: 'RSJP EXPRESS',
    category: '日本語・日本文化',
    title: 'RSJP Express',
    lead: '短い期間に 日本語と日本文化を濃く学ぶ',
    emphasis: '限られた期間だからこそ、日本語・文化・交流を密度高く体験します。年度ごとの日程・実施場所・参加条件は、正式に確認できた情報から掲載します。',
  },
  {
    id: 'rwjp',
    code: 'RWJP',
    category: '日本語・日本文化',
    title: 'Ritsumeikan Winter Japanese Program',
    lead: '冬の京都で 日本語を学び 暮らす5週間',
    emphasis: '教室で学ぶ日本語と、キャンパスや京都で過ごす日々を一つにつなげる5週間です。',
  },
  {
    id: 'rwjp-express',
    code: 'RWJP EXPRESS',
    category: '日本語・日本文化',
    title: 'RWJP Express',
    lead: '2週間だから踏み出せる 日本留学',
    emphasis: '期間は短くても、学びは薄くしない。日本語を中心に、日本文化や人との出会いを凝縮した冬の短期プログラムです。',
  },
  {
    id: 'rdsp',
    code: 'RDSP',
    category: '専門テーマ',
    title: 'RDSP',
    lead: '専門テーマを 日本で深める',
    emphasis: '正式名称と年度ごとの学習テーマを含む詳細は確認中です。確認できた内容から、学びの特徴と参加判断に必要な情報を順次掲載します。',
  },
  {
    id: 'rbmp',
    code: 'RBMP',
    category: 'ビジネス・マネジメント',
    title: 'Ritsumeikan Business Management Program',
    lead: 'ビジネスの学びを 教室の外へ',
    emphasis: 'ビジネス・マネジメントを中心に構想している新規プログラムです。年度ごとの日程・実施場所・参加条件は、正式に確認できた内容から掲載します。',
    isNewProgramme: true,
  },
  {
    id: 'custom-programs',
    code: 'CUSTOM PROGRAMS',
    category: '大学・機関向け',
    title: '大学・機関向けカスタムプログラム',
    lead: '大学の目的から 一つの学びをつくる',
    emphasis: '教育目的やテーマを起点に、授業・学生との共修・文化体験・訪問・宿泊などを組み合わせ、一つの短期プログラムとして設計します。',
  },
];

export const getProgrammePageDraft = (id: string) =>
  programmePageDrafts.find((programme) => programme.id === id);
