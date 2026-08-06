import type { CampusId } from '../../data/campuses';

export interface CampusExperienceCopy {
  id: CampusId;
  theme: string;
  headline: string;
  body: string;
  contribution: string;
  afterClass: string;
  lenses: string[];
}

export const campusExperienceCopyJa: CampusExperienceCopy[] = [
  {
    id: 'kyoto',
    theme: 'CULTURE / CONTEXT',
    headline: '過去を学びながら、いまの京都で暮らす。',
    body: '歴史や伝統を遠くから眺めるのではなく、大学へ通い、学生と話し、街を歩く。京都は、文化を「知る場所」から、自分の日常として考える場所へ変わります。',
    contribution: '日本を見るための、深い文脈。',
    afterClass: '授業後は、学生街や京都の街へ。',
    lenses: ['歴史と文化', '学生の街', '衣笠キャンパス'],
  },
  {
    id: 'osaka',
    theme: 'ENERGY / CO-CREATION',
    headline: '人とアイデアが動く場所で、未来を考える。',
    body: '都市の速度、企業や地域との接点、多様な学生が交わる環境。大阪では、知識を受け取るだけでなく、対話し、試し、誰かと一緒に形にする学びが動き始めます。',
    contribution: '考えを前へ進める、都市のエネルギー。',
    afterClass: 'キャンパスを出ても、都市の学びが続く。',
    lenses: ['都市とビジネス', '共創と交流', '大阪いばらきキャンパス'],
  },
  {
    id: 'shiga',
    theme: 'SPACE / DISCOVERY',
    headline: '湖と自然に近い環境で、深く考える。',
    body: '広い空、緑、研究と学びが集まるキャンパス。滋賀には、立ち止まり、観察し、ひとつのテーマに集中できる余白があります。日本の都市とは別の表情に出会えます。',
    contribution: '発見を育てる、思考の余白。',
    afterClass: '自然とキャンパスの広がりを感じる時間へ。',
    lenses: ['自然と科学', '広いキャンパス', 'びわこ・くさつキャンパス'],
  },
];
