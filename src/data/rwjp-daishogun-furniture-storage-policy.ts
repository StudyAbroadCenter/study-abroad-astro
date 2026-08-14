export const rwjpDaishogunFurnitureStoragePolicy = {
  id: 'rwjp.accommodation.furniture-and-storage',
  appliesTo: ['RWJP', 'RWJP Express'] as const,
  certainty: 'Confirmed' as const,
  verifiedAt: '2026-08-14',
  source: 'Programme owner working confirmation',
  rules: {
    deskAvailable: true,
    chairAvailable: true,
    inRoomStorage: 'limited',
    suitcaseStorageRoomAvailable: true,
  },
  website: {
    title: '机・椅子・収納スペース',
    summary: '居室には机と椅子があります。室内の収納スペースは限られていますが、スーツケースを保管するための保管室があります。',
    detail: '大将軍寮の居室には、学習等に利用できる机と椅子があります。一方、居室内の収納スペースは限られているため、荷物は必要以上に多く持ち込まないことをおすすめします。スーツケースについては、保管用のスペースがあります。利用方法については、入寮時の案内や寮スタッフの指示に従ってください。',
  },
  faq: [
    { question: '部屋に机と椅子はありますか？', answer: 'はい。居室には机と椅子があります。' },
    { question: 'スーツケースを置く場所はありますか？', answer: '居室内の収納は限られていますが、スーツケースを保管するための保管室があります。利用方法は入寮時の案内に従ってください。' },
  ],
  translationNotes: {
    en: 'Do not imply that rooms have generous wardrobe or closet space. State that in-room storage is limited and that a separate storage area is available for suitcases.',
    ko: '객실 내 수납공간이 넉넉하다는 인상을 주지 않는다. 객실 내 수납은 제한적이며 여행가방을 보관할 수 있는 별도의 보관 공간이 있음을 명확히 한다.',
  },
} as const;
