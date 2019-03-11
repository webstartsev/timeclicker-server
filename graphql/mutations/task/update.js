const { GraphQLString, GraphQLID, GraphQLInt } = require('graphql');
const taskGraphQLType = require('./../../types/task');
const Task = require('./../../../models/task');

module.exports = {
  type: taskGraphQLType,
  args: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    status: { type: GraphQLString },
    time: { type: GraphQLInt },
    deadline: { type: GraphQLInt },
    user: { type: GraphQLString },
    userCreated: { type: GraphQLID }
  },
  resolve(parent, args) {
    return Task.findById(args.id)
      .then(task => {
        for (arg in args) {
          if (args[arg]) {
            task[arg] = args[arg];
          }
        }

        return task.save();
      })
      .then(updatedTask => updatedTask)
      .catch(err => console.log(err));
  }
};
