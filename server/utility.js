const db = require('../database/index.js');

let getTodos = (callback) => {
  let str = `SELECT todo FROM todos`;

  db.query(str, (err, todos) => {
    if (err) {
      callback(err);
    } else {
      callback(null, todos);
    }
  });
}

let postTodos = (data, callback) => {
  let str = `INSERT INTO todos (todo) VALUES ('${data}')`;
  db.query(str, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
}

module.exports = {
  getTodos,
  postTodos
}