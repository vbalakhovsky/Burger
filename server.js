var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 8089;

var app = express();


app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

// the main page is always displayed
app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js");

// Use express routes defined
app.use("/", routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
 
  console.log("Server listening on: http://localhost:" + PORT);
});