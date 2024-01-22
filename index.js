const puppeteer = require('puppeteer');
async function run(){
    const browser = await puppeteer.launch({ headless: "new" });
    const page  = await browser.newPage();
    await page.goto('https://www.amazon.in/s?k=laptops&i=computers&rh=n%3A1375424031&page=2&qid=1705836932')

    // await page.screenshot({path : "example.png"});
    // const html = await page.content()
    //const text = await page.evaluate(()=>document.body.innerHTML)
    const links = await page.evaluate(() => {
        const anchorElements = document.querySelectorAll('.a-section a');
        return Array.from(anchorElements, (e) => e.href);
    });
     console.log(links.length);
     
    await browser.close();
    console.log('close');
}
run()