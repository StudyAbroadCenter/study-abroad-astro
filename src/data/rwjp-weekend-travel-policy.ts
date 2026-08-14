export interface RwjpWeekendTravelPolicy {
  id: string;
  domesticTravelAllowed: true;
  advanceNoticeRequiredForDomesticTravel: false;
  internationalTravelRecommended: false;
  internationalTravelProhibited: false;
  participantResponsible: true;
  programmeAttendanceMustNotBeAffected: true;
  shortAnswerJa: string;
  detailJa: string;
  audiences: Array<'website' | 'manual' | 'faq'>;
  certainty: 'Confirmed';
  source: string;
  verifiedAt: string;
}

const ownerConfirmation = 'Programme owner working confirmation for 2027 RWJP';

export const rwjpWeekendTravelPolicy: RwjpWeekendTravelPolicy = {
  id: 'rwjp.operations.weekend-private-travel',
  domesticTravelAllowed: true,
  advanceNoticeRequiredForDomesticTravel: false,
  internationalTravelRecommended: false,
  internationalTravelProhibited: false,
  participantResponsible: true,
  programmeAttendanceMustNotBeAffected: true,
  shortAnswerJa: '土日の休日は、参加者自身の責任で国内旅行などの自由行動ができます。事前の報告は不要です。国外旅行は禁止しませんが、推奨しません。',
  detailJa: '土曜日・日曜日などプログラム活動のない休日は、参加者自身の責任で京都市外を含む国内旅行や宿泊を伴う個人旅行を行うことができます。事務局への事前報告は不要です。韓国などへの国外旅行については一律に禁止しませんが、出入国手続、ビザ・在留条件、交通障害、体調、その他の予期しない事情によってプログラム参加へ影響する可能性があるため、推奨しません。休日中の個人旅行は参加者本人の責任で行い、次の日本語講座、日本文化体験、その他の予定された活動に遅刻・欠席することがないよう、十分な余裕を持って行動してください。個人旅行に起因する費用や損失について、プログラムが補償するものではありません。',
  audiences: ['website', 'manual', 'faq'],
  certainty: 'Confirmed',
  source: ownerConfirmation,
  verifiedAt: '2026-08-14',
};
