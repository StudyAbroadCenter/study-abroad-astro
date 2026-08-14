export const rwjpDaishogunSharedMediaPolicy = {
  id: 'rwjp.accommodation.shared-media-equipment',
  appliesTo: ['RWJP', 'RWJP Express'] as const,
  certainty: 'Confirmed' as const,
  verifiedAt: '2026-08-14',
  source: 'Programme owner working confirmation',
  rules: {
    televisionAvailable: true,
    sharedComputerAvailable: false,
    printerAvailable: false,
  },
  website: {
    title: '共有スペースの設備',
    summary: '共有スペースにはテレビがありますが、共用PCやプリンターはありません。必要なPCは各自で用意してください。',
    detail: '大将軍寮の共有スペースにはテレビがあります。一方、参加者が自由に利用できる共用PCやプリンターは設置されていません。授業や課題等でPCが必要な場合は、参加者自身でノートPC等を準備してください。印刷が必要な場合も、寮内にプリンターがあることを前提にしないでください。',
  },
  faq: [
    { question: '共有スペースにテレビはありますか？', answer: 'はい。共有スペースにはテレビがあります。' },
    { question: '寮に共用PCやプリンターはありますか？', answer: 'ありません。必要なPCは各自で準備し、印刷も寮外の設備等を利用してください。' },
  ],
  translationNotes: {
    en: 'Do not imply that the dormitory provides computer lab or printing services. State clearly that a TV is available in shared space, but computers and printers are not provided.',
    ko: '기숙사에 컴퓨터실이나 인쇄 서비스가 있다는 인상을 주지 않는다. 공용 공간에 TV는 있으나 공용 PC와 프린터는 제공되지 않음을 명확히 한다.',
  },
} as const;
