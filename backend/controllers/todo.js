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
  let paramId = req.params.yy;
  console.log(paramId);

  try {
    const todos = await Todo.findOne({ _id: paramId });
    if (!todos) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo fetched successfully", todos });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateTodo = async (req, res) => {
  console.log(req.body);
  let { title, description, isCompleted } = req.body;
  let paraId = req.params.id;
  console.log(title);
  console.log(description);
  console.log(isCompleted);
  console.log(paraId);

  const todo = await Todo.findOneAndUpdate(
    // {match logic},{data},{revalidate}
    { _id: paraId },
    { title: title, description: description, isCompleted: isCompleted },
    { new: true, runValidators: true },
  );
  res.json({ message: "Todo Updated", todo });
};
const deleteTodo = async (req, res) => {
  const paramId = req.params.id;
  const todo = await Todo.findOneAndDelete({ _id: paramId });
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.status(200).json({ message: "Todo deleted successfully", todo });
};
module.exports = {
  CreateTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
