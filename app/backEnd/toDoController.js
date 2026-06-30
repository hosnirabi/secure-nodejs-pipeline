const { response } = require("express");
const ToDo = require("./toDoModule");

const saveMisson = async (req, res) => {
  const { misson } = req.body;

  const todo = await ToDo.create({
    misson,
  });

  res.status(201).json(todo);
};

const getMisson = async (req, res) => {
  const todos = await ToDo.find();
  res.json(todos);
};

module.exports = {
  saveMisson,
  getMisson,
};
