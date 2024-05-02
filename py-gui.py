import tkinter as tk
from tkinter import messagebox
import os

def get_link_page():
    link_page = entry.get()
    link_result.config(text="URL: Pages FB" + link_page)
    save_link(link_page)  # เรียกใช้ฟังก์ชัน save_link เพื่อบันทึก URL ลงในไฟล์
    messagebox.showinfo("Success", "บันทึกสำเร็จแล้ว")  # แสดงข้อความแจ้งเตือนเมื่อบันทึกสำเร็จแล้ว

def save_link(link):
    file_path = "pages_info/links.txt"  # กำหนดเส้นทางของไฟล์
    with open(file_path, "a") as file:  # เปิดไฟล์เพื่อเขียนข้อมูลเพิ่มท้ายไฟล์
        file.write(link + "\n")  # เขียนลิงก์ใหม่ลงในไฟล์
    link_result.config(text="URL: Pages FB" + link)
    messagebox.showinfo("Success", "บันทึกสำเร็จแล้ว")  # แสดงข้อความแจ้งเตือนเมื่อบันทึกสำเร็จแล้ว
            
# สร้างหน้าต่างหลัก
root = tk.Tk()
root.title("FB Scrapper")

# สร้าง Label แสดงข้อความ
label = tk.Label(root, text="Facebook Scrapper News", padx=200, pady=20)
label.pack()

# สร้าง Label แสดงคำแนะนำสำหรับช่อง input สำหรับคำที่ต้องการสร้าง keyword
title_label = tk.Label(root, text="Link:", padx=20, pady=10)
title_label.pack()

# สร้างช่อง input สำหรับ URL และกำหนด placeholder
entry = tk.Entry(root)
entry.insert(0, "วาง URL")  # 0 คือตำแหน่งเริ่มต้น
entry.pack()

# Label แสดงผลลัพธ์ของ URL
link_result = tk.Label(root, text="", padx=20, pady=10)
link_result.pack()

# สร้างปุ่มเพื่อดึงข้อมูลจากช่อง input สำหรับ keyword
button_word_group = tk.Button(root, text="Link Page", command=get_link_page)
button_word_group.pack()

# Label แสดงผลลัพธ์ของ URL
link_result = tk.Label(root, text="", padx=20, pady=10)
link_result.pack()

# Label แสดงชื่อเพจ
name_page_res = tk.Label(root, text="", padx=20, pady=10)
name_page_res.pack()

# เริ่มการทำงานของ GUI
root.mainloop()
