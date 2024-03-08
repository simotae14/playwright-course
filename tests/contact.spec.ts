import { test, expect } from '@playwright/test';

test.describe('Contact', () => {
  test('Fill contact form and verify success message', async ({ page }) => {
    // open contact page
    await page.goto('https://practice.sdetunicorns.com/contact/');

    // fill out the input fields
    await page.locator('.contact-name input').fill('Test Name');
    await page.locator('.contact-email input').fill('test@email.com');
    await page.locator('.contact-phone input').fill('13456743');
    await page.locator('.contact-message textarea').fill('This is a test message');

    // click submit
    await page.locator('button[type=submit]').click();

    // verify success message
    await expect(page.locator('div[role=alert]')).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
  })
})
