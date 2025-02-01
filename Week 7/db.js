const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId;
// schema the database

const Schema = mongoose.Schema;

const User = new Schema({
  email: String,
  password: String,
  name: String,
});

const Todo = new Schema({
  title: String,
  done: Boolean,
  userId: ObjectId,
});
