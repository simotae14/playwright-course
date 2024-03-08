import { test, expect } from '@playwright/test';

test.describe('Contact', () => {
  test('Open the page, fill te form, submit and check the success message', async ({ page }) => {
    // open url
    await page.goto('https://practice.sdetunicorns.com/contact/');

    // fill the name input text
    await page.getByLabel('Name *').fill('Simone');

    // fill the email input text
    await page.getByLabel('Email *').fill('simone@test.com');

    // fill the name input text
    await page.getByLabel('Phone *').fill('3335678432');

    // fill the name input text
    await page.getByRole('textbox', { name: 'Message' }).fill('This is a message for the space');

    // find and click the submit button
    await page.locator('button:has-text("Submit")').click();

    // verify success message
    await expect(page.getByRole('alert')).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
  })
})
