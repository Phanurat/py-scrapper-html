const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.facebook.com/login');

    // รอให้หน้าเว็บโหลดเสร็จ
    await page.waitForSelector('input[name="email"]');

    // กรอกชื่อผู้ใช้หรืออีเมล
    await page.type('input[name="email"]', 'paunavt55@gmail.com');

    // กรอกรหัสผ่าน
    await page.type('input[name="pass"]', 'p2p4te45');

    // กดปุ่มเข้าสู่ระบบ
    await page.click('button[type="submit"]');

    // รอให้หน้าเว็บโหลดหลังจากเข้าสู่ระบบ
    await page.waitForNavigation();

    // เข้าสู่ระบบสำเร็จแล้ว ตอนนี้คุณสามารถดำเนินการต่อได้ตามต้องการ
    console.log('Logged in successfully');

    // ปิดเบราว์เซอร์
    await browser.close();
})();

module.exports = { loginToFacebook };
