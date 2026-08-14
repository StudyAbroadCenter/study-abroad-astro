export const rwjpTransportIcPolicy = {
  id: 'rwjp.operations.transport-ic-card',
  appliesTo: ['RWJP', 'RWJP Express'] as const,
  certainty: 'Confirmed' as const,
  verifiedAt: '2026-08-14',
  source: 'Programme owner working confirmation',
  website: {
    title: '交通系ICカード',
    summary: 'ICOCAやSuicaなどの交通系ICカードの利用を推奨します。対応しているスマートフォンでモバイル版を利用すると便利です。',
    detail: '京都市内や周辺地域では、バス、地下鉄、JRなどの移動で交通系ICカードが便利です。ICOCAやSuicaなどの利用を推奨します。対応しているスマートフォンを使用している場合は、モバイル版を設定しておくと便利です。ただし、すべての交通機関や店舗で必ず利用できるわけではないため、日本円の現金もあわせて準備してください。',
  },
  faq: [{ question: 'ICOCAやSuicaは持っていた方がよいですか？', answer: 'はい。京都での移動に便利なので利用を推奨します。対応スマートフォンならモバイル版も便利です。現金しか使えない場面もあるため、日本円も用意してください。' }],
  translationNotes: {
    en: 'Use “IC transit card” or “transportation IC card,” with examples such as ICOCA and Suica. Do not imply universal acceptance. Mobile versions depend on device and service compatibility.',
    ko: 'ICOCA, Suica 등의 교통계 IC카드 이용을 권장한다고 표현한다. 모든 교통수단과 점포에서 반드시 사용할 수 있다는 의미로 번역하지 않는다. 모바일 이용 가능 여부는 기기와 서비스 호환성에 따라 다름을 전제로 한다.',
  },
} as const;
