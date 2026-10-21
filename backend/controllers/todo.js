const Todo = require("../models/todo");

const CreateTodo = async (req, res) => {
  console.log(req.body);

  const { title, description, isCompleted } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Title are required" });
  }
  if (!description) {
    return res.status(400).json({ message: "Description are required" });
  }

  const todo = await Todo.create({
    title,
    description,
    isCompleted,
  });
  res.status(201).json({ message: "Todo created successfully", todo });
};

const getAllTodos = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json({ message: "Todos fetched successfully", todos });
};

const getTodoById = async (req, res) => {
  let paramId = req.params.id;
  console.log(paramId);

  const todos = await Todo.findOne({ _id: paramId });
  if (!todos) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.status(200).json({ message: "Todo fetched successfully", todos });
};
const updateTodo = async (req, res) => {};
const deleteTodo = async (req, res) => {};
module.exports = {
  CreateTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
