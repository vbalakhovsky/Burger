

var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertBrgr: function(cols, vals, cb) {
        orm.insertBrgr("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateBrgr: function(objColVals, condition, cb) {
      orm.updateBrgr("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete(condition, cb) {
          orm.delete('burgers', condition, (res) => cb(res));
        },

  };

// Export the database functions for the controller.
module.exports = burger;