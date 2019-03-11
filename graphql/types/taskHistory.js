const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const TaskHistoryType = new GraphQLObjectType({
  name: 'TaskHistory',
  fields: () => ({
    dateBegin: { type: GraphQLString },
    dateEnd: { type: GraphQLString },
    user: { type: GraphQLID }
  })
});

module.exports = TaskHistoryType;
