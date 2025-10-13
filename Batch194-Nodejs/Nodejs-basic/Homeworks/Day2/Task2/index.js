const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('public')); 

app.get('/', (req, res) => {
  res.send('Vui lòng truy cập /static/images/hinh-anh.jpg để xem hình.');
});

app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại: http://localhost:${PORT}`);
});