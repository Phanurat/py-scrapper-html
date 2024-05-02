const puppeteer = require('puppeteer');
const { minify } = require('html-minifier'); // เพิ่มการนำเข้า html-minifier
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: false }); 
        const page = await browser.newPage();

        await page.goto('https://www.facebook.com/khaopodnewss', { waitUntil: 'networkidle2' });
        await page.click('[aria-label="Close"]');
        
        // รอให้เห็นส่วนของเนื้อหาที่ต้องการ
        await page.waitForSelector('body');

        const htmlContent = await page.content();

        const minifiedHTML = minify(htmlContent, { // ใช้ฟังก์ชัน minify จาก html-minifier
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyCSS: true,
            minifyJS: true
        });

        fs.writeFileSync('scrap/test_cut.html', minifiedHTML);
        await browser.close();

        console.log('Facebook page after login saved as facebook_after_login.html');
    } catch (error) {
        console.error('Error:', error);
    }
})();
