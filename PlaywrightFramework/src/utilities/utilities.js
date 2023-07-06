exports.UtilityFunctions = class UtilityFunctions
{
    constructor(environment, page) {
        this.environment = environment;
        this.page = page;
    }

    getCredentials(){
        if(this.environment=='dev'){
            return process.env.DEVPASSWORD;
        }
        else if(this.environment=='test'){
            return process.env.TESTPASSWPRD;
        }
    }

    async gotoEnvironment(){
        if(this.env=='dev'){
            await this.page.goto(process.env.DEVURL);
        }
        else if(this.env=='test'){
            await this.page.goto(process.env.TESTURL)
        }
    }
}