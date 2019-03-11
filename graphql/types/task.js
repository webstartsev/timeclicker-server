const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;

const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    title: { type: GraphQLString },
    status: { type: GraphQLString },
    time: { type: GraphQLInt },
    deadline: { type: GraphQLString },
    user: { type: GraphQLID },
    userCreated: { type: GraphQLID }
  })
});

module.exports = TaskType;
