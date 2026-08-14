export type RwjpApplicationProcessCertainty = 'Confirmed' | 'Provisional';

export interface RwjpApplicationProcessStep {
  id: string;
  order: number;
  titleJa: string;
  detailJa: string;
  certainty: RwjpApplicationProcessCertainty;
  audiences: Array<'website' | 'manual' | 'faq'>;
  source: string;
  verifiedAt: string;
}

const ownerConfirmation = 'Programme owner working confirmation for 2027 RWJP';
const common = {
  certainty: 'Confirmed' as const,
  audiences: ['website', 'manual', 'faq'] as Array<'website' | 'manual' | 'faq'>,
  source: ownerConfirmation,
  verifiedAt: '2026-08-14',
};

export const rwjpApplicationProcess: RwjpApplicationProcessStep[] = [
  {
    id: 'rwjp.application.check-home-university',
    order: 1,
    titleJa: '所属大学に申請方法を確認',
    detailJa: 'RWJPは個人がWebフォームから直接申請できます。ただし、所属大学が応募者を取りまとめる場合があります。申請前に所属大学へ、推薦・ノミネーション等が必要か、または自分で直接申請するのかを確認してください。',
    ...common,
  },
  {
    id: 'rwjp.application.submit-web-form',
    order: 2,
    titleJa: 'Webフォームから申請',
    detailJa: '所属大学から別途指示がない場合は、申請期間内に本人がプログラムWebサイトの申請フォームから必要情報と必要書類を提出します。',
    ...common,
  },
  {
    id: 'rwjp.application.result-by-email',
    order: 3,
    titleJa: '選考結果をメールで通知',
    detailJa: '申請後の選考結果は、申請者へメールで通知します。Webシステム上での合否発表は現行の正式運用ではありません。結果通知時期は年度ごとの正式案内を確認してください。',
    ...common,
  },
];

export const rwjpAdmissionNotification = {
  method: 'email' as const,
  resultPortalPublication: false,
  timing: null as string | null,
  timingCertainty: 'Provisional' as const,
  noteJa: '合否はメールで通知します。通知時期は年度ごとの正式案内で確定します。',
  source: ownerConfirmation,
  verifiedAt: '2026-08-14',
};
