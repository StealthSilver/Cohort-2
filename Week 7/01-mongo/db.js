const mongoose = require("mongoose");

// data-base schemas

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const TodoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  done: { type: Boolean, default: false },
});

// data-base models

const UserModel = mongoose.model("users", UserSchema);
const TodoModel = mongoose.model("todos", TodoSchema);

module.exports = { UserModel, TodoModel };
