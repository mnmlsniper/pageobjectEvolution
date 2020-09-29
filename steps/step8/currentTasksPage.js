import {BasePage} from './basePage';

class CurrentTasksPage extends BasePage {
    constructor(page, pageRootSelector = 'currentsTasksPage') {
        super(page, pageRootSelector);
        this.page = page;
        this.profileName = ('.user > .dropdown > .dropdown-trigger > .button > .username');
    }

    async getProfileNameContent() {
        return await this.page.textContent(this.profileName);
    }

}


module.exports = {
    CurrentTasksPage
}
