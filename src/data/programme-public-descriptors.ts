// Public-facing MVP descriptors that deliberately exclude unverified operational facts.
//
// These strings are safe for overview/discovery surfaces because they do not publish
// season, duration, campus, fee, dates, eligibility, accommodation, or application
// status. Those facts belong to their authoritative domains and detail pages.
//
// RDSP is intentionally acronym-only until the repository-wide official-name conflict
// is resolved against an authoritative source.

export interface ProgrammePublicDescriptor {
  id: string;
  name: string;
  summary: string;
  status: string;
}

export const programmePublicDescriptors: ProgrammePublicDescriptor[] = [
  {
    id: 'rsjp',
    name: 'Ritsumeikan Summer Japanese Program',
    summary: '日本語と日本文化を軸に学ぶ短期プログラムです。年度別の期間・実施内容・条件は詳細ページで確認できます。',
    status: '年度別条件を確認中',
  },
  {
    id: 'rsjp-express',
    name: 'RSJP Express',
    summary: '日本語・日本文化を短期集中で学ぶExpressプログラムです。年度別の期間・実施内容・条件は詳細ページで確認できます。',
    status: '年度別条件を確認中',
  },
  {
    id: 'rwjp',
    name: 'Ritsumeikan Winter Japanese Program',
    summary: '日本語を中心に、文化体験とキャンパスでの学びをつなぐ冬期プログラムです。2027年度の主要情報を詳細ページで確認できます。',
    status: '2027情報あり',
  },
  {
    id: 'rwjp-express',
    name: 'RWJP Express',
    summary: '日本語と日本文化を短期集中で学ぶExpressプログラムです。年度別の期間・実施内容・条件は詳細ページで確認できます。',
    status: '年度別条件を確認中',
  },
  {
    id: 'rdsp',
    name: 'RDSP',
    summary: '専門テーマ型の短期プログラムです。正式名称と年度別の学習内容・条件は確認中です。',
    status: '正式名称・年度別条件を確認中',
  },
  {
    id: 'rbmp',
    name: 'RBMP',
    summary: 'ビジネス・マネジメント領域を扱う専門テーマ型プログラムとして企画中です。正式な年度別条件は確認後に掲載します。',
    status: '企画中・年度別条件を確認中',
  },
  {
    id: 'custom-programs',
    name: 'Custom Programs',
    summary: '大学の教育目的とテーマから、授業・共修・文化体験・訪問・宿泊を一つのプログラムとして設計します。',
    status: '大学・機関向け',
  },
];

export const getProgrammePublicDescriptor = (id: string) =>
  programmePublicDescriptors.find((programme) => programme.id === id);
