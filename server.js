const http = require("http"); // thư viện

const hostname = "127.0.0.1"; // localhost // bằng vối localhost
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  // chạy server
  console.log(`Server running at http://${hostname}:${port}/`);
});
