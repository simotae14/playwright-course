class HomePage {
  page: any;
  getStartedButton: any;
  headingText: any;
  homeText: any;
  searchIcon: any;
  navLinks: any;
  constructor(page) {
    this.page = page;
    this.getStartedButton = page.locator('#get-started');
    this.headingText = page.getByText('Think different. Make different.', {
      exact: true,
    });
    this.homeText = page.locator('#zak-primary-menu:has-text("Home")');
    this.searchIcon = page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']");
    this.navLinks = page.locator("#zak-primary-menu li[id*=menu]");
  }
}

export default HomePage;