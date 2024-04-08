import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';

test.describe('Contact', () => {
  let contactPage: ContactPage;
  test('Fill contact form and verify success message', async ({ page }) => {
    contactPage = new ContactPage(page);
    // open contact page
    await contactPage.navigate();

    // fill out the input fields and submit
    await contactPage.submitForm('Test Name', 'test@email.com', '13456743', 'This is a test message');

    // verify success message
    await expect(contactPage.successTxt).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
  })
})
