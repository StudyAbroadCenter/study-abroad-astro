export const rwjpDeviceRecommendationPolicy = {
  id: 'rwjp.academic.device-recommendation',
  appliesTo: ['RWJP', 'RWJP Express'] as const,
  certainty: 'Confirmed' as const,
  verifiedAt: '2026-08-14',
  source: 'Programme owner working confirmation',
  rules: {
    laptopRequired: false,
    laptopStronglyRecommended: true,
    reason: 'Japanese-language classes include presentation opportunities and the dormitory does not provide shared PCs or printers.',
  },
  website: {
    title: 'ノートPCの持参',
    summary: 'ノートPCは必須ではありませんが、強く推奨します。日本語講座ではプレゼンテーションの機会があり、大将軍寮には共用PCやプリンターはありません。',
    detail: 'RWJPではノートPCの持参を必須とはしていません。ただし、日本語講座ではプレゼンテーションなどPCがあると便利な活動を行うことがあります。また、大将軍寮には参加者が自由に使える共用PCやプリンターはありません。そのため、可能であれば各自のノートPCを持参することを強くおすすめします。',
  },
  faq: [
    {
      question: 'ノートPCは必ず持って行く必要がありますか？',
      answer: '必須ではありませんが、強く推奨します。日本語講座でプレゼンテーションの機会があり、大将軍寮には共用PC・プリンターがありません。',
    },
  ],
  translationNotes: {
    en: 'Use “strongly recommended,” not “required.” Explain the practical reason: presentation work and no shared PC/printer in the dormitory.',
    ko: '필수로 표현하지 말고 “강력 권장”으로 안내한다. 일본어 수업의 프레젠테이션과 기숙사 내 공용 PC·프린터가 없다는 실질적인 이유를 함께 설명한다.',
  },
} as const;
