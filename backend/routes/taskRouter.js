const express = require("express")
const router = express.Router()
const utils = require("../utils/taskUtils")
const private = require("../middleware/authmiddlewre")

router.get("/getAll", private, utils.getAllTasks)
router.post("/create", private, utils.createTask)
router.put("/update/:id", private, utils.updateTask)
router.delete("/delete/:id", private, utils.deleteTask)

module.exports = router;