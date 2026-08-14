export type RwjpKnowledgeAudience = 'website' | 'manual' | 'faq';

export interface RwjpKnowledgeEntry {
  id: string;
  category: 'eligibility' | 'academic' | 'accommodation' | 'payment' | 'refund' | 'operations';
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

export const rwjpSharedKnowledge: RwjpKnowledgeEntry[] = [
  {
    id: 'rwjp.academic.class-placement',
    category: 'academic',
    title: '日本語クラスのレベル判定とクラス変更',
    question: '日本語クラスはどのように決まりますか？レベルが合わない場合は変更できますか？',
    shortAnswer: '申込時の日本語学習歴と日本語エッセイ等を参考に仮判定し、初日のプレイスメントテストで再調整します。開始後も担任へ相談し、必要に応じてクラス変更ができます。',
    detail: '申込時に提出された過去の日本語学習歴、日本語エッセイ等を参考に、参加者の日本語レベルを事前に判断します。プログラム初日にプレイスメントテストを実施し、その結果に基づいてクラスを再調整します。テスト結果によってクラスを移動する場合があります。日本語講座開始後に本人がレベルが合わないと感じた場合は、担任の先生に相談し、学習状況を確認したうえで必要に応じてクラスを変更します。',
    audiences: ['website', 'manual', 'faq'],
    certainty: 'Confirmed',
    source: ownerConfirmation,
    verifiedAt: '2026-08-14',
  },
];

export const getRwjpKnowledgeEntry = (id: string) =>
  rwjpSharedKnowledge.find((entry) => entry.id === id);
