export const rwjpDaishogunPersonalItemsPolicy = {
  id: 'rwjp.accommodation.personal-items',
  appliesTo: ['RWJP', 'RWJP Express'] as const,
  certainty: 'Confirmed' as const,
  verifiedAt: '2026-08-14',
  source: 'Programme owner working confirmation',
  provided: ['toilet paper'],
  notProvided: [
    'tissues',
    'laundry detergent',
    'shampoo',
    'soap',
    'toothbrush/toothpaste',
    'towels',
    'iron',
    'hair dryer',
    'hangers',
  ],
  website: {
    title: '各自で用意する生活用品',
    summary:
      '大将軍寮ではトイレットペーパーは用意されていますが、ティッシュ、洗剤、シャンプー、タオル、アイロン、ドライヤー、ハンガーなどは備え付けられていません。必要なものは各自で持参または購入してください。',
    detail:
      '大将軍寮はホテルではないため、生活用品やアメニティは限定的です。トイレットペーパーは用意されていますが、ティッシュ、洗濯用洗剤、シャンプー、石けん、歯磨き用品、タオル、アイロン、ヘアドライヤー、ハンガーなどは備え付けられていません。必要なものは参加者自身で持参するか、日本で購入してください。',
  },
  faq: [
    {
      question: 'アイロン、ドライヤー、ハンガーはありますか？',
      answer: 'ありません。必要な場合は各自で持参してください。',
    },
  ],
  translationNotes: {
    en: 'Make clear that these items are not supplied by the dormitory. Use “bring your own or purchase them in Japan” rather than implying rental availability.',
    ko: '기숙사에서 제공하지 않는 물품임을 명확히 한다. 대여가 가능한 것처럼 표현하지 말고, 필요 시 직접 가져오거나 일본에서 구입하도록 안내한다.',
  },
} as const;
