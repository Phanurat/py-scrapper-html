from selenium import webdriver

# ตั้งค่าเส้นทางของ ChromeDriver
CHROME_DRIVER_PATH = "C:\\Program Files (x86)\\chromedriver.exe"

# เรียกใช้ WebDriver ของ Chrome โดยไม่ต้องระบุ executable_path
driver = webdriver.Chrome()

# เปิดเว็บไซต์ของ Google
driver.get("http://www.google.com")
print(driver.title)

driver.quit()
