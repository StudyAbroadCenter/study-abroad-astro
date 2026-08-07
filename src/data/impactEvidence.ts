export type EvidenceMetric = {
  value: string;
  label: string;
  detail: string;
  source: string;
};

export type EvidenceStep = {
  id: 'reach' | 'learn' | 'connect' | 'impact' | 'improve';
  number: string;
  label: string;
  title: string;
  body: string;
  proof: string;
};

export const impactEvidence = {
  kicker: 'IMPACT & EVIDENCE',
  title: '楽しいだけじゃ、\nだめですか。',
  lead:
    '短期留学の魅力は、思い出だけではありません。誰が来て、何を学び、誰とつながり、何を持ち帰ったのか。実施報告と参加者アンケートをもとに、積み重ねを少しずつ可視化します。',
  evidenceNote:
    '掲載する数値は、明記した年度・プログラムのアンケート結果です。全プログラム共通の成果や因果関係を示すものではありません。',
  metrics: [
    {
      value: '15 / 16',
      label: '会話力の向上を実感',
      detail: '「強くそう思う」「そう思う」の合計',
      source: '2025 RSJP participant survey · n=16',
    },
    {
      value: '15 / 16',
      label: '文法理解の向上を実感',
      detail: '「強くそう思う」「そう思う」の合計',
      source: '2025 RSJP participant survey · n=16',
    },
    {
      value: '15 / 16',
      label: '日本語で話す機会は十分',
      detail: '「強くそう思う」「そう思う」の合計',
      source: '2025 RSJP participant survey · n=16',
    },
    {
      value: '14 / 16',
      label: '日本での生活理解に役立った',
      detail: '日本語授業についての肯定回答',
      source: '2025 RSJP participant survey · n=16',
    },
  ] satisfies EvidenceMetric[],
  steps: [
    {
      id: 'reach',
      number: '01',
      label: 'REACH',
      title: '誰が来たか。',
      body:
        '国・地域、大学、年度、プログラムを記録し、世界とのつながりを実績から見せます。Global Learning Networkは、その入口です。',
      proof: '参加大学・国地域は、確認できた実績データだけを掲載。',
    },
    {
      id: 'learn',
      number: '02',
      label: 'LEARN',
      title: '何を学んだか。',
      body:
        '日本語、日本文化、データサイエンスなど、プログラムごとに異なる学びを設計します。体験だけでなく、参加者自身が「何を学んだ」と答えたかも大切にします。',
      proof: 'RSJPでは言語学習、RDSPではAI・データサイエンス・ロボティクス等への学びが参加者コメントに現れています。',
    },
    {
      id: 'connect',
      number: '03',
      label: 'CONNECT',
      title: '誰と学んだか。',
      body:
        'Buddy、学生団体、同じプログラムの仲間、そして別の国・大学から来た学生。同世代との対話を、学びの外側ではなく学びの中へ。',
      proof: '複数年度のRSJP・RWJPアンケートで、Buddyとの会話や友人形成が繰り返し評価されています。',
    },
    {
      id: 'impact',
      number: '04',
      label: 'IMPACT',
      title: '何を持ち帰ったか。',
      body:
        '「楽しかった」で終わらせず、会話への自信、文化理解、専門分野への新しい関心など、参加後に残った変化を追います。',
      proof: 'RDSPでは、AIをさらに学びたい・研究したいという参加者の声も確認されています。',
    },
    {
      id: 'improve',
      number: '05',
      label: 'IMPROVE',
      title: '次を、どう良くするか。',
      body:
        'Buddyをもっと、会話をもっと、レベル分けを細かく、学習と活動のバランスをより良く。肯定的な声だけでなく改善意見も、次の設計に返します。',
      proof: 'アンケートには、Buddy機会・少人数会話・レベル設定・日程バランスなど具体的な改善提案があります。',
    },
  ] satisfies EvidenceStep[],
  bridge: {
    eyebrow: 'FROM EXPERIENCE TO EVIDENCE',
    title: '学びも、つながりも、積み重ねる。',
    body:
      '何が好き？ 日本語、文化、専門分野、それともここで出会う人。入口は違っても、短期の経験を次の学びへつなげます。小さな改善も、次へ、また次へ。',
  },
};
