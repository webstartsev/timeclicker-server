const { GraphQLString, GraphQLID } = require('graphql');
const userGraphQLType = require('./../../types/user');
const User = require('./../../../models/user');

module.exports = {
  type: userGraphQLType,
  args: {
    id: { type: GraphQLID }
  },
  resolve(parent, args) {
    return User.findById(args.id)
      .exec()
      .then(user => user.remove())
      .then(deletedUser => deletedUser)
      .catch(err => console.log(err));
  }
};
