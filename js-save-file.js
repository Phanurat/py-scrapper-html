const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: false }); 
        const page = await browser.newPage();

        await page.goto('https://www.facebook.com/aseanfootball', { waitUntil: 'networkidle2' });
        await page.click('[aria-label="Close"]');
        
        // ใช้เมธอด page.waitForTimeout() ใน Puppeteer แทน
        await page.waitForTimeout(3000); 

        const htmlContent = await page.content();

        await browser.close();

        const minifiedHTML = await minify(htmlContent, {
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyCSS: true,
            minifyJS: true
        });

        fs.writeFileSync('scrap/test_cut.html', minifiedHTML);;

        console.log('Facebook page after login saved as facebook_after_login.html');
    } catch (error) {
        console.error('Error:', error);
    }
})();
