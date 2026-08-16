export interface ExperiencePillarCopy {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  examples: string[];
  note?: string;
}

export interface ExperienceSectionCopy {
  kicker: string;
  title: string;
  lead: string;
  question: string;
  pillars: ExperiencePillarCopy[];
  outroKicker: string;
  outroTitle: string;
  outroBody: string;
}

export const experiencePillars = {
  ja: {
    kicker: '語学だけでは終わらない',
    title: '日本語を学ぶ\n日本で学ぶ',
    lead: '日本語を軸に、学生との共修、文化体験、街での学びへ。教室の外まで、学びをつなげます。',
    question: '見るだけじゃ もったいない　使う　話す　やってみる',
    pillars: [
      {
        id: 'language',
        number: '01',
        eyebrow: '日本語を学ぶ',
        title: '学んだことばを 使ってみる',
        body: '授業で学び、キャンパスや街で使う。覚えた日本語を、伝えるためのことばへつなげます。',
        examples: ['日本語授業', '大学院生によるレッスン', 'バディとの会話', 'キャンパスでの実践', '京都で使う日本語'],
      },
      {
        id: 'colearning',
        number: '02',
        eyebrow: '学生と学ぶ',
        title: '会うだけでなく 共に学ぶ',
        body: '学生との活動や共修を通して、考えを伝え、違いを知る。交流を学びへつなげます。',
        examples: ['茶道', '和太鼓', '邦楽', '陸上ホッケー', '野球', '学生ガイド', '留学生との交流', 'バディとPBL', 'VR体験', 'グリーンスクリーン', 'Microsoft Base', 'カルタ・折り紙'],
        note: '交流の形式や内容はプログラム・年度により異なります。',
      },
      {
        id: 'culture',
        number: '03',
        eyebrow: '京都の文化を体験する',
        title: '京都を 見るだけで終わらせない',
        body: '手を動かす。背景を知る。自分の文化と比べる。文化体験を、考える時間へ変えます。',
        examples: ['坐禅', '書道', '京友禅', '清水焼', '舞妓', '日本料理', '漫画家との体験', '二条城', '漢字ミュージアム', '堂本印象美術館'],
        note: '掲載例は過去の実施内容を含みます。',
      },
      {
        id: 'field',
        number: '04',
        eyebrow: '教室の外へ',
        title: '街も 社会も 教室になる',
        body: '寺社、文化施設、企業、地域へ。現場に出ると、授業で得た視点が立体になります。',
        examples: ['伏見稲荷', '龍安寺', '北野天満宮', '仁和寺', '妙心寺', '天龍寺', '企業訪問', '姉妹都市訪問', 'カップヌードルミュージアム', '太秦映画村', '郊外学習'],
      },
    ],
    outroKicker: '教室を持って 街へ出る',
    outroTitle: '教室を出る 学びが動き出す',
    outroBody: '場所が変わると、問いも変わる。人と街と社会に出会いながら、自分のことばで日本を考えます。',
  } satisfies ExperienceSectionCopy,
  en: {
    kicker: 'MORE THAN A LANGUAGE PROGRAMME',
    title: 'Learn Japanese.\nLearn through Japan.',
    lead: 'The RSJP and RWJP family is built around more than language classes. Students use Japanese in real situations, learn alongside the Ritsumeikan community and turn Kyoto into a living classroom.',
    question: 'What draws you in—language, culture, people or a place you have never experienced? Start with one. Discover far more.',
    pillars: [
      {
        id: 'language',
        number: '01',
        eyebrow: 'LEARN JAPANESE',
        title: 'Use the language while it is still fresh.',
        body: 'Classes provide the foundation. Conversations with buddies, graduate students and people across the city turn new words into something practical and personal.',
        examples: ['Japanese classes', 'Graduate-student lessons', 'Buddy conversation', 'Campus practice', 'Japanese in Kyoto'],
      },
      {
        id: 'colearning',
        number: '02',
        eyebrow: 'LEARN WITH STUDENTS',
        title: 'Do more than meet. Learn together.',
        body: 'Join Ritsumeikan students, clubs and international students in activities that ask you to participate, collaborate and create.',
        examples: ['Tea ceremony', 'Wadaiko', 'Traditional music', 'Field hockey', 'Baseball', 'Student guides', 'International student exchange', 'Buddy PBL', 'VR', 'Green screen', 'Microsoft Base', 'Karuta and origami'],
      },
      {
        id: 'culture',
        number: '03',
        eyebrow: 'EXPERIENCE CULTURAL KYOTO',
        title: 'Make Kyoto part of the curriculum.',
        body: 'Practise, make, observe and ask why. Cultural experiences become richer when they are connected to history, contemporary life and your own perspective.',
        examples: ['Zen meditation', 'Calligraphy', 'Kyo-yuzen', 'Kiyomizu pottery', 'Maiko culture', 'Japanese cooking', 'Manga', 'Nijo Castle', 'Kanji Museum', 'Insho Domoto Museum'],
      },
      {
        id: 'field',
        number: '04',
        eyebrow: 'EXPLORE BEYOND THE CLASSROOM',
        title: 'Let the city and society teach you.',
        body: 'Temples, museums, companies and communities become places to test ideas, notice differences and understand Japan beyond the visitor experience.',
        examples: ['Fushimi Inari', 'Ryoanji', 'Kitano Tenmangu', 'Ninnaji', 'Myoshinji', 'Tenryuji', 'Company visits', 'Sister-city visits', 'Cup Noodles Museum', 'Toei Kyoto Studio Park', 'Field learning'],
      },
    ],
    outroKicker: 'TAKE THE CLASSROOM WITH YOU',
    outroTitle: 'Take your books. Leave the classroom.',
    outroBody: 'A different setting creates different questions. Learn through people, places and society—and make sense of Japan in your own words.',
  } satisfies ExperienceSectionCopy,
};
