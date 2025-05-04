import { Given, When, Then } from "@cucumber/cucumber";

Given('I am on the DemoBlaze website',{timeout: 100 * 1000}, async function () {
    const url = 'https://www.demoblaze.com';
    const homePage = this.poManager.getHomePage();
    await homePage.navigateToHomePage(url);
});
When('I click on the Sign Up button',{timeout: 100 * 1000}, async function () {
    const homePage = this.poManager.getHomePage();
    await homePage.navigateToSignup();
});
Then('I should see a sign-up form and enter {string} and {string}',{timeout: 100 * 1000},async function (username, password) {
    const signupPage = this.poManager.getSignupPage();
    await signupPage.signupSteps(username, password);
});
When('I login with {string} and {string}',{timeout: 100 * 1000},async function (username, password) {
    const homePage = this.poManager.getHomePage();
    await homePage.navigateToLogin();
    const loginPage = this.poManager.getLoginPage();
    await loginPage.fillLogin(username, password);
});
Then('I should see a welcome message with my username {string}',{timeout: 100 * 1000},async function (username) {
    const loginPage = this.poManager.getLoginPage();
    await loginPage.loginAssertion(username);
});
When('I click on the {string} button',{timeout: 100 * 1000},async function (category) {
    // Write code here that turns the phrase above into concrete actions
    const selectCategory = this.poManager.getSelectCategory();
    await selectCategory.selectCategory(category);
});
When('I select a {string} from the list',async function (product) {
    // Write code here that turns the phrase above into concrete actions
    const selectProduct = this.poManager.getSelectCategory();
    await selectProduct.selectProductMethod(product);
});
Then('I should be taken to the laptop\'s details page with details {string} and price {string}',async function (product, product_price) {
    // Write code here that turns the phrase above into concrete actions
    const selectProduct = this.poManager.getSelectCategory();
    await selectProduct.assertProduct(product, product_price);
});
When('I click on the Add to cart button',async function () {
    // Write code here that turns the phrase above into concrete actions
    const addToCart = this.poManager.getAddToCart();
    await addToCart.addProductToCart();
});
Then('I should see a confirmation that the {string} has been added to my cart',async function (product) {
    // Write code here that turns the phrase above into concrete actions
    const addToCart = this.poManager.getAddToCart();
    await addToCart.assertProductInCart(product);
});

When('I enter my billing information',async function () {
    // Write code here that turns the phrase above into concrete actions
    const purchasePage = this.poManager.getPurchasePage();
    await purchasePage.fillPurchaseForm('hussien', 'Egypt', 'Cairo', '1234567890123456', '12', '2025');
    await purchasePage.completePurchase();
});
Then('I should see a confirmation message that my order has been placed',async function () {
    // Write code here that turns the phrase above into concrete actions
    const purchasePage = this.poManager.getPurchasePage();
    await purchasePage.assertPurchaseConfirmation();
    await purchasePage.closePurchaseModal();
});
When('I click on the Logout button',async function () {
    // Write code here that turns the phrase above into concrete actions
    const logoutPage = this.poManager.getLogoutPage();
    await logoutPage.logout();
});

Then('I should be logged out of my account',async function () {
    // Write code here that turns the phrase above into concrete actions
    const logoutPage = this.poManager.getLogoutPage();
    await logoutPage.assertLogout();
});