# Japanese Site Completion Audit

## RSJP Experience System — 日本語マスターサイト完成監査

Status: **NOT READY / Gate A 未達**

Scope: Japanese master site at unprefixed routes (`/`, `/programs/...`)

Purpose: 日本語版を英語・韓国語ローカライズの基準として使える完成状態まで引き上げるため、未完成要素・事実リスク・UX欠落を追跡する。

---

## 1. Completion Standard

日本語版は、単に見た目が完成しているだけでは完成としない。

Gate A を通過するには、少なくとも以下を満たすこと。

- 日本語の正規URLが `/ja/` ではなく unprefixed route になっている
- 主要導線に404・旧プロトタイプ・準備中リンクがない
- 掲載するプログラム事実が権威ある情報源で確認されている
- トップと詳細ページで名称・期間・キャンパス・位置づけが矛盾しない
- 全主要プログラムに必要な詳細ページがある
- サポート、応募案内、FAQ、問い合わせの主要導線が実用状態である
- placeholder / prototype / fictional / sample 表示を本番情報として残さない
- 320px / 390px / tablet / desktop で主要導線を確認する
- accessibility basics と metadata を確認する
- production で index させるページと noindex のページを意図的に管理する

---

## 2. Audit Result Summary

### Overall judgement

**NOT READY**

日本語トップの視覚品質とブランド方向は強いが、現在は「完成した募集サイト」ではなく、完成度の高いトップページと複数の開発中プログラムページを組み合わせた状態である。

現段階で英語・韓国語へ展開すると、未検証情報・未完成導線・ページ構成不足まで複製する危険がある。

したがって、英語ローカライズ開始前に日本語 Gate A を通す。

---

## 3. BLOCKERS — 日本語完成前に必須修正

### B-01 — 日本語の canonical route を root に統一

Status: **IMPLEMENTED / CI確認待ち**

Required architecture:

- `/` = 日本語トップ
- `/programs/<id>/` = 日本語プログラム詳細
- `/ja/` = legacy redirect only
- `/ja/programs/<id>/` = equivalent unprefixed route へ redirect

Do not create new `/ja/` canonical links.

### B-02 — プログラム情報が prototype / unverified のまま表示されている

Status: **BLOCKER**

`src/data/programs.ts` 自身が、現在の値を authoritative Source of Truth ではなく prototype/unverified と明示している。

しかしトップの Program Finder はこのデータから、期間・季節・キャンパス・概要等をユーザー向けに表示している。

Required action:

1. 各プログラムについて権威ある仕様・募集要項・確定資料を特定する。
2. 日程、期間、料金、応募資格、キャンパス、募集状況、宿泊、語学要件等を verified fact domain に移す。
3. 未確認値は削除または「確認中」と明示する。
4. トップカードと詳細ページが同じ verified fact を参照するようにする。

### B-03 — RDSP の名称・位置づけに repository 内不整合がある

Status: **BLOCKER**

Repository 内で RDSP の展開名・位置づけが一貫していない。

例として、現行実装データには `Ritsumeikan Data Science Program` が存在する一方、PR文脈では `Ritsumeikan Discover Studies Program` として扱われている。

推測で統一しないこと。

Required action:

- authoritative source で正式名称を確認する
- program registry / detail page / metadata / headings / documentation を一括して統一する

### B-04 — トップに表示するプログラムと詳細ページ registry が一致していない

Status: **BLOCKER**

トップ側 registry は個人向けとして RSJP / RSJP Express / RWJP / RWJP Express / RDSP / RBMP を扱うが、programme detail draft registry は RWJP / RWJP Express / RDSP / RBMP のみ。

RSJP と RSJP Express は日本語マスター完成に必要な詳細ページが不足している。

Required action:

- 全募集対象プログラムの detail route を定義
- verified facts が揃うまで未確認項目を発明しない
- 同一 programme registry からトップと詳細ページを整合させる

### B-05 — Program Finder の詳細CTAが機能していない

Status: **BLOCKER**

各カードは現在 `詳細ページは準備中` の button であり、利用者が詳細へ進めない。

一部には既に詳細ページ実装が存在するため、ページの readiness に応じて実リンクへ切り替える。

Required action:

- completed detail page → 実リンク
- incomplete page → 明確な unavailable state
- button に見えるが遷移しない疑似CTAを本番完成版に残さない

### B-06 — サポートセクションが preview のまま

Status: **BLOCKER**

トップ末尾の Support は `NEXT 01` / `今後追加するコンテンツ` として実装されている。

Required action:

最低限、以下のユーザー判断材料を完成させる。

- 応募前の問い合わせ
- 渡航準備
- 宿泊
- 保険
- 緊急時対応
- 到着時サポート
- プログラム期間中の相談先
- 帰国までの基本フロー

内部運用を過剰公開せず、学生が安心して判断できる範囲に限定する。

### B-07 — 日本語の FAQ / Application / Contact journey が完成していない

Status: **BLOCKER**

root 配下には旧英語プロトタイプ由来の `faq.astro`, `contact.astro`, `about.astro`, `programs/index.astro` 等が残っている。

日本語をメインサイトとする以上、これらをそのまま indexable な public route として残さない。

Required action:

- 必要なものは日本語マスターとして再実装
- 不要な旧prototype route は削除、隔離、または noindex + 非導線化
- 本番 sitemap / canonical から prototype page を除外

---

## 4. HIGH PRIORITY — Gate A までに修正

### H-01 — Programme detail pages が開発中 metadata のまま

現行 detail route は `robots="noindex,nofollow"` で、description も「制作中」です。

開発中としては正しいが、本番完成条件ではない。

各ページ完成時にのみ indexability を切り替える。

### H-02 — Shared facts と presentation copy の境界を強化

現在 `programs.ts` と `programme-page-drafts.ts` に関連情報が分散している。

同一事実を複数箇所で独立更新する構造は、多言語化後に不整合を生む。

Required action:

- locale-neutral verified facts を1つの管理境界に寄せる
- locale copy は別管理
- UI component に事実を重複 hard-code しない

### H-03 — Language switcher は locale ready になるまで出さない

日本語完成フェーズでは、未完成英語版へ誘導する `EN` link を表示しない。

English Gate B を満たした時点で `/en/` を有効化する。

Korean Gate C を満たした時点で `/ko/` を有効化する。

### H-04 — CTA architecture を完成させる

トップには魅力訴求だけでなく、最終的に次の行動へ進める明確な導線が必要。

最低限検討する CTA:

- プログラム詳細を見る
- 日程・費用を見る
- 応募条件を見る
- 応募方法を見る
- 問い合わせる

未確定の申込受付を `Apply Now` 相当で誤認させない。

### H-05 — Historical / previous programme media labeling

過去実施写真は有効だが、現在年度の実施内容と誤認させない。

programme-specific photo / previous programme / concept visual の区別を維持する。

---

## 5. UX / VISUAL AUDIT

### Current strengths

- ファーストビューは「短期留学の大学サイト」として一般的な大学公式サイトより体験価値を強く伝えられている。
- 実写真を大きく使う方向は学生が参加後を想像しやすい。
- 「学ぶだけでは、終わらない。」は日本語マスターのブランド軸として機能している。
- ナビゲーション項目は学生目線で、大学内部組織ベースになっていない。
- Program Finder → Experience → Participant Day → Campus Journey という流れは product direction と整合する。

### Remaining visual checks

- hero text contrast を実機・複数ディスプレイで確認
- 320px / 390px で hero copy と CTA が viewport 内で破綻しないこと
- large image の crop が人物や重要情報を不自然に切らないこと
- anchor navigation 後に sticky header が見出しを隠さないこと
- keyboard focus が dark hero / dark header 上でも常に視認できること
- motion が `prefers-reduced-motion` に対応すること
- long Japanese heading の manual `<br>` が狭幅で不自然にならないこと

---

## 6. SEO / ACCESSIBILITY AUDIT

Before Gate A:

- root Japanese pages use `<html lang="ja">`
- canonical points to unprefixed Japanese URL
- legacy `/ja/` is redirect only
- old prototype pages are not accidentally canonical/indexable
- each completed programme has unique title / description
- heading hierarchy has one clear page H1
- meaningful images have meaningful Japanese alt text
- decorative images use empty alt or equivalent treatment
- language switcher is absent until destinations are valid
- keyboard navigation and focus states work
- 404 behaviour is deliberate

Multilingual SEO (`hreflang`) is deferred until `/en/` and `/ko/` equivalent pages exist.

---

## 7. Recommended Implementation Order

1. Verify root Japanese routing and legacy `/ja/` redirects in CI / Preview.
2. Quarantine or replace old English prototype routes at unprefixed URLs.
3. Establish verified programme fact source and resolve RDSP naming conflict.
4. Align top programme registry and detail-page registry.
5. Complete RSJP / RSJP Express detail pages.
6. Finish RWJP / RWJP Express / RDSP detail pages and review RBMP provisional status.
7. Wire real detail CTAs from Program Finder.
8. Build Support section.
9. Build Japanese FAQ / Application Guidance / Contact journeys.
10. Run factual cross-page audit.
11. Run 320px / 390px / tablet / desktop UAT.
12. Run accessibility / SEO / performance checks.
13. Only after Gate A = PASS, begin English localisation.

---

## 8. Release Decision

Current decision: **NO-GO for Japanese V1 completion**

Reason: visual direction is advanced, but verified programme facts, complete detail coverage, support/application journeys, CTA completion, and legacy prototype cleanup are not yet complete.

This is a normal development-state NO-GO, not a recommendation to redesign the site.

The current design should be preserved while the information architecture, verified facts, and missing journeys are completed.

Target decision after remediation: **GO — Japanese Master V1**, then begin `/en/` localisation.
