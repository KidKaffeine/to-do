const Tasks = require("../db/models/tasksModel");
const bcrypt = require("bcrypt");
const User = require("../db/models/userModel");
const jwt = require("jsonwebtoken");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find();

    if (!tasks) {
      res.status(404).json({ message: "Could not get tasks." });
    }

    res.status(200).json({ user: req.user.id });
  } catch (error) {
    console.log(req.err);
    throw new Error({ message: "Could not find tasks." });
  }
};

const createTask = async (req, res) => {
  try {
    if (req.body.task === "") {
      res.status(400).json({ message: "Please add a task." });
    }

    const task = req.body.task;
    const newTask = await Tasks.create({ task: task, user: req.user.id });

    res.status(201).json(newTask);
  } catch (error) {
    console.log(req.err);
    throw new Error({ message: "Could not create tasks." });
  }
};

const updateTask = async (req, res) => {
  try {
    if (req.params.id === "" || req.body.newTask === "") {
      res.status(400).json({ message: "Please update or select a task." });
    }

    const id = req.params.id;
    const taskBody = req.body.newTask;

    if(!req.user) {
        res.status(401)
        throw new Error ("Not authorised.")
    }

    const updatedTask = await Tasks.findOneAndUpdate({
      _id: id,
      task: taskBody,
      user: req.user.id
    });

    res.status(200).json(updatedTask);
  } catch (error) {
    console.log(req.err);
    throw new Error({ message: "Could not update task." });
  }
};

const deleteTask = async (req, res) => {
  try {
    if (req.params.id === "") {
      res.status(400).json({ message: "Please select a task to delete." });
    }

    const id = req.params.id;
    await Tasks.findOneAndDelete({ _id: id });

    res.status(200).json({ message: `Deleted task ${req.params.id}` });
  } catch (error) {
    console.log(req.err);
    throw new Error({ message: "Could not delete task" });
  }
};

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
}

const loginUser = async (req, res) => {
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
}

const getUser = async = (req, res) => {
    res.status(200).json(req.user);
}

const createToken = (id) => {
    return jwt.sign({ id}, process.env.JWT_SECRET, {
      expiresIn: "2d"
    })
  }


module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  registerUser,
  loginUser, 
  getUser
};
