import { rwjp2027Facts, type RwjpFacts } from './rwjp-2027-facts';

export type RwjpOfferingYear = 2027;

export const rwjpAnnualFacts: Record<RwjpOfferingYear, RwjpFacts> = {
  2027: rwjp2027Facts,
};

export const getRwjpAnnualFacts = (year: RwjpOfferingYear): RwjpFacts => rwjpAnnualFacts[year];

// Add future offerings as separate records (for example 2028) rather than overwriting historical facts.
// Website, FAQ, Manual and all locales must consume this registry instead of maintaining independent annual values.
