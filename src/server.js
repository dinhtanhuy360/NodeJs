const express = require("express");
const path = require("path");
// import mysql
const mysql = require("mysql2");
require("dotenv").config(); // crt s để thay đổi chương trình
// tìm đến config và file viewEngine
const configViewEngine = require("./config/viewEngine");
const connection = require("./config/database");

// // tìm đến thư mục routes và file web hay điều hướng các trang , api
const webRotes = require("./routes/web");
console.log(">>> check env", process.env);
const app = express();
const port = process.env.PORT || 8888; // một trong hai port sẽ hoạt động nên ko bị chết
const hostname = process.env.HOST_NAME;
// truyền express
configViewEngine(app);
// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
// tạo phiên bản cho API
// app.use("/version1", webRotes);
// app.use("/version2", webRotes);
// không tại phiên bản API
app.use(webRotes);
app.use(webRotes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
