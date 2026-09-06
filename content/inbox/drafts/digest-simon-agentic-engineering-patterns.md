---
title: "Simon Willison：Agentic Engineering Patterns 開場"
date: 2026-09-06
person: "Simon Willison"
sourceUrl: "https://simonwillison.net/2026/Feb/23/agentic-engineering-patterns/"
sourceType: article
description: "DRAFT｜把 coding agent 實務收成可更新的 pattern guide；先抓住定義與為何現在要寫。審核前勿公開。"
readingMinutes: 7
private: true
---

> **DRAFT（private: true）** — P0 starter。審核後改 `private: false` 並移到 `src/content/digest/`。

## 原文連結

[Writing about Agentic Engineering Patterns — Simon Willison](https://simonwillison.net/2026/Feb/23/agentic-engineering-patterns/)

延伸總目錄：[Agentic Engineering Patterns guide](https://simonwillison.net/guides/agentic-engineering-patterns/)

## Takeaway

**Agentic engineering** 指的是用「能自己產生並執行程式」的 coding agent（如 Claude Code、Codex）來做軟體工程——重點不是一次對話生成片段，而是 agent 能跑測試、迭代，人負責目標、脈絡與安全邊界。Willison 要做的是把散落在 blog 的經驗收成可更新的 pattern guide，回答「怎樣才算用得好」。

## 我的 3 句摘要

1. 這和「vibe coding」不同：仍然要專業監督、可驗證的回饋迴路，以及不把未審核碼丟給同事的紀律。
2. Guide 的形狀是活的章節（原則 → 與 agent 共事 → 測試／QA → 理解程式 → 註解式 prompts），適合當長期索引，而不是一次讀完的書。
3. 對 Jerry 的實務意義：把 SEED 裡的官方 docs（CLAUDE.md、AGENTS.md、skills）當成「契約層」，把 Willison 的 patterns 當成「操作層」——兩者一起進 portfolio-hub 的 reading／digest。
