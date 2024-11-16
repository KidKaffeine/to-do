const mongoose = require("mongoose")

const task = mongoose.Schema({
    task: String, 
}, { timestamps: true });

const Task = mongoose.model("Task", task)

module.exports = Task;