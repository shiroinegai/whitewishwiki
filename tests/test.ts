import { expect, test } from '@playwright/test';

test('simple test', async ({ page }) => {
	await page.goto('/');
	const logoSubText = page.locator('.logo-subtext')
	await expect(logoSubText).toHaveText('White Wish Wiki')
});
