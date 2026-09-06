# SEED Authority Library（AI Coding Workflows）

> 給 Jerry Chen portfolio-hub 的進貨清單。焦點：AI coding workflows、agent orchestration、prompt/template craft、AGENTS.md / skills。
> 語言：標題與 why-keep 用繁體中文（台灣）；人名、產品、URL 保留英文。
> URL 驗證時間：2026-09-06（curl GET，200 視為可用；另註 redirect / soft-404）。

## 怎麼用

1. 先看 **P0**，再挑 `suggested_content`（reading / digest）。
2. 依 `content/inbox/README.md` 流程起稿於 `drafts/`，審核後移入 `src/content/`。
3. 機器選題請讀同目錄 `seed-authorities.yaml`。

---

## P0（先進口）

### 1. Boris Cherny / Claude Code
- **id:** `boris-cherny-claude-code`
- **category:** `coding-agent-product`
- **role_why:** Claude Code 創造者；公開分享平行 session、Plan mode、CLAUDE.md 複利、verification loop——直接對齊日常 agent 操作手感。
- **follow:** https://x.com/bcherny · https://borischerny.com

| status | title | url | type | suggested | one_liner_zh |
|--------|-------|-----|------|-----------|--------------|
| [ ] | How Boris uses Claude Code（thread 鏡像） | https://twitter-thread.com/t/2007179832300581177 | thread | digest | 平行 tab、Plan mode、slash commands、給 agent 驗證迴路的第一手工作流。 |
| [ ] | Building Claude Code with Boris Cherny | https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny | newsletter | digest | Pragmatic Engineer 深訪：平行 agent、agentic search、從寫碼轉成調度。 |
| [~] | Claude Code Memory（CLAUDE.md） | https://code.claude.com/docs/en/memory | docs | reading | 官方 memory／CLAUDE.md 層級與 auto memory——專案契約的 canonical 來源。 |

### 2. Anthropic — Claude Code 官方 Docs
- **id:** `anthropic-claude-code-docs`
- **category:** `agent-orchestration`
- **role_why:** Skills、subagents、hooks、slash commands 的第一手規格；寫 AGENTS.md／SKILL.md 前必讀。
- **follow:** https://code.claude.com/docs/en/overview

| status | title | url | type | suggested | one_liner_zh |
|--------|-------|-----|------|-----------|--------------|
| [ ] | Skills in Claude Code | https://code.claude.com/docs/en/skills | docs | reading | SKILL.md、觸發描述、與 slash command 的關係。 |
| [ ] | Create custom subagents | https://code.claude.com/docs/en/sub-agents | docs | reading | 專責 subagent、工具白名單、與主 session 的委派邊界。 |
| [ ] | Slash commands | https://code.claude.com/docs/en/slash-commands | docs | reading | 把高頻內環做成可重用命令（含 bash 預計算）。 |
| [ ] | Hooks | https://code.claude.com/docs/en/hooks | docs | reading | PostToolUse 等確定性閘門——格式化／檢查不靠模型自覺。 |
| [ ] | Give Claude context: CLAUDE.md | https://support.claude.com/en/articles/14553240-give-claude-context-claude-md-and-better-prompts | docs | reading | Help Center 版 CLAUDE.md 入門與 /init 心智模型。 |

### 3. AGENTS.md（開放格式）
- **id:** `agents-md-open-format`
- **category:** `agent-orchestration`
- **role_why:** 跨 Codex／Cursor／Amp／Jules 等的「給 agent 的 README」；多工具共用一份專案契約。
- **follow:** https://agents.md/

| status | title | url | type | suggested | one_liner_zh |
|--------|-------|-----|------|-----------|--------------|
| [~] | AGENTS.md 官網 | https://agents.md/ | docs | reading | 格式定位、巢狀優先權、與 README 分工。 |
| [ ] | Codex：Custom instructions with AGENTS.md | https://developers.openai.com/codex/guides/agents-md | docs | reading | Codex 如何發現／合併 AGENTS.md（終點常導向 learn.chatgpt.com）。 |

### 4. Agent Skills 開放標準
- **id:** `agent-skills-standard`
- **category:** `agent-orchestration`
- **role_why:** SKILL.md + progressive disclosure；Claude／Codex／多工具可攜的「任務型能力包」。
- **follow:** https://agentskills.io/ · https://github.com/agentskills/agentskills

| status | title | url | type | suggested | one_liner_zh |
|--------|-------|-----|------|-----------|--------------|
| [ ] | Agent Skills specification | https://agentskills.io/specification | docs | reading | name／description 約束與漸進揭露層級。 |
| [ ] | agentskills/agentskills（repo） | https://github.com/agentskills/agentskills | repo | reading | 規格與文件的原始倉庫。 |
| [ ] | Equipping agents with Agent Skills | https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills | article | reading | Anthropic 工程文：為何用資料夾包裝 procedural knowledge。 |
| [ ] | Agent Skills overview（Claude Platform） | https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview | docs | reading | 產品面 Skills：API／claude.ai／Claude Code 差異。 |
| [ ] | anthropics/skills 範例庫 | https://github.com/anthropics/skills | repo | reading | 官方／社群可參考的 skill 範例。 |

### 5. OpenAI Codex
- **id:** `openai-codex`
- **category:** `coding-agent-product`
- **role_why:** AGENTS.md 生態重要推手；Skills／plugins 與 Claude Code 對照寫「可攜契約」時必備。
- **follow:** https://developers.openai.com/codex · https://github.com/openai/codex

| status | title | url | type | suggested | one_liner_zh |
|--------|-------|-----|------|-----------|--------------|
| [ ] | Codex Agent Skills | https://developers.openai.com/codex/skills | docs | reading | Codex 的 SKILL.md 發現路徑與顯式／隱式觸發。 |
| [ ] | openai/codex（repo） | https://github.com/openai/codex | repo | reading | CLI／專案文件與 AGENTS.md 合併行為的原始說明。 |

### 6. Simon Willison — Agentic Engineering
- **id:** `simon-willison`
- **category:** `engineering-practice`
- **role_why:** 把 coding agent 實務整理成可更新的 pattern guide；紅／綠 TDD、subagents、anti-patterns 可直接轉成站內 digest。
- **follow:** https://simonwillison.net/ · https://x.com/simonw

| status | title | url | type | suggested | one_liner_zh |
|--------|-------|-----|------|-----------|--------------|
| [ ] | Agentic Engineering Patterns（guide） | https://simonwillison.net/guides/agentic-engineering-patterns/ | article | reading | 活的 pattern 總目錄：原則、工具、測試、註解式 prompts。 |
| [~] | Writing about Agentic Engineering Patterns | https://simonwillison.net/2026/Feb/23/agentic-engineering-patterns/ | article | digest | 計畫宣言：agentic engineering ≠ vibe coding。 |
| [ ] | Writing code is cheap now | https://simonwillison.net/guides/agentic-engineering-patterns/code-is-cheap/ | article | digest | 程式變便宜之後，團隊習慣與品質責任如何重寫。 |
| [ ] | Subagents | https://simonwillison.net/guides/agentic-engineering-patterns/subagents/ | article | digest | Explore subagent、平行與專責 subagent 的實務拆解。 |

### 7. Anthropic Prompt Engineering
- **id:** `anthropic-prompt-engineering`
- **category:** `prompt-craft`
- **role_why:** 寫 skill／slash command／系統提示的底層技法；與 agent 產品 docs 互補。
- **follow:** https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview

| status | title | url | type | suggested | one_liner_zh |
|--------|-------|-----|------|-----------|--------------|
| [ ] | Prompt engineering overview | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview | docs | reading | 官方技法地圖（清晰、範例、CoT、XML、角色…）。 |
| [ ] | Prompting best practices | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices | docs | reading | 對應當代 Claude 家族的提示最佳實務（含 agentic 段落）。 |

---

## P1

### 8. Cursor
- **id:** `cursor`
- **category:** `coding-agent-product`
- **role_why:** Rules／AGENTS.md／Skills 三層客製；多工具共存時的「Cursor 專屬 vs 可攜層」分界。
- **follow:** https://cursor.com/docs

| status | title | url | type | suggested | one_liner_zh |
|--------|-------|-----|------|-----------|--------------|
| [ ] | Cursor Rules（docs） | https://cursor.com/docs/rules | docs | reading | Project Rules、AGENTS.md、巢狀規則的官方說明。 |
| [ ] | Rules（Help） | https://cursor.com/help/customization/rules | docs | reading | 較短的 rules／AGENTS.md／CLAUDE.md 相容說明。 |
| [ ] | Skills（Help） | https://cursor.com/help/customization/skills | docs | reading | Cursor 對 skills 工作流的產品說明。 |

### 9. xAI — Grok Build
- **id:** `xai-grok-build`
- **category:** `coding-agent-product`
- **role_why:** Jerry 工具棧一環；原生讀 AGENTS.md，並有 Skills／Plugins 擴充面。
- **follow:** https://grok.com/build · https://docs.x.ai/build/overview

| status | title | url | type | suggested | one_liner_zh |
|--------|-------|-----|------|-----------|--------------|
| [ ] | Grok Build overview | https://docs.x.ai/build/overview | docs | reading | TUI／headless／ACP 入口與擴充面總覽。 |
| [ ] | AGENTS.md（project rules） | https://docs.x.ai/build/features/project-rules | docs | reading | Grok 如何發現 AGENTS.md／相容 CLAUDE.md／.grok/rules。 |
| [ ] | Skills, Plugins & Marketplaces | https://docs.x.ai/build/features/skills-plugins-marketplaces | docs | reading | Grok Build 的 skills／plugins 官方頁（curl 200）。 |

### 10. Google Antigravity
- **id:** `google-antigravity`
- **category:** `coding-agent-product`
- **role_why:** Agent-first IDE／CLI／SDK 平台；與 Claude Code／Codex／Cursor 對照產品形態。
- **follow:** https://antigravity.google/

| status | title | url | type | suggested | one_liner_zh |
|--------|-------|-----|------|-----------|--------------|
| [ ] | Google Antigravity 首頁 | https://antigravity.google/ | article | digest | 產品定位：平行 agents、CLI、SDK、IDE。 |
| [ ] | Using AGY CLI | https://www.antigravity.google/docs/cli/using/ | docs | reading | CLI 設定與工作流表面。 |

### 11. Dan Shipper / Every — Compound Engineering
- **id:** `dan-shipper-compound-engineering`
- **category:** `engineering-practice`
- **role_why:** Plan→Work→Review→Compound 迴圈；與 CLAUDE.md／skills「把教訓寫回 repo」同一哲學。
- **follow:** https://x.com/danshipper · https://every.to/

| status | title | url | type | suggested | one_liner_zh |
|--------|-------|-----|------|-----------|--------------|
| [ ] | Compound Engineering | https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents | article | digest | Every 如何讓每次功能讓下一次更容易。 |
| [ ] | compound-engineering-plugin | https://github.com/EveryInc/compound-engineering-plugin | repo | reading | 可安裝的 compound 工作流外掛參考實作。 |

### 12. Amp
- **id:** `amp-code`
- **category:** `agent-orchestration`
- **role_why:** AGENTS.md 共同發起生態一員；強調長 thread、plugins、遠端 orb。
- **follow:** https://ampcode.com/

| status | title | url | type | suggested | one_liner_zh |
|--------|-------|-----|------|-----------|--------------|
| [ ] | Amp 首頁 | https://ampcode.com/ | article | digest | 產品主張與安裝入口。 |
| [ ] | Amp docs | https://ampcode.com/docs | docs | reading | 公開文件入口（部分 deep pages 需登入）。 |

### 13. Pragmatic Engineer（Gergely Orosz）
- **id:** `pragmatic-engineer`
- **category:** `writing-publishing`
- **role_why:** 高訊號工程訪談載體；Boris 訪談是把產品背後心智模型轉成 digest 的好素材。
- **follow:** https://newsletter.pragmaticengineer.com/

| status | title | url | type | suggested | one_liner_zh |
|--------|-------|-----|------|-----------|--------------|
| [ ] | Building Claude Code with Boris Cherny | https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny | newsletter | digest | （與 P0 Boris 條目同源）深度訪談稿。 |

---

## P2

### 14. Factory
- **id:** `factory-ai`
- **category:** `coding-agent-product`
- **role_why:** AGENTS.md 共同生態；其 AGENTS.md 文件對「寫什麼、寫多短」有實務建議。
- **follow:** https://factory.ai/

| status | title | url | type | suggested | one_liner_zh |
|--------|-------|-----|------|-----------|--------------|
| [ ] | Factory：AGENTS.md | https://factory.mintlify.app/cli/configuration/agents-md | docs | reading | 簡短、可執行命令、與 Explore→Plan→Implement 心智。 |
| [ ] | Factory 官網 | https://factory.ai/ | article | digest | 產品定位速覽。 |

### 15. Landscape 對照（編輯用）
- **id:** `coding-agent-landscape-2026`
- **category:** `writing-publishing`
- **role_why:** 一篇把 Claude Code／Cursor／Codex／Antigravity 放在同一畫面的產業觀察，適合開場 digest。
- **follow:** （無單一 follow）

| status | title | url | type | suggested | one_liner_zh |
|--------|-------|-----|------|-----------|--------------|
| [ ] | Claude Code vs Cursor vs Codex vs Antigravity | https://thenewstack.io/claude-code-vs-cursor-vs-codex-vs-antigravity-2026/ | article | digest | 2026 中段產品路線與 AGENTS.md 收斂觀察。 |

---

## URL 驗證備註（2026-09-06）

- 上表 URL 皆經 curl 跟隨導向後取得 **HTTP 200**（除下列註記）。
- `https://developers.openai.com/codex/guides/agents-md` → 導向 `https://learn.chatgpt.com/docs/agent-configuration/agents-md`（200）。
- `https://developers.openai.com/codex/skills` → 導向 `https://learn.chatgpt.com/docs/build-skills`（200）。
- `https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview` → 導向 `platform.claude.com` 對應頁（200）。
- `https://docs.x.ai/build/features/skills` → **404**（改用 `.../skills-plugins-marketplaces`）。
- `https://ampcode.com/manual/agents-md` → 導向登入牆（不列入來源表；改用公開 `/` 與 `/docs`）。
- `https://factory.ai/blog` → **404**（未列入）。

## 計數

- Authorities：15
- Source items：39
- P0 authorities：7
