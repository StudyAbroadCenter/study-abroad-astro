export type ProgrammeParticipationRecord = {
  year: number;
  programme: 'RWJP' | 'RWJP Express' | 'RSJP' | 'RSJP Express' | 'RDSP' | 'RBMP' | 'Custom';
  countryOrRegion: string;
  institution: string;
  participants: number;
  source: string;
  verifiedAt: string;
};

/**
 * Canonical historical participation dataset.
 *
 * Rules:
 * - Add records only when participant counts, institution and country/region are verified from an authoritative source.
 * - Never infer or reconstruct counts from photos, testimonials or partial rosters.
 * - Keep programme names explicit so the homepage can aggregate all programmes while programme pages can filter safely.
 * - Do not publish personally identifiable participant data here.
 */
export const participationHistory: ProgrammeParticipationRecord[] = [];

export const participationHistoryStatus = {
  status: 'awaiting-verified-data' as const,
  note: 'The UI is ready for historical participation evidence, but no unverified counts are published.',
};

export function summarizeParticipation(records: ProgrammeParticipationRecord[]) {
  const participants = records.reduce((sum, record) => sum + record.participants, 0);
  const countries = new Set(records.map((record) => record.countryOrRegion));
  const institutions = new Set(records.map((record) => record.institution));
  const years = new Set(records.map((record) => record.year));

  return {
    participants,
    countries: countries.size,
    institutions: institutions.size,
    years: [...years].sort((a, b) => b - a),
  };
}
