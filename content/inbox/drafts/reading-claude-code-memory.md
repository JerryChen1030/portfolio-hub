---
title: "Claude Code Memory：把專案契約寫進 CLAUDE.md"
date: 2026-09-06
author: "Anthropic"
sourceUrl: "https://code.claude.com/docs/en/memory"
description: "DRAFT｜官方 memory 文件：CLAUDE.md 與 auto memory 如何在每次 session 載入。審核前勿公開。"
private: true
---

> **DRAFT（private: true）** — P0 starter。審核後改 `private: false` 並移到 `src/content/reading/`。

## 為什麼讀這篇

在 Grok Bot hub、Claude Code、Codex、Grok Build 之間切換時，最貴的不是模型，是「每次重講專案規則」。Claude Code 的 memory 文件把「人寫的 CLAUDE.md」與「Claude 自己累積的 auto memory」分開，正好對齊 portfolio-hub 用 Markdown 當唯一真相來源的做法。

## 三個重點

1. **CLAUDE.md 是你寫的常駐 briefing**：專案根目錄或 `.claude/` 放建置／測試命令、架構約定、命名與工作流；開 session 就會載入。適合當「給 agent 的 onboarding」。
2. **Auto memory 是模型寫給自己的筆記**：從你的纠正與偏好長出來，和 CLAUDE.md 互補；不要把兩者混成一團無法審查的黑盒。
3. **越短越被遵守**：官方與實務都偏向精短、可執行的規則；細節可拆到 skills、path-scoped rules 或巢狀說明，避免把整本 wiki 塞進每次 prompt。

## 我會怎麼用

- portfolio-hub 維持根目錄 `AGENTS.md` 為跨工具契約；Claude Code 側用 `@AGENTS.md` 或薄薄的 `CLAUDE.md` 橋接（以當下官方 memory 文件為準）。
- 只把「永遠要遵守」的命令與邊界寫進常駐檔；把「偶發工作流」做成 skill／slash command。
- 每次 PR 若修了 agent 的錯，順手把教訓寫回契約——對齊 compound engineering。
