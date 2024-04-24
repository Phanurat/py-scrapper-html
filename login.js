const puppeteer = require('puppeteer');
const { minify } = require('minify-html');
const fs = require('fs');

(async () => {
    try {
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

        // Close the login page since we no longer need it
        await page.close();

        const page_link = await browser.newPage();
        await page_link.goto('https://www.facebook.com/people/Gehenna-Gate/61558499640631/');
    
        //add content HTML
        const htmlContent = await page_link.content();

        // Close the page after extracting content
        await page_link.close();

        await browser.close();

        const minifiedHTML = await minify(htmlContent, {
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyCSS: true,
            minifyJS: true
        });

        fs.writeFileSync('scrap/test.html', minifiedHTML);

        console.log('Webpage saved as file to Folder!!');

    } catch (error) {
        console.error('Error:', error);
    }
})();
