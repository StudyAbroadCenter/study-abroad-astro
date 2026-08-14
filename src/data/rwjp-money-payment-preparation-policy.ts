export const rwjpMoneyPaymentPreparationPolicy = {
  id: 'rwjp.operations.money-and-payment-preparation',
  appliesTo: ['RWJP', 'RWJP Express'] as const,
  certainty: 'Confirmed' as const,
  verifiedAt: '2026-08-14',
  source: 'Programme owner working confirmation',
  rules: {
    japaneseCashStronglyRecommended: true,
    creditCardRequiredInPractice: true,
    cashOnlySituationsExist: true,
    overseasIssuedCardsMayWorkAtSomeATMs: true,
  },
  website: {
    title: '日本滞在中の現金・クレジットカード',
    summary: '日本円の現金とクレジットカードの両方を準備してください。日本では現金しか使えない場面もあるため、常にある程度の日本円を持っておくことをおすすめします。',
    detail: '日本滞在中は、日本円の現金とクレジットカードの両方を用意してください。店舗や交通機関等によっては現金のみ利用可能な場合があります。海外発行の銀行カード・デビットカード等は、日本国内の一部ATMで日本円を引き出せる場合があります。例えばセブン銀行ATM等で利用できることがありますが、利用可否、手数料、限度額等はカード発行会社やカードの種類により異なります。渡日前に、自分のカードが日本で利用できるか、海外ATM利用が有効になっているかを確認してください。',
  },
  faq: [
    { question: '日本では現金が必要ですか？', answer: 'はい。現金しか使えない場面もあるため、常にある程度の日本円を持っておくことをおすすめします。' },
    { question: 'クレジットカードも必要ですか？', answer: 'はい。日本円の現金とあわせて、利用可能なクレジットカードを準備してください。' },
    { question: '海外発行カードで日本円を引き出せますか？', answer: 'カードによっては、日本国内の一部ATMで日本円を引き出せます。利用可否や手数料は発行会社によって異なるため、渡日前に確認してください。' },
  ],
  translationNotes: {
    en: 'Use practical language: students should carry both Japanese yen cash and a usable credit card. Do not guarantee that any particular overseas-issued card will work at a specific ATM; say that some cards may work and students should confirm with their card issuer before travel.',
    ko: '일본 엔 현금과 사용 가능한 신용카드를 모두 준비하도록 안내한다. 특정 해외발행 카드가 특정 ATM에서 반드시 사용 가능하다고 보장하지 말고, 카드사에 사전 확인하도록 안내한다.',
  },
} as const;
