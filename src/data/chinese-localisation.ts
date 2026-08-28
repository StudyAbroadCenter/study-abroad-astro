import { rwjp2027Facts, isKnownFact } from './rwjp';
import { coreProgramme2027Facts } from './core-programme-2027-facts';
import { getCurrentOfferingFact } from './current-offerings';

export type ChineseLocale = 'zh-CN' | 'zh-TW';
export type ChineseProgrammeId = 'rsjp' | 'rsjp-express' | 'rwjp' | 'rwjp-express' | 'rdsp' | 'rbmp';
type Fact = { label: string; value: string; status?: string };
export type ChineseProgrammePage = {
  id: ChineseProgrammeId; code: string; name: string; family: string; title: string; description: string;
  heroImage: string; heroAlt: string; kicker: string; headline: string; lead: string; campus: string;
  status: 'confirmed' | 'working' | 'pending'; statusLabel: string; statusNote: string;
  overviewTitle: string; overviewText: string; academicTitle: string; academicIntro: string; academicItems: string[];
  eligibilityTitle: string; eligibilityItems: string[]; accommodationTitle: string; accommodationText: string;
  facts: Fact[]; nextTitle: string; nextText: string;
};

type LocalPage = Omit<ChineseProgrammePage, 'id' | 'code' | 'name' | 'heroImage'>;

const r = rwjp2027Facts;
const e = coreProgramme2027Facts['rwjp-express'];
const d = coreProgramme2027Facts.rdsp;
const b = coreProgramme2027Facts.rbmp;
const offers = {
  rsjp: getCurrentOfferingFact('rsjp')!,
  'rsjp-express': getCurrentOfferingFact('rsjp-express')!,
  rwjp: getCurrentOfferingFact('rwjp')!,
  'rwjp-express': getCurrentOfferingFact('rwjp-express')!,
  rdsp: getCurrentOfferingFact('rdsp')!,
  rbmp: getCurrentOfferingFact('rbmp')!,
};
const rd = isKnownFact(r.programmeDates) ? r.programmeDates.value : null;
const ra = isKnownFact(r.applicationPeriod) ? r.applicationPeriod.value : null;
const rf = isKnownFact(r.programmeFee) ? r.programmeFee.value : null;
const rdf = isKnownFact(r.accommodationFee) ? r.accommodationFee.value : null;
const fmt = (iso?: string | null, pending = '待确认') => {
  if (!iso) return pending;
  const [year, month, day] = iso.split('-').map(Number);
  return `${year}年${month}月${day}日`;
};
const range = (start?: string | null, end?: string | null, pending = '待确认') => start && end ? `${fmt(start, pending)}－${fmt(end, pending)}` : pending;
const yen = (value?: number | null, pending = '待确认') => value === null || value === undefined ? pending : `JPY ${value.toLocaleString('en-US')}`;

const names = {
  rsjp: 'Ritsumeikan Summer Japanese Program', 'rsjp-express': 'RSJP Express', rwjp: 'Ritsumeikan Winter Japanese Program',
  'rwjp-express': 'RWJP Express', rdsp: 'RDSP', rbmp: 'Ritsumeikan Business Management Program',
} as const;
const codes = { rsjp: 'RSJP', 'rsjp-express': 'RSJP EXPRESS', rwjp: 'RWJP', 'rwjp-express': 'RWJP EXPRESS', rdsp: 'RDSP', rbmp: 'RBMP' } as const;
const images = { rsjp: '/images/IMG_8178.JPG', 'rsjp-express': '/images/IMG_5092.JPG', rwjp: '/images/IMG_8263.JPG', 'rwjp-express': '/images/IMG_1588.JPG', rdsp: '/images/IMG_3725.JPG', rbmp: '/images/IMG_6091.JPG' } as const;

const cn: Record<ChineseProgrammeId, LocalPage> = {
  rsjp: {
    family: '日语与日本文化', title: `RSJP ${offers.rsjp.academicYear} 夏季项目｜立命馆大学`,
    description: `在京都立命馆大学学习日语与日本文化。${offers.rsjp.academicYear}年度日期、费用、申请期与住宿信息将在正式确认后发布。`,
    heroAlt: '参加立命馆大学短期日语项目的学生', kicker: `${offers.rsjp.academicYear} Summer · 日语与日本文化`,
    headline: '在京都学习日语，把课堂所学用在真实生活中。', lead: 'RSJP以日语学习为核心，将校园生活、文化体验与京都日常连接起来。',
    campus: '衣笠校区 · 京都', status: 'pending', statusLabel: `${offers.rsjp.academicYear}年度详细信息待确认`,
    statusNote: `项目名称与校区已确认。${offers.rsjp.academicYear}年度日期、费用、申请期和住宿只在正式确认后发布。`,
    overviewTitle: '在京都体验日语学习与大学生活', overviewText: '不会把往年条件自动沿用到当前年度。',
    academicTitle: '日语学习与文化语境并重', academicIntro: `${offers.rsjp.academicYear}年度具体课时与活动安排确认后发布。`,
    academicItems: ['以日语课程为学习核心。', '通过文化学习理解语言使用背景。', '体验日本大学校园生活。'],
    eligibilityTitle: `${offers.rsjp.academicYear}年度申请条件确认后公布`, eligibilityItems: ['不要把往年条件视为当前条件。', '语言要求、资格与流程只发布已确认内容。', '未确认项目保持为空，不作推测。'],
    accommodationTitle: '住宿以年度正式信息为准', accommodationText: '住宿类型、期间、费用与使用条件确认后发布。',
    facts: [{ label: '项目名称', value: offers.rsjp.officialName, status: '已确认' }, { label: '校区', value: '衣笠校区 · 京都', status: '已确认' }, { label: `${offers.rsjp.academicYear}日期`, value: '确认后发布', status: '待确认' }, { label: '费用', value: '确认后发布', status: '待确认' }],
    nextTitle: `计划参加${offers.rsjp.academicYear} RSJP？`, nextText: '确认后的日期与申请信息会更新在本页。',
  },
  'rsjp-express': {
    family: '日语与日本文化', title: `RSJP Express ${offers['rsjp-express'].academicYear} 夏季项目｜立命馆大学`,
    description: `更短、更集中的夏季日语项目。${offers['rsjp-express'].academicYear}年度日期、费用和申请条件将在确认后发布。`,
    heroAlt: '在京都参加短期文化学习的学生', kicker: `${offers['rsjp-express'].academicYear} Summer Express · 日语与日本文化`,
    headline: '时间更短，日语学习更集中。', lead: 'RSJP Express把日语课程、文化学习与校园体验集中在更短的夏季项目中。',
    campus: '衣笠校区 · 京都', status: 'pending', statusLabel: `${offers['rsjp-express'].academicYear}年度详细信息待确认`, statusNote: '项目名称与校区已确认；年度运营信息确认后发布。',
    overviewTitle: '短期集中，但学习重点清晰', overviewText: '保留日语与日本文化学习核心，同时缩短参加时间。',
    academicTitle: '集中型日语学习', academicIntro: '具体学习时数和活动安排确认后公布。', academicItems: ['集中安排日语学习。', '以文化学习补充语言学习。', '体验京都大学校园生活。'],
    eligibilityTitle: '申请资格与年度募集信息同时公布', eligibilityItems: ['年度条件可能调整。', '语言要求与流程确认后发布。', '不会沿用往年条件。'],
    accommodationTitle: '住宿只发布年度确认内容', accommodationText: '住宿可用性、期间、费用与条件确认后发布。',
    facts: [{ label: '项目名称', value: offers['rsjp-express'].officialName, status: '已确认' }, { label: '校区', value: '衣笠校区 · 京都', status: '已确认' }, { label: `${offers['rsjp-express'].academicYear}日期`, value: '确认后发布', status: '待确认' }, { label: '费用', value: '确认后发布', status: '待确认' }],
    nextTitle: `关注RSJP Express ${offers['rsjp-express'].academicYear}？`, nextText: '年度信息确认后会更新在本页。',
  },
  rwjp: {
    family: '日语与日本文化', title: `${offers.rwjp.academicYear} RWJP｜立命馆大学冬季日语项目`, description: `${offers.rwjp.academicYear} RWJP在京都衣笠校区举行，日期为${range(rd?.start, rd?.end)}。`,
    heroAlt: '参加立命馆大学冬季日语项目的学生', kicker: `${offers.rwjp.academicYear} · Winter · 日语与日本文化`, headline: '在冬季京都，用五周时间深入学习日语。',
    lead: 'RWJP以日语学习为核心，将文化学习、校园生活与京都日常中的实际使用结合起来。', campus: '衣笠校区 · 京都', status: 'confirmed',
    statusLabel: `${offers.rwjp.academicYear}核心信息已确认`, statusNote: `日期、申请期、费用、学习时数、住宿与主要条件已确认。申请期为${range(ra?.start, ra?.end)}。`,
    overviewTitle: '从课堂到京都生活，连续五周学习与实践', overviewText: '零基础可以申请，但开始前必须能阅读平假名和片假名；JLPT N1持有者不符合申请条件。',
    academicTitle: '系统日语课程＋文化学习', academicIntro: '日语学习57.5小时，文化学习990分钟。', academicItems: ['日语课程57.5小时。', '文化学习990分钟。', '在校园和京都生活中实践所学。'],
    eligibilityTitle: '申请前请确认基本资格', eligibilityItems: ['从申请到参加期间须为大学或研究生院在籍学生；非全日制也可。', '零基础可申请，但开始前须能阅读平假名和片假名。', 'JLPT N1持有者不可申请。'],
    accommodationTitle: '可选择大将军宿舍', accommodationText: `宿舍费${yen(rdf)}，入住${fmt(offers.rwjp.checkIn)}，退房${fmt(offers.rwjp.checkOut)}。`,
    facts: [{ label: '项目日期', value: range(rd?.start, rd?.end), status: '已确认' }, { label: '申请期', value: range(ra?.start, ra?.end), status: '已确认' }, { label: '项目费用', value: yen(rf), status: '已确认' }, { label: '日语学习', value: '57.5小时', status: '已确认' }, { label: '文化学习', value: '990分钟', status: '已确认' }, { label: '宿舍费', value: yen(rdf), status: '已确认' }, { label: '付款后退款扣除', value: offers.rwjp.refundDeductionJPY === null ? '待确认' : `${yen(offers.rwjp.refundDeductionJPY)}＋无法退还的已安排费用`, status: offers.rwjp.refundDeductionJPY === null ? '待确认' : '已确认' }],
    nextTitle: `准备申请${offers.rwjp.academicYear} RWJP？`, nextText: '请再次确认资格、申请期、费用、住宿和最新官方说明。',
  },
  'rwjp-express': {
    family: '日语与日本文化', title: `${offers['rwjp-express'].academicYear} RWJP Express｜立命馆大学`, description: `${offers['rwjp-express'].academicYear} RWJP Express在衣笠校区举行，日期为${range(e.dates?.start, e.dates?.end)}。`,
    heroAlt: '参加RWJP Express短期日语项目的学生', kicker: `${offers['rwjp-express'].academicYear} · Winter Express · 日语与日本文化`, headline: '用更短时间，集中体验日语学习与京都校园生活。',
    lead: '密集日语课程、文化学习与校园体验集中在约两周内。', campus: '衣笠校区 · 京都', status: 'confirmed', statusLabel: `${offers['rwjp-express'].academicYear}主要信息已确认`, statusNote: '日期、最低开班人数、学习时数、住宿基本条件与退款扣除规则已确认。',
    overviewTitle: '短期、集中、以日语学习为核心', overviewText: '适合希望在较短时间内集中学习日语并体验京都校园生活的学生。',
    academicTitle: '22.5小时日语＋360分钟文化学习', academicIntro: '日语课程1,350分钟，文化学习360分钟。', academicItems: ['日语课程1,350分钟。', '文化学习360分钟。', '结合校园与京都体验。'],
    eligibilityTitle: '面向大学与研究生院在籍学生', eligibilityItems: ['日语初学者可以申请。', '开始前须能阅读平假名和片假名。', offers['rwjp-express'].minimumParticipants === null ? '最低开班人数待确认。' : `最低开班人数${offers['rwjp-express'].minimumParticipants}人。`],
    accommodationTitle: '可使用大将军宿舍', accommodationText: '原则上多人入住，房间分配由大学决定。',
    facts: [{ label: '项目日期', value: range(e.dates?.start, e.dates?.end), status: '已确认' }, { label: '最低开班人数', value: offers['rwjp-express'].minimumParticipants === null ? '待确认' : `${offers['rwjp-express'].minimumParticipants}人`, status: offers['rwjp-express'].minimumParticipants === null ? '待确认' : '已确认' }, { label: '日语学习', value: '22.5小时', status: '已确认' }, { label: '文化学习', value: '360分钟', status: '已确认' }, { label: '付款后退款扣除', value: offers['rwjp-express'].refundDeductionJPY === null ? '待确认' : `${yen(offers['rwjp-express'].refundDeductionJPY)}＋无法退还的已安排费用`, status: offers['rwjp-express'].refundDeductionJPY === null ? '待确认' : '已确认' }],
    nextTitle: `想参加${offers['rwjp-express'].academicYear} RWJP Express？`, nextText: '申请前请确认最终募集要项与住宿信息。',
  },
  rdsp: {
    family: '数据科学·AI·机器人', title: `RDSP ${offers.rdsp.academicYear}｜立命馆大学短期专业项目`, description: '以AI、Data Science与Robotics为核心的短期专业项目，当前年度条件按Working plan管理。',
    heroAlt: '在大阪茨木校区参加专业学习的学生', kicker: `${offers.rdsp.academicYear} · Professional Theme · OIC`, headline: '从AI、数据科学与机器人技术理解未来社会。', lead: '在大阪茨木校区，通过专业讲座、学生交流与协作学习探索技术主题。',
    campus: '大阪茨木校区（OIC）', status: 'working', statusLabel: `${offers.rdsp.academicYear} Working plan`, statusNote: '核心主题与部分结构已确认，年度日期、费用及最终募集条件仍待确认。',
    overviewTitle: '把专业主题与校园协作学习连接起来', overviewText: '包含立命馆大学教师讲座、学生活动、Buddy活动和Microsoft Base Ritsumeikan相关协作学习。',
    academicTitle: 'AI · Data Science · Robotics', academicIntro: '当前计划为6节95分钟讲座及2节95分钟Student Events。', academicItems: ['AI、Data Science与Robotics。', '立命馆大学教师讲座。', '学生交流与Microsoft Base协作学习。'],
    eligibilityTitle: '以年度确认后的募集条件为准', eligibilityItems: ['面向海外大学的大学生、研究生为主。', '未确定教师与Topics标注Tentative。', '日期、费用与最终条件不作推测。'],
    accommodationTitle: '一般个人参加者以外部住宿为前提', accommodationText: 'OIC Seminar House不以无带队人员的一般个人参加者使用为前提。',
    facts: [{ label: '校区', value: '大阪茨木校区（OIC）', status: '已确认' }, { label: '主题', value: 'AI · Data Science · Robotics', status: 'Working plan' }, { label: '讲座', value: '570分钟（95分钟×6）', status: 'Working plan' }, { label: 'Student Events', value: '190分钟（95分钟×2）', status: 'Working plan' }, { label: '日期与费用', value: '确认后发布', status: '待确认' }],
    nextTitle: '正在考虑RDSP？', nextText: '请以本页后续更新的年度确认信息为准。',
  },
  rbmp: {
    family: '商业与管理', title: `${offers.rbmp.academicYear} RBMP｜立命馆大学商业与管理项目`, description: `${offers.rbmp.academicYear} RBMP计划于${range(b.dates?.start, b.dates?.end)}在大阪茨木校区举行，项目费${yen(offers.rbmp.programmeFeeJPY)}。`,
    heroAlt: '参加立命馆大学商业与管理项目的学生', kicker: `${offers.rbmp.academicYear} · Business & Management · OIC`, headline: '在大阪茨木校区学习商业与管理，并与日本学生交流。', lead: '结合商业与管理课程、文化体验、学生共学与社会参访。',
    campus: '大阪茨木校区（OIC）', status: 'working', statusLabel: `${offers.rbmp.academicYear}运营方案`, statusNote: '日期、费用、最低开班人数和主要结构为当前Working plan；最终募集信息以正式发布为准。',
    overviewTitle: '商业课程＋共学＋日本社会体验', overviewText: '计划包括8节商业与管理课程，以及茶道、曲棍球、Microsoft Base共学和杯面博物馆参访。',
    academicTitle: '8节商业与管理课程及共学活动', academicIntro: '以商业与管理为主轴，同时安排文化与学生互动。', academicItems: ['商业与管理课程8节。', '茶道、曲棍球与Microsoft Base共学。', '参访杯面博物馆。'],
    eligibilityTitle: '参加对象因类别而不同', eligibilityItems: ['包括SWU联合参加、一般国际学生及附属高中生。', '海外一般参加者以大学生、研究生为对象。', offers.rbmp.minimumParticipants === null ? '最低开班人数待确认。' : `最低开班人数${offers.rbmp.minimumParticipants}人。`],
    accommodationTitle: '个人与带队团体住宿安排分开', accommodationText: 'OIC Seminar House面向有带队人员的团体另行说明；一般个人参加者原则上自行安排外部住宿。',
    facts: [{ label: '项目日期', value: range(b.dates?.start, b.dates?.end), status: '运营方案' }, { label: '项目费用', value: yen(offers.rbmp.programmeFeeJPY), status: offers.rbmp.programmeFeeJPY === null ? '待确认' : '运营方案' }, { label: '最低开班人数', value: offers.rbmp.minimumParticipants === null ? '待确认' : `${offers.rbmp.minimumParticipants}人`, status: offers.rbmp.minimumParticipants === null ? '待确认' : '运营方案' }, { label: '商业与管理课程', value: '8节', status: '运营方案' }, { label: '校区', value: '大阪茨木校区（OIC）', status: '已确认' }],
    nextTitle: `计划参加${offers.rbmp.academicYear} RBMP？`, nextText: '正式申请前请确认最终募集要项、住宿方式与年度安排。',
  },
};

const tw: Record<ChineseProgrammeId, LocalPage> = {
  rsjp: {
    family: '日語與日本文化', title: `RSJP ${offers.rsjp.academicYear} 夏季課程｜立命館大學`, description: `在京都立命館大學學習日語與日本文化。${offers.rsjp.academicYear}年度日期、費用、申請期間與住宿資訊將於正式確認後公布。`,
    heroAlt: '參加立命館大學短期日語課程的學生', kicker: `${offers.rsjp.academicYear} Summer · 日語與日本文化`, headline: '在京都學日語，把課堂所學帶進真實生活。', lead: 'RSJP以日語學習為核心，連結校園生活、文化體驗與京都日常。', campus: '衣笠校區 · 京都', status: 'pending', statusLabel: `${offers.rsjp.academicYear}年度詳細資訊待確認`, statusNote: '課程名稱與校區已確認；年度日期、費用、申請期間與住宿只在正式確認後公布。',
    overviewTitle: '在京都體驗日語學習與大學生活', overviewText: '不會把往年條件自動沿用到目前年度。', academicTitle: '日語學習與文化脈絡並重', academicIntro: `${offers.rsjp.academicYear}年度實際課時與活動安排確認後公布。`, academicItems: ['以日語課程為學習核心。', '透過文化學習理解語言使用脈絡。', '在日本大學校園體驗短期留學生活。'],
    eligibilityTitle: `${offers.rsjp.academicYear}年度申請資格確認後公布`, eligibilityItems: ['請勿把往年條件視為目前條件。', '語言要求、資格與流程只公布已確認內容。', '未確認項目保持空白，不作推測。'], accommodationTitle: '住宿以年度正式資訊為準', accommodationText: '住宿類型、期間、費用與使用條件確認後公布。', facts: [{ label: '課程名稱', value: offers.rsjp.officialName, status: '已確認' }, { label: '校區', value: '衣笠校區 · 京都', status: '已確認' }, { label: `${offers.rsjp.academicYear}日期`, value: '確認後公布', status: '待確認' }, { label: '費用', value: '確認後公布', status: '待確認' }], nextTitle: `正在規劃${offers.rsjp.academicYear} RSJP？`, nextText: '確認後的日期與申請資訊會更新在本頁。',
  },
  'rsjp-express': {
    family: '日語與日本文化', title: `RSJP Express ${offers['rsjp-express'].academicYear} 夏季課程｜立命館大學`, description: `時間較短、學習更集中的夏季日語課程。${offers['rsjp-express'].academicYear}年度日期、費用與申請資格將於確認後公布。`, heroAlt: '在京都參加短期文化學習的學生', kicker: `${offers['rsjp-express'].academicYear} Summer Express · 日語與日本文化`, headline: '時間更短，日語學習更集中。', lead: 'RSJP Express將日語課程、文化學習與校園體驗集中在較短的夏季課程中。', campus: '衣笠校區 · 京都', status: 'pending', statusLabel: `${offers['rsjp-express'].academicYear}年度詳細資訊待確認`, statusNote: '課程名稱與校區已確認；年度營運資訊確認後公布。', overviewTitle: '短期集中，但學習重點清楚', overviewText: '保留日語與日本文化學習核心，同時縮短參加期間。', academicTitle: '集中型日語學習', academicIntro: '實際學習時數與活動安排確認後公布。', academicItems: ['集中安排日語學習。', '以文化學習補充語言學習。', '體驗京都大學校園生活。'], eligibilityTitle: '申請資格與年度招生資訊一併公布', eligibilityItems: ['年度條件可能調整。', '語言要求與流程確認後公布。', '不沿用往年條件。'], accommodationTitle: '住宿只公布年度確認內容', accommodationText: '住宿可用性、期間、費用與條件確認後公布。', facts: [{ label: '課程名稱', value: offers['rsjp-express'].officialName, status: '已確認' }, { label: '校區', value: '衣笠校區 · 京都', status: '已確認' }, { label: `${offers['rsjp-express'].academicYear}日期`, value: '確認後公布', status: '待確認' }, { label: '費用', value: '確認後公布', status: '待確認' }], nextTitle: `關注RSJP Express ${offers['rsjp-express'].academicYear}？`, nextText: '年度資訊確認後會更新在本頁。',
  },
  rwjp: {
    family: '日語與日本文化', title: `${offers.rwjp.academicYear} RWJP｜立命館大學冬季日語課程`, description: `${offers.rwjp.academicYear} RWJP於京都衣笠校區舉行，日期為${range(rd?.start, rd?.end, '待確認')}。`, heroAlt: '參加立命館大學冬季日語課程的學生', kicker: `${offers.rwjp.academicYear} · Winter · 日語與日本文化`, headline: '在冬季京都，用五週時間深入學習日語。', lead: 'RWJP以日語學習為核心，連結文化學習、校園生活與京都日常中的實際使用。', campus: '衣笠校區 · 京都', status: 'confirmed', statusLabel: `${offers.rwjp.academicYear}核心資訊已確認`, statusNote: `日期、申請期間、費用、學習時數、住宿與主要條件已確認。申請期間為${range(ra?.start, ra?.end, '待確認')}。`, overviewTitle: '從教室到京都生活，連續五週學習與實踐', overviewText: '零基礎可以申請，但開始前必須能閱讀平假名與片假名；JLPT N1持有者不符合申請資格。', academicTitle: '系統化日語課程＋文化學習', academicIntro: '日語學習57.5小時，文化學習990分鐘。', academicItems: ['日語課程57.5小時。', '文化學習990分鐘。', '在校園與京都生活中實際使用所學。'], eligibilityTitle: '申請前請確認基本資格', eligibilityItems: ['從申請到參加期間須為大學或研究所在學學生；非全日制亦可。', '零基礎可申請，但開始前須能閱讀平假名與片假名。', 'JLPT N1持有者不可申請。'], accommodationTitle: '可選擇大將軍宿舍', accommodationText: `宿舍費${yen(rdf, '待確認')}，入住${fmt(offers.rwjp.checkIn, '待確認')}，退房${fmt(offers.rwjp.checkOut, '待確認')}。`, facts: [{ label: '課程日期', value: range(rd?.start, rd?.end, '待確認'), status: '已確認' }, { label: '申請期間', value: range(ra?.start, ra?.end, '待確認'), status: '已確認' }, { label: '課程費用', value: yen(rf, '待確認'), status: '已確認' }, { label: '日語學習', value: '57.5小時', status: '已確認' }, { label: '文化學習', value: '990分鐘', status: '已確認' }, { label: '宿舍費', value: yen(rdf, '待確認'), status: '已確認' }, { label: '付款後退費扣除', value: offers.rwjp.refundDeductionJPY === null ? '待確認' : `${yen(offers.rwjp.refundDeductionJPY, '待確認')}＋無法退還的已安排費用`, status: offers.rwjp.refundDeductionJPY === null ? '待確認' : '已確認' }], nextTitle: `準備申請${offers.rwjp.academicYear} RWJP？`, nextText: '請再次確認資格、申請期間、費用、住宿與最新官方說明。',
  },
  'rwjp-express': {
    family: '日語與日本文化', title: `${offers['rwjp-express'].academicYear} RWJP Express｜立命館大學`, description: `${offers['rwjp-express'].academicYear} RWJP Express於衣笠校區舉行，日期為${range(e.dates?.start, e.dates?.end, '待確認')}。`, heroAlt: '參加RWJP Express短期日語課程的學生', kicker: `${offers['rwjp-express'].academicYear} · Winter Express · 日語與日本文化`, headline: '用更短時間，集中體驗日語學習與京都校園生活。', lead: '密集日語課程、文化學習與校園體驗集中在約兩週內。', campus: '衣笠校區 · 京都', status: 'confirmed', statusLabel: `${offers['rwjp-express'].academicYear}主要資訊已確認`, statusNote: '日期、最低開班人數、學習時數、住宿基本條件與退費扣除規則已確認。', overviewTitle: '短期、集中、以日語學習為核心', overviewText: '適合希望在較短時間內集中學習日語並體驗京都校園生活的學生。', academicTitle: '22.5小時日語＋360分鐘文化學習', academicIntro: '日語課程1,350分鐘，文化學習360分鐘。', academicItems: ['日語課程1,350分鐘。', '文化學習360分鐘。', '結合校園與京都體驗。'], eligibilityTitle: '以大學與研究所在學學生為對象', eligibilityItems: ['日語初學者可以申請。', '開始前須能閱讀平假名與片假名。', offers['rwjp-express'].minimumParticipants === null ? '最低開班人數待確認。' : `最低開班人數${offers['rwjp-express'].minimumParticipants}人。`], accommodationTitle: '可使用大將軍宿舍', accommodationText: '原則上多人入住，房間配置由大學決定。', facts: [{ label: '課程日期', value: range(e.dates?.start, e.dates?.end, '待確認'), status: '已確認' }, { label: '最低開班人數', value: offers['rwjp-express'].minimumParticipants === null ? '待確認' : `${offers['rwjp-express'].minimumParticipants}人`, status: offers['rwjp-express'].minimumParticipants === null ? '待確認' : '已確認' }, { label: '日語學習', value: '22.5小時', status: '已確認' }, { label: '文化學習', value: '360分鐘', status: '已確認' }, { label: '付款後退費扣除', value: offers['rwjp-express'].refundDeductionJPY === null ? '待確認' : `${yen(offers['rwjp-express'].refundDeductionJPY, '待確認')}＋無法退還的已安排費用`, status: offers['rwjp-express'].refundDeductionJPY === null ? '待確認' : '已確認' }], nextTitle: `想參加${offers['rwjp-express'].academicYear} RWJP Express？`, nextText: '申請前請確認最終招生簡章與住宿資訊。',
  },
  rdsp: {
    family: '資料科學·AI·機器人', title: `RDSP ${offers.rdsp.academicYear}｜立命館大學短期專業課程`, description: '以AI、Data Science與Robotics為核心的短期專業課程，目前年度條件以Working plan管理。', heroAlt: '在大阪茨木校區參加專業學習的學生', kicker: `${offers.rdsp.academicYear} · Professional Theme · OIC`, headline: '從AI、資料科學與機器人理解未來社會。', lead: '在大阪茨木校區，透過專業講座、學生交流與協作學習探索科技主題。', campus: '大阪茨木校區（OIC）', status: 'working', statusLabel: `${offers.rdsp.academicYear} Working plan`, statusNote: '核心主題與部分架構已確認，年度日期、費用與最終招生條件仍待確認。', overviewTitle: '把專業主題與校園協作學習連結起來', overviewText: '包含立命館大學教師講座、學生活動、Buddy活動與Microsoft Base Ritsumeikan相關協作學習。', academicTitle: 'AI · Data Science · Robotics', academicIntro: '目前規劃為6堂95分鐘講座及2堂95分鐘Student Events。', academicItems: ['AI、Data Science與Robotics。', '立命館大學教師講座。', '學生交流與Microsoft Base協作學習。'], eligibilityTitle: '以年度確認後的招生條件為準', eligibilityItems: ['以海外大學的大學生與研究生為主要對象。', '未確定教師與Topics標示Tentative。', '日期、費用與最終條件不作推測。'], accommodationTitle: '一般個人參加者以校外住宿為前提', accommodationText: 'OIC Seminar House不以無帶隊人員的一般個人參加者使用為前提。', facts: [{ label: '校區', value: '大阪茨木校區（OIC）', status: '已確認' }, { label: '主題', value: 'AI · Data Science · Robotics', status: 'Working plan' }, { label: '講座', value: '570分鐘（95分鐘×6）', status: 'Working plan' }, { label: 'Student Events', value: '190分鐘（95分鐘×2）', status: 'Working plan' }, { label: '日期與費用', value: '確認後公布', status: '待確認' }], nextTitle: '正在考慮RDSP？', nextText: '請以本頁後續更新的年度確認資訊為準。',
  },
  rbmp: {
    family: '商業與管理', title: `${offers.rbmp.academicYear} RBMP｜立命館大學商業與管理課程`, description: `${offers.rbmp.academicYear} RBMP預計於${range(b.dates?.start, b.dates?.end, '待確認')}在大阪茨木校區舉行，課程費${yen(offers.rbmp.programmeFeeJPY, '待確認')}。`, heroAlt: '參加立命館大學商業與管理課程的學生', kicker: `${offers.rbmp.academicYear} · Business & Management · OIC`, headline: '在大阪茨木校區學習商業與管理，並與日本學生交流。', lead: '結合商業與管理課程、文化體驗、學生共學與社會參訪。', campus: '大阪茨木校區（OIC）', status: 'working', statusLabel: `${offers.rbmp.academicYear}營運方案`, statusNote: '日期、費用、最低開班人數與主要架構為目前Working plan；最終招生資訊以正式公布為準。', overviewTitle: '商業課程＋共學＋日本社會體驗', overviewText: '規劃8堂商業與管理課程，以及茶道、曲棍球、Microsoft Base共學與杯麵博物館參訪。', academicTitle: '8堂商業與管理課程及共學活動', academicIntro: '以商業與管理為主軸，同時安排文化與學生互動。', academicItems: ['商業與管理課程8堂。', '茶道、曲棍球與Microsoft Base共學。', '參訪杯麵博物館。'], eligibilityTitle: '參加對象依類別而不同', eligibilityItems: ['包括SWU聯合參加、一般國際學生及附屬高中生。', '海外一般參加者以大學生、研究生為對象。', offers.rbmp.minimumParticipants === null ? '最低開班人數待確認。' : `最低開班人數${offers.rbmp.minimumParticipants}人。`], accommodationTitle: '個人與帶隊團體住宿安排分開', accommodationText: 'OIC Seminar House可針對有帶隊人員的團體另行說明；一般個人參加者原則上自行安排校外住宿。', facts: [{ label: '課程日期', value: range(b.dates?.start, b.dates?.end, '待確認'), status: '營運方案' }, { label: '課程費用', value: yen(offers.rbmp.programmeFeeJPY, '待確認'), status: offers.rbmp.programmeFeeJPY === null ? '待確認' : '營運方案' }, { label: '最低開班人數', value: offers.rbmp.minimumParticipants === null ? '待確認' : `${offers.rbmp.minimumParticipants}人`, status: offers.rbmp.minimumParticipants === null ? '待確認' : '營運方案' }, { label: '商業與管理課程', value: '8堂', status: '營運方案' }, { label: '校區', value: '大阪茨木校區（OIC）', status: '已確認' }], nextTitle: `正在規劃${offers.rbmp.academicYear} RBMP？`, nextText: '正式申請前請確認最終招生簡章、住宿方式與年度安排。',
  },
};

export const getChineseProgrammePages = (locale: ChineseLocale): Record<ChineseProgrammeId, ChineseProgrammePage> => {
  const local = locale === 'zh-CN' ? cn : tw;
  return Object.fromEntries((Object.keys(local) as ChineseProgrammeId[]).map((id) => [id, { id, code: codes[id], name: names[id], heroImage: images[id], ...local[id] }])) as Record<ChineseProgrammeId, ChineseProgrammePage>;
};

export const chineseHomeCopy = {
  'zh-CN': {
    prefix: 'zh-cn', heroEyebrow: '在立命馆学习，在日本生活。', heroTitle: ['短期留学，', '把课堂连接到真实世界。'], heroLead: '选择适合自己的项目，在校园学习、与学生交流，并从京都与大阪理解日本。',
    find: '查找项目', why: '为什么选择立命馆', individual: '个人参加项目', finderTitle: '从你想学什么开始选择', finderLead: '日语与日本文化 · 专业主题学习', current: '当前募集', currentTitle: '先查看当前重点项目', currentBody: '日期、费用、资格与住宿只显示已确认或明确标注为Working plan的信息。', japanese: '日语与日本文化', themed: '专业主题', recruiting: '当前项目', application: '申请', dates: '日期', details: '查看详情', summer: `${offers.rsjp.academicYear} 夏季项目`, summerBody: 'RSJP与RSJP Express的年度运营信息将在确认后发布。', custom: '面向大学与教育机构', customTitle: '根据贵校的教学目的共同设计项目', customBody: '可以围绕学术主题、期间、人数、课程、学生交流与文化学习共同设计。', experienceTitle: '在校园学习，与人连接，在真实环境中理解日本。', globalTitle: '来自世界各地大学的学生曾参加我们的短期项目', supportTitle: '下一步，从确认项目详情开始', supportBody: '申请前请确认对应年度的日期、费用、资格、住宿与申请程序。',
  },
  'zh-TW': {
    prefix: 'zh-tw', heroEyebrow: '在立命館學習，在日本生活。', heroTitle: ['短期留學，', '把課堂連結到真實世界。'], heroLead: '選擇適合自己的課程，在校園學習、與學生交流，並從京都與大阪理解日本。',
    find: '查找課程', why: '為什麼選擇立命館', individual: '個人參加課程', finderTitle: '從你想學什麼開始選擇', finderLead: '日語與日本文化 · 專業主題學習', current: '目前招生', currentTitle: '先查看目前重點課程', currentBody: '日期、費用、資格與住宿只顯示已確認或明確標示為Working plan的資訊。', japanese: '日語與日本文化', themed: '專業主題', recruiting: '目前課程', application: '申請', dates: '日期', details: '查看詳細資訊', summer: `${offers.rsjp.academicYear} 夏季課程`, summerBody: 'RSJP與RSJP Express的年度營運資訊將於確認後公布。', custom: '面向大學與教育機構', customTitle: '依貴校教學目的共同設計課程', customBody: '可依學術主題、期間、人數、課程、學生交流與文化學習共同設計。', experienceTitle: '在校園學習、與人連結，並在真實環境中理解日本。', globalTitle: '來自世界各地大學的學生曾參加我們的短期課程', supportTitle: '下一步，從確認課程詳細資訊開始', supportBody: '申請前請確認對應年度的日期、費用、資格、住宿與申請程序。',
  },
} as const;
