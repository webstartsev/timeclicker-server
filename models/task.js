const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const TaskSchema = new Schema({
  title: String,
  status: String,
  time: Number,
  deadline: String,
  user: String,
  userCreated: String
});

module.exports = mongoose.model('Task', TaskSchema);
