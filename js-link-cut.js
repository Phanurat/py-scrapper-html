const fs = require('fs');

// อ่านเนื้อหาจากไฟล์ output.txt
fs.readFile('get_link/output.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('เกิดข้อผิดพลาดในการอ่านไฟล์:', err);
        return;
    }

    // แยกข้อความเป็นบรรทัดๆ
    const lines = data.split('\n');

    // ค้นหาลิงก์ที่ตรงตามเงื่อนไข
    const filteredLinks = lines.filter(line => {
        return line.startsWith('Link') && line.includes('https://facebook.com/aseanfootball') && line.includes('/posts/');
    });

    // พิมพ์ลิงก์ที่ตรงตามเงื่อนไข
    console.log('ลิงก์ที่ตรงตามเงื่อนไข:');
    filteredLinks.forEach(link => {
        console.log(link);
    });
});
