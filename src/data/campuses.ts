export type CampusId = 'kyoto' | 'osaka' | 'shiga';

export interface CampusPlace {
  id: CampusId;
  city: string;
  cityJa: string;
  prefecture: string;
  prefectureJa: string;
  campus: string;
  campusJa: string;
  locality: string;
  image: string;
  imageAlt: string;
  focus: string;
  accent: string;
  accentSoft: string;
}

export const campusPlaces: CampusPlace[] = [
  {
    id: 'kyoto',
    city: 'KYOTO',
    cityJa: '京都',
    prefecture: 'KYOTO PREFECTURE',
    prefectureJa: '京都府',
    campus: 'Kinugasa Campus',
    campusJa: '衣笠キャンパス',
    locality: '京都市',
    image: 'IMG_1656.JPG',
    imageAlt: '立命館大学衣笠キャンパスの時計台とキャンパス風景',
    focus: 'center 46%',
    accent: '#ff6a42',
    accentSoft: 'rgba(255, 106, 66, 0.22)',
  },
  {
    id: 'osaka',
    city: 'OSAKA',
    cityJa: '大阪',
    prefecture: 'OSAKA PREFECTURE',
    prefectureJa: '大阪府',
    campus: 'Osaka Ibaraki Campus',
    campusJa: '大阪いばらきキャンパス（OIC）',
    locality: '茨木市',
    image: 'IMG_3725.JPG',
    imageAlt: '立命館大学の都市型キャンパスと緑のあるキャンパス風景',
    focus: 'center 50%',
    accent: '#ffd45a',
    accentSoft: 'rgba(255, 212, 90, 0.2)',
  },
  {
    id: 'shiga',
    city: 'SHIGA',
    cityJa: '滋賀',
    prefecture: 'SHIGA PREFECTURE',
    prefectureJa: '滋賀県',
    campus: 'Biwako-Kusatsu Campus',
    campusJa: 'びわこ・くさつキャンパス（BKC）',
    locality: '草津市',
    image: 'IMG_1687.JPG',
    imageAlt: '青空と緑に囲まれた立命館大学のキャンパス風景',
    focus: 'center 48%',
    accent: '#72dfca',
    accentSoft: 'rgba(114, 223, 202, 0.2)',
  },
];
