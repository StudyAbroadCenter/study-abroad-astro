export const rwjpSmartphonePolicy = {
  id: 'rwjp.operations.smartphone',
  appliesTo: ['RWJP', 'RWJP Express'] as const,
  certainty: 'Confirmed' as const,
  verifiedAt: '2026-08-14',
  source: 'Programme owner working confirmation',
  requirementLevel: 'strongly-recommended',
  website: {
    title: 'スマートフォンの持参',
    summary: 'スマートフォンは制度上の必須条件ではありませんが、実務上ほぼ必携です。インターネット接続可能なスマートフォンの持参を強く推奨します。',
    detail: 'RWJPでは、保険会社の専用アプリ、緊急時の連絡、メール確認、地図・交通情報の確認などでスマートフォンを利用する機会が多くあります。制度上は参加資格の必須条件ではありませんが、プログラムを安全かつ円滑に参加するため、インターネット接続可能なスマートフォンを持参することを強く推奨します。日本滞在中に通信できるSIM・eSIM・ローミング等の方法も各自で準備してください。',
  },
  faq: [
    {
      question: 'スマートフォンは必須ですか？',
      answer: '制度上の必須条件ではありませんが、保険アプリ、緊急連絡、メール、地図・交通確認などで必要になるため、インターネット接続可能なスマートフォンの持参を強く推奨します。',
    },
  ],
  translationNotes: {
    en: 'Do not call the smartphone a formal eligibility requirement. Explain that it is not technically mandatory, but is strongly recommended and practically essential for insurance, emergency contact, email, maps, and transport information.',
    ko: '스마트폰을 공식 참가 자격의 필수 조건으로 표현하지 않는다. 제도상 필수는 아니지만 보험 앱, 긴급 연락, 이메일, 지도 및 교통 확인을 위해 사실상 필수에 가깝게 강력 권장된다고 설명한다.',
  },
} as const;
