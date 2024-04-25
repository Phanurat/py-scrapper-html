const fs = require('fs');

// อ่านเนื้อหาจากไฟล์ .txt
fs.readFile('get_link/output.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('เกิดข้อผิดพลาดในการอ่านไฟล์:', err);
        return;
    }

    // ค้นหาลิงก์โดยใช้ Regular Expression
    const regex = /https?:\/\/\S+/g;
    const links = data.match(regex) || [];

    // แสดงลิงก์ทั้งหมด
    console.log('ลิงก์ที่พบ:');
    links.forEach(link => {
        console.log(link);
    });
});
