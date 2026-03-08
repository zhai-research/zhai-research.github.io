# Repository Guidelines

## Project Structure & Module Organization
- `config.toml`: Base URL, Markdown defaults, and `[extra]` site-wide values; adjust navigation/meta here before hardcoding.
- `content/`: Markdown pages and sections with TOML front matter (`title`, `date`, `draft`, optional taxonomies). Use ISO dates and `draft = true` for WIP.
- `templates/`: Tera layouts/partials (2-space indent) rendering content; prefer shared blocks over duplication.
- `static/`: Assets served as-is (images, fonts, downloads). Use kebab-case filenames and optimize images before committing.
- `themes/`: Vendored themes; override via `templates/` or `[extra]` before editing theme files directly.
- `tailwind.css`: Source for Tailwind styles; compiled output should live in `static/` if added.

## Build, Test, and Development Commands
- `zola serve` — Run local dev server with live reload at `http://127.0.0.1:1111`.
- `zola build` — Produce static site into `public/` for deployment.
- `zola check` — Lint content/templates; catches broken links and missing front matter.
- `npx @tailwindcss/cli -i tailwind.css -o static/tailwind.css --watch` — Rebuild CSS during local work (omit `--watch` for a one-off build).

## Coding Style & Naming Conventions
- Markdown: concise prose, wrap near 100 chars, prefer fenced code blocks with language hints, link to assets in `static/`.
- Front matter keys: lowercase snake_case; keep dates ISO 8601.
- Templates: Tera with 2-space indentation; extract shared partials for headers/nav; avoid inline styles.
- Assets: kebab-case filenames, no spaces; keep sources (e.g., SVG) under version control.

## Testing Guidelines
- Run `zola check` before pushing to catch broken links, missing metadata, or template errors.
- With `zola serve`, click through changed pages and watch the browser console for 404s; verify drafts with `--drafts` when needed.
- If adding new templates/partials, render at least one `content/` page that uses them to confirm blocks and variables resolve.

## Commit & Pull Request Guidelines
- Commits: one focused change; imperative, concise subjects (e.g., `Add about page template`). Include a brief body if rationale is non-obvious.
- PRs: summarize changes, note `zola check`/`zola build` results, link related issues, and attach screenshots for visual updates.
- Avoid committing large generated assets; prefer sources and a short regenerate note for CSS or images.

## Security & Configuration Tips
- Keep secrets out of `config.toml` and content; use environment variables or deployment-time config instead.
- Record theme versions and local overrides in `themes/` so future updates stay traceable.
