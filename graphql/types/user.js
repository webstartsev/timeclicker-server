const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    display_name: { type: GraphQLString },
    login: { type: GraphQLString },
    role: { type: GraphQLString },
    avatar: { type: GraphQLString }
  })
});

module.exports = UserType;
