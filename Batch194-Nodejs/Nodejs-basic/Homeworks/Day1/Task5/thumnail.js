const path = require("path");
const fs = require("fs");

// File gốc
let thumbnail = "./jkdlsk-kdlsk.jpg";

// Tách thông tin file
const dir = path.dirname(thumbnail); 
const ext = path.extname(thumbnail); 
const oldFilename = path.basename(thumbnail, ext); 

// Tạo tên file
const filenameFriendly = "iphone-15-pro-max"; 

// Lấy thời gian hiện tại
const now = new Date();
const currentTime = now
  .toISOString()
  .replace(/[-:TZ.]/g, "") // loại bỏ ký tự thừa
  .slice(0, 14); // lấy đến giây

// Tạo tên file mới
const newFilename = `${filenameFriendly}-${currentTime}${ext}`; 
const newPath = path.join(dir, newFilename);

// Đổi tên file
fs.rename(thumbnail, newPath, (err) => {
  if (err) {
    console.error("Lỗi khi đổi tên file:", err);
    return;
  }
  console.log("File đã được đổi tên thành:", newPath);
});
