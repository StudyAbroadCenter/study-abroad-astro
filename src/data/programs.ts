// Current programme registry for the static MVP.
//
// IMPORTANT: operational values in this registry are not institutional Sources of Truth
// unless explicitly verified against the authoritative fact domain.
// Do not treat rendering on the Japanese recruitment page as verification.
//
// Governance:
// - This file supports implementation surfaces; it is not the authoritative fact store.
// - Authority remains with the fact domains defined in docs/handbook/21_CROSS_SPEC_GOVERNANCE.md.
// - Do not infer or promote dates, fees, application status, eligibility, accommodation,
//   or other offering-specific facts without authoritative verification.
// - Campus assignment may be shown only where it has been explicitly confirmed.
// - Custom Programs are institutional/group programmes and must not appear as individual applications.
// - RDSP remains acronym-only until its official name is confirmed from an authoritative source.

export type ProgrammeGoal = 'japanese-culture' | 'specialist' | 'partner';
export type ProgrammeSeason = 'summer' | 'winter' | 'flexible';
export type ProgrammeCampus = 'kinugasa' | 'oic' | 'programme-dependent';
export type ProgrammeAudience = 'individual' | 'partner';

/** Locale-authored presentation copy. These strings do not override structured facts. */
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

/**
 * Programme-level data used by the current MVP.
 * Offering-level fields should be added only when their current values are verified.
 */
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
        summary: '日本語を軸に、共修と文化体験を重ねる短期プログラムです。',
        imageAlt: '立命館大学の短期プログラムで日本語を学ぶ学生たち',
        campusLabel: '衣笠キャンパス・京都',
        familyLabel: '日本語・日本文化',
        experienceLine: '学ぶ 暮らす 京都が少し近くなる',
      },
      en: {
        name: 'Ritsumeikan Summer Japanese Program',
        seasonLabel: 'Summer',
        duration: '5 weeks',
        summary: 'Build practical Japanese through campus life, student collaboration and cultural field learning in Kyoto.',
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
        summary: '日本語・文化・共修を短期間に凝縮して学ぶExpressプログラムです。',
        imageAlt: '京都で日本文化を体験する短期プログラム参加者',
        campusLabel: '衣笠キャンパス・京都',
        familyLabel: '日本語・日本文化',
        experienceLine: '短くても 学びは濃く',
      },
      en: {
        name: 'RSJP Express',
        seasonLabel: 'Summer',
        duration: '2 weeks',
        summary: 'A concentrated summer experience combining Japanese, cultural discovery and interaction with Ritsumeikan students.',
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
        summary: '冬の京都で、日本語を中心に学ぶ5週間。文化体験とキャンパスでの交流も学びにつなげます。',
        imageAlt: '冬期日本語プログラムに参加する学生たち',
        campusLabel: '衣笠キャンパス・京都',
        familyLabel: '日本語・日本文化',
        experienceLine: '教室で学ぶ 京都で使う',
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
        summary: '冬の京都で、日本語と文化を短期間に凝縮して学ぶExpressプログラムです。',
        imageAlt: '短期日本語プログラムで交流する学生たち',
        campusLabel: '衣笠キャンパス・京都',
        familyLabel: '日本語・日本文化',
        experienceLine: '短いだけでは 終わらない',
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
        name: 'RDSP',
        seasonLabel: '夏',
        duration: '短期',
        summary: '大阪いばらきキャンパス（OIC）で実施する専門テーマ型の短期プログラムです。正式名称と年度別の詳細は確認中です。',
        imageAlt: '大阪いばらきキャンパスで専門分野を学ぶ短期プログラム',
        campusLabel: '大阪いばらきキャンパス（OIC）',
        familyLabel: '専門テーマ',
        experienceLine: '専門を深める 問いを立てる',
      },
      en: {
        name: 'RDSP',
        seasonLabel: 'Summer',
        duration: 'Short-term',
        summary: 'A specialist short-term programme at Osaka Ibaraki Campus. The official programme name and annual details are being verified.',
        imageAlt: 'Students studying a specialist subject at Osaka Ibaraki Campus',
        campusLabel: 'Osaka Ibaraki Campus',
        familyLabel: 'Thematic Study',
        experienceLine: 'Explore a specialist theme and develop new questions.',
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
        summary: '大阪いばらきキャンパス（OIC）で、ビジネスとマネジメントを学ぶ専門テーマ型プログラムです。',
        imageAlt: 'ビジネスとマネジメントを学ぶ短期プログラム参加者',
        campusLabel: '大阪いばらきキャンパス（OIC）',
        familyLabel: '専門テーマ',
        experienceLine: 'ビジネスを 教室の外まで',
      },
      en: {
        name: 'Ritsumeikan Business Management Program',
        seasonLabel: 'Winter',
        duration: 'Short-term',
        summary: 'Study business and management at Osaka Ibaraki Campus through academic insight and collaborative learning.',
        imageAlt: 'Students in a short business and management programme',
        campusLabel: 'Osaka Ibaraki Campus',
        familyLabel: 'Thematic Study',
        experienceLine: 'See business in motion—in the classroom and beyond.',
      },
    },
  },
  {
    id: 'custom-programs',
    code: 'CUSTOM PROGRAMS',
    season: 'flexible',
    audience: 'partner',
    goals: ['partner'],
    campus: 'programme-dependent',
    image: 'IMG_1687.JPG',
    copy: {
      ja: {
        name: 'Custom Programs',
        seasonLabel: '個別相談',
        duration: '個別設計',
        summary: '海外大学・教育機関からの学生団体を対象に、教育目的、期間、内容、参加人数、実施キャンパス等を相談しながら設計します。',
        imageAlt: '立命館大学のキャンパス',
        campusLabel: '内容に応じて相談',
        familyLabel: '海外大学・教育機関向け',
        experienceLine: '大学ごとに 日本での学びを設計する',
      },
      en: {
        name: 'Custom Programs',
        seasonLabel: 'Flexible',
        duration: 'Designed to order',
        summary: 'For groups from overseas universities and educational institutions. Programme content, timing and campus are planned in consultation with institutional staff.',
        imageAlt: 'A Ritsumeikan University campus',
        campusLabel: 'Selected through programme planning',
        familyLabel: 'For University Partners',
        experienceLine: 'Bring the academic purpose. We will build the programme around it.',
      },
    },
  },
];
