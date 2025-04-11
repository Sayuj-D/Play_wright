import { test, expect } from "@playwright/test";

test("color schema here", async ({ page }) => {
  await page.goto("https://google.com");
});
