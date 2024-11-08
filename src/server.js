const express = require("express");
const path = require("path");
// import mysql
const mysql = require("mysql2");
require("dotenv").config(); // crt s để thay đổi chương trình
// tìm đến config và file viewEngine
const configViewEngine = require("./config/viewEngine");
// // tìm đến thư mục routes và file web hay điều hướng các trang , api
const webRotes = require("./routes/web");
console.log(">>> check env", process.env);
const app = express();
const port = process.env.PORT || 8888; // một trong hai port sẽ hoạt động nên ko bị chết
const hostname = process.env.HOST_NAME;
// truyền express
configViewEngine(app);
// tạo phiên bản cho API
app.use("/version1", webRotes);
app.use("/version2", webRotes);
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3307", // nếu không
  password: "19008198",
  database: "Food_store",
});

connection.query("SELECT * FROM nhanvien", function (err, result, fields) {
  console.log(result);
  console.log(fields);
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
