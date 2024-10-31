const path = require("path");
const configViewEngine = (app) => {
  app.set("view", path.join(__dirname, "views"));
  app.set("config", "ejs");
};
