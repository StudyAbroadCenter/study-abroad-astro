export const rwjpWheeledTransportPolicy = {
  id: 'rwjp.operations.wheeled-transport',
  appliesTo: ['RWJP', 'RWJP Express'] as const,
  certainty: 'Confirmed' as const,
  verifiedAt: '2026-08-14',
  source: 'Programme owner working confirmation; participant pledge requirement',
  rules: {
    purpose: 'participant safety',
    appliesDuringProgrammePeriod: true,
    appliesOnWeekendsAndDaysOff: true,
    participantOperationOrUseProhibited: true,
    purchaseProhibited: true,
    passengerRideProhibited: false,
    participantPledgeRequired: true,
    examples: ['bicycle', 'rental bicycle', 'electric kick scooter', 'motorcycle', 'car', 'skateboard', 'roller skates'],
  },
  website: {
    title: '車輪付き移動手段の利用禁止',
    summary: '安全上の理由から、RWJP期間中は自転車、レンタサイクル、電動キックボード、バイク、自動車、スケートボード、ローラースケート等を参加者自身が利用・運転・購入することは禁止されています。休日も同じです。タクシーや、家族・友人が運転する車への同乗まで禁止するものではありません。',
    detail: '参加者の安全確保のため、RWJP期間中は自転車・レンタサイクル・電動キックボード・バイク・自動車・スケートボード・ローラースケートなど、車輪の付いた個人的な移動手段を参加者自身が利用・運転しないでください。このルールは授業日だけでなく、土日その他の休日・自由時間にも適用されます。また、プログラム期間中にこれらを利用する目的で購入することも認めません。参加者には、この安全ルールを守ることについて宣誓書への同意を求めます。一方、タクシーへの乗車や、家族・友人など他者が運転する車に同乗することまで一律に禁止するものではありません。移動には徒歩、公共交通機関、タクシー等を利用してください。',
  },
  translationNotes: {
    en: 'This is a programme safety rule, not merely a campus rule. Make clear that participants themselves may not operate, use, or purchase the listed wheeled transport during the programme, including weekends and free time. Do not translate this as a blanket prohibition on being a passenger in a taxi or a car driven by someone else.',
    ko: '캠퍼스 내 규칙만이 아니라 프로그램 전체 기간에 적용되는 안전 규칙이다. 참가자 본인이 해당 이동수단을 이용·운전·구매하는 것은 금지되지만, 택시나 다른 사람이 운전하는 자동차에 승객으로 탑승하는 것까지 일률적으로 금지하는 규정으로 번역하지 않는다.',
  },
} as const;
