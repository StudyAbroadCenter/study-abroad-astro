// Draft page registry for the first four recruitment-priority programmes.
//
// IMPORTANT:
// - This file intentionally contains only positioning explicitly confirmed for the
//   Programme Page implementation work.
// - It does not import unverified duration, campus, dates, fees, accommodation,
//   eligibility, status, or application facts from the prototype registry.
// - Add decision-critical facts only after verification under
//   docs/handbook/21_CROSS_SPEC_GOVERNANCE.md.

export type ProgrammePageId = 'rwjp' | 'rwjp-express' | 'rdsp' | 'rbmp';

export interface ProgrammePageDraft {
  id: ProgrammePageId;
  code: string;
  category: string;
  title: string;
  lead: string;
  emphasis: string;
  isNewProgramme?: boolean;
}

export const programmePageDrafts: ProgrammePageDraft[] = [
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
  },
  {
    id: 'rbmp',
    code: 'RBMP',
    category: 'Business Management',
    title: 'RBMP',
    lead: 'Business Managementに特化した新しい短期受入プログラムです。',
    emphasis: '新規プログラムだからこそ、確認済みの学習内容と参加価値を具体的に示します。',
    isNewProgramme: true,
  },
];

export const getProgrammePageDraft = (id: string) =>
  programmePageDrafts.find((programme) => programme.id === id);
