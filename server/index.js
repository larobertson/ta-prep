//server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const db = require("../database/index.js");
const utility = require('./utility')
//const path = require("path");

app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, "../dist")));
app.use(express.static(__dirname + "/../dist"));

app.post("/todos", (req, res) => {
  let todos = req.body.payload;
  utility.postTodos(todos, (err, data) => {
    if(err){ 
      console.log('error in app.post', err);
    } else {
      res.send('Post successful!');
    }
  })
});

app.get("/todos", (req, res) => {
  utility.getTodos((err, todos) => {
    if(err){
      console.log('err in app.get', err);
    } else {
      res.send(todos);
    } 
  })
});

app.listen(3030, () => {
  console.log("Server has started and is listening at port 3030");
});
