class MainPage {
    constructor(page) {
        this.page = page;
        this.regButton = ('.button:nth-child(2)');
    }

    async clickReg() {
        await this.page.click(this.regButton);
    }

    async title() {
        return await this.page.title();
    };
}


module.exports = {
    MainPage
}
