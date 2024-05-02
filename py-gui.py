import tkinter as tk

def get_link_page():
    link_page = entry.get()
    link_result.config(text="URL: Pages FB" + link_page)

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
