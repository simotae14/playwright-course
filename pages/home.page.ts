import { Page, Locator } from '@playwright/test';

class HomePage {
  page: Page;
  getStartedButton: Locator;
  headingText: Locator;
  homeText: Locator;
  searchIcon: Locator;
  navLinks: Locator;
  constructor(page: Page) {
    this.page = page;
    this.getStartedButton = page.locator('#get-started');
    this.headingText = page.getByText('Think different. Make different.', {
      exact: true,
    });
    this.homeText = page.locator('#zak-primary-menu:has-text("Home")');
    this.searchIcon = page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']");
    this.navLinks = page.locator("#zak-primary-menu li[id*=menu]");
  }

  async navigate() {
    await this.page.goto('/');
  }

  getNavLinksText() {
    return this.navLinks.allTextContents();
  }
}

export default HomePage;