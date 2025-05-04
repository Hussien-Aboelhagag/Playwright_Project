export default class HomePage {
    constructor(page) {
        this.page = page;
        this.SignupButton = page.locator('#signin2');
        this.LoginButton = page.locator('#login2');
     }

    async navigateToHomePage(BaseUrl) {
        await this.page.goto(BaseUrl);
    }
    async navigateToSignup() {
        await this.SignupButton.click();
    }
    async navigateToLogin() {
        await this.LoginButton.click();
    }

}