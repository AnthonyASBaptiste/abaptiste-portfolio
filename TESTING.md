# Testing Guidelines

## Framework & Tooling

- **Unit & Component Testing**: [Vitest](https://vitest.dev/) (v3) + `@testing-library/react` + `jsdom`
- **End-to-End Testing**: [Playwright](https://playwright.dev/) (`@playwright/test`)
- **Assertions**: `expect` from Vitest + `@testing-library/jest-dom` DOM matchers

## Test Commands

- Run all unit and component tests:
  ```bash
  npm test
  ```
- Run tests in watch mode:
  ```bash
  npm run test:watch
  ```
- Run end-to-end tests:
  ```bash
  npm run test:e2e
  ```

## Structure & Layers

- **Unit / Utility Tests**: `src/**/__tests__/*.test.ts` (e.g. data fetching, sitemap generation, pure helper functions).
- **Component Tests**: `src/**/__tests__/*.test.tsx` (e.g. navigation, rendering, accessibility attributes).
- **End-to-End Tests**: `e2e/*.spec.ts` (e.g. full browser page loads and multi-route transitions).

## Conventions

- Test new functions, edge cases, error handlers, and regression cases.
- Follow `{name}.regression-N.test.{ext}` for bug regression tests captured during QA.
