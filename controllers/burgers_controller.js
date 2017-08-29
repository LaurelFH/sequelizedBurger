var express = require("express");
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//1.  Create the router for the app, and export the router at the end of your file.
var router = express.Router();



// // // Helper function for SQL syntax.
// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }

// // Helper function for SQL syntax.
// function objToSql(ob) {
//   var arr = [];

//   for (var key in ob) {
//     if (Object.hasOwnProperty.call(ob, key)) {
//       arr.push(key + "=" + ob[key]);
//     }
//   }

//   return arr.toString();
// }

//ADDIGN SEQUELIZE'S ORM METHODS BELOW

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  db.burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, false
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  db.burger.updateOne({
    devoured: req.body.devoured
},condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
