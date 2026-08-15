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
const confirmed = <T>(value: T): RwjpFact<T> => ({ value, certainty: 'Confirmed', source: ownerConfirmation, verifiedAt: '2026-08-14' });
const fiveWeekJapanese = programmeAcademicLoads.fiveWeek;
export const rwjp2027Facts: RwjpFacts = {
  offering: '2027 RWJP',
  officialName: confirmed('Ritsumeikan Winter Japanese Program'),
  programmeDates: confirmed({ start: '2027-01-12', end: '2027-02-11' }),
  durationLabel: confirmed('5週間'), campus: confirmed('衣笠キャンパス（京都）'),
  japaneseMinutes: confirmed(fiveWeekJapanese.totalMinutes), japaneseClassMinutes: confirmed(fiveWeekJapanese.classMinutes), japaneseClassesPerDay: confirmed(fiveWeekJapanese.classesPerDay), japaneseTeachingDays: confirmed(fiveWeekJapanese.teachingDays),
  cultureMinutes: confirmed(990), cultureSessions: confirmed(11), cultureSessionMinutes: confirmed(90),
  accommodation: confirmed('大将軍寮。1室最大4名、同性で部屋分け、2段ベッド2台。シャワー・トイレ・キッチンは共用。最大12室。'),
  accommodationFee: confirmed(92500), accommodationDates: confirmed({ checkIn: '2027-01-11', checkOut: '2027-02-12' }), accommodationWifi: confirmed('無料Wi-Fiあり'),
  accommodationLaundry: confirmed('洗濯機・乾燥機あり。有料。料金は現在確認中。'), accommodationMeals: confirmed('食事の提供はありません。'),
  accommodationKitchen: confirmed('共用キッチンあり。電子レンジ・冷蔵庫を利用できます。参加者は必要に応じて自炊し、共用スペースまたはキッチンで食事できます。'),
  accommodationCurfew: confirmed('門限はありません。'),
  accommodationCommute: confirmed('衣笠キャンパスまでは徒歩を基本とし、所要時間は約10〜15分です。安全上の理由からプログラム期間中の自転車利用は禁止します。寮の目の前にバス停があり、バスも利用できますが、バス運賃はプログラム費用に含まれません。'),
  accommodationClimateControl: confirmed('冷暖房完備です。'), accommodationBedding: confirmed('布団・シーツ・枕などの寝具は宿泊費に含まれています。'),
  accommodationBringYourOwn: confirmed('タオル、シャンプー、石鹸、歯磨き用品、その他の洗面用品は各自で持参してください。'),
  accommodationShowerAccess: confirmed('共用シャワーは24時間利用できます。'), accommodationToiletAccess: confirmed('共用トイレは24時間利用できます。'),
  accommodationPolicy: confirmed('大将軍寮の宿泊はプログラム費用370,000円には含まれません。利用する場合は宿泊費92,500円を追加で支払います。宿泊期間はプログラム開始前日の2027年1月11日チェックイン、終了翌日の2027年2月12日チェックアウトで、この日程は必須です。布団・シーツ・枕などの寝具は宿泊費に含まれています。タオル、シャンプー、石鹸、歯磨き用品、その他の洗面用品は各自で持参してください。無料Wi-Fiを利用でき、冷暖房を完備しています。共用シャワー・トイレは24時間利用できます。洗濯機・乾燥機は有料で利用できます（料金は現在確認中）。食事の提供はありません。共用キッチン、電子レンジ、冷蔵庫を利用でき、必要に応じて自炊できます。門限はありません。衣笠キャンパスまでは徒歩約10〜15分を基本とし、安全上の理由からプログラム期間中の自転車利用は禁止します。寮の目の前からバスも利用できますが、運賃は自己負担です。物理的な満室等により宿泊は保証されません。参加者の希望で外部宿舎を自己手配・自己負担で利用することもできます。その場合もプログラム費用370,000円は立命館大学へ支払い、外部宿泊費は参加者が各宿泊施設へ直接支払います。'),
  paymentMethod: confirmed('合格後に事務局から案内'),
  paymentPolicy: confirmed('合格後に支払い方法と手順を事務局から通知します。プログラム費370,000円と、大将軍寮を利用する場合の宿泊費92,500円は、指定された支払期限までに一括で支払います。支払期限までに支払いが完了しない場合、参加資格は自動的に失効します。'),
  refundAmount: confirmed(54000),
  refundPolicy: confirmed('参加費を支払う前に辞退する場合、キャンセル料は発生しません。支払後にキャンセルする場合は、所定の管理手数料を差し引き、さらにキャンセル時点ですでに手配済みで返金できない費用がある場合は、その実費も差し引いた残額を返金します。'),
  eligibility: confirmed('申請時からプログラム参加時まで大学または大学院に在籍している学生が対象です。大学入学前の方、卒業後の方は対象外です。社会人でも、大学・大学院にパートタイム学生として在籍している場合は対象です。'),
  japaneseRequirement: confirmed('JLPT N1保持者は対象外です。日本語学習経験がない方も応募できますが、プログラム開始前までにひらがな・カタカナを読めるようにしておく必要があります。'),
  applicationPeriod: confirmed({ start: '2026-09-30', end: '2026-10-14' }), programmeFee: confirmed(370000),
};
export const isKnownFact = <T>(fact: RwjpFact<T>): fact is RwjpFact<T> & { value: T } => fact.value !== null && fact.certainty !== 'Unknown';
