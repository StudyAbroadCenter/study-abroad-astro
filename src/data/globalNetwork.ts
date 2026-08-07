export type GlobalUniversity = {
  name: string;
  shortName?: string;
};

export type GlobalConnection = {
  id:
    | 'united-states'
    | 'canada'
    | 'united-kingdom'
    | 'finland'
    | 'romania'
    | 'china'
    | 'korea'
    | 'taiwan'
    | 'macau'
    | 'singapore'
    | 'australia'
    | 'indonesia'
    | 'japan'
    | 'uae'
    | 'qatar';
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
      { name: 'College of Staten Island, CUNY', shortName: 'CSI' },
      { name: 'Queens College, CUNY', shortName: 'Queens' },
      { name: 'Queensborough Community College, CUNY', shortName: 'QCC' },
      { name: 'Hunter College, CUNY', shortName: 'Hunter' },
      { name: 'Lehman College, CUNY', shortName: 'Lehman' },
      { name: 'LaGuardia Community College, CUNY', shortName: 'LaGuardia' },
      { name: 'Borough of Manhattan Community College, CUNY', shortName: 'BMCC' },
      { name: 'Brooklyn College, CUNY', shortName: 'Brooklyn' },
      { name: 'University of North Carolina Asheville', shortName: 'UNCA' },
      { name: 'University of North Carolina at Greensboro', shortName: 'UNC Greensboro' },
      { name: 'University of North Carolina Wilmington', shortName: 'UNCW' },
      { name: 'Florida International University', shortName: 'FIU' },
      { name: 'University of Oklahoma', shortName: 'Oklahoma' },
      { name: 'University of California, Davis', shortName: 'UC Davis' },
      { name: 'University of California, Los Angeles', shortName: 'UCLA' },
      { name: 'DePaul University', shortName: 'DePaul' },
      { name: 'Georgia College & State University', shortName: 'Georgia College' },
      { name: 'University of Michigan', shortName: 'Michigan' },
      { name: 'Western Michigan University', shortName: 'Western Michigan' },
      { name: 'Appalachian State University', shortName: 'App State' },
      { name: 'Princeton University', shortName: 'Princeton' },
      { name: 'University of Mississippi', shortName: 'Ole Miss' },
      { name: 'University of New Mexico', shortName: 'UNM' },
      { name: 'Skidmore College', shortName: 'Skidmore' },
      { name: 'California State University, Bakersfield', shortName: 'CSUB' },
      { name: 'Illinois College', shortName: 'Illinois College' },
      { name: 'Duke University', shortName: 'Duke' },
      { name: 'Kansas City Art Institute', shortName: 'KCAI' },
      { name: 'Montana State University', shortName: 'Montana State' },
      { name: 'The George Washington University', shortName: 'GW' },
      { name: 'Montgomery College', shortName: 'Montgomery' },
      { name: 'University of Pittsburgh', shortName: 'Pitt' },
    ],
    themes: ['日本語・日本文化', '学生交流', '国際共修'],
    summary:
      '多様な地域・教育機関から学生が集まり、日本語や日本文化を共通項に立命館の学生、そして他国の同世代ともつながります。短期留学が、国を越えた次の学びと人的ネットワークの入口になります。',
    position: { x: 11, y: 34 },
    routePath: 'M500 310 C388 192 270 162 110 211',
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
      { name: 'University of Toronto', shortName: 'Toronto' },
    ],
    themes: ['Student Mobility', '国際共修', '学生交流'],
    summary:
      '北米からの学生と立命館の学生が、キャンパスと地域で学びを共有します。大学間交流を、一人ひとりの対話と継続的なつながりへ変えていきます。',
    position: { x: 22, y: 14 },
    routePath: 'M500 310 C410 132 332 100 220 87',
  },
  {
    id: 'united-kingdom',
    code: 'UK',
    countryJa: 'イギリス',
    countryEn: 'UNITED KINGDOM',
    universities: [
      { name: 'Royal Holloway, University of London', shortName: 'Royal Holloway' },
      { name: 'SOAS University of London', shortName: 'SOAS' },
      { name: 'University of Leeds', shortName: 'Leeds' },
      { name: "King's College London", shortName: "King's" },
    ],
    themes: ['国際教育連携', '日本語・日本文化', 'Student Mobility'],
    summary:
      '英国の大学からも学生が参加し、日本語・日本文化や専門テーマを通じて立命館の学生、世界各地の参加者と学び合います。',
    position: { x: 38, y: 8 },
    routePath: 'M500 310 C448 134 418 72 380 50',
  },
  {
    id: 'finland',
    code: 'FI',
    countryJa: 'フィンランド',
    countryEn: 'FINLAND',
    universities: [
      { name: 'University of Helsinki', shortName: 'Helsinki' },
    ],
    themes: ['国際教育連携', '異文化間協働', 'Student Mobility'],
    summary:
      '北欧からの参加も、短期プログラムの多様性を広げます。異なる教育・文化背景を持つ学生同士が、日本で同じ学びを共有します。',
    position: { x: 53, y: 7 },
    routePath: 'M500 310 C510 150 520 76 530 43',
  },
  {
    id: 'romania',
    code: 'RO',
    countryJa: 'ルーマニア',
    countryEn: 'ROMANIA',
    universities: [
      { name: 'Babeș-Bolyai University', shortName: 'Babeș-Bolyai' },
    ],
    themes: ['国際教育連携', '多文化交流', '異文化間協働'],
    summary:
      '欧州各地からの学生も加わり、国・地域を越えた対話が生まれます。日本を学ぶ経験が、互いの文化や社会を知る入口になります。',
    position: { x: 67, y: 11 },
    routePath: 'M500 310 C556 148 612 86 670 68',
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
      { name: 'Beihang University', shortName: 'Beihang' },
      { name: 'Capital University of Economics and Business', shortName: 'CUEB' },
    ],
    themes: ['国際教育連携', '異文化間協働', '東アジア交流'],
    summary:
      '国や地域を越えた学生交流を、相互理解と学びへつなげます。日本で同じ時間を過ごし、共に考える経験が、次世代の国際的な関係を育てます。',
    position: { x: 80, y: 18 },
    routePath: 'M500 310 C624 180 706 126 800 112',
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
      { name: 'Korea University', shortName: 'Korea' },
      { name: 'Ajou University', shortName: 'Ajou' },
    ],
    themes: ['国際教育連携', '日本語・日本文化', '学生主体の交流'],
    summary:
      '近いからこそ、深く知る。日本語、日本文化、学生共修を通して、互いの大学や社会を知り、東アジアの次世代を担う学生同士のつながりを育てます。',
    position: { x: 89, y: 30 },
    routePath: 'M500 310 C664 238 792 196 890 186',
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
    position: { x: 91, y: 43 },
    routePath: 'M500 310 C674 300 802 278 910 267',
  },
  {
    id: 'macau',
    code: 'MO',
    countryJa: 'マカオ',
    countryEn: 'MACAU',
    universities: [
      { name: 'University of Macau', shortName: 'UM' },
    ],
    themes: ['東アジア交流', '国際共修', 'Student Mobility'],
    summary:
      '東アジアの多様な地域から学生が集うことで、同じ日本体験を異なる視点から捉え直す学びが生まれます。',
    position: { x: 91, y: 56 },
    routePath: 'M500 310 C676 334 814 344 910 347',
  },
  {
    id: 'singapore',
    code: 'SG',
    countryJa: 'シンガポール',
    countryEn: 'SINGAPORE',
    universities: [
      { name: 'National University of Singapore', shortName: 'NUS' },
      { name: 'Yale-NUS College', shortName: 'Yale-NUS' },
      { name: 'Singapore Management University', shortName: 'SMU' },
    ],
    themes: ['国際教育連携', 'Student Mobility', '異文化間協働'],
    summary:
      'シンガポールの大学からの参加も、アジアの学生同士が立命館で交わるネットワークを広げています。',
    position: { x: 87, y: 69 },
    routePath: 'M500 310 C658 382 790 414 870 428',
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
      { name: 'The University of Sydney', shortName: 'Sydney' },
      { name: 'The University of Queensland', shortName: 'UQ' },
      { name: 'Queensland University of Technology', shortName: 'QUT' },
      { name: 'Monash University', shortName: 'Monash' },
    ],
    themes: ['日本語・日本文化', '異文化間協働', 'Student Mobility'],
    summary:
      'キャンパスや京都での体験を共有することで、大学や国籍を越えた会話が始まります。日本を学ぶ共通の経験が、参加者同士をつなぐきっかけになります。',
    position: { x: 79, y: 82 },
    routePath: 'M500 310 C624 448 716 494 790 508',
  },
  {
    id: 'indonesia',
    code: 'ID',
    countryJa: 'インドネシア',
    countryEn: 'INDONESIA',
    universities: [
      { name: 'Universitas Airlangga', shortName: 'Airlangga' },
      { name: 'Universitas Atma Jaya Yogyakarta', shortName: 'Atma Jaya Yogyakarta' },
    ],
    themes: ['多文化交流', '国際共修', 'Student Mobility'],
    summary:
      '東南アジアからの参加者も加わり、キャンパスの学びはさらに多文化になります。異なる背景を持つ学生が同じ場で学ぶことで、新しい視点と関係が生まれます。',
    position: { x: 63, y: 88 },
    routePath: 'M500 310 C560 468 602 530 630 546',
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
    position: { x: 45, y: 87 },
    routePath: 'M500 310 C470 462 456 526 450 539',
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
    position: { x: 26, y: 78 },
    routePath: 'M500 310 C386 420 312 468 260 484',
  },
  {
    id: 'qatar',
    code: 'QA',
    countryJa: 'カタール',
    countryEn: 'QATAR',
    universities: [
      { name: 'Qatar University', shortName: 'Qatar' },
    ],
    themes: ['国際教育連携', '多文化共生', 'Student Mobility'],
    summary:
      '中東を含む幅広い地域から学生が集うことが、短期受入プログラムを多文化的な学びの場へ広げています。',
    position: { x: 11, y: 63 },
    routePath: 'M500 310 C344 346 208 378 110 391',
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
