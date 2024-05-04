import json

# กำหนดที่อยู่ของไฟล์ที่มีลิงก์ link.txt
file_path = "link_cut/link.txt"
    
# อ่านข้อมูลจากไฟล์ link.txt
with open(file_path, "r") as link_file:
    # อ่านและแยกลิงก์ตามบรรทัด
    links = link_file.readlines()

page_name = "Test pagename"
title_name = "Test title name"
content_news = "🇲🇾 Football Association of Malaysia (FAM) has appointed Spanish 🇪🇸 coach Javier Jorda Ribera as head coach of U17 Malaysia.Javier, who is also the Director of Johor Darul Ta'zim Football Academy, will lead the Malaysia U17 team to participate in the 2024 AFF U-16 Championship in Jakarta, Indonesia and the 2025 AFC U-17 Asian Cup Qualifiers.FAM"

# สร้าง dictionary ที่มี key เป็น "links" และมีค่าเป็นรายการลิงก์
data = {
    "pagename": {
        "title": title_name,
        "content": content_news,
        "url": links
    }
}

# กำหนดที่อยู่ของไฟล์ JSON ที่ต้องการจะเขียน
json_file_path = "json_news/links.json"

# เขียนข้อมูลลงในไฟล์ JSON
with open(json_file_path, "w") as json_file:
    json.dump(data, json_file)

print("เก็บลิงก์เป็น JSON สำเร็จแล้ว!")
