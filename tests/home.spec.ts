import { test, expect } from '@playwright/test';

test.describe('Home', () => {
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
    await page.goto('https://practice.sdetunicorns.com');

    // Click the get started button.
    await page.locator('#get-started').click();

    // verify url has #get-started
    await expect(page).toHaveURL(/.*#get-started/);
  })

  test('Verify heading text is visible using text selector', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com');

    // find the text
    const headingText = page.getByText('Think different. Make different.', {
      exact: true,
    });

    // verify heading text is visible
    await expect(headingText).toBeVisible();
  })

  test('Verify home link is enabled using text and css selector', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com');

    // find the home text
    const homeText = page.locator('#zak-primary-menu:has-text("Home")');

    // verify heading text is enabled
    await expect(homeText).toBeEnabled();
  })

  test('Verify search icon is visible using xpath selector', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com');

    // find the search icon
    const searchIcon = page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']");

    // verify search icon is visible
    await expect(searchIcon).toBeVisible();
  })

  test('Verify text of blog link', async ({ page }) => {
    const expectedLinks = [
      'Home',
      'About',
      'Shop',
      'Blog',
      'Contact',
      'My account',
    ];
    await page.goto('https://practice.sdetunicorns.com');

    // find the blog link
    const blogLink = page.locator("#zak-primary-menu li[id*=menu]").nth(3);

    // verify blog link text
    expect(await blogLink.textContent()).toEqual(expectedLinks[3]);
  })
})
