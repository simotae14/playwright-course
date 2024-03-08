import { test, expect } from '@playwright/test';
const path = require('path');

test.describe('Upload File', () => {
  test('should upload a test file', async ({ page }) => {
    // Open url
    await page.goto('https://practice.sdetunicorns.com/cart/');

    // store test file path
    const filePath = path.join(__dirname, '../data/logotitle.png');

    // upload test file
    await page.setInputFiles('input#upfile_1', filePath);

    // click the submit button
    await page.locator('#upload_1').click();

    // assertion
    await expect(page.locator('#wfu_messageblock_header_1_1'))
      .toContainText('uploaded successfully');
  })
})
