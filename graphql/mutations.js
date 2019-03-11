const { GraphQLObjectType, GraphQLString } = require('graphql');

// Task
const TaskAdd = require('./mutations/task/add');
const TaskUpdate = require('./mutations/task/update');
const TaskRemove = require('./mutations/task/remove');

// User
const UserAdd = require('./mutations/user/add');
const UserUpdate = require('./mutations/user/update');
const UserRemove = require('./mutations/user/remove');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    TaskAdd,
    TaskUpdate,
    TaskRemove,

    UserAdd,
    UserUpdate,
    UserRemove
  }
});

module.exports = Mutation;
