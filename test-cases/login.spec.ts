import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { USERS } from '../test-data/users';


test('valid login', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(USERS.standard.username, USERS.standard.password);

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('[data-test="title"]')).toContainText('Products');
});

test('invalid login', async ({ page }) => {
  
const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(
    'wrong_user',
    'wrong_sauce'
  );
  
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toBeVisible();


});