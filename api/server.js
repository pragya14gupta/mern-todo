const express = require('express');
const mongoose = require('mongoose');
const databaseconnection= require('./connectors/dbconnection');
const cors = require('cors');
const Todo = require('./models/Todo');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/todos', async(req,res)=>{
    const todos = await Todo.find();

    res.json(todos);
});

databaseconnection().then(() => {
    app.listen(3001, () => console.log("Server is running at port 3001"));
  });