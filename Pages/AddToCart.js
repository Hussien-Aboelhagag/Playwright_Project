import { expect } from '@playwright/test';
export default class AddToCart {
    constructor(page) {
        this.page = page;
        this.addToCart = page.getByRole('link', { name: 'Add to cart' });
        this.cartButton = page.locator('#cartur');
        this.assertProduct = page.locator('tr td').nth(1);
    }
    async addProductToCart() {
        await this.addToCart.click();
        await this.cartButton.click();
    }
    async assertProductInCart(product) {
        await expect(this.assertProduct).toBeVisible();
        await expect(this.assertProduct).toContainText(product);
    }
    async addToCartSteps(product) {
        await this.addProductToCart();
        await this.assertProductInCart(product);
    }
}