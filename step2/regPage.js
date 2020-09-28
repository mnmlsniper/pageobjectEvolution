const RegPage = function () {
    const emailField = '#email';
    const passwordField = '#password1';
    const passwordRetryField ='#password2';
    const usernameField = '#username';

    const regButton = ('.is-primary');

    this.reg = async function (page, username, email, password) {
        await page.fill(usernameField, username);
        await page.fill(emailField, email);
        await page.fill(passwordField, password);
        await page.fill(passwordRetryField, password);
        await page.click(regButton);
    };
}
export default new RegPage();
