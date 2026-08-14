export const rwjpDaishogunRoomChangePolicy = {
  id: 'rwjp.accommodation.room-change',
  appliesTo: ['RWJP', 'RWJP Express'] as const,
  certainty: 'Confirmed' as const,
  verifiedAt: '2026-08-14',
  source: 'Programme owner working confirmation',
  rules: {
    participantInitiatedRoomSwapAllowed: false,
    participantInitiatedBedSwapAllowed: false,
    approvalRequiredForAnyChange: true,
    approvers: ['programme office', 'dormitory staff'] as const,
  },
  website: {
    title: '部屋・ベッドの変更',
    summary: '参加者同士で勝手に部屋やベッドを交換することはできません。変更が必要な場合は、事務局または寮スタッフの承認が必要です。',
    detail: '大将軍寮では、大学・事務局が決定した部屋割りとベッド割りに従ってください。参加者同士で合意していても、無断で部屋やベッドを交換することは認められません。健康上、安全上、その他やむを得ない事情により変更を希望する場合は、事前にRWJP事務局または寮スタッフへ相談し、承認を得てください。',
  },
  faq: {
    question: '友人と相談して部屋やベッドを交換してもよいですか？',
    answer: 'できません。参加者同士による無断の部屋替え・ベッド交換は禁止です。変更が必要な場合は、事務局または寮スタッフへ相談し、承認を得てください。',
  },
} as const;
