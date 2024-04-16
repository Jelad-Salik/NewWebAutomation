import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await navigateToGoogle(page);
    await clickGmailOption(page);
    await clickCreateNewAccount(page);
    await clickPersonalEmailOption(page);
    await clickFirstNameField(page);
    await clickLastNameField(page);
    await clickNextButton(page);
});


async function navigateToGoogle(page) {
    await page.goto('https://www.google.com');
}

async function clickGmailOption(page){
    await page.getByLabel('Gmail (opens a new tab)').click();
}

async function clickCreateNewAccount(page){
    await page.getByText('Create an account').nth(2).click();
}
async function clickPersonalEmailOption(page){
    await page.getByRole('link', { name: 'For my personal use' }).click();
}
async function clickFirstNameField(page){
    const randomLetter = generateRandomLetter();
    const firstNameField = await page.getByLabel('First name');
    await firstNameField.click();
    await firstNameField.fill(`${randomLetter}ook`);
}
async function clickLastNameField(page){
    const randomLetter = generateRandomLetter();
    const lastNameField = await page.getByLabel('Last name (optional)');
    await lastNameField.click();
    await lastNameField.fill(`${randomLetter}ool`);
}
async function clickNextButton(page){
    await page.getByRole('button', { name: 'Next' }).click();
}

function generateRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}