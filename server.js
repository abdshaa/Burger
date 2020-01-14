var express = require("express");

var port = process.env.PORT || 3000;

var app = express();

var handlebar = require("express-handlebars");
app.engine("handlebars", handlebar)({ defaultLayout: "main" });
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.listen(port);
