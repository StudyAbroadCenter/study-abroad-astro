export type ProgrammeParticipationRecord = {
  programme: 'RWJP' | 'RWJP Express';
  countryOrRegion: string;
  institution: string;
  participants: number;
};

export const participationHistorySource = {
  file: '短期受入プログラム参加実績_2023-2026_統合.xlsx',
  period: '2023–2026',
  verifiedAt: '2026-08-15',
  countryDefinition: '国・地域は参加者の国籍ではなく、大学・機関の所在地で整理。',
} as const;

/** Verified headline KPIs from the integrated workbook used by the former globe build. */
export const shortTermParticipationEvidence = {
  period: '2023–2026', participants: 522, countriesOrRegions: 27, institutions: 114,
  programmeParticipants: { RSJP: 153, 'RSJP Express': 158, RWJP: 140, 'RWJP Express': 71 },
  annualParticipants: { 2023: 114, 2024: 107, 2025: 137, 2026: 164 },
} as const;

/**
 * Verified post-COVID five-week Japanese programme evidence.
 * Scope: RSJP + RWJP only. Express programmes are intentionally excluded.
 * Source: integrated 2023–2026 workbook, recalculated from institution-level rows.
 */
export const fiveWeekJapaneseProgrammeEvidence = {
  period: '2023–2026',
  participants: 293,
  countriesOrRegions: 21,
  institutions: 81,
  programmeParticipants: { RSJP: 153, RWJP: 140 },
  scopeNote: 'コロナ後の再開期である2023–2026年のRSJP・RWJP（各5週間）の実績。Expressは含みません。',
  regions: [
    { countryOrRegion:'Australia', flag:'🇦🇺', participants:89, institutions:7 },
    { countryOrRegion:'United States', flag:'🇺🇸', participants:76, institutions:37 },
    { countryOrRegion:'South Korea', flag:'🇰🇷', participants:57, institutions:6 },
    { countryOrRegion:'Canada', flag:'🇨🇦', participants:18, institutions:4 },
    { countryOrRegion:'New Zealand', flag:'🇳🇿', participants:11, institutions:1 },
    { countryOrRegion:'United Kingdom', flag:'🇬🇧', participants:9, institutions:5 },
    { countryOrRegion:'China', flag:'🇨🇳', participants:7, institutions:5 },
    { countryOrRegion:'Taiwan', flag:'🇹🇼', participants:7, institutions:2 },
    { countryOrRegion:'Macau', flag:'🇲🇴', participants:3, institutions:1 },
    { countryOrRegion:'Singapore', flag:'🇸🇬', participants:3, institutions:2 },
    { countryOrRegion:'Qatar', flag:'🇶🇦', participants:2, institutions:1 },
    { countryOrRegion:'Romania', flag:'🇷🇴', participants:2, institutions:1 },
    { countryOrRegion:'Azerbaijan', flag:'🇦🇿', participants:1, institutions:1 },
    { countryOrRegion:'Finland', flag:'🇫🇮', participants:1, institutions:1 },
    { countryOrRegion:'Hong Kong', flag:'🇭🇰', participants:1, institutions:1 },
    { countryOrRegion:'Japan', flag:'🇯🇵', participants:1, institutions:1 },
    { countryOrRegion:'Mexico', flag:'🇲🇽', participants:1, institutions:1 },
    { countryOrRegion:'Netherlands', flag:'🇳🇱', participants:1, institutions:1 },
    { countryOrRegion:'Poland', flag:'🇵🇱', participants:1, institutions:1 },
    { countryOrRegion:'Saudi Arabia', flag:'🇸🇦', participants:1, institutions:1 },
    { countryOrRegion:'Turkmenistan', flag:'🇹🇲', participants:1, institutions:1 },
  ],
} as const;

export const expressProgrammeEvidence = {
  period: '2023–2026',
  participants: 229,
  countriesOrRegions: 18,
  institutions: 50,
  programmeParticipants: { 'RSJP Express': 158, 'RWJP Express': 71 },
  representativeFlags: ['🇰🇷','🇨🇳','🇹🇼','🇭🇰','🇬🇧','🇺🇸'],
} as const;

/** 2023–2026 institution totals for programme-specific search. No participant PII. */
export const participationHistory: ProgrammeParticipationRecord[] = [
  { programme:'RWJP', countryOrRegion:'Australia', institution:'University of Melbourne', participants:68 },
  { programme:'RWJP', countryOrRegion:'Australia', institution:'Australian National University', participants:2 },
  { programme:'RWJP', countryOrRegion:'Australia', institution:'Monash University', participants:2 },
  { programme:'RWJP', countryOrRegion:'Australia', institution:'RMIT University', participants:1 },
  { programme:'RWJP', countryOrRegion:'Australia', institution:'University of Western Australia', participants:1 },
  { programme:'RWJP', countryOrRegion:'Australia', institution:'University of Queensland', participants:1 },
  { programme:'RWJP', countryOrRegion:'South Korea', institution:'Ajou University', participants:19 },
  { programme:'RWJP', countryOrRegion:'South Korea', institution:"Sookmyung Women's University", participants:16 },
  { programme:'RWJP', countryOrRegion:'South Korea', institution:'Daejeon University', participants:9 },
  { programme:'RWJP', countryOrRegion:'South Korea', institution:'Kyung Hee University', participants:2 },
  { programme:'RWJP', countryOrRegion:'New Zealand', institution:'University of Auckland', participants:11 },
  { programme:'RWJP', countryOrRegion:'Taiwan', institution:'National Taiwan University', participants:2 },
  { programme:'RWJP', countryOrRegion:'Taiwan', institution:'Feng Chia University', participants:1 },
  { programme:'RWJP', countryOrRegion:'China', institution:'Nanjing University', participants:1 },
  { programme:'RWJP', countryOrRegion:'Singapore', institution:'National University of Singapore', participants:1 },
  { programme:'RWJP', countryOrRegion:'Turkmenistan', institution:'Oguzhan Engineering and Technology University of Turkmenistan', participants:1 },
  { programme:'RWJP', countryOrRegion:'United Kingdom', institution:'University of Leicester', participants:1 },
  { programme:'RWJP', countryOrRegion:'United States', institution:'Harper College', participants:1 },
  { programme:'RWJP Express', countryOrRegion:'South Korea', institution:'Gachon University', participants:30 },
  { programme:'RWJP Express', countryOrRegion:'South Korea', institution:'Konkuk University', participants:14 },
  { programme:'RWJP Express', countryOrRegion:'South Korea', institution:'Ajou University', participants:8 },
  { programme:'RWJP Express', countryOrRegion:'South Korea', institution:'Daejeon University', participants:4 },
  { programme:'RWJP Express', countryOrRegion:'South Korea', institution:'Kyung Hee University', participants:1 },
  { programme:'RWJP Express', countryOrRegion:'China', institution:'Anhui University', participants:1 },
  { programme:'RWJP Express', countryOrRegion:'China', institution:'Inner Mongolia University of Technology', participants:1 },
  { programme:'RWJP Express', countryOrRegion:'China', institution:'Shenyang University of Science and Technology', participants:1 },
  { programme:'RWJP Express', countryOrRegion:'China', institution:'Zhejiang International Studies University', participants:1 },
  { programme:'RWJP Express', countryOrRegion:'China', institution:'Capital University of Economics and Business', participants:1 },
  { programme:'RWJP Express', countryOrRegion:'Taiwan', institution:'National Taiwan University', participants:4 },
  { programme:'RWJP Express', countryOrRegion:'Indonesia', institution:'Universitas Atma Jaya Yogyakarta', participants:2 },
  { programme:'RWJP Express', countryOrRegion:'United Kingdom', institution:'University of Leeds', participants:1 },
  { programme:'RWJP Express', countryOrRegion:'United Kingdom', institution:'SOAS University of London', participants:1 },
  { programme:'RWJP Express', countryOrRegion:'Australia', institution:'Queensland University of Technology', participants:1 },
];

export function participationByProgramme(programme: ProgrammeParticipationRecord['programme']) { return participationHistory.filter((record)=>record.programme===programme); }
export function summarizeParticipation(records: ProgrammeParticipationRecord[]) { return { participants:records.reduce((sum,record)=>sum+record.participants,0), countries:new Set(records.map((record)=>record.countryOrRegion)).size, institutions:new Set(records.map((record)=>`${record.countryOrRegion}\u0000${record.institution}`)).size }; }
export function participationByCountry(records: ProgrammeParticipationRecord[]) {
  const grouped=new Map<string,{participants:number;institutions:Map<string,number>}>();
  records.forEach((record)=>{const country=grouped.get(record.countryOrRegion)??{participants:0,institutions:new Map<string,number>()};country.participants+=record.participants;country.institutions.set(record.institution,(country.institutions.get(record.institution)??0)+record.participants);grouped.set(record.countryOrRegion,country);});
  return [...grouped.entries()].map(([countryOrRegion,value])=>({countryOrRegion,participants:value.participants,institutions:[...value.institutions.entries()].map(([institution,participants])=>({institution,participants})).sort((a,b)=>b.participants-a.participants||a.institution.localeCompare(b.institution))})).sort((a,b)=>b.participants-a.participants||a.countryOrRegion.localeCompare(b.countryOrRegion));
}
export const participationHistoryStatus={status:'verified' as const,source:participationHistorySource,note:'Recovered from the previously supplied integrated workbook and reconciled to the former globe evidence layer.'};
