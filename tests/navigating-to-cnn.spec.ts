import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await navigateToGoogle(page);
    await clickGoogleLogo(page);
    await clickSearchInput(page);
    await fillSearchInput(page, 'nba');
    await clickNbaPlayoffsLink(page);
    await clickNbaPlayoffsRoundLink(page);
    await clickBackButton(page);
    await clickSeeMoreLink(page);
    await clickBackButton(page);
});

async function navigateToGoogle(page) {
    await page.goto('https://www.google.com');
}

async function clickGoogleLogo(page) {
    await page.locator('img[alt="Google"]').click();
}

async function clickSearchInput(page) {
    await page.locator('input[aria-label="Search"]').click();
}

async function fillSearchInput(page, query) {
    await page.locator('input[aria-label="Search"]').fill(query);
}

async function clickNbaPlayoffsLink(page) {
    await page.locator('a[href*="nba playoffs"]').click();
}

async function clickNbaPlayoffsRoundLink(page) {
    await page.locator('a[href*="NBA Playoffs Round"]').click();
}

async function clickBackButton(page) {
    await page.locator('button:has-text("Back")').click();
}

async function clickSeeMoreLink(page) {
    await page.locator('a:has-text("See more")').click();
}
