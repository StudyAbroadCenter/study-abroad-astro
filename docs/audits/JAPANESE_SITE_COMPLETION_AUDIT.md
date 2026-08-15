# Japanese Site Completion Audit

## RSJP Experience System — 日本語マスターサイト完成監査

Updated: 2026-08-16  
Status: **MVP IMPLEMENTED / CI & VISUAL UAT PENDING**  
Scope: Japanese master site at unprefixed routes (`/`, `/programs/...`)

Purpose: 日本語版を英語・韓国語ローカライズの基準として使える完成状態へ引き上げる。同時に、社内プレゼンMVPと一般公開V1の完成条件を混同しない。

---

## 1. Two release gates

### Gate A1 — Internal presentation MVP

会社・大学内のプレゼンで、サイト全体の設計思想と完成イメージを実際にクリックしながら説明できること。

必要条件:

- 日本語が unprefixed route のマスターになっている
- トップ → 一覧 → 各プログラム詳細の導線が切れない
- 準備中ページでも404にならず、未確認情報を発明しない
- 旧英語 / fictional prototype が導線上に残らない
- 主要コピー、フォントサイズ、改行、余白、写真、CTAがプレゼン品質
- 320px / 390px / tablet / desktop の視覚UAT
- CI / Vercel Green
- unresolved P1 / P2 = 0

### Gate A2 — Japanese public V1

一般公開する募集サイトとして、年度別の募集事実まで権威ある情報源で確定していること。

Gate A1に加えて:

- 各プログラムの正式名称
- 年度別日程・期間
- 費用
- 応募資格
- キャンパス
- 宿泊
- 募集状況
- 応募方法
- 連絡先
- 安全・保険・キャンセル条件

を authoritative fact domain から表示する。

**未確認値は、見栄えのために補わない。**

---

## 2. Current judgement

### Internal presentation MVP

**CONDITIONAL GO — visual UAT pending**

実装・情報設計・コピー・導線はMVPとして大きく前進した。現在の残ゲートは最新HEADのCI / Vercel確認と、実ブラウザでのdesktop / 390px / 320px目視確認。

### Japanese public V1

**NO-GO — programme fact verification remains**

理由はデザインではない。非RWJPプログラムの年度別事実と、RDSPの正式名称など、権威あるソースで確定すべき情報が残っているため。

英語版は、日本語MVPの視覚UATが完了し、日本語の情報構造・コピー・デザインが固定された後に着手する。一般公開前には日本語 / 英語ともGate A2相当の事実確認を行う。

---

## 3. Former blockers — current status

### B-01 — Japanese canonical route

Status: **RESOLVED**

- `/` = Japanese master
- `/programs/<id>/` = Japanese programme route
- `/ja/` = redirect only
- `/ja/programs/<id>/` = unprefixed routeへredirect

新しい `/ja/` canonical link は作らない。

### B-02 — prototype / unverified programme facts exposed in discovery UI

Status: **MVP EXPOSURE RESOLVED / FACT MIGRATION REMAINS FOR PUBLIC V1**

以前はProgram Finderと`/programs/`が`src/data/programs.ts`のprototype/unverifiedな季節・期間・キャンパス等をそのまま表示していた。

Current implementation:

- Program Finderから未検証の季節フィルターを削除
- 期間・季節・キャンパスのprototype値をカードから非表示
- `/programs/`でも同値を表示しない
- overview用に`src/data/programme-public-descriptors.ts`を追加
- public descriptorは年度別運用条件を持たない
- 年度別条件はverifiedな詳細ページへ送る

Remaining for public V1:

- 各プログラムの運用事実をauthoritative fact domainへ移行
- verified factからカード / detail / Englishを生成

### B-03 — RDSP official-name conflict

Status: **PUBLIC CLAIM SUPPRESSED / AUTHORITATIVE RESOLUTION STILL REQUIRED**

Repository内に`Ritsumeikan Data Science Program`と`Ritsumeikan Discover Studies Program`の不整合があるため、推測でどちらかを採用しない。

Current implementation:

- overview / metadata / draft registryでは`RDSP`のみを使用
- `正式名称確認中`を明示

Required before public V1:

- authoritative sourceで正式名称を確定
- registry / page / metadata / docsを一括更新

### B-04 — top registry and detail coverage mismatch

Status: **RESOLVED FOR MVP**

RSJP / RSJP Express / RWJP / RWJP Express / RDSP / RBMP / Custom Programsの全カードが実routeを持つ。

未完成ページも404ではなく、未確認項目を`確認中`として扱うMVPページを表示する。

### B-05 — non-functional programme CTA

Status: **RESOLVED**

カード画像・タイトル・`詳細を見る`から詳細routeへ移動できる。

### B-06 — Support preview only

Status: **RESOLVED FOR MVP**

トップ末尾を5段階のsupport journeyへ更新:

1. 応募・手続き
2. 渡航前の準備
3. 到着・宿泊
4. 滞在中の安心
5. 修了・帰国

具体的制度はプログラム別のverified情報に従う。

### B-07 — FAQ / Contact / About / Programme index old prototype

Status: **RESOLVED FOR MVP**

旧英語 / fictional prototypeを日本語MVPへ置換。

- `/programs/`
- `/about/`
- `/faq/`
- `/contact/`
- `/404/`

これらは現在noindexで、公開V1のindexability判断は後で行う。

---

## 4. Japanese editorial / typography state

Current master rule:

**公式情報は短く強く。学生向けコピーでは少し遊ぶ。事実では遊ばない。**

Implemented:

- `ja-final-editorial.css`を最終CSS層として読み込む
- 日本語本文の可読サイズを底上げ
- 注記 / helper textの極端な小型化を抑止
- `line-break: strict`
- 重要見出しはsemantic lineを使用
- 日本語幅に`ch`を使わない
- major H2はdesktopで原則1–2 semantic lines
- section間の事故的な大余白を圧縮
- 390px / 320pxではdesktop nowrapを解放

Playful copy examples are intentionally limited to student-facing surfaces:

- `何が好き？ 何を学ぶ？`
- `見るだけじゃ、もったいない。`
- `短くても、学びは濃く。`
- `「かわいい」だけでもいい。行動できたら、もっといい。`

Evidence / fees / eligibility / application / safetyには使用しない。

---

## 5. Truth / interaction safeguards

Implemented:

- Historical participation = historical evidence, not current partnership
- country / region = sending institution location, not participant nationality
- five-week network = RSJP + RWJP only; Express excluded
- RWJP directory = RWJP-only historical records
- shared Participant Dayから架空のexact timeを削除
- generic Buddy / friendship guaranteeを削除
- student interaction is an opportunity, not a promised relationship
- RWJP current facts and application-state logic remain in the verified domain
- unknown facts display as unknown / preparing rather than being invented

---

## 6. Current route inventory

Japanese master / MVP review routes:

- `/`
- `/programs/`
- `/programs/rsjp/`
- `/programs/rsjp-express/`
- `/programs/rwjp/`
- `/programs/rwjp-express/`
- `/programs/rdsp/`
- `/programs/rbmp/`
- `/programs/custom-programs/`
- `/about/`
- `/faq/`
- `/contact/`
- 404

Legacy redirect only:

- `/ja/`
- `/ja/programs/<id>/`

---

## 7. Remaining visual UAT

Before merging the Japanese editorial PR, inspect at:

- wide desktop
- intermediate / laptop
- 390px
- 320px

Check:

- header logo and `Ritsumeikan Study Abroad Center`
- hero image remains the approved original
- CTA contrast
- no text/background colour collision
- no card or label overlap
- no horizontal page overflow
- no single-character / particle orphan in Japanese display headings
- Global Evidence network labels do not collide
- Participant Day scene metadata fits at 390px / 320px
- Program Finder safe-status copy remains readable
- section transitions do not create empty-screen gaps
- RWJP facts / practical / decision text is readable on projector and mobile
- Express social-style mock remains clearly a mock, not an actual app

---

## 8. English handoff rule

Japanese is the master product.

After Japanese Gate A1 visual sign-off:

- create `/en/`
- keep the same design system and information architecture
- preserve fact identity exactly
- rewrite copy for English-native readers
- do **not** translate sentence-by-sentence
- adjust heading length, CTA wording, paragraph order and explanatory style for English
- rerun 320px / 390px / tablet / desktop UAT because English expands differently

English quality question:

> Would an English-speaking prospective student believe this page was written for them in English?

If not, localisation is not complete.

---

## 9. Release decision

Current decision:

**PR #50 — NO MERGE until current CI / Vercel are Green and visual UAT passes.**

After those gates:

**GO — Internal Japanese MVP**

Public Japanese V1 remains separately gated by authoritative programme-fact verification, especially RDSP naming and non-RWJP annual offering facts.
