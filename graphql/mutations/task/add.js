const { GraphQLString, GraphQLID, GraphQLInt } = require('graphql');
const taskGraphQLType = require('./../../types/task');
const Task = require('./../../../models/task');

module.exports = {
  type: taskGraphQLType,
  args: {
    title: { type: GraphQLString },
    status: { type: GraphQLString },
    time: { type: GraphQLInt },
    deadline: { type: GraphQLInt },
    user: { type: GraphQLID },
    userCreated: { type: GraphQLID }
  },
  resolve(parent, args) {
    const newTask = new Task({
      title: args.title,
      deadline: args.deadline,
      user: args.user
    });

    return newTask.save();
  }
};
