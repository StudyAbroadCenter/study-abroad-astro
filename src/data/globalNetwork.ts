export type GlobalUniversity = {
  name: string;
  shortName?: string;
};

export type GlobalConnection = {
  id: 'united-states' | 'australia' | 'korea';
  code: string;
  countryJa: string;
  countryEn: string;
  universities: GlobalUniversity[];
  themes: string[];
  summary: string;
  position: { x: number; y: number };
};

export const globalConnections: GlobalConnection[] = [
  {
    id: 'united-states',
    code: 'US',
    countryJa: 'アメリカ',
    countryEn: 'UNITED STATES',
    universities: [
      { name: 'James Madison University', shortName: 'JMU' },
      { name: 'Case Western Reserve University', shortName: 'CWRU' },
      { name: 'Rutgers University', shortName: 'Rutgers' },
    ],
    themes: ['日本語・日本文化', '学生交流', '国際共修'],
    summary:
      '日本語や日本文化を学ぶだけでなく、立命館の学生、そして他国から参加する同世代と出会う。短期留学が、国を越えた次の学びや人的ネットワークの入口になります。',
    position: { x: 18, y: 35 },
  },
  {
    id: 'australia',
    code: 'AU',
    countryJa: 'オーストラリア',
    countryEn: 'AUSTRALIA',
    universities: [
      { name: 'RMIT University', shortName: 'RMIT' },
      { name: 'The University of Melbourne', shortName: 'Melbourne' },
    ],
    themes: ['日本語・日本文化', '異文化間協働', 'Student Mobility'],
    summary:
      'キャンパスや京都での体験を共有することで、大学や国籍を越えた会話が始まります。共通の関心や体験が、参加者同士をつなぐきっかけになります。',
    position: { x: 79, y: 78 },
  },
  {
    id: 'korea',
    code: 'KR',
    countryJa: '韓国',
    countryEn: 'KOREA',
    universities: [
      { name: 'Kyung Hee University', shortName: 'Kyung Hee' },
      { name: 'Yonsei University', shortName: 'Yonsei' },
      { name: 'Daejeon University', shortName: 'Daejeon' },
    ],
    themes: ['国際教育連携', '日本語・日本文化', '学生主体の交流'],
    summary:
      '近いからこそ、深く知る。日本語、日本文化、学生共修を通して、互いの大学や社会を知り、東アジアの次世代を担う学生同士のつながりを育てます。',
    position: { x: 68, y: 32 },
  },
];

export const globalNetworkPrinciples = [
  {
    label: '国際共修',
    en: 'CO-LEARNING',
    description: '立命館の学生と留学生が、同じ場で学び、考え、つくる。',
  },
  {
    label: '異文化間協働',
    en: 'COLLABORATION',
    description: '異なる文化的背景を持つ同世代が、共通の体験から関係を築く。',
  },
  {
    label: '国際教育連携',
    en: 'PARTNERSHIP',
    description: '海外大学との受入・共同設計を、学生一人ひとりの学びへつなげる。',
  },
  {
    label: '世界へ続く人の輪',
    en: 'HUMAN NETWORK',
    description: '立命館での一つの出会いが、帰国後も世界の別の場所へ続いていく。',
  },
] as const;
