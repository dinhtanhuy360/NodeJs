const express = require("express");
const app = express();
const port = 8080;

// server xửu lý các url và nạp thông tin vào app hiển lên giao diện
// hoặc code đang nói cho server biết là khi người dùng vào route '/' thì cần gửi ra hello world

// config template engine
app.set("views", "./src/views");
//
// nói cho express biết dùng templete engine này bên trong thực./views
app.set("view engine", "ejs");
// trả cho người một file
app.get("/file", (req, res) => {
  res.render("sample.ejs");
});
app.get("/", (req, res) => {
  res.send("Hello Dinh Tan Huy ");
});
app.get("/abc", (req, res) => {
  res.send("Hello Worlds!");
});
app.get("/work", (req, res) => {
  res.send("Tôi sẽ có việc làm");
});
app.get("/major", (req, res) => {
  res.send("Tôi sẽ không thất nghiệp");
});

// trả về cho người dùng html
app.get("/html", (req, res) => {
  res.send("<h5>huy</h5>");
});

app.get("/css", (req, res) => {
  res.send("css ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});