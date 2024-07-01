const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/login-page');
const { chromium } = require('playwright');
const { UtilityFunctions } = require('../utilities/utilities');

test.describe.configure({ mode: 'serial' });

let page;

test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    const UtilityFunctions = new UtilityFunctions(process.env.ENV, page);
});

test.afterAll(async () =>{
    await page.close();
});

test('Log in', async () => {
    const loginPage = new LoginPage(page);
    await loginPage.enterUserName('user1');
});