// อ่านข้อมูลจากไฟล์ link.json โดยใช้ fetch
fetch('json_news/links.json')
  .then(response => response.json())
  .then(data => {
    // ดึงข้อมูลลิงก์
    const links = data.links;

    // วนลูปผ่านทุก link
    for (const linkName in links) {
      if (links.hasOwnProperty(linkName)) {
        const linkData = links[linkName];
        const linkUrl = linkData.link;

        // ทำ process หรือการทำงานอื่น ๆ ที่ต้องการดำเนินการกับ linkUrl ที่นี่
        console.log(`Processing link ${linkName}: ${linkUrl}`);
      }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
