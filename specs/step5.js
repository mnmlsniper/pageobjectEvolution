import {afterEach, beforeEach, test} from "@jest/globals";

import {MainPage} from '../steps/step5/mainPage';
import {RegPage} from '../steps/step5/regPage';

import {goto, run, stop} from "../steps/step5/browser";

const faker = require('faker');
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
    test('function RegPage', async () => {
        // Генерируем тестовые данные
        const randomName = faker.name.findName(); // Leticia Hauck
        const randomEmail = faker.internet.email(); // Ewell.Cremin20@hotmail.com
        const randomPassword = faker.internet.password(); //qxEBWLY7QJPeqcI
        let mainPage = new MainPage(page);
        let regPage = new RegPage(page);

        await mainPage.clickReg();
        await regPage.reg(randomName, randomEmail, randomPassword);
        //todo assert
        const pageTitle = await page.title();
        expect(pageTitle).toContain('Register | Vikunja');
    });
});
