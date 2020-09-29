import {BasePage} from './basePage';

class RegPage extends BasePage {
    constructor(page, pageRootSelector = 'registrationPage') {
        super(page, pageRootSelector);
        this.page = page;
        this.emailField = '#email';
        this.passwordField = '#password1';
        this.passwordRetryField = '#password2';
        this.usernameField = '#username';
        this.regButton = ('.is-primary');
    }

    async reg(userdata) {
        await this.page.fill(this.usernameField, userdata.username);
        await this.page.fill(this.emailField, userdata.email);
        await this.page.fill(this.passwordField, userdata.password);
        await this.page.fill(this.passwordRetryField, userdata.password);
        await this.page.click(this.regButton);
    }
}


module.exports = {
    RegPage
}
