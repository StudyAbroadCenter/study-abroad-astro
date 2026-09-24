import { coreProgramme2027Facts } from './core-programme-2027-facts';
import { getCurrentOfferingFact } from './current-offerings';
import { rwjpExpress2027Sessions, rwjpExpress2027Shared } from './rwjp-express-2027-sessions';

export type EnglishProgrammeStatus = 'confirmed' | 'working' | 'pending';

export interface EnglishProgrammeHighlight {
  value: string;
  label: string;
}

export interface EnglishProgrammeFact {
  key: string;
  label: string;
  value: string;
  status?: 'Confirmed' | 'Working plan' | 'Pending verification';
}

export interface EnglishProgrammePage {
  id: 'rsjp' | 'rsjp-express' | 'rwjp-express' | 'rdsp' | 'rbmp';
  code: string;
  name: string;
  family: string;
  title: string;
  description: string;
  japaneseHref: string;
  heroImage: string;
  heroAlt: string;
  kicker: string;
  headline: string;
  lead: string;
  campus: string;
  status: EnglishProgrammeStatus;
  statusLabel: string;
  statusNote: string;
  overviewTitle: string;
  overviewText: string;
  highlights: EnglishProgrammeHighlight[];
  academicTitle: string;
  academicIntro: string;
  academicItems: string[];
  eligibilityTitle: string;
  eligibilityItems: string[];
  accommodationTitle: string;
  accommodationText: string;
  facts: EnglishProgrammeFact[];
  nextTitle: string;
  nextText: string;
  verificationNote: string;
}

const monthDayYear = (iso?: string | null) => {
  if (!iso) return 'To be confirmed';
  const date = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
};

const range = (start?: string | null, end?: string | null) =>
  start && end ? `${monthDayYear(start)}–${monthDayYear(end)}` : 'To be confirmed';

const formatJPY = (value?: number | null) =>
  value === null || value === undefined ? 'To be confirmed' : `JPY ${value.toLocaleString('en-US')}`;

const rsjpOffering = getCurrentOfferingFact('rsjp');
const rsjpExpressOffering = getCurrentOfferingFact('rsjp-express');
const rwjpExpressOffering = getCurrentOfferingFact('rwjp-express');
const rdspOffering = getCurrentOfferingFact('rdsp');
const rbmpOffering = getCurrentOfferingFact('rbmp');

if (!rsjpOffering || !rsjpExpressOffering || !rwjpExpressOffering || !rdspOffering || !rbmpOffering) {
  throw new Error('Canonical current offering facts are incomplete for English programme pages.');
}

const rwjpExpress = coreProgramme2027Facts['rwjp-express'];
const rdsp = coreProgramme2027Facts.rdsp;
const rbmp = coreProgramme2027Facts.rbmp;

const expressYear = rwjpExpressOffering.academicYear;
const rbmpYear = rbmpOffering.academicYear;
const rdspYear = rdspOffering.academicYear;
const rsjpYear = rsjpOffering.academicYear;
const rsjpExpressYear = rsjpExpressOffering.academicYear;
const expressMinimum = rwjpExpressOffering.minimumParticipants;
const expressPayment = rwjpExpressOffering.paymentMethod ?? 'To be confirmed';
const expressRefund = formatJPY(rwjpExpressOffering.refundDeductionJPY);
const expressFee = formatJPY(rwjpExpressOffering.programmeFeeJPY);
const expressAccommodationFee = formatJPY(rwjpExpressOffering.accommodationFeeJPY);
const expressApplicationPeriod = range(rwjpExpressOffering.applicationPeriod?.start, rwjpExpressOffering.applicationPeriod?.end);
const rbmpFee = formatJPY(rbmpOffering.programmeFeeJPY);
const rbmpMinimum = rbmpOffering.minimumParticipants;

export const englishProgrammePages: Record<EnglishProgrammePage['id'], EnglishProgrammePage> = {
  rsjp: {
    id: 'rsjp',
    code: 'RSJP',
    name: 'Ritsumeikan Summer Japanese Program',
    family: 'Japanese Language & Culture',
    title: `RSJP ${rsjpYear} | Ritsumeikan Summer Japanese Program | Ritsumeikan University`,
    description:
      `Explore the Ritsumeikan Summer Japanese Program at Kinugasa Campus in Kyoto. ${rsjpYear} dates, fees, eligibility and accommodation details are published only after verification.`,
    japaneseHref: '/programs/rsjp/',
    heroImage: '/images/IMG_8178.JPG',
    heroAlt: 'Students learning Japanese during a Ritsumeikan short-term program',
    kicker: `${rsjpYear} Summer · Japanese Language & Culture`,
    headline: 'Learn Japanese in Kyoto. Let the city add context.',
    lead:
      'RSJP centers Japanese-language learning and connects it with campus life, culture and the experience of studying in Kyoto.',
    campus: 'Kinugasa Campus, Kyoto',
    status: 'pending',
    statusLabel: `${rsjpYear} annual details pending verification`,
    statusNote:
      `The program identity and Kinugasa Campus location are verified. Dates, fee, eligibility, accommodation and application information for ${rsjpYear} will appear here only after authoritative confirmation.`,
    overviewTitle: 'A summer program built around Japanese.',
    overviewText:
      'The academic purpose comes first: study Japanese, use it in context, and connect classroom learning with life on campus and in Kyoto. We do not publish placeholder annual details.',
    highlights: [
      { value: 'Kyoto', label: 'Study location' },
      { value: 'Japanese', label: 'Academic center' },
      { value: String(rsjpYear), label: 'Next offering year' },
    ],
    academicTitle: 'What the program is designed to combine',
    academicIntro:
      `Exact hours and activities are published only when confirmed for the ${rsjpYear} offering.`,
    academicItems: [
      'Japanese-language study as the academic core.',
      'Cultural learning that gives context to language study.',
      'Campus-based learning and opportunities to experience university life in Japan.',
    ],
    eligibilityTitle: `${rsjpYear} eligibility will be published with the annual offering.`,
    eligibilityItems: [
      'Do not rely on past-year conditions when planning an application.',
      'The next offering’s eligibility, language expectations and application route will be stated here after verification.',
      'If a value is not confirmed, this page intentionally leaves it unpublished.',
    ],
    accommodationTitle: 'Accommodation is offering-specific.',
    accommodationText:
      `Housing arrangements can change by year. The ${rsjpYear} accommodation, dates, price and room conditions will be published only after they are verified.`,
    facts: [
      { key: 'official-name', label: 'Official name', value: rsjpOffering.officialName, status: 'Confirmed' },
      { key: 'campus', label: 'Campus', value: 'Kinugasa Campus, Kyoto', status: 'Confirmed' },
      { key: 'program-type', label: 'Program type', value: 'Japanese language and culture', status: 'Confirmed' },
      { key: 'annual-dates', label: `${rsjpYear} offering dates`, value: 'Published after verification', status: 'Pending verification' },
      { key: 'annual-fee', label: 'Program fee', value: 'Published after verification', status: 'Pending verification' },
      { key: 'annual-eligibility', label: 'Eligibility', value: 'Published after verification', status: 'Pending verification' },
      { key: 'annual-accommodation', label: 'Accommodation', value: 'Published after verification', status: 'Pending verification' },
    ],
    nextTitle: `Planning for RSJP ${rsjpYear}?`,
    nextText:
      'Use this page as the English source for the next offering. Confirmed dates, fee, eligibility and application information will be added here rather than inferred from previous years.',
    verificationNote:
      'Publication rule: offering-specific facts remain hidden until they are verified against the authoritative program source.',
  },

  'rsjp-express': {
    id: 'rsjp-express',
    code: 'RSJP EXPRESS',
    name: 'RSJP Express',
    family: 'Japanese Language & Culture',
    title: `RSJP Express ${rsjpExpressYear} | Ritsumeikan University`,
    description:
      `Explore RSJP Express at Kinugasa Campus in Kyoto. ${rsjpExpressYear} dates, fees, eligibility and accommodation details are published only after verification.`,
    japaneseHref: '/programs/rsjp-express/',
    heroImage: '/images/IMG_5092.JPG',
    heroAlt: 'Students taking part in a cultural learning activity in Kyoto',
    kicker: `${rsjpExpressYear} Summer Express · Japanese Language & Culture`,
    headline: 'A shorter summer. A concentrated Japanese experience.',
    lead:
      'RSJP Express is the compact summer format: Japanese learning, culture and campus experience brought together in a shorter period.',
    campus: 'Kinugasa Campus, Kyoto',
    status: 'pending',
    statusLabel: `${rsjpExpressYear} annual details pending verification`,
    statusNote:
      `The program identity and Kinugasa Campus location are verified. The ${rsjpExpressYear} offering’s dates, fee, eligibility, accommodation and application route are not published until confirmed.`,
    overviewTitle: 'Designed for students who need a shorter format.',
    overviewText:
      'The Express format keeps the educational focus on Japanese and cultural learning while reducing the time commitment. Annual operating details are not carried forward by assumption.',
    highlights: [
      { value: 'Express', label: 'Short-format program' },
      { value: 'Kyoto', label: 'Study location' },
      { value: String(rsjpExpressYear), label: 'Next offering year' },
    ],
    academicTitle: 'The Express learning model',
    academicIntro:
      `The exact academic load and activity schedule depend on the confirmed ${rsjpExpressYear} offering.`,
    academicItems: [
      'Japanese-language study in a concentrated short-term format.',
      'Cultural learning designed to add context to the language program.',
      'Campus experience at Ritsumeikan University in Kyoto.',
    ],
    eligibilityTitle: 'Annual eligibility is not guessed.',
    eligibilityItems: [
      'Eligibility and language expectations may change by offering.',
      'Application procedures are published only after confirmation.',
      'Past-year requirements should not be treated as current rules.',
    ],
    accommodationTitle: 'Annual housing details will be confirmed separately.',
    accommodationText:
      `Accommodation availability, dates and price for ${rsjpExpressYear} will be shown here when authoritative information is available.`,
    facts: [
      { key: 'official-name', label: 'Program name', value: rsjpExpressOffering.officialName, status: 'Confirmed' },
      { key: 'campus', label: 'Campus', value: 'Kinugasa Campus, Kyoto', status: 'Confirmed' },
      { key: 'program-type', label: 'Program type', value: 'Japanese language and culture · Express format', status: 'Confirmed' },
      { key: 'annual-dates', label: `${rsjpExpressYear} offering dates`, value: 'Published after verification', status: 'Pending verification' },
      { key: 'annual-fee', label: 'Program fee', value: 'Published after verification', status: 'Pending verification' },
      { key: 'annual-eligibility', label: 'Eligibility', value: 'Published after verification', status: 'Pending verification' },
      { key: 'annual-accommodation', label: 'Accommodation', value: 'Published after verification', status: 'Pending verification' },
    ],
    nextTitle: `Interested in RSJP Express ${rsjpExpressYear}?`,
    nextText:
      'This page will become the English annual source once the next offering is confirmed. Until then, no dates, price or application status are implied.',
    verificationNote:
      'Publication rule: annual operating facts are withheld until authoritative verification is complete.',
  },

  'rwjp-express': {
    id: 'rwjp-express',
    code: 'RWJP EXPRESS',
    name: 'RWJP Express',
    family: 'Japanese Language & Culture',
    title: `${expressYear} RWJP Express | Ritsumeikan University`,
    description:
      `${expressYear} RWJP Express offers January and February sessions with the same academic content and program fee, at Osaka Ibaraki Campus and Kinugasa Campus respectively.`,
    japaneseHref: '/programs/rwjp-express/',
    heroImage: '/images/IMG_1588.JPG',
    heroAlt: 'Students connecting during a Ritsumeikan winter short-term program',
    kicker: `${expressYear} · Winter Express · Japanese Language & Culture`,
    headline: 'Two focused weeks in Japan. Japanese every day.',
    lead:
      'RWJP Express compresses Japanese study and Japan Studies into a focused winter format. In 2027, students can choose a January Session at Osaka Ibaraki Campus or a February Session at Kinugasa Campus in Kyoto.',
    campus: 'Osaka Ibaraki Campus or Kinugasa Campus',
    status: 'confirmed',
    statusLabel: `${expressYear} core information confirmed`,
    statusNote:
      `The approved ${expressYear} guidelines confirm two RWJP Express sessions with the same academic content and program fee. Their dates, campus and accommodation arrangements are different.`,
    overviewTitle: 'Short in duration. Structured in purpose.',
    overviewText:
      'The program combines a substantial Japanese-language block with cultural learning across an intensive two-week schedule. The compact format is not presented as a lighter academic option.',
    highlights: [
      { value: '22.5', label: 'hours of Japanese study' },
      { value: '360', label: 'minutes of cultural learning' },
      { value: expressMinimum === null ? 'TBC' : String(expressMinimum), label: 'minimum participants' },
    ],
    academicTitle: `Confirmed ${expressYear} academic structure`,
    academicIntro:
      `The following learning load is confirmed for the ${expressYear} offering.`,
    academicItems: [
      'Japanese-language classes: 1,350 minutes (22.5 hours).',
      'Cultural learning: 360 minutes.',
      'The same academic content is offered in both the January and February Sessions.'
    ],
    eligibilityTitle: `Who the ${expressYear} offering is designed for`,
    eligibilityItems: [
      'Students must be enrolled at a university throughout the entire program period.',
      'Students with no prior Japanese learning experience must be able to read and write hiragana and katakana before the program starts; these scripts are not taught in the program.',
      'Students who already hold JLPT N1 are not eligible.',
    ],
    accommodationTitle: `Accommodation differs by ${expressYear} session.`,
    accommodationText:
      `January Session: ${rwjpExpress2027Sessions.january.accommodationEn} February Session: ${rwjpExpress2027Sessions.february.accommodationEn}`
    facts: [
      { key: 'official-name', label: 'Offering', value: rwjpExpress.offering, status: 'Confirmed' },
      { key: 'january-session', label: 'January Session', value: 'January 19–29, 2027 · Osaka Ibaraki Campus (OIC)', status: 'Confirmed' },
      { key: 'january-application', label: 'January application period', value: 'October 7–21, 2026', status: 'Confirmed' },
      { key: 'january-accommodation', label: 'January accommodation', value: 'Self-arranged only; university accommodation is not provided', status: 'Confirmed' },
      { key: 'february-session', label: 'February Session', value: 'February 16–26, 2027 · Kinugasa Campus, Kyoto', status: 'Confirmed' },
      { key: 'february-application', label: 'February application period', value: 'November 4–18, 2026', status: 'Confirmed' },
      { key: 'academic-content', label: 'Academic content', value: `${rwjpExpress2027Shared.japaneseMinutes.toLocaleString('en-US')} minutes Japanese + ${rwjpExpress2027Shared.japanStudiesMinutes} minutes Japan Studies`, status: 'Confirmed' },
      
      { key: 'japanese-study', label: 'Japanese study', value: '1,350 minutes · 22.5 hours', status: 'Confirmed' },
      { key: 'cultural-learning', label: 'Cultural learning', value: '360 minutes', status: 'Confirmed' },
      { key: 'minimum-participants', label: 'Minimum participants', value: expressMinimum === null ? 'To be confirmed' : String(expressMinimum), status: expressMinimum === null ? 'Pending verification' : 'Confirmed' },
      { key: 'payment', label: 'Payment method', value: expressPayment, status: rwjpExpressOffering.paymentMethod ? 'Confirmed' : 'Pending verification' },
      { key: 'refund', label: 'Post-payment refund deduction', value: rwjpExpressOffering.refundDeductionJPY === null ? 'To be confirmed' : `${expressRefund} non-refundable administrative fee; remaining balance refunded`, status: rwjpExpressOffering.refundDeductionJPY === null ? 'Pending verification' : 'Confirmed' },
      { key: 'programme-fee', label: 'Program fee', value: expressFee, status: 'Confirmed' },
      { key: 'accommodation-fee', label: 'IH Taishogun facility-use fee', value: expressAccommodationFee, status: 'Confirmed' },
      { key: 'application-period', label: 'Application period', value: expressApplicationPeriod, status: 'Confirmed' },
    ],
    nextTitle: `Ready to plan for ${monthDayYear(rwjpExpress.dates?.start).replace(/^[A-Za-z]+ \d+, /, '')}?`,
    nextText:
      'Use the confirmed schedule and academic load for planning. Return to this page for the verified fee and application window before submitting anything.',
    verificationNote:
      `Verified against the approved 2027 RWJP / RWJP Express Application Guidelines (updated August 27, 2026). This page represents the February Session; the January Session has different dates, campus and accommodation arrangements.`,
  },

  rdsp: {
    id: 'rdsp',
    code: 'RDSP',
    name: 'RDSP',
    family: 'Thematic Study',
    title: 'RDSP | AI, Data Science & Robotics | Ritsumeikan University',
    description:
      'Explore the current RDSP working plan at Osaka Ibaraki Campus: AI, data science, robotics, Ritsumeikan faculty lectures, student events and collaborative learning.',
    japaneseHref: '/programs/rdsp/',
    heroImage: '/images/IMG_3725.JPG',
    heroAlt: 'Students studying a specialist subject at Osaka Ibaraki Campus',
    kicker: `Thematic Study · ${rdspYear} · Osaka Ibaraki Campus`,
    headline: 'AI, data science and robotics—studied in Osaka.',
    lead:
      'RDSP is being developed as a specialist short-term program combining faculty-led learning with student events, buddy activity and collaborative work.',
    campus: 'Osaka Ibaraki Campus',
    status: 'working',
    statusLabel: `${rdspYear} working plan — not final`,
    statusNote:
      'The academic themes and current learning framework below come from the programme team’s working plan. Annual dates, fee and final recruitment conditions are not confirmed and are therefore not shown as facts.',
    overviewTitle: 'A specialist program built around emerging technology.',
    overviewText:
      'The current plan brings together AI, data science and robotics with learning from Ritsumeikan faculty and collaborative student activity at Osaka Ibaraki Campus.',
    highlights: [
      { value: '570', label: 'planned lecture minutes' },
      { value: '190', label: 'planned student-event minutes' },
      { value: 'OIC', label: 'Osaka Ibaraki Campus' },
    ],
    academicTitle: 'Current academic framework',
    academicIntro:
      'These elements are part of the current working plan and may change before recruitment opens.',
    academicItems: [
      'AI, data science and robotics as core thematic areas.',
      'Six planned 95-minute lectures by Ritsumeikan University faculty (570 minutes total).',
      'Two planned 95-minute student events (190 minutes total), plus buddy activity and collaborative learning at Microsoft Base Ritsumeikan.',
    ],
    eligibilityTitle: 'Recruitment conditions are still being finalized.',
    eligibilityItems: [
      'The program is intended primarily for university and graduate-school students from overseas institutions.',
      'Faculty assignments and detailed topics remain tentative.',
      'Final dates, fee, eligibility and application procedures will be published only when confirmed.',
    ],
    accommodationTitle: 'General participants should not assume use of the OIC Seminar House.',
    accommodationText:
      'The current operating boundary does not treat the OIC Seminar House as accommodation for unescorted general participants. External accommodation is the working assumption until final arrangements are confirmed.',
    facts: [
      { key: 'official-name', label: 'Public program name', value: rdspOffering.officialName, status: 'Confirmed' },
      { key: 'status', label: `${rdspYear} status`, value: 'Working plan', status: 'Working plan' },
      { key: 'campus', label: 'Campus', value: 'Osaka Ibaraki Campus (OIC)', status: 'Working plan' },
      { key: 'themes', label: 'Current themes', value: 'AI · Data Science · Robotics', status: 'Working plan' },
      { key: 'lectures', label: 'Planned lectures', value: '570 minutes · 95 minutes × 6', status: 'Working plan' },
      { key: 'student-events', label: 'Planned student events', value: '190 minutes · 95 minutes × 2', status: 'Working plan' },
      { key: 'collaboration', label: 'Current collaborative elements', value: 'Buddy activity · Microsoft Base Ritsumeikan', status: 'Working plan' },
      { key: 'annual-dates', label: 'Program dates', value: 'Not yet confirmed', status: 'Pending verification' },
      { key: 'annual-fee', label: 'Program fee', value: 'Not yet confirmed', status: 'Pending verification' },
    ],
    nextTitle: 'Considering RDSP?',
    nextText:
      'Use this page to understand the current academic direction, not as a final application notice. Confirmed recruitment information will replace working-plan labels when the programme team confirms the final offering.',
    verificationNote:
      `Working-plan boundary verified ${rdsp.verifiedAt}. The acronym remains the public name until an authoritative source confirms any expanded official title.`,
  },

  rbmp: {
    id: 'rbmp',
    code: 'RBMP',
    name: 'Ritsumeikan Business Management Program',
    family: 'Thematic Study',
    title: `${rbmpYear} RBMP Working Plan | Ritsumeikan University`,
    description:
      `Review the current ${rbmpYear} RBMP working plan at Osaka Ibaraki Campus, including ${range(rbmp.dates?.start, rbmp.dates?.end)}, a ${rbmpFee} planned fee and eight business and management sessions.`,
    japaneseHref: '/programs/rbmp/',
    heroImage: '/images/IMG_6091.JPG',
    heroAlt: 'Students in a business and management short-term program',
    kicker: `${rbmpYear} Working Plan · Business & Management`,
    headline: 'Study business. Test ideas beyond the classroom.',
    lead:
      'RBMP is being planned as a short business and management program at Osaka Ibaraki Campus, combining academic sessions with collaborative and experiential learning.',
    campus: 'Osaka Ibaraki Campus',
    status: 'working',
    statusLabel: `${rbmpYear} working plan — subject to confirmation`,
    statusNote:
      `Dates, planned fee, minimum cohort and learning elements below reflect the current ${rbmpYear} programme-team working plan. They are clearly marked as working-plan information until final recruitment approval.`,
    overviewTitle: 'Business learning connected with place and practice.',
    overviewText:
      'The current design combines eight business and management sessions with shared learning and cultural or field experiences at and around Osaka Ibaraki Campus.',
    highlights: [
      { value: '8', label: 'planned business sessions' },
      { value: rbmpFee, label: 'planned program fee' },
      { value: rbmpMinimum === null ? 'TBC' : String(rbmpMinimum), label: 'planned minimum participants' },
    ],
    academicTitle: `Current ${rbmpYear} learning design`,
    academicIntro:
      'These elements are part of the working plan and may be adjusted before final publication.',
    academicItems: [
      'Eight business and management class sessions.',
      'Shared learning through tea ceremony, hockey and Microsoft Base.',
      'A planned visit to the Cup Noodles Museum as part of the broader program experience.',
    ],
    eligibilityTitle: 'Different participant groups have different operating conditions.',
    eligibilityItems: [
      'The working plan includes joint participation with SWU, general international students and Ritsumeikan affiliated high-school students.',
      'General overseas individual participants are expected to be university or graduate-school students.',
      'Ritsumeikan affiliated high-school students are expected to commute from home.',
    ],
    accommodationTitle: 'General individual participants arrange external accommodation.',
    accommodationText:
      'The OIC Seminar House is not presented as the standard accommodation for general individual participants. It may be separately offered to escorted groups such as SWU. General participants are expected to arrange external accommodation themselves.',
    facts: [
      { key: 'official-name', label: 'Offering', value: rbmp.offering, status: 'Working plan' },
      { key: 'status', label: `${rbmpYear} status`, value: 'Working plan', status: 'Working plan' },
      { key: 'programme-dates', label: 'Planned program dates', value: range(rbmp.dates?.start, rbmp.dates?.end), status: 'Working plan' },
      { key: 'check-in', label: 'Planned group check-in reference', value: monthDayYear(rbmp.checkIn), status: 'Working plan' },
      { key: 'check-out', label: 'Planned group check-out reference', value: monthDayYear(rbmp.checkOut), status: 'Working plan' },
      { key: 'campus', label: 'Campus', value: 'Osaka Ibaraki Campus (OIC)', status: 'Working plan' },
      { key: 'programme-fee', label: 'Planned program fee', value: rbmpFee, status: rbmpOffering.programmeFeeJPY === null ? 'Pending verification' : 'Working plan' },
      { key: 'minimum-participants', label: 'Planned minimum participants', value: rbmpMinimum === null ? 'To be confirmed' : String(rbmpMinimum), status: rbmpMinimum === null ? 'Pending verification' : 'Working plan' },
      { key: 'academic-load', label: 'Business & management', value: '8 planned class sessions', status: 'Working plan' },
      { key: 'accommodation', label: 'General individual accommodation', value: 'External accommodation arranged by participant', status: 'Working plan' },
      { key: 'application-period', label: 'Application period', value: 'Not yet confirmed', status: 'Pending verification' },
    ],
    nextTitle: 'Use the working plan for discussion, not final booking.',
    nextText:
      'The page will be upgraded from working-plan status only after final recruitment information is approved. Until then, application timing and other missing conditions are intentionally withheld.',
    verificationNote:
      `Current working-plan boundary verified ${rbmp.verifiedAt}. General-participant and escorted-group accommodation guidance are intentionally separated.`,
  },
};

export const getEnglishProgrammePage = (id: EnglishProgrammePage['id']) => englishProgrammePages[id];
