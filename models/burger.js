var orm = require("../config/orm.js");

var burger = {
  selectAll: function(data) {
    orm.selectAll("burgers", function(res) {
      data(res);
    });
  },
  insertOne: function(data) {
    orm.insertOne("burgers", function(res) {
      data(res);
    });
  },
  updateOne: function(data) {
    orm.updateOne("burgers", function(res) {
      data(res);
    });
  }
};
module.exports = burger;
