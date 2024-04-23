const cheerio = require('cheerio');

// ตัวอย่างการใช้ Cheerio
const $ = cheerio.load('<h2 class="title">Hello world</h2>');
$('h2.title').text('Cheerio!');
console.log($.html());
