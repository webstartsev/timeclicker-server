const { GraphQLList } = require('graphql');
const userGraphQLType = require('./../../types/user');
const User = require('./../../../models/user');

module.exports = {
  type: new GraphQLList(userGraphQLType),
  args: {},
  resolve() {
    return User.find({});
  }
};
