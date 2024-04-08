import { FullConfig, chromium } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch(); // open browser
  const page = await browser.newPage();
  
  // login
  await page.goto('https://practice.sdetunicorns.com/my-account');
  await page.locator('#username').fill('practiceuser1');
  await page.locator('#password').fill('PracticePass1!');
  await page.locator('[value="Log in"]').click();

  // save signe-in state to 'loggedIn.json'
  await page.context().storageState({
    path: 'loggedIn.json',
  });
  await browser.close(); // close browser
}

export default globalSetup;