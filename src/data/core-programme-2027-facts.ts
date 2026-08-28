import { getCurrentOfferingFact } from './current-offerings';

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

const express = getCurrentOfferingFact('rwjp-express');
const rdspOffering = getCurrentOfferingFact('rdsp');
const rbmpOffering = getCurrentOfferingFact('rbmp');

if (!express || !rdspOffering || !rbmpOffering) {
  throw new Error('Current offering facts are incomplete for core programme pages.');
}

export const coreProgramme2027Facts: Record<CoreProgrammeFact['id'], CoreProgrammeFact> = {
  'rwjp-express': {
    id: 'rwjp-express',
    offering: express.offering,
    status: 'Confirmed',
    campus: express.campusJa,
    ...(express.programmeDates ? { dates: express.programmeDates } : {}),
    ...(express.checkIn ? { checkIn: express.checkIn } : {}),
    ...(express.checkOut ? { checkOut: express.checkOut } : {}),
    ...(express.programmeFeeJPY !== null ? { fee: express.programmeFeeJPY } : {}),
    ...(express.minimumParticipants !== null ? { minimumParticipants: express.minimumParticipants } : {}),
    audience: '大学・大学院に在籍する学生。日本語初学者も応募可能だが、開始前までにひらがな・カタカナを読めること。',
    academic: ['日本語講座 1,350分（22.5時間）', '文化学習 360分'],
    accommodation: '大将軍寮を利用可能。短期プログラム用居室12室、各室最大4名、原則複数人利用。部屋割りは大学が決定。',
    notes: [
      express.minimumParticipants !== null ? `最少催行${express.minimumParticipants}名` : '最少催行人数は確認後に掲載',
      express.paymentMethod ? `支払いは${express.paymentMethod}` : '支払方法は確認後に掲載',
      express.refundDeductionJPY !== null
        ? `支払後の返金では${express.refundDeductionJPY.toLocaleString('ja-JP')}円に加え、返金不能な手配済み費用を控除`
        : '返金条件は確認後に掲載',
    ],
    source: express.source,
    verifiedAt: express.verifiedAt ?? '未確認',
  },
  rdsp: {
    id: 'rdsp',
    offering: rdspOffering.offering,
    status: 'Working plan',
    campus: rdspOffering.campusJa,
    ...(rdspOffering.programmeDates ? { dates: rdspOffering.programmeDates } : {}),
    ...(rdspOffering.checkIn ? { checkIn: rdspOffering.checkIn } : {}),
    ...(rdspOffering.checkOut ? { checkOut: rdspOffering.checkOut } : {}),
    ...(rdspOffering.programmeFeeJPY !== null ? { fee: rdspOffering.programmeFeeJPY } : {}),
    ...(rdspOffering.minimumParticipants !== null ? { minimumParticipants: rdspOffering.minimumParticipants } : {}),
    audience: '海外大学等の大学生・大学院生を中心とする短期受入。年度別募集条件は確定情報のみ公開する。',
    academic: ['AI', 'Data Science', 'Robotics', '立命館大学教員による講義', '学生イベント', 'Buddy活動', '講義570分（95分×6）', 'Student Events 190分（95分×2）'],
    accommodation: 'OICセミナーハウスは引率者不在での一般参加者利用を前提としない。一般参加者の宿泊は外部宿舎を前提とする。',
    notes: ['Faculty/TopicsはTentativeとして扱う', 'Microsoft Base Ritsumeikanでの協働学習要素を含む'],
    source: rdspOffering.source,
    verifiedAt: rdspOffering.verifiedAt ?? '未確認',
  },
  rbmp: {
    id: 'rbmp',
    offering: rbmpOffering.offering,
    status: 'Working plan',
    campus: rbmpOffering.campusJa,
    ...(rbmpOffering.programmeDates ? { dates: rbmpOffering.programmeDates } : {}),
    ...(rbmpOffering.checkIn ? { checkIn: rbmpOffering.checkIn } : {}),
    ...(rbmpOffering.checkOut ? { checkOut: rbmpOffering.checkOut } : {}),
    ...(rbmpOffering.programmeFeeJPY !== null ? { fee: rbmpOffering.programmeFeeJPY } : {}),
    ...(rbmpOffering.minimumParticipants !== null ? { minimumParticipants: rbmpOffering.minimumParticipants } : {}),
    audience: 'SWU合同参加、一般留学生、立命館附属校高校生。海外からの一般参加者は大学生・大学院生のみ。附属校高校生は自宅通学を想定。',
    academic: ['ビジネス・マネジメント講義 8コマ', '茶道', 'ホッケー', 'Microsoft Baseでの共修', 'カップヌードルミュージアム訪問'],
    accommodation: 'OICセミナーハウスはSWU等の引率者帯同団体向けに別途案内する。一般参加者の宿泊先としては表示せず、一般参加者は外部宿舎を自己手配する。',
    notes: [
      rbmpOffering.minimumParticipants !== null ? `最少催行${rbmpOffering.minimumParticipants}名` : '最少催行人数は確認後に掲載',
      '一般向け案内とSWU等団体向け宿泊案内を分離する',
      '参加上限は当面40名を目安として今後検討',
    ],
    source: rbmpOffering.source,
    verifiedAt: rbmpOffering.verifiedAt ?? '未確認',
  },
};

export const getCoreProgramme2027Fact = (id: string) =>
  coreProgramme2027Facts[id as CoreProgrammeFact['id']];
