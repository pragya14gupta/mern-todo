const express = require("express");
const mongoose = require("mongoose");
const databaseconnection = require("./connectors/dbconnection");
const cors = require("cors");
const Todo = require("./models/Todo");
const app = express();

app.use(cors());
app.use(express.json());

app.get('/todos', async (req, res) => {
	const todos = await Todo.find();

	res.json(todos);
});
// app.post("/todo/new", (req, res) => {
//   const todo = new Todo({
//     text: req.body.text,
//   })

//   todo.save();
//   res.json(todo);
// });
app.post('/todo/new', (req, res) => {
	const todo = new Todo({
		text: req.body.text
	})

	todo.save();

	res.json(todo);
});
// app.delete("/todo/delete/:id", async (req, res) => {
//   const result = await Todo.findByIdAndDelete(req.params.id);

//   res.json({result});
// });
app.delete('/todo/delete/:id', async (req, res) => {
	const result = await Todo.findByIdAndDelete(req.params.id);

	res.json({result});
});
// app.get("/todo/complete/:id", async (req, res) => {
//   const todo = await Todo.findById(req.params.id);
//   todo.complete = !todo.complete;
//   todo.save();
//   res.json(todo);
// });

app.get('/todo/complete/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);

	todo.complete = !todo.complete;

	todo.save();

	res.json(todo);
})
// app.put("/todo/update/:id", async (req, res) => {
//   const todo = await Todo.findById(req.params.id);
//   todo.text = req.body.text;
//   todo.save();
//   res.json(todo);
// });
app.put('/todo/update/:id', async (req, res) => {
	const todo = await Todo.findByIdAndUpdate(req.params.id ,{text: req.body.text},{new:true});



	

	res.json(todo);
});
databaseconnection().then(() => {
  app.listen(3001, () => console.log("Server is running at port 3001"));
});
