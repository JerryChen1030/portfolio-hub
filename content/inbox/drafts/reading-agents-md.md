---
title: "AGENTS.md：給 coding agent 的 README"
date: 2026-09-06
author: "AGENTS.md / Agentic AI Foundation"
sourceUrl: "https://agents.md/"
description: "DRAFT｜開放格式說明：專案契約如何跨 Codex、Cursor、Amp 等工具共用。審核前勿公開。"
private: true
---

> **DRAFT（private: true）** — P0 starter。審核後改 `private: false` 並移到 `src/content/reading/`。

## 為什麼讀這篇

README 是寫給人類的；agent 需要另一份「可執行的 onboarding」：怎麼建置、測什麼、哪些路徑別碰、PR 怎麼開。AGENTS.md 把這份契約變成跨工具的慣例，正好是 portfolio-hub 這種「Markdown in git、瀏覽時零 AI」站點的協作介面。

## 三個重點

1. **與 README 分工**：人類看快速開始與貢獻指南；agent 看 build／test／convention／security 細節，避免 README 膨脹。
2. **沒有必填章節，但要可執行**：最有用的是可複製貼上的命令、明確邊界（Always／Ask／Never）、以及巢狀 monorepo 時「離編輯檔最近的 AGENTS.md 優先」。
3. **生態正在收斂**：Codex、Cursor、Amp、Jules、Factory 等已把它當一等公民；Claude Code 仍以 CLAUDE.md 為主，實務上用 import／橋接維持單一真相。

## 我會怎麼用

- 本 repo 根目錄 `AGENTS.md` 繼續當跨 agent 契約；內容保持短、偏命令與硬規則。
- 新專案先寫 AGENTS.md，再決定要不要加工具專屬檔（`.cursor/rules`、`CLAUDE.md`）。
- 對照 Codex 官方 guide（`developers.openai.com/codex/guides/agents-md`）檢查合併／覆蓋行為，避免「以為寫了但其實沒載入」。
