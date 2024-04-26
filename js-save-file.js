const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: false }); // เปิดเบราว์เซอร์ในโหมดแสดงผล
        const page = await browser.newPage();

        await page.goto('https://www.facebook.com/aseanfootball', { waitUntil: 'networkidle2' });

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

        console.log('Element removed successfully');

        // รอให้หน้าเว็บโหลดสมบูรณ์
        await page.waitForNavigation({ waitUntil: 'networkidle2' });

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
