const { GraphQLString } = require('graphql');
const userGraphQLType = require('./../../types/user');
const User = require('./../../../models/user');

module.exports = {
  type: userGraphQLType,
  args: { id: { type: GraphQLString } },
  resolve(parent, args) {
    return User.findById(args.id);
  }
};
