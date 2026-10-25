# Project design skills

Installed 2026-10-25 at project scope in `.agents/skills/`. All eight were initially absent. Sources were inspected at the revisions below; only the selected skill folders were installed, with upstream license notices. No upstream installer, binary, hook, MCP server, browser runtime, or global tool was installed or executed.

| Skill | Upstream source folder | Revision |
| --- | --- | --- |
| hallmark | [Nutlope/hallmark/skills/hallmark](https://github.com/Nutlope/hallmark/tree/7ec868225c6caa040558c321ee0fefa0e73f83a8/skills/hallmark) | `7ec868225c6caa040558c321ee0fefa0e73f83a8` |
| design-taste-frontend | [Leonxlnx/taste-skill/skills/taste-skill](https://github.com/Leonxlnx/taste-skill/tree/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill) | `12af471f627f866411b4bd785b19646d3672784c` |
| impeccable | [pbakaus/impeccable/.agents/skills/impeccable](https://github.com/pbakaus/impeccable/tree/936867543ac2576920d663cc9803597f6044f3ac/.agents/skills/impeccable) | `936867543ac2576920d663cc9803597f6044f3ac` |
| frontend-design | [anthropics/skills/skills/frontend-design](https://github.com/anthropics/skills/tree/dbd4588f9e1033efb41dad4bef2f7947c8993d44/skills/frontend-design) | `dbd4588f9e1033efb41dad4bef2f7947c8993d44` |
| ui-craft | [educlopez/ui-craft/.agents/skills/ui-craft](https://github.com/educlopez/ui-craft/tree/49b751742b013ebb3e0495eb7992423185f04be0/.agents/skills/ui-craft) | `49b751742b013ebb3e0495eb7992423185f04be0` |
| web-design-guidelines | [vercel-labs/agent-skills/skills/web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/063bee94c3f4df8453406c830b0a7df0f2860278/skills/web-design-guidelines) | `063bee94c3f4df8453406c830b0a7df0f2860278` |
| vercel-react-best-practices | [vercel-labs/agent-skills/skills/react-best-practices](https://github.com/vercel-labs/agent-skills/tree/063bee94c3f4df8453406c830b0a7df0f2860278/skills/react-best-practices) | `063bee94c3f4df8453406c830b0a7df0f2860278` |
| ui-ux-pro-max | [nextlevelbuilder/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/d14efff8ed1faa4187f004f79926f428c8074ec7/.claude/skills/ui-ux-pro-max) | `d14efff8ed1faa4187f004f79926f428c8074ec7` |

## Installation and compatibility

- Used the inspected built-in Codex installer with explicit project destinations for Hallmark and Taste. Remaining packages used selective archive extraction after full-repository extraction proved slow on Windows. Paths, file types, and Git blob hashes were validated; archive CRLF conversion was accepted only when normalization reproduced the pinned upstream hash.
- Taste's upstream folder is `skills/taste-skill`, but its actual manifest name remains `design-taste-frontend` (v2). Vercel's `skills/react-best-practices` declares `vercel-react-best-practices`.
- Hallmark: replaced unsupported optional `default_prompts` with `default_prompt` and removed empty list-form `dependencies` in `agents/openai.yaml`, following Codex's documented metadata structure.
- UI/UX Pro Max: rendered upstream `src/ui-ux-pro-max/templates/base/skill-content.md` using its `platforms/universal.json` settings and renderer logic, without running its CLI. Commands point to `.agents/skills/ui-ux-pro-max/scripts/search.py`; no Claude plugin environment variable is required. Bundled data, references, and Python scripts are retained.
- Vercel React Best Practices: repaired three existing links in its generated AGENTS.md to `rules/async-defer-await.md`, `rules/async-cheap-condition-before-await.md`, and `rules/server-hoist-static-io.md`.
- Use existing Windows `python` where upstream examples say `python3`. Verified existing Node v24.19.0 and Python 3.12.10; no runtime was installed.

## Verification and limits

- All 466 original skill files matched pinned GitHub blob hashes before compatibility edits. Afterwards exactly the three documented compatibility files differ; four missing root license notices were added.
- Eight SKILL.md manifests have the expected names and descriptions. JSON files parse; 20 JavaScript modules pass `node --check`; 18 Python files parse with Python AST. UI/UX Pro Max's read-only style search returned a local result with `python -B`.
- All concrete local Markdown links resolve after the Vercel repairs. Example/template paths and remote resources are not completeness assertions. Taste mentions optional scene demo files absent from its upstream package; no files were invented.
- Impeccable's Windows launcher was inspected but not run: it may download/cache and execute its engine in `~/.impeccable/bin/`. Use its documented manual-context fallback unless binary execution is separately authorized. Its engine, hooks, and browser features remain untested.
- Browser/rendering workflows were not run. Hallmark's render helpers may need an existing Puppeteer package/browser; Taste uses Node 22+ and an existing Chrome/Edge/Chromium. Optional MCP/API integrations remain unconfigured. Web Design Guidelines fetches current remote rules when an audit is requested; use Codex's available fetch tools for the upstream WebFetch instruction.
- Initial working tree was clean. Final tracked-file diff is empty; no application builds/tests, commits, pushes, or deployment were performed.

Codex [discovers project-local skills and detects changes automatically](https://learn.chatgpt.com/docs/build-skills). Use them on the next turn; restart Codex only if they do not appear. No Codex configuration change is needed.
