export interface TaishogunDormitoryDamagePolicy {
  id: string;
  appliesTo: Array<'RWJP' | 'RWJP Express'>;
  residentResponsibleForDamage: boolean;
  residentResponsibleForLoss: boolean;
  roomKeyIncluded: boolean;
  shortAnswerJa: string;
  detailJa: string;
  audiences: Array<'website' | 'manual' | 'faq'>;
  certainty: 'Confirmed' | 'Provisional';
  source: string;
  verifiedAt: string;
}

export const taishogunDormitoryDamagePolicy: TaishogunDormitoryDamagePolicy = {
  id: 'taishogun.accommodation.damage-and-loss',
  appliesTo: ['RWJP', 'RWJP Express'],
  residentResponsibleForDamage: true,
  residentResponsibleForLoss: true,
  roomKeyIncluded: true,
  shortAnswerJa: '大将軍寮の設備・備品・ルームキー等を破損または紛失した場合、修理費・交換費等は原則として本人負担です。',
  detailJa: '大将軍寮の居室、共用設備、備品、ルームキーその他の貸与物を、参加者の責任により破損または紛失した場合は、必要となる修理費、交換費、再発行費その他の実費を参加者本人が負担します。参加者は施設・備品を適切に使用し、紛失や破損が生じた場合は速やかに寮スタッフまたはプログラム事務局へ連絡してください。',
  audiences: ['website', 'manual', 'faq'],
  certainty: 'Confirmed',
  source: 'Programme owner working confirmation for RWJP / RWJP Express',
  verifiedAt: '2026-08-14',
};
