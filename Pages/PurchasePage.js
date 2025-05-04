import { expect } from '@playwright/test';
export default class PurchasePage {
    constructor(page) {
        this.page = page;
        this.purchaseButton = page.locator('.btn-success');
        this.nameField = page.locator('#name');
        this.countryField = page.locator('#country');
        this.cityField = page.locator('#city');
        this.cardField = page.locator('#card');
        this.monthField = page.locator('#month');
        this.yearField = page.locator('#year');
        this.purchaseConfirmButton = page.getByRole('button', { name: 'Purchase' });
        this.purchaseConfirmationMessage = page.locator('.sweet-alert h2');
        this.confirmButton = page.locator('.confirm');
        this.closeButton = page.getByLabel('Place order').getByText('Close');
    }
    async fillPurchaseForm(name, country, city, card, month, year) {
        await this.purchaseButton.click();
        await this.nameField.fill(name);
        await this.countryField.fill(country);
        await this.cityField.fill(city);
        await this.cardField.fill(card);
        await this.monthField.fill(month);
        await this.yearField.fill(year);
    }
    async completePurchase() {
        await this.purchaseConfirmButton.click();
    }
    async assertPurchaseConfirmation() {
        await expect(this.purchaseConfirmationMessage).toBeVisible();
        await expect(this.purchaseConfirmationMessage).toContainText('Thank you for your purchase!');
        await this.confirmButton.click();
    }
    async closePurchaseModal() {
        await this.closeButton.click();
    }
    async purchaseSteps(name, country, city, card, month, year) {
        await this.fillPurchaseForm(name, country, city, card, month, year);
        await this.completePurchase();
        await this.assertPurchaseConfirmation();
        await this.closePurchaseModal();
    }
}