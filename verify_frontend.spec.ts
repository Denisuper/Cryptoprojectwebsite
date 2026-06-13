import { test, expect } from '@playwright/test';

test('capture screenshots of new features', async ({ page }) => {
  // Go to the home page
  await page.goto('http://localhost:5176');

  // Wait for animations
  await page.waitForTimeout(2000);

  // Capture Hero and Terminal
  await page.screenshot({ path: 'home_hero_fixed.png' });

  // Scroll to Profit Calculator
  await page.evaluate(() => {
    window.scrollTo(0, 1500);
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'home_scrolled_fixed.png' });

  // Go to Markets page
  await page.goto('http://localhost:5176/pairs');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'markets_page_fixed.png' });
});
