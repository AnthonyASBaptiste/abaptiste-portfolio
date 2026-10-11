# Agent Development Rules & Branching Policy

## 🌿 Branching Rules

- **Default Branch**: `develop`. All AI agent PRs (Jules, Antigravity, etc.) MUST target `develop`.
- **Production Branch**: `main`. Reserved strictly for tagged releases.
- **Branch Naming**: `ab-<type>-<short-description>` (e.g., `ab-feat-nav`, `ab-fix-footer`, `ab-chore-cleanup`).

## ⚡ Vercel Build Optimization

- Include `[skip vercel]` in commit messages for minor PRs, chores, and docs updates to prevent consuming Vercel free tier build minutes.

## 📖 Next.js 16 Rules

This project uses Next.js 16 (Turbopack). Read `node_modules/next/dist/docs/` before writing custom server code.

## 🧪 Testing

- **Command**: `npm test` runs all unit and component tests with Vitest.
- **E2E**: `npm run test:e2e` runs Playwright browser smoke tests.
- **Reference**: See [TESTING.md](file:///home/anthony/Projects/abaptiste-portfolio/TESTING.md).
- Test new functions, regressions, errors, and both success and failure branches. Never commit failing tests.
