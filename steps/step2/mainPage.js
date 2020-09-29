const MainPage = function () {
    const regButton = ('.button:nth-child(2)');
    this.clickReg = async function (page) {
        await page.click(regButton);
    };
}
export default new MainPage();
