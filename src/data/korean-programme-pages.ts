import { rwjp2027Facts, isKnownFact } from './rwjp';
import { coreProgramme2027Facts } from './core-programme-2027-facts';

export type KoreanProgrammeStatus = 'confirmed' | 'working' | 'pending';

export interface KoreanProgrammeHighlight {
  value: string;
  label: string;
}

export interface KoreanProgrammeFact {
  key: string;
  label: string;
  value: string;
  status?: '확정' | '검토 중' | '확인 예정';
}

export interface KoreanProgrammePage {
  id: 'rsjp' | 'rsjp-express' | 'rwjp' | 'rwjp-express' | 'rdsp' | 'rbmp';
  code: string;
  name: string;
  family: string;
  title: string;
  description: string;
  japaneseHref: string;
  englishHref: string;
  heroImage: string;
  heroAlt: string;
  kicker: string;
  headline: string;
  lead: string;
  campus: string;
  status: KoreanProgrammeStatus;
  statusLabel: string;
  statusNote: string;
  overviewTitle: string;
  overviewText: string;
  highlights: KoreanProgrammeHighlight[];
  academicTitle: string;
  academicIntro: string;
  academicItems: string[];
  eligibilityTitle: string;
  eligibilityItems: string[];
  accommodationTitle: string;
  accommodationText: string;
  facts: KoreanProgrammeFact[];
  nextTitle: string;
  nextText: string;
  verificationNote: string;
}

const koDate = (iso?: string | null) => {
  if (!iso) return '추후 안내';
  const [year, month, day] = iso.split('-').map(Number);
  return `${year}년 ${month}월 ${day}일`;
};

const koRange = (start?: string | null, end?: string | null) =>
  start && end ? `${koDate(start)} ~ ${koDate(end)}` : '추후 안내';

const rwjp = rwjp2027Facts;
const rwjpExpress = coreProgramme2027Facts['rwjp-express'];
const rdsp = coreProgramme2027Facts.rdsp;
const rbmp = coreProgramme2027Facts.rbmp;

const rwjpDates = isKnownFact(rwjp.programmeDates) ? rwjp.programmeDates.value : null;
const rwjpApplication = isKnownFact(rwjp.applicationPeriod) ? rwjp.applicationPeriod.value : null;
const rwjpFee = isKnownFact(rwjp.programmeFee) ? `JPY ${rwjp.programmeFee.value.toLocaleString('en-US')}` : '추후 안내';
const rwjpDormFee = isKnownFact(rwjp.accommodationFee) ? `JPY ${rwjp.accommodationFee.value.toLocaleString('en-US')}` : '추후 안내';

export const koreanProgrammePages: Record<KoreanProgrammePage['id'], KoreanProgrammePage> = {
  rsjp: {
    id: 'rsjp',
    code: 'RSJP',
    name: 'Ritsumeikan Summer Japanese Program',
    family: '일본어·일본문화',
    title: 'RSJP 2027 여름 프로그램 | 리츠메이칸대학교',
    description: '교토의 리츠메이칸대학교에서 일본어와 일본문화를 배우는 RSJP. 2027년 여름 프로그램의 연도별 일정과 모집 정보는 확인 후 공개합니다.',
    japaneseHref: '/programs/rsjp/',
    englishHref: '/en/programs/rsjp/',
    heroImage: '/images/IMG_8178.JPG',
    heroAlt: '리츠메이칸대학교 단기 프로그램에서 일본어를 배우는 학생들',
    kicker: '2027 Summer · 일본어·일본문화',
    headline: '교토에서 일본어를 배우고, 일상 속에서 직접 사용해 보세요.',
    lead: 'RSJP는 일본어 학습을 중심으로 캠퍼스 생활, 문화 체험, 교토에서의 일상을 연결하는 여름 단기 프로그램입니다.',
    campus: '기누가사 캠퍼스 · 교토',
    status: 'pending',
    statusLabel: '2027년 세부 정보 확인 예정',
    statusNote: '프로그램명과 기누가사 캠퍼스에서 운영되는 여름 일본어 프로그램이라는 점은 확인되어 있습니다. 2027년 일정, 참가비, 지원 기간, 숙소 등 연도별 정보는 공식 확인 후 공개합니다.',
    overviewTitle: '일본어를 중심으로 교토와 캠퍼스를 함께 경험하는 여름 프로그램',
    overviewText: '교실에서 배운 일본어를 캠퍼스와 지역에서 사용할 수 있도록 설계된 프로그램입니다. 과거 연도의 조건을 다음 연도에 자동으로 적용하지 않습니다.',
    highlights: [
      { value: 'Kyoto', label: '학습 지역' },
      { value: 'Japanese', label: '학습 중심' },
      { value: '2027 Summer', label: '다음 프로그램' },
    ],
    academicTitle: '일본어 학습과 문화적 맥락을 함께',
    academicIntro: '정확한 수업 시간과 활동 구성은 2027년 프로그램 확정 후 안내합니다.',
    academicItems: ['일본어 수업을 프로그램의 학습 중심으로 구성합니다.', '문화 학습을 통해 일본어를 사용하는 맥락을 넓힙니다.', '일본 대학의 캠퍼스 생활을 경험할 수 있도록 구성합니다.'],
    eligibilityTitle: '2027년 참가 조건은 공식 확인 후 공개합니다.',
    eligibilityItems: ['과거 연도의 지원 조건을 2027년 조건으로 간주하지 마세요.', '지원 자격, 일본어 수준, 지원 절차는 확인된 정보만 공개합니다.', '확인되지 않은 항목은 의도적으로 비워 둡니다.'],
    accommodationTitle: '숙소 조건은 프로그램 연도에 따라 달라질 수 있습니다.',
    accommodationText: '2027년 숙소 종류, 이용 기간, 비용과 이용 조건은 확인이 완료된 후 안내합니다.',
    facts: [
      { key: 'name', label: '프로그램명', value: 'Ritsumeikan Summer Japanese Program', status: '확정' },
      { key: 'campus', label: '캠퍼스', value: '기누가사 캠퍼스 · 교토', status: '확정' },
      { key: 'dates', label: '2027년 일정', value: '확인 후 공개', status: '확인 예정' },
      { key: 'fee', label: '참가비', value: '확인 후 공개', status: '확인 예정' },
      { key: 'application', label: '지원 기간', value: '확인 후 공개', status: '확인 예정' },
    ],
    nextTitle: '2027년 RSJP를 준비하고 있나요?',
    nextText: '확정된 일정과 지원 정보는 이 페이지에 업데이트합니다. 과거 연도의 조건을 기준으로 신청을 준비하지 마세요.',
    verificationNote: '연도별 운영 정보는 공식 프로그램 자료와 대조하여 확인된 항목만 게시합니다.',
  },

  'rsjp-express': {
    id: 'rsjp-express',
    code: 'RSJP EXPRESS',
    name: 'RSJP Express',
    family: '일본어·일본문화',
    title: 'RSJP Express 2027 여름 프로그램 | 리츠메이칸대학교',
    description: '짧고 집중적인 여름 일본어 프로그램 RSJP Express. 2027년 일정과 모집 정보는 공식 확인 후 한국어 페이지에 공개합니다.',
    japaneseHref: '/programs/rsjp-express/',
    englishHref: '/en/programs/rsjp-express/',
    heroImage: '/images/IMG_5092.JPG',
    heroAlt: '교토에서 문화 학습에 참여하는 단기 프로그램 학생들',
    kicker: '2027 Summer Express · 일본어·일본문화',
    headline: '짧은 여름, 밀도 높은 일본어 학습.',
    lead: 'RSJP Express는 일본어 수업, 문화 학습, 캠퍼스 경험을 짧은 기간에 집중한 여름 프로그램입니다.',
    campus: '기누가사 캠퍼스 · 교토',
    status: 'pending',
    statusLabel: '2027년 세부 정보 확인 예정',
    statusNote: '프로그램명과 캠퍼스는 확인되어 있습니다. 2027년 일정, 참가비, 지원 자격, 숙소, 지원 기간은 공식 확인 후 공개합니다.',
    overviewTitle: '시간은 짧게, 학습의 초점은 분명하게',
    overviewText: 'Express 형식은 일본어와 일본문화 학습의 핵심을 유지하면서 참가 기간을 줄인 프로그램입니다. 연도별 운영 조건은 추정하지 않습니다.',
    highlights: [{ value: 'Express', label: '단기 집중형' }, { value: 'Kyoto', label: '학습 지역' }, { value: '2027 Summer', label: '다음 프로그램' }],
    academicTitle: '집중형 일본어 학습 모델',
    academicIntro: '정확한 학습 시간과 활동 일정은 2027년 프로그램 확정 후 공개합니다.',
    academicItems: ['짧은 기간에 집중된 일본어 학습', '일본어 학습을 보완하는 문화 학습', '교토의 대학 캠퍼스에서 경험하는 단기 유학'],
    eligibilityTitle: '지원 자격은 2027년 모집 정보와 함께 안내합니다.',
    eligibilityItems: ['연도별 지원 조건은 달라질 수 있습니다.', '지원 절차와 일본어 수준 요건은 확인 후 공개합니다.', '과거 연도 기준을 현재 모집 조건으로 사용하지 않습니다.'],
    accommodationTitle: '숙소 정보도 연도별 확정 정보만 안내합니다.',
    accommodationText: '숙소 이용 가능 여부, 기간, 비용과 조건은 2027년 프로그램 정보가 확인된 후 공개합니다.',
    facts: [
      { key: 'name', label: '프로그램명', value: 'RSJP Express', status: '확정' },
      { key: 'campus', label: '캠퍼스', value: '기누가사 캠퍼스 · 교토', status: '확정' },
      { key: 'dates', label: '2027년 일정', value: '확인 후 공개', status: '확인 예정' },
      { key: 'fee', label: '참가비', value: '확인 후 공개', status: '확인 예정' },
      { key: 'application', label: '지원 기간', value: '확인 후 공개', status: '확인 예정' },
    ],
    nextTitle: 'RSJP Express 2027 정보를 기다리고 있나요?',
    nextText: '확정된 연도별 정보가 준비되는 대로 이 페이지에서 안내합니다.',
    verificationNote: '확인되지 않은 연도별 정보는 한국어 페이지에서도 추정하여 게시하지 않습니다.',
  },

  rwjp: {
    id: 'rwjp',
    code: 'RWJP',
    name: 'Ritsumeikan Winter Japanese Program',
    family: '일본어·일본문화',
    title: '2027 RWJP | 리츠메이칸 겨울 일본어 프로그램',
    description: `2027 RWJP는 교토 기누가사 캠퍼스에서 ${koRange(rwjpDates?.start, rwjpDates?.end)}에 운영됩니다. 일본어 수업과 문화 학습을 결합한 5주 프로그램입니다.`,
    japaneseHref: '/programs/rwjp/',
    englishHref: '/en/programs/rwjp/',
    heroImage: '/images/IMG_8263.JPG',
    heroAlt: '겨울 일본어 프로그램에 참가하는 학생들',
    kicker: '2027 · Winter · 일본어·일본문화',
    headline: '겨울의 교토에서 5주 동안 일본어를 배우세요.',
    lead: 'RWJP는 일본어 수업을 중심으로 문화 학습과 캠퍼스 생활을 연결하는 겨울 단기 프로그램입니다.',
    campus: '기누가사 캠퍼스 · 교토',
    status: 'confirmed',
    statusLabel: '2027년 핵심 정보 확정',
    statusNote: `프로그램 일정, 지원 기간, 참가비, 학습 시간, 숙소와 주요 참가 조건이 확인되어 있습니다. 지원 기간은 ${koRange(rwjpApplication?.start, rwjpApplication?.end)}입니다.`,
    overviewTitle: '교실에서 배우고, 교토에서 사용하는 5주',
    overviewText: '일본어 학습을 중심으로 문화 학습과 일상 속 실제 사용 기회를 연결합니다. 초급자도 지원할 수 있으며 시작 전 히라가나와 가타카나를 읽을 수 있어야 합니다.',
    highlights: [{ value: '5 weeks', label: '프로그램 기간' }, { value: '57.5 h', label: '일본어 학습' }, { value: '11', label: '문화 학습 세션' }],
    academicTitle: '확인된 2027년 학습 구성',
    academicIntro: '2027년 프로그램의 일본어 학습과 문화 학습 시간은 현재 canonical fact에 따라 표시합니다.',
    academicItems: ['일본어 학습 3,450분(57.5시간)', '문화 학습 990분, 총 11세션', '기누가사 캠퍼스와 교토를 연결한 학습 경험'],
    eligibilityTitle: '2027 RWJP 지원 대상',
    eligibilityItems: ['지원 시점부터 프로그램 참가 시점까지 대학 또는 대학원에 재학 중인 학생', '일본어를 처음 배우는 학생도 지원 가능', 'JLPT N1 보유자는 대상이 아니며, 시작 전 히라가나와 가타카나를 읽을 수 있어야 함'],
    accommodationTitle: '다이쇼군 국제기숙사를 선택할 수 있습니다.',
    accommodationText: `다이쇼군 국제기숙사 이용료는 ${rwjpDormFee}이며 프로그램 참가비와 별도입니다. 기숙사는 원칙적으로 다인실이며 방 배정은 대학이 결정합니다. 기누가사 캠퍼스까지 도보 약 20분이며, 프로그램 기간 중 자전거 이용은 금지됩니다.`,
    facts: [
      { key: 'dates', label: '프로그램 일정', value: koRange(rwjpDates?.start, rwjpDates?.end), status: '확정' },
      { key: 'application', label: '지원 기간', value: koRange(rwjpApplication?.start, rwjpApplication?.end), status: '확정' },
      { key: 'fee', label: '참가비', value: rwjpFee, status: '확정' },
      { key: 'campus', label: '캠퍼스', value: '기누가사 캠퍼스 · 교토', status: '확정' },
      { key: 'study', label: '일본어 학습', value: '3,450분 · 57.5시간', status: '확정' },
      { key: 'culture', label: '문화 학습', value: '990분 · 11세션', status: '확정' },
      { key: 'dorm', label: '다이쇼군 기숙사', value: `${rwjpDormFee} · 별도`, status: '확정' },
      { key: 'refund', label: '납부 후 취소 시 공제', value: 'JPY 54,000 + 이미 발생한 환불 불가 비용', status: '확정' },
    ],
    nextTitle: '2027 RWJP 지원을 준비하세요.',
    nextText: `지원 마감은 ${koDate(rwjpApplication?.end)}입니다. 지원 전에 참가 자격, 일본어 준비 조건, 숙소와 환불 조건을 확인하세요.`,
    verificationNote: '2027 RWJP 프로그램 담당자 확인 자료와 repository의 canonical fact를 기준으로 작성했습니다.',
  },

  'rwjp-express': {
    id: 'rwjp-express',
    code: 'RWJP EXPRESS',
    name: 'RWJP Express',
    family: '일본어·일본문화',
    title: '2027 RWJP Express | 리츠메이칸대학교',
    description: `2027 RWJP Express는 ${koRange(rwjpExpress.dates?.start, rwjpExpress.dates?.end)}에 교토 기누가사 캠퍼스에서 운영되는 2주 집중 일본어 프로그램입니다.`,
    japaneseHref: '/programs/rwjp-express/',
    englishHref: '/en/programs/rwjp-express/',
    heroImage: '/images/IMG_1588.JPG',
    heroAlt: '겨울 단기 프로그램에서 교류하는 학생들',
    kicker: '2027 · Winter Express · 일본어·일본문화',
    headline: '2주 동안 매일 일본어에 집중하는 겨울 프로그램.',
    lead: 'RWJP Express는 일본어 수업과 문화 학습을 짧고 밀도 높은 일정에 담은 겨울 집중 프로그램입니다.',
    campus: '기누가사 캠퍼스 · 교토',
    status: 'confirmed',
    statusLabel: '2027년 핵심 정보 확정',
    statusNote: '2027년 일정, 일본어 학습 시간, 문화 학습 시간, 최소 참가 인원, 숙소 기본 조건과 환불 공제 규정이 확인되어 있습니다. 참가비와 지원 기간은 현재 확인 범위에서 아직 공개하지 않습니다.',
    overviewTitle: '짧은 기간에도 학습의 밀도는 유지합니다.',
    overviewText: '2주 동안 일본어 22.5시간과 문화 학습을 결합합니다. 단순한 체험형 프로그램이 아니라 집중적인 단기 학습 프로그램으로 설계되어 있습니다.',
    highlights: [{ value: '22.5 h', label: '일본어 학습' }, { value: '360 min', label: '문화 학습' }, { value: '15', label: '최소 참가 인원' }],
    academicTitle: '확인된 2027년 학습 구성',
    academicIntro: '현재 확인된 학습량을 그대로 표시합니다.',
    academicItems: ['일본어 수업 1,350분(22.5시간)', '문화 학습 360분', '교토 기누가사 캠퍼스에서 진행하는 집중 겨울 일정'],
    eligibilityTitle: '2027년 프로그램 참가 대상',
    eligibilityItems: ['대학생 및 대학원생', '일본어 완전 초급자도 지원 가능', '프로그램 시작 전 히라가나와 가타카나를 읽을 수 있어야 함'],
    accommodationTitle: '2027년에는 다이쇼군 기숙사를 이용할 수 있습니다.',
    accommodationText: '단기 프로그램용 객실은 12실이며 각 실 최대 4명입니다. 원칙적으로 여러 명이 함께 사용하며 방 배정은 대학이 결정합니다.',
    facts: [
      { key: 'dates', label: '프로그램 일정', value: koRange(rwjpExpress.dates?.start, rwjpExpress.dates?.end), status: '확정' },
      { key: 'check-in', label: '기숙사 체크인', value: koDate(rwjpExpress.checkIn), status: '확정' },
      { key: 'check-out', label: '기숙사 체크아웃', value: koDate(rwjpExpress.checkOut), status: '확정' },
      { key: 'study', label: '일본어 학습', value: '1,350분 · 22.5시간', status: '확정' },
      { key: 'culture', label: '문화 학습', value: '360분', status: '확정' },
      { key: 'minimum', label: '최소 참가 인원', value: `${rwjpExpress.minimumParticipants ?? 15}명`, status: '확정' },
      { key: 'fee', label: '참가비', value: '현재 한국어 페이지에서 미공개', status: '확인 예정' },
      { key: 'application', label: '지원 기간', value: '현재 한국어 페이지에서 미공개', status: '확인 예정' },
    ],
    nextTitle: '2027년 2월 일정을 먼저 확인하세요.',
    nextText: '확정된 일정과 학습량을 기준으로 계획하되, 참가비와 지원 기간은 공식 확인 후 이 페이지에서 다시 확인하세요.',
    verificationNote: `2027 RWJP Express 프로그램 담당자 확인 범위(${rwjpExpress.verifiedAt})에 따라 작성했습니다.`,
  },

  rbmp: {
    id: 'rbmp',
    code: 'RBMP',
    name: 'Ritsumeikan Business Management Program',
    family: '테마형 학습',
    title: '2027 RBMP | 비즈니스·매니지먼트 단기 프로그램',
    description: `2027 RBMP는 오사카 이바라키 캠퍼스에서 ${koRange(rbmp.dates?.start, rbmp.dates?.end)}에 진행 예정인 비즈니스·매니지먼트 단기 프로그램입니다.`,
    japaneseHref: '/programs/rbmp/',
    englishHref: '/en/programs/rbmp/',
    heroImage: '/images/IMG_6091.JPG',
    heroAlt: '비즈니스와 매니지먼트를 학습하는 단기 프로그램 학생들',
    kicker: '2027 · Business & Management · OIC',
    headline: '오사카에서 비즈니스와 매니지먼트를 함께 배우세요.',
    lead: 'RBMP는 강의, 협동 학습, 문화 및 현장 활동을 결합해 비즈니스와 매니지먼트를 여러 관점에서 살펴보는 단기 프로그램입니다.',
    campus: '오사카 이바라키 캠퍼스(OIC)',
    status: 'working',
    statusLabel: '2027년 운영안 · 최종 확정 전',
    statusNote: '현재 일정, 참가비, 최소 참가 인원과 학습 구성은 프로그램 담당자 working plan에 기반합니다. 최종 모집 조건으로 확정되기 전까지 검토 중 정보로 표시합니다.',
    overviewTitle: '강의에서 끝나지 않는 비즈니스 학습',
    overviewText: '비즈니스·매니지먼트 강의와 학생 간 협동, 문화 활동, 현장 방문을 연결하는 구성으로 검토 중입니다.',
    highlights: [{ value: '8', label: '비즈니스 강의 세션' }, { value: 'JPY 200,000', label: '현재 계획 참가비' }, { value: '15', label: '최소 참가 인원' }],
    academicTitle: '현재 2027년 학습 계획',
    academicIntro: '아래 내용은 현재 working plan이며 최종 일정에서 조정될 수 있습니다.',
    academicItems: ['비즈니스·매니지먼트 강의 8세션', '다도, 하키, Microsoft Base에서의 협동 학습', '컵누들 뮤지엄 방문'],
    eligibilityTitle: '여러 참가 유형을 전제로 설계 중입니다.',
    eligibilityItems: ['해외 일반 참가자는 대학생·대학원생을 기본 대상으로 검토 중', 'SWU 등 대학 단체 참가와 일반 참가를 함께 고려', '리츠메이칸 부속고 학생 참가도 별도 조건으로 검토'],
    accommodationTitle: '일반 참가자는 외부 숙소를 직접 준비하는 계획입니다.',
    accommodationText: 'OIC 세미나하우스는 인솔자가 있는 단체 등에 별도 안내하는 방향입니다. 일반 해외 참가자의 기본 숙소로 표시하지 않습니다.',
    facts: [
      { key: 'dates', label: '계획 일정', value: koRange(rbmp.dates?.start, rbmp.dates?.end), status: '검토 중' },
      { key: 'fee', label: '계획 참가비', value: `JPY ${(rbmp.fee ?? 200000).toLocaleString('en-US')}`, status: '검토 중' },
      { key: 'campus', label: '캠퍼스', value: '오사카 이바라키 캠퍼스(OIC)', status: '확정' },
      { key: 'minimum', label: '최소 참가 인원', value: `${rbmp.minimumParticipants ?? 15}명`, status: '검토 중' },
      { key: 'application', label: '지원 기간', value: '확인 후 공개', status: '확인 예정' },
    ],
    nextTitle: '2027 RBMP 참가를 검토하고 있나요?',
    nextText: '현재 계획은 프로그램 설계를 위한 기준입니다. 실제 지원 전에는 최종 모집 일정과 조건을 다시 확인하세요.',
    verificationNote: `2027 RBMP 프로그램 담당자 working confirmation(${rbmp.verifiedAt})을 기준으로 표시합니다.`,
  },

  rdsp: {
    id: 'rdsp',
    code: 'RDSP',
    name: 'RDSP',
    family: '테마형 학습',
    title: 'RDSP | AI·데이터사이언스·로보틱스 단기 프로그램',
    description: '오사카 이바라키 캠퍼스에서 AI, 데이터사이언스, 로보틱스를 중심으로 검토 중인 RDSP 단기 프로그램입니다. 일정과 모집 조건은 확정 후 공개합니다.',
    japaneseHref: '/programs/rdsp/',
    englishHref: '/en/programs/rdsp/',
    heroImage: '/images/IMG_3725.JPG',
    heroAlt: '오사카 이바라키 캠퍼스에서 전문 주제를 공부하는 학생들',
    kicker: 'Thematic Study · AI · Data Science · Robotics',
    headline: 'AI, 데이터사이언스, 로보틱스를 오사카에서.',
    lead: 'RDSP는 리츠메이칸 교원의 강의, 학생 이벤트, Buddy 활동과 협동 학습을 결합하는 전문 테마형 단기 프로그램으로 개발 중입니다.',
    campus: '오사카 이바라키 캠퍼스(OIC)',
    status: 'working',
    statusLabel: '현재 working plan · 최종 확정 전',
    statusNote: '학습 테마와 현재 프로그램 구조는 담당자 working plan에서 확인했습니다. 연도별 일정, 참가비, 최종 모집 조건은 아직 확정 정보로 게시하지 않습니다.',
    overviewTitle: '신기술을 주제로 배우고 협업하는 단기 프로그램',
    overviewText: 'AI, 데이터사이언스, 로보틱스를 중심으로 교원 강의와 학생 간 협동 학습을 연결하는 프로그램을 검토 중입니다.',
    highlights: [{ value: 'AI', label: '학습 주제' }, { value: 'Data Science', label: '학습 주제' }, { value: 'Robotics', label: '학습 주제' }],
    academicTitle: '현재 검토 중인 학습 구성',
    academicIntro: '교원 및 세부 주제는 tentative로 취급하며 최종 확정 전 변경될 수 있습니다.',
    academicItems: ['리츠메이칸대학교 교원 강의', 'AI·Data Science·Robotics 관련 주제', '학생 이벤트, Buddy 활동, Microsoft Base를 활용한 협동 학습'],
    eligibilityTitle: '연도별 참가 조건은 확정 후 공개합니다.',
    eligibilityItems: ['해외 대학의 대학생·대학원생 중심 단기 수용을 기본으로 검토', '최종 참가 자격은 모집 연도별 확정 정보로 안내', '현재 working plan을 최종 모집 조건으로 간주하지 않음'],
    accommodationTitle: '일반 참가자는 외부 숙소를 기본으로 검토합니다.',
    accommodationText: '인솔자가 없는 일반 참가자가 OIC 세미나하우스를 이용하는 것을 기본 전제로 하지 않습니다. 최종 숙박 조건은 모집 정보에서 별도로 확인해야 합니다.',
    facts: [
      { key: 'campus', label: '캠퍼스', value: '오사카 이바라키 캠퍼스(OIC)', status: '확정' },
      { key: 'themes', label: '현재 학습 주제', value: 'AI · Data Science · Robotics', status: '검토 중' },
      { key: 'dates', label: '프로그램 일정', value: '추후 안내', status: '확인 예정' },
      { key: 'fee', label: '참가비', value: '추후 안내', status: '확인 예정' },
      { key: 'application', label: '지원 기간', value: '추후 안내', status: '확인 예정' },
    ],
    nextTitle: 'RDSP의 다음 모집을 확인하세요.',
    nextText: '현재 페이지는 개발 중인 학습 방향을 보여 줍니다. 일정, 참가비와 모집 조건은 공식 확인 후 업데이트합니다.',
    verificationNote: `2026 RDSP outline과 프로그램 담당자 working confirmation(${rdsp.verifiedAt})의 범위에서 작성했습니다.`,
  },
};

export const getKoreanProgrammePage = (id: KoreanProgrammePage['id']) => koreanProgrammePages[id];
