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
    await this.getStarted();
    await this.pomLink.click();
  }
  // screenshots
  async screenshots() {
    //screenshot of showing area
    await this.page.screenshot({ path: 'screenshot.png' });
    //Full page screenshots
    await this.page.screenshot({ path: 'screenshotfp.png', fullPage: true });
  }

  // to close the open browser
  async closebrowser(){
    await this.page.close();
  }

}