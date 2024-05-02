import requests

def send_message_via_line_notify(page_name, link_page, keyword, content, link, access_token):
    url = 'https://notify-api.line.me/api/notify'
    headers = {'Authorization': f'Bearer {access_token}'}
    message = f'ชื่อเพจ: {page_name}\nลิงก์เพจ: {link_page}\nคีย์เวิร์ด: {", ".join(keyword)}\nเนื้อหา: {content}\nลิงค์: {link}'
    data = {'message': message}
    response = requests.post(url, headers=headers, data=data)
    
    if response.status_code == 200:
        print('Message sent successfully!')
    else:
        print('Failed to send message. Status code:', response.status_code)

# ใส่ Access Token ที่ได้จากการลงทะเบียน Line Notify ของคุณที่นี่
access_token = 'JHHxPjPcVm3Ov33aMKGltdfPiul6FgYbt9Odv1k1765'

# ข้อมูลที่ต้องการส่ง
page_name = 'ชื่อเพจ'
link_page = "https://www.facebook.com"
keyword = ["Test1", "Test2"]
content = 'เนื้อหาข้อความ'
link = 'https://example.com'

# ส่งข้อความผ่าน Line Notify API
send_message_via_line_notify(page_name, link_page, keyword, content, link, access_token)
