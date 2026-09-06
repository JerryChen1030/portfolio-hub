# Portfolio Hub - Agent Documentation

本檔提供 AI coding agent 在這個 repo 上工作所需的最小上下文。

## Project Overview

個人網站：閱讀筆記 × 作品集。Astro 5 + TypeScript，`output: 'static'`，建置時全部產成靜態檔案。**永續硬規則：執行時零 AI API；無登入／CMS／資料庫。** 內容一律是 repo 內的 Markdown 檔，透過 Astro Content Collections 做 schema 驗證。

## Directory Structure

```
portfolio-hub/
├── astro.config.mjs        # site 網址（部署前需改成正式網域）、output: 'static'
├── tsconfig.json           # extends astro/tsconfigs/strict
├── src/
│   ├── site.config.ts      # 站名／tagline／topics／導覽列，唯一改站名的地方
│   ├── content/
│   │   ├── config.ts       # 三個 collection 的 zod schema：reading / digest / project
│   │   ├── reading/*.md
│   │   ├── digest/*.md
│   │   └── project/*.md
│   ├── layouts/
│   │   └── BaseLayout.astro   # 共用 <head>／導覽／footer／RSS meta link
│   ├── components/
│   │   ├── Hero.astro         # 首頁 Hero，雙 CTA 寫死指向 /work、/reading
│   │   ├── PostCard.astro     # reading／digest 列表用的卡片
│   │   └── ProjectCard.astro  # project 列表用的卡片
│   └── pages/
│       ├── index.astro        # 首頁：Hero＋精選作品(≤3)＋最近更新(6–9)＋關於摘要
│       ├── about.astro
│       ├── reading/{index,[slug]}.astro
│       ├── notes/{index,[slug]}.astro   # 路由是 /notes，但讀的是 digest collection
│       ├── work/{index,[slug]}.astro    # 路由是 /work，讀的是 project collection
│       └── rss.xml.js         # RSS：reading + digest，依 date 排序，排除 private
└── README.md                # 含 Cloudflare Pages / GitHub Pages 部署步驟
```

## Data Model

三個 collection 定義在 `src/content/config.ts`：

| Collection | 對應路由 | 關鍵欄位 |
|---|---|---|
| `reading` | `/reading` | `title`, `date`, `author?`, `sourceUrl?`, `description?`, `cover?`, `private` |
| `digest` | `/notes` | `title`, `date`, `person`, `sourceUrl`, `sourceType`(enum), `description?`, `readingMinutes?`, `cover?`, `private` |
| `project` | `/work` | `title`, `date`, `description`, `url?`, `repoUrl?`, `cover?`, `featured`, `private` |

`private` 全部預設 `false`；三個 collection 的 index 頁、首頁「最近更新」、首頁「精選作品」、`rss.xml.js` 都用 `getCollection(name, ({ data }) => !data.private)` 過濾。**注意：`private: true` 只是不進列表／RSS，個別頁面（`[slug].astro`）仍會建置成靜態頁、網址仍可直接存取** —— 這是純靜態站在沒有登入機制下能做到的極限，不要拿來放真正敏感的內容。

`digest` 正文（Markdown body，不是 frontmatter）固定順序：**原文連結 → Takeaway → 我的 3 句摘要**，見 `src/content/digest/roger-on-taste.md` 範例。

## Common Tasks

### 新增一篇閱讀筆記 / 筆記 / 作品
直接在對應的 `src/content/{reading,digest,project}/` 底下新增一個 `.md` 檔，frontmatter 依 `src/content/config.ts` 的 schema 填。不用改任何程式碼，Astro 會自動產生列表項目與 `[slug]` 頁。

### 改站名／tagline／topics／導覽列
只改 `src/site.config.ts`，其他檔案都是讀這個檔案的值。

### 新增一個 collection
1. 在 `src/content/config.ts` 用 `defineCollection` 加 schema，並加進 `export const collections`。
2. 在 `src/content/<name>/` 放至少一篇範例 `.md`。
3. 依需要在 `src/pages/` 底下加對應的 `index.astro` / `[slug].astro`（可以照抄 `reading` 的兩個檔案改欄位）。

### 部署前必做
把 `astro.config.mjs` 的 `site: 'https://example.com'` 換成正式網址，否則 RSS 裡的絕對連結會是假的。

## Verification

```bash
npm install
npm run build   # 產出 dist/，這是唯一的驗收標準
```

沒有測試框架、沒有 lint 設定——這是刻意的：站點內容全部是 Markdown＋少量 Astro 元件，`astro build` 本身的型別檢查（TypeScript strict + zod schema 驗證）就是主要的正確性防線。
