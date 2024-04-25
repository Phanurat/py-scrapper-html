const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('https://www.facebook.com/aseanfootball', { waitUntil: 'networkidle2' });

        // Get the HTML content of the page
        const htmlContent = await page.content();

        // Write the HTML content to a file
        const fs = require('fs');
        fs.writeFileSync('scrap/facebook.html', htmlContent);

        await browser.close();

        console.log('Facebook page saved as facebook.html');
    } catch (error) {
        console.error('Error:', error);
    }
})();
