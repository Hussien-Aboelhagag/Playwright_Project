import { expect } from "@playwright/test";

export default class SelectCategory {
    constructor(page) {
        this.page = page;
        this.productAssertion = page.locator('h2');
        this.productPriceAssertion = page.locator('h3');
    }

    async selectCategory(category) {
        await this.page.getByRole('link', { name: category }).click();
    }
    async selectProductMethod(product) {
        await this.page.getByRole('link', { name: product }).click();
    }   
    async assertProduct(product,product_price) {
        await expect(this.productAssertion).toContainText(product);
        await expect(this.productPriceAssertion).toContainText(product_price);
    }
    async selectingSteps(category,product,product_price) {
        await this.selectCategory(category);
        await this.selectProductMethod(product);
        await this.assertProduct(product,product_price);
    }
}