const connection = require("../config/database");
// get data from database show for client
const getUsers = (req, res) => {
  let user = [];
  connection.query("SELECT * FROM user", function (err, result) {
    user = result;
    console.log("resault: ", result);
    res.send(JSON.stringify(user));
  });
};
const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const addUsers = (req, res) => {
  // get data from form asign for variable
  let name = req.body.name;
  let password = req.body.password;
  console.log(" name = ", name, "password =", password);

  connection.query(
    `INSERT INTO user (user_name, password) VALUES (?, ?)`,
    [name, password],
    function (err, result) {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).send("An error occurred while adding the user.");
      }
      console.log("Insert result:", result);
      res.send("User added successfully.");
    }
  );
};
const getABC = (req, res) => {
  res.render("mypham.ejs");
};
module.exports = {
  getHomePage,
  getABC,
  addUsers,
  getUsers,
};
