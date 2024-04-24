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
        await page.goto('https://www.facebook.com/profile.php?id=61558499640631');

        // รอให้หน้าเว็บโหลดเสร็จ
        //await page.waitForSelector('body'); // รอให้เว็บโหลดโดยตรงโดยรอขึ้น body element จะปรากฎขึ้น

        // คลิกที่ปุ่ม "ปิด" เพื่อยกเลิกการล็อกอิน
        //await page.click('.x1i10hfl.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x16tdsg8.x1hl2dhg.xggy1nq.x87ps6o.x1lku1pv.x1a2a7pz.x6s0dn4.xzolkzo.x12go9s9.x1rnf11y.xprq8jg.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x78zum5.xl56j7k.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.xc9qbxq.x14qfxbe.x1qhmfi1');

        // รอให้หน้าเว็บโหลดเสร็จหลังจากยกเลิกการล็อกอิน
        //await page.waitForNavigation();

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
        fs.writeFileSync('scrap/compressed_webpage.html', minifiedHTML);

        console.log('Webpage saved as compressed_webpage.html');
    } catch (error) {
        console.error('Error:', error);
    }
})();
