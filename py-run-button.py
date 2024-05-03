import tkinter as tk
import subprocess

def run_script():
    # เรียกใช้ไฟล์ .py โดยใช้ subprocess
    subprocess.Popen(["node", "js-save-file.js"]).wait()
    subprocess.Popen(["python", "main.py"]).wait()
    subprocess.Popen(["node", "js-cheerio.js"]).wait()
    subprocess.Popen(["python", "py-cut-link.py"]).wait()
    subprocess.Popen(["python", "py-send-line"]).wait()

# สร้างหน้าต่างหลัก
root = tk.Tk()
root.title("Run Python Script")

# สร้าง Label แสดงข้อความ
label = tk.Label(root, text="Facebook Scrapper News", padx=200, pady=20)
label.pack()

# สร้างปุ่มเพื่อรันไฟล์ .py
button_run = tk.Button(root, text="Run Script", command=run_script)
button_run.pack()

# เริ่มการทำงานของ GUI
root.mainloop()
