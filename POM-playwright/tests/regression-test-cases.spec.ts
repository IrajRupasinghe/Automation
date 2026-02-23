/*Copyright (c) Iraj Rupasinghe*/
import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from '../base/playwright-dev-page';

test('getting started should contain table of contents, tes01', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.getStarted();
  await playwrightDev.clickUrl();

const currentUrl = page.url();
const expectedUrl = 'https://playwright.dev/docs/intro#installing-playwright';

  if (currentUrl === expectedUrl) { console.log('Page redirected to the correct site.');} 
  else { console.log('Page not redirected ERORR!');}
  await playwrightDev.closebrowser();
});

test('should show Page Object Model article, test02', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.pageObjectModel();
  await expect(page.locator('article')).toContainText('Large test suites can be structured to optimize ease of authoring and maintenance.');
  await playwrightDev.closebrowser();
});
