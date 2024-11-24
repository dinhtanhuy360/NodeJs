// import express
const express = require("express");
const {
  getHomePage,
  getABC,
  addUsers,
} = require("../controllers/homeController.js");
const routes = express.Router();

// trả cho người một file hạy gọi là xử lý logic
routes.get("/file", (req, res) => {
  res.render("sample.ejs");
});
// trả ra một trang index bán hàng
// hander là hàm xử lý
// router.method('/ss', hander)
routes.get("/huyhandsome", getHomePage);
routes.get("/abcController", getABC);
routes.post("/addUsers", addUsers);
// trả ra trang web bán mỹ phẩm////
// chỉ định gọi hàm getABC
routes.get("/mypham", (getABC) => {
  res.render("mypham.ejs");
});
// trả ảnh ra cho người dùng
routes.get("/anh", (req, res) => {
  res.render("class.ejs");
});
routes.get("/", (req, res) => {
  res.send("Hello Dinh Tan Huy ");
});
routes.get("/abc", (req, res) => {
  res.send("Hello Worlds huy!");
});
routes.get("/work", (req, res) => {
  res.send("Tôi sẽ có việc làm ngay mai");
});
routes.get("/major", (req, res) => {
  res.send("Tôi sẽ không thất nghiệp");
});
// trả về cho người dùng html
routes.get("/html", (req, res) => {
  res.send("<h5>huy</h5>");
});
routes.get("/css", (req, res) => {
  res.send("css ");
});
module.exports = routes;
