import { test } from '@playwright/test';
import POManger from '../Pages/POManger';
test('End to End Scenario', async ({ page }) => {
    const pom = new POManger(page);
    const homePage = pom.getHomePage();
    await homePage.navigateToHomePage('https://www.demoblaze.com/');
    await homePage.navigateToSignup();
    const signupPage = pom.getSignupPage();
    await signupPage.signupSteps('hussien19', 'hu12345678');
    await homePage.navigateToLogin();
    const loginPage = pom.getLoginPage();
    await loginPage.loginSteps('hussien19', 'hu12345678');
    const selectCategory = pom.getSelectCategory();
    await selectCategory.selectingSteps('Laptops', 'MacBook Pro','1100');
    const addToCart = pom.getAddToCart();
    await addToCart.addToCartSteps('MacBook Pro');
    const purchasePage = pom.getPurchasePage();
    await purchasePage.purchaseSteps('hussien', 'Egypt', 'Cairo', '1234567890123456', '12', '2025');
    const logoutPage = pom.getLogoutPage();
    await logoutPage.logoutSteps();
})