const db = require("../data/db-Config");

module.exports = {
  find,
  add,
  findById,
  remove,
};

function find() {
  return db("names");
}

function add(name) {
  return db("names")
    .insert(name, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function findById(id) {
  return db("names").where({ id }).first();
}

function remove(id) {
  return db("names").where({ id }).del();
}
