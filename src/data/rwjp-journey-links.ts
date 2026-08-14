export type JourneyLinkState = 'ready' | 'awaiting-official-url';

export interface RwjpJourneyLink {
  id: 'application' | 'inquiry' | 'medical-form' | 'essay-template';
  labelJa: string;
  descriptionJa: string;
  url: string | null;
  state: JourneyLinkState;
  external: boolean;
}

/**
 * Canonical outbound-link boundary for the RWJP recruitment journey.
 *
 * Rules:
 * - Never invent or infer a URL.
 * - Only set state='ready' after the programme owner has confirmed the exact public URL/file.
 * - The website must fail closed: null/unconfirmed links are rendered disabled, not guessed.
 * - Annual application dates live in rwjp-2027-facts.ts; this file owns destinations only.
 */
export const rwjp2027JourneyLinks: Record<RwjpJourneyLink['id'], RwjpJourneyLink> = {
  application: {
    id: 'application',
    labelJa: '2027 RWJPに応募する',
    descriptionJa: '個人が直接申し込む正式なWeb申請フォームです。所属大学による推薦・ノミネーションが必要かは、応募前に所属大学へ確認してください。',
    url: null,
    state: 'awaiting-official-url',
    external: true,
  },
  inquiry: {
    id: 'inquiry',
    labelJa: 'RWJPについて問い合わせる',
    descriptionJa: '応募資格、申請書類、宿泊、支払い等について確認する正式な問い合わせ先です。',
    url: null,
    state: 'awaiting-official-url',
    external: true,
  },
  'medical-form': {
    id: 'medical-form',
    labelJa: '健康診断書をダウンロード',
    descriptionJa: '立命館所定様式です。医師の署名が必要です。',
    url: null,
    state: 'awaiting-official-url',
    external: false,
  },
  'essay-template': {
    id: 'essay-template',
    labelJa: '日本語エッセイ様式をダウンロード',
    descriptionJa: 'テーマを記載した所定テンプレートです。手書きで作成し、翻訳ソフトは使用しません。',
    url: null,
    state: 'awaiting-official-url',
    external: false,
  },
};

export const isJourneyLinkReady = (link: RwjpJourneyLink) => link.state === 'ready' && Boolean(link.url);
