const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../db/models/userModel");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      res.status(400).json("Email already in use.");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPass,
    });

    res.status(201).json({
      _id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      token: createToken(newUser.id)
    });

  } catch (error) {
    res.status(400);
    throw new Error("Couldn't create user.");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: createToken(user.id),
      });
    }

  } catch (error) {
    res.status(403);
    throw new Error("Couldn't login user.");
  }
});

router.get("/user", (req, res) => {
  res.status(200).json({ message: "Getting user route" });
});

const createToken = (id) => {
  return jwt.sign({ id}, process.env.JWT_SECRET, {
    expiresIn: "2d"
  })
}

module.exports = router;
