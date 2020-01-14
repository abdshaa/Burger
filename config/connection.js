var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456789",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("connection error: " + err.stack);
    return;
  }
  console.log("connected " + connection.threadId);
});
module.exports = connection;
