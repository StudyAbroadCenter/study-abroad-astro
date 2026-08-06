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
    duration: '5週間',
    summary: '日本語を集中的に学びながら、授業・交流・文化体験を通して日本での大学生活を経験します。',
    audience: 'individual',
    goals: ['language'],
    image: 'IMG_8178.JPG',
    imageAlt: '立命館大学の短期プログラムで日本語を学ぶ学生たち',
  },
  {
    id: 'rwjp',
    code: 'RWJP',
    name: 'Ritsumeikan Winter Japanese Program',
    season: 'winter',
    seasonLabel: '冬',
    duration: '5週間',
    summary: '冬の日本で、日本語学習とキャンパスライフを組み合わせた密度の高い留学体験を提供します。',
    audience: 'individual',
    goals: ['language'],
    image: 'IMG_8263.JPG',
    imageAlt: '冬期日本語プログラムに参加する学生たち',
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
    image: 'IMG_1588.JPG',
    imageAlt: '短期プログラムで交流する学生たち',
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
    image: 'IMG_3725.JPG',
    imageAlt: '専門分野を学ぶ短期プログラムの参加学生たち',
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
    image: 'IMG_6091.JPG',
    imageAlt: 'ビジネスとマネジメントを学ぶ短期プログラムの参加学生たち',
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
    image: 'IMG_1687.JPG',
    imageAlt: '立命館大学のキャンパス',
  },
];
