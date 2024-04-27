const puppeteer = require('puppeteer');
const { minify } = require('minify-html');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('https://www.facebook.com/hashtag/%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81');

        // รอให้ element ปรากฏ
        await page.waitForSelector('.__fb-light-mode.x1n2onr6.xzkaem6');

        // ลบ element โดยใช้ evaluate ซึ่งจะทำให้ JavaScript ทำงานใน context ของหน้าเว็บ
        await page.evaluate(() => {
            // เลือก element ที่ต้องการลบ แล้วลบออกไป
            const elementToRemove = document.querySelector('.__fb-light-mode.x1n2onr6.xzkaem6');
            if (elementToRemove) {
                elementToRemove.remove();
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

        fs.writeFileSync('scrap/test_cut.html', minifiedHTML);

        console.log('Webpage saved as compressed_webpage.html');
    } catch (error) {
        console.error('Error:', error);
    }
})();
