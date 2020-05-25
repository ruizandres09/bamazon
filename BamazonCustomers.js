//require npm modules
var mysql = require("mysql");
var inquirer = require("inquirer");
//connect to mysql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "234165",
  database: "bamazon",
});

console.log("here is what is available for sale: Buy something and get out!"); // bamazon is not as friendly as amazon.

// this function shows everything avaliable for purchase
function showEverthing() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(
        "ID: " +
          res[i].ITEM_ID +
          " || " +
          " Product: " +
          res[i].Product_Name +
          " || " +
          "     Department Name: " +
          res[i].Department_Name +
          " || " +
          "     Price " +
          "$" +
          res[i].Price +
          " || " +
          "     Stock Quantity " +
          res[i].Stock_Quantity
      );
      console.log(
        "--------------------------------------------------------------------------------------------------------------------"
      );
    }
    connection.end();
  });
}
// this call the function that shows everything
showEverthing();
// askCustomer();
//this function promps the user to ask what they want to buy and allows
function askCustomer(item) {
  inquirer.prompt([
    {
      type: "input",
      name: "idpicked",
      message:
        "What is the ID of the product you want to buy? || if you changed your mind then exit by tyiping. 'Nevermind'",
      validate: function (value) {
        if (value === "Nevermind") {
          var quitingresponse = "leave my store";
        } else {
          var customerwants = parseInt(value);
        }
      }.then(function (value) {
        console.log("you chose to buy" + value);
      }),
    },
  ]);
}

//need to create a function that will check if the user input is a number that corresponds to the any id of the inventory
// need to create a function that check how many items for the ID chosen are in inventory
// need to prompt the customer to ask how many they want to buy and check if there is enough inventory available
//after chekcing if the id exist and there is enough inventory then i need a function that allows them to "purchase the item" which will then lower the count of inventory by the amount purchased
