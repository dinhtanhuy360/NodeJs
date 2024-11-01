const path = require("path");
const configViewEngine = (app) => {
  app.set("view", path.join(__dirname, "views"));
  app.set("config", "ejs");
};
// config static file,// tìm ảnh trong mục public
app.use(express.static(path.join(__dirname, "public")));

module.exports = configViewEngine;
