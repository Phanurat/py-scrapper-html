const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: false }); // เปิดเบราว์เซอร์ในโหมดแสดงผล
        const page = await browser.newPage();

        await page.goto('https://www.facebook.com/aseanfootball', { waitUntil: 'networkidle2' });

        //await page.waitForNavigation({ waitUntil: 'networkidle2' });

        // คลิกที่ปุ่ม "Close"
        await page.click('[aria-label="Close"]');

        // รอให้หน้าเว็บโหลดสมบูรณ์
        await page.waitForTimeout(3000); // เพิ่มระยะเวลาในการรอตามที่เหมาะสม

        // ดึง HTML หลังจากไปที่ลิ้งนี้
        const htmlContent = await page.content();

        // เขียน HTML ลงในไฟล์
        const fs = require('fs');
        fs.writeFileSync('scrap/facebook_after_login.html', htmlContent);

        // ปิดเบราว์เซอร์
        await browser.close();

        console.log('Facebook page after login saved as facebook_after_login.html');
    } catch (error) {
        console.error('Error:', error);
    }
})();
