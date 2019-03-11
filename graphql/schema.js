const { GraphQLSchema } = require('graphql');

const Query = require('./queries');
const Mutations = require('./mutations');

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutations
});
