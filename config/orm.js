var connection = require("./connection.js");

var orm = {
  selectColumn: function(colName, tableName) {
    connection.query("SELECT * FROM " + [colName, tableName], function(
      err,
      result
    ) {
      console.log(result);
    });
  },
  selectAll: function(tableName) {
    connection.query(
      "SELECT * FROM burgers WHERE id = 1" + [tableName],
      function(err, result) {
        console.log(result);
        console.log(result[0].burger_name);
        console.log(result[1].burger_name);
      }
    );
  },
  insertOne: function(tableName, columns, values, data) {
    connection.query(
      "INSERT INTO " + [tableName, columns, values, data],
      function(err, result) {
        console.log(result);
      }
    );
  },
  updateOne: function(tableName, columns, values, data) {
    connection.query("UPDATE " + [tableName, columns, values, data], function(
      err,
      result
    ) {
      console.log(result);
    });
  }
};
module.exports = orm;
