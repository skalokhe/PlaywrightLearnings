import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Recording...

  await page.goto("https://practicesoftwaretesting.com/");
  await page.getByTestId("nav-sign-in").click();
  await page.getByTestId("register-link").click();
  await page.getByTestId("first-name").click();
  await page.getByTestId("first-name").fill("sonall");
  await page.getByTestId("last-name").click();
  await page.getByTestId("last-name").fill("test");
  await page.getByTestId("dob").click();
  await page.getByTestId("dob").fill("1999-09-09");
  await page.getByTestId("street").click();
  await page.getByTestId("street").fill("34 rsdgt");
  await page.getByTestId("postal_code").click();
  await page.getByTestId("postal_code").fill("457");
  await page.getByTestId("city").click();
  await page.getByTestId("city").fill("dfgdg");
  await page.getByTestId("state").click();
  await page.getByTestId("state").fill("mh");

  await page.getByTestId("country").selectOption("IN");
  await page.getByTestId("phone").click();
  await page.getByTestId("phone").fill("9876543210");
  await page.getByTestId("email").click();
  await page.getByTestId("email").fill("slonal11@test.com");
  await page.getByTestId("password").click();
  await page.getByTestId("password").fill("Passwpord34@1234");
  await page.getByTestId("register-submit").click();
});
