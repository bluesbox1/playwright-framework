exports.LoginPage = class LoginPage{
    /** 
    *@param {import('playwright/test').Page} page
    */
    constructor(page){
        this.page = page;
        this.txtUsername = page.getByPlaceholder('Username');
        this.txtPassword = page.getByPlaceholder('Password');
        this.btnLogin = page.getByRole('button', { name: 'Login' });
    }

    async enterUserName(value){
        await this.txtUsername.fill(value);
    }
}