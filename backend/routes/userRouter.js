const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const User = require("../db/models/userModel");

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      res.status(400).json("Email already in use.");
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    const newUser = await User.create({ username, email, hashedPass });

    res.status(201).json({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    });
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't create user.");
  }
});

router.post("/login", (req, res) => {
  res.status(200).json({ message: "Login route" });
});

router.get("/user", (req, res) => {
  res.status(200).json({ message: "Getting user route" });
});
module.exports = router;
