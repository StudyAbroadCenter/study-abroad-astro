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
    theme: '日本語・文化・人文分野',
    headline: '京都という環境を 学びに組み込む',
    body: '衣笠キャンパスは、京都で日本語・日本文化・人文系テーマを扱うプログラムと相性のよい拠点です。RSJP・RSJP Express・RWJP・RWJP Expressは衣笠で実施します。Custom Programsでも教育目的に応じて実施候補として検討します。',
    contribution: '京都・日本語・日本文化・人文系テーマ',
    afterClass: 'キャンパスの外にも 京都の学びが続く',
    lenses: ['京都', '日本語・日本文化', '衣笠キャンパス'],
  },
  {
    id: 'osaka',
    theme: 'ビジネス・データ・共創',
    headline: '都市と社会を 専門テーマにつなぐ',
    body: '大阪いばらきキャンパス（OIC）は、ビジネス、マネジメント、データ等の専門テーマを扱うプログラムの拠点です。RDSPとRBMPはOICで実施します。Custom Programsでも内容や施設との適合性に応じて実施候補として検討します。',
    contribution: 'ビジネス・データ・都市型学習',
    afterClass: '大阪の都市環境も 学びの背景になる',
    lenses: ['大阪', '専門テーマ', '大阪いばらきキャンパス'],
  },
  {
    id: 'shiga',
    theme: '研究環境・特定専門分野',
    headline: '研究環境を 特定テーマの学びへ',
    body: 'びわこ・くさつキャンパス（BKC）は、研究分野や教育目的との適合性が高い場合にCustom Programsの実施候補となります。すべてのCustom Programsで利用する共通会場ではなく、内容に応じて検討します。',
    contribution: '研究環境を生かす特定テーマ',
    afterClass: '自然と研究環境の広がりへ',
    lenses: ['滋賀', '研究環境', 'びわこ・くさつキャンパス'],
  },
];
