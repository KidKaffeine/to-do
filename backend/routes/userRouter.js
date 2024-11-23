const express = require("express");
const router = express.Router();
const utils = require("../utils/utils")
const private = require("../middleware/authmiddlewre")

router.post("/register", utils.registerUser );
router.post("/login", utils.loginUser);
router.get("/user", private, utils.getUser);


module.exports = router;
