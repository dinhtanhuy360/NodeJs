const connection = require("../config/database");
const getHomePage = (req, res) => {
  let user = [];
  connection.query("SELECT * FROM nguoidung", function (err, result) {
    user = result;
    console.log("resault: ", result);
    res.send(JSON.stringify(user));
  });
};
const getABC = (req, res) => {
  res.render("mypham.ejs");
};
module.exports = {
  getHomePage,
  getABC,
};
