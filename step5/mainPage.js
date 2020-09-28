import {BasePage} from '../step5/basePage';

class MainPage extends BasePage{
    constructor(page) {
        super();
        this.page = page;
        this.regButton = ('.button:nth-child(2)');
    }

    async clickReg() {
        await this.page.click(this.regButton);
    }
}


module.exports = {
    MainPage
}
