export const programmeAcademicLoads = {
  fiveWeek: {
    id: 'japanese-five-week',
    appliesTo: ['RWJP offering verified against the approved annual source'] as const,
    classMinutes: 50,
    classesPerDay: 3,
    teachingDays: 23,
    totalMinutes: 50 * 3 * 23,
    totalHours: (50 * 3 * 23) / 60,
    certainty: 'Confirmed' as const,
    changePolicy: 'Re-verify against the approved source for each annual offering.',
    labelJa: '日本語講座：1コマ50分 × 1日3コマ × 23日 = 3,450分（57.5時間）',
  },
  express: {
    id: 'japanese-express',
    appliesTo: ['RWJP Express sessions verified against the approved annual source'] as const,
    classMinutes: 50,
    classesPerDay: 3,
    teachingDays: 9,
    totalMinutes: 50 * 3 * 9,
    totalHours: (50 * 3 * 9) / 60,
    certainty: 'Confirmed' as const,
    changePolicy: 'Verified for the approved 2027 RWJP Express offering; re-verify against the approved source for each future offering.'
    labelJa: '日本語講座：1コマ50分 × 1日3コマ × 9日 = 1,350分（22.5時間）',
  },
} as const;

export type ProgrammeAcademicLoadKey = keyof typeof programmeAcademicLoads;
