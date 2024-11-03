const getHomePage = (req, res) => {
  res.send("Dinh Tan Huy");
};
const getABC = (req, res) => {
  res.send("ABC");
};
module.exports = {
  getHomePage,
  getABC,
};
