// 日本語MVPのプログラムページ用レジストリ。
//
// IMPORTANT:
// - 日程、費用、宿泊、応募資格、募集状況等は確認済み情報だけを掲載する。
// - 未確認情報は推測せず、必要に応じて「確認中」と明示する。
// - キャンパスは個人参加者が自由に選択する項目ではない。各プログラムの実施場所として扱う。
// - Custom Programsは海外大学・教育機関からの団体受入を対象とし、個人申込型として扱わない。

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
    emphasis: '日本語の学習を軸に、日本文化やキャンパスでの体験へ学びを広げる短期プログラムです。年度ごとの日程・参加条件は、正式に確認できた情報から掲載します。実施場所は衣笠キャンパスです。',
    campus: '衣笠キャンパス',
  },
  {
    id: 'rsjp-express',
    code: 'RSJP EXPRESS',
    category: '日本語・日本文化',
    title: 'RSJP Express',
    lead: '短い期間に 日本語と日本文化を濃く学ぶ',
    emphasis: '限られた期間だからこそ、日本語・文化・交流を密度高く体験します。年度ごとの日程・参加条件は、正式に確認できた情報から掲載します。実施場所は衣笠キャンパスです。',
    campus: '衣笠キャンパス',
  },
  {
    id: 'rwjp',
    code: 'RWJP',
    category: '日本語・日本文化',
    title: 'Ritsumeikan Winter Japanese Program',
    lead: '冬の京都で 日本語を学び 暮らす5週間',
    emphasis: '教室で学ぶ日本語と、衣笠キャンパスや京都で過ごす日々を一つにつなげる5週間です。',
    campus: '衣笠キャンパス',
  },
  {
    id: 'rwjp-express',
    code: 'RWJP EXPRESS',
    category: '日本語・日本文化',
    title: 'RWJP Express',
    lead: '2週間だから踏み出せる 日本留学',
    emphasis: '2027年2月16日から2月26日まで、衣笠キャンパスで実施します。日本語講座1,350分（22.5時間）と文化学習360分を、短い期間に凝縮して学ぶ冬の短期プログラムです。',
    campus: '衣笠キャンパス',
  },
  {
    id: 'rdsp',
    code: 'RDSP',
    category: 'AI・データサイエンス・ロボティクス',
    title: 'RDSP',
    lead: 'AIとデータサイエンスを 日本で学ぶ',
    emphasis: '大阪いばらきキャンパス（OIC）を拠点に、AI、データサイエンス、ロボティクス等を扱います。立命館大学教員による講義に加え、学生イベント、Buddy活動、Microsoft Base Ritsumeikanでの協働学習を組み合わせます。年度別の日程・募集条件は、確定情報のみ掲載します。',
    campus: '大阪いばらきキャンパス（OIC）',
  },
  {
    id: 'rbmp',
    code: 'RBMP',
    category: 'ビジネス・マネジメント',
    title: 'Ritsumeikan Business Management Program',
    lead: 'ビジネスの学びを 教室の外へ',
    emphasis: '2027年2月12日から2月24日まで大阪いばらきキャンパス（OIC）で実施する計画です。ビジネス・マネジメント講義8コマに、茶道、ホッケー、Microsoft Baseでの共修、カップヌードルミュージアム訪問を組み合わせます。一般参加者と引率者帯同団体では宿泊条件が異なるため、案内を分けて掲載します。',
    campus: '大阪いばらきキャンパス（OIC）',
    isNewProgramme: true,
  },
  {
    id: 'custom-programs',
    code: 'CUSTOM PROGRAMS',
    category: '海外大学・教育機関向け',
    title: '大学・機関向けカスタムプログラム',
    lead: '大学ごとに 日本での学びを設計する',
    emphasis: '個人申込型ではなく、海外の大学・教育機関から学生団体を受け入れるプログラムです。教育目的、期間、テーマ、参加人数等を伺い、授業、学生交流、文化体験、フィールドワーク、実施キャンパス等を相談しながら設計します。留学サポートデスクでは英語での相談・調整が可能です。',
  },
];

export const getProgrammePageDraft = (id: string) =>
  programmePageDrafts.find((programme) => programme.id === id);
