import requests

url = 'https://www.facebook.com/people/Gehenna-Gate/61558499640631/'  # ใส่ URL ของไฟล์ที่ต้องการดาวน์โหลดที่นี่
filename = 'scrap/test.html'  # ระบุชื่อไฟล์ที่ต้องการบันทึก

# ส่งคำขอ GET ไปยัง URL
response = requests.get(url)

# ตรวจสอบว่าคำขอเสร็จสมบูรณ์หรือไม่
if response.status_code == 200:
    # เปิดไฟล์ในโหมดเขียน binary และเขียนเนื้อหาของการตอบกลับลงไป
    with open(filename, 'wb') as file:
        file.write(response.content)
    print(f"บันทึกไฟล์ '{filename}' สำเร็จ")
else:
    print(f"ไม่สามารถดาวน์โหลดไฟล์ได้ รหัสสถานะ: {response.status_code}")
