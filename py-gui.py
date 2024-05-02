import tkinter as tk

def get_link_page():
    link_page = entry.get()
    label_result.config(text="URL: " + link_page)

# สร้างหน้าต่างหลัก
root = tk.Tk()
root.title("FB Scrapper")

# สร้าง Label แสดงข้อความ
label = tk.Label(root, text="ยินดีต้อนรับสู่โปรแกรม GUI ง่ายๆ", padx=200, pady=100)
label.pack()

# สร้างช่อง input
entry = tk.Entry(root)
entry.pack()

# สร้างปุ่ม
button = tk.Button(root, text="ยืนยัน", command=get_link_page)
button.pack()

# Label แสดงผลลัพธ์
label_result = tk.Label(root, text="", padx=20, pady=10)
label_result.pack()

# เริ่มการทำงานของ GUI
root.mainloop()
