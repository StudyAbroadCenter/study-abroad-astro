export const rwjpDaishogunCleaningWastePolicy = {
  id: 'rwjp.accommodation.cleaning-and-waste',
  appliesTo: ['RWJP', 'RWJP Express'] as const,
  certainty: 'Confirmed' as const,
  verifiedAt: '2026-08-14',
  source: 'Programme owner working confirmation',
  rules: {
    roomCleaningByParticipant: true,
    hotelStyleCleaningService: false,
    wasteSortingRequired: true,
    wasteRuleAuthority: 'Kyoto City',
  },
  website: {
    title: '清掃とごみの分別',
    summary:
      '大将軍寮の居室は、参加者自身で清掃してください。ホテルのような定期的な客室清掃サービスはありません。ごみは京都市の定めるルールに従って分別してください。',
    detail:
      '大将軍寮では、参加者が自分の居室を日常的に清潔に保つ責任があります。ホテルのようにスタッフが定期的に居室を清掃するサービスはありません。ごみは京都市の分別ルールに従って分類し、寮内で案内される方法・場所・時間に従って処理してください。具体的な分別区分や出し方は、入寮時の案内を確認してください。',
  },
  faq: [
    {
      question: '大将軍寮では部屋の清掃サービスがありますか？',
      answer: 'ありません。居室の清掃は参加者自身で行ってください。',
    },
    {
      question: 'ごみはどのように捨てますか？',
      answer: '京都市の定める分別ルールに従ってください。具体的な出し方は入寮時の案内を確認してください。',
    },
  ],
  translationNotes: {
    en: 'Do not imply housekeeping or hotel-style room cleaning. Participants are responsible for keeping their own rooms clean. Waste must be separated in accordance with Kyoto City rules.',
    ko: '호텔식 객실 청소 서비스가 있는 것처럼 번역하지 않는다. 참가자가 자신의 방을 직접 청소하고, 쓰레기는 교토시 분리배출 규정에 따라 처리해야 한다.',
  },
} as const;
