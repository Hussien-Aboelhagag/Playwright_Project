import playwright from 'playwright';
import { Before, After, AfterStep, Status } from '@cucumber/cucumber';
import PoManager from '../../Pages/POManger.js';
Before(async function () {
    this.browser = await playwright.chromium.launch({
        headless: false,
        slowMo: 50,// Slow down by 50ms to see the actions
    });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    this.poManager = new PoManager(this.page);
});
After(async function () {
    await this.page.close();
    await this.browser.close();
});
AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: `./screenshots/${Date.now()}.png` });

    }
});
