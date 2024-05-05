const puppeteer = require('puppeteer');
const { minify } = require('html-minifier');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: false }); 
        const page = await browser.newPage();

        await page.goto('link from json', { waitUntil: 'networkidle2' });
        await page.click('[aria-label="Close"]');
        
        await page.waitForSelector('body');

        const htmlContent = await page.content();
        const minifiedHTML = minify(htmlContent, {
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyCSS: true,
            minifyJS: true
        });

        fs.writeFileSync('html_post/post.html', minifiedHTML);
        await browser.close();

        console.log('Save HTML POST');
    } catch (error) {
        console.error('Error:', error);
    }
})();
