const { GraphQLString } = require('graphql');
const taskGraphQLType = require('./../../types/task');
const Task = require('./../../../models/task');

module.exports = {
  type: taskGraphQLType,
  args: {
    id: { type: GraphQLString }
  },
  resolve(parent, args) {
    return Task.findById(args.id)
      .exec()
      .then(task => task.remove())
      .then(deletedTask => deletedTask)
      .catch(err => console.log(err));
  }
};
