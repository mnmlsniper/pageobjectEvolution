import { decorateService} from "./decoratorePage";

class BasePage {
    constructor(page, pageRootSelector) {
        this.page = page;
        this.rootSelector = pageRootSelector;
        decorateService(this);
    }

    async title() {
        return await this.page.title();
    };

    async url() {
        return await this.page.url();

    };
}

module.exports = {
    BasePage
}
