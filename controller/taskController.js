const Task = require("../models/tasks");

const createTask = async (req, res) => {
  console.log(req.body);
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}).populate("assignedTo", "username");
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    Object.keys(req.body).forEach((key) => (task[key] = req.body[key]));
    await task.save();
    res.send(task);
  } catch (error) {
    res.status(400).send();
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};