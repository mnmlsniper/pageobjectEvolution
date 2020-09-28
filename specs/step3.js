import {afterEach, beforeEach, describe, test} from "@jest/globals";
import MainPage from '../step3/mainPage';
import RegPage from '../step3/regPage';
const faker = require('faker');
import {goto, run, stop} from '../step3/browser';

let page;
//todo fail(   TypeError: Cannot read property 'click' of undefined
describe('Авторизация', () => {
    beforeEach(async () => {
        await run();
        page = await goto('https://try.vikunja.io/');
    });
    afterEach(async () => {
        await stop();
    });

    test('function', async () => {
        await MainPage.clickReg(page);
        //todo assert
        const pageTitle = await page.title();
        expect(pageTitle).toContain('Register | Vikunja');
    });
    test.skip('function RegPage', async () => {
        // Генерируем тестовые данные
        const randomName = faker.name.findName(); // Leticia Hauck
        const randomEmail = faker.internet.email(); // Ewell.Cremin20@hotmail.com
        const randomPassword = faker.internet.password(); //qxEBWLY7QJPeqcI

        await MainPage.clickReg(page);
        await RegPage.reg(page, randomName, randomEmail, randomPassword);
        //todo assert
        const pageTitle = await page.title();
        expect(pageTitle).toContain('Register | Vikunja');
    });
});
