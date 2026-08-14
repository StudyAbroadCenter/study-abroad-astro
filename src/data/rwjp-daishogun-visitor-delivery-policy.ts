export const rwjpDaishogunVisitorDeliveryPolicy = {
  id: 'rwjp.accommodation.visitors-and-deliveries',
  appliesTo: ['RWJP', 'RWJP Express'] as const,
  certainty: 'Confirmed' as const,
  verifiedAt: '2026-08-14',
  source: 'Programme owner working confirmation',
  rules: {
    outsideVisitorsAllowed: false,
    daytimeVisitorsAllowed: false,
    overnightGuestsAllowed: false,
    staffCanReceiveParcels: false,
    deliveriesToDormitorySupported: false,
  },
  website: {
    title: '訪問者・宿泊者・荷物の受け取り',
    summary:
      '大将軍寮では、家族や友人など外部の方の訪問・入館・宿泊は認められていません。また、寮スタッフは宅配便やオンラインショッピング等の荷物を代理で受け取ることができません。',
    detail:
      '大将軍寮はプログラム参加者のための宿泊施設です。家族、友人、知人など参加者以外の方は、昼間を含めて寮内へ招くことはできず、宿泊も認められません。また、管理人・寮スタッフによる宅配便、郵便物、オンラインショッピング等の荷物の代理受領は行いません。Amazon等の配送先として大将軍寮を指定し、管理人に受け取りを依頼することはできません。必要な買い物は、参加者自身が直接購入するなど、寮スタッフによる受け取りを必要としない方法を利用してください。',
  },
  faq: [
    {
      question: '家族や友人を大将軍寮に呼ぶことはできますか？',
      answer: 'できません。昼間の訪問を含め、参加者以外の方の入館・訪問・宿泊は認められていません。',
    },
    {
      question: 'Amazonなどの荷物を大将軍寮で受け取れますか？',
      answer: '寮スタッフや管理人は荷物を代理で受け取ることができません。大将軍寮を配送先として、管理人による受け取りを前提とした注文はしないでください。',
    },
  ],
  translationNotes: {
    en: 'Do not translate this as merely “no overnight guests.” Daytime visitors and entry by outside visitors are also prohibited. Clearly state that dormitory staff cannot accept parcels on a participant’s behalf.',
    ko: '단순히 숙박 손님만 금지된다는 의미로 번역하지 않는다. 주간 방문을 포함한 외부인의 방문·출입도 허용되지 않으며, 기숙사 직원은 참가자를 대신하여 택배를 수령할 수 없음을 명확히 한다.',
  },
} as const;
