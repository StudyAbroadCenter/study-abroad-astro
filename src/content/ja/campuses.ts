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
    headline: '日本語と文化を 京都の日常で学ぶ',
    body: '衣笠キャンパスはRSJP・RSJP Express・RWJP・RWJP Expressの学びの拠点です。日本語、共修、文化体験を、京都で過ごす時間へつなげます。一部のCustom Programsもテーマに応じて実施します。',
    contribution: 'RSJP・RWJPシリーズ / 一部のCustom Programs',
    afterClass: '授業のあとも 京都が続く',
    lenses: ['日本語・日本文化', '学生共修', '衣笠キャンパス'],
  },
  {
    id: 'osaka',
    theme: 'DATA / BUSINESS / CO-CREATION',
    headline: '専門テーマを 都市と社会へつなぐ',
    body: '大阪いばらきキャンパスはRDSPとRBMPの実施拠点です。データサイエンス、ビジネス、マネジメントを、共修や企業・地域との接点から学びます。一部のCustom Programsも実施します。',
    contribution: 'RDSP・RBMP / 一部のCustom Programs',
    afterClass: 'キャンパスの外にも 社会がある',
    lenses: ['データサイエンス', 'ビジネス・マネジメント', '大阪いばらきキャンパス'],
  },
  {
    id: 'shiga',
    theme: 'SELECTED CUSTOM PROGRAMS',
    headline: '研究環境を 特定テーマの学びへ',
    body: 'びわこ・くさつキャンパスは共通会場ではありません。研究分野や教育目的との適合性が高い、一部の特定Custom Programsで実施します。',
    contribution: '一部の特定Custom Programs',
    afterClass: '自然と研究環境の広がりへ',
    lenses: ['特定テーマ', '研究環境', 'びわこ・くさつキャンパス'],
  },
];
