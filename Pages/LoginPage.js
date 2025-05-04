import { expect } from "@playwright/test";

export default class LoginPage {
  constructor(page) {
    // Define locators for the login page elements
    this.page= page;
    this.usernameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.loginAssert= page.locator('#nameofuser');
  }
    async fillLogin(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    async loginAssertion(username){
      await expect(this.loginAssert).toBeVisible();
      await expect(this.loginAssert).toHaveText(`Welcome ${username}`);
    }
    async loginSteps(username, password) {
        await this.fillLogin(username, password);
        await this.loginAssertion(username);
    }
}