import playwright from 'playwright';
import {devices} from "playwright";

const iphoneX = devices['iPhone X'];

let browser;
let context;
let page;

export async function goto(url) {
    await page.goto(url);
    return page;
}

export async function run(viewport) {
    browser = await playwright.chromium.launch({headless: true});
    switch (viewport) {
        case 'mobile':
            context = await browser.newContext(
                {
                    ...iphoneX,
                }
            );
            break;
        case 'desktop':
            await page.setViewportSize({width: 1600, height: 1200});
            context = await browser.newContext();
            break;
    }

    page = await context.newPage();
}

export async function stop() {
    await page.close();
    await browser.close();
}

