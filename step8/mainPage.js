import {BasePage} from '../step8/basePage';

class MainPage extends BasePage {
    constructor(page, pageRootSelector = 'mainPage') {
        super(page, pageRootSelector);
     //   this.page = page;
        this.passwordField = '#password';
        this.usernameField = '#username';
        this.loginButton = '.is-primary';
        this.regButton = ('.button:nth-child(2)');
    }

    async clickReg() {
        await this.page.click(this.regButton);
    }

    async login(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }
}


module.exports = {
    MainPage
}
