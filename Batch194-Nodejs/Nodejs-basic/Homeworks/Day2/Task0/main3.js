const express = require('express');
const app = express();
const PORT = 3000;

// Route động: /article/<slug>.html
app.get('/article/:slug([a-zA-Z0-9-]+)\\.html', (req, res) => {
  const slug = req.params.slug;
  res.send(`Bài viết: ${slug}`);
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