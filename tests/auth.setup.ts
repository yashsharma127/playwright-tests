// import { test as setup, expect } from "@playwright/test";
// import path from "path";
// import dotenv from "dotenv";

// dotenv.config();

// const authFile = path.join(__dirname, "../playwright/.auth/auth.json");
// const baseURL = process.env.TARGET_VM_URL || "http://localhost:3000";
// setup("authenticate", async ({ page }) => {
//   await page.goto(baseURL);

//   // Perform authentication steps. Replace these actions with your own.
//   await page.getByLabel("Email").fill("admin@techsonic.com");
//   await page.getByLabel("Password").fill("123456789");

//   // Click login button
//   await page.getByRole("button", { name: "Login", exact: true }).click();

//   // Verify successful login (adjust based on your app's behavior)
//   //check success message
//   await expect(page.getByText("Login Successfull")).toBeVisible();
//   await page.waitForTimeout(5000);

//   await expect(page).toHaveURL(/equipment/);
//   // End of authentication steps.

//   await page.context().storageState({ path: authFile });
// });
