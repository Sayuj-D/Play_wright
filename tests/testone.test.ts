import { test, expect } from "@playwright/test";

test("test for function_1", async ({ page }) => {
  await page.goto("https://google.com");
  await expect(page).toHaveTitle("Google");
});

test("test for failed", async ({ page }) => {
  await page.goto("http://adfdsdfds.com/");
});
