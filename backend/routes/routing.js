const express = require("express")
const router = express.Router()

router.get("/getAll", (req, res) => {
    try {
        res.status(200).json({ message: "Tasks are here" })
    } catch (error) {
        console.log(req.err)
        throw new Error({ message: "Could not find tasks" })
    }
})

router.post("/create", (req, res) => {
    try {
        res.status(201).json({ message: "Task created" })
    } catch (error) {
    }
})

router.put("/update/:id", (req, res) => {
    try {
        console.log(`${req.params.id}`)
        res.status(200).json({ message: "Task updated" })
    } catch (error) {
        console.log(req.err)
        throw new Error({ message: "Could not update task" })
    }
})


router.delete("/delete/:id", (req, res) => {
    try {
        console.log(`${req.params.id}`)
        res.status(200).json({ message: "Task deleted" })
    } catch (error) {
        console.log(req.err)
        throw new Error({ message: "Could not delete task" })
    }
})

module.exports = router;