import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
  let homePage;
  test('Open HomePage and verifiy title', async ({ page }) => {
    // open url
    await page.goto('https://practice.sdetunicorns.com/');

    // verify title
    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
  })

  test('Open About page and verifiy title', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/about');

    await expect(page).toHaveTitle('About – Practice E-Commerce Site');
  })

  test('Click get started button using CSS Selector', async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto('https://practice.sdetunicorns.com');

    // verify url has not #get-started
    await expect(page).not.toHaveURL(/.*#get-started/);

    // Click the get started button.
    await homePage.getStartedButton.click();

    // verify url has #get-started
    await expect(page).toHaveURL(/.*#get-started/);
  })

  test('Verify heading text is visible using text selector', async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto('https://practice.sdetunicorns.com');

    // find the text
    const headingText = homePage.headingText;

    // verify heading text is visible
    await expect(headingText).not.toBeHidden();
    await expect(headingText).toBeVisible();
  })

  test('Verify home link is enabled using text and css selector', async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto('https://practice.sdetunicorns.com');

    // find the home text
    const homeText = homePage.homeText;

    // verify heading text is enabled
    await expect(homeText).toBeEnabled();
  })

  test('Verify search icon is visible using xpath selector', async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto('https://practice.sdetunicorns.com');

    // find the search icon
    const searchIcon = homePage.searchIcon;

    // verify search icon is visible
    await expect(searchIcon).toBeVisible();
  })

  test('Verify text of all nav links', async ({ page }) => {
    homePage = new HomePage(page);
    const expectedLinks = [
      'Home',
      'About',
      'Shop',
      'Blog',
      'Contact',
      'My account',
    ];

    // open url
    await page.goto('https://practice.sdetunicorns.com');

    // find the nav links
    const navLinks = homePage.navLinks;

    // print out all the links
    for (const el of await navLinks.elementHandles()) {
      console.log(await el.textContent());
    }

    // verify nav links text
    expect(await navLinks.allTextContents()).toEqual(expectedLinks);
  })
})
