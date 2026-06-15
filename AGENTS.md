# Repository Guidelines

## Project Structure & Module Organization

This is a React + TypeScript + Vite portfolio/site project. Application code lives in `src/`, with routing in `src/router.tsx` and the React entrypoint in `src/main.tsx`. Feature areas are grouped under `src/modules/`: `public` contains the public website pages, components, data, API hooks, and templates; `admin` contains dashboard pages, forms, and admin layout; `auth` contains login routes and pages. Shared static assets live in `public/`, `src/assets/`, and `profile/`. Production output is generated in `dist/` and should not be edited directly.

## Build, Test, and Development Commands

- `npm run dev`: start the local Vite development server.
- `npm run build`: run TypeScript project checks with `tsc -b`, then build with Vite.
- `npm run lint`: run ESLint across the repository.
- `npm run preview`: serve the built `dist/` output locally for verification.

Install dependencies with `npm install` when needed. Use `package-lock.json` as the source of truth for dependency resolution.

## Coding Style & Naming Conventions

Use TypeScript and TSX for application code. Components and pages use `PascalCase` filenames, such as `HomePage.tsx` and `ServiceCard.tsx`; hooks use `use-*` naming, such as `use-get-products.ts`. Keep feature-specific code inside its module instead of adding broad shared utilities prematurely. Prefer existing Tailwind utility patterns and local UI helpers in `src/modules/public/components/ui.tsx`. ESLint is configured for TypeScript, React Hooks, and React Refresh; run `npm run lint` before handing off changes.

## Testing Guidelines

No automated test runner is currently configured in `package.json`. For now, validate changes with `npm run lint`, `npm run build`, and manual checks in `npm run dev` or `npm run preview`. When adding tests, colocate them near the code they cover with clear names like `ComponentName.test.tsx`, and add the corresponding `npm test` script in the same change.

## Commit & Pull Request Guidelines

Recent history uses short Conventional Commit-style messages, for example `feat: new site` and `fix: ajuste de favicon`. Follow that pattern with concise Portuguese or English summaries. Pull requests should describe the change, list verification steps, link related issues when available, and include screenshots or screen recordings for visible UI changes.

## Security & Configuration Tips

Firebase configuration is in `src/config/fierbase.ts`; avoid committing private credentials or environment-specific secrets. Keep generated files in `dist/` out of source edits, and document any new required environment variables in the README or PR description.
