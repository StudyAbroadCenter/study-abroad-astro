export type ProgrammeGoal = 'japanese-culture' | 'specialist' | 'partner';
export type ProgrammeSeason = 'summer' | 'winter' | 'flexible';
export type ProgrammeCampus = 'kinugasa' | 'oic' | 'programme-dependent';
export type ProgrammeAudience = 'individual' | 'partner';

export interface ProgrammeCopy {
  name: string;
  seasonLabel: string;
  duration: string;
  summary: string;
  imageAlt: string;
  campusLabel: string;
  familyLabel: string;
  experienceLine?: string;
}

export interface Programme {
  id: string;
  code: string;
  season: ProgrammeSeason;
  audience: ProgrammeAudience;
  goals: ProgrammeGoal[];
  campus: ProgrammeCampus;
  image: string;
  copy: {
    ja: ProgrammeCopy;
    en: ProgrammeCopy;
  };
}

export const programmes: Programme[] = [
  {
    id: 'rsjp',
    code: 'RSJP',
    season: 'summer',
    audience: 'individual',
    goals: ['japanese-culture'],
    campus: 'kinugasa',
    image: 'IMG_8178.JPG',
    copy: {
      ja: {
        name: 'Ritsumeikan Summer Japanese Program',
        seasonLabel: '夏',
        duration: '5週間',
        summary: '日本語を軸に、学生共修、日本文化体験、京都でのフィールドラーニングをじっくり経験する夏の総合プログラムです。',
        imageAlt: '立命館大学の短期プログラムで日本語を学ぶ学生たち',
        campusLabel: '衣笠キャンパス・京都',
        familyLabel: '日本語・日本文化',
        experienceLine: '日本語を学び、京都で暮らし、立命館の学生と共に学ぶ。',
      },
      en: {
        name: 'Ritsumeikan Summer Japanese Program',
        seasonLabel: 'Summer',
        duration: '5 weeks',
        summary: 'Build practical Japanese through five immersive weeks of campus life, student collaboration and cultural field learning in Kyoto.',
        imageAlt: 'Students learning Japanese at Ritsumeikan University',
        campusLabel: 'Kinugasa Campus · Kyoto',
        familyLabel: 'Japanese Language & Culture',
        experienceLine: 'Learn the language, live the city and become part of the campus community.',
      },
    },
  },
  {
    id: 'rsjp-express',
    code: 'RSJP EXPRESS',
    season: 'summer',
    audience: 'individual',
    goals: ['japanese-culture'],
    campus: 'kinugasa',
    image: 'IMG_5092.JPG',
    copy: {
      ja: {
        name: 'RSJP Express',
        seasonLabel: '夏',
        duration: '2週間',
        summary: '日本語、日本文化、学生交流、学生共修を2週間に凝縮。短期間でも、立命館で学ぶ実感を薄くしません。',
        imageAlt: '京都で日本文化を体験する短期プログラム参加者',
        campusLabel: '衣笠キャンパス・京都',
        familyLabel: '日本語・日本文化',
        experienceLine: '2週間でも、イイじゃん。学びも、出会いも、可能性も。倍々に。',
      },
      en: {
        name: 'RSJP Express',
        seasonLabel: 'Summer',
        duration: '2 weeks',
        summary: 'A concentrated summer experience combining Japanese, cultural discovery and meaningful interaction with Ritsumeikan students.',
        imageAlt: 'Students taking part in a cultural experience in Kyoto',
        campusLabel: 'Kinugasa Campus · Kyoto',
        familyLabel: 'Japanese Language & Culture',
        experienceLine: 'Two weeks. Full days. Far more than a quick introduction.',
      },
    },
  },
  {
    id: 'rwjp',
    code: 'RWJP',
    season: 'winter',
    audience: 'individual',
    goals: ['japanese-culture'],
    campus: 'kinugasa',
    image: 'IMG_8263.JPG',
    copy: {
      ja: {
        name: 'Ritsumeikan Winter Japanese Program',
        seasonLabel: '冬',
        duration: '5週間',
        summary: '冬の京都で、日本語、日本文化、学生共修、キャンパスライフを深く経験する総合プログラムです。',
        imageAlt: '冬期日本語プログラムに参加する学生たち',
        campusLabel: '衣笠キャンパス・京都',
        familyLabel: '日本語・日本文化',
        experienceLine: '教室で学んだ日本語を、学生との会話と京都の日常で使う。',
      },
      en: {
        name: 'Ritsumeikan Winter Japanese Program',
        seasonLabel: 'Winter',
        duration: '5 weeks',
        summary: 'Experience winter in Kyoto while developing Japanese through classes, campus relationships and learning beyond the classroom.',
        imageAlt: 'Students participating in a winter Japanese programme',
        campusLabel: 'Kinugasa Campus · Kyoto',
        familyLabel: 'Japanese Language & Culture',
        experienceLine: 'Use what you learn in class in real conversations, real places and everyday life.',
      },
    },
  },
  {
    id: 'rwjp-express',
    code: 'RWJP EXPRESS',
    season: 'winter',
    audience: 'individual',
    goals: ['japanese-culture'],
    campus: 'kinugasa',
    image: 'IMG_1588.JPG',
    copy: {
      ja: {
        name: 'RWJP Express',
        seasonLabel: '冬',
        duration: '2週間',
        summary: '冬の京都と衣笠キャンパスで、日本語、文化体験、学生交流、共修を集中的に経験します。',
        imageAlt: '短期日本語プログラムで交流する学生たち',
        campusLabel: '衣笠キャンパス・京都',
        familyLabel: '日本語・日本文化',
        experienceLine: '短いだけでは、終わらない。毎日を濃くする2週間。',
      },
      en: {
        name: 'RWJP Express',
        seasonLabel: 'Winter',
        duration: '2 weeks',
        summary: 'A focused winter programme that brings Japanese learning, cultural encounters and campus connection into two active weeks.',
        imageAlt: 'Students connecting during a short winter programme',
        campusLabel: 'Kinugasa Campus · Kyoto',
        familyLabel: 'Japanese Language & Culture',
        experienceLine: 'Short in length, not in depth.',
      },
    },
  },
  {
    id: 'rdsp',
    code: 'RDSP',
    season: 'summer',
    audience: 'individual',
    goals: ['specialist'],
    campus: 'oic',
    image: 'IMG_3725.JPG',
    copy: {
      ja: {
        name: 'Ritsumeikan Data Science Program',
        seasonLabel: '夏',
        duration: '短期',
        summary: 'データサイエンスを軸に、専門的な学びと日本の大学生との共修を組み合わせるテーマ型プログラムです。',
        imageAlt: '大阪いばらきキャンパスで専門分野を学ぶ短期プログラム',
        campusLabel: '大阪いばらきキャンパス',
        familyLabel: '専門テーマ',
        experienceLine: 'データを学ぶ。学生と考える。社会の課題へつなげる。',
      },
      en: {
        name: 'Ritsumeikan Data Science Program',
        seasonLabel: 'Summer',
        duration: 'Short-term',
        summary: 'Explore data science through focused academic sessions, collaborative learning and perspectives from Japan.',
        imageAlt: 'Students studying a specialist subject at Osaka Ibaraki Campus',
        campusLabel: 'Osaka Ibaraki Campus',
        familyLabel: 'Thematic Study',
        experienceLine: 'Work with data, exchange ideas and connect analysis with real-world questions.',
      },
    },
  },
  {
    id: 'rbmp',
    code: 'RBMP',
    season: 'winter',
    audience: 'individual',
    goals: ['specialist'],
    campus: 'oic',
    image: 'IMG_6091.JPG',
    copy: {
      ja: {
        name: 'Ritsumeikan Business Management Program',
        seasonLabel: '冬',
        duration: '短期',
        summary: 'ビジネスとマネジメントを、講義、企業や地域との接点、学生共修から立体的に学びます。',
        imageAlt: 'ビジネスとマネジメントを学ぶ短期プログラム参加者',
        campusLabel: '大阪いばらきキャンパス',
        familyLabel: '専門テーマ',
        experienceLine: 'ビジネスを教室だけでなく、都市、企業、人の動きから学ぶ。',
      },
      en: {
        name: 'Ritsumeikan Business Management Program',
        seasonLabel: 'Winter',
        duration: 'Short-term',
        summary: 'Study business and management through academic insight, student collaboration and connections with companies and communities.',
        imageAlt: 'Students in a short business and management programme',
        campusLabel: 'Osaka Ibaraki Campus',
        familyLabel: 'Thematic Study',
        experienceLine: 'See business in motion—in the classroom, across the city and through the people shaping it.',
      },
    },
  },
  {
    id: 'custom-programs',
    code: 'FOR PARTNERS',
    season: 'flexible',
    audience: 'partner',
    goals: ['partner'],
    campus: 'programme-dependent',
    image: 'IMG_1687.JPG',
    copy: {
      ja: {
        name: 'Custom Programs',
        seasonLabel: '通年相談',
        duration: '個別設計',
        summary: '協定校の教育目的とテーマを伺い、授業、学生交流、文化体験、訪問、宿泊まで一つのプログラムとして設計・手配します。',
        imageAlt: '立命館大学のキャンパス',
        campusLabel: '内容に応じて決定',
        familyLabel: '大学向けオーダーメード',
        experienceLine: 'テーマを持ってきてください。実現するプログラムを、こちらで組み立てます。',
      },
      en: {
        name: 'Custom Programs',
        seasonLabel: 'Flexible',
        duration: 'Designed to order',
        summary: 'Tell us the theme, learning outcomes and practical needs. We design and arrange the academic, cultural and logistical experience as one programme.',
        imageAlt: 'A Ritsumeikan University campus',
        campusLabel: 'Selected for the programme',
        familyLabel: 'For University Partners',
        experienceLine: 'Bring the academic purpose. We will build the programme around it.',
      },
    },
  },
];
