import { expect } from '@playwright/test';
export default class LogoutPage {
    constructor(page) {
        this.page = page;
        this.logoutButton = page.locator('#logout2');
    }
    async logout() {
        await this.logoutButton.click();
    }
    async assertLogout() {
        await expect(this.logoutButton).toBeHidden();
    }
    async logoutSteps() {
        await this.logout();
        await this.assertLogout();
    }
}