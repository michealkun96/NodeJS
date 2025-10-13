const express = require('express');
const app = express();
const PORT = 3000;

app.get('/users/:username([A-Za-z0-9]+)', (req, res) => {
  const username = req.params.username;
  res.send(`Xin chào người dùng: ${username}`);
});

// Route mặc định
app.get('/', (req, res) => {
  res.send('Home Page');
});

// 404 - Không tìm thấy
app.use((req, res) => {
  res.status(404).send('404 - Không tìm thấy trang');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
