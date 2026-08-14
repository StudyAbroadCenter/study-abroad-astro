export type RwjpKnowledgeAudience = 'website' | 'manual' | 'faq';

export interface RwjpKnowledgeEntry {
  id: string;
  category: 'eligibility' | 'academic' | 'culture' | 'accommodation' | 'payment' | 'refund' | 'operations';
  title: string;
  question: string;
  shortAnswer: string;
  detail: string;
  audiences: RwjpKnowledgeAudience[];
  certainty: 'Confirmed' | 'Provisional';
  source: string;
  verifiedAt: string;
}

const ownerConfirmation = 'Programme owner working confirmation for 2027 RWJP';
const common = { audiences: ['website', 'manual', 'faq'] as RwjpKnowledgeAudience[], certainty: 'Confirmed' as const, source: ownerConfirmation, verifiedAt: '2026-08-14' };

export const rwjpSharedKnowledge: RwjpKnowledgeEntry[] = [
  {
    id: 'rwjp.academic.class-placement', category: 'academic', title: '日本語クラスのレベル判定とクラス変更',
    question: '日本語クラスはどのように決まりますか？レベルが合わない場合は変更できますか？',
    shortAnswer: '申込時の日本語学習歴と日本語エッセイ等を参考に仮判定し、初日のプレイスメントテストで再調整します。開始後も担任へ相談し、必要に応じてクラス変更ができます。',
    detail: '申込時に提出された過去の日本語学習歴、日本語エッセイ等を参考に、参加者の日本語レベルを事前に判断します。プログラム初日にプレイスメントテストを実施し、その結果に基づいてクラスを再調整します。テスト結果によってクラスを移動する場合があります。日本語講座開始後に本人がレベルが合わないと感じた場合は、担任の先生に相談し、学習状況を確認したうえで必要に応じてクラスを変更します。', ...common,
  },
  {
    id: 'rwjp.academic.grading', category: 'academic', title: '日本語科目の成績評価', question: 'RWJPの日本語授業では、どのように成績が評価されますか？',
    shortAnswer: '試験、クイズ、出席率、課題提出、プレゼンテーション、授業への参加度を総合して成績評価を行います。',
    detail: 'RWJPの日本語授業では成績評価を行います。評価対象には、試験、クイズ、出席率、課題の提出状況、プレゼンテーションの出来、授業・クラスへの参加度が含まれます。単一の試験結果だけではなく、期間中の学習への取り組みを複数の観点から総合的に評価します。', ...common,
  },
  {
    id: 'rwjp.academic.grade-scale', category: 'academic', title: '成績評価の段階', question: 'RWJPの成績はどのような評価段階ですか？',
    shortAnswer: '成績はA+、A、B、C、Fの5段階です。成績不良の場合はFとなります。', detail: 'RWJPの成績評価はA+、A、B、C、Fの5段階で行います。評価基準を満たさない場合はFとなります。', ...common,
  },
  {
    id: 'rwjp.academic.transcript-and-certificate', category: 'academic', title: '成績表・修了証書と修了要件', question: '成績表や修了証書は発行されますか？発行条件はありますか？',
    shortAnswer: '成績表と修了証書を発行します。日本語講座と日本文化体験のそれぞれで3分の2以上の出席が必要です。',
    detail: 'RWJPでは成績表と修了証書を発行します。発行には、日本語講座と日本文化体験のそれぞれについて、全実施回数の3分の2以上に出席することが必要です。どちらか一方だけではなく、両方でこの出席要件を満たす必要があります。なお、3分の2は修了証書発行の最低要件であり、参加者が3分の1まで自由に欠席してよいという意味ではありません。', ...common,
  },
  {
    id: 'rwjp.academic.no-credit', category: 'academic', title: '単位の取扱い', question: 'RWJP参加により立命館大学の単位は取得できますか？',
    shortAnswer: 'RWJPでは立命館大学の単位は発行されません。', detail: 'RWJPでは成績評価、成績表、修了証書はありますが、立命館大学の正規科目としての単位は発行されません。所属大学での単位認定の可否については、参加者自身が所属大学へ確認してください。', ...common,
  },
  {
    id: 'rwjp.culture.activity-model', category: 'culture', title: '日本文化体験の実施方針', question: 'RWJPではどのような日本文化体験がありますか？',
    shortAnswer: '日本文化体験は11回実施します。具体的な内容は年度ごとのプログラム手配時に決定し、茶道・書道・坐禅などを採用することがあります。',
    detail: 'RWJPでは日本文化体験を11回実施します。個々の体験内容は、年度ごとのプログラム手配時に改めて決定するため、募集時点で茶道・書道・坐禅などの特定活動を確約しません。これらは過去に採用することが多い代表例です。11回の中には、立命館大学の学生団体が主催し、日本文化体験と立命館学生との交流を兼ねる回を含むことがあります。公開時には、確定前の活動名を確約表現で掲載しないでください。', ...common,
  },
  {
    id: 'rwjp.operations.attendance-expectation', category: 'operations', title: '授業・文化体験への参加姿勢',
    question: '授業や日本文化体験はすべて参加する必要がありますか？',
    shortAnswer: '原則として、日本語講座と日本文化体験を含むすべてのプログラム活動への参加を求めます。日本文化体験は選択制ではありません。',
    detail: 'RWJPでは、日本語講座、日本文化体験、その他の予定されたプログラム活動に原則すべて参加することを求めます。日本文化体験は選択制ではありません。修了証書の発行要件としては、日本語講座と日本文化体験のそれぞれで3分の2以上の出席が必要ですが、これは最低基準です。参加者には、正当な理由のない欠席や遅刻を避け、すべての活動に真摯かつ前向きに参加することを期待します。', ...common,
  },
];

export const getRwjpKnowledgeEntry = (id: string) => rwjpSharedKnowledge.find((entry) => entry.id === id);
