const { GraphQLString } = require('graphql');
const taskGraphQLType = require('./../../types/task');
const Task = require('./../../../models/task');

module.exports = {
  type: taskGraphQLType,
  args: { id: { type: GraphQLString } },
  resolve(parent, args) {
    return Task.findById(args.id);
  }
};
