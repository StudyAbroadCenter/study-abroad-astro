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
    category: '日本語プログラム',
    title: 'Ritsumeikan Summer Japanese Program',
    lead: '夏の京都で日本語と日本文化を学ぶ5週間の短期受入プログラムです。',
    emphasis: 'MVPではプログラムの特徴を先に示し、日程・費用・募集要項などの確定情報は確認後に順次掲載します。',
    campus: '衣笠キャンパス（京都）',
  },
  {
    id: 'rsjp-express',
    code: 'RSJP EXPRESS',
    category: '日本語プログラム',
    title: 'RSJP Express',
    lead: '日本語、日本文化、学生交流を短期間に凝縮して経験する夏のプログラムです。',
    emphasis: '現在はMVPページです。確認済みの情報から順に詳細を追加します。',
    campus: '衣笠キャンパス（京都）',
  },
  {
    id: 'rwjp',
    code: 'RWJP',
    category: '日本語プログラム',
    title: 'RWJP',
    lead: '日本語を学ぶことを中心に据えた短期受入プログラムです。',
    emphasis: '日本語学習を、このプログラムの中心として分かりやすく伝えます。',
  },
  {
    id: 'rwjp-express',
    code: 'RWJP EXPRESS',
    category: '日本語プログラム',
    title: 'RWJP Express',
    lead: '日本語を学ぶことを中心に据えた短期受入プログラムです。',
    emphasis: 'RWJPとの違いは、確認済みの事実だけを使って今後明確にします。',
  },
  {
    id: 'rdsp',
    code: 'RDSP',
    category: 'データサイエンス',
    title: 'RDSP',
    lead: 'データサイエンスに特化した短期受入プログラムです。',
    emphasis: 'データサイエンスを学びたい学生が、内容と学習価値を判断できるページを目指します。',
    campus: '大阪いばらきキャンパス（OIC）',
  },
  {
    id: 'rbmp',
    code: 'RBMP',
    category: 'Business Management（企画中）',
    title: 'RBMP',
    lead: 'Business Managementを中心テーマとして検討している新規短期受入プログラムです。詳細は確認中です。',
    emphasis: '企画内容が確認できた項目から、学習内容と参加価値を具体的に示していきます。',
    campus: '大阪いばらきキャンパス（OIC）',
    isNewProgramme: true,
  },
  {
    id: 'custom-programs',
    code: 'CUSTOM PROGRAMS',
    category: '大学・機関向け',
    title: 'Custom Programs',
    lead: '協定校・大学の教育目的に合わせて設計するオーダーメード型の短期プログラムです。',
    emphasis: 'MVPでは設計の考え方を紹介し、相談導線と実施例は今後拡充します。',
  },
];

export const getProgrammePageDraft = (id: string) =>
  programmePageDrafts.find((programme) => programme.id === id);
