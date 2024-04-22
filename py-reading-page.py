from selenium import webdriver

# เปิดเบราว์เซอร์ Chrome
driver = webdriver.Chrome()

# ไปยังหน้าโปรไฟล์ Facebook
driver.get("https://www.facebook.com/profile.php?id=61558499640631")

# รอให้หน้าโปรไฟล์โหลดเสร็จ
time.sleep(5)

# ดึงข้อความจากโพสต์
posts = driver.find_elements_by_css_selector('div[data-ad-comet-preview="message"]')
for post in posts:
    message = post.text
    print(message)

# ปิดเบราว์เซอร์
driver.quit()
