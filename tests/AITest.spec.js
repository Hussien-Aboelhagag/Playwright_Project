import { test ,expect} from '@playwright/test';
// to install playwright-ai, run the following command:
// npm i @zerostep/playwright -D and add token to zerostep.config.js file
import { ai } from '@zerostep/playwright';
import HomePage from '../Pages/HomePage';
test('AI Test End to End', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHomePage('https://www.demoblaze.com/');
    const aiArgs={page,test};  
    const firstProductCategory = await ai("get the first Category name in the store",aiArgs);
    expect(firstProductCategory).toEqual('Phones');
    await ai('Click on "Samsung galaxy s6" product',aiArgs);
    await page.getByRole('link', { name: 'Add to cart' }).click();
    await ai('click on "Cart" link',aiArgs);
    await ai('click on "Place Order" button',aiArgs);
    await ai('fill in the "Name" field with "John Doe"',aiArgs);
    await ai('fill in the "Country" field with "USA"',aiArgs);
    await ai('fill in the "City" field with "New York"',aiArgs);
    await ai('fill in the "Credit card" field with "12345678901234567"',aiArgs);
    await page.getByRole('button', { name: 'Purchase' }).click();
    await ai('click on "OK" button',aiArgs);
    //await page.pause();
});