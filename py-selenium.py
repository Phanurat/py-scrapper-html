from selenium import webdriver

PATH = "C:\Program Files (x86)\chromedriver.exe"

driver = webdriver.Chrome(PATH)

driver.get("www.google.com")
driver.quit()
