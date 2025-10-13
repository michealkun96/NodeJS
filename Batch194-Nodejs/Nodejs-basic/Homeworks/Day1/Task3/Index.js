const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else if (req.url === "/contact") {
    res.end("Contact Page");
  } else {
    res.statusCode = 404;
    res.end("404 - Page Not Found");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});