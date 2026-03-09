/*Copyright (c) Iraj Rupasinghe*/
import { expect, type Locator, type Page } from '@playwright/test';
import datafile from "../data/data.json";

export class PlaywrightDevPage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly cUrl: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.locator('a', { hasText: 'Get started' });
    this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    this.cUrl = page.getByText('How to install Playwright');
    this.pomLink = page.locator('li', {hasText: 'Guides',}).locator('a', {hasText: 'Page Object Models',});
  }

  async goto() {
    //await this.page.goto('https://playwright.dev');
    await this.page.goto(datafile.url);
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async clickUrl() {
    await this.cUrl.click();
  }

  async pageObjectModel() {
  //commit for impliment hamburger for mobile browser
  //await this.getStarted();
  //await this.pomLink.click();
  
    // In here only consider click event of that hamburger menu
    await this.page.getByLabel('Toggle navigation bar').click();
    await this.page.locator('xpath=/html/body/div/nav/div[3]/div[2]/div[1]/ul/li[1]').click();

    //open hamburger again and navigate to Page object model page
    await this.page.getByLabel('Toggle navigation bar').click();
    await this.page.locator('xpath=/html/body/div/nav/div[3]/div[2]/div[2]/ul/li[6]/ul/li[29]').click();
  }

  // to close the open browser
  async closebrowser(){
    await this.page.close();
  }
}