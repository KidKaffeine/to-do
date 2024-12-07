const Tasks = require("../db/models/tasksModel");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find();

    if (!tasks) {
      res.status(404).json({ message: "Could not get tasks." });
    }

    res.status(200).json({ user: req.user.id });
  } catch (error) {
    console.log(req.err);
    throw new Error({ message: "Could not find tasks." });
  }
};

const createTask = async (req, res) => {
  try {
    if (req.body.task === "") {
      res.status(400).json({ message: "Please add a task." });
    }

    const task = req.body.task;
    const newTask = await Tasks.create({ task: task, user: req.user.id });

    res.status(201).json(newTask);
  } catch (error) {
    console.log(req.err);
    throw new Error({ message: "Could not create tasks." });
  }
};

const updateTask = async (req, res) => {
  try {
    if (req.params.id === "" || req.body.newTask === "") {
      res.status(400).json({ message: "Please update or select a task." });
    }

    const id = req.params.id;
    const taskBody = req.body.newTask;

    if (!req.user) {
      res.status(401);
      throw new Error("Not authorised.");
    }

    const updatedTask = await Tasks.findOneAndUpdate({
      _id: id,
      task: taskBody,
      user: req.user.id,
    });

    res.status(200).json(updatedTask);
  } catch (error) {
    console.log(req.err);
    throw new Error({ message: "Could not update task." });
  }
};

const deleteTask = async (req, res) => {
  try {
    if (req.params.id === "") {
      res.status(400).json({ message: "Please select a task to delete." });
    }

    const id = req.params.id;
    await Tasks.findOneAndDelete({ _id: id });

    res.status(200).json({ message: `Deleted task ${req.params.id}` });
  } catch (error) {
    console.log(req.err);
    throw new Error({ message: "Could not delete task" });
  }
};



module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
