import type { CampusId } from '../../data/campuses';

export interface CampusExperienceCopy {
  id: CampusId;
  theme: string;
  headline: string;
  body: string;
  contribution: string;
  afterClass: string;
  lenses: string[];
}

export const campusExperienceCopyJa: CampusExperienceCopy[] = [
  {
    id: 'kyoto',
    theme: 'LANGUAGE / CULTURE / CO-LEARNING',
    headline: '日本語と文化を、京都の日常の中で学ぶ。',
    body: '衣笠キャンパスは、RSJP・RSJP Express・RWJP・RWJP Expressの学びの拠点です。日本語授業、学生共修、文化体験を、文化首都・京都での暮らしとつなげます。一部のCustom Programsも、テーマに応じて衣笠で実施します。',
    contribution: 'RSJP・RWJPシリーズ / 一部のCustom Programs',
    afterClass: '授業後も、学生街と京都の街が教室になる。',
    lenses: ['日本語・日本文化', '学生共修', '衣笠キャンパス'],
  },
  {
    id: 'osaka',
    theme: 'DATA / BUSINESS / CO-CREATION',
    headline: '専門テーマを、都市と社会の動きにつなげる。',
    body: '大阪いばらきキャンパスは、RDSPとRBMPの実施拠点です。データサイエンス、ビジネス、マネジメントを、学生との共修や企業・地域との接点から立体的に学びます。一部のCustom ProgramsもOICで実施します。',
    contribution: 'RDSP・RBMP / 一部のCustom Programs',
    afterClass: 'キャンパスを出ても、都市と社会の学びが続く。',
    lenses: ['データサイエンス', 'ビジネス・マネジメント', '大阪いばらきキャンパス'],
  },
  {
    id: 'shiga',
    theme: 'SELECTED CUSTOM PROGRAMS',
    headline: '広い研究環境を、特定テーマの学びに生かす。',
    body: 'びわこ・くさつキャンパスは、すべてのプログラムの共通会場ではありません。研究分野や教育目的との適合性が高い、一部の特定Custom Programsで実施します。',
    contribution: '一部の特定Custom Programs',
    afterClass: '自然と研究環境の広がりを感じる時間へ。',
    lenses: ['特定テーマ', '研究環境', 'びわこ・くさつキャンパス'],
  },
];
