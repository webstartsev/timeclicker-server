const { GraphQLList } = require('graphql');
const taskGraphQLType = require('./../../types/task');
const Task = require('./../../../models/task');

module.exports = {
  type: new GraphQLList(taskGraphQLType),
  args: {},
  resolve() {
    return Task.find({});
  }
};
