exports.LoginPage = class LoginPage{
    /** 
    *@param {import('playwright/test').Page} page
    */
    constructor(page){
        this.page = page;
        this.txtUsername = page.getByPlacehoder('Username');
        this.txtPassword = page.getByPlacehoder('Password');
        this.btnLogin = page.getByRole('button', { name: 'Login' });
    }

    async enterUserName(value){
        await this.txtUsername.fill(value);
    }
}