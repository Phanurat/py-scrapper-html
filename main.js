const puppeteer = require('puppeteer');
const { minify } = require('minify-html');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch({
            userDataDir: 'C:\\Users\\Mr.D\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 2',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        await page.goto('https://www.facebook.com/profile.php?id=61558499640631');

        await page.waitForSelector('body');

        // Evaluate script in the context of the page to remove the popup
        await page.evaluate(() => {
            // Replace the selector with the actual selector for the popup
            const popupElement = document.querySelector('your-popup-selector');
            if (popupElement) {
                popupElement.remove();
            }
        });

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
