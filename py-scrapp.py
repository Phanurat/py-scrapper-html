from bs4 import BeautifulSoup
import requests

def scrape_and_notify(url, keywords, token):
    response = requests.get(url)
    if response.status_code == 200:
        html_content = response.text
        soup = BeautifulSoup(html_content, 'html.parser')

        detected_messages = []

        for article in soup.find_all('article', attrs={'role': 'article'}):
            message_element = article.find('[data-ad-comet-preview="message"]')
            if message_element:
                message = message_element.get_text(strip=True)

                link_element = article.find('a.x1i10hfl[href^="{}"]'.format(url))
                link = link_element.get('href') if link_element else None

                if not link:
                    link_element = article.find('a.x1i10hfl[href^="https://www.facebook.com/permalink.php?story_fbid"]')
                    link = link_element.get('href') if link_element else None

                if message and link:
                    for keyword in keywords:
                        if keyword in message:
                            detected_messages.append({'message': message, 'link': link})

        if detected_messages:
            for message_info in detected_messages:
                message = message_info['message']
                link = message_info['link']
                send_line_notify(message, link, token)
        else:
            print("No messages found matching the keywords.")
    else:
        print("Failed to fetch the page:", response.status_code)

def send_line_notify(message, link, token):
    url = "https://notify-api.line.me/api/notify"
    headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Bearer " + token,
    }
    data = {"message": message, "link": link}
    response = requests.post(url, headers=headers, data=data)
    if response.status_code == 200:
        print("Line Notify response:", response.json())
    else:
        print("Error sending Line Notify message:", response.status_code)

# Example usage
url = "https://www.facebook.com/profile.php?id=61558499640631"
keywords = ["Test"]
token = "TT8y9tsDlVug80vyvGVfuzJiP4UPzs9fxRQ9w9gh6Vt"

scrape_and_notify(url, keywords, token)
