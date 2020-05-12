var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "234165",
  database: "bamazon",
});

console.log("here is what is available for sale: Buy something and get out!"); // bamazon is not as friendly as amazon.
function showEverthing() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(
        "ID: " +
          res[i].ITEM_ID +
          " Product: " +
          res[i].Product_Name +
          "            Department Name: " +
          res[i].Department_Name +
          "              Price " +
          "$" +
          res[i].Price +
          "            Stock Quantity " +
          res[i].Stock_Quantity
      );
    }

    connection.end();
  });
}

showEverthing();
