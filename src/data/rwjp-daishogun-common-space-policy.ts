export const rwjpDaishogunCommonSpacePolicy = {
  id: 'rwjp.accommodation.common-spaces',
  appliesTo: ['RWJP', 'RWJP Express'] as const,
  certainty: 'Confirmed' as const,
  verifiedAt: '2026-08-14',
  source: 'Programme owner working confirmation',
  rules: {
    commonLoungeAvailable: true,
    commonSpaceAvailable: true,
    mealsAllowedInCommonAreas: true,
    useSubjectToDormRules: true,
  },
  website: {
    title: '共有ラウンジ・共有スペース',
    summary: '大将軍寮には共有ラウンジや共有スペースがあり、食事、休憩、交流などに利用できます。',
    detail: '大将軍寮には、参加者が利用できる共有ラウンジおよび共有スペースがあります。共用キッチンで調理した食事を共有スペース等で食べることができます。利用時は、他の参加者への配慮、清掃、騒音などの寮内ルールを守ってください。具体的な利用時間や詳細な利用方法は、入寮時の案内および寮スタッフの指示に従ってください。',
  },
  faq: [
    {
      question: '大将軍寮に共有スペースはありますか？',
      answer: 'はい。共有ラウンジや共有スペースがあります。食事、休憩、交流などに利用できます。',
    },
  ],
  translationNotes: {
    en: 'Use “common lounge” or “shared common area.” Do not imply a hotel-style staffed lounge. Usage is subject to dormitory rules and any posted hours.',
    ko: '호텔식 라운지로 오해되지 않도록 공용 라운지 또는 공용 공간으로 번역한다. 이용은 기숙사 규칙과 안내된 이용시간을 따른다.',
  },
} as const;
