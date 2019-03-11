const { GraphQLString, GraphQLID, GraphQLInt } = require('graphql');
const userGraphQLType = require('./../../types/user');
const User = require('./../../../models/user');

module.exports = {
  type: userGraphQLType,
  args: {
    display_name: { type: GraphQLString },
    login: { type: GraphQLString },
    role: { type: GraphQLString },
    avatar: { type: GraphQLString }
  },
  resolve(parent, args) {
    const newUser = new User({
      display_name: args.display_name,
      login: args.login,
      role: args.role,
      avatar: args.avatar
    });

    return newUser.save();
  }
};
