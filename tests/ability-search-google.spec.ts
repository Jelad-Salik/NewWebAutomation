import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await navigateToGoogle(page);
    const googleImage = await page.locator('img[alt="Google"]');
    await expect(googleImage).toBeVisible();
    await newGoogleSearch(page);
    const searchResultTopStories = await page.getByText('Top stories', { exact: true });
    await expect(searchResultTopStories).toBeVisible();
    await clickTodayTabFromResult(page);
    const todaySelected = await page.getByLabel('Remove Today');
    await expect(todaySelected).toBeVisible();
    await clickNbaPlayoffSchedule(page);
    const titleNbaPlayoffSchedule = await page.getByText('NBA playoff schedule');
    await expect(titleNbaPlayoffSchedule).toBeVisible();
});


async function navigateToGoogle(page) {
    await page.goto('https://www.google.com');
}

async function newGoogleSearch(page) {
    await page.getByLabel('Search', { exact: true }).click();
    await page.getByLabel('Search', { exact: true }).fill('NBA news');
    await page.keyboard.press('Enter');
}

async function clickTodayTabFromResult(page) {
    await page.getByLabel('Add Today').click();
}

async function clickNbaPlayoffSchedule(page) {
    await page.getByRole('link', { name: 'NBA playoff schedule' }).click();
}