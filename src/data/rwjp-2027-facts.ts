import { programmeAcademicLoads } from './programme-academic-loads';

export type FactCertainty = 'Confirmed' | 'Provisional' | 'Unknown' | 'Not Applicable';

export interface RwjpFact<T> { value: T | null; certainty: FactCertainty; source: string; verifiedAt: string | null; }
export interface RwjpFacts {
  offering: string; officialName: RwjpFact<string>; programmeDates: RwjpFact<{ start: string; end: string }>;
  durationLabel: RwjpFact<string>; campus: RwjpFact<string>; japaneseMinutes: RwjpFact<number>; japaneseClassMinutes: RwjpFact<number>; japaneseClassesPerDay: RwjpFact<number>; japaneseTeachingDays: RwjpFact<number>; cultureMinutes: RwjpFact<number>; cultureSessions: RwjpFact<number>; cultureSessionMinutes: RwjpFact<number>;
  accommodation: RwjpFact<string>; accommodationFee: RwjpFact<number>; accommodationDates: RwjpFact<{ checkIn: string; checkOut: string }>;
  accommodationWifi: RwjpFact<string>; accommodationLaundry: RwjpFact<string>; accommodationMeals: RwjpFact<string>; accommodationKitchen: RwjpFact<string>;
  accommodationCurfew: RwjpFact<string>; accommodationCommute: RwjpFact<string>; accommodationClimateControl: RwjpFact<string>; accommodationBedding: RwjpFact<string>;
  accommodationBringYourOwn: RwjpFact<string>; accommodationShowerAccess: RwjpFact<string>; accommodationToiletAccess: RwjpFact<string>; accommodationPolicy: RwjpFact<string>;
  paymentMethod: RwjpFact<string>; paymentPolicy: RwjpFact<string>; refundAmount: RwjpFact<number>; refundPolicy: RwjpFact<string>; eligibility: RwjpFact<string>; japaneseRequirement: RwjpFact<string>;
  applicationPeriod: RwjpFact<{ start: string; end: string }>; programmeFee: RwjpFact<number>;
}
const ownerConfirmation = 'Programme owner working confirmation for 2027 RWJP';
const taishogunBrochure = '2026_SS_IH_Taishogun_Brochure.pdf (February 2026)';
const confirmed = <T>(value: T, source = ownerConfirmation): RwjpFact<T> => ({ value, certainty: 'Confirmed', source, verifiedAt: '2026-08-18' });
const fiveWeekJapanese = programmeAcademicLoads.fiveWeek;
export const rwjp2027Facts: RwjpFacts = {
  offering: '2027 RWJP',
  officialName: confirmed('Ritsumeikan Winter Japanese Program'),
  programmeDates: confirmed({ start: '2027-01-12', end: '2027-02-11' }),
  durationLabel: confirmed('5週間'), campus: confirmed('衣笠キャンパス（京都）'),
  japaneseMinutes: confirmed(fiveWeekJapanese.totalMinutes), japaneseClassMinutes: confirmed(fiveWeekJapanese.classMinutes), japaneseClassesPerDay: confirmed(fiveWeekJapanese.classesPerDay), japaneseTeachingDays: confirmed(fiveWeekJapanese.teachingDays),
  cultureMinutes: confirmed(990), cultureSessions: confirmed(11), cultureSessionMinutes: confirmed(90),
  accommodation: confirmed('Ritsumeikan University International House TAISHOGUN（大将軍寮）。短期プログラム用居室は12室、各室最大4名。原則として複数人で利用し、部屋割りは大学が決定します。各室には2段ベッド2台、机1、椅子2、スツール2、ハンガーレール・ハンガー、カーテン、エアコン、照明があります。', taishogunBrochure),
  accommodationFee: confirmed(92500), accommodationDates: confirmed({ checkIn: '2027-01-11', checkOut: '2027-02-12' }), accommodationWifi: confirmed('無料Wi-Fiあり'),
  accommodationLaundry: confirmed('男女別ランドリーに各1台の洗濯設備があります。利用方法・料金は現地案内に従います。', taishogunBrochure), accommodationMeals: confirmed('食事の提供はありません。'),
  accommodationKitchen: confirmed('共用キッチンがあります。各室用として電子レンジ・電気ケトル・ストックボックスが用意され、基本的な食器・調理器具も共用で利用できます。', taishogunBrochure),
  accommodationCurfew: confirmed('門限はありません。'),
  accommodationCommute: confirmed('衣笠キャンパスまでは徒歩約20分です。京都市バス53系統も利用できます。バス運賃はプログラム費用に含まれません。安全上の理由からプログラム期間中の自転車利用は禁止します。', taishogunBrochure),
  accommodationClimateControl: confirmed('各室にエアコンがあります。', taishogunBrochure), accommodationBedding: confirmed('2段ベッド2台を備えています。寝具の提供内容はプログラム案内に従ってください。', taishogunBrochure),
  accommodationBringYourOwn: confirmed('タオル、シャンプー、石鹸、歯磨き用品、その他の洗面用品は各自で持参してください。'),
  accommodationShowerAccess: confirmed('男女別に共用シャワーブースが各2あります。', taishogunBrochure), accommodationToiletAccess: confirmed('共用トイレを利用します。'),
  accommodationPolicy: confirmed('大将軍寮の宿泊はプログラム費用370,000円には含まれません。利用する場合は宿泊費92,500円を追加で支払います。宿泊期間は2027年1月11日チェックイン、2月12日チェックアウトです。短期プログラム用居室は12室、各室最大4名で、原則として複数人利用・部屋割りは大学決定です。各室には2段ベッド2台、机1、椅子2、スツール2、ハンガーレール・ハンガー、カーテン、エアコン、照明があります。共用設備として男女別ランドリー、男女別シャワーブース各2、共用スペース、セキュリティボックス、共用キッチンがあります。各室用電子レンジ・電気ケトル・ストックボックス、基本的な食器・調理器具を利用できます。衣笠キャンパスまでは徒歩約20分、または京都市バス53系統を利用できます。物理的な満室等により宿泊は保証されません。外部宿舎を自己手配する場合、その宿泊費は参加者負担です。', taishogunBrochure),
  paymentMethod: confirmed('Convera'),
  paymentPolicy: confirmed('合格後に事務局からConveraによる支払い方法と手順を通知します。プログラム費370,000円と、大将軍寮を利用する場合の宿泊費92,500円は、指定された支払期限までに支払います。支払期限までに支払いが完了しない場合、参加資格は失効します。'),
  refundAmount: confirmed(54000),
  refundPolicy: confirmed('参加費を支払う前に辞退する場合、キャンセル料は発生しません。支払後にキャンセルする場合は54,000円に加え、キャンセル時点ですでに手配・支出され返金できない費用を差し引いた残額を返金します。'),
  eligibility: confirmed('申請時からプログラム参加時まで大学または大学院に在籍している学生が対象です。大学入学前の方、卒業後の方は対象外です。社会人でも、大学・大学院にパートタイム学生として在籍している場合は対象です。'),
  japaneseRequirement: confirmed('JLPT N1保持者は対象外です。日本語学習経験がない方も応募できますが、プログラム開始前までにひらがな・カタカナを読めるようにしておく必要があります。'),
  applicationPeriod: confirmed({ start: '2026-09-30', end: '2026-10-14' }), programmeFee: confirmed(370000),
};
export const isKnownFact = <T>(fact: RwjpFact<T>): fact is RwjpFact<T> & { value: T } => fact.value !== null && fact.certainty !== 'Unknown';
