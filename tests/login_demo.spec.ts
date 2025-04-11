import { test, expect } from "@playwright/test";

test("Demo Login Test - 1", async ({ page }) => {
  await page.goto("https://demo.applitools.com/#");
  await page.pause();

  await page
    .getByRole("textbox", { name: "Enter your username" })
    .fill("Sayujya");

  await page
    .getByRole("textbox", { name: "Enter your password" })
    .fill("pwd_123?@");

  await page.getByRole("link", { name: "Sign in" }).click();
});
