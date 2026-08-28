import { rwjp2027Facts, isKnownFact } from './rwjp';
import { coreProgramme2027Facts } from './core-programme-2027-facts';
import { getCurrentOfferingFact } from './current-offerings';

export type KoreanProgrammeStatus = 'confirmed' | 'working' | 'pending';
export interface KoreanProgrammeHighlight { value: string; label: string; }
export interface KoreanProgrammeFact { key: string; label: string; value: string; status?: '확정' | '검토 중' | '확인 예정'; }
export interface KoreanProgrammePage {
  id: 'rsjp' | 'rsjp-express' | 'rwjp' | 'rwjp-express' | 'rdsp' | 'rbmp';
  code: string; name: string; family: string; title: string; description: string;
  japaneseHref: string; englishHref: string; heroImage: string; heroAlt: string;
  kicker: string; headline: string; lead: string; campus: string;
  status: KoreanProgrammeStatus; statusLabel: string; statusNote: string;
  overviewTitle: string; overviewText: string; highlights: KoreanProgrammeHighlight[];
  academicTitle: string; academicIntro: string; academicItems: string[];
  eligibilityTitle: string; eligibilityItems: string[];
  accommodationTitle: string; accommodationText: string; facts: KoreanProgrammeFact[];
  nextTitle: string; nextText: string; verificationNote: string;
}

const koDate = (iso?: string | null) => {
  if (!iso) return '추후 안내';
  const [year, month, day] = iso.split('-').map(Number);
  return `${year}년 ${month}월 ${day}일`;
};
const koRange = (start?: string | null, end?: string | null) => start && end ? `${koDate(start)} ~ ${koDate(end)}` : '추후 안내';
const koJPY = (value?: number | null) => value === null || value === undefined ? '추후 안내' : `JPY ${value.toLocaleString('en-US')}`;

const rwjp = rwjp2027Facts;
const rwjpExpress = coreProgramme2027Facts['rwjp-express'];
const rdsp = coreProgramme2027Facts.rdsp;
const rbmp = coreProgramme2027Facts.rbmp;
const rsjpOffering = getCurrentOfferingFact('rsjp')!;
const rsjpExpressOffering = getCurrentOfferingFact('rsjp-express')!;
const rwjpOffering = getCurrentOfferingFact('rwjp')!;
const rwjpExpressOffering = getCurrentOfferingFact('rwjp-express')!;
const rdspOffering = getCurrentOfferingFact('rdsp')!;
const rbmpOffering = getCurrentOfferingFact('rbmp')!;

const rwjpDates = isKnownFact(rwjp.programmeDates) ? rwjp.programmeDates.value : null;
const rwjpApplication = isKnownFact(rwjp.applicationPeriod) ? rwjp.applicationPeriod.value : null;
const rwjpFee = isKnownFact(rwjp.programmeFee) ? koJPY(rwjp.programmeFee.value) : '추후 안내';
const rwjpDormFee = isKnownFact(rwjp.accommodationFee) ? koJPY(rwjp.accommodationFee.value) : '추후 안내';
const rwjpRefund = koJPY(rwjpOffering.refundDeductionJPY);
const expressRefund = koJPY(rwjpExpressOffering.refundDeductionJPY);
const rbmpFee = koJPY(rbmpOffering.programmeFeeJPY);

export const koreanProgrammePages: Record<KoreanProgrammePage['id'], KoreanProgrammePage> = {
  rsjp: {
    id: 'rsjp', code: 'RSJP', name: 'Ritsumeikan Summer Japanese Program', family: '일본어·일본문화',
    title: `RSJP ${rsjpOffering.academicYear} 여름 프로그램 | 리츠메이칸대학교`,
    description: `교토의 리츠메이칸대학교에서 일본어와 일본문화를 배우는 RSJP. ${rsjpOffering.academicYear}년 일정과 모집 정보는 확인 후 공개합니다.`,
    japaneseHref: '/programs/rsjp/', englishHref: '/en/programs/rsjp/', heroImage: '/images/IMG_8178.JPG',
    heroAlt: '리츠메이칸대학교 단기 프로그램에서 일본어를 배우는 학생들',
    kicker: `${rsjpOffering.academicYear} Summer · 일본어·일본문화`, headline: '교토에서 일본어를 배우고, 일상 속에서 직접 사용해 보세요.',
    lead: 'RSJP는 일본어 학습을 중심으로 캠퍼스 생활, 문화 체험, 교토에서의 일상을 연결하는 여름 단기 프로그램입니다.',
    campus: '기누가사 캠퍼스 · 교토', status: 'pending', statusLabel: `${rsjpOffering.academicYear}년 세부 정보 확인 예정`,
    statusNote: `프로그램명과 캠퍼스는 확인되어 있습니다. ${rsjpOffering.academicYear}년 일정, 참가비, 지원 기간, 숙소는 공식 확인 후 공개합니다.`,
    overviewTitle: '일본어를 중심으로 교토와 캠퍼스를 함께 경험하는 여름 프로그램',
    overviewText: '과거 연도의 조건을 자동으로 이어 쓰지 않고, 해당 연도에 확인된 정보만 공개합니다.',
    highlights: [{ value: '교토', label: '학습 장소' }, { value: '일본어', label: '학습 중심' }, { value: String(rsjpOffering.academicYear), label: '다음 운영 연도' }],
    academicTitle: '일본어 학습과 문화적 맥락', academicIntro: `${rsjpOffering.academicYear}년 수업 시간과 활동은 확인 후 공개합니다.`,
    academicItems: ['일본어 학습을 중심에 둡니다.', '문화 학습으로 언어의 맥락을 이해합니다.', '일본 대학 캠퍼스에서 단기 유학 생활을 경험합니다.'],
    eligibilityTitle: `${rsjpOffering.academicYear}년 지원 자격은 확인 후 공개합니다.`,
    eligibilityItems: ['과거 연도 조건을 현재 조건으로 보지 않습니다.', '언어 요건과 지원 절차는 확인된 내용만 공개합니다.', '미확정 정보는 추정하지 않습니다.'],
    accommodationTitle: '숙소도 연도별 확인 정보를 따릅니다.', accommodationText: '숙소 유형, 기간, 비용과 이용 조건은 확인 후 공개합니다.',
    facts: [{ key: 'name', label: '프로그램명', value: rsjpOffering.officialName, status: '확정' }, { key: 'campus', label: '캠퍼스', value: '기누가사 캠퍼스 · 교토', status: '확정' }, { key: 'dates', label: `${rsjpOffering.academicYear}년 일정`, value: '확인 후 공개', status: '확인 예정' }, { key: 'fee', label: '참가비', value: '확인 후 공개', status: '확인 예정' }],
    nextTitle: `${rsjpOffering.academicYear} RSJP를 준비하고 있나요?`, nextText: '확정된 일정과 모집 정보는 이 페이지에서 업데이트합니다.',
    verificationNote: '연도별 운영 정보는 공식 확인 전에는 공개하지 않습니다.',
  },
  'rsjp-express': {
    id: 'rsjp-express', code: 'RSJP EXPRESS', name: 'RSJP Express', family: '일본어·일본문화',
    title: `RSJP Express ${rsjpExpressOffering.academicYear} | 리츠메이칸대학교`, description: `${rsjpExpressOffering.academicYear}년 여름의 짧고 집중적인 일본어 프로그램. 일정과 참가비는 확인 후 공개합니다.`,
    japaneseHref: '/programs/rsjp-express/', englishHref: '/en/programs/rsjp-express/', heroImage: '/images/IMG_5092.JPG', heroAlt: '교토에서 문화 학습에 참여하는 학생들',
    kicker: `${rsjpExpressOffering.academicYear} Summer Express · 일본어·일본문화`, headline: '기간은 짧게, 일본어 경험은 더 집중적으로.',
    lead: 'RSJP Express는 일본어, 문화 학습과 캠퍼스 경험을 짧은 여름 일정에 집중합니다.', campus: '기누가사 캠퍼스 · 교토', status: 'pending',
    statusLabel: `${rsjpExpressOffering.academicYear}년 세부 정보 확인 예정`, statusNote: `${rsjpExpressOffering.academicYear}년 일정, 참가비, 지원 자격과 숙소는 공식 확인 후 공개합니다.`,
    overviewTitle: '짧은 형식에도 학습의 중심은 분명합니다.', overviewText: '일본어와 일본문화라는 핵심을 유지하면서 참가 기간을 줄인 형식입니다.',
    highlights: [{ value: 'Express', label: '단기 집중형' }, { value: '교토', label: '학습 장소' }, { value: String(rsjpExpressOffering.academicYear), label: '다음 운영 연도' }],
    academicTitle: '집중형 일본어 학습', academicIntro: '구체적인 수업 시간과 활동은 확인 후 공개합니다.', academicItems: ['일본어 집중 학습', '문화 학습', '교토의 대학 캠퍼스 경험'],
    eligibilityTitle: '연도별 자격을 확인합니다.', eligibilityItems: ['과거 요건을 그대로 적용하지 않습니다.', '언어 요건과 절차는 확인 후 공개합니다.', '미확정 정보는 비워 둡니다.'],
    accommodationTitle: '숙소는 연도별로 확인합니다.', accommodationText: '숙소 이용 가능 여부, 기간과 비용을 확인 후 공개합니다.',
    facts: [{ key: 'name', label: '프로그램명', value: rsjpExpressOffering.officialName, status: '확정' }, { key: 'campus', label: '캠퍼스', value: '기누가사 캠퍼스 · 교토', status: '확정' }, { key: 'dates', label: `${rsjpExpressOffering.academicYear}년 일정`, value: '확인 후 공개', status: '확인 예정' }, { key: 'fee', label: '참가비', value: '확인 후 공개', status: '확인 예정' }],
    nextTitle: `${rsjpExpressOffering.academicYear} RSJP Express를 찾고 있나요?`, nextText: '연도별 확정 정보는 이 페이지에 반영합니다.', verificationNote: '공식 확인 전에는 연도별 운영 정보를 추정하지 않습니다.',
  },
  rwjp: {
    id: 'rwjp', code: 'RWJP', name: 'Ritsumeikan Winter Japanese Program', family: '일본어·일본문화',
    title: `${rwjpOffering.academicYear} RWJP | 리츠메이칸대학교 겨울 일본어 프로그램`, description: `${rwjpOffering.academicYear} RWJP는 교토 기누가사 캠퍼스에서 ${koRange(rwjpDates?.start, rwjpDates?.end)}에 운영됩니다.`,
    japaneseHref: '/programs/rwjp/', englishHref: '/en/programs/rwjp/', heroImage: '/images/IMG_8263.JPG', heroAlt: '리츠메이칸대학교 겨울 일본어 프로그램 참가 학생',
    kicker: `${rwjpOffering.academicYear} · Winter · 일본어·일본문화`, headline: '겨울 교토에서 5주 동안 일본어를 깊이 있게 배웁니다.',
    lead: 'RWJP는 일본어 학습을 중심으로 문화 학습, 캠퍼스 생활과 교토에서의 실제 사용을 연결합니다.', campus: '기누가사 캠퍼스 · 교토', status: 'confirmed',
    statusLabel: `${rwjpOffering.academicYear} 핵심 정보 확정`, statusNote: `일정, 지원 기간, 참가비, 학습 시간, 숙소와 주요 조건이 확인되었습니다. 지원 기간은 ${koRange(rwjpApplication?.start, rwjpApplication?.end)}입니다.`,
    overviewTitle: '교실에서 교토의 생활까지 이어지는 5주', overviewText: '일본어 초보자도 지원할 수 있지만 시작 전 히라가나와 가타카나를 읽을 수 있어야 하며 JLPT N1 보유자는 대상이 아닙니다.',
    highlights: [{ value: '57.5', label: '일본어 학습 시간' }, { value: '990', label: '문화 학습 분' }, { value: rwjpFee, label: '프로그램 참가비' }],
    academicTitle: '체계적인 일본어 수업과 문화 학습', academicIntro: '일본어 57.5시간, 문화 학습 990분을 중심으로 구성됩니다.', academicItems: ['일본어 수업 57.5시간', '문화 학습 990분', '캠퍼스와 교토 생활에서 실제로 사용하는 경험'],
    eligibilityTitle: '지원 전에 기본 자격을 확인하세요.', eligibilityItems: ['지원 시점부터 참가 시점까지 대학 또는 대학원에 재학해야 합니다. 파트타임 학생도 가능합니다.', '초보자도 지원할 수 있으나 시작 전 히라가나와 가타카나를 읽을 수 있어야 합니다.', 'JLPT N1 보유자는 지원 대상이 아닙니다.'],
    accommodationTitle: '다이쇼군 기숙사를 선택할 수 있습니다.', accommodationText: `기숙사비 ${rwjpDormFee}, 입실 ${koDate(rwjpOffering.checkIn)} / 퇴실 ${koDate(rwjpOffering.checkOut)}입니다.`,
    facts: [{ key: 'dates', label: '프로그램 일정', value: koRange(rwjpDates?.start, rwjpDates?.end), status: '확정' }, { key: 'application', label: '지원 기간', value: koRange(rwjpApplication?.start, rwjpApplication?.end), status: '확정' }, { key: 'fee', label: '프로그램 참가비', value: rwjpFee, status: '확정' }, { key: 'japanese', label: '일본어 학습', value: '57.5시간', status: '확정' }, { key: 'culture', label: '문화 학습', value: '990분', status: '확정' }, { key: 'dorm', label: '기숙사비', value: rwjpDormFee, status: '확정' }, { key: 'refund', label: '결제 후 환불 공제', value: `${rwjpRefund} + 환불 불가 기수배 비용`, status: '확정' }],
    nextTitle: `${rwjpOffering.academicYear} RWJP 지원을 준비하나요?`, nextText: '지원 자격, 기간, 비용, 숙소와 최신 안내를 다시 확인하세요.', verificationNote: `연도별 사실은 ${rwjpOffering.source} (${rwjpOffering.verifiedAt})에 근거합니다.`,
  },
  'rwjp-express': {
    id: 'rwjp-express', code: 'RWJP EXPRESS', name: 'RWJP Express', family: '일본어·일본문화',
    title: `${rwjpExpressOffering.academicYear} RWJP Express | 리츠메이칸대학교`, description: `${rwjpExpressOffering.academicYear} RWJP Express는 ${koRange(rwjpExpress.dates?.start, rwjpExpress.dates?.end)}에 기누가사 캠퍼스에서 진행됩니다.`,
    japaneseHref: '/programs/rwjp-express/', englishHref: '/en/programs/rwjp-express/', heroImage: '/images/IMG_1588.JPG', heroAlt: 'RWJP Express에 참가하는 학생들',
    kicker: `${rwjpExpressOffering.academicYear} · Winter Express · 일본어·일본문화`, headline: '더 짧은 기간에 일본어와 교토의 캠퍼스 생활을 집중적으로 경험합니다.', lead: '일본어 집중 수업, 문화 학습과 캠퍼스 경험을 약 2주에 담았습니다.',
    campus: '기누가사 캠퍼스 · 교토', status: 'confirmed', statusLabel: `${rwjpExpressOffering.academicYear} 주요 정보 확정`, statusNote: '일정, 최소 운영 인원, 학습 시간, 숙소 기본 조건과 환불 공제 규칙이 확인되었습니다.',
    overviewTitle: '짧고 집중적인 일본어 중심 프로그램', overviewText: '짧은 기간에 일본어를 집중적으로 배우며 교토의 캠퍼스 생활을 경험하고 싶은 학생을 위한 형식입니다.',
    highlights: [{ value: '22.5', label: '일본어 학습 시간' }, { value: '360', label: '문화 학습 분' }, { value: rwjpExpressOffering.minimumParticipants === null ? '추후 안내' : String(rwjpExpressOffering.minimumParticipants), label: '최소 운영 인원' }],
    academicTitle: '22.5시간 일본어 + 360분 문화 학습', academicIntro: '일본어 1,350분과 문화 학습 360분으로 구성됩니다.', academicItems: ['일본어 수업 1,350분', '문화 학습 360분', '캠퍼스와 교토 경험'],
    eligibilityTitle: '대학 및 대학원 재학생 대상', eligibilityItems: ['일본어 초보자도 지원할 수 있습니다.', '시작 전 히라가나와 가타카나를 읽을 수 있어야 합니다.', rwjpExpressOffering.minimumParticipants === null ? '최소 운영 인원은 확인 후 안내합니다.' : `최소 운영 인원은 ${rwjpExpressOffering.minimumParticipants}명입니다.`],
    accommodationTitle: '다이쇼군 기숙사를 이용할 수 있습니다.', accommodationText: '원칙적으로 여러 명이 함께 사용하며 방 배정은 대학이 결정합니다.',
    facts: [{ key: 'dates', label: '프로그램 일정', value: koRange(rwjpExpress.dates?.start, rwjpExpress.dates?.end), status: '확정' }, { key: 'minimum', label: '최소 운영 인원', value: rwjpExpressOffering.minimumParticipants === null ? '추후 안내' : `${rwjpExpressOffering.minimumParticipants}명`, status: rwjpExpressOffering.minimumParticipants === null ? '확인 예정' : '확정' }, { key: 'japanese', label: '일본어 학습', value: '22.5시간', status: '확정' }, { key: 'culture', label: '문화 학습', value: '360분', status: '확정' }, { key: 'payment', label: '결제 방법', value: rwjpExpressOffering.paymentMethod ?? '추후 안내', status: rwjpExpressOffering.paymentMethod ? '확정' : '확인 예정' }, { key: 'refund', label: '결제 후 환불 공제', value: rwjpExpressOffering.refundDeductionJPY === null ? '추후 안내' : `${expressRefund} + 환불 불가 기수배 비용`, status: rwjpExpressOffering.refundDeductionJPY === null ? '확인 예정' : '확정' }],
    nextTitle: `${rwjpExpressOffering.academicYear} RWJP Express를 생각하고 있나요?`, nextText: '신청 전 최종 모집 안내와 숙소 정보를 확인하세요.', verificationNote: `현재 사실 경계는 ${rwjpExpressOffering.source} (${rwjpExpressOffering.verifiedAt})입니다.`,
  },
  rdsp: {
    id: 'rdsp', code: 'RDSP', name: 'RDSP', family: '데이터사이언스·AI·로보틱스', title: `RDSP ${rdspOffering.academicYear} | 리츠메이칸대학교`,
    description: 'AI, Data Science, Robotics를 중심으로 하는 단기 전문 프로그램의 현재 Working plan입니다.', japaneseHref: '/programs/rdsp/', englishHref: '/en/programs/rdsp/', heroImage: '/images/IMG_3725.JPG', heroAlt: '오사카 이바라키 캠퍼스에서 전문 학습에 참여하는 학생들',
    kicker: `${rdspOffering.academicYear} · Professional Theme · OIC`, headline: 'AI, 데이터사이언스와 로보틱스로 미래 사회를 탐구합니다.', lead: '오사카 이바라키 캠퍼스에서 전문 강의, 학생 교류와 협업 학습을 연결합니다.', campus: '오사카 이바라키 캠퍼스 (OIC)', status: 'working', statusLabel: `${rdspOffering.academicYear} Working plan`, statusNote: '핵심 주제와 일부 학습 구조는 현재 계획에 포함되어 있으나 일정, 참가비와 최종 모집 조건은 아직 확정하지 않았습니다.',
    overviewTitle: '전문 주제와 캠퍼스 협업 학습', overviewText: '리츠메이칸 교원 강의, 학생 이벤트, Buddy 활동과 Microsoft Base Ritsumeikan에서의 협업 학습을 포함합니다.',
    highlights: [{ value: '570', label: '계획된 강의 분' }, { value: '190', label: '계획된 Student Events 분' }, { value: 'OIC', label: '캠퍼스' }],
    academicTitle: 'AI · Data Science · Robotics', academicIntro: '현재 95분 강의 6회와 95분 Student Events 2회를 계획하고 있습니다.', academicItems: ['AI, Data Science, Robotics', '리츠메이칸대학교 교원 강의', '학생 교류와 Microsoft Base 협업 학습'],
    eligibilityTitle: '최종 모집 조건은 확인 후 공개합니다.', eligibilityItems: ['해외 대학의 대학생·대학원생을 중심으로 합니다.', '미확정 교원과 주제는 Tentative로 표시합니다.', '날짜와 참가비는 추정하지 않습니다.'],
    accommodationTitle: '일반 개별 참가자는 외부 숙소를 전제로 합니다.', accommodationText: 'OIC Seminar House는 인솔자 없는 일반 개인 참가자의 숙소로 전제하지 않습니다.',
    facts: [{ key: 'campus', label: '캠퍼스', value: '오사카 이바라키 캠퍼스 (OIC)', status: '확정' }, { key: 'themes', label: '주제', value: 'AI · Data Science · Robotics', status: '검토 중' }, { key: 'lectures', label: '강의', value: '570분 (95분 × 6)', status: '검토 중' }, { key: 'events', label: 'Student Events', value: '190분 (95분 × 2)', status: '검토 중' }, { key: 'dates-fee', label: '일정·참가비', value: '확인 후 공개', status: '확인 예정' }],
    nextTitle: 'RDSP를 검토하고 있나요?', nextText: '연도별 확정 정보는 이후 이 페이지에서 업데이트합니다.', verificationNote: `Working plan 경계는 ${rdsp.verifiedAt} 확인. 최종 모집 정보는 별도 확정이 필요합니다.`,
  },
  rbmp: {
    id: 'rbmp', code: 'RBMP', name: 'Ritsumeikan Business Management Program', family: '비즈니스·매니지먼트', title: `${rbmpOffering.academicYear} RBMP | 리츠메이칸대학교`,
    description: `${rbmpOffering.academicYear} RBMP Working plan: ${koRange(rbmp.dates?.start, rbmp.dates?.end)}, 참가비 ${rbmpFee}, 오사카 이바라키 캠퍼스.`, japaneseHref: '/programs/rbmp/', englishHref: '/en/programs/rbmp/', heroImage: '/images/IMG_6091.JPG', heroAlt: '리츠메이칸대학교 비즈니스 매니지먼트 프로그램에 참가하는 학생들',
    kicker: `${rbmpOffering.academicYear} · Business & Management · OIC`, headline: '비즈니스와 매니지먼트를 배우고 일본 학생과 함께 경험합니다.', lead: '비즈니스 수업, 문화 체험, 학생 공동학습과 현장 방문을 결합합니다.', campus: '오사카 이바라키 캠퍼스 (OIC)', status: 'working', statusLabel: `${rbmpOffering.academicYear} 운영안`, statusNote: '일정, 참가비, 최소 운영 인원과 주요 구조는 현재 Working plan이며 최종 모집 정보는 공식 발표를 따릅니다.',
    overviewTitle: '비즈니스 수업 + 공동학습 + 일본 사회 경험', overviewText: '비즈니스·매니지먼트 수업 8회와 다도, 하키, Microsoft Base 공동학습, 컵누들 뮤지엄 방문을 계획합니다.',
    highlights: [{ value: '8', label: '비즈니스 수업' }, { value: rbmpFee, label: '계획 참가비' }, { value: rbmpOffering.minimumParticipants === null ? '추후 안내' : String(rbmpOffering.minimumParticipants), label: '계획 최소 인원' }],
    academicTitle: '비즈니스·매니지먼트 수업과 공동학습', academicIntro: '비즈니스와 매니지먼트를 중심으로 문화·학생 교류를 결합합니다.', academicItems: ['비즈니스·매니지먼트 수업 8회', '다도·하키·Microsoft Base 공동학습', '컵누들 뮤지엄 방문'],
    eligibilityTitle: '참가 유형에 따라 운영 조건이 다릅니다.', eligibilityItems: ['SWU 공동 참가, 일반 국제학생, 리츠메이칸 부속고 학생을 포함하는 운영안을 검토합니다.', '해외 일반 참가자는 대학생·대학원생을 대상으로 합니다.', rbmpOffering.minimumParticipants === null ? '최소 운영 인원은 확인 후 공개합니다.' : `최소 운영 인원은 ${rbmpOffering.minimumParticipants}명입니다.`],
    accommodationTitle: '개인 참가와 인솔 단체의 숙소를 구분합니다.', accommodationText: 'OIC Seminar House는 인솔자가 있는 단체에 별도 안내할 수 있으며, 일반 개인 참가자는 외부 숙소를 직접 준비하는 것을 원칙으로 합니다.',
    facts: [{ key: 'dates', label: '프로그램 일정', value: koRange(rbmp.dates?.start, rbmp.dates?.end), status: '검토 중' }, { key: 'fee', label: '프로그램 참가비', value: rbmpFee, status: rbmpOffering.programmeFeeJPY === null ? '확인 예정' : '검토 중' }, { key: 'minimum', label: '최소 운영 인원', value: rbmpOffering.minimumParticipants === null ? '추후 안내' : `${rbmpOffering.minimumParticipants}명`, status: rbmpOffering.minimumParticipants === null ? '확인 예정' : '검토 중' }, { key: 'classes', label: '비즈니스·매니지먼트 수업', value: '8회', status: '검토 중' }, { key: 'campus', label: '캠퍼스', value: '오사카 이바라키 캠퍼스 (OIC)', status: '확정' }],
    nextTitle: `${rbmpOffering.academicYear} RBMP를 검토하고 있나요?`, nextText: '정식 신청 전 최종 모집요강, 숙소와 연도별 일정을 확인하세요.', verificationNote: `현재 Working plan 경계는 ${rbmp.verifiedAt} 확인.`,
  },
};

export const getKoreanProgrammePage = (id: KoreanProgrammePage['id']) => koreanProgrammePages[id];
