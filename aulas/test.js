const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    // const page = await browser.newPage()
    await page.goto('https://barrigareact.wcaquino.me/')
    await page.screenshot({path:`home.png`})
    await browser.close()
}) ()