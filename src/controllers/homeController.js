const getHomePage = (req, res) => {
  res.send("Dinh Tan Huy");
};
const getABC = (req, res) => {
  res.render("mypham.ejs");
};
module.exports = {
  getHomePage,
  getABC,
};
