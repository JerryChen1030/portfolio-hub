# Portfolio Hub

彥睿的個人網站：閱讀筆記 × 作品集。Astro＋TypeScript 打造的靜態網站，建置時產生純 HTML／CSS 檔案，執行期不呼叫任何 AI API，沒有登入、CMS 或資料庫。

## 網站結構

| 路由 | 內容 |
|---|---|
| `/` | 首頁：Hero、精選作品（≤3）、最近更新（6–9 則）、關於摘要 |
| `/reading` | 閱讀筆記列表 |
| `/notes` | 筆記／摘要列表（對應 `digest` collection） |
| `/work` | 作品集列表 |
| `/about` | 關於我 |
| `/rss.xml` | RSS 訂閱（閱讀筆記＋筆記） |

## 內容管理

內容以 Markdown 檔案存放在 `src/content/`，透過 Astro Content Collections 驗證欄位（見 `src/content/config.ts`）。新增一篇文章＝新增一個 `.md` 檔，不需要任何後台或資料庫。

- `src/content/reading/` — 閱讀筆記
- `src/content/digest/` — 精選摘要（欄位對齊 Roger publication：`person`、`sourceUrl`、`sourceType`，可選 `description`／`readingMinutes`／`cover`；正文順序固定為「原文連結 → Takeaway → 我的 3 句摘要」）
- `src/content/project/` — 作品集項目（`featured: true` 的項目會出現在首頁精選作品）

任何項目加上 `private: true` 就不會出現在列表、首頁或 RSS 裡（但不做登入保護，仍是公開可存取的網址，不要用來放真正敏感的內容）。

## 本機開發

```bash
npm install
npm run dev
```

## 建置

```bash
npm run build
```

輸出在 `dist/`，純靜態檔案，可直接部署到任何靜態主機。

## 部署到 Cloudflare Pages

1. 到 Cloudflare Dashboard → Workers & Pages → 建立專案 → 連接這個 GitHub repo。
2. Build command 填 `npm run build`，Build output directory 填 `dist`。
3. 之後每次 push 到預設分支會自動重新建置部署。

也可以用 CLI（`npx wrangler pages deploy dist`）手動部署已建置好的 `dist/` 目錄。

## 部署到 GitHub Pages

1. 本機或 CI 執行 `npm run build`，產生 `dist/`。
2. 在 `astro.config.mjs` 把 `site` 換成正式網址（例如 `https://<user>.github.io/portfolio-hub`）；若不是部署在網域根目錄，另外加上 `base: '/portfolio-hub'`。
3. 用 GitHub Actions（`withastro/action`）或手動把 `dist/` 內容推到 `gh-pages` 分支，並在 repo Settings → Pages 指定該分支為發布來源。

## 授權

個人網站，內容版權屬於作者本人。
