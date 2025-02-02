const mongoose = require("mongoose");

const task = mongoose.Schema(
  {
    task: String,
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", task);

module.exports = Task;
