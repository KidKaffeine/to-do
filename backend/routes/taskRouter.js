const express = require("express")
const router = express.Router()
const utils = require("../utils/utils")

// Tasks routes

router.get("/getAll", utils.getAllTasks)
router.post("/create", utils.createTask)
router.put("/update/:id", utils.updateTask)
router.delete("/delete/:id", utils.deleteTask)

module.exports = router;