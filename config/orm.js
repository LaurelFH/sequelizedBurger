// var connection = require("../config/connection.js");

// //need to include helper functions for the syntax or better to hardcode that in?

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


// //methods to exceute the MySQL commands in the controllers/retrive and store data in the burgder_db;
// // Object for all our SQL statement functions.
// var orm = {

// selectAll: function(tableInput, cb){
//  var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },

// //usual insert function from mySQL (like with seeds)
// //need all values for the table, col, val and the callback
// insertOne: function (table, col, vals, cb){
// 	var queryString = "INSERT INTO " + table;

//     queryString += " (";
//     queryString += col.toString();
//     queryString += ") ";
//     queryString += "VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ") ";

//     console.log(queryString);

//     connection.query(queryString, vals, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });

// },

// // An example of objColVals would be {burger_name: Oak City, devoured: true}
// updateOne: function(table, objColVals, condition, cb){
// 	var queryString = "UPDATE " + table;

//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
// 	}
// };



// //exporting the burger for the model and controller info 
// module.exports = orm;


// //more on objToSQL:  