import { test, expect } from "@playwright/test";

test("Selectors demo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/v1/");
  await page.pause();

  await page.click("id=user-name");
  await page.locator("id=user-name").fill("Sayuj");
  await page.locator("id=user-name").fill("locked_out_user");

  await page.locator("[name=password]").fill("secret_sauce");

  await page.locator("[value=LOGIN]").click();

  // locator using text:
  await page.locator("text= LOGIN").click();
  await page.locator("input:has-text('LOGIN')").click();
});
