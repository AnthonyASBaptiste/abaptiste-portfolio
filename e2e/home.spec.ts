import { test, expect } from '@playwright/test';

test.describe('Portfolio site smoke navigation', () => {
  test('homepage loads and shows critical heading elements', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Anthony Baptiste/i);
    await expect(page.locator('text=Anthony Baptiste').first()).toBeVisible();
  });

  test('navigation to blog page works', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.locator('text=Engineering Notes').first()).toBeVisible();
  });

  test('navigation to cv page works', async ({ page }) => {
    await page.goto('/cv');
    await expect(page.locator('text=Curriculum Vitae').first()).toBeVisible();
  });
});
