const express = require("express");
const path = require("path");
require("dotenv").config(); // crt s để thay đổi chương trình
// tìm đến config và file viewEngine
const configViewEngine = require("./config/viewEngine");
// // tìm đến thư mục routes và file web
const webRotes = require("./routes/web");
console.log(">>> check env", process.env);
const app = express();
const port = process.env.PORT || 8888; // một trong hai port sẽ hoạt động nên ko bị chết
const hostname = process.env.HOST_NAME;
// truyền express
configViewEngine(app);
// tạo phiên bản cho API
app.use("/version1", webRotes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
