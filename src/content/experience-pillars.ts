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
    kicker: 'MORE THAN A LANGUAGE PROGRAMME',
    title: '日本語を学ぶ。\n日本で学ぶ。',
    lead: 'RSJP・RWJPシリーズは、日本語授業だけで完結しません。立命館の学生と共に学び、京都の文化を自分の手で体験し、街や社会へ学びを広げます。',
    question: '何が好き？ 日本語。京都。人との出会い。きっかけは一つでも、持ち帰るものは一つではありません。',
    pillars: [
      {
        id: 'language',
        number: '01',
        eyebrow: 'LEARN JAPANESE',
        title: '学んだことばを、その日のうちに使う。',
        body: '日本語授業を軸に、大学院生によるレッスンやバディとの会話へ。覚えるだけでなく、伝わる経験を重ねます。',
        examples: ['日本語授業', '大学院生によるレッスン', 'バディとの会話', 'キャンパスでの実践', '京都で使う日本語'],
      },
      {
        id: 'colearning',
        number: '02',
        eyebrow: 'LEARN WITH STUDENTS',
        title: '交流ではなく、共に学ぶ。',
        body: '立命館の学生、学生団体、留学生と一緒に考え、動き、つくります。見学する側から、キャンパスの一員へ。',
        examples: ['茶道', '和太鼓', '邦楽', '陸上ホッケー', '野球', '学生ガイド', '留学生との交流', 'バディとPBL', 'VR体験', 'グリーンスクリーン', 'Microsoft Base', 'カルタ・折り紙'],
        note: '交流すんのかい？ します。しかも、一緒に学びます。',
      },
      {
        id: 'culture',
        number: '03',
        eyebrow: 'EXPERIENCE CULTURAL KYOTO',
        title: '文化首都・京都を、教室にする。',
        body: '見るだけでなく、手を動かし、背景を知り、自分の文化と比べて考える。京都だからできる文化体験を学びに変えます。',
        examples: ['坐禅', '書道', '京友禅', '清水焼', '舞妓', '日本料理', '漫画家との体験', '二条城', '漢字ミュージアム', '堂本印象美術館'],
        note: '京都、きれいなだけでは終わらない。',
      },
      {
        id: 'field',
        number: '04',
        eyebrow: 'EXPLORE BEYOND THE CLASSROOM',
        title: '街が教室。社会が教室。',
        body: '寺社、文化施設、企業、地域へ。授業で得た視点を現場で確かめ、日本を観光ではなく社会として読み解きます。',
        examples: ['伏見稲荷', '龍安寺', '北野天満宮', '仁和寺', '妙心寺', '天龍寺', '企業訪問', '姉妹都市訪問', 'カップヌードルミュージアム', '太秦映画村', '郊外学習'],
      },
    ],
    outroKicker: 'TAKE THE CLASSROOM WITH YOU',
    outroTitle: '書を持って、教室を出よう。',
    outroBody: '学ぶ場所が変わると、問いも変わる。街で、人と、社会と出会いながら、自分のことばで日本を考えます。',
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
