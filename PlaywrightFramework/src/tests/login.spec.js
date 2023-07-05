const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/login-page');
const { chromium } = require('playwright');

test.describe.configure({ mode: 'serial' });

let page;

test.beforeAll(async ({browser}) => {

});

test.afterAll(async () =>{
    await page.close();
});

test('Log in', async () => {
    
});