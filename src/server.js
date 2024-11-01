const express = require("express");
const path = require("path");
require("dotenv").config(); // crt s để thay đổi chương trình
const configViewEngine = require("./config/viewEngine");

console.log(">>> check env", process.env);
const app = express();
const port = process.env.PORT || 8888; // một trong hai port sẽ hoạt động nên ko bị chết
const hostname = process.env.HOST_NAME;
configViewEngine(app);
// server xửu lý các url và nạp thông tin vào app hiển lên giao diện
// hoặc code đang nói cho server biết là khi người dùng vào route '/' thì cần gửi ra hello world
// config template engine
// app.set("views", "./src/views/"); c1:
app.set("views", path.join(__dirname, "views")); // c2
// nói cho express biết dùng templete engine này bên trong thực./views
app.set("view engine", "ejs");

// trả cho người một file
app.get("/file", (req, res) => {
  res.render("sample.ejs");
});
// trả ra một trang index bán hàng
app.get("/hanghoa", (req, res) => {
  res.render("example.ejs");
});
// trả ra trang web bán mỹ phẩm////
app.get("/mypham", (req, res) => {
  res.render("mypham.ejs");
});
// trả ảnh ra cho người dùng
app.get("/anh", (req, res) => {
  res.render("class.ejs");
});
app.get("/", (req, res) => {
  res.send("Hello Dinh Tan Huy ");
});
app.get("/abc", (req, res) => {
  res.send("Hello Worlds huy!");
});
app.get("/work", (req, res) => {
  res.send("Tôi sẽ có việc làm ngay mai");
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
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
