# Project Guidelines

## Code Style
- Keep this project dependency-free and framework-free unless explicitly requested.
- Follow existing plain JavaScript style in `app.js` (DOM APIs, small helper functions, no build tooling assumptions).
- Preserve bilingual text behavior: all user-facing strings should be added to `I18N` and read via `t()`/`getLocalizedField()`.
- Prefer minimal, targeted edits. Do not refactor unrelated sections.

## Architecture
- `index.html` provides static structure and mounts dynamic sections.
- `app.js` is the source of truth for content/data and behavior:
  - `SHOWCASE_PROJECTS`, `EXPERIENCE_ITEMS`, `SKILLS`, `I18N`
  - Card rendering (`buildProjectCard`, `buildExperienceCard`)
  - Language handling, reveal animations, custom cursor, and CV form submission.
- `styles.css` contains all styling, animations, responsive rules, and visual effects.
- Assets are served directly from `assets/` and `icons/`.

## Build and Test
- This is a static site with no build step.
- Run locally by opening `index.html` in a browser, or use a static server (example: `python3 -m http.server 8000`).
- There is no automated test suite in this repository. Validate changes by checking UI behavior in-browser.

## Conventions
- When adding project content, extend objects in `SHOWCASE_PROJECTS` instead of hardcoding markup.
- Keep field names consistent with existing project schema (`thumbnail`, `labels`, `role`, `outcome`, `url`, optional link fields).
- For any new translatable UI text, ensure matching DOM IDs or rendering paths exist so translations are applied.
- Keep accessibility intact for interactive elements (`button` for actions, `a` for navigation links, proper labels/roles).

## Pitfalls
- Translation keys and DOM targets are tightly coupled; missing IDs/keys fail silently.
- `localStorage` can fail in restricted browsing modes; keep graceful fallbacks intact.
- Skills carousel logic depends on duplicated rendering for seamless looping; do not simplify without verifying behavior.

## References
- See `README.md` for the project overview and local run basics.
- Prefer updating existing docs rather than duplicating long explanations in instructions.
