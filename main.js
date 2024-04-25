const puppeteer = require('puppeteer');
const { minify } = require('minify-html');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch({
            //userDataDir: 'C:\\Users\\Mr.D\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 2',
            //args: ['--no-sandbox', '--disable-setuid-sandbox']
            executablePath: 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
        });
        const page = await browser.newPage();

        await page.goto('https://www.facebook.com/aseanfootball');

        await page.waitForSelector('body');

        // Evaluate script in the context of the page to remove the popup
        /*await page.evaluate(() => {
            // Replace the selector with the actual selector for the popup
            const popupElement = document.querySelector("#mount_0_0_5o > div > div:nth-child(1) > div > div:nth-child(5) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div");
            if (popupElement) {
                popupElement.remove();
            }
        });*/
        
        const htmlContent = await page.content();

        await browser.close();

        const minifiedHTML = await minify(htmlContent, {
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyCSS: true,
            minifyJS: true
        });

        fs.writeFileSync('scrap/test2.html', minifiedHTML);

        console.log('Webpage saved as compressed_webpage.html');
    } catch (error) {
        console.error('Error:', error);
    }
})();