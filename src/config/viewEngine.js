const path = require("path");
const express = require("express");
const configViewEngine = (app) => {
  // config template engine
  console.log(path.join("./src", "views"));
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");
  // config static file,// tìm ảnh trong mục public
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
