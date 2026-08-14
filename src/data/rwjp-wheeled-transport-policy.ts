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
    useProhibited: true,
    purchaseProhibited: true,
    participantPledgeRequired: true,
    examples: ['bicycle', 'rental bicycle', 'electric kick scooter', 'motorcycle', 'car', 'skateboard', 'roller skates'],
  },
  website: {
    title: '車輪付き移動手段の利用禁止',
    summary: '安全上の理由から、RWJP期間中は自転車、レンタサイクル、電動キックボード、バイク、自動車、スケートボード、ローラースケート等の車輪付き移動手段を利用・購入することは禁止されています。休日も同じです。',
    detail: '参加者の安全確保のため、RWJP期間中は自転車・レンタサイクル・電動キックボード・バイク・自動車・スケートボード・ローラースケートなど、車輪の付いた個人的な移動手段を利用しないでください。このルールは授業日だけでなく、土日その他の休日・自由時間にも適用されます。また、プログラム期間中にこれらを利用する目的で購入することも認めません。参加者には、この安全ルールを守ることについて宣誓書への同意を求めます。移動には徒歩、公共交通機関、タクシー等を利用してください。',
  },
  translationNotes: {
    en: 'This is a programme safety rule, not merely a campus rule. Make clear that it applies during free time and weekends as well as class days, and that both use and purchase are prohibited. Do not narrow the rule to bicycles only.',
    ko: '캠퍼스 내 규칙만이 아니라 프로그램 전체 기간에 적용되는 안전 규칙이다. 수업일뿐 아니라 주말·휴일·자유시간에도 적용되며, 이용뿐 아니라 구매도 금지됨을 명확히 한다. 자전거만 금지된 것으로 축소 번역하지 않는다.',
  },
} as const;
