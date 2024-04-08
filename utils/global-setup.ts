import { FullConfig, chromium } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch(); // open browser
  const page = await browser.newPage();
  
  await page.goto('https://practice.sdetunicorns.com/my-account');
  await page.context().storageState({
    path: 'notLoggedInState.json',
  });

  // login
  await page.locator('#username').fill('practiceuser1');
  await page.locator('#password').fill('PracticePass1!');
  await page.locator('[value="Log in"]').click();

  // save signe-in state to 'loggedInState.json'
  await page.context().storageState({
    path: 'loggedInState.json',
  });
  await browser.close(); // close browser
}

export default globalSetup;