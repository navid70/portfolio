# Portfolio guidance

- This is navid70/portfolio: Next.js 14 App Router, React 18, TypeScript, Tailwind CSS 3, and Framer Motion 11.
- Preserve existing content, components, styles, dependencies, configuration, and uncommitted work unless the requested task requires changing them. Installing skills does not authorize redesigning the app.
- Use the existing package scripts when relevant: `npm run dev`, `npm run build`, and `npm run lint` (TypeScript plus Next lint). Do not run builds/tests for documentation or skill-only setup.
- Skills live at project scope in `.agents/skills/`. Load only the relevant SKILL.md and references for the task; do not load the whole collection.
- For creative direction choose **one** of `hallmark`, `design-taste-frontend` (Taste v2), or `frontend-design`. Hallmark on an existing design requires the user to name it.
- Use `ui-craft` for implementation quality; `impeccable` for UX critique and polish; `web-design-guidelines` for accessibility and interface audits; `vercel-react-best-practices` for React/Next.js performance; and `ui-ux-pro-max` for design references.
- Apply advice to the installed framework versions; a skill is not authorization to upgrade dependencies or adopt unavailable APIs. Use Codex's available tools where upstream examples name Claude-only tools.
- Do not run bundled installers, enable hooks/MCP servers, install browser runtimes/global tools, or fetch/execute binaries as a side effect of using a design skill. Impeccable's launcher can download an engine into the user profile: use its documented launcher-unavailable/manual-context fallback unless separately authorized. For Taste draws, set `TASTE_SKILL_HISTORY` to a project-local path before running, to avoid its default user-profile history.
- Source revisions, local compatibility adjustments, and verification notes: [.agents/SKILL-SOURCES.md](.agents/SKILL-SOURCES.md).
