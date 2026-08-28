export type EvidenceStatus = 'verified' | 'pending';

export interface CoLearningMetric {
  key: string;
  label: string;
  value: number;
  unit: string;
  period: string;
  definition: string;
  source: string;
  verifiedAt: string;
  status: EvidenceStatus;
}

export interface DocumentedCoLearningActivity {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  evidenceNote: string;
}

/**
 * Public website evidence must contain aggregate, consent-safe information only.
 * Operational Buddy / student matching data must never be stored in this public repository.
 *
 * IMPORTANT:
 * - Do not infer unique Ritsumeikan student counts from photos, schedules or staff memory.
 * - Do not convert "participations" into "students".
 * - Add a metric only when source, period, definition and verification date are available.
 */
export const verifiedCoLearningMetrics: CoLearningMetric[] = [];

/**
 * Documented activity types already represented by real past-programme photography on the site.
 * These are qualitative evidence examples, not quantitative outcome claims.
 */
export const documentedCoLearningActivities: DocumentedCoLearningActivity[] = [
  {
    id: 'learn-together',
    title: '教室で、共に学ぶ',
    summary: '短期受入プログラムでは、ことばを学ぶ場そのものが学生同士の出会いになります。',
    image: 'programs/rwjp/real/rwjp-real-japanese-class.webp',
    imageAlt: '教室で日本語を学ぶ短期受入プログラムの学生たち',
    evidenceNote: '過去の短期受入プログラム実施写真',
  },
  {
    id: 'share-culture',
    title: '文化を、共に体験する',
    summary: '日本文化を説明して終わるのではなく、同じ場で体験し、違いを話す機会につなげます。',
    image: 'programs/rwjp/real/rwjp-real-culture-tatami.webp',
    imageAlt: '畳の部屋で日本文化を学ぶ学生たち',
    evidenceNote: '過去の短期受入プログラム実施写真',
  },
  {
    id: 'field-learning',
    title: 'キャンパスの外でも、共に考える',
    summary: '京都や地域での活動も、場所を見るだけではなく、学生同士が経験を共有する学びへつなげます。',
    image: 'programs/rwjp/real/rwjp-real-kyoto-field.webp',
    imageAlt: '京都でグループ活動を行う学生たち',
    evidenceNote: '過去の短期受入プログラム実施写真',
  },
];

export const coLearningEvidenceGovernance = {
  publicDataRule: '公開サイトには個人情報を置かず、検証済みの集計値と実施記録だけを掲載する。',
  countingRule: '実人数と延べ参加回数を分け、集計定義を明示する。',
  publicationRule: '根拠資料・対象期間・集計定義・検証日が揃った数値だけを公開する。',
  currentStatus: '立命館学生側の共修参加実績は、検証可能な集計基盤を整備してから公開する。',
} as const;
