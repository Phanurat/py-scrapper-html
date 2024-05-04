const puppeteer = require('puppeteer');
const { minify } = require('html-minifier');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: false }); 
        const page = await browser.newPage();

        await page.goto('https://www.facebook.com/aseanfootball', { waitUntil: 'networkidle2' });
        await page.click('[aria-label="Close"]');
        
        await page.waitForSelector('body');

        setTimeout(async () => {
            const htmlContent = await page.content();
            const minifiedHTML = minify(htmlContent, {
                collapseWhitespace: true,
                conservativeCollapse: true,
                minifyCSS: true,
                minifyJS: true
            });

            fs.writeFileSync('scrap/test_cut.html', minifiedHTML);
            await browser.close();

            console.log('Facebook page after login saved as facebook_after_login.html');
        }, 60000); // รอ 1 นาที (60,000 มิลลิวินาที) ก่อนที่จะบันทึกไฟล์
    } catch (error) {
        console.error('Error:', error);
    }
})();
