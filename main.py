from bs4 import BeautifulSoup

word_cut = ['เข้าสู่ระบบ', 'ลืมบัญชีใช่ไหม', '·', 'แชร์กับ', 'สาธารณะ', 'สร้างบัญชีใหม่', 'เข้าสู่ระบบหรือสมัครใช้งาน',
            'เพื่อเชื่อมต่อกับเพื่อน']

# เปิดไฟล์ HTML
with open('test2.txt', 'r', encoding='utf-8') as file:
    html_content = file.read()

# สร้างอ็อบเจ็กต์ BeautifulSoup
soup = BeautifulSoup(html_content, 'html.parser')

# ค้นหาและตัดคำในแท็ก <p>
for paragraph in soup.find_all('span'):
    words = paragraph.get_text().split()  # แยกคำออกจากกัน
    words_filtered = [word for word in words if word not in word_cut]  # เลือกเฉพาะคำที่ไม่อยู่ใน word_cut
    print(words_filtered)  # พิมพ์รายการคำที่ถูกตัดออกมา
    from bs4 import BeautifulSoup

word_cut = ['เข้าสู่ระบบ', 'ลืมบัญชีใช่ไหม', '·', 'แชร์กับ', 'สาธารณะ', 'สร้างบัญชีใหม่', 'เข้าสู่ระบบหรือสมัครใช้งาน',
            'เพื่อเชื่อมต่อกับเพื่อน']

# เปิดไฟล์ HTML
with open('test2.txt', 'r', encoding='utf-8') as file:
    html_content = file.read()

# สร้างอ็อบเจ็กต์ BeautifulSoup
soup = BeautifulSoup(html_content, 'html.parser')

# ค้นหาและตัดคำในแท็ก <p>
for paragraph in soup.find_all('span'):
    words = paragraph.get_text().split()  # แยกคำออกจากกัน
    words_filtered = [word for word in words if word not in word_cut]  # เลือกเฉพาะคำที่ไม่อยู่ใน word_cut
    print(words_filtered)  # พิมพ์รายการคำที่ถูกตัดออกมา
    #print('=============================')