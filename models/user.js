const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const UserSchema = new Schema({
  display_name: String,
  login: String,
  role: String,
  avatar: String
});

module.exports = mongoose.model('User', UserSchema);
