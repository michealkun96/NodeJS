const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Home Page');
});
// route động
app.get('/users/:id', (req, res) => {
  const userId = req.params.id; // lấy giá trị :id trong URL
  res.send(`Thông tin người dùng có ID: ${userId}`);
});


app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});