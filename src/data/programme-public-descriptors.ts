// Public-facing MVP descriptors that deliberately exclude unverified operational facts.
//
// These strings are safe for overview/discovery surfaces because they do not publish
// season, duration, fee, dates, eligibility, accommodation, or application status
// unless those facts are verified in the authoritative programme domain.
//
// RDSP is intentionally acronym-only until the repository-wide official-name conflict
// is resolved against an authoritative source.

export interface ProgrammePublicDescriptor {
  id: string;
  name: string;
  summary: string;
  status: string;
  experienceLine?: string;
}

export const programmePublicDescriptors: ProgrammePublicDescriptor[] = [
  {
    id: 'rsjp',
    name: 'Ritsumeikan Summer Japanese Program',
    summary: '日本語と日本文化を軸に学ぶ短期プログラムです。年度別の期間・実施内容・条件は詳細ページで確認できます。',
    status: '年度別条件を確認中',
    experienceLine: '学ぶ　使う　日本を少し近くする',
  },
  {
    id: 'rsjp-express',
    name: 'RSJP Express',
    summary: '日本語・日本文化を短期集中で学ぶExpressプログラムです。年度別の期間・実施内容・条件は詳細ページで確認できます。',
    status: '年度別条件を確認中',
    experienceLine: '短くても 学びは濃く',
  },
  {
    id: 'rwjp',
    name: 'Ritsumeikan Winter Japanese Program',
    summary: '日本語を中心に、文化体験とキャンパスでの学びをつなぐ冬期プログラムです。2027年度の主要情報を詳細ページで確認できます。',
    status: '2027情報あり',
    experienceLine: '教室で学ぶ 京都で使う',
  },
  {
    id: 'rwjp-express',
    name: 'RWJP Express',
    summary: '日本語と日本文化を短期集中で学ぶExpressプログラムです。年度別の期間・実施内容・条件は詳細ページで確認できます。',
    status: '年度別条件を確認中',
    experienceLine: '短いだけでは 終わらない',
  },
  {
    id: 'rdsp',
    name: 'RDSP',
    summary: '大阪いばらきキャンパス（OIC）で実施する専門テーマ型の短期プログラムです。正式名称と年度別の学習内容・条件は確認中です。',
    status: '正式名称・年度別条件を確認中',
    experienceLine: '専門を深める 問いを立てる',
  },
  {
    id: 'rbmp',
    name: 'RBMP',
    summary: '大阪いばらきキャンパス（OIC）で実施するビジネス・マネジメント領域の専門テーマ型プログラムです。正式な年度別条件は確認後に掲載します。',
    status: '年度別条件を確認中',
    experienceLine: 'ビジネスを 教室の外まで',
  },
  {
    id: 'custom-programs',
    name: 'Custom Programs',
    summary: '海外大学・教育機関からの学生団体を対象に、教育目的、期間、テーマ、参加人数等を伺い、授業・交流・文化体験・フィールドワーク・実施キャンパス等を相談しながら設計します。',
    status: '海外大学・教育機関向け',
    experienceLine: '大学ごとに 日本での学びを設計する',
  },
];

export const getProgrammePublicDescriptor = (id: string) =>
  programmePublicDescriptors.find((programme) => programme.id === id);
