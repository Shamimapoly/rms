const express = require("express");
const { CreateTodo, getAllTodos, getTodoById, updateTodo, deleteTodo } = require("../../controllers/todo");
const todoRoute = express.Router();

todoRoute.post("/", CreateTodo);
todoRoute.get("/", getAllTodos);
todoRoute.get("/:id", getTodoById);
//get  /todo/:id
todoRoute.put("/:id", updateTodo);
// update  /todo/:id
todoRoute.delete("/:id", deleteTodo);
// delete  /todo/:id

module.exports = todoRoute;
