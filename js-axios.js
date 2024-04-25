const axios = require("axios");

axios.get("https://www.facebook.com/aseanfootball")
    .then(response => {
        const html = response.data;
        // ทำสิ่งต่อไปนี้...
    })
    .catch(error => {
        console.error("เกิดข้อผิดพลาดในการโหลด HTML:", error);
    });
