export type ProgrammeGoal = 'language' | 'short' | 'specialist' | 'partner';
export type ProgrammeSeason = 'summer' | 'winter' | 'flexible';

export interface Programme {
  id: string;
  code: string;
  name: string;
  season: ProgrammeSeason;
  seasonLabel: string;
  duration: string;
  summary: string;
  audience: 'individual' | 'partner';
  goals: ProgrammeGoal[];
  image: string;
  imageAlt: string;
}

export const programmes: Programme[] = [
  {
    id: 'rsjp',
    code: 'RSJP',
    name: 'Ritsumeikan Summer Japanese Program',
    season: 'summer',
    seasonLabel: '夏',
    duration: '中期',
    summary: '日本語を集中的に学びながら、授業・交流・文化体験を通して日本での大学生活を経験します。',
    audience: 'individual',
    goals: ['language'],
    image: 'generated/rsjp.webp',
    imageAlt: '立命館大学の短期プログラムで学ぶ学生の様子',
  },
  {
    id: 'rwjp',
    code: 'RWJP',
    name: 'Ritsumeikan Winter Japanese Program',
    season: 'winter',
    seasonLabel: '冬',
    duration: '中期',
    summary: '冬の日本で、日本語学習とキャンパスライフを組み合わせた密度の高い留学体験を提供します。',
    audience: 'individual',
    goals: ['language'],
    image: 'generated/rwjp.webp',
    imageAlt: '冬期日本語プログラムに参加する学生の様子',
  },
  {
    id: 'rwjp-express',
    code: 'RWJP EXPRESS',
    name: 'RWJP Express',
    season: 'winter',
    seasonLabel: '冬',
    duration: '2週間',
    summary: '短期間で、日本語・学生交流・文化体験をバランスよく経験したい学生向けのプログラムです。',
    audience: 'individual',
    goals: ['short', 'language'],
    image: 'generated/rwjp-express.webp',
    imageAlt: '学生同士が交流している様子',
  },
  {
    id: 'rdsp',
    code: 'RDSP',
    name: 'Ritsumeikan Data Science Program',
    season: 'summer',
    seasonLabel: '夏',
    duration: '短期',
    summary: 'データサイエンスを軸に、専門的な学びと日本の大学生との共修を組み合わせます。',
    audience: 'individual',
    goals: ['specialist'],
    image: 'generated/rdsp.webp',
    imageAlt: '専門分野を学ぶ短期プログラムの授業風景',
  },
  {
    id: 'rbmp',
    code: 'RBMP',
    name: 'Ritsumeikan Business Management Program',
    season: 'winter',
    seasonLabel: '冬',
    duration: '短期',
    summary: 'ビジネスとマネジメントを、講義・企業や地域との接点・学生交流から立体的に学びます。',
    audience: 'individual',
    goals: ['specialist'],
    image: 'generated/rbmp.webp',
    imageAlt: 'ビジネスとマネジメントを学ぶ学生の様子',
  },
  {
    id: 'custom-programs',
    code: 'FOR PARTNERS',
    name: 'Custom Programs',
    season: 'flexible',
    seasonLabel: '通年相談',
    duration: '個別設計',
    summary: '海外大学の教育目的、期間、人数、授業、交流、宿泊条件に合わせて共同設計します。',
    audience: 'partner',
    goals: ['partner'],
    image: 'generated/custom.webp',
    imageAlt: '海外大学とのカスタムプログラムを表すキャンパスの様子',
  },
];
