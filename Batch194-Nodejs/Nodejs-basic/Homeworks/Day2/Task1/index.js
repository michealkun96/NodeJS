const express = require('express');
const app = express();
const PORT = 3000;
// trang chu
app.get('/', (req, res) => {
    res.send('Trang chủ');
});
// Route /about - Trả về chuỗi “Trang giới thiệu”.
app.get('/about', (req, res)=>{
    res.send('Trang giới thiệu');
})
// Route /products - Trả về một mảng các sản phẩm. Mỗi sản phẩm bao gồm id, name, và price.
app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'iPhone 15 Pro Max', price: 32990000 },
        { id: 2, name: 'Samsung Galaxy S24 Ultra', price: 29990000 },
        { id: 3, name: 'Xiaomi 14T Pro', price: 17990000 },
    ];
    res.json(products);
})
// Route /products/:id - Trả về thông tin của sản phẩm có id tương ứng.
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: 'Không tìm thấy sản phẩm!' });
  }
  res.json(product);
});

//Route /products - Với phương thức POST, trả về chuỗi: "Thêm mới sản phẩm"
app.post('/products', (req, res) => {
    res.send('Thêm mới sản phẩm');
});
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  res.send(`Đã thêm sản phẩm: ${name} - Giá: ${price}`);
});
// Route /products/:id - Với phương thức PUT, trả về chuỗi: "Chỉnh sửa sản phẩm có ID :id thành công"
app.put('/products/:id', (req, res) => {
  const productId = req.params.id;
  res.send(`Chỉnh sửa sản phẩm có ID ${productId} thành công`);
});
// Route /products/:id - Với phương thức DELETE, trả về chuỗi: "Xóa sản phẩm có ID :id thành công"
app.delete('/products/:id', (req, res) => {
  const productId = req.params.id;
  res.send(`Đã xóa sản phẩm id ${productId} thành công`);
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});