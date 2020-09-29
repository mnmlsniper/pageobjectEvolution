import {afterEach, beforeEach, test} from "@jest/globals";

import {CurrentTasksPage} from '../steps/step7/currentTasksPage';
import {MainPage} from '../steps/step7/mainPage';
import {RegPage} from '../steps/step7/regPage';

import {goto, run, stop} from "../steps/step7/browser";
import accounts from '../data/step7/accounts.json';

import BuildUser from '../data/step7/buildUser';

let page;
let currentTasksPage, mainPage, regPage;

describe('Авторизация', () => {
    beforeEach(async () => {
        await run('mobile');
        page = await goto('https://try.vikunja.io/');
        currentTasksPage = new CurrentTasksPage(page);
        mainPage = new MainPage(page);
        regPage = new RegPage(page);
    });
    afterEach(async () => {
        await stop();
    });

    test('Демо пользователь может авторизоваться в системе', async () => {
        const username = accounts.demo[0].username;
        const password = accounts.demo[0].password;

        let mainPage = new MainPage(page);
        await mainPage.login(username, password);
        const profileName = await currentTasksPage.getProfileNameContent();
        expect(profileName).toContain('demo');
    });

    test('Новый пользователь может зарегистроваться в системе', async () => {
        // Генерируем тестовые данные
        const userdata = BuildUser.get('new');

        await mainPage.clickReg();
        await regPage.reg(userdata);
        const profileName = await currentTasksPage.getProfileNameContent();
        expect(profileName).toContain(userdata.username);
    });
});
