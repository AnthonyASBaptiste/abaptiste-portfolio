# Agent Development Rules & Branching Policy

## 🌿 Branching Rules
- **Default Branch**: `develop`. All AI agent PRs (Jules, Antigravity, etc.) MUST target `develop`.
- **Production Branch**: `main`. Reserved strictly for tagged releases.
- **Branch Naming**: `ab-<type>-<short-description>` (e.g., `ab-feat-nav`, `ab-fix-footer`, `ab-chore-cleanup`).

## ⚡ Vercel Build Optimization
- Include `[skip vercel]` in commit messages for minor PRs, chores, and docs updates to prevent consuming Vercel free tier build minutes.

## 📖 Next.js 16 Rules
This project uses Next.js 16 (Turbopack). Read `node_modules/next/dist/docs/` before writing custom server code.
