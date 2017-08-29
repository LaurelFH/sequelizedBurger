//require npm exress, method-override and pody-parser
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require('express-handlebars');
//nodeemon set-up
//https://www.npmjs.com/package/nodemon
//set up path?

var port = process.env.PORT || 3000;

var app = express();

//require the database
var db = require("./models");

// Serve static content for the app from the "views/assets" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
//RESYNC THE FILES
db.sequelize.sync().then(function(){

	app.listen(port, function(){
		console.log("The bugers app is listening on port:" + port);
	});
});
// app.listen(port);