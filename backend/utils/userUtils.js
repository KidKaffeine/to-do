const bcrypt = require("bcrypt");
const User = require("../db/models/userModel");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
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
  
      const { id } = newUser.id;
      const token = createToken(id);
  
      res.status(201).json({
        _id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        token: token
      });
    } catch (error) {
      res.status(400);
      throw new Error("Couldn't create user.");
    }
  };
  
  const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      console.log(user)
      if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
          _id: user.id,
          username: user.username,
          email: user.email,
          token: createToken(user.id),
        });
      }
    } catch (error) {
      res.status(403);
      throw new Error("Couldn't login user.");
    }
  };
  
  const getUser = (async = (req, res) => {
    res.status(200).json(req.user);
  });
  
  const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
  };
  

  module.exports = {
    registerUser,
    loginUser,
    getUser,
  };