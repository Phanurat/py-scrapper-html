import json

# สร้างข้อมูลที่จะเก็บเป็น JSON
data = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# กำหนดที่อยู่ของไฟล์ JSON ที่ต้องการจะเขียน
file_path = "json_news/data.json"

# เขียนข้อมูลลงในไฟล์ JSON
with open(file_path, "w") as json_file:
    json.dump(data, json_file)

print("เก็บข้อมูลเป็น JSON สำเร็จแล้ว!")
