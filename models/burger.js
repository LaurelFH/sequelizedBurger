//importing ORM to make functions  to interact in the databse (MYSQL)
// var orm = require("../config/orm.js");

//REMOVING ORM REFERENCES 
//SET UP THE BURGER MODEL 

module.exports = function(sequelize, DataTypes(){
var burger = sequelize.define("burger", {

  id:
  burger_name:
  devoured:
  date:

});
return burger;

};




// var burger={

// // selectAll: function(cb) {
// //     // orm.selectAll("burgers", function(res) {
// //     //   cb(res);
// //     // });
// //   },
// //   // The variables cols and vals are arrays.
// //  insertOne: function(cols, vals, cb) {
// //     // orm.insertOne("burgers", cols, vals, function(res) {
// //     //   cb(res);
// //     // });
// //   },
// //   updateOne: function(objColVals, condition, cb) {
// //     // orm.updateOne("burgers", objColVals, condition, function(res) {
// //     //   cb(res);
// //     // });
// //   }
// };
// // Export the database functions for the controller (catsController.js).
// module.exports = burger;