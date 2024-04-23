import asyncio
from pyppeteer import launch

async def main():
    # เปิดเบราว์เซอร์
    browser = await launch(executablePath='path_to_chromium_executable')

    # เปิดหน้าใหม่
    page = await browser.newPage()

    # ไปยัง URL ของหน้าเว็บไซต์
    await page.goto('https://www.google.com')

    # รอให้มีส่วนอะไรก็ตามที่มี tag 'body' แสดงในหน้าเว็บ
    await page.waitForSelector('body')

    # ดึงข้อความจากหน้าเว็บ
    text = await page.evaluate('document.body.textContent')
    print(text)

    # ปิดเบราว์เซอร์
    await browser.close()

# เรียกใช้ฟังก์ชัน main()
asyncio.get_event_loop().run_until_complete(main())
