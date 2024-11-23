const mongoose = require("mongoose");

const user = mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter an password"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", user);

module.exports = User;
