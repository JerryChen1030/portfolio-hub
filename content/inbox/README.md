# Inbox：SEED → Draft → Publish 工作流

本目錄是 portfolio-hub 的**內容進貨區**。網站執行時不呼叫任何 AI API；所有文章都是 git 裡的 Markdown，經 Astro Content Collections 建置成靜態頁。

## 目錄角色

| 路徑 | 用途 |
|------|------|
| `SEED_AUTHORITIES.md` | 人讀版權威庫：誰值得跟、為什麼、先讀哪篇 |
| `seed-authorities.yaml` | 機器友善版（Grok Bot / 腳本選題用） |
| `drafts/*.md` | 已起稿、尚未審核的 reading / digest；一律 `private: true` |
| （本 README） | 選題 → 草稿 → 進 `src/content/` 的流程說明 |

正式內容仍落在：

- `src/content/reading/*.md` → 路由 `/reading`
- `src/content/digest/*.md` → 路由 `/notes`
- `src/content/project/*.md` → 路由 `/work`

Schema 定義見 `src/content/config.ts`（frontmatter 用 camelCase）。

---

## 工作流（Jerry / Grok Bot）

### 1. 從 SEED 選一則來源

1. 開啟 `SEED_AUTHORITIES.md` 或 `seed-authorities.yaml`。
2. 優先挑 `priority: P0`，且 `suggested_content` 符合當下想寫的類型：
   - `reading`：自己讀完官方 docs / 長文後的消化筆記
   - `digest`：聽／讀某人觀點後的詮釋筆記（需有明確 `person`）
3. 用瀏覽器或 `curl` 再確認 `url` 仍可開（權威庫已驗證過一輪，但網頁會搬家）。

### 2. 在 `drafts/` 起稿（先不要進 src）

依類型建立檔案，例如 `drafts/reading-<slug>.md` 或 `drafts/digest-<slug>.md`。

**必須**符合 schema；草稿一律設定 `private: true`。

#### reading frontmatter

欄位：`title`, `date`, `author?`, `sourceUrl?`, `description?`, `cover?`, `private`。

正文可參考 `src/content/reading/deep-work.md`：為什麼讀 → 重點 → 我會怎麼用。

#### digest frontmatter

欄位：`title`, `date`, `person`, `sourceUrl`, `sourceType`, `description?`, `readingMinutes?`, `cover?`, `private`。

`sourceType` enum：`article` | `video` | `podcast` | `thread` | `paper` | `book` | `newsletter`。

正文固定順序（見 `src/content/digest/roger-on-taste.md`）：`## 原文連結` → `## Takeaway` → `## 我的 3 句摘要`。

### 3. 審核後進貨到 src/content

1. 把 private 改成 false（或刪掉該欄，預設 false）。
2. 移動檔案到對應 collection（不要複製留兩份）：
   - reading 到 src/content/reading/<slug>.md
   - digest 到 src/content/digest/<slug>.md
3. 檔名用 kebab-case slug；避免與現有 slug 衝突。
4. 本機用 Astro 建置驗證；schema 失敗就修 frontmatter。

### 4. 從 SEED 標記進度（建議）

在 SEED_AUTHORITIES.md 該則來源旁自行加狀態：未讀、草稿在 drafts、已進 src/content。

yaml 是選題索引，不是 CMS。

---

## 選題原則（對齊站點）

- 主題：ai / product / investing / engineering / career / writing。本 SEED 偏 AI coding workflows、agent orchestration、prompt/template、AGENTS.md / skills。
- 永續：只存 Markdown；讀者瀏覽時零 AI。
- 語言：標題、description、why-keep、正文用繁體中文（台灣）；人名、產品名、URL 保留英文。
- 品質：一篇有清楚 Takeaway 勝過十篇連結清單。

## 注意：private 的極限

private true 只會從列表、首頁最近更新、RSS 排除。個別 slug 靜態頁仍會被建置，知道網址仍可開。不要把真正敏感內容放進 content collections。

## 不要做的事

- 不要在 browse-time 呼叫模型 API 產文。
- 不要把未審核草稿直接丟進 src/content 且 private false。
- 不要發明來源 URL；以 SEED 已驗證連結或官方 docs 為準。
