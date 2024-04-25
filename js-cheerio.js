const fs = require("fs");
const cheerio = require("cheerio");

// อ่านไฟล์ HTML
const html = fs.readFileSync("./scrap/test1.html");

// ใช้ Cheerio เพื่อแกะสลัก DOM
const $ = cheerio.load(html);

// ตัวอย่างการค้นหาและดึงข้อมูล
const title = $("title").text(); // ดึงข้อความที่อยู่ใน tag <title>
console.log("Title:", title);

// ตัวอย่างการค้นหาและดึงข้อมูลจาก attribute
const imageUrl = $("img").attr("src"); // ดึงค่าของ attribute src จาก tag <img>
console.log("Image URL:", imageUrl);

// ตัวอย่างการใช้กับ loop
$("a").each((index, element) => {
    const link = $(element).attr("href");
    console.log(`Link ${index + 1}:`, link);
});
