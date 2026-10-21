const express = require("express");
const {
  CreateTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("../../controllers/todo");
const verifyUser = require("../../middleware/verifyuser");
const todoRoute = express.Router();

todoRoute.post("/",verifyUser, CreateTodo);
todoRoute.get("/",verifyUser, getAllTodos);
todoRoute.get("/:yy", verifyUser, getTodoById);
//get  /todo/:id
todoRoute.put("/:id",verifyUser, updateTodo);
// update  /todo/:id
todoRoute.delete("/:id", verifyUser,deleteTodo);
// delete  /todo/:id

module.exports = todoRoute;
