export type RwjpDisciplinePolicyCertainty = 'Confirmed' | 'Provisional';

export interface RwjpDisciplinePolicy {
  id: string;
  mustFollowStaffInstructions: boolean;
  programmeRemovalPossible: boolean;
  programmeFeeRefundOnRemoval: false;
  homeUniversityMayBeNotified: boolean;
  taishogunImmediateEvictionPossible: boolean;
  taishogunRefundOnEviction: false;
  transcriptIssuedAfterRemoval: false;
  certificateIssuedAfterRemoval: false;
  seriousMisconductExamples: string[];
  shortAnswerJa: string;
  detailJa: string;
  audiences: Array<'website' | 'manual' | 'faq'>;
  certainty: RwjpDisciplinePolicyCertainty;
  source: string;
  verifiedAt: string;
}

const ownerConfirmation = 'Programme owner working confirmation for 2027 RWJP';

export const rwjpDisciplinePolicy: RwjpDisciplinePolicy = {
  id: 'rwjp.operations.serious-misconduct-and-removal',
  mustFollowStaffInstructions: true,
  programmeRemovalPossible: true,
  programmeFeeRefundOnRemoval: false,
  homeUniversityMayBeNotified: true,
  taishogunImmediateEvictionPossible: true,
  taishogunRefundOnEviction: false,
  transcriptIssuedAfterRemoval: false,
  certificateIssuedAfterRemoval: false,
  seriousMisconductExamples: [
    '違法薬物の所持・使用その他の法令違反',
    '暴力、脅迫、危険行為',
    'ハラスメントその他、他者の安全・尊厳を著しく害する行為',
    '立命館大学の教職員、プログラム事務局又は大将軍寮スタッフの正当な指示・指導に従わない行為',
    'その他、プログラム又は宿舎の安全・秩序を重大に損なう行為',
  ],
  shortAnswerJa: '重大な規律違反や、立命館大学の教職員・事務局等の正当な指示に従わない場合、プログラムの継続を認めず退出を求めることがあります。この場合、参加費等は返金せず、所属大学へ報告し、修了証書・成績表も発行しません。大将軍寮でも重大な違反があれば即時退去を求めることがあり、寮費は返金しません。',
  detailJa: 'RWJP参加者は、日本の法令、立命館大学の規則、プログラム上のルール、大将軍寮の規則を守り、立命館大学の教職員、プログラム事務局及び宿舎スタッフからの正当な指示・指導に従う必要があります。違法薬物、暴力、脅迫、危険行為、ハラスメント、重大な規則違反、又は正当な指示・指導に従わないなど、参加継続が適切でないと大学が判断した場合、RWJPへの参加継続を認めず、退出を求めることがあります。この場合、プログラム参加費その他の既払費用は返金しません。必要に応じて参加者の所属大学・派遣元大学へ状況を報告します。また、プログラムから退出となった参加者には、RWJPの修了証書及び成績表を発行しません。大将軍寮において重大な規律違反又は宿舎スタッフの正当な指示に従わない場合は、即時退去を求めることがあり、その場合も既払の宿泊費は返金しません。個別の措置は、行為の重大性、安全上の必要性、事実確認その他の事情を踏まえて大学が判断します。',
  audiences: ['website', 'manual', 'faq'],
  certainty: 'Confirmed',
  source: ownerConfirmation,
  verifiedAt: '2026-08-14',
};
