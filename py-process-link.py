import json

# อ่านข้อมูลจากไฟล์ link.json
file_path = "json_news/links.json"
with open(file_path, "r") as json_file:
    data = json.load(json_file)

# ดึงข้อมูลลิงก์
links = data["links"]

# วนลูปผ่านทุก link
for link_name, link_data in links.items():
    link_url = link_data["link"]
    
    # ทำ process หรือการทำงานอื่น ๆ ที่ต้องการดำเนินการกับ link_url ที่นี่
    print(f"Processing link {link_name}: {link_url}")
