const connection = require("../config/database");
// get data from database show for client
// const getHomePage = (req, res) => {
//   let user = [];
//   connection.query("SELECT * FROM nguoidung", function (err, result) {
//     user = result;
//     console.log("resault: ", result);
//     res.send(JSON.stringify(user));
//   });
// };
const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getABC = (req, res) => {
  res.render("mypham.ejs");
};
module.exports = {
  getHomePage,
  getABC,
};
