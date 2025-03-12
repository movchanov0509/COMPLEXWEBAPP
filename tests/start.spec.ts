import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');
  await expect(page).toHaveTitle('Complex Web App');
});

test('navigates to About page', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');
  await page.click('text=About');
  await expect(page).toHaveURL('http://127.0.0.1:8080/#about');
});

test('submits contact form', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');
  await page.click('text=Contact');
  await page.fill('#name', 'John Doe');
  await page.fill('#email', 'john.doe@example.com');
  await page.click('button[type="submit"]');
  // await expect(page.locator('text=Form submitted!')).toBeVisible();
});