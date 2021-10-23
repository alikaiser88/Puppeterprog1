const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants")


const puppeteer = require("puppeteer")


async function start (){
    const browser = await puppeteer.launch ()
    const page = await  browser.newPage()
    await page.goto("https://learnwebcode.github.io/practice-requests/")
    await page.screenshot({ path : "amazing.png"})
    await browser.close()
}


start ()
