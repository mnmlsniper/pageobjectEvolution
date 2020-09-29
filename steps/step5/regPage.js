import {BasePage} from './basePage';

class RegPage extends BasePage {
    constructor(page) {
        super();
        this.page = page;
        this.emailField = '#email';
        this.passwordField = '#password1';
        this.passwordRetryField = '#password2';
        this.usernameField = '#username';
        this.regButton = ('.is-primary');
    }

    async reg(username, email, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.emailField, email);
        await this.page.fill(this.passwordField, password);
        await this.page.fill(this.passwordRetryField, password);
        await this.page.click(this.regButton);
    }
}


module.exports = {
    RegPage
}
