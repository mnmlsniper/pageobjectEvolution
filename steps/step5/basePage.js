class BasePage {
    constructor(page) {
        this.page = page;
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
