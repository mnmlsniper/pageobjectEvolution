import playwright from 'playwright';

let browser;
let context;
let page;

export async function goto(url) {
    await page.goto(url);
    return page;
}

export async function run() {
    browser = await playwright.chromium.launch({headless: true});
    context = await browser.newContext();
    page = await browser.newPage();
}

export async function stop() {
    await page.close();
    await browser.close();
}

