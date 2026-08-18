export type CoreProgrammeFact = {
  id: 'rwjp-express' | 'rdsp' | 'rbmp';
  offering: string;
  status: 'Confirmed' | 'Working plan';
  campus: string;
  dates?: { start: string; end: string };
  checkIn?: string;
  checkOut?: string;
  fee?: number;
  minimumParticipants?: number;
  audience: string;
  academic: string[];
  accommodation: string;
  notes: string[];
  source: string;
  verifiedAt: string;
};

export const coreProgramme2027Facts: Record<CoreProgrammeFact['id'], CoreProgrammeFact> = {
  'rwjp-express': {
    id: 'rwjp-express',
    offering: '2027 RWJP Express',
    status: 'Confirmed',
    campus: '衣笠キャンパス（京都）',
    dates: { start: '2027-02-16', end: '2027-02-26' },
    checkIn: '2027-02-15',
    checkOut: '2027-02-27',
    minimumParticipants: 15,
    audience: '大学・大学院に在籍する学生。日本語初学者も応募可能だが、開始前までにひらがな・カタカナを読めること。',
    academic: ['日本語講座 1,350分（22.5時間）', '文化学習 360分'],
    accommodation: '大将軍寮を利用可能。短期プログラム用居室12室、各室最大4名、原則複数人利用。部屋割りは大学が決定。',
    notes: ['最少催行15名', '支払いはConvera', '支払後の返金では27,000円に加え、返金不能な手配済み費用を控除'],
    source: 'Programme owner working confirmation for 2027 RWJP Express',
    verifiedAt: '2026-08-18',
  },
  rdsp: {
    id: 'rdsp',
    offering: 'RDSP',
    status: 'Working plan',
    campus: '大阪いばらきキャンパス（OIC）',
    audience: '海外大学等の大学生・大学院生を中心とする短期受入。年度別募集条件は確定情報のみ公開する。',
    academic: ['AI', 'Data Science', 'Robotics', '立命館大学教員による講義', '学生イベント', 'Buddy活動', '講義570分（95分×6）', 'Student Events 190分（95分×2）'],
    accommodation: 'OICセミナーハウスは引率者不在での一般参加者利用を前提としない。一般参加者の宿泊は外部宿舎を前提とする。',
    notes: ['Faculty/TopicsはTentativeとして扱う', 'Microsoft Base Ritsumeikanでの協働学習要素を含む'],
    source: '2026RDSPW_Outline and programme owner working confirmation',
    verifiedAt: '2026-08-18',
  },
  rbmp: {
    id: 'rbmp',
    offering: '2027 RBMP',
    status: 'Working plan',
    campus: '大阪いばらきキャンパス（OIC）',
    dates: { start: '2027-02-12', end: '2027-02-24' },
    checkIn: '2027-02-10',
    checkOut: '2027-02-25',
    fee: 200000,
    minimumParticipants: 15,
    audience: 'SWU合同参加、一般留学生、立命館附属校高校生。海外からの一般参加者は大学生・大学院生のみ。附属校高校生は自宅通学を想定。',
    academic: ['ビジネス・マネジメント講義 8コマ', '茶道', 'ホッケー', 'Microsoft Baseでの共修', 'カップヌードルミュージアム訪問'],
    accommodation: 'OICセミナーハウスはSWU等の引率者帯同団体向けに別途案内する。一般参加者の宿泊先としては表示せず、一般参加者は外部宿舎を自己手配する。',
    notes: ['最少催行15名', '一般向け案内とSWU等団体向け宿泊案内を分離する', '参加上限は当面40名を目安として今後検討'],
    source: '2027 RBMP programme owner working confirmation',
    verifiedAt: '2026-08-18',
  },
};

export const getCoreProgramme2027Fact = (id: string) =>
  coreProgramme2027Facts[id as CoreProgrammeFact['id']];
