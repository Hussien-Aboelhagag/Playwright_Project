import homePage from './HomePage.js';
import loginPage from './LoginPage.js';
import signupPage from './SignupPage.js';
import SelectCategory from './SelectCategory.js';
import AddToCart from './AddToCart.js';
import PurchasePage from './PurchasePage.js';
import LogoutPage from './LogoutPage.js';
export default class POManger {
    constructor(page) {
        this.page = page;
        this.homePage = new homePage(page);
        this.loginPage = new loginPage(page);
        this.signupPage = new signupPage(page);
        this.selectCategory = new SelectCategory(page);
        this.addToCart = new AddToCart(page);
        this.purchasePage = new PurchasePage(page);
        this.logoutPage = new LogoutPage(page);
    }
    getHomePage() {
        return this.homePage;
    }
    getLoginPage() {
        return this.loginPage;
    }
    getSignupPage() {
        return this.signupPage;
    }
    getSelectCategory() {
        return this.selectCategory;
    }
    getAddToCart() {
        return this.addToCart;
    }
    getPurchasePage() {
        return this.purchasePage;
    }
    getLogoutPage() {
        return this.logoutPage;
    }
    
}  