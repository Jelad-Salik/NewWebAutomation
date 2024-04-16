import { test, expect } from '@playwright/test';

test.describe('Google Store Test Suite', () => {
    test.beforeEach(async ({ browserName }, testInfo) => {
        // Skip the test if the browser is Firefox
        if (browserName === 'firefox') {
            testInfo.skip(true);
        }
    });

    test('has title', async ({ page }) => {
        await navigateToGoogle(page);
        await clickGoogleStore(page);
        await page.waitForTimeout(1000);
        await closePopUpPrompt(page);
        const storePageLabel = await page.getByLabel('Browse Pixel 8 Pro and Pixel');
        await expect(storePageLabel).toBeVisible();
        await clickBrowsePhoneButton(page);
        const verifyPageLabel = page.locator('[data-test="marketing-content"] div').filter({ hasText: 'Pixel. The only phone' }).nth(3);
        await page.waitForTimeout(1000);
        await expect(verifyPageLabel).toBeVisible();
        await clickPhoneFromList(page);
    });
});

async function navigateToGoogle(page) {
    await page.goto('https://www.google.com');
}
async function clickGoogleStore(page) {
    await page.getByRole('link', { name: 'Store' }).click();
}
async function closePopUpPrompt(page) {
    await page.getByLabel('Close', { exact: true }).click();
}
async function clickBrowsePhoneButton(page) {
    await page.getByLabel('Browse Pixel 8 Pro and Pixel').click();
}
async function clickPhoneFromList(page) {
    await page.getByText('New Pixel 8 Pro').click();
}