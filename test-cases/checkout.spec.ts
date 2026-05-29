import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { USERS } from '../test-data/users';

test.beforeEach(async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    USERS.standard.username,
    USERS.standard.password
  );

});

test('add item to cart', async ({page}) => {

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  await expect(page.locator('.shopping_cart_badge')).toContainText('1')


});

test('remove item from cart', async ({page}) => {

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  await expect(page.locator('.shopping_cart_badge')).toContainText('1')
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click()
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toContainText('Add to cart')
  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);

});