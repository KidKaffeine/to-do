const Tasks = require("../db/models")

const getAllTasks = async (req, res) => {
    try {      
        const tasks = await Tasks.find()
        
        if (!tasks) {
            res.status(404).json({ message: "Could not get tasks." })
        }
        res.status(200).json(tasks)
    } catch (error) {

        console.log(req.err)
        throw new Error({ message: "Could not find tasks." })
    }
}

const createTask = async (req, res) => {
    try {
        if (req.body.task === "") {
            res.status(400).json({ message: "Please add a task." })
        }

        const task = req.body.task
        const newTask = await Tasks.create({ task: task })

        res.status(201).json(newTask)
    } catch (error) {

        console.log(req.err)
        throw new Error({ message: "Could not create tasks." })
    }
}

const updateTask = async (req, res) => {
    try {
        if (req.params.id === "" || req.body.newTask === "") {
            res.status(400).json({ message: "Please update or select a task." })
        }
        
        const id = req.params.id
        const taskBody = req.body.newTask

        const updatedTask = await Tasks.findOneAndUpdate({ _id: id, task: taskBody })

        res.status(200).json(updatedTask)
    } catch (error) {
        console.log(req.err)
        throw new Error({ message: "Could not update task." })
    }
}

const deleteTask = async (req, res) => {
    try {
        if (req.params.id === "") {
            res.status(400).json({ message: "Please select a task to delete." })
        }

        const id = req.params.id
        await Tasks.findOneAndDelete({ _id: id })

        res.status(200).json({ message: `Deleted task ${req.params._id}` })
    } catch (error) {
        console.log(req.err)
        throw new Error({ message: "Could not delete task" })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask

}