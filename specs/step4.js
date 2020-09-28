import {afterEach, beforeEach, test} from "@jest/globals";

import {MainPage} from '../step4/mainPage';
import {goto, run, stop} from '../step4/browser';

const faker = require('faker');
let browser;
let page;

describe('Авторизация', () => {
    beforeEach(async () => {
        await run();
        page = await goto('https://try.vikunja.io/');
    });
    afterEach(async () => {
        await stop();
    });

    test('class', async () => {
        let mainPage = new MainPage(page);
        await mainPage.clickReg();
        //todo assert
        const pageTitle = await mainPage.title();
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
