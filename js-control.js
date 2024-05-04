const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://overlordvolume10.blogspot.com/2017/10/v12c1.html');

  // เลื่อนลงอัตโนมัติ
  await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight);
  });

  // ทำสิ่งอื่นๆ ที่ต้องการกับหน้าเว็บ

  await browser.close();
})();
