# Current Offering Facts — Annual Update Handbook

Status: IMPLEMENTED

## 1. Purpose

年度が変わるたびに、日本語・英語・韓国語・中国語の各ページで日程や費用を個別修正する運用を廃止する。

年次で変わる運用事実は、原則として次の1ファイルだけを編集する。

`src/data/current-offerings.ts`

基本原則は次のとおり。

> One fact. One authoritative source. Many consistent views.

## 2. このファイルで管理するもの

各プログラムについて、年度で変わり得る以下の値を管理する。

- academicYear
- programmeDates
- applicationPeriod
- checkIn / checkOut
- programmeFeeJPY
- accommodationFeeJPY
- minimumParticipants
- paymentMethod
- refundDeductionJPY
- status / certainty
- source
- verifiedAt

確認できていない値は `null` のままにする。

前年値、推測値、他プログラムからの類推値で埋めてはならない。

## 3. 日本語正本との関係

日本語版は、Study Abroad Center が何を実施し、どのような教育的・社会的価値を生み出しているかを説明する制度・編集上の正本とする。

ただし、日程・費用・申請期間などの可変事実を日本語文章そのものに埋め込んで正本化しない。

可変事実は言語中立の構造化データとして `current-offerings.ts` に置き、日本語を含む各言語が同じ値を参照する。

これにより、例えば参加費を一度変更すれば、同じ金額を日本語・英語・韓国語・中国語で別々に修正する必要がない。

## 4. 多言語コピーの考え方

英語・韓国語・中国語は、日本語文章の逐語訳ではない。

各言語で以下は自然な表現に書き分けてよい。

- プログラムの魅力
- 学生体験の説明
- 見出し
- 行動喚起
- 文化的に自然な説明順序

一方、以下は各言語が独自に決めてはならない。

- 年度
- 日程
- 費用
- 申請期間
- 宿泊日程・宿泊費
- 最少催行人数
- 支払方法
- 返金時の数値条件

## 5. 高リスク文章

Eligibility、返金・キャンセル、健康条件、安全管理、宿泊条件など、意味を誤ると参加判断に影響する文章は、自動翻訳して即時公開しない。

数値・日程等は構造化データから同期するが、説明文章は各言語で内容確認を行う。

つまり、SSOTは「すべての文章を一つにする」仕組みではない。

事実を一つにし、表現は各言語に最適化する仕組みである。

## 6. CIガード

`npm run audit:facts`

ビルド前に `scripts/audit-offering-facts.mjs` が実行される。

この監査は、正本に登録された日付・金額が以下の公開用編集ファイルへ再び直書きされていないかを検査する。

- Japanese programme editorial surfaces
- English programme/detail/home surfaces
- Korean programme/detail/home surfaces
- Simplified / Traditional Chinese programme/detail/home surfaces

重複を検出した場合、buildを失敗させる。

## 7. 年度更新の標準手順

1. 正式資料・担当者確認等により新年度情報を確認する。
2. `src/data/current-offerings.ts` の該当プログラムだけを更新する。
3. `source` と `verifiedAt` も更新する。
4. 未確認値は `null` にする。
5. Pull Request を作成する。
6. CIで `audit:facts`、Astro check/build、多言語UAT、Visual UATを通す。
7. 高リスク文章に変更がある場合は各言語の文章を別途レビューする。
8. レビュー後に公開する。

## 8. 歴史実績との分離

現在のOffering年度と、過去の参加実績年度を混同しない。

例えば `2023–2026` の参加実績は歴史データであり、`academicYear` を新年度へ変更しても変化してはならない。

現在年度の募集情報と、過去実績・多文化共修のEvidenceは別のFact Domainとして管理する。

## 9. 個人情報

公開サイトの正本データには参加学生の氏名、メール、学生番号その他の個人情報を置かない。

Buddyや学生交流で個人情報を扱う場合、その運用データは公開Astroリポジトリとは分離する。

Webへ公開するのは、根拠が確認できた匿名・集計済みEvidenceのみとする。
