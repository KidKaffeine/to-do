const express = require("express")
const router = express.Router()
const Tasks = require("../db/models")

router.get("/getAll", async (req, res) => {
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
})

router.post("/create", async (req, res) => {
    try {
        const newTask = await Tasks.create({ task: req.body.task })

        if (!req.body.task) {
            res.status(400).json({ message: "Please add a task." })
        }

        res.status(201).json(newTask)
    } catch (error) {
        console.log(req.err)
        throw new Error({ message: "Could not create tasks." })
    }
})

router.put("/update/:_id", async (req, res) => {
    try {
        if (!req.params._id || !req.body.newTask) {
            res.status(400).json({ message: "Please update or select a task." })
        }

        const updatedTask = await Tasks.findOneAndUpdate({ _id: req.params._id, task: req.body.newTask })

        res.status(200).json(updatedTask)
    } catch (error) {
        console.log(req.err)
        throw new Error({ message: "Could not update task." })
    }
})

router.delete("/delete/:_id", async (req, res) => {
    try {
        if (!req.params._id) {
            res.status(400).json({ message: "Please select a task to delete." })
        }

        await Tasks.findOneAndDelete({ _id: req.params._id })

        res.status(200).json({ message: `Deleted task ${req.params._id}` })
    } catch (error) {
        console.log(req.err)
        throw new Error({ message: "Could not delete task" })
    }
})

module.exports = router;