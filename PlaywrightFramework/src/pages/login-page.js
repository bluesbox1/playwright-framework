exports.LoginPage = class LoginPage{
    /** 
    *@param {import('playwright/test').Page} page
    */
    constructor(page){
        this.page = page;
        this.txtUsername = page.getByPlacehoder('Username');
    }

    async enterUserName(value){
        await this.txtUsername.fill(value);
    }
}