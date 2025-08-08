import { test, expect } from "@playwright/test";

test("test inactivity monitoring", async ({ page }) => {

await page.goto("https://vclock.com/timer/");
//await page.getByRole('button', { name: 'Consent' }).click();
const acceptButton = page.getByRole('button', { name: 'Consent' });
if (await acceptButton.isVisible()) {
    await acceptButton.click();
}

await page.getByRole('button', { name: 'Set Timer' }).click();
await page.getByLabel('Minutes').click();
await page.getByLabel('Minutes').selectOption('10');
await page.getByRole('button', { name: 'Start' }).click();

//await page.getByRole('button', { name: 'Reset' }).click();
await page.getByRole('button', { name: 'Stop' }).click();
});