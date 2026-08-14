export const rwjpDaishogunKitchenPolicy = {
  id: 'rwjp.accommodation.kitchen-equipment',
  appliesTo: ['RWJP', 'RWJP Express'] as const,
  certainty: 'Confirmed' as const,
  verifiedAt: '2026-08-14',
  source: 'Programme owner working confirmation',
  facilities: {
    sharedKitchen: true,
    microwave: true,
    refrigerator: true,
    cookware: ['鍋', 'フライパン', '包丁'],
    tableware: ['皿', 'カトラリー'],
    condimentsProvided: false,
    cookingOilProvided: false,
  },
  website: {
    title: '共用キッチンと調理器具',
    summary:
      '大将軍寮には共用キッチン、電子レンジ、冷蔵庫があり、鍋、フライパン、包丁、皿、カトラリーも利用できます。調味料や食用油は備え付けていません。',
    detail:
      '食事の提供はありません。参加者は共用キッチンを利用して自炊できます。共用設備として電子レンジ、冷蔵庫があり、鍋、フライパン、包丁、皿、カトラリーも用意されています。一方、塩、こしょう、しょうゆ等の調味料や食用油は備え付けていないため、必要な食材・調味料等は参加者自身で用意してください。使用後は次の利用者のために器具・食器・共用スペースを清潔な状態に戻してください。',
  },
  faq: [
    {
      question: '大将軍寮で自炊できますか？',
      answer: 'はい。共用キッチン、電子レンジ、冷蔵庫、鍋、フライパン、包丁、皿、カトラリーを利用できます。食事の提供はありません。',
    },
    {
      question: '調味料や油はありますか？',
      answer: 'ありません。調味料、食用油、食材などは参加者自身で用意してください。',
    },
  ],
  translationNotes: {
    en: 'State clearly that cookware and tableware are provided, but condiments and cooking oil are not. Do not imply that meals are included.',
    ko: '조리도구와 식기는 제공되지만 조미료와 식용유는 제공되지 않음을 명확히 한다. 식사가 제공되는 것으로 오해되지 않게 한다.',
  },
} as const;
