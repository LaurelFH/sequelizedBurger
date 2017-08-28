/*o	Inside burger.js, import orm.js into burger.js
o	Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
o	Export at the end of the burger.js file.
*/
//importing ORM to make functions  to interact in the databse (MYSQL)
var orm = require("../config/orm.js");
//have to say here what burger meansin this context as an object with funcitons 
//for the controller (which has the other queries set up to run)
//this will call the ORM functions 

var burger={

selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
 insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};


// Export the database functions for the controller (catsController.js).
module.exports = burger;