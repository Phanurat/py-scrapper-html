import requests

def get_access_token(file_path):
    try:
        with open(file_path, 'r') as file:
            access_token = file.read().strip()
            return access_token
    except FileNotFoundError:
        print("Token file not found.")
        return None

def send_message_via_line_notify(page_name, link_page, keywords, content, link, token_file):
    access_token = get_access_token(token_file)
    if not access_token:
        return
    
    url = 'https://notify-api.line.me/api/notify'
    headers = {'Authorization': f'Bearer {access_token}'}
    
    # สร้างข้อความที่จะส่ง รวมถึง keywords ด้วย
    message = f'{page_name}\n{content}\n{link}\n\nKeywords:'
    for keyword in keywords:
        message += f'\n- {keyword}'
    
    data = {'message': message}
    response = requests.post(url, headers=headers, data=data)
    
    if response.status_code == 200:
        print('Message sent successfully!')
    else:
        print('Failed to send message. Status code:', response.status_code)

# โฟลเดอร์ที่เก็บไฟล์ token
token_folder = 'line_token'

# ไฟล์ที่เก็บ token
token_file = f'{token_folder}/token.txt'

# ข้อมูลที่ต้องการส่ง
page_name = 'ชื่อเพจ'
link_page = 'https://www.facebook.com'
keywords = ['Test1', 'Test2']
content = 'เนื้อหาข้อความ'
link = 'https://example.com'

# ส่งข้อความผ่าน Line Notify API
send_message_via_line_notify(page_name, link_page, keywords, content, link, token_file)
