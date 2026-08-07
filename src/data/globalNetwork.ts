export type GlobalUniversity = {
  name: string;
  shortName?: string;
};

export type GlobalConnection = {
  id:
    | 'united-states'
    | 'canada'
    | 'australia'
    | 'korea'
    | 'china'
    | 'taiwan'
    | 'indonesia'
    | 'japan'
    | 'uae';
  code: string;
  countryJa: string;
  countryEn: string;
  universities: GlobalUniversity[];
  themes: string[];
  summary: string;
  position: { x: number; y: number };
  routePath: string;
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
      { name: 'The City University of New York', shortName: 'CUNY' },
      { name: 'University of North Carolina Asheville', shortName: 'UNCA' },
      { name: 'Florida International University', shortName: 'FIU' },
      { name: 'University of Oklahoma', shortName: 'Oklahoma' },
      { name: 'University of California, Davis', shortName: 'UC Davis' },
      { name: 'DePaul University', shortName: 'DePaul' },
      { name: 'Georgia College & State University', shortName: 'Georgia College' },
      { name: 'University of Michigan', shortName: 'Michigan' },
      { name: 'Appalachian State University', shortName: 'App State' },
      { name: 'Princeton University', shortName: 'Princeton' },
    ],
    themes: ['日本語・日本文化', '学生交流', '国際共修'],
    summary:
      '多様な地域・大学から学生が集まり、日本語や日本文化を共通項に立命館の学生、そして他国の同世代ともつながります。短期留学が、国を越えた次の学びと人的ネットワークの入口になります。',
    position: { x: 13, y: 34 },
    routePath: 'M500 310 C392 190 286 162 132 212',
  },
  {
    id: 'canada',
    code: 'CA',
    countryJa: 'カナダ',
    countryEn: 'CANADA',
    universities: [
      { name: 'University of Alberta', shortName: 'Alberta' },
      { name: 'George Brown College', shortName: 'George Brown' },
      { name: 'University of British Columbia', shortName: 'UBC' },
      { name: 'Simon Fraser University', shortName: 'SFU' },
    ],
    themes: ['Student Mobility', '国際共修', '学生交流'],
    summary:
      '北米からの学生と立命館の学生が、キャンパスと地域で学びを共有します。大学間交流を、一人ひとりの対話と継続的なつながりへ変えていきます。',
    position: { x: 25, y: 17 },
    routePath: 'M500 310 C410 126 340 110 250 105',
  },
  {
    id: 'australia',
    code: 'AU',
    countryJa: 'オーストラリア',
    countryEn: 'AUSTRALIA',
    universities: [
      { name: 'Australian National University', shortName: 'ANU' },
      { name: 'RMIT University', shortName: 'RMIT' },
      { name: 'The University of Melbourne', shortName: 'Melbourne' },
      { name: 'University of New South Wales', shortName: 'UNSW' },
      { name: 'Macquarie University', shortName: 'Macquarie' },
      { name: 'The University of Adelaide', shortName: 'Adelaide' },
    ],
    themes: ['日本語・日本文化', '異文化間協働', 'Student Mobility'],
    summary:
      'キャンパスや京都での体験を共有することで、大学や国籍を越えた会話が始まります。日本を学ぶ共通の経験が、参加者同士をつなぐきっかけになります。',
    position: { x: 82, y: 79 },
    routePath: 'M500 310 C610 434 710 492 820 490',
  },
  {
    id: 'korea',
    code: 'KR',
    countryJa: '韓国',
    countryEn: 'KOREA',
    universities: [
      { name: 'Yonsei University', shortName: 'Yonsei' },
      { name: 'Kyung Hee University', shortName: 'Kyung Hee' },
      { name: "Sookmyung Women's University", shortName: 'Sookmyung' },
      { name: 'Inha University', shortName: 'Inha' },
      { name: 'Gachon University', shortName: 'Gachon' },
      { name: 'Konkuk University', shortName: 'Konkuk' },
      { name: 'Daejeon University', shortName: 'Daejeon' },
      { name: 'Pusan National University', shortName: 'PNU' },
    ],
    themes: ['国際教育連携', '日本語・日本文化', '学生主体の交流'],
    summary:
      '近いからこそ、深く知る。日本語、日本文化、学生共修を通して、互いの大学や社会を知り、東アジアの次世代を担う学生同士のつながりを育てます。',
    position: { x: 70, y: 27 },
    routePath: 'M500 310 C606 224 664 176 700 167',
  },
  {
    id: 'china',
    code: 'CN',
    countryJa: '中国',
    countryEn: 'CHINA',
    universities: [
      { name: 'Shanghai Jiao Tong University', shortName: 'SJTU' },
      { name: 'Shaoxing University', shortName: 'Shaoxing' },
      { name: 'Beijing Normal University', shortName: 'BNU' },
    ],
    themes: ['国際教育連携', '異文化間協働', '東アジア交流'],
    summary:
      '国や地域を越えた学生交流を、相互理解と学びへつなげます。日本で同じ時間を過ごし、共に考える経験が、次世代の国際的な関係を育てます。',
    position: { x: 56, y: 13 },
    routePath: 'M500 310 C520 168 540 112 560 80',
  },
  {
    id: 'taiwan',
    code: 'TW',
    countryJa: '台湾',
    countryEn: 'TAIWAN',
    universities: [
      { name: 'National Taiwan University', shortName: 'NTU' },
      { name: 'National Taiwan Normal University', shortName: 'NTNU' },
    ],
    themes: ['日本語・日本文化', '学生交流', '国際共修'],
    summary:
      '日本語や文化への関心を入り口に、立命館の学生や世界各地から集まる参加者と学び合います。近隣地域との継続的な学生交流を、人と人の関係へ育てます。',
    position: { x: 84, y: 42 },
    routePath: 'M500 310 C642 270 726 254 840 260',
  },
  {
    id: 'indonesia',
    code: 'ID',
    countryJa: 'インドネシア',
    countryEn: 'INDONESIA',
    universities: [
      { name: 'Universitas Airlangga', shortName: 'Airlangga' },
    ],
    themes: ['多文化交流', '国際共修', 'Student Mobility'],
    summary:
      '東南アジアからの参加者も加わり、キャンパスの学びはさらに多文化になります。異なる背景を持つ学生が同じ場で学ぶことで、新しい視点と関係が生まれます。',
    position: { x: 68, y: 84 },
    routePath: 'M500 310 C566 440 622 510 680 520',
  },
  {
    id: 'japan',
    code: 'JP',
    countryJa: '日本',
    countryEn: 'JAPAN',
    universities: [
      { name: 'Hiroshima University', shortName: 'Hiroshima' },
    ],
    themes: ['国内大学連携', '共修', '学生交流'],
    summary:
      '海外との接続だけでなく、国内大学との学びや交流もネットワークの一部です。国際化を、大学の中だけで閉じない教育連携へ広げます。',
    position: { x: 38, y: 82 },
    routePath: 'M500 310 C452 424 412 484 380 510',
  },
  {
    id: 'uae',
    code: 'AE',
    countryJa: 'UAE',
    countryEn: 'UNITED ARAB EMIRATES',
    universities: [
      { name: 'Zayed University', shortName: 'Zayed' },
    ],
    themes: ['国際教育連携', '多文化共生', '異文化間協働'],
    summary:
      '中東からの学生も立命館の学びに加わります。地域を越えた出会いが、日本を媒介にした多文化共生と異文化間協働の経験につながります。',
    position: { x: 23, y: 69 },
    routePath: 'M500 310 C392 370 300 410 230 425',
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
