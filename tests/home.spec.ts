import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  })
  
  test('Open HomePage and verifiy title', async ({ page }) => {
    // verify title
    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
  })

  test.skip('Open About page and verifiy title', async ({ page }) => {
    await page.goto('/about');

    await expect(page).toHaveTitle('About – Practice E-Commerce Site');
  })

  test('Click get started button using CSS Selector', async ({ page }) => {
    // verify url has not #get-started
    await expect(page).not.toHaveURL(/.*#get-started/);

    // Click the get started button.
    await homePage.getStartedButton.click();

    // verify url has #get-started
    await expect(page).toHaveURL(/.*#get-started/);
  })

  test('Verify heading text is visible using text selector', async () => {
    // find the text
    const headingText = homePage.headingText;

    // verify heading text is visible
    await expect(headingText).not.toBeHidden();
    await expect(headingText).toBeVisible();
  })

  test('Verify home link is enabled using text and css selector', async () => {
    // find the home text
    const homeText = homePage.homeText;

    // verify heading text is enabled
    await expect(homeText).toBeEnabled();
  })

  test('Verify search icon is visible using xpath selector', async () => {
    // find the search icon
    const searchIcon = homePage.searchIcon;

    // verify search icon is visible
    await expect(searchIcon).toBeVisible();
  })

  test('Verify text of all nav links', async () => {
    const expectedLinks = [
      'Home',
      'About',
      'Shop',
      'Blog',
      'Contact',
      'My account',
    ];

    // verify nav links text
    expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
  })
})
