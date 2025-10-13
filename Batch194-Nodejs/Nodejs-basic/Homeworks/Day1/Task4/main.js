const fs = require('fs');
fs.open('hello.txt', 'w', (err, fd) => {
  if (err) {
    return console.error('Có lỗi xảy ra:', err);
  }
  console.log('File đã được mở thành công với file descriptor:', fd);

  // Ghi dữ liệu Xin chào Node.Js vào file 
    const buffer = Buffer.from('Xin chào Node.Js');
  //Ghi xuống
  fs.write(fd, buffer, 0, buffer.length, null, (err) => {
    if (err) {
      return console.error('Lỗi khi ghi vào file:', err);
    }
    fs.close(fd, (err) => {
      if (err) {
        console.error('Lỗi khi đóng file:', err);
      }
      console.log('File đã được đóng lại.');
    });
  });
});
// Thêm 38 Yên Bái Đà Nẵng vào file
fs.open('hello.txt', 'a', (err, fd) => {
  if (err) {
    return console.error('Có lỗi xảy ra:', err);
  }
  console.log('File đã được mở thành công với file descriptor:', fd);

  // Ghi dữ liệu Xin chào 38 Yên Bái Đà Nẵng vào file 
    const buffer = Buffer.from('\n38 Yên Bái Đà Nẵng');
  //Ghi xuống
  fs.appendFile(fd, buffer, 0, buffer.length, null, (err) => {
    if (err) {
      return console.error('Lỗi khi ghi vào file:', err);
    }
    fs.close(fd, (err) => {
      if (err) {
        console.error('Lỗi khi đóng file:', err);
      }
      console.log('File đã được đóng lại.');
    });
  });
});
// Thay hết nội dung trong file 
fs.open('hello.txt', 'w', (err, fd) => {
  if (err) {
    return console.error('Có lỗi xảy ra:', err);
  }
  console.log('File đã được mở thành công với file descriptor:', fd);

  // Ghi dữ liệu Xin chào Học lập trình tại Softech Aptech vào file 
    const buffer = Buffer.from('Học lập trình tại Softech Aptech');
  //Ghi xuống
  fs.write(fd, buffer, 0, buffer.length, null, (err) => {
    if (err) {
      return console.error('Lỗi khi ghi vào file:', err);
    }
    fs.close(fd, (err) => {
      if (err) {
        console.error('Lỗi khi đóng file:', err);
      }
      console.log('File đã được đóng lại.');
    });
  });
});
// Xóa file hello.txt
const fs = require('node:fs');

fs.unlink('hello.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});