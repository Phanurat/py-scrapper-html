const puppeteer = require('puppeteer');
const { minify } = require('minify-html');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.facebook.com/login');

    // รอให้หน้าเว็บโหลดเสร็จ
    await page.waitForSelector('input[name="email"]');

    // กรอกชื่อผู้ใช้หรืออีเมล
    await page.type('input[name="email"]', 'your_email@example.com');

    // กรอกรหัสผ่าน
    await page.type('input[name="pass"]', 'your_password');

    // กดปุ่มเข้าสู่ระบบ
    await page.click('button[type="submit"]');

    // รอให้หน้าเว็บโหลดหลังจากเข้าสู่ระบบ
    await page.waitForNavigation();

    // เข้าสู่ระบบสำเร็จแล้ว ตอนนี้คุณสามารถดำเนินการต่อได้ตามต้องการ
    console.log('Logged in successfully');

    // ปิดเบราว์เซอร์
    await browser.close();

    // หลังจากเข้าสู่ระบบเรียบร้อยแล้ว คุณสามารถทำการดำเนินการต่อตามที่ต้องการได้ เช่น ไปยังลิ้งค์เพื่อดาวน์โหลดไฟล์
    // ตัวอย่าง: เปิดลิ้งค์สำหรับดาวน์โหลดไฟล์
    await page.goto('https://www.facebook.com/profile.php?id=61558499640631');

    const htmlContent = await page.content();
    await browser.close();

    // บีบอัดและ minify HTML content
    const minifiedHTML = await minify(htmlContent, {
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyCSS: true,
        minifyJS: true
    });

})();
