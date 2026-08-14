export const rwjpDaishogunRoomAssignmentPolicy = {
  id: 'rwjp.accommodation.room-assignment',
  appliesTo: ['RWJP', 'RWJP Express'] as const,
  certainty: 'Confirmed' as const,
  verifiedAt: '2026-08-14',
  source: 'Programme owner working confirmation',
  rules: {
    assignedByProgrammeOffice: true,
    roomChoiceAllowed: false,
    roommateChoiceAllowed: false,
    sameGenderRooms: true,
    maxOccupancyPerRoom: 4,
  },
  website: {
    title: '部屋割りについて',
    summary:
      '大将軍寮の部屋割りは大学・事務局側で決定します。参加者が部屋や同室者を指定・選択することはできません。',
    detail:
      '大将軍寮は原則として同性の参加者で部屋を分け、1室最大4名で使用します。部屋割りは大学・事務局側で決定し、参加者から特定の部屋、ベッド、同室者を指定または選択することはできません。部屋割りに関する個別の希望は、原則として受け付けません。',
  },
  faq: [
    {
      question: '大将軍寮の部屋やルームメイトを選べますか？',
      answer: '選べません。部屋割りは大学・事務局側で決定します。原則として同性の参加者で分け、1室最大4名です。',
    },
  ],
  translationNotes: {
    en: 'Use clear wording such as “Room assignments are made by the programme office. Participants cannot choose their room or roommates.” Do not imply that requests are normally accepted.',
    ko: '“객실 배정은 대학·사무국에서 결정하며 참가자는 객실이나 룸메이트를 선택할 수 없다”는 점을 명확히 한다. 일반적으로 희망을 접수하는 것처럼 번역하지 않는다.',
  },
} as const;
