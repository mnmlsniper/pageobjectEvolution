import playwright from 'playwright';
import { test } from "@jest/globals";

const faker = require('faker');

test('first version', async () => {
  const randomName = faker.name.findName(); // Leticia Hauck
  const randomEmail = faker.internet.email(); // Ewell.Cremin20@hotmail.com
  const randomPassword = faker.internet.password(); //qxEBWLY7QJPeqcI

  const browser = await playwright.chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://try.vikunja.io/');
  await page.click('.button:nth-child(2)');
  await page.fill('#username', randomName);
  await page.fill('#email', randomEmail);
  await page.fill('#password1', randomPassword);
  await page.fill('#password2', randomPassword);
  await page.click('.is-primary');
  //todo assert
  const pageTitle = await page.title();
  expect(pageTitle).toContain('Register | Vikunja');
  await browser.close();
});
