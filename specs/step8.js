import {afterEach, beforeEach, test} from "@jest/globals";

import {CurrentTasksPage} from '../steps/step8/currentTasksPage';
import {MainPage} from '../steps/step8/mainPage';
import {RegPage} from '../steps/step8/regPage';

import {goto, run, stop} from "../steps/step8/browser";
import accounts from '../data/step8/accounts.json';

import BuildUser from '../data/step8/buildUser';

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
