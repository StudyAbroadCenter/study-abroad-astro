export const rwjpDaishogunAmenitiesPolicy = {
  id: 'rwjp.accommodation.amenities',
  appliesTo: ['RWJP', 'RWJP Express'] as const,
  certainty: 'Confirmed' as const,
  verifiedAt: '2026-08-14',
  source: 'Programme owner working confirmation',
  provided: [
    'toilet paper',
  ],
  participantMustProvide: [
    'tissues',
    'laundry detergent / cleaning detergent as needed',
    'shampoo',
    'soap and other personal toiletries',
  ],
  website: {
    title: '生活用品・アメニティ',
    summary: 'トイレットペーパーは備え付けがあります。ティッシュ、洗剤、シャンプー等の日用品・洗面用品は各自で用意してください。',
    detail: '大将軍寮にはトイレットペーパーが備え付けられています。一方、ティッシュ、洗剤、シャンプー、石けん、歯磨き用品、タオルなどの個人用の日用品・洗面用品は原則として各自で購入または持参してください。ホテルのようなアメニティ一式の提供はありません。',
  },
  translationNotes: {
    en: 'Make clear that toilet paper is provided, but participants should not expect hotel-style toiletries or amenities. Use plain practical wording.',
    ko: '화장지는 비치되어 있지만 호텔식 어메니티가 제공되는 것은 아님을 분명히 한다. 티슈, 세제, 샴푸 등은 참가자가 직접 준비한다.',
  },
} as const;
