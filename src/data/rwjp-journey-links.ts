export type JourneyLinkState = 'ready' | 'awaiting-official-url';

export interface RwjpJourneyLink {
  id: 'application' | 'inquiry' | 'medical-form' | 'essay-template';
  labelJa: string;
  descriptionJa: string;
  url: string | null;
  state: JourneyLinkState;
  external: boolean;
  phone?: string;
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
    descriptionJa: 'Microsoft Formsを利用した一次申請フォームです。氏名、連絡先、日本語学習歴、参加資格確認など、応募判断に必要な最小限の情報を収集し、申請書類の添付は求めません。募集期間中のみ応募ボタンを有効化します。',
    url: 'https://forms.cloud.microsoft/r/kUpnnQVYxG',
    state: 'ready',
    external: true,
  },
  inquiry: {
    id: 'inquiry',
    labelJa: 'RWJPについて問い合わせる',
    descriptionJa: '応募資格、申請書類、宿泊、支払い等について確認する正式な問い合わせ先です。',
    url: 'mailto:rsjprwjp@st.ritsumei.ac.jp',
    state: 'ready',
    external: false,
    phone: '075-466-3009',
  },
  'medical-form': {
    id: 'medical-form',
    labelJa: '健康診断書をダウンロード',
    descriptionJa: '立命館所定様式です。医師の署名が必要です。正式ファイルは後日掲載します。',
    url: null,
    state: 'awaiting-official-url',
    external: false,
  },
  'essay-template': {
    id: 'essay-template',
    labelJa: '日本語エッセイ様式をダウンロード',
    descriptionJa: 'テーマを記載した所定テンプレートです。手書きで作成し、翻訳ソフトは使用しません。正式ファイルは後日掲載します。',
    url: null,
    state: 'awaiting-official-url',
    external: false,
  },
};

export const isJourneyLinkReady = (link: RwjpJourneyLink) => link.state === 'ready' && Boolean(link.url);
