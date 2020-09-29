import {BasePage} from './basePage';

class CurrentTasksPage extends BasePage {
    constructor(page) {
        super();
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
