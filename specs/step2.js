import playwright from 'playwright';
import {afterEach, beforeEach, test} from "@jest/globals";
import MainPage from '../step2/mainPage';
import RegPage from '../step2/regPage';


const faker = require('faker');
let browser;
let page;

describe('Авторизация', () => {
    beforeEach(async () => {
        browser = await playwright.chromium.launch({headless: true});
        page = await browser.newPage();
        await page.goto('https://try.vikunja.io/');
    });
    afterEach(async () => {
        //  await page.close();
        await browser.close();
    });
    test('function', async () => {
        // Генерируем тестовые данные
        const randomName = faker.name.findName(); // Leticia Hauck
        const randomEmail = faker.internet.email(); // Ewell.Cremin20@hotmail.com
        const randomPassword = faker.internet.password(); //qxEBWLY7QJPeqcI

        await MainPage.clickReg(page);

        //todo assert
        const pageTitle = await page.title();
        expect(pageTitle).toContain('Register | Vikunja');
    });
    test('function RegPage', async () => {
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
