const { GraphQLString, GraphQLID, GraphQLInt } = require('graphql');
const userGraphQLType = require('./../../types/user');
const User = require('./../../../models/user');

module.exports = {
  type: userGraphQLType,
  args: {
    id: { type: GraphQLString },
    display_name: { type: GraphQLString },
    login: { type: GraphQLString },
    role: { type: GraphQLString },
    avatar: { type: GraphQLString }
  },
  resolve(parent, args) {
    return User.findById(args.id)
      .then(user => {
        for (arg in args) {
          if (args[arg]) {
            user[arg] = args[arg];
          }
        }

        return user.save();
      })
      .then(updatedUser => updatedUser)
      .catch(err => console.log(err));
  }
};
