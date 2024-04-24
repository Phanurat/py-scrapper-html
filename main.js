const puppeteer = require('puppeteer');
const { minify } = require('minify-html');
const fs = require('fs');

(async () => {
    try {
        // เปิดเบราว์เซอร์และสร้างหน้าใหม่โดยใช้โปรไฟล์ที่ 2 ของ Google Chrome
        const browser = await puppeteer.launch({
            userDataDir: 'C:\\Users\\Mr.D\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 2',
            args: ['--no-sandbox', '--disable-setuid-sandbox'] // ใช้งาน Puppeteer ในระบบปฏิบัติการ Windows
        });
        const page = await browser.newPage();

        // เข้าสู่ URL ของเว็บไซต์ที่ต้องการบันทึก
        await page.goto('https://www.facebook.com/permalink.php?story_fbid=pfbid02NuTWEkU2efbMa1EATFLphX2umLM2h9rbdCg1wCFgYWAojJL7Ue9ZZx5Z2WXyBfSZl&id=61558499640631');

        // รอให้หน้าเว็บโหลดเสร็จ
        await page.waitForSelector('body');

        // ดึงเนื้อหา HTML ของหน้าเว็บ
        const htmlContent = await page.content();

        // ปิดเบราว์เซอร์
        await browser.close();

        // บีบอัดและ minify HTML content
        const minifiedHTML = await minify(htmlContent, {
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyCSS: true,
            minifyJS: true
        });

        // บันทึกไฟล์ HTML ไปยังเครื่องและเขียนลงในไฟล์
        fs.writeFileSync('scrap/test1.html', minifiedHTML);

        console.log('Webpage saved as compressed_webpage.html');
    } catch (error) {
        console.error('Error:', error);
    }
})();
