import { test, expect, chromium } from "@playwright/test";

test("record directly to a file", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="username"]').press("Tab");
  await page.locator('[data-test="login-button"]').click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
});
