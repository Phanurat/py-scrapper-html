import re

def find_similar_links(search_string, file_path):
    try:
        with open(file_path, "r") as file:
            file_content = file.read()
            links = re.findall(r'(https?://\S+)', file_content)
            similar_links = [link for link in links if search_string in link]
            return similar_links
    except FileNotFoundError:
        return ["File not found!"]

def save_cut_links(similar_links, output_file):
    try:
        with open(output_file, "w") as file:
            for link in similar_links:
                file.write(link + "\n")  # Write the actual link to the file
    except FileNotFoundError:
        print("Output file directory not found.")

def main():
    search_string = input("Enter the search string: ")
    similar_links = find_similar_links(search_string, "get_link/output.txt")
    if similar_links:
        print("Link ถูก Cut เรียบร้อยแล้ว:")
        for link in similar_links:
            print(link)
        save_cut_links(similar_links, "link_cut/link.txt")
        print("Cut links saved successfully!")
    else:
        print("No similar links found.")

if __name__ == "__main__":
    main()
