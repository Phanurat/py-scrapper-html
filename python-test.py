from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# สร้างตัวเลือกของ Chrome
chrome_options = Options()
chrome_options.add_argument("--headless")  # เปิดโหมด headless
chrome_options.add_argument("--disable-gpu")  # ปิด GPU เพื่อประหยัดทรัพยากร
chrome_options.add_argument("--no-sandbox")  # ไม่มี sandbox เพื่อลดความเสี่ยง
chrome_options.add_argument("--disable-dev-shm-usage")  # ปิดการใช้งาน /dev/shm เพื่อลดความเสี่ยง

# เรียกใช้ WebDriver ของ Chrome แบบ headless
driver = webdriver.Chrome(options=chrome_options)

# เปิด URL ของเว็บไซต์ที่ต้องการ
driver.get("https://www.facebook.com/profile.php?id=61558499640631")

# นำเนื้อหา XML หรือ HTML ที่คุณต้องการดึงมาใช้ต่อไป

# ปิด WebDriver
driver.quit()
